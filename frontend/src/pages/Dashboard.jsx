import { Link } from 'react-router-dom';
import { Camera, FileText, User, Sprout, BookOpen, Clock, ArrowRight } from 'lucide-react';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-12 translate-y-12">
          <Sprout size={320} />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-100">
            <Sprout size={16} /> Farmer & Agronomist Dashboard
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Welcome to Plant Disease Detection
          </h1>
          
          <p className="text-green-100 text-base sm:text-lg">
            Detect tomato and maize diseases using AI.
          </p>

          <div className="pt-4">
            <Link 
              to="/detect" 
              className="inline-flex items-center gap-3 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
            >
              <Camera size={26} className="text-green-700" />
              <span>Start Disease Detection</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        
        <Link 
          to="/detect" 
          className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition group flex flex-col justify-between"
        >
          <div>
            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-green-700 group-hover:scale-105 transition">
              <Camera size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">New Scan</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Capture or upload a leaf image of Tomato or Maize for instant AI analysis.
            </p>
          </div>
          <span className="text-sm font-bold text-green-700 flex items-center gap-1 group-hover:gap-2 transition-all">
            Launch Camera <ArrowRight size={16} />
          </span>
        </Link>

        <Link 
          to="/history" 
          className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition group flex flex-col justify-between"
        >
          <div>
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-blue-700 group-hover:scale-105 transition">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Scan History</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Review all past crop diagnoses, confidence records, and generated treatment guidelines.
            </p>
          </div>
          <span className="text-sm font-bold text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
            View Records <ArrowRight size={16} />
          </span>
        </Link>

        <Link 
          to="/disease-library" 
          className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition group flex flex-col justify-between"
        >
          <div>
            <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-purple-700 group-hover:scale-105 transition">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Disease Library</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Browse reference pictures, symptoms, and organic prevention for all 14 supported conditions.
            </p>
          </div>
          <span className="text-sm font-bold text-purple-700 flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore Library <ArrowRight size={16} />
          </span>
        </Link>

      </div>

      {/* Supported Crops Quick Reference */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Diagnostic Coverage</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100">
            <span className="text-4xl">🍅</span>
            <div>
              <h4 className="font-bold text-gray-900">Tomato Crop Pipeline</h4>
              <p className="text-xs text-gray-500">10 certified fungal, bacterial, viral & mite conditions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
            <span className="text-4xl">🌽</span>
            <div>
              <h4 className="font-bold text-gray-900">Maize Crop Pipeline</h4>
              <p className="text-xs text-gray-500">4 certified rust, blight, and leaf spot conditions</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
