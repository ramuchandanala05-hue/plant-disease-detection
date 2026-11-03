import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Camera, 
  Upload, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Database, 
  Mic, 
  Eye, 
  Layers, 
  HelpCircle 
} from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-green-50/80 via-white to-gray-50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-800 border border-green-200 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                <Sprout size={18} className="text-green-700" />
                <span>Plant Disease Detection using Multimodel AI</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
                AI-powered Tomato and Maize <span className="text-green-600">Disease Detection</span> System
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Upload or capture a tomato or maize leaf image and use AI to identify possible plant diseases and receive disease-management guidance.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Link 
                  to="/register" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-green-600/20 hover:shadow-xl transition flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/login" 
                  className="bg-white text-green-700 border-2 border-green-600 hover:bg-green-50 px-8 py-3.5 rounded-xl font-bold text-lg shadow-sm transition"
                >
                  Login
                </Link>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle size={16} className="text-green-600" /> Free to use
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle size={16} className="text-green-600" /> Mobile & Desktop ready
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle size={16} className="text-green-600" /> 14 Certified Classes
                </span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-6 sm:p-8 space-y-6">
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2.5 rounded-xl">
                        <Activity className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Live AI Diagnostics</h4>
                        <p className="text-xs text-gray-500">Instant Tomato & Maize Verification</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                      Ready
                    </span>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1592494804071-faea15d93a8a?q=80&w=800&auto=format&fit=crop" 
                      alt="Plant inspection" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                      <Eye size={14} className="text-green-400" /> Grad-CAM Focus Active
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50/70 p-3.5 rounded-xl border border-green-100">
                      <p className="text-xs text-gray-500 font-medium">Confidence Score</p>
                      <p className="text-xl font-black text-green-700">96.8%</p>
                    </div>
                    <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100">
                      <p className="text-xs text-gray-500 font-medium">Severity Estimate</p>
                      <p className="text-xl font-black text-emerald-800">Mild</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Supported Crops Section (STRICTLY Tomato and Maize) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Crop Scope
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Supported Crops</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10 text-base">
            This platform is strictly trained and calibrated for two vital agricultural staples. Do NOT submit images of any other crops.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Tomato Card */}
            <div className="bg-red-50/40 border-2 border-red-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="text-7xl mb-4 transform hover:scale-110 transition duration-200">🍅</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Tomato</h3>
              <p className="text-sm text-gray-600 mb-4">
                10 detectable classes including Early Blight, Late Blight, Bacterial Spot, Septoria, Spider Mites, and Mosaic Viruses.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-800 bg-red-100 px-3 py-1 rounded-full">
                10 Classes Trained
              </span>
            </div>

            {/* Maize Card */}
            <div className="bg-amber-50/40 border-2 border-amber-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="text-7xl mb-4 transform hover:scale-110 transition duration-200">🌽</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Maize</h3>
              <p className="text-sm text-gray-600 mb-4">
                4 detectable classes including Common Rust, Northern Leaf Blight, Gray Leaf Spot, and Healthy Maize.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                4 Classes Trained
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual 5-Step Process Flow (Requirement 20) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Diagnostic Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-base">
              The automated decision flow from field capture to recovery guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">Select Crop</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Choose Tomato or Maize to load the matching neural network sub-pipeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">Capture / Upload</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Snap a clear leaf picture using your camera or upload a JPG/PNG. Add voice symptoms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">AI Analysis</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Multi-model vision network extracts lesion patterns, color gradients, and textures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">Disease Detection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Instant classification with confidence percentage, top probabilities, and severity level.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                5
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">Guidance & Recovery</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Personalized prevention steps and dynamic fertilizer recommendations from our 1000+ DB.
              </p>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-1.5 text-green-700 font-bold hover:text-green-800 text-sm">
              Read complete step-by-step documentation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Platform Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Designed for Farmers, Researchers & Students
            </h2>
            <p className="text-gray-600 text-base">
              A comprehensive toolkit built for reliable decision support in modern agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center text-green-700 mb-6">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Camera Capture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct camera integration works seamlessly on Android, iOS, tablets, and desktop webcams for fast field scouting.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                <Mic size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingual Voice Input</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Describe visible field conditions using Web Speech recognition in English, Telugu, or Hindi to augment AI diagnosis.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center text-purple-700 mb-6">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1,000+ Record Fertilizer DB</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dynamic lookup maps diseases and severity levels to verified NPK blends, biofertilizers, and micronutrient dosages.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center text-orange-700 mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Explainable AI (Grad-CAM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Toggle AI Focus Area heatmaps to inspect exactly which leaf lesions and anatomical regions drove the neural network's decision.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center text-emerald-700 mb-6">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">14-Class Disease Library</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete educational reference with high-resolution visual cards, symptoms, and non-toxic agricultural management tips.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition">
              <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center text-red-700 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scan History & Reports</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Logged-in users retain historical scans with full diagnostics, date stamps, and one-click printable agricultural report summaries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. About Project Section (Requirement 2) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4">
              <div className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                About The Project
              </div>
              <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                Built to Protect Crop Yields & Agricultural Livelihoods
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Plant Disease Detection using Multimodel AI is created to give growers rapid, accurate, and scientifically validated disease detection right in their fields. By prioritizing non-hazardous cultural practices, timely biological management, and certified nutrition, we help farmers minimize losses and cultivate healthier crops.
              </p>
              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800">
                  Read full project documentation & methodology <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-72 bg-green-50 rounded-2xl p-6 border border-green-200 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow">
                <Sprout size={36} />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Start Scouting Now</h4>
              <p className="text-xs text-gray-600 mb-4">No special hardware needed — works on any smartphone camera.</p>
              <Link to="/register" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl text-sm transition">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer (Requirement 2) */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6 text-green-500" />
                <span className="text-lg font-bold text-white">Plant Disease Detection using Multimodel AI</span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                AI-powered Tomato and Maize Disease Detection System. Dedicated agricultural computer vision and decision support for farmers, students, and agronomists.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About Project</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link to="/disease-library" className="hover:text-white transition">Disease Library</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Account</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
                <li><Link to="/register" className="hover:text-white transition">Create Account</Link></li>
                <li><Link to="/detect" className="hover:text-white transition">Detect Disease</Link></li>
                <li><Link to="/history" className="hover:text-white transition">Scan History</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Plant Disease Detection using Multimodel AI. All rights reserved.</p>
            <p className="italic">Exclusively calibrated for Tomato (🍅) & Maize (🌽) crops.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
