import { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipboardList, Eye, X, Calendar, Clock, AlertCircle, CheckCircle, Leaf, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedScan, setSelectedScan] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/history/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setHistory(response.data);
      } catch (err) {
        console.error("Failed to fetch history", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Clock size={14} /> Diagnostic Records
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Scan History
            </h1>
          </div>

          <Link
            to="/detect"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md transition"
          >
            + Scan New Leaf
          </Link>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-500">Loading your scan records...</p>
          </div>
        ) : history.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-3xl shadow-sm border border-gray-200">
            <Sprout size={56} className="mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Previous Scans</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              You haven't scanned any tomato or maize leaves yet. Capture your first leaf to build your diagnostic history.
            </p>
            <Link 
              to="/detect" 
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow"
            >
              Start First Scan
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">
                    <th className="p-4 sm:px-6">Date & Time</th>
                    <th className="p-4 sm:px-6">Crop</th>
                    <th className="p-4 sm:px-6">Detected Disease</th>
                    <th className="p-4 sm:px-6">AI Confidence</th>
                    <th className="p-4 sm:px-6">Severity</th>
                    <th className="p-4 sm:px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {history.map((item) => {
                    const scanDate = new Date(item.date);
                    const isHealthy = item.disease.toLowerCase().includes('healthy');
                    return (
                      <tr key={item.id} className="hover:bg-gray-50/70 transition">
                        
                        {/* Date & Time */}
                        <td className="p-4 sm:px-6 text-gray-700 font-medium">
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-900">{scanDate.toLocaleDateString()}</span>
                            <span className="text-xs text-gray-400">{scanDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </td>

                        {/* Crop */}
                        <td className="p-4 sm:px-6">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black uppercase ${
                            item.crop === 'Tomato' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {item.crop === 'Tomato' ? '🍅' : '🌽'} {item.crop}
                          </span>
                        </td>

                        {/* Disease */}
                        <td className="p-4 sm:px-6">
                          <span className={`font-bold ${isHealthy ? 'text-green-700' : 'text-gray-900'}`}>
                            {item.disease}
                          </span>
                          {item.voice_description && (
                            <span className="block text-[11px] text-gray-400 italic truncate max-w-xs">
                              🎤 {item.voice_description}
                            </span>
                          )}
                        </td>

                        {/* Confidence */}
                        <td className="p-4 sm:px-6">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800">
                              {(item.confidence * 100).toFixed(1)}%
                            </span>
                            <div className="w-16 bg-gray-200 rounded-full h-1.5 hidden sm:block">
                              <div 
                                className="bg-green-600 h-1.5 rounded-full" 
                                style={{ width: `${item.confidence * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>

                        {/* Severity */}
                        <td className="p-4 sm:px-6">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                            item.severity === 'Severe' ? 'bg-red-100 text-red-700' :
                            item.severity === 'Moderate' ? 'bg-orange-100 text-orange-700' :
                            item.severity === 'Mild' ? 'bg-amber-100 text-amber-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.severity || 'Standard'}
                          </span>
                        </td>

                        {/* View Button */}
                        <td className="p-4 sm:px-6 text-right">
                          <button
                            onClick={() => setSelectedScan(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 text-xs font-bold rounded-lg border border-green-200 transition"
                          >
                            <Eye size={14} /> View
                          </button>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Historical Record Modal (Requirement 16) */}
      {selectedScan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            <button 
              onClick={() => setSelectedScan(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">
                Historical Diagnostic Record
              </span>
              <span className="text-xs text-gray-500">
                {new Date(selectedScan.date).toLocaleString()}
              </span>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-1">
              {selectedScan.disease}
            </h3>
            <p className="text-xs font-bold text-gray-500 uppercase mb-4">
              Crop: {selectedScan.crop}
            </p>

            {/* Thumbnail if stored */}
            {selectedScan.image_url && (
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4 border">
                <img src={selectedScan.image_url} alt="Scanned leaf" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3 text-xs sm:text-sm mb-6">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500 font-medium">AI Confidence:</span>
                <span className="font-bold text-green-700">{(selectedScan.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500 font-medium">Estimated Severity:</span>
                <span className="font-bold text-gray-800">{selectedScan.severity || 'N/A'}</span>
              </div>
              {selectedScan.voice_description && (
                <div className="border-b pb-2">
                  <span className="text-gray-500 font-medium block mb-0.5">Recorded Voice Symptom:</span>
                  <span className="text-gray-800 italic">"{selectedScan.voice_description}"</span>
                </div>
              )}
              <div>
                <span className="text-gray-500 font-medium block mb-1">Guidance Summary:</span>
                <p className="text-gray-700 leading-relaxed">
                  Refer to the Disease Library or run a fresh scan to see the latest full 1000+ fertilizer knowledge-base recommendations.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedScan(null)}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default History;
