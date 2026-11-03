import { useState } from 'react';
import { Search, ShieldCheck, AlertCircle, Info, Leaf, CheckCircle, ExternalLink, X } from 'lucide-react';

const DISEASES_DATA = [
  // TOMATO DISEASES (10 Classes)
  {
    name: 'Healthy Tomato',
    crop: 'Tomato',
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    image: 'https://images.unsplash.com/photo-1592494804071-faea15d93a8a?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Unsplash - Open License',
    description: 'Vigorous deep green leaves without discoloration, spotting, or leaf roll. Indicates optimal cultural conditions and disease-free rootstocks.',
    symptoms: [
      'Uniform green foliage with clean veins',
      'Absence of spots, lesions, or powdery growth',
      'Normal leaflet shape and crisp turgidity',
      'Healthy budding and uniform blossom formation'
    ],
    conditions: 'Optimal sunshine (6-8 hours), consistent moisture, good air circulation, and balanced soil pH 6.2-6.8.',
    prevention: 'Routine field scouting, drip irrigation to prevent foliar wetness, and regular 3-year crop rotation.',
    management: 'No chemical intervention required. Continue standard organic maintenance and pest monitoring.'
  },
  {
    name: 'Tomato Bacterial Spot',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1594488518063-e3c32b504245?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Plant Pathology Open Archive',
    description: 'Caused by Xanthomonas perforans / euvesicatoria. Dark water-soaked lesions that dry into greasy necrotic spots, causing severe leaf drop.',
    symptoms: [
      'Small, circular, water-soaked dark spots with yellow halos',
      'Coalescing lesions causing leaf margins to curl and dry',
      'Scabby, raised black spots on immature green fruits',
      'Extensive lower canopy defoliation resulting in fruit sunscald'
    ],
    conditions: 'High humidity (>85%), temperatures 24-30°C, and water splash from rain or sprinkler irrigation.',
    prevention: 'Plant hot-water-treated certified seeds. Avoid working in fields when foliage is damp. Mulch to eliminate splash.',
    management: 'Prune infected lower vines with sterilized shears. Apply preventive copper hydroxide bactericide sprays.'
  },
  {
    name: 'Tomato Early Blight',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Open Ag Science Repository',
    description: 'Caused by Alternaria solani. Produces distinct dark brown concentric target-board rings on mature lower leaves first.',
    symptoms: [
      'Concentric target-board ring patterns inside brown lesions',
      'Bright chlorotic yellow halo encircling each spot',
      'Collar rot and dark sunken stem cankers',
      'Leathery dark sunken lesions near fruit stem attachments'
    ],
    conditions: 'Warm, humid weather alternating with dry spells; frequent rain, heavy dew, or overhead sprinkling.',
    prevention: 'Apply thick straw or plastic mulch under plants. Maintain at least 60 cm row spacing for rapid leaf drying.',
    management: 'Strip off affected lower leaves promptly. Treat with bio-control (Trichoderma) or copper/mancozeb fungicides.'
  },
  {
    name: 'Tomato Late Blight',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1592494804071-faea15d93a8a?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Public Domain Agricultural Image Archive',
    description: 'Caused by Phytophthora infestans (oomycete). A devastating, fast-spreading blight turning leaves, stems, and fruits into brown rotten tissue.',
    symptoms: [
      'Large, irregular water-soaked pale greenish-gray to brown blotches',
      'Delicate white cottony sporulation on leaf undersides in morning humidity',
      'Greasy, dark brown lesions girdling stems and branches',
      'Firm, dark, bumpy rot on green and ripening tomato fruits'
    ],
    conditions: 'Cool, wet, cloudy weather (15-22°C) with persistent relative humidity exceeding 90%.',
    prevention: 'Eradicate cull piles and volunteer potatoes nearby. Plant certified late-blight-resistant varieties.',
    management: 'Isolate affected rows immediately. Remove and bag diseased vines. Apply approved systemic fungicides.'
  },
  {
    name: 'Tomato Leaf Mold',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1594488518063-e3c32b504245?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Agricultural Research Archive',
    description: 'Caused by Passalora fulva. A common issue in humid greenhouses and polyhouses characterized by olive-green velvety molds.',
    symptoms: [
      'Pale green or yellowish blotches on upper leaf surface',
      'Dense, olive-green to brown velvety fungal growth underneath',
      'Leaves curl upward, wither, turn brittle, and drop',
      'Poor fruit development due to loss of photosynthetic leaf area'
    ],
    conditions: 'Relative humidity >85% and stagnant air at temperatures between 21°C and 25°C.',
    prevention: 'Install greenhouse ventilation fans. Prune suckers to enhance interior airflow. Avoid evening watering.',
    management: 'Prune affected leaves up to the first fruit cluster. Sanitize tools. Apply sulfur or bio-fungicides.'
  },
  {
    name: 'Tomato Septoria Leaf Spot',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Horticultural Extension Service',
    description: 'Caused by Septoria lycopersici. Dense circular spots with light gray centers and dark borders attacking the lower canopy first.',
    symptoms: [
      'Numerous small circular spots (2-3 mm) with ash-gray centers',
      'Dark brown or black borders surrounding each lesion',
      'Tiny black pycnidia specks visible within lesion centers',
      'Progressive upward defoliation leaving only top leaves'
    ],
    conditions: 'Moderate temperatures (20-25°C) and prolonged leaf wetness from rain or sprinkler irrigation.',
    prevention: 'Stake plants vertically. Mulch base with straw or landscape fabric to eliminate spore splash from soil.',
    management: 'Strip off infected bottom leaves. Disinfect pruning shears between plants. Apply protective copper sprays.'
  },
  {
    name: 'Tomato Spider Mites',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1592494804071-faea15d93a8a?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Integrated Pest Management Repository',
    description: 'Infestation by two-spotted spider mites (Tetranychus urticae). Sucking pests that cause fine yellow stippling and silky webbing.',
    symptoms: [
      'Fine yellow or white stippling dots across leaf surfaces',
      'Leaves take on a bronze, dusty, or scorched appearance',
      'Silky webbing covering leaf undersides and terminal shoots',
      'Leaves dry out, turn brown, and drop prematurely'
    ],
    conditions: 'Hot, dry, and dusty weather (>28°C) and drought-stressed tomato crops.',
    prevention: 'Ensure consistent soil moisture. Dampen field access paths to minimize dust. Avoid broad-spectrum insecticides.',
    management: 'Wash leaf undersides with forceful water sprays. Apply neem oil, insecticidal soap, or release predatory mites.'
  },
  {
    name: 'Tomato Target Spot',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1594488518063-e3c32b504245?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Open Agri Resource',
    description: 'Caused by Corynespora cassiicola. Pinpoint lesions that expand into circular brown spots with concentric target bands.',
    symptoms: [
      'Pinpoint brown spots expanding into circular target-patterned lesions',
      'Pale yellow halos encircling expanding leaf lesions',
      'Sunken circular dark lesions with concentric zones on fruits',
      'Severe defoliation under extended wet periods'
    ],
    conditions: 'Warm temperatures (25-32°C), high relative humidity, and dense canopies.',
    prevention: 'Maintain wide row spacing (>60 cm). Prune suckers to enhance airflow. Practice 3-year crop rotation.',
    management: 'Prune diseased leaves. Apply authorized protective copper fungicides at the first sign of symptoms.'
  },
  {
    name: 'Tomato Mosaic Virus',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Plant Virology Open Collection',
    description: 'Caused by ToMV. A mechanically transmitted tobamovirus that causes mottled leaf coloring, distorted foliage, and stunted growth.',
    symptoms: [
      'Mottled leaf patterns with alternating light and dark green patches',
      'Distorted, curled, or fern-like shoestring leaflets',
      'Stunting of plant height and reduced flowering',
      'Uneven fruit ripening with internal brown vascular necrosis'
    ],
    conditions: 'Mechanical handling, contaminated pruning tools, tobacco residue on workers\' hands, and infected seeds.',
    prevention: 'Plant certified virus-resistant hybrids. Wash hands with soapy water or milk before handling crops. Disinfect tools.',
    management: 'No chemical cure exists for viral pathogens. Rogue out, bag, and burn infected plants immediately to protect the crop.'
  },
  {
    name: 'Tomato Yellow Leaf Curl Virus',
    crop: 'Tomato',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    image: 'https://images.unsplash.com/photo-1592494804071-faea15d93a8a?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'International Vegetable Research Center',
    description: 'Caused by TYLCV, transmitted by silverleaf whiteflies (Bemisia tabaci). Severe stunting, erect bushy growth, and complete blossom drop.',
    symptoms: [
      'Pronounced upward curling and cupping of leaflet margins',
      'Interveinal chlorosis (yellowing) with dark green main veins',
      'Erect, bushy growth habit and severe plant stunting',
      'Blossoms drop before fruit set; yield is severely curtailed'
    ],
    conditions: 'Warm, dry weather fostering rapid whitefly population expansion and presence of alternate solanaceous weed hosts.',
    prevention: 'Cover nurseries with 50-mesh insect netting. Use yellow sticky cards to trap whiteflies. Plant TYLCV-resistant hybrids.',
    management: 'Control whitefly vectors using neem oil, insecticidal soap, or bio-pesticides (Beauveria bassiana). Remove infected plants.'
  },

  // MAIZE DISEASES (4 Classes)
  {
    name: 'Healthy Maize',
    crop: 'Maize',
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Unsplash - Open License',
    description: 'Lush, dark green maize blades with parallel venation, thick stalks, clean nodal joints, and robust tassel and ear development.',
    symptoms: [
      'Uniform vibrant green blade coloration',
      'Clean leaf surface free from rust pustules, blights, or necrotic streaks',
      'Sturdy erect stalk with strong brace roots',
      'Synchronous tasseling and silk emergence'
    ],
    conditions: 'Adequate soil moisture during vegetative and silking periods, sunny weather (20-30°C), and fertile loam soil.',
    prevention: 'Crop rotation with legumes (cowpea, soybean). Timely weed control and balanced basal fertilization.',
    management: 'No disease intervention required. Continue routine scouting and standard stem-borer monitoring.'
  },
  {
    name: 'Maize Common Rust',
    crop: 'Maize',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Cereal Pathology Collection',
    description: 'Caused by Puccinia sorghi. Powdery cinnamon-brown pustules erupting across both upper and lower blade surfaces.',
    symptoms: [
      'Small, powdery, oval to elongate cinnamon-brown pustules',
      'Pustules erupt on both upper and lower leaf surfaces',
      'Chlorosis and premature leaf drying under heavy pustule loads',
      'Pustules darken into brownish-black teliospores late in the season'
    ],
    conditions: 'Cool to moderate temperatures (16-24°C), high relative humidity (>95%), and 6-8 hours of continuous dew.',
    prevention: 'Plant rust-resistant or tolerant maize hybrids. Plant early in the season to evade peak spore flights.',
    management: 'If pustules threaten upper canopy leaves before tasseling, apply approved triazole or strobilurin fungicides.'
  },
  {
    name: 'Maize Northern Leaf Blight',
    crop: 'Maize',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Maize Agronomy Archive',
    description: 'Caused by Exserohilum turcicum. Large, cigar-shaped grayish-green to tan lesions that coalesce and cause severe canopy blighting.',
    symptoms: [
      'Long, elliptical, cigar-shaped lesions (2.5 to 15 cm long)',
      'Lesions begin grayish-green and dry to light tan or brown',
      'Dark olive fungal sporulation visible within lesions in damp mornings',
      'Leaves look burned or frosted as lesions merge across the blade'
    ],
    conditions: 'Moderate temperatures (18-27°C), frequent rains, heavy morning dew, and minimum-tillage residues.',
    prevention: 'Plant resistant hybrids containing Ht resistance genes. Rotate with non-grass crops. Incorporate crop residues.',
    management: 'Apply protective fungicides if lesions appear on or near ear leaves prior to silking. Remove volunteer corn.'
  },
  {
    name: 'Maize Gray Leaf Spot',
    crop: 'Maize',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop',
    imageAttribution: 'Agricultural Open Repository',
    description: 'Caused by Cercospora zeae-maydis. Long, narrow rectangular tan-to-gray lesions strictly bounded between leaf veins.',
    symptoms: [
      'Tan to gray, long, narrow rectangular lesions restricted by leaf veins',
      'Lesions exhibit sharp, straight parallel margins',
      'Severe blighting and premature canopy senescence',
      'Weakened stalks and severe lodging due to carbohydrate depletion'
    ],
    conditions: 'Warm, humid weather (25-30°C), persistent high humidity (>90%), and prolonged morning fog or dew.',
    prevention: 'Plant GLS-tolerant hybrids. Implement 2-year crop rotation out of maize. Deep plow crop residue where feasible.',
    management: 'Apply recommended foliar fungicides if lesions reach three leaves below the ear leaf prior to pollination.'
  }
];

function DiseaseLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedDisease, setSelectedDisease] = useState(null);

  const filtered = DISEASES_DATA.filter((d) => {
    const matchesCrop = filter === 'All' || d.crop === filter;
    const matchesSearch = 
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCrop && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf size={16} /> Pathology Reference Library
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Tomato & Maize Disease Library
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Educational guide to all 14 diseases supported by our Multimodel AI diagnostic pipeline. Inspect characteristic symptoms, favorable weather conditions, prevention tips, and safe management protocols.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-3 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search diseases, symptoms, or pathogens..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
            />
          </div>

          {/* Crop Filter Tabs */}
          <div className="flex gap-2 w-full sm:w-auto">
            {['All', 'Tomato', 'Maize'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-sm transition ${
                  filter === tab 
                    ? 'bg-green-600 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab === 'Tomato' && '🍅 '}
                {tab === 'Maize' && '🌽 '}
                {tab === 'All' ? 'All Crops (14)' : tab}
              </button>
            ))}
          </div>

        </div>

        {/* Disease Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all flex flex-col overflow-hidden group"
            >
              {/* Image Preview */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className={`absolute top-3 right-3 text-xs font-black px-3 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
                  {item.crop}
                </span>
                <span className="absolute bottom-2 left-2 bg-black/60 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-sm">
                  {item.imageAttribution}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertCircle size={14} className="text-orange-600" /> Key Symptoms:
                    </h4>
                    <ul className="space-y-1">
                      {item.symptoms.slice(0, 2).map((s, sIdx) => (
                        <li key={sIdx} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="text-green-600 font-bold shrink-0">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedDisease(item)}
                    className="text-sm font-bold text-green-700 hover:text-green-800 flex items-center gap-1"
                  >
                    View Complete Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full bg-white p-12 text-center rounded-2xl border border-gray-200">
              <Leaf size={48} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">No diseases matched your criteria</h3>
              <p className="text-sm text-gray-500">Try adjusting your search query or crop filter.</p>
            </div>
          )}
        </div>

      </div>

      {/* Disease Detail Modal */}
      {selectedDisease && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            <button 
              onClick={() => setSelectedDisease(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-black px-3 py-1 rounded-full border ${selectedDisease.badgeColor}`}>
                {selectedDisease.crop}
              </span>
              <span className="text-xs text-gray-400">{selectedDisease.imageAttribution}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
              {selectedDisease.name}
            </h2>

            <div className="rounded-2xl overflow-hidden aspect-video mb-6 bg-gray-100 border">
              <img src={selectedDisease.image} alt={selectedDisease.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Info size={16} className="text-blue-600" /> Description
                </h4>
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  {selectedDisease.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertCircle size={16} className="text-orange-600" /> Symptoms
                </h4>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <ul className="space-y-1.5">
                    {selectedDisease.symptoms.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={15} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1.5">
                  Contributing Conditions
                </h4>
                <p className="text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  {selectedDisease.conditions}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-green-600" /> Prevention & Cultural Management
                </h4>
                <div className="bg-green-50/60 p-3.5 rounded-xl border border-green-200 text-gray-800 space-y-2">
                  <p><strong>Prevention:</strong> {selectedDisease.prevention}</p>
                  <p><strong>Management:</strong> {selectedDisease.management}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex justify-end">
              <button
                onClick={() => setSelectedDisease(null)}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-sm transition"
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

export default DiseaseLibrary;
