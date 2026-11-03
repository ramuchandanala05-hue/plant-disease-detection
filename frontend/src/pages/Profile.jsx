import { useState, useEffect } from 'react';
import axios from 'axios';
import { User, LogOut, Edit2, Check, X, Shield, Clock, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [historyCount, setHistoryCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('');
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userRes = await axios.get('http://localhost:8000/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setUser(userRes.data);
        setFullName(userRes.data.full_name);
        
        const historyRes = await axios.get('http://localhost:8000/history/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setHistoryCount(historyRes.data.length);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfileData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setSaving(true);
    setStatusMsg({ type: '', text: '' });

    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:8000/auth/profile', 
        { full_name: fullName.trim() },
        { headers: { 'Authorization': `Bearer ${token}` } }
      );
      setUser(res.data);
      setIsEditing(false);
      setStatusMsg({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      console.error("Failed to update profile", err);
      setStatusMsg({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <User size={14} /> Account Settings
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            User Profile
          </h1>
        </div>

        {statusMsg.text && (
          <div className={`p-4 rounded-2xl mb-6 text-sm font-semibold flex items-center justify-between ${
            statusMsg.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <span>{statusMsg.text}</span>
            <button onClick={() => setStatusMsg({ type: '', text: '' })}><X size={16} /></button>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 flex flex-col items-center">
          
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="w-28 h-28 bg-gradient-to-tr from-green-600 to-emerald-400 text-white rounded-full flex items-center justify-center text-5xl font-black shadow-lg">
              {user.full_name ? user.full_name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow border text-green-700">
              <Sprout size={16} />
            </div>
          </div>

          {/* User Details & Edit Form */}
          {!isEditing ? (
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-2xl font-black text-gray-900">{user.full_name}</h2>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-gray-400 hover:text-green-700 p-1 rounded-lg transition"
                  title="Edit name"
                >
                  <Edit2 size={16} />
                </button>
              </div>
              <p className="text-sm text-gray-500 font-medium mt-0.5">{user.email}</p>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="w-full max-w-sm mb-8 space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-600 focus:outline-none"
                  required
                />
              </div>
              <div className="flex gap-2 justify-center">
                <button 
                  type="button"
                  onClick={() => { setIsEditing(false); setFullName(user.full_name); }}
                  className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={saving}
                  className="px-4 py-1.5 bg-green-600 text-white rounded-xl text-xs font-bold hover:bg-green-700 shadow"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          )}

          {/* Scan Statistics */}
          <div className="grid grid-cols-2 w-full gap-4 mb-8 max-w-md">
            <div className="bg-green-50/60 p-5 rounded-2xl text-center border border-green-100">
              <h3 className="text-3xl font-black text-green-700 mb-1">{historyCount}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-green-900">Total Scans</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center border border-gray-100 flex flex-col justify-center items-center">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Crops Active</p>
              <p className="font-extrabold text-gray-800 text-base">🍅 Tomato & 🌽 Maize</p>
            </div>
          </div>

          {/* Logout Action */}
          <div className="w-full max-w-md pt-4 border-t border-gray-100">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl font-bold text-sm transition"
            >
              <LogOut size={18} />
              Logout from Account
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
