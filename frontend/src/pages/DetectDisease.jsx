import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Camera, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Mic, 
  Square, 
  Trash2, 
  RefreshCw, 
  Sprout, 
  X,
  Volume2
} from 'lucide-react';

function DetectDisease() {
  const [crop, setCrop] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Voice feature states
  const [voiceDescription, setVoiceDescription] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [language, setLanguage] = useState('en-US'); // Default English

  // Camera modal state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  // Initialize Speech Recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }
        if (finalTranscript) {
          setVoiceDescription((prev) => (prev ? `${prev} ${finalTranscript.trim()}` : finalTranscript.trim()));
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        if (event.error !== 'no-speech') {
          setError(`Microphone error: ${event.error}`);
          setIsRecording(false);
        }
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    return () => {
      if (recognitionRef.current && isRecording) {
        recognitionRef.current.stop();
      }
      stopCameraStream();
    };
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language;
    }
  }, [language]);

  const startRecording = () => {
    if (!recognitionRef.current) {
      setError("Speech recognition is not supported in this browser. You can type symptoms manually below.");
      return;
    }
    setError('');
    setIsRecording(true);
    try {
      recognitionRef.current.start();
    } catch (e) {
      console.warn("Recognition already started or error:", e);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const clearVoiceDescription = () => {
    setVoiceDescription('');
  };

  const handleCropSelect = (selectedCrop) => {
    setCrop(selectedCrop);
    setError('');
  };

  const validateAndSetFile = (file) => {
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setError('Unsupported file type. Please upload a JPG, JPEG, or PNG leaf image.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError('File size too large. Please select an image smaller than 15MB.');
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  // Live Camera (Webcam or Mobile)
  const openLiveCamera = async () => {
    setError('');
    // On mobile devices, file input with capture="environment" is usually preferred
    if (/Mobi|Android/i.test(navigator.userAgent) && cameraInputRef.current) {
      cameraInputRef.current.click();
      return;
    }

    // On desktop / webcam supported browsers, launch inline webcam modal
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        streamRef.current = stream;
        setIsCameraActive(true);
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        }, 100);
      } catch (err) {
        console.warn("Could not access video stream, falling back to camera input:", err);
        if (cameraInputRef.current) {
          cameraInputRef.current.click();
        } else {
          setError("Unable to access camera. Please allow camera permissions or upload an image.");
        }
      }
    } else if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const capturePhotoFromStream = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        const capturedFile = new File([blob], `leaf_capture_${Date.now()}.jpg`, { type: 'image/jpeg' });
        validateAndSetFile(capturedFile);
        stopCameraStream();
      }
    }, 'image/jpeg', 0.95);
  };

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const handleRetake = () => {
    setImage(null);
    setPreview(null);
    setError('');
  };

  const handleAnalyze = async () => {
    // Requirement 7: Validation
    if (!crop) {
      setError('Please select either Tomato or Maize first.');
      return;
    }
    if (!['Tomato', 'Maize'].includes(crop)) {
      setError('Unsupported crop. Only Tomato and Maize are supported.');
      return;
    }
    if (!image) {
      setError('Please provide a leaf image to begin analysis.');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('crop', crop);
    formData.append('image', image);
    if (voiceDescription.trim()) {
      formData.append('voiceDescription', voiceDescription.trim());
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      navigate('/result', { state: { result: response.data, imagePreview: preview } });
    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.response?.data?.detail || 'An error occurred during AI analysis. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout size={16} /> Diagnostic Console
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Disease Detection
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select your crop, capture or upload a leaf photo, and let our multi-model AI diagnose pathology.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-2xl mb-8 flex items-center gap-3 shadow-sm animate-fade-in">
            <AlertCircle size={22} className="shrink-0 text-red-600" />
            <span className="text-sm font-semibold">{error}</span>
          </div>
        )}

        {/* STEP 1: Crop Selection (STRICTLY Tomato and Maize) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm">
                1
              </span>
              <h2 className="text-xl font-bold text-gray-900">Select Crop</h2>
            </div>
            <span className="text-xs text-gray-500 font-semibold">Strictly Tomato & Maize</span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
            {/* Tomato Card */}
            <div 
              onClick={() => handleCropSelect('Tomato')}
              className={`cursor-pointer rounded-2xl p-6 text-center border-2 transition-all ${
                crop === 'Tomato' 
                  ? 'border-green-600 bg-green-50/80 shadow-md transform scale-[1.02]' 
                  : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-6xl mb-3">🍅</div>
              <h3 className="font-extrabold text-gray-900 text-lg">Tomato</h3>
              <p className="text-xs text-gray-500 mt-1">10 detectable diseases</p>
              {crop === 'Tomato' && (
                <CheckCircle className="text-green-600 mx-auto mt-3" size={24} />
              )}
            </div>

            {/* Maize Card */}
            <div 
              onClick={() => handleCropSelect('Maize')}
              className={`cursor-pointer rounded-2xl p-6 text-center border-2 transition-all ${
                crop === 'Maize' 
                  ? 'border-green-600 bg-green-50/80 shadow-md transform scale-[1.02]' 
                  : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-6xl mb-3">🌽</div>
              <h3 className="font-extrabold text-gray-900 text-lg">Maize</h3>
              <p className="text-xs text-gray-500 mt-1">4 detectable diseases</p>
              {crop === 'Maize' && (
                <CheckCircle className="text-green-600 mx-auto mt-3" size={24} />
              )}
            </div>
          </div>
        </div>

        {/* STEP 2: Provide Leaf Image */}
        {crop && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h2 className="text-xl font-bold text-gray-900">Provide Leaf Image</h2>
              </div>
              <span className="text-xs text-gray-500 font-semibold">JPG, JPEG, or PNG</span>
            </div>

            {/* Hidden file inputs */}
            <input 
              type="file" 
              accept="image/jpeg, image/png, image/jpg" 
              onChange={handleImageChange} 
              ref={fileInputRef} 
              className="hidden" 
            />
            <input 
              type="file" 
              accept="image/jpeg, image/png, image/jpg" 
              capture="environment"
              onChange={handleImageChange} 
              ref={cameraInputRef} 
              className="hidden" 
            />

            {!preview ? (
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Option 1: Camera */}
                <button 
                  type="button"
                  onClick={openLiveCamera}
                  className="bg-green-50/40 border-2 border-dashed border-green-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-green-50 hover:border-green-600 transition group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green-700 mb-4 group-hover:scale-110 transition">
                    <Camera size={32} />
                  </div>
                  <span className="font-bold text-lg text-gray-900 mb-1">📷 Open Camera</span>
                  <span className="text-xs text-gray-500">Capture leaf image in real-time</span>
                </button>

                {/* Option 2: Upload Image */}
                <button 
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-50/40 border-2 border-dashed border-blue-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-600 transition group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition">
                    <Upload size={32} />
                  </div>
                  <span className="font-bold text-lg text-gray-900 mb-1">🖼 Upload Image</span>
                  <span className="text-xs text-gray-500">Select file from device storage</span>
                </button>

              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-square bg-black rounded-2xl overflow-hidden mb-5 shadow-md flex items-center justify-center border border-gray-200">
                  <img src={preview} alt="Leaf Preview" className="max-h-full max-w-full object-contain" />
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {crop} Leaf Preview
                  </span>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    type="button"
                    onClick={handleRetake}
                    className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold text-sm transition"
                  >
                    <RefreshCw size={16} /> Retake Image
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Voice Description (Optional) */}
        {preview && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h2 className="text-xl font-bold text-gray-900">🎤 Voice Description (Optional)</h2>
              </div>
              <span className="text-xs text-gray-500 font-semibold">Web Speech API</span>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Speak leaf symptoms in English, Telugu, or Hindi (e.g. "yellow spots on lower leaves and brown rings").
            </p>

            {/* Language & Voice Controls */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-gray-700 uppercase">Language:</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-xs border border-gray-300 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-green-600 bg-white"
                >
                  <option value="en-US">English (US/Global)</option>
                  <option value="te-IN">Telugu (తెలుగు)</option>
                  <option value="hi-IN">Hindi (हिन्दी)</option>
                </select>
              </div>

              {!isRecording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm transition"
                >
                  <Mic size={14} /> Start Recording
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold animate-pulse shadow-sm transition"
                >
                  <Square size={14} /> Stop Recording
                </button>
              )}

              {voiceDescription && (
                <button
                  type="button"
                  onClick={clearVoiceDescription}
                  className="flex items-center gap-1 text-gray-500 hover:text-red-600 text-xs px-2 py-1 rounded transition"
                >
                  <Trash2 size={13} /> Clear
                </button>
              )}
            </div>

            {/* Listening Indicator */}
            {isRecording && (
              <div className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 mb-3 border border-red-200">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                <span>🎙 Listening... Speak your observation clearly</span>
              </div>
            )}

            {/* Transcript Textbox */}
            <textarea
              rows={3}
              value={voiceDescription}
              onChange={(e) => setVoiceDescription(e.target.value)}
              placeholder="Spoken or typed symptom description will appear here..."
              className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
        )}

        {/* Analyze Image Action Button */}
        {preview && (
          <div className="text-center pt-2 pb-8">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full sm:w-auto px-12 py-4 bg-green-600 hover:bg-green-700 text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              Analyze Image
            </button>
          </div>
        )}

      </div>

      {/* Live Camera Modal (Desktop Webcam or HTML5 video) */}
      {isCameraActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative overflow-hidden shadow-2xl">
            <button 
              onClick={stopCameraStream}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 p-2 rounded-full z-10"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Camera size={20} className="text-green-600" />
              Capture Leaf Photo
            </h3>

            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-5">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={capturePhotoFromStream}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-sm shadow-lg flex items-center gap-2"
              >
                <Camera size={18} /> Capture Leaf Image
              </button>
              <button
                type="button"
                onClick={stopCameraStream}
                className="px-5 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Requirement 7: Loading Animation Modal */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl space-y-5 animate-fade-in border border-gray-100">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-75"></div>
              <div className="relative w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 border-2 border-green-500">
                <Sprout size={40} className="animate-pulse" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900">
                Analyzing your plant image...
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Applying multi-model neural vision and knowledge-base correlation.
              </p>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-green-600 h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default DetectDisease;
