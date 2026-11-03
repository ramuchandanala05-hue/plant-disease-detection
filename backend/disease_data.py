# Disease Knowledge Base for Plant Disease Detection using Multimodel AI
# Strictly Tomato and Maize crops

DISEASE_KNOWLEDGE = {
    "Healthy Tomato": {
        "crop": "Tomato",
        "description": "The plant displays vigorous foliage, uniform green coloration, and robust stems with no signs of fungal, bacterial, or viral pathogens.",
        "symptoms": [
            "Vibrant, uniform green foliage",
            "No necrotic spots, lesions, or wilting",
            "Normal leaflet shape and healthy turgidity",
            "Healthy budding and uniform flower development"
        ],
        "contributing_conditions": [
            "Optimal sunlight (6-8 hours daily)",
            "Consistent soil moisture avoiding waterlogging",
            "Adequate airflow and balanced soil nutrients (pH 6.0-6.8)"
        ],
        "prevention": "Maintain regular scouting, use drip irrigation to prevent foliar wetness, and rotate crops every 2-3 seasons.",
        "management": "No corrective chemical action required. Continue routine scouting and standard organic preventative maintenance.",
        "nutrient_guidance": "Maintain balanced NPK (e.g., 19:19:19). Ensure sufficient calcium to prevent blossom end rot in developing fruits."
    },
    "Tomato Bacterial Spot": {
        "crop": "Tomato",
        "description": "Caused by Xanthomonas bacteria. Creates dark circular to irregular spots on leaves and fruit, causing severe defoliation and sunscald in wet seasons.",
        "symptoms": [
            "Small, water-soaked, dark brown or black spots with yellow halos",
            "Lesions coalescing into large necrotic blotches on foliage",
            "Scabby or raised spots on immature green fruits",
            "Severe premature leaf drop leading to fruit sunscald"
        ],
        "contributing_conditions": [
            "High relative humidity (>85%)",
            "Warm temperatures (24-30°C)",
            "Overhead irrigation or rain splash transferring bacteria",
            "Handling plants when foliage is wet"
        ],
        "prevention": "Use certified pathogen-free seeds, practice 3-year crop rotation away from solanaceous plants, and avoid overhead sprinkler watering.",
        "management": "Prune severely affected lower leaves using sanitized shears. Apply certified copper-based bactericide sprays prior to extensive spread.",
        "nutrient_guidance": "Avoid excessive nitrogen which produces soft lush tissue prone to bacterial penetration. Supplement with calcium and potassium to toughen cell walls."
    },
    "Tomato Early Blight": {
        "crop": "Tomato",
        "description": "Caused by the fungus Alternaria solani. Produces characteristic concentric target-board rings on older foliage first, gradually moving upward.",
        "symptoms": [
            "Brown to dark brown spots with concentric target-board rings",
            "Chlorotic yellow halo surrounding lesions",
            "Collar rot and stem cankers near the soil line",
            "Sunken, leathery dark lesions on fruit stem attachments"
        ],
        "contributing_conditions": [
            "Warm, humid weather alternating with wet/dry cycles",
            "Frequent rainfall or heavy morning dew",
            "Crowded spacing restricting air circulation",
            "Soil splash onto lower leaves during rainfall"
        ],
        "prevention": "Apply organic or plastic mulch to create a physical barrier against soil-borne fungal spores. Stake plants and maintain 60cm row spacing.",
        "management": "Promptly remove and dispose of lower infected leaves. Apply copper hydroxide, mancozeb, or bio-fungicide (Trichoderma viride) as per local extension advice.",
        "nutrient_guidance": "Maintain adequate potassium and calcium nitrate. Avoid moisture stress which weakens plant defense."
    },
    "Tomato Late Blight": {
        "crop": "Tomato",
        "description": "Caused by Phytophthora infestans (oomycete). A fast-moving, destructive pathogen capable of decimating tomato fields rapidly in cool, wet weather.",
        "symptoms": [
            "Large, irregular water-soaked pale green to dark brown lesions",
            "Delicate white fungal-like sporulation on leaf undersides in high humidity",
            "Dark brown greasy cankers developing on stems and petioles",
            "Firm, brown, leathery rot on green or ripening tomato fruits"
        ],
        "contributing_conditions": [
            "Cool, moist weather (15-22°C)",
            "Prolonged relative humidity (>90%) and frequent fog or drizzle",
            "Presence of infected potato or volunteer tomato plants nearby"
        ],
        "prevention": "Eliminate volunteer potatoes and cull piles. Space plants generously. Plant certified late-blight resistant varieties.",
        "management": "Isolate infected plants immediately. Prune diseased vines and apply protective fungicides (copper, metalaxyl/mancozeb) under expert guidance.",
        "nutrient_guidance": "Do not over-fertilize with nitrogen. Maintain balanced phosphorus and potash to promote robust vascular development."
    },
    "Tomato Leaf Mold": {
        "crop": "Tomato",
        "description": "Caused by Passalora fulva. A fungal disease prevalent in greenhouses and humid outdoor gardens, resulting in defoliation and yield loss.",
        "symptoms": [
            "Pale green to yellowish blotches on upper leaf surfaces",
            "Dense, olive-green to brown velvety mold on corresponding leaf undersides",
            "Leaves curl, wither, become brittle, and drop prematurely",
            "Stunted fruit development due to loss of photosynthetic area"
        ],
        "contributing_conditions": [
            "High humidity (>85%) with stagnant air",
            "Temperatures between 21°C and 25°C",
            "Dense vegetative canopies with inadequate air circulation"
        ],
        "prevention": "Improve ventilation with exhaust fans in protected cultivation. Prune lower suckers. Maintain row spacing.",
        "management": "Strip lower leaves with mold patches. Sanitize pruning shears between plants. Apply sulfur or approved copper sprays.",
        "nutrient_guidance": "Ensure adequate magnesium and potassium. Avoid excess ammonium nitrogen which stimulates dense foliage."
    },
    "Tomato Septoria Leaf Spot": {
        "crop": "Tomato",
        "description": "Caused by Septoria lycopersici. Causes dense spotting on lower foliage that rapidly leads to leaf loss and exposed sunscalded fruit.",
        "symptoms": [
            "Numerous small, circular lesions (1.5-3mm) with ash-gray centers and dark brown margins",
            "Tiny black pycnidia (fruiting bodies) visible within spot centers",
            "Yellowing of surrounding leaf tissue followed by leaf drop",
            "Upward progression from lowest leaves toward the top canopy"
        ],
        "contributing_conditions": [
            "Moderate temperatures (20-25°C)",
            "Extended leaf wetness from rain or overhead watering",
            "Crop debris remaining from previous solanaceous seasons"
        ],
        "prevention": "Mulch the root zone to stop soil splash. Practice 2-3 year crop rotation. Water only at the base of the plant.",
        "management": "Remove diseased leaves as soon as first spots appear. Treat with bio-control agents or protective copper sprays.",
        "nutrient_guidance": "Supplement with foliar micronutrient sprays (zinc, boron) and balanced NPK to stimulate replacement vegetative growth."
    },
    "Tomato Spider Mites": {
        "crop": "Tomato",
        "description": "Caused by Tetranychus urticae (two-spotted spider mites). Tiny sap-sucking pests that pierce leaf cells, causing severe chlorosis and webbing.",
        "symptoms": [
            "Fine yellow or white stippling (pinpoint speckles) on upper leaf surfaces",
            "Bronze, dry, or scorched appearance on heavily infested leaves",
            "Delicate silky webbing on leaf undersides, axils, and growing tips",
            "Premature leaf drop and significant reduction in fruit set"
        ],
        "contributing_conditions": [
            "Hot, dry, and dusty conditions (>28°C)",
            "Drought-stressed plants",
            "Excessive broad-spectrum chemical sprays that kill natural predatory insects"
        ],
        "prevention": "Maintain adequate irrigation to avoid drought stress. Keep roadways damped down to minimize dust. Conserve predatory insects.",
        "management": "Spray undersides of leaves with forceful streams of clean water. Apply neem oil, insecticidal soap, or horticultural mineral oil during cool hours.",
        "nutrient_guidance": "Avoid high-nitrogen fertilizers that produce tender growth favoured by mites. Apply potassium silicate to strengthen outer leaf cuticles."
    },
    "Tomato Target Spot": {
        "crop": "Tomato",
        "description": "Caused by Corynespora cassiicola. Affects leaves, stems, and fruits, resulting in characteristic target-patterned lesions in warm humid regions.",
        "symptoms": [
            "Pinpoint brown spots that enlarge into circular brown lesions with concentric rings",
            "Pale chlorotic halo surrounding leaf lesions",
            "Sunken, dark circular spots with concentric rings on green and ripe fruits",
            "Severe canopy defoliation in prolonged humid conditions"
        ],
        "contributing_conditions": [
            "Warm temperatures (25-32°C)",
            "High relative humidity and frequent rainfall",
            "Overly dense canopy and poor weed management"
        ],
        "prevention": "Ensure wide plant spacing (at least 60cm between plants). Prune lower foliage to elevate airflow above ground.",
        "management": "Remove and incinerate severely infected leaves. Apply preventative copper fungicides or certified organic bio-fungicides.",
        "nutrient_guidance": "Balance potassium sulphate (SOP) and micronutrients. Avoid excessive urea application."
    },
    "Tomato Mosaic Virus": {
        "crop": "Tomato",
        "description": "Caused by Tomato Mosaic Virus (ToMV). A mechanically transmitted viral disease that alters foliage development and severely stunts yield.",
        "symptoms": [
            "Mottling of leaves with alternating light and dark green mosaic patterns",
            "Leaf distortion, curling, and fern-like 'shoestring' narrowing of leaflets",
            "Stunted plant growth and uneven internal browning of fruit walls",
            "Brittle stems with reduced blossom count"
        ],
        "contributing_conditions": [
            "Mechanical transfer via hands, clothes, or pruning tools",
            "Use of contaminated seed lots",
            "Tobacco users handling tomato plants without hand washing"
        ],
        "prevention": "Plant certified ToMV-resistant cultivars. Wash hands thoroughly with soap or milk before working in crops. Disinfect tools in 10% TSP.",
        "management": "No chemical cure exists for viral plant infections. Rogue out, bag, and safely burn infected plants immediately to protect the remaining crop.",
        "nutrient_guidance": "Fertilizer cannot eliminate viruses. Maintain balanced NPK nutrition on unaffected plants to preserve harvest yield."
    },
    "Tomato Yellow Leaf Curl Virus": {
        "crop": "Tomato",
        "description": "Caused by TYLCV, transmitted by the silverleaf whitefly (Bemisia tabaci). Causes severe stunting, erect growth, and near-total crop loss if contracted early.",
        "symptoms": [
            "Marked upward curling and cupping of leaflet margins",
            "Interveinal chlorosis (yellowing) with dark green veins on young growth",
            "Extreme stunting with bushy, erect growth habit",
            "Blossom drop with negligible or absent fruit set"
        ],
        "contributing_conditions": [
            "High populations of silverleaf whiteflies during warm, dry weather",
            "Presence of alternative weed hosts near fields",
            "Continuous solanaceous cropping without a host-free window"
        ],
        "prevention": "Cover seedbeds with 50-mesh insect netting. Use yellow sticky cards to monitor whitefly vectors. Grow TYLCV-resistant hybrids.",
        "management": "Control whitefly vectors using neem extracts, insecticidal soaps, or approved bio-agents (Beauveria bassiana). Remove infected plants immediately.",
        "nutrient_guidance": "Support non-infected plants with biofertilizers (Azospirillum, Phosphobacteria) and foliar micronutrient blends."
    },
    "Healthy Maize": {
        "crop": "Maize",
        "description": "The maize crop displays vigorous green leaves with parallel venation, sturdy stalks, clean nodal joints, and robust tassel and ear development.",
        "symptoms": [
            "Uniform vibrant green blade coloration",
            "Clean leaf blades completely free of rust pustules, blights, or stripes",
            "Strong, erect stalk structure with thick prop roots",
            "Normal synchronous tasseling and silking"
        ],
        "contributing_conditions": [
            "Adequate soil moisture during vegetative and silking periods",
            "Full sunlight and temperatures between 20°C and 30°C",
            "Fertile, well-draining loam soil with pH 6.0 to 6.8"
        ],
        "prevention": "Practice crop rotation with legumes (cowpea, soybean). Maintain timely weeding and balanced basal fertilization.",
        "management": "No disease treatment required. Continue routine scouting, moisture monitoring, and standard armyworm checks.",
        "nutrient_guidance": "Split-apply nitrogen (urea) at knee-high and tasseling stages, complemented by basal DAP and Potash (MOP)."
    },
    "Maize Common Rust": {
        "crop": "Maize",
        "description": "Caused by Puccinia sorghi. Characterized by powdery cinnamon-brown pustules distributed across both upper and lower leaf surfaces.",
        "symptoms": [
            "Small, powdery, oval to elongate cinnamon-brown pustules on both leaf surfaces",
            "Pustules rupture the epidermis, releasing brownish-red urediniospores",
            "Severe leaf chlorosis and premature drying under heavy spore loads",
            "Pustules transition to dark brownish-black teliospores late in season"
        ],
        "contributing_conditions": [
            "Cool to moderate temperatures (16-24°C)",
            "High relative humidity (>95%) and prolonged dew periods (6-8 hours)",
            "Late planting dates exposing young crops to peak spore flights"
        ],
        "prevention": "Select rust-resistant maize hybrids. Plant early in the season to evade high spore concentrations.",
        "management": "If pustules appear on upper leaves before silking in high-value plots, apply approved triazole or strobilurin fungicides under local agricultural extension advice.",
        "nutrient_guidance": "Avoid excessive nitrogen which promotes succulent tissue susceptible to rust. Ensure sufficient potash (MOP) to improve stalk and leaf strength."
    },
    "Maize Northern Leaf Blight": {
        "crop": "Maize",
        "description": "Caused by Exserohilum turcicum. Characterized by large, cigar-shaped grayish-green lesions that cause extensive leaf blighting and grain-filling loss.",
        "symptoms": [
            "Long, elliptical, cigar-shaped lesions (2.5 to 15 cm long) with smooth margins",
            "Lesions start grayish-green and dry to light tan or brown",
            "Dark, olive-green fungal sporulation visible inside lesions in wet mornings",
            "Leaves appear burned or frosted when lesions coalesce"
        ],
        "contributing_conditions": [
            "Moderate temperatures (18-27°C)",
            "Frequent rainfall, heavy morning dew, and overcast skies",
            "Conservation tillage leaving infected maize residue on soil surface"
        ],
        "prevention": "Use resistant maize hybrids with Ht genes. Rotate crops with non-grasses (soybean, groundnut). Incorporate post-harvest stover into soil.",
        "management": "Scout lower canopy before tasseling. Apply protective fungicides (e.g. azoxystrobin + tebuconazole) if disease reaches ear leaf early.",
        "nutrient_guidance": "Apply zinc sulphate and ensure balanced NPK. Potassium-deficient soils exhibit greater Northern Leaf Blight susceptibility."
    },
    "Maize Gray Leaf Spot": {
        "crop": "Maize",
        "description": "Caused by Cercospora zeae-maydis. Causes distinct rectangular tan-to-gray lesions strictly restricted between leaf veins, causing canopy death.",
        "symptoms": [
            "Tan to gray, long, narrow rectangular lesions strictly bounded by leaf veins",
            "Lesions expand into rectangular blocks (1-6 cm long) with straight parallel edges",
            "Extensive leaf blighting and premature canopy senescence",
            "Weakened stalks and severe lodging due to carbohydrate depletion"
        ],
        "contributing_conditions": [
            "Warm, humid weather (25-30°C)",
            "High relative humidity (>90%) with long dew periods (10-12 hours)",
            "Continuous corn-on-corn cultivation with reduced tillage"
        ],
        "prevention": "Choose GLS-tolerant hybrids. Implement 2-year crop rotation away from maize. Deep plow crop residue where erosion permits.",
        "management": "Apply recommended foliar fungicides if lesions reach three leaves below the ear leaf prior to pollination.",
        "nutrient_guidance": "Maintain sufficient potassium (MOP) to enhance stalk integrity and prevent lodging. Avoid late-season nitrogen excess."
    }
}
