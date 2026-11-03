import { Sprout, Camera, Cpu, Activity, ShieldCheck, ArrowDown, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Select Crop",
      subtitle: "Dedicated Tomato & Maize Focus",
      desc: "Choose between Tomato (🍅) or Maize (🌽). Our AI architecture has specialized pipelines fine-tuned exclusively for the specific foliar anatomy and pathogens of these two vital crops.",
      icon: <Sprout size={32} className="text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      step: 2,
      title: "Capture or Upload Leaf Image",
      subtitle: "High-Resolution Image + Optional Voice",
      desc: "Use your smartphone/webcam directly with the 'Open Camera' button, or upload an existing JPG/PNG leaf photo. You can also record a voice description of the symptoms in English, Telugu, or Hindi.",
      icon: <Camera size={32} className="text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      step: 3,
      title: "Image Preprocessing & AI Analysis",
      subtitle: "Multi-Model Deep Learning Pipeline",
      desc: "The image is normalized, checked for botanical leaf fidelity, and passed through our deep neural network to compute activation maps and disease classification probabilities.",
      icon: <Cpu size={32} className="text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      step: 4,
      title: "Disease Detection & Severity Scoring",
      subtitle: "Confidence Percentage & Grad-CAM Focus",
      desc: "Receive the diagnosed pathology along with an exact AI confidence score (e.g. 94.5%), secondary predictions, and estimated severity (Healthy, Mild, Moderate, or Severe).",
      icon: <Activity size={32} className="text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      step: 5,
      title: "Treatment, Prevention & Nutrient Guidance",
      subtitle: "Dynamic 1000+ Record Fertilizer Knowledge Base",
      desc: "Get safe, practical management strategies, prevention measures, and targeted fertilizer dosage recommendations from our dynamic agricultural database.",
      icon: <ShieldCheck size={32} className="text-emerald-600" />,
      color: "bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Leaf size={18} /> Diagnostic Workflow
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From leaf inspection to targeted agronomic treatment in five simple steps.
          </p>
        </div>

        {/* Vertical Flow Timeline */}
        <div className="relative">
          <div className="space-y-8">
            {steps.map((s, idx) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className={`w-full max-w-3xl bg-white rounded-2xl border ${s.color} p-6 sm:p-8 shadow-sm transition hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6`}>
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100">
                    {s.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-green-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Step {s.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-sm font-semibold text-green-700 mb-2">{s.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{s.desc}</p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="my-2 flex flex-col items-center text-green-600">
                    <ArrowDown size={28} className="animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-green-800 shadow-lg transition"
          >
            Start Analyzing Leaf Images
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;
