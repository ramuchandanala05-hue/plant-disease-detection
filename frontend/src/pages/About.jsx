import { Sprout, CheckCircle, ShieldCheck, Cpu, Database, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sprout size={18} /> About the Initiative
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Plant Disease Detection using Multimodel AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An advanced agricultural diagnostic platform empowering farmers, researchers, and students with real-time AI disease diagnosis for Tomato and Maize crops.
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Crop diseases cause an estimated 20% to 40% loss in global agricultural production annually. For smallholder farmers and agricultural communities, timely and accurate diagnosis of plant pathologies is essential to prevent catastrophic harvest loss, avoid misapplication of agrochemicals, and preserve food security.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            This platform harnesses modern computer vision and multimodal intelligence to bridge the gap between complex agronomic science and on-the-ground farming. By combining leaf imagery with optional voice symptom descriptions, our system provides precise diagnosis and actionable, non-toxic management guidelines.
          </p>
        </div>

        {/* Scope of Detection */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">Crop Focus & Disease Scope</h2>
          </div>
          <p className="text-gray-700 mb-8">
            To ensure high diagnostic reliability and avoid false generalizations, our platform is strictly calibrated for <strong className="text-gray-900">Tomato</strong> and <strong className="text-gray-900">Maize</strong> crops. We only report diagnoses for diseases present within our verified training and pathology validation benchmarks.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/50 border border-red-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍅</span>
                <h3 className="text-xl font-bold text-red-950">Tomato Classes (10 Classes)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600 shrink-0"/> Healthy Tomato</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Bacterial Spot (Xanthomonas)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Early Blight (Alternaria solani)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Late Blight (Phytophthora infestans)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Leaf Mold (Passalora fulva)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Septoria Leaf Spot</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Spider Mites (Tetranychus urticae)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Target Spot (Corynespora cassiicola)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Mosaic Virus (ToMV)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-red-500 shrink-0"/> Tomato Yellow Leaf Curl Virus (TYLCV)</li>
              </ul>
            </div>

            <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌽</span>
                <h3 className="text-xl font-bold text-amber-950">Maize Classes (4 Classes)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600 shrink-0"/> Healthy Maize</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-amber-600 shrink-0"/> Maize Common Rust (Puccinia sorghi)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-amber-600 shrink-0"/> Maize Northern Leaf Blight (Exserohilum turcicum)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-amber-600 shrink-0"/> Maize Gray Leaf Spot (Cercospora zeae-maydis)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI & Architectural Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="bg-green-100 text-green-700 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multimodal Intelligence</h3>
            <p className="text-gray-600 text-sm">
              Combines high-resolution convolutional feature maps with optional farmer voice notes in local languages (English, Telugu, Hindi).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="bg-blue-100 text-blue-700 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fertilizer Knowledge Base</h3>
            <p className="text-gray-600 text-sm">
              Integrated with over 1,000 verified agricultural recommendation records dynamically matched by crop, pathology, and disease severity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="bg-emerald-100 text-emerald-700 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Stewardship</h3>
            <p className="text-gray-600 text-sm">
              Prioritizes cultural and biological management, soil testing, and balanced nutrition rather than indiscriminate pesticide application.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl text-white p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to examine your crops?</h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8">
            Experience real-time AI diagnosis with camera capture, voice symptom recording, and personalized nutrient guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-green-800 font-bold px-8 py-3 rounded-xl hover:bg-green-50 shadow transition">
              Get Started Free
            </Link>
            <Link to="/disease-library" className="bg-green-900/60 text-white border border-green-400 font-bold px-8 py-3 rounded-xl hover:bg-green-900 transition">
              Explore Disease Library
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
