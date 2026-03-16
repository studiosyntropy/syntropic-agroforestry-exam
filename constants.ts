import { Question } from './types';

// Helper to map letter answers to indices
const mapAnswer = (letter: string) => {
  const l = letter.toUpperCase().trim();
  if (l === 'A') return 0;
  if (l === 'B') return 1;
  if (l === 'C') return 2;
  return 1; // Default to B if unknown
};

export const APP_NAME = "Syntropic Agroforestry Exam";

// Full Curriculum Data (Questions 1-200)
const RAW_DATA = [
  {
    "id": 1,
    "question": "In Syntropic Agroforestry, what does the term 'Syntropy' fundamentally represent?",
    "options": [
      "The tendency of systems to move toward disorder and energy loss.",
      "A biological process where energy is concentrated and systems move toward greater complexity and abundance.",
      "A method of farming that relies primarily on external chemical inputs to maintain order."
    ],
    "answer": "B",
    "explanation": "Excellent start! Syntropy is the biological opposite of entropy. While physics often highlights how energy dissipates (entropy), life has the miraculous ability to organize energy and build complexity over time."
  },
  {
    "id": 2,
    "question": "What is the primary factor used to determine which vertical 'Strata' a plant belongs to?",
    "options": [
      "The maximum height the plant reaches at maturity.",
      "The specific light requirements of the plant to thrive.",
      "The depth and reach of the plant's root system."
    ],
    "answer": "B",
    "explanation": "A very common misconception clarified! In our forest architecture, strata is about 'light, not height.' We arrange plants based on how much sun they need—whether they are sun-hungry Emergents or shade-loving Low strata species."
  },
  {
    "id": 3,
    "question": "Why is the first stage of ecological succession in this method called the 'Placenta' stage?",
    "options": [
      "Because it is the stage where the most expensive 'target' crops are always planted.",
      "Because these early species nurture and protect the system, preparing the soil for the 'embryo' of the future forest.",
      "Because it refers only to the use of animal-based fertilizers during installation."
    ],
    "answer": "B",
    "explanation": "That is a beautiful way to see it! Just as a placenta nourishes a developing life, these hardy pioneer plants protect the soil from the sun and rain, building the fertility needed for the longer-lived trees to follow."
  },
  {
    "id": 4,
    "question": "According to the 'Food Forest Equation,' which variable acts as the exponent that determines the system's success?",
    "options": [
      "The amount of space available.",
      "The length of time since planting.",
      "The intensity and timing of management (pruning)."
    ],
    "answer": "C",
    "explanation": "Correct! We often say that management—specifically strategic pruning—is 95% of the work. Without active human participation to 'pulse' the system, it may stagnate into senescence."
  },
  {
    "id": 5,
    "question": "How does Syntropic philosophy reframe the presence of 'pests' and diseases on a farm?",
    "options": [
      "As a random act of aggression from nature that must be suppressed.",
      "As the 'department of censorship' that signals a management failure or an imbalanced plant.",
      "As a sign that the farmer needs to buy more organic pesticides immediately."
    ],
    "answer": "B",
    "explanation": "A thoughtful perspective! Ernst Götsch teaches us that pests target plants that are no longer contributing to the system's vitality. They are diagnostic signals telling us where we need to adjust our strata or pruning."
  },
  {
    "id": 6,
    "question": "What is a 'Growth Pulse' in the context of system management?",
    "options": [
      "A surge in plant vigor triggered by synchronized pruning that releases hormones into the soil.",
      "The moment when a plant reaches its maximum height and stops growing.",
      "A seasonal event where only weeds are allowed to flower to attract bees."
    ],
    "answer": "A",
    "explanation": "Spot on! When we prune support species, we release hormones like gibberellin and trigger root dieback, which feeds the soil food web and causes a collective 'wake-up call' for all neighboring plants."
  },
  {
    "id": 7,
    "question": "In a well-designed consortium, what percentage of the 'Emergent' layer should be occupied by canopy coverage?",
    "options": [
      "Approximately 80%",
      "Approximately 50%",
      "Approximately 20%"
    ],
    "answer": "C",
    "explanation": "You've got it! The Emergent layer is sparse (20%) to allow 80% of the light to filter down to the High, Medium, and Low layers beneath it, maximizing photosynthesis across all levels."
  },
  {
    "id": 8,
    "question": "What is 'Muvuca'?",
    "options": [
      "A specific type of heavy-duty pruning shears used in Taiwan.",
      "A high-density mix of seeds broadcast sown to establish multiple successional layers at once.",
      "The process of extracting nutrients from banana pseudostems to make fertilizer."
    ],
    "answer": "B",
    "explanation": "Precisely! Muvuca mimics the way a forest naturally regenerates with thousands of seeds. It allows natural selection to decide which individuals are best adapted to each specific micro-site."
  },
  {
    "id": 9,
    "question": "What does the concept of the 'Macro-organism' imply for a syntropic farm?",
    "options": [
      "That the farm should be as large as possible to be profitable.",
      "That the entire farm functions as a single, coherent living entity where every plant is an 'organ.'",
      "That only large mammals should be used to provide fertility to the soil."
    ],
    "answer": "B",
    "explanation": "Wonderful insight! In this worldview, we don't just care for individual crops; we manage the relationships between them to ensure the health of the whole 'body' of the farm."
  },
  {
    "id": 10,
    "question": "What occurs during the 'Accumulation' phase of succession?",
    "options": [
      "The system is barren and requires heavy external fertilizer to grow anything.",
      "The system is building soil structure and natural capital, and the biomass is high in lignin.",
      "The system is self-sustaining and producing maximum yields of high-value fruits like avocado."
    ],
    "answer": "B",
    "explanation": "Correct! During the Accumulation phase, we are 'fattening up' the system with carbon and biomass to prepare for the Abundance phase where high-value crops can finally thrive."
  },
  {
    "id": 11,
    "question": "Which of these is a key 'rule' for applying mulch in a syntropic system?",
    "options": [
      "Keep the green, leafy material on the bottom and heavy wood on top.",
      "Place woody materials on the bottom (in contact with soil) and softer green materials on top.",
      "Only use store-bought wood chips to ensure no weed seeds are introduced."
    ],
    "answer": "B",
    "explanation": "That is a vital trick for soil health! Putting wood on the bottom feeds the beneficial fungi, while the 'greens' on top retain moisture and provide a quick nutrient hit for soil life."
  },
  {
    "id": 12,
    "question": "What is 'Senescence' and how do we manage it?",
    "options": [
      "It is the peak growth phase; we manage it by adding more water.",
      "It is the biological aging and slowing of a plant; we manage it through strategic pruning to reset the growth cycle.",
      "It is a soil disease caused by lack of sunlight; we manage it by removing the canopy."
    ],
    "answer": "B",
    "explanation": "A very important concept! Senescent plants send 'slowing' signals to the rest of the forest. By pruning them, we 'take the foot off the brake' and allow the system to remain in vigorous youth."
  },
  {
    "id": 13,
    "question": "Why is it recommended to plant 'Strata Pairs' (e.g., Emergent + Medium) in a single row?",
    "options": [
      "To maximize vertical distance between canopies and reduce the need for constant management.",
      "Because plants in the same strata always help each other grow faster.",
      "To ensure that all plants in the row reach the exact same height at the same time."
    ],
    "answer": "A",
    "explanation": "You've captured the logic perfectly! By 'skipping' a strata (pairing Emergent with Medium), we create a physical gap that allows better light penetration and makes management much simpler."
  },
  {
    "id": 14,
    "question": "What is 'Necromass' and why is it important in recent soil research?",
    "options": [
      "It is a type of synthetic fertilizer that mimics dead organic matter.",
      "It is the remains of dead soil microorganisms, which account for more than half of soil organic carbon.",
      "It is the term for 'weeds' that have been killed by herbicides."
    ],
    "answer": "B",
    "explanation": "This is a cutting-edge insight! Recent science shows that the 'soil microbial carbon pump' depends on the death of microbes (necromass) to build stable, long-term soil fertility."
  },
  {
    "id": 15,
    "question": "In the 'Abundance' phase, what is the primary indicator that a system is self-sustaining?",
    "options": [
      "The farmer no longer needs to prune or intervene in any way.",
      "The vegetation is vibrant green, and the soil is dominated by beneficial fungi and high moisture retention.",
      "Only one species of tree is allowed to dominate to ensure high commercial yield."
    ],
    "answer": "B",
    "explanation": "Well observed! Abundance is characterized by high natural capital, where the system is so healthy it produces water and fertility internally."
  },
  {
    "id": 16,
    "question": "What is 'Overpositioning'?",
    "options": [
      "Planting too many different species in the same climate zone.",
      "Placing two plants from the same strata or lifecycle group too close together, causing competition.",
      "Pruning a tree so heavily that it cannot regrow."
    ],
    "answer": "B",
    "explanation": "Correct! Overpositioning is one of the few ways plants 'compete' in a syntropic system. We design our matrices to ensure every plant has its own unique niche in both space and time."
  },
  {
    "id": 17,
    "question": "What 'Center of Origin' information helps a designer place a plant in its correct stratum?",
    "options": [
      "Whether it evolved in a deep rainforest understory (Low) or a sun-drenched savannah (Emergent).",
      "Which country the plant was first exported from for commercial use.",
      "How many seeds the plant produces in a single season."
    ],
    "answer": "A",
    "explanation": "Exactly! By looking at where a plant evolved, we respect its inherent 'intelligence' and light requirements, ensuring it stays healthy without stress."
  },
  {
    "id": 18,
    "question": "What is the function of C4 grasses (like Mombasa or Napier) in a syntropic system?",
    "options": [
      "They are grown as a primary cash crop for human consumption.",
      "They act as high-efficiency 'biomass engines' to capture carbon and create mulch.",
      "They are decorative plants used to mark the edges of the farm."
    ],
    "answer": "B",
    "explanation": "A vital piece of the puzzle! These grasses are incredibly efficient at photosynthesizing in full sun, allowing us to grow a massive amount of 'fertilizer' right on site."
  },
  {
    "id": 19,
    "question": "What is 'Synchronization' in management?",
    "options": [
      "Waiting for every tree to reach the same height before pruning any of them.",
      "Aligning management activities (like pruning) so the entire system receives the same 'information' and growth pulse at once.",
      "Using a computer to track the exact growth rate of every plant on the farm."
    ],
    "answer": "B",
    "explanation": "Precisely! By pruning everything in a 'synchronized' event, we mimic a natural disturbance like a storm, ensuring the whole system restarts its growth cycle together in harmony."
  },
  {
    "id": 20,
    "question": "What is a 'Nest' in Syntropic design?",
    "options": [
      "A small house built for birds to help with pest control.",
      "A circular, high-density planting area used for establishing high-value climax trees on slopes or small spaces.",
      "A pit where organic waste is buried to rot for several years before use."
    ],
    "answer": "B",
    "explanation": "You've got it! Nests are a fantastic strategy for starting a 'macro-organism' in a targeted spot, surrounding a target tree with its own nursing community of support plants."
  },
  {
    "id": 21,
    "question": "What is the primary difference between a conventional food forest and a Syntropic Agroforestry system according to the sources?",
    "options": [
      "Food forests are for commercial use, while Syntropic systems are for home gardens.",
      "A food forest is often seen as a 'stable picture,' while Syntropic systems are a 'dynamic film' requiring active participation.",
      "Syntropic systems never use trees, while food forests only use trees."
    ],
    "answer": "B",
    "explanation": "In Syntropic Agroforestry, the farmer is an integral part of the system, acting as a disturbance agent to keep the forest evolving."
  },
  {
    "id": 22,
    "question": "When determining which 'Strata' a plant belongs to, what should a practitioner focus on?",
    "options": [
      "The physical height the plant reaches at maturity.",
      "The light requirements of the plant (Light not Height).",
      "The price of the seeds in the local market."
    ],
    "answer": "B",
    "explanation": "Strata levels like Emergent, High, Medium, and Low are based on how much filtered or direct sunlight a plant needs to thrive."
  },
  {
    "id": 23,
    "question": "In a well-designed abundance system, what percentage of the 'Emergent' layer should ideally be occupied by the canopy?",
    "options": [
      "Approximately 20%.",
      "Exactly 50%.",
      "At least 80%."
    ],
    "answer": "A",
    "explanation": "The Emergent layer remains sparse to allow sufficient light to reach the High, Medium, and Low strata beneath."
  },
  {
    "id": 24,
    "question": "How do mycorrhizal fungi benefit the 'macro-organism' of a syntropic farm?",
    "options": [
      "They compete with trees for nitrogen, making the trees work harder.",
      "They form an underground network that trades nutrients and water for sugars from the plants.",
      "They serve as a protective barrier that prevents roots from growing too deep."
    ],
    "answer": "B",
    "explanation": "Mycorrhizal fungi act like an 'underground internet,' connecting root systems and increasing the absorption zone of plants up to seven times."
  },
  {
    "id": 25,
    "question": "Which plant growth hormone is released into the system after an aggressive pruning event, stimulating a 'growth pulse'?",
    "options": [
      "Insulin.",
      "Gibberellic Acid (Gibberellins).",
      "Adrenaline."
    ],
    "answer": "B",
    "explanation": "Pruning support species resets the system's metabolism and signals neighbors to grow through the release of hormones like gibberellins."
  },
  {
    "id": 26,
    "question": "Syntropic philosophy views pests and diseases as:",
    "options": [
      "Random enemies that must be eliminated with chemicals.",
      "The 'department of censorship' signaling an imbalance or management failure.",
      "A sign that the soil has too much organic matter."
    ],
    "answer": "B",
    "explanation": "Pests typically target senescent or weak plants, indicating that the system needs pruning or a correction in stratification."
  },
  {
    "id": 27,
    "question": "What does the 'Center of Origin' tell a designer about a specific plant?",
    "options": [
      "The best store to buy the plant from.",
      "The plant's inherent light needs and its original place in an ecosystem.",
      "The color the fruit will be when it is ripe."
    ],
    "answer": "B",
    "explanation": "By understanding where a plant evolved, we can place it in the correct stratum (e.g., a rainforest floor plant belongs in the Low stratum)."
  },
  {
    "id": 28,
    "question": "Which of these is a tangible indicator that a farm is entering the 'Abundance Phase'?",
    "options": [
      "The soil becomes lighter in color and harder.",
      "Vegetation turns a bright, vibrant green and soil shows fungal dominance.",
      "The farmer needs to use more synthetic fertilizer."
    ],
    "answer": "B",
    "explanation": "Abundance is characterized by a high accumulation of natural capital and a self-regulating, moisture-rich soil environment."
  },
  {
    "id": 29,
    "question": "When applying mulch (chop and drop), how should woody (lignin) and green (cellulose) materials be stacked?",
    "options": [
      "Green material on bottom, woody material on top.",
      "Woody material on bottom in contact with soil, green material on top.",
      "They should always be burned first and then applied as ash."
    ],
    "answer": "B",
    "explanation": "Placing wood on the bottom feeds Basidiomycete fungi, while the green layer on top keeps the wood moist and speeds up nutrient release."
  },
  {
    "id": 30,
    "question": "In Ernst Götsch's TAO philosophy, the concept that every being acts to fulfill a specific task for the macro-organism is driven by:",
    "options": [
      "Fear of predators.",
      "Internal pleasure and appetite.",
      "Direct commands from the farmer."
    ],
    "answer": "B",
    "explanation": "Life is viewed as a cooperative venture where every organism performs its role effectively when moved by its inner motivation or pleasure."
  },
  {
    "id": 31,
    "question": "What is the specific role of C4 grasses (like Mombasa or Napier) in a syntropic system?",
    "options": [
      "They are primary cash crops for human consumption.",
      "They act as high-efficiency biomass engines to capture carbon and create mulch.",
      "They are used solely for marking the boundaries of the property."
    ],
    "answer": "B",
    "explanation": "C4 grasses use a specialized form of photosynthesis to build massive amounts of organic matter very quickly in sunny environments."
  },
  {
    "id": 32,
    "question": "Which 'Strata Pair' is often combined in a single row to reduce management needs?",
    "options": [
      "Emergent + Medium.",
      "High + Emergent.",
      "Medium + High."
    ],
    "answer": "A",
    "explanation": "Skipping a stratum (pairing Emergent with Medium or High with Low) creates a clear vertical gap that allows light to penetrate better and reduces canopy conflict."
  },
  {
    "id": 33,
    "question": "How can a system be moved from an 'Accumulation System' (low fertility) to an 'Abundance System'?",
    "options": [
      "By doubling the amount of irrigation and synthetic fertilizer.",
      "Through high-density planting and strategic, synchronized pruning.",
      "By removing all support trees and leaving only the fruit trees."
    ],
    "answer": "B",
    "explanation": "Intensive management boosts the system's metabolism, allowing it to generate its own fertility and water internally over time."
  },
  {
    "id": 34,
    "question": "In syntropic management, human intervention mimics which natural event?",
    "options": [
      "The slow aging of a solitary tree.",
      "Natural disturbances like windstorms, fires, or animal browsing.",
      "The seasonal flooding of a river."
    ],
    "answer": "B",
    "explanation": "Human pruning acts as a beneficial disturbance that resets the succession cycle and triggers a collective growth pulse in the forest macro-organism."
  },
  {
    "id": 35,
    "question": "What is 'Muvuca'?",
    "options": [
      "A high-density mix of seeds broadcast sown to establish multiple layers at once.",
      "A specific type of machete used only in Brazil.",
      "The process of fermenting fruit to make natural fertilizer."
    ],
    "answer": "A",
    "explanation": "Muvuca mimics natural forest regeneration by using high seed density and allowing natural selection to determine the best-adapted plants for each spot."
  },
  {
    "id": 36,
    "question": "Why are deciduous species (trees that lose leaves) useful in a syntropic design?",
    "options": [
      "They are easier to cut down when they are dormant.",
      "They seasonally allow more light to reach the understory, stimulating lower strata.",
      "They require less water than evergreen trees."
    ],
    "answer": "B",
    "explanation": "Deciduous trees create a natural 'light window' for lower-level crops like coffee or ginger to receive a boost of energy during certain months."
  },
  {
    "id": 37,
    "question": "Management that increases 'soil metabolism' typically involves:",
    "options": [
      "Ploughing the soil once a month.",
      "Continually cycling organic material and stimulating root shed through pruning.",
      "Removing all fungi to prevent root rot."
    ],
    "answer": "B",
    "explanation": "Pruning not only adds mulch above ground but triggers root dieback and new growth, which feeds the soil food web and increases energy cycling."
  },
  {
    "id": 38,
    "question": "To prevent canopy conflict, what is the recommended vertical gap to maintain between designated strata?",
    "options": [
      "No gap is required; they should touch.",
      "Approximately 0.5m to 1.5m.",
      "At least 5 meters."
    ],
    "answer": "B",
    "explanation": "Maintaining a vertical gap between layers ensures adequate airflow and light penetration, making the system more productive and easier to manage."
  },
  {
    "id": 39,
    "question": "Indigenous Taiwanese 'Gaga' or 'Gaya' principles are closely related to syntropy because they emphasize:",
    "options": [
      "Industrial efficiency and input maximization.",
      "Ethical codes of stewardship and ecological harmony.",
      "The importance of export-only monocultures."
    ],
    "answer": "B",
    "explanation": "These traditional ecological codes view humans as part of a sacred order that must maintain the balance and fertility of the land."
  },
  {
    "id": 40,
    "question": "Which variable in the 'Food Forest Equation' acts as the power that determines the speed of success?",
    "options": [
      "Space.",
      "Management (Pruning).",
      "Time."
    ],
    "answer": "B",
    "explanation": "In the equation Success = (Time x Space)^Management, the level of human participation (management) is the exponent that accelerates abundance."
  },
  {
    "id": 41,
    "question": "What does the etymology of 'Syntropy' literally mean, according to the sources?",
    "options": ["To grow alone", "To change with", "To fight against"],
    "answer": "B",
    "explanation": "You've got a sharp eye for detail! The word comes from 'Syn' (with) and 'Tropic' (change). It represents life's natural tendency to accumulate energy and move toward complexity rather than disorder."
  },
  {
    "id": 42,
    "question": "When we organize plants into different vertical 'Strata,' what is our primary guiding rule?",
    "options": ["Light, not height", "The price of the seeds", "How deep the roots go"],
    "answer": "A",
    "explanation": "Precisely! We arrange plants based on their specific sunlight requirements rather than their physical stature. This is how a 2-meter corn plant can be in the same 'Emergent' stratum as a 20-meter timber tree."
  },
  {
    "id": 43,
    "question": "In the 'Macro-organism' concept of a farm, how are individual plants viewed?",
    "options": ["As competitors for water", "As separate products for sale", "As organs performing a function for the whole"],
    "answer": "C",
    "explanation": "A wonderful insight! The entire farm is seen as a single, intelligent living system where every species acts like an organ in a body, contributing to the health of the whole macro-organism."
  },
  {
    "id": 44,
    "question": "Why is the initial stage of planting referred to as the 'Placenta' stage?",
    "options": ["Because it is the most expensive stage", "Because these plants nurture and protect the embryo of the future forest", "Because it refers to the color of the soil"],
    "answer": "B",
    "explanation": "That's exactly right! Much like a biological placenta, these hardy pioneer species (like radish and corn) create a sheltered 'nursery' environment that protects and feeds the long-term trees as they establish."
  },
  {
    "id": 45,
    "question": "Which plant growth hormone is released into the system through the roots after heavy pruning?",
    "options": ["Insulin", "Gibberellic Acid", "Melatonin"],
    "answer": "B",
    "explanation": "Spot on! Pruning support species triggers a release of gibberellins, which travel through fungal networks to stimulate a growth pulse in all neighboring plants."
  },
  {
    "id": 46,
    "question": "How does Syntropic philosophy describe the role of 'pests' and diseases?",
    "options": ["As the 'Department of Censorship'", "As random accidents of nature", "As a sign to buy more chemicals"],
    "answer": "A",
    "explanation": "A deep philosophical catch! Ernst Götsch teaches that pests are diagnostic signals targeting senescent or imbalanced plants that are no longer beneficial to the system's evolution."
  },
  {
    "id": 47,
    "question": "What is the correct 'order of operations' when stacking mulch on a syntropic row?",
    "options": ["Leaves on the bottom, logs on top", "Woody material on the bottom, green material on top", "All material must be burned first"],
    "answer": "B",
    "explanation": "Perfect technique! Placing woody material directly on the soil provides a habitat for fungi, while the green material on top keeps things moist and speeds up decomposition."
  },
  {
    "id": 48,
    "question": "At which point in the 'S-curve' growth cycle is a plant providing the most energy to the ecosystem?",
    "options": ["Right after germination", "During its peak adolescent growth phase", "When it is old and dying"],
    "answer": "B",
    "explanation": "Excellent observation! In its phase of exuberant, rapid growth, a plant gives more back to the system through root exudates and hormonal pulses than it takes."
  },
  {
    "id": 49,
    "question": "What is the primary goal of an 'Accumulation System' phase?",
    "options": ["To produce high-value avocados immediately", "To 'fatten up' the system with biomass and carbon", "To clear all native trees"],
    "answer": "B",
    "explanation": "Exactly! In the accumulation phase, we are building natural capital and soil structure with hardy species to prepare for the future Abundance phase."
  },
  {
    "id": 50,
    "question": "What is 'Muvuca' in the context of system installation?",
    "options": ["A high-density mix of diverse seeds broadcast sown at once", "A specific type of Brazilian shovel", "The process of fermenting manure"],
    "answer": "A",
    "explanation": "You've captured the essence of diversity! Muvuca mimics natural forest regeneration by using a large quantity of seeds, allowing natural selection to find the best plant for every niche."
  },
  {
    "id": 51,
    "question": "Which indigenous Taiwanese ethical code emphasizes ecological harmony and stewardship?",
    "options": [" Bushido", "Gaga (or Gaya)", "Dharma"],
    "answer": "B",
    "explanation": "Wonderful cultural awareness! The Gaga principles of the Tayal people parallel syntropic ideals by viewing humans as part of a sacred, cooperative order with nature."
  },
  {
    "id": 52,
    "question": "Why are C4 grasses (like Mombasa or Sorghum) highly valued in these systems?",
    "options": ["They are decorative cut flowers", "They are high-efficiency biomass engines for carbon capture", "They require almost no sunlight"],
    "answer": "B",
    "explanation": "Indeed! C4 grasses use a specialized form of photosynthesis to build massive amounts of organic matter very quickly in sunny, tropical environments."
  },
  {
    "id": 53,
    "question": "Why is it often recommended to 'skip a stratum' (e.g., pair Emergent with Medium) in a single row?",
    "options": ["To save money on seedlings", "To prevent canopy conflict and reduce management labor", "Because they share the same root depth"],
    "answer": "B",
    "explanation": "Great tactical thinking! Creating a vertical gap between canopies (like Emergent and Medium) allows for better light penetration and makes it easier to prune without damaging neighbors."
  },
  {
    "id": 54,
    "question": "What is the term for the biological aging and slowing down of a plant?",
    "options": ["Senescence", "Succession", "Stratification"],
    "answer": "A",
    "explanation": "Correct! Senescence is when a plant's growth slows and it sends 'slowing' signals to the system. Pruning intervenes to reset this cycle back to vigorous youth."
  },
  {
    "id": 55,
    "question": "Who is credited with first describing the Soil Food Web as an interdependent network of organisms?",
    "options": ["Ernst Götsch", "Dr. Elaine Ingham", "Nikolai Vavilov"],
    "answer": "B",
    "explanation": "A great piece of history! Dr. Elaine Ingham first described the complex interactions of bacteria, fungi, and protozoa that drive nutrient cycling in the soil."
  },
  {
    "id": 56,
    "question": "What does the scientific measurement 'Amax' tell a designer about a native Taiwanese tree?",
    "options": ["Its maximum fruit weight", "Its photosynthetic capacity and shade tolerance", "How tall it will grow in ten years"],
    "answer": "B",
    "explanation": "Brilliant! Research into Amax allows us to use objective data to determine if a native species belongs in the Emergent, High, Medium, or Low strata."
  },
  {
    "id": 57,
    "question": "In Syntropic management, human intervention via pruning is intended to mimic which event?",
    "options": ["A forest fire", "A natural disturbance like a windstorm or animal browsing", "The steady rainfall of winter"],
    "answer": "B",
    "explanation": "Precisely! We act as the 'disturbance agent' to keep the forest in a permanent state of regeneration and high energy."
  },
  {
    "id": 58,
    "question": "What is the recommended ratio of biomass production area to target tree area in a healthy design?",
    "options": ["1 to 1", "3 to 1", "10 to 1"],
    "answer": "B",
    "explanation": "A vital rule for success! We aim for a 3:1 ratio of support species to target crops to ensure we generate enough 'fertilizer' within the system itself."
  },
  {
    "id": 59,
    "question": "According to the TAO of Syntropy, what moves every living being to perform its function?",
    "options": ["Fear of predators", "External commands from the farmer", "Internal pleasure and appetite"],
    "answer": "C",
    "explanation": "A beautiful philosophical truth! Syntropic theory suggests that every organism acts out of its own 'internal pleasure' to fulfill its task for the macro-organism."
  },
  {
    "id": 60,
    "question": "In the Food Forest Equation, which factor is the 'exponent' that magnifies success?",
    "options": ["Time", "Space", "Management"],
    "answer": "C",
    "explanation": "Spot on! The equation Success = (Time x Space)^Management shows that active, intelligent management is what multiplies the system's speed and abundance."
  },
  {
    "id": 61,
    "question": "In Syntropic philosophy, if the farm is viewed as a 'Macro-organism,' what is the primary role of each plant species?",
    "options": [
      "To compete for the most water and nutrients possible.",
      "To act as a specific organ performing a function for the health of the whole system.",
      "To produce a harvest for humans without regarding other plants."
    ],
    "answer": "B",
    "explanation": "A wonderful insight! In our course, we view the farm as a single living body. Just as your heart or lungs serve your whole body, every plant—even the non-edible ones—functions as an organ to keep the macro-organism healthy."
  },
  {
    "id": 62,
    "question": "What happens during the 'Rhizophagy Cycle' in a healthy soil system?",
    "options": [
      "Plants release toxins to kill all bacteria near their roots.",
      "Plant roots 'farm' microbes by absorbing them, extracting nutrients, and then releasing them back into the soil.",
      "Microbes eat the plant roots until the plant eventually dies."
    ],
    "answer": "B",
    "explanation": "That is a fascinating biological process! Recent research shows that plants actually attract microbes to their root tips and 'digest' their outer walls to get nutrients directly before sending the microbes back out to 'recharge'."
  },
  {
    "id": 63,
    "question": "Which specific hormone is released into the system after an 'apical' pruning event to trigger a growth pulse?",
    "options": [
      "Insulin",
      "Gibberellic Acid",
      "Adrenaline"
    ],
    "answer": "B",
    "explanation": "Spot on! When we prune the tops of support trees, they release gibberellic acid. This information travels through the underground fungal network to wake up neighboring plants and tell them it's time to grow."
  },
  {
    "id": 64,
    "question": "In the 'Liquid Carbon Pathway,' what percentage of a plant's manufactured sugars are typically sent into the soil to feed fungi?",
    "options": [
      "Less than 5%",
      "About 30-40%",
      "Exactly 100%"
    ],
    "answer": "B",
    "explanation": "Excellent observation! It may seem like a lot, but plants 'invest' nearly half of their energy into the soil to feed their microbial partners, who in return bring back water and minerals the plant cannot reach alone."
  },
  {
    "id": 65,
    "question": "How does Syntropic Agroforestry differentiate its vertical organization ('Strata') from typical forest layers?",
    "options": [
      "Strata are based purely on how tall a plant is currently.",
      "Strata are based on a plant's light requirements at maturity ('Light not Height').",
      "Strata are determined by the price of the crop in the market."
    ],
    "answer": "B",
    "explanation": "You've captured the core principle! We arrange plants based on their hunger for sun. For example, sun-loving corn is in the 'Emergent' stratum even though it is much shorter than a canopy tree."
  },
  {
    "id": 66,
    "question": "Why is 'Selective Weeding' preferred over clearing all spontaneous vegetation?",
    "options": [
      "Because it is less work for the farmer to leave some weeds.",
      "Because weeds are often 'placenta' species attempting to heal the soil and indicate soil health.",
      "Because weeds provide a place for pests to hide so they don't eat the crops."
    ],
    "answer": "B",
    "explanation": "A very thoughtful approach. We view 'weeds' as a diagnosis. If they appear, they are trying to cover a 'wound' in the soil. We only remove them when their work is done and they transition into senescence."
  },
  {
    "id": 67,
    "question": "What is the primary function of a 'C-Line' in a large-scale system layout?",
    "options": [
      "It is a dedicated pathway for tractors only.",
      "It is a dedicated biomass line focused on producing mulch for the A-lines.",
      "It is the line where the most expensive fruit trees are planted."
    ],
    "answer": "B",
    "explanation": "Precisely! C-lines are our 'biomass engines'. We plant fast-growing support species there specifically to prune them and 'feed' the high-value tree lines nearby."
  },
  {
    "id": 68,
    "question": "In Ernst Götsch's TAO philosophy, why do organisms perform their specific tasks in the ecosystem?",
    "options": [
      "Out of fear of being pruned or eaten.",
      "Out of internal pleasure and an appetite to fulfill their function.",
      "Because the farmer forces them to through chemical inputs."
    ],
    "answer": "B",
    "explanation": "That is a beautiful philosophical truth. Götsch teaches that life is cooperative; every being—including insects—acts out of an internal 'appetite' to serve the macro-organism."
  },
  {
    "id": 69,
    "question": "What does the measurement 'Amax' help a designer in Taiwan determine?",
    "options": [
      "The maximum amount of fruit a tree can produce.",
      "A tree's photosynthetic capacity and its objective shade tolerance.",
      "The maximum age a tree will reach before it dies."
    ],
    "answer": "B",
    "explanation": "Correct! Using Amax data allows us to scientifically place native Taiwanese trees into the correct strata (Emergent to Low) based on their actual capacity to process sunlight."
  },
  {
    "id": 70,
    "question": "Which successional stage is characterized by high lignin (woody) biomass and the building of fungal networks?",
    "options": [
      "Colonization (Placenta)",
      "Accumulation (Secondary)",
      "Abundance (Climax)"
    ],
    "answer": "B",
    "explanation": "Exactly. During the Accumulation stage, we focus on 'fattening' the system with wood and carbon to create the rich, fungal-heavy soil that Climax species love."
  },
  {
    "id": 71,
    "question": "What is the 'Department of Censorship' in Syntropic theory?",
    "options": [
      "A government agency that regulates farm sizes.",
      "A term for pests and diseases that remove plants that are no longer beneficial to the system.",
      "A group of farmers who decide which seeds can be planted."
    ],
    "answer": "B",
    "explanation": "A deep philosophical catch! Pests are seen as the system's quality control; they target the weak or 'senescent' plants to make room for new life."
  },
  {
    "id": 72,
    "question": "Which of these describes the 'Poop Loop' (Microbial Loop) in nutrient cycling?",
    "options": [
      "Using only animal manure as the sole source of fertilizer.",
      "Protozoa and nematodes eating bacteria/fungi and releasing excess nutrients in plant-available form.",
      "The process of cleaning seeds before planting."
    ],
    "answer": "B",
    "explanation": "Wonderful! This is nature's own fertilizer factory. Because predators like protozoa have less nitrogen than the bacteria they eat, they 'poop' out the extra as ammonium right near the plant roots."
  },
  {
    "id": 73,
    "question": "Why is 'Muvuca' (high-density seed mixing) used instead of just planting single saplings?",
    "options": [
      "To save money on buying plastic pots.",
      "To allow natural selection to determine which individuals are best adapted to the specific micro-site.",
      "To attract more birds to the farm early on."
    ],
    "answer": "B",
    "explanation": "Spot on! By planting thousands of seeds, we let nature choose the 'winner' for each specific spot, resulting in a much stronger and more resilient forest."
  },
  {
    "id": 74,
    "question": "What vertical gap should ideally be maintained between different strata canopies to prevent conflict?",
    "options": [
      "None; they should be as close as possible.",
      "Approximately 1 meter.",
      "At least 10 meters."
    ],
    "answer": "B",
    "explanation": "Great tactical thinking! Keeping a clear vertical gap (often by pairing Emergent with Medium strata) ensures light can still filter down and provides enough space for management and airflow."
  },
  {
    "id": 75,
    "question": "Which successional phase is the 'adolescence' of the forest, focusing on lifting water and building soil structure?",
    "options": [
      "Placenta Stage",
      "Secondary Stage",
      "Climax Stage"
    ],
    "answer": "B",
    "explanation": "You've got it! The Secondary stage is all about growth and accumulation. It prepares the 'cradle' of fertility needed for the high-value Climax trees."
  },
  {
    "id": 76,
    "question": "What is 'Necromass' and why do we value it in our system?",
    "options": [
      "It is another word for chemical pesticides.",
      "It is the remains of dead microorganisms and organic matter that build stable soil carbon.",
      "It is the term for a forest that has been destroyed by fire."
    ],
    "answer": "B",
    "explanation": "Exactly! Death is the fuel for life in a syntropic system. The 'necromass' of microbes and pruned wood is what eventually turns into that beautiful black, moisture-rich soil."
  },
  {
    "id": 77,
    "question": "In Taiwan's steep terrain, why is 'Contour Planting' used?",
    "options": [
      "To make the farm look more artistic from a drone view.",
      "To slow down water runoff, increase infiltration, and trap topsoil to prevent erosion.",
      "To ensure that all trees get the exact same amount of wind."
    ],
    "answer": "B",
    "explanation": "This is a vital strategy for Taiwan. By planting perpendicular to the slope, we create 'living walls' that turn a destructive force (heavy rain) into a resource for the soil sponge."
  },
  {
    "id": 78,
    "question": "What is the primary indicator that a plant has entered 'Senescence'?",
    "options": [
      "It begins growing twice as fast as before.",
      "Its growth slows down, and it may show signs of woodiness, flowering, or seeding.",
      "Its leaves turn a bright, vibrant purple."
    ],
    "answer": "B",
    "explanation": "A key observation skill! Senescence is the 'aging' signal. When a plant stops growing vigorously, it starts sending 'slowing' messages to the whole system, which is our cue to prune."
  },
  {
    "id": 79,
    "question": "What is the 'Center of Origin' and how does it help a designer?",
    "options": [
      "It is the exact center point of the farm where the barn is built.",
      "It is the evolutionary homeland of a plant, revealing its inherent light and climate needs.",
      "It is the laboratory where the seeds were first genetically modified."
    ],
    "answer": "B",
    "explanation": "Wonderful! By knowing if a plant evolved in a savanna or a deep jungle, we know exactly which stratum it belongs to without having to guess."
  },
  {
    "id": 80,
    "question": "What is a 'Nest' in Syntropic design contexts?",
    "options": [
      "A high-density, circular planting area used to establish target trees in challenging or small spaces.",
      "A protective cage built around young trees to keep out deer.",
      "A compost pile used specifically for growing mushrooms."
    ],
    "answer": "A",
    "explanation": "You've got it! Nests are a brilliant strategy for 'islands of fertility'. They allow you to establish a complex micro-macro-organism even on a steep slope or in a small backyard."
  },
  {
    "id": 81,
    "question": "Syntropic Agroforestry views the farm as a single, coherent living entity known as what?",
    "options": [
      "A industrial factory",
      "A macro-organism",
      "A collection of independent crops"
    ],
    "answer": "B",
    "explanation": "In this philosophy, the farm is seen as a unified 'macro-organism' where every plant functions like an organ in a body, contributing to the health of the whole system."
  },
  {
    "id": 82,
    "question": "What is the primary difference between 'layers' in permaculture and 'strata' in Syntropic farming?",
    "options": [
      "Layers are about height, while strata are about light requirements",
      "Strata are only for tropical climates",
      "Layers include animals, while strata only include trees"
    ],
    "answer": "A",
    "explanation": "A key rule is 'Light, NOT Height.' Strata groups (Emergent, High, Medium, Low) are assigned based on how much sun a plant needs at maturity, regardless of how tall it physically grows."
  },
  {
    "id": 83,
    "question": "Which biological process is the opposite of 'entropy' and involves the accumulation of energy and complexity?",
    "options": [
      "Entropy",
      "Syntropy",
      "Atrophy"
    ],
    "answer": "B",
    "explanation": "Syntropy is life's tendency to organize energy and move from simple to complex systems, which is the foundational goal of this farming method."
  },
  {
    "id": 84,
    "question": "Why does a syntropic farmer use heavy pruning to manage support species?",
    "options": [
      "To kill the trees so they stop taking water",
      "To stimulate a 'growth pulse' and cycle organic matter to the soil",
      "To make the farm look more organized for visitors"
    ],
    "answer": "B",
    "explanation": "Pruning mimics natural disturbances like windstorms, releasing growth hormones and providing mulch that feeds the soil food web and accelerates succession."
  },
  {
    "id": 85,
    "question": "In a well-balanced abundance system, what percentage of the 'Emergent' stratum should ideally be occupied by canopy coverage?",
    "options": [
      "80%",
      "50%",
      "20%"
    ],
    "answer": "C",
    "explanation": "The emergent layer is kept sparse (around 20%) to ensure that enough sunlight filters down to the High, Medium, and Low strata beneath it."
  },
  {
    "id": 86,
    "question": "What is the role of 'Placenta' species in a newly planted system?",
    "options": [
      "To produce high-value timber immediately",
      "To provide early soil coverage and nurture the 'embryo' of the future forest",
      "To act as permanent windbreaks that never change"
    ],
    "answer": "B",
    "explanation": "Placenta species (like radish or corn) are the first 'mothers' of the forest, protecting the soil and building initial fertility for the trees that follow."
  },
  {
    "id": 87,
    "question": "Which successional phase is considered the 'adolescence' of the forest, characterized by rapid biomass accumulation?",
    "options": [
      "Colonization",
      "Accumulation (Secondary)",
      "Abundance (Climax)"
    ],
    "answer": "B",
    "explanation": "In the Accumulation or Secondary phase, the system 'fattens up' by storing carbon in wood and building the soil structure needed for higher-value crops."
  },
  {
    "id": 88,
    "question": "How does Syntropic philosophy describe the relationship between plants in a forest?",
    "options": [
      "Brutal competition for survival",
      "Unconditional love and cooperation",
      "Indifference to one another"
    ],
    "answer": "B",
    "explanation": "Ernst Götsch's TAO philosophy suggests that nature is driven by cooperation, where every being fulfills a specific task for the benefit of the macro-organism."
  },
  {
    "id": 89,
    "question": "In the 'Food Forest Equation' [Success = (Time x Space)^Management], what does 'Management' represent?",
    "options": [
      "The cost of buying new seeds",
      "The 'exponent' or accelerator that determines the speed of success",
      "The size of the land being used"
    ],
    "answer": "B",
    "explanation": "Management (especially pruning) is the power that magnifies the spatial and temporal design, making it 95% of the success of the system."
  },
  {
    "id": 90,
    "question": "What is the primary function of C4 grasses (like Mombasa) in a syntropic system?",
    "options": [
      "They are primary food crops for human consumption",
      "They act as high-efficiency biomass engines to capture carbon and create mulch",
      "They are invasive and should be removed entirely"
    ],
    "answer": "B",
    "explanation": "C4 grasses use a specialized form of photosynthesis to build organic matter very quickly in sunny conditions, serving as a 'mulch factory'."
  },
  {
    "id": 91,
    "question": "Which of these is a sign that a system is transitioning from 'Accumulation' to 'Abundance'?",
    "options": [
      "The soil becomes harder and drier",
      "The overall vegetation color changes to a brighter, more vibrant green",
      "The farmer needs to add more chemical fertilizer"
    ],
    "answer": "B",
    "explanation": "Improved leaf color and fungal dominance in the soil are key indicators that the system is building natural capital and becoming self-regulating."
  },
  {
    "id": 92,
    "question": "In the context of design layout, what are 'Strata Pairs' used for?",
    "options": [
      "To combine plants with identical height needs",
      "To simplify management by pairing layers like Emergent with Medium",
      "To ensure that only one type of fruit is harvested per row"
    ],
    "answer": "B",
    "explanation": "By 'skipping' a layer (e.g., Emergent + Medium or High + Low), you create vertical space that reduces canopy conflict and makes pruning easier."
  },
  {
    "id": 93,
    "question": "What does the term 'Senescence' refer to?",
    "options": [
      "The peak growth phase of a plant",
      "The biological aging and slowing of a plant's growth",
      "The process of seeds germinating in the soil"
    ],
    "answer": "B",
    "explanation": "Senescent plants send 'slowing' signals to the rest of the system. Syntropic management uses pruning to reset these plants back into a vigorous vegetative state."
  },
  {
    "id": 94,
    "question": "Why is it recommended to place woody logs directly on the soil when mulching?",
    "options": [
      "To stop people from walking on the beds",
      "To feed beneficial fungi and act as a water reservoir",
      "To prevent birds from eating seeds"
    ],
    "answer": "B",
    "explanation": "Woody material (lignin) on the bottom attracts fungi and mimics 'nurse logs' found in old-growth forests, while leafy material on top retains moisture."
  },
  {
    "id": 95,
    "question": "What is the 'Department of Censorship' in syntropic theory?",
    "options": [
      "A government agency that regulates seeds",
      "Pests and diseases that remove plants that are no longer beneficial to the system",
      "A committee of farmers who decide which trees to prune"
    ],
    "answer": "B",
    "explanation": "Pests are seen as diagnostic signals; they target weak or senescent plants to make room for new, more dynamic life to take over."
  },
  {
    "id": 96,
    "question": "Which native Taiwanese tree is a highly valued 'Emergent' for biomass and high-value timber?",
    "options": [
      "Banana",
      "Stout Camphor Tree (C. kanehirae)",
      "Lettuce"
    ],
    "answer": "B",
    "explanation": "Native trees like the Stout Camphor or Formosan Sweet Gum are ideal as the long-term 'Climax' emergents in Taiwanese systems."
  },
  {
    "id": 97,
    "question": "What does 'Synchronization' mean in system management?",
    "options": [
      "Using a computer to water the plants at the same time",
      "Aligning management activities (like pruning) to trigger a collective growth pulse",
      "Planting only one species across the entire farm"
    ],
    "answer": "B",
    "explanation": "Synchronization aligns the pruning and replanting of the whole system so the macro-organism receives a unified message to grow."
  },
  {
    "id": 98,
    "question": "According to Ernst Götsch, what is 'Water has to be planted' referring to?",
    "options": [
      "The use of expensive irrigation pipes",
      "Creating microclimates through reforestation that induce rainfall and soil moisture",
      "The process of pouring water directly into seed holes"
    ],
    "answer": "B",
    "explanation": "Healthy, stratified forests act as a 'biotic pump,' creating the conditions for condensation, rainfall, and high soil water retention."
  },
  {
    "id": 99,
    "question": "Which of these is the first step in the 'Order of Operations' for establishing a system?",
    "options": [
      "Adding soil amendments",
      "Design and foresight",
      "Planting the target fruit trees"
    ],
    "answer": "B",
    "explanation": "Because syntropic systems are complex, success starts with a well-thought-out design that considers the system's evolution over decades."
  },
  {
    "id": 100,
    "question": "What is 'Succession' primarily concerned with in this context?",
    "options": [
       "The legal transfer of farm ownership.",
       "The evolution of the system over time, moving from simple colonization to complex abundance.",
       "Planting the same crop every year."
    ],
    "answer": "B",
    "explanation": "Succession is the dimension of Time. We plan how the system changes from the placenta phase (days/months) to the climax phase (decades/centuries)."
  },
  {
    "id": 101,
    "question": "What is the primary function of 'Emergent' trees like Eucalyptus or Stout Camphor in a Syntropic system, aside from timber?",
    "options": [
      "To shade out all other plants.",
      "To act as 'condensers' of water and pumps for thermodynamics.",
      "To attract tourists to the farm."
    ],
    "answer": "B",
    "explanation": "Correct! These giants interact with the atmosphere to condense humidity, and their massive root systems pump water from deep underground, hydrating the entire system."
  },
  {
    "id": 102,
    "question": "In the 'Consortium' design, to which Stratum does Coffee (Coffea arabica) typically belong?",
    "options": [
      "Emergent (needs 100% sun).",
      "High (needs 60-80% sun).",
      "Low or Medium (evolved in the understory)."
    ],
    "answer": "C",
    "explanation": "Excellent! Coffee is naturally an understory plant (Low/Medium). Growing it in full sun stresses the plant; growing it under the shade of a Syntropic canopy keeps it healthy and productive."
  },
  {
    "id": 103,
    "question": "What is the 'System Accumulator' in the context of succession?",
    "options": [
      "A machine used to harvest crops.",
      "A fast-growing, woody species (like Acacia) planted specifically to be pruned for biomass.",
      "A storage shed for fertilizers."
    ],
    "answer": "B",
    "explanation": "Spot on! System Accumulators are the engines of the farm. We grow them not for their fruit, but for the carbon and wood they provide to the soil when pruned."
  },
  {
    "id": 104,
    "question": "When pruning a tree to stimulate growth, why is 'Apical Dominance' important to understand?",
    "options": [
      "It explains why cutting the main tip (apex) encourages bushier, lateral growth.",
      "It suggests that we should never cut the top of a tree.",
      "It refers to the dominant species in the forest."
    ],
    "answer": "A",
    "explanation": "Precisely! By breaking apical dominance, we redistribute growth hormones (auxins) to lower buds, creating a denser, more complex structure."
  },
  {
    "id": 105,
    "question": "In Taiwan, what is a specific benefit of 'Contour Planting' during typhoon season?",
    "options": [
      "It looks nicer in photos.",
      "It prevents landslides by slowing water velocity and increasing infiltration.",
      "It makes the wind blow faster."
    ],
    "answer": "B",
    "explanation": "A vital safety measure! Planting along contours creates living barriers that stop soil erosion and turn destructive heavy rains into stored groundwater."
  },
  {
    "id": 106,
    "question": "What is the typical lifespan of 'Placenta I' species like arugula, radish, or beans?",
    "options": [
      "0 to 6 months.",
      "2 to 5 years.",
      "10 to 20 years."
    ],
    "answer": "A",
    "explanation": "Correct. These are the sprinters of the system. They germinate quickly, cover the soil instantly, and yield a harvest while the longer-term plants are just waking up."
  },
  {
    "id": 107,
    "question": "According to Ernst Götsch, what is the 'Currency' of life in the soil?",
    "options": [
      "Nitrogen.",
      "Carbon.",
      "Money."
    ],
    "answer": "B",
    "explanation": "Deep insight! Carbon is the energy currency. Through photosynthesis, plants print this currency (sugars) and pay the soil microbes to work for them."
  },
  {
    "id": 108,
    "question": "Why do we avoid 'Monoculture' even in the rows of a Syntropic system?",
    "options": [
      "Because monocultures exhaust specific nutrients and attract specific pests.",
      "Because monoculture seeds are too expensive.",
      "Because it is illegal."
    ],
    "answer": "A",
    "explanation": "Exactly. Nature never plants just one thing. Diversity confuses pests and ensures that different root systems mine nutrients from different soil depths."
  },
  {
    "id": 109,
    "question": "What is the 'Flying River' concept related to large-scale Agroforestry?",
    "options": [
      "A new irrigation technology involving drones.",
      "The massive amount of water vapor transpired by forests that creates rain downwind.",
      "A river that flows uphill."
    ],
    "answer": "B",
    "explanation": "A poetic and scientific truth! Large contiguous forests, like those we mimic, release so much moisture they actually generate their own weather systems and rainfall."
  },
  {
    "id": 110,
    "question": "If you see 'Oxalis' (sorrel) appearing spontaneously in your system, what is the soil diagnosis?",
    "options": [
      "The soil is too rich in nitrogen.",
      "The soil is compacted and likely acidic.",
      "The soil is perfect."
    ],
    "answer": "B",
    "explanation": "Good diagnosis! Indicators like Oxalis tell us the soil is tired. We don't poison the Oxalis; we aerate the soil and add organic matter to make the Oxalis unnecessary."
  },
  {
    "id": 111,
    "question": "What is the ideal orientation for tree rows in a Syntropic system, if the slope allows?",
    "options": [
      "North-South.",
      "East-West.",
      "It doesn't matter."
    ],
    "answer": "A",
    "explanation": "Correct! A North-South orientation generally ensures that both sides of the row get equal sunlight throughout the day, preventing one side from being permanently shaded."
  },
  {
    "id": 112,
    "question": "What is the role of the 'Banana' plant in the first 2 years of a system?",
    "options": [
      "Only fruit production.",
      "It acts as a 'water tank' and shade-mother for young trees.",
      "It is a weed that should be removed."
    ],
    "answer": "B",
    "explanation": "The Banana is the Queen of the Placenta! Its pseudostems are full of water, keeping the system hydrated, and its large leaves protect young cacao or coffee from harsh noon sun."
  },
  {
    "id": 113,
    "question": "When harvesting a Banana bunch, how should the pseudostem be managed?",
    "options": [
      "Cut it at the base and use it as heavy, wet mulch around a neighbor tree.",
      "Leave it standing until it rots.",
      "Burn it to create ash."
    ],
    "answer": "A",
    "explanation": "Perfect! That stem is 90% water and nutrients. Laying it next to a demanding tree (like Cacao) acts as a slow-release irrigation and fertilizer pack."
  },
  {
    "id": 114,
    "question": "What differentiates a 'Secondary' forest stage from a 'Climax' stage?",
    "options": [
      "Secondary is about rapid growth and wood accumulation; Climax is about quality and stability.",
      "Secondary has no trees; Climax has trees.",
      "Secondary forests are planted by humans; Climax forests are not."
    ],
    "answer": "A",
    "explanation": "Well defined. Secondary species (like Capulin or Acacia) work hard to build resources. Climax species (like Oak or Camphor) enjoy those resources to live long, stable lives."
  },
  {
    "id": 115,
    "question": "In the 'Muvuca' seed mix, what is the approximate ratio of tree seeds to biomass/grass seeds?",
    "options": [
      "mostly tree seeds.",
      "mostly biomass/grass seeds (by volume/count).",
      "50/50 exactly."
    ],
    "answer": "B",
    "explanation": "Interesting, isn't it? We need massive amounts of biomass seeds (placenta) to protect the fewer, high-value tree seeds. We plant the forest, but we also plant the 'soil builders'."
  },
  {
    "id": 116,
    "question": "Why is 'Pollarding' (cutting off the top branches) used on support trees?",
    "options": [
      "To kill the tree.",
      "To keep the tree at a manageable height and produce pole-wood.",
      "To stop the roots from growing."
    ],
    "answer": "B",
    "explanation": "Correct! Pollarding allows us to keep a large tree in the system without it shading everything out, while harvesting useful wood for construction or mulch."
  },
  {
    "id": 117,
    "question": "What is 'Glomalin'?",
    "options": [
      "A synthetic fertilizer.",
      "A sticky protein produced by mycorrhizal fungi that glues soil particles into stable aggregates.",
      "A type of pest."
    ],
    "answer": "B",
    "explanation": "A microscopic miracle! Glomalin is the 'super glue' of the soil. It gives soil its structure, preventing erosion and allowing air and water to enter."
  },
  {
    "id": 118,
    "question": "How does Syntropic Agroforestry view 'Competition' for water?",
    "options": [
      "Plants always fight for water.",
      "With proper stratification, plants create a 'hydraulic lift' sharing water between layers.",
      "Water is not important."
    ],
    "answer": "B",
    "explanation": "A paradigm shift! Deep-rooted trees pull water up and release it into the upper soil layers at night, actually watering the shallow-rooted vegetables."
  },
  {
    "id": 119,
    "question": "Which of these is a 'Low' stratum crop often used in Taiwan?",
    "options": [
      "Papaya.",
      "Ginger or Turmeric.",
      "Coconut."
    ],
    "answer": "B",
    "explanation": "Correct! Ginger and Turmeric love the dappled shade of the forest floor. They thrive in the 'Low' stratum under the canopy of fruit trees."
  },
  {
    "id": 120,
    "question": "What is the 'Edge Effect' we try to avoid inside the system?",
    "options": [
      "The drying effect of wind and sun entering from the sides of a forest.",
      "The sharp edge of the pruning shears.",
      "Planting too close to the fence."
    ],
    "answer": "A",
    "explanation": "Well observed. We plant dense 'border lines' or windbreaks to stop the 'Edge Effect' from drying out the microclimate inside our agroforest."
  },
  {
    "id": 121,
    "question": "Why do we plant Eucalyptus in Syntropic systems despite it being non-native to many regions?",
    "options": [
      "Because it kills all other plants.",
      "Because it is the 'Formula 1' of photosynthesis, growing biomass faster than almost any other tree.",
      "Because koalas need food everywhere."
    ],
    "answer": "B",
    "explanation": "It's a functional choice! We use Eucalyptus as a tool, not a forest invader. Its incredible growth rate allows us to generate tons of organic matter to heal the soil quickly."
  },
  {
    "id": 122,
    "question": "What is the primary sign that it is time to prune a 'Support' tree?",
    "options": [
      "When the moon is full.",
      "When the canopy closes and starts blocking light to the lower strata.",
      "When the tree drops its leaves."
    ],
    "answer": "B",
    "explanation": "Light is the trigger! As soon as the lower layers (like coffee or veggies) are shaded beyond their capacity, we must prune the upper layer to reopen the 'light window'."
  },
  {
    "id": 123,
    "question": "What does 'Species Succession' mimic?",
    "options": [
      "A snapshot of a garden.",
      "The evolution of a forest over time, from field to jungle.",
      "Crop rotation in conventional farming."
    ],
    "answer": "B",
    "explanation": "Exactly. We condense time. By planting all stages at once (Placenta to Climax), we accelerate the natural timeline of forest recovery."
  },
  {
    "id": 124,
    "question": "What is the role of 'Root Exudates'?",
    "options": [
      "Waste products that plants try to get rid of.",
      "Sugars and proteins secreted by roots to attract and feed specific beneficial microbes.",
      "Toxins that kill neighboring plants."
    ],
    "answer": "B",
    "explanation": "Plants are generous! They don't just take from the soil; they pump liquid carbon (sugar) into it to farm the bacteria and fungi they need."
  },
  {
    "id": 125,
    "question": "In Taiwan, which native legume tree is excellent for nitrogen fixation and wind protection?",
    "options": [
      "Pine.",
      "Pongamia pinnata (Millettia pinnata / 水黃皮).",
      "Betel Nut."
    ],
    "answer": "B",
    "explanation": "A great local ally! Pongamia is hardy, salt-tolerant, fixes nitrogen, and provides great biomass, making it perfect for Taiwan's coastal and windy areas."
  },
  {
    "id": 126,
    "question": "What happens if you plant a 'High' stratum tree in the 'Emergent' stratum's position?",
    "options": [
      "It will grow perfectly.",
      "It will become stressed, susceptible to pests, and likely fail because it cannot handle 100% exposure.",
      "It will turn into an Emergent tree."
    ],
    "answer": "B",
    "explanation": "Respect the nature of the plant! A High stratum tree (like an Apple or Mango) needs some protection. Forcing it to be the 'King' (Emergent) stresses its metabolism."
  },
  {
    "id": 127,
    "question": "What is the 'Time Console' concept?",
    "options": [
      "A device to measure harvest weight.",
      "Managing the farm so that as one crop finishes (e.g., radish), the next one (e.g., beans) is already taking over the space.",
      "A video game about farming."
    ],
    "answer": "B",
    "explanation": "Like a relay race! There is never 'empty space' or 'empty time'. The decline of one species is the launchpad for the next."
  },
  {
    "id": 128,
    "question": "Why is 'Tilling' (ploughing) generally minimized after the initial installation?",
    "options": [
      "Because tractors are expensive.",
      "Because it destroys the fungal networks and oxidizes soil carbon.",
      "Because it makes the soil too soft."
    ],
    "answer": "B",
    "explanation": "Correct! We want a 'Living Soil'. Tilling tears up the fungal internet. We use roots and soil life to aerate the soil, not metal blades."
  },
  {
    "id": 129,
    "question": "What is 'Ecophysiology'?",
    "options": [
      "The study of how an organism's physiology interacts with its environment.",
      "The economy of farming.",
      "A type of yoga."
    ],
    "answer": "A",
    "explanation": "This is the science behind our intuition. Understanding a plant's ecophysiology helps us know exactly how much light, water, and nutrients it needs to be happy."
  },
  {
    "id": 130,
    "question": "Which of these is a 'Medium' stratum fruit tree?",
    "options": [
      "Coconut (Emergent).",
      "Cacao (Theobroma cacao).",
      "Corn (Emergent)."
    ],
    "answer": "B",
    "explanation": "Correct! Cacao evolved in the Amazon understory. It loves the 'Medium' stratum, protected by tall canopy trees but above the low shrubs."
  },
  {
    "id": 131,
    "question": "What is the benefit of including 'Ricinus' (Castor Bean) in the Placenta stage?",
    "options": [
      "It creates edible beans.",
      "It grows incredibly fast, has deep roots, and produces massive biomass in just months.",
      "It is decorative."
    ],
    "answer": "B",
    "explanation": "The Castor Bean is a biomass champion! (Warning: seeds are toxic). It establishes quickly, breaks compacted soil, and provides the first heavy pruning material."
  },
  {
    "id": 132,
    "question": "How does 'Thermodynamics' apply to Syntropy?",
    "options": [
      "It doesn't.",
      "Syntropic systems cool the planet by converting solar radiation into biomass rather than heat.",
      "Syntropic systems create heat islands."
    ],
    "answer": "B",
    "explanation": "A planetary cooling system! Bare soil reflects heat (albedo). A complex forest absorbs that heat and turns it into life (carbon bonds) and cool water vapor."
  },
  {
    "id": 133,
    "question": "What is the 'O horizon' in soil science?",
    "options": [
      "The bottom layer of rock.",
      "The organic layer on the surface (leaves, mulch).",
      "The layer of clay."
    ],
    "answer": "B",
    "explanation": "The 'O' stands for Organic! In Syntropy, we are constantly building this 'O Horizon' with pruning material to mimic the forest floor."
  },
  {
    "id": 134,
    "question": "Why do we plant 'High Density' (e.g., 20-30 seeds per square meter)?",
    "options": [
      "To waste money.",
      "To encourage positive competition and rapid site occupation.",
      "To make sure at least one survives."
    ],
    "answer": "B",
    "explanation": "Plants like company! High density forces plants to grow straight and tall (upward orientation) and ensures the soil is completely covered by green leaves."
  },
  {
    "id": 135,
    "question": "What is a 'Consortium'?",
    "options": [
      "A business meeting.",
      "A group of companion plants from different strata and life cycles planted together.",
      "A single row of corn."
    ],
    "answer": "B",
    "explanation": "Exactly. A consortium is a team. It might include Lettuce (Placenta/Low), Corn (Placenta/Emergent), and an Orange tree (Secondary/Medium) all in the same space."
  },
  {
    "id": 136,
    "question": "What is the primary error when a farmer sees 'Strata' as 'Height'?",
    "options": [
      "They prune the wrong trees.",
      "They put a short, sun-loving plant in the shade, thinking it belongs there because it is short.",
      "They plant too many tall trees."
    ],
    "answer": "B",
    "explanation": "A critical distinction! A cactus is short but needs 100% sun (Emergent). If you put it in the 'Low' stratum (shade) because it is short, it will rot."
  },
  {
    "id": 137,
    "question": "Which microorganism is primarily responsible for decomposing woody (high C:N) mulch?",
    "options": [
      "Bacteria.",
      "Fungi.",
      "Viruses."
    ],
    "answer": "B",
    "explanation": "Fungi are the wood-eaters! Bacteria prefer soft greens (high nitrogen). Fungi are the only ones with the enzymes to break down tough lignin in wood."
  },
  {
    "id": 138,
    "question": "What is the 'biomass ratio' usually aiming for?",
    "options": [
      "More biomass generation than extraction (harvest).",
      "More extraction than generation.",
      "Equal amounts."
    ],
    "answer": "A",
    "explanation": "The system must pay for itself! We need to grow more energy (wood/leaves) to feed the soil than we remove in the form of fruit/vegetables."
  },
  {
    "id": 139,
    "question": "In the 'Accumulation' phase, what is the soil characteristic?",
    "options": [
      "Bacterially dominated.",
      "Transitioning from bacterial to fungal dominance.",
      "Sterile."
    ],
    "answer": "B",
    "explanation": "Correct. As we add wood and carbon, the soil biology shifts. We move from the bacterial dominance of a field to the fungal dominance of a forest."
  },
  {
    "id": 140,
    "question": "What is 'Tithonia diversifolia' (Mexican Sunflower) used for?",
    "options": [
      "It is a useless weed.",
      "It is a nutrient accumulator, rich in Phosphorus, used for chop-and-drop.",
      "It is a timber tree."
    ],
    "answer": "B",
    "explanation": "A phosphorus bomb! Tithonia grows rapidly and accumulates high levels of phosphorus in its leaves. Chopping it feeds this essential nutrient to fruit trees."
  },
  {
    "id": 141,
    "question": "What is the 'Harvest of the Sun'?",
    "options": [
      "Solar panels.",
      "Photosynthesis.",
      "Selling sunflowers."
    ],
    "answer": "B",
    "explanation": "Farming is harvesting light! Every leaf is a solar panel. Our goal is to arrange leaves so that 100% of the sunlight hitting the farm is captured by a plant."
  },
  {
    "id": 142,
    "question": "What happens if you do NOT prune a Syntropic system?",
    "options": [
      "It becomes a 'Natural' forest.",
      "It stagnates, photosynthesis slows down, and the system oxidizes.",
      "It produces more fruit."
    ],
    "answer": "B",
    "explanation": "Counter-intuitive but true. Without the disturbance of pruning, the system settles into a slow equilibrium. Pruning keeps it in an 'aggrading' (growing) phase."
  },
  {
    "id": 143,
    "question": "What is 'Phytosanitary' pruning?",
    "options": [
      "Pruning to shape the tree.",
      "Pruning to remove diseased or damaged parts to maintain health.",
      "Pruning for biomass."
    ],
    "answer": "B",
    "explanation": "Like surgery. If a branch is sick, we remove it to prevent the spread of disease and to signal the plant to grow new, healthy tissue."
  },
  {
    "id": 144,
    "question": "In Taiwan, what is 'Formosan Koelreuteria' (Flame Gold Rain Tree) good for?",
    "options": [
      "Nothing.",
      "It is a hardy native pioneer/secondary species that tolerates poor soil.",
      "It produces expensive timber."
    ],
    "answer": "B",
    "explanation": "A tough native! Using native pioneers like the Flame Gold Rain Tree ensures high survival rates and supports local biodiversity."
  },
  {
    "id": 145,
    "question": "What is the 'Dripline' of a tree?",
    "options": [
      "The trunk.",
      "The outer edge of the canopy where rain drips onto the soil.",
      "The root tip."
    ],
    "answer": "B",
    "explanation": "This is the active zone! The feeder roots are usually concentrated at the dripline. This is where we apply mulch and amendments."
  },
  {
    "id": 146,
    "question": "Why do we plant 'lines' of trees rather than scattered individual trees?",
    "options": [
      "It looks organized.",
      "It facilitates management (pruning/harvesting) and creates 'tunnels' of light.",
      "It uses more trees."
    ],
    "answer": "B",
    "explanation": "Management is key. Continuous lines allow us to move efficiently through the system and create clear alleys for biomass production."
  },
  {
    "id": 147,
    "question": "What is the difference between 'Entropy' and 'Syntropy' in thermodynamics?",
    "options": [
      "They are the same.",
      "Entropy disperses energy; Syntropy concentrates energy.",
      "Entropy is for biology; Syntropy is for physics."
    ],
    "answer": "B",
    "explanation": "The core philosophy! The universe runs down (entropy), but life builds up (syntropy). We farm to align with the building-up force."
  },
  {
    "id": 148,
    "question": "What is a 'Biomass Island' or 'Tree Row' vs an 'Alley'?",
    "options": [
      "They are the same.",
      "The Tree Row is where the long-term trees live; the Alley is where we grow grass/biomass to feed the row.",
      "The Alley is for parking."
    ],
    "answer": "B",
    "explanation": "The engine and the passenger. The alley (often grass) produces the fuel (mulch) that is thrown onto the tree row to feed the crops."
  },
  {
    "id": 149,
    "question": "Which of these is a 'Secondary I' (short lifecycle) tree?",
    "options": [
      "Oak.",
      "Papaya.",
      "Mahogany."
    ],
    "answer": "B",
    "explanation": "Correct. Papaya grows fast, fruits early (year 1-3), and then declines. It bridges the gap between the Placenta vegetables and the longer-term fruit trees."
  },
  {
    "id": 150,
    "question": "What is the 'Information' given to the system by pruning shears?",
    "options": [
      "Panic.",
      "Renewal and Growth.",
      "Death."
    ],
    "answer": "B",
    "explanation": "Pruning is communication! The cut tells the plant: 'You are not old; grow again!' This pulse of youth rejuvenates the whole system."
  },
  {
    "id": 151,
    "question": "Can 'Pineapple' be integrated into a Syntropic system?",
    "options": [
      "No, it needs monoculture.",
      "Yes, it is a great 'Low' stratum plant for the early years.",
      "Yes, but only in the shade."
    ],
    "answer": "B",
    "explanation": "Absolutely! Pineapple is a classic bromeliad. It fits perfectly in the Low stratum of the Placenta/Secondary phase, sitting under the young trees."
  },
  {
    "id": 152,
    "question": "What is the role of 'Organic Matter' in water retention?",
    "options": [
      "It repels water.",
      "It acts like a sponge, holding many times its weight in water.",
      "It has no effect."
    ],
    "answer": "B",
    "explanation": "The soil sponge! Increasing organic matter by just 1% can increase water holding capacity by 20,000 gallons per acre."
  },
  {
    "id": 153,
    "question": "Why do we cut grass (Mombasa/Napier) just before it flowers/seeds?",
    "options": [
      "To prevent it from becoming a weed.",
      "Because that is the moment of maximum energy/nitrogen accumulation in the leaves.",
      "To make it look tidy."
    ],
    "answer": "B",
    "explanation": "Timing is everything. Before flowering, the plant pumps energy up. After flowering, the energy goes into the seed or lignifies. We harvest at the peak of vegetative energy."
  },
  {
    "id": 154,
    "question": "What is the 'Vegetative Period' vs 'Reproductive Period'?",
    "options": [
      "Growing leaves vs Growing fruit/seeds.",
      "Day vs Night.",
      "Winter vs Summer."
    ],
    "answer": "A",
    "explanation": "Correct. Syntropy aims to keep the system in a 'Vegetative' (youthful) state for as long as possible to maximize biomass and photosynthesis."
  },
  {
    "id": 155,
    "question": "What does 'Species Diversity' provide to the system's immune system?",
    "options": [
      "Confusion.",
      "Resilience; pests cannot find their target easily and predator insects have habitat.",
      "Competition."
    ],
    "answer": "B",
    "explanation": "Diversity is security. A complex system has natural checks and balances, so no single pest can destroy the whole farm."
  },
  {
    "id": 156,
    "question": "What is 'Carbon Sequestration'?",
    "options": [
      "Burning wood.",
      "Capturing atmospheric CO2 and storing it in plant biomass and soil.",
      "Releasing CO2."
    ],
    "answer": "B",
    "explanation": "We are climate coolers. By growing wood and building soil humus, we are physically taking carbon out of the sky and putting it back in the ground."
  },
  {
    "id": 157,
    "question": "What is the 'C:N Ratio' (Carbon to Nitrogen)?",
    "options": [
      "The price of crops.",
      "The balance of woody material to green material.",
      "The ratio of compost to soil."
    ],
    "answer": "B",
    "explanation": "Balancing the diet! High C (wood) feeds fungi; High N (greens) feeds bacteria. A healthy system cycles both."
  },
  {
    "id": 158,
    "question": "In Taiwan, why is 'Bamboo' handled with caution in mixed systems?",
    "options": [
      "It is aggressive and can dominate if not managed strictly.",
      "It poisons the soil.",
      "It doesn't grow well."
    ],
    "answer": "A",
    "explanation": "Bamboo is powerful! It is a great biomass source, but its root system is so aggressive it can outcompete fruit trees if not trenched or managed carefully."
  },
  {
    "id": 159,
    "question": "What is 'Successional Pruning'?",
    "options": [
      "Pruning trees as they exit their productive life cycle to make room for the next stage.",
      "Pruning only on Sundays.",
      "Pruning seedlings."
    ],
    "answer": "A",
    "explanation": "The passing of the baton. When the Papaya is done, we prune it out (or chop it) to give light to the Coffee or Jackfruit growing beneath it."
  },
  {
    "id": 160,
    "question": "What is the role of 'Animals' in a mature Syntropic system?",
    "options": [
      "They are not allowed.",
      "They can be integrated as mobile pruners and fertilizers (silvopasture).",
      "They are only for pets."
    ],
    "answer": "B",
    "explanation": "Animals are the mobile leg of the system! Chickens, pigs, or cows can cycle nutrients and manage grass, provided the trees are established enough to not be damaged."
  },
  {
    "id": 161,
    "question": "What is 'Arenchyma'?",
    "options": [
      "A type of spider.",
      "Spongy tissue in plants (like Banana) that stores air/water.",
      "A disease."
    ],
    "answer": "B",
    "explanation": "It's why Bananas are cool. This tissue holds water, making banana stems excellent emergency hydration for the soil during drought."
  },
  {
    "id": 162,
    "question": "Why is 'Soil Coverage' non-negotiable?",
    "options": [
      "Bare soil is dead soil; UV rays sterilize it and rain compacts it.",
      "It looks messy.",
      "It uses too much mulch."
    ],
    "answer": "A",
    "explanation": "The golden rule! In a forest, you never see bare soil. We must always keep the 'skin' of the earth covered to protect the life underneath."
  },
  {
    "id": 163,
    "question": "What is 'Mycelium'?",
    "options": [
      "A root.",
      "The vegetative part of a fungus, consisting of a network of fine white filaments.",
      "A seed."
    ],
    "answer": "B",
    "explanation": "The internet of the soil! These white threads connect plant roots, transport nutrients, and decompose organic matter."
  },
  {
    "id": 164,
    "question": "What is a 'Support Species'?",
    "options": [
      "A plant grown to hold up a vine.",
      "A plant grown not for harvest, but to serve the system (biomass, nitrogen, shade).",
      "A weed."
    ],
    "answer": "B",
    "explanation": "The unsung heroes! While we sell the mangoes, it is the Inga or Gliricidia trees that are working hard to feed and protect the mango tree."
  },
  {
    "id": 165,
    "question": "What is 'Stratification' in simple terms?",
    "options": [
      "Vertical stacking of plants to fill every niche of light.",
      "Planting in straight lines.",
      "Digging deep holes."
    ],
    "answer": "A",
    "explanation": "Like an apartment building! We fill the penthouse (Emergent), the middle floors (High/Medium), and the ground floor (Low) all at once."
  },
  {
    "id": 166,
    "question": "What is the 'Rhizosphere'?",
    "options": [
      "The atmosphere.",
      "The narrow region of soil that is directly influenced by root secretions and associated soil microorganisms.",
      "The shape of a root."
    ],
    "answer": "B",
    "explanation": "The life zone! This millimeter-thin layer around the root is where all the trading (sugar for minerals) happens between plants and microbes."
  },
  {
    "id": 167,
    "question": "Why do we use 'Seeds' directly in the field (Direct Seeding) when possible?",
    "options": [
      "It is cheaper.",
      "It creates a better root system (taproot) that is not deformed by a pot.",
      "It is faster."
    ],
    "answer": "B",
    "explanation": "The taproot is the anchor! A seed planted in place sends a root deep immediately. A potted plant often has a curled root that never establishes as well."
  },
  {
    "id": 168,
    "question": "What is 'Inga edulis' (Ice Cream Bean)?",
    "options": [
      "A popular dessert.",
      "A classic support tree in agroforestry, excellent for nitrogen fixation and biomass.",
      "A weed."
    ],
    "answer": "B",
    "explanation": "A superstar support tree! It grows fast, fixes nitrogen, and its leaves decompose perfectly to make rich soil. Plus, the fruit is tasty!"
  },
  {
    "id": 169,
    "question": "What is the psychological shift required for a Syntropic farmer?",
    "options": [
      "From 'controlling' nature to 'cooperating' with nature.",
      "Working harder.",
      "Spending more money."
    ],
    "answer": "A",
    "explanation": "The inner landscape changes. We stop fighting pests and weeds and start asking: 'What is this telling me about the system?'"
  },
  {
    "id": 170,
    "question": "What is 'Bio-char'?",
    "options": [
      "Burnt food.",
      "Charcoal used as a soil amendment to house microbes and retain nutrients.",
      "A chemical."
    ],
    "answer": "B",
    "explanation": "Coral reef for microbes! The porous structure of charcoal provides millions of tiny homes for soil bacteria and fungi to live in."
  },
  {
    "id": 171,
    "question": "Can Syntropic Agroforestry restore degraded land?",
    "options": [
      "No, it needs good soil to start.",
      "Yes, it is specifically designed to regenerate life on degraded soils through succession.",
      "Only if you add chemical fertilizers."
    ],
    "answer": "B",
    "explanation": "It is a healing technology. By using hardy pioneer plants (placenta), we can bring life back to even the most compacted, dead soils."
  },
  {
    "id": 172,
    "question": "What is the 'Climax' phase?",
    "options": [
      "The end of the farm.",
      "The stage of maximum stability, quality, and complexity (like an old-growth forest).",
      "The planting phase."
    ],
    "answer": "B",
    "explanation": "The destination! The Climax phase is when the system has abundant resources, high-value timber/fruit, and requires less external input."
  },
  {
    "id": 173,
    "question": "What is 'Light pruning' vs 'Drastic pruning'?",
    "options": [
      "Drastic pruning removes most of the foliage to reset the system; Light pruning manages shape.",
      "They are the same.",
      "Drastic pruning kills the tree."
    ],
    "answer": "A",
    "explanation": "Sometimes we need a 'Reboot'. Drastic pruning shocks the system into a massive regrowth pulse, which is useful if the system has stalled."
  },
  {
    "id": 174,
    "question": "What is the 'Nitrogen Cycle'?",
    "options": [
      "A type of bicycle.",
      "The process by which nitrogen is converted between its various chemical forms (fixation, ammonification, nitrification).",
      "Buying fertilizer."
    ],
    "answer": "B",
    "explanation": "The engine of growth. Legumes and bacteria pull N from the air; biomass pruning returns it to the soil. We manage this cycle biologically."
  },
  {
    "id": 175,
    "question": "Why is 'Diversity' essentially 'Safety'?",
    "options": [
      "It isn't.",
      "If one crop fails due to weather/disease, others will thrive.",
      "It looks better."
    ],
    "answer": "B",
    "explanation": "Don't put all eggs in one basket. In a diverse system, a bad year for mangoes might be a great year for avocados or timber."
  },
  {
    "id": 176,
    "question": "What is 'Epigenetics' in the context of seeds?",
    "options": [
      "Genetic modification.",
      "The idea that environmental factors can influence how genes are expressed in the next generation.",
      "Seed storage."
    ],
    "answer": "B",
    "explanation": "Seeds learn! A seed harvested from a Syntropic system 'remembers' the abundance and fungal connections, producing a stronger plant than a conventional seed."
  },
  {
    "id": 177,
    "question": "What is 'Albedo'?",
    "options": [
      "A type of bird.",
      "The measure of how much light that hits a surface is reflected without being absorbed.",
      "A soil type."
    ],
    "answer": "B",
    "explanation": "We want low albedo! We want the farm to absorb light (photosynthesis), not reflect it back into the atmosphere as heat (which bare soil does)."
  },
  {
    "id": 178,
    "question": "What is the benefit of 'Windbreaks'?",
    "options": [
      "They stop the wind.",
      "They reduce physical damage, reduce evaporation, and maintain humidity.",
      "Both A and B."
    ],
    "answer": "C",
    "explanation": "Wind is a thief! It steals moisture. By slowing the wind, we keep the precious humidity inside the system for the plants to use."
  },
  {
    "id": 179,
    "question": "In Taiwan, how does 'Betel Nut' farming typically damage the soil?",
    "options": [
      "It doesn't.",
      "It is often a monoculture on slopes with herbicide use, leading to massive erosion.",
      "It fixes too much nitrogen."
    ],
    "answer": "B",
    "explanation": "A local challenge. Syntropy offers a solution: converting Betel Nut plantations into diverse agroforests to stabilize the slopes."
  },
  {
    "id": 180,
    "question": "What is the 'Water Table'?",
    "options": [
      "A table for water glasses.",
      "The level below which the ground is saturated with water.",
      "The ocean."
    ],
    "answer": "B",
    "explanation": "We want to raise it! By increasing infiltration and planting trees, we help recharge the aquifers and raise the local water table."
  },
  {
    "id": 181,
    "question": "What is 'Humus'?",
    "options": [
      "A dip made from chickpeas.",
      "Stable, decomposed organic matter that gives soil its dark color and fertility.",
      "A type of clay."
    ],
    "answer": "B",
    "explanation": "The black gold! Humus is the stable end-product of decomposition. It holds nutrients and water like a battery for the plants."
  },
  {
    "id": 182,
    "question": "What is 'Biophilia'?",
    "options": [
      "Fear of biology.",
      "The innate human tendency to seek connections with nature and other forms of life.",
      "A plant disease."
    ],
    "answer": "B",
    "explanation": "Why we are here! Syntropic farming isn't just production; it satisfies our deep biological need to be surrounded by thriving life."
  },
  {
    "id": 183,
    "question": "What is the 'Cradle' concept?",
    "options": [
      "A bed for babies.",
      "Preparing a rich, protected micro-environment for a demanding tree (like Cacao) to grow in.",
      "A type of shovel."
    ],
    "answer": "B",
    "explanation": "Babies need protection! We don't just stick a Cacao tree in the sun. We build a 'cradle' of placenta plants, biomass, and shade around it."
  },
  {
    "id": 184,
    "question": "What is the difference between 'Annual' and 'Perennial'?",
    "options": [
      "Annuals live one season; Perennials live many years.",
      "Annuals live forever; Perennials die young.",
      "They are the same."
    ],
    "answer": "A",
    "explanation": "Syntropy mixes them! We use Annuals (corn, beans) to pay the bills and build soil while the Perennials (fruit trees) are establishing."
  },
  {
    "id": 185,
    "question": "What is 'Agroecology'?",
    "options": [
      "Farming based on ecological principles.",
      "Industrial farming.",
      "The study of rocks."
    ],
    "answer": "A",
    "explanation": "Syntropy is a form of Agroecology. It treats the farm as an ecosystem, not a factory."
  },
  {
    "id": 186,
    "question": "Why is 'Observation' the most important tool?",
    "options": [
      "Because books are wrong.",
      "Because every site, climate, and day is different.",
      "It isn't."
    ],
    "answer": "B",
    "explanation": "The land speaks. The Syntropic farmer must constantly observe: Is the tree shaded? Is the soil dry? The answers are in the field, not the manual."
  },
  {
    "id": 187,
    "question": "What is 'Girdling' (Ring-barking)?",
    "options": [
      "Wearing a belt.",
      "Removing a strip of bark around a tree to kill it standing, creating a snag/habitat.",
      "Planting in a circle."
    ],
    "answer": "B",
    "explanation": "Useful death. Sometimes we girdle an invasive or unwanted tree to let it rot in place, providing habitat for birds and slowly releasing carbon."
  },
  {
    "id": 188,
    "question": "What is 'Silvopasture'?",
    "options": [
      "Growing trees and grazing animals together.",
      "Growing only pasture.",
      "Growing only trees."
    ],
    "answer": "A",
    "explanation": "A beautiful integration. Trees provide shade for the cows (reducing stress) and the cows fertilize the trees."
  },
  {
    "id": 189,
    "question": "What is the 'Biotic Pump' theory?",
    "options": [
      "A mechanical pump.",
      "The theory that forests draw moist air from the oceans inland via condensation pressure.",
      "A type of heart."
    ],
    "answer": "B",
    "explanation": "Forests bring rain! By transpiring water, forests create low pressure that sucks moist ocean air inland. Without forests, the interior dries out."
  },
  {
    "id": 190,
    "question": "What is 'Anaerobic' vs 'Aerobic' decomposition?",
    "options": [
      "Without oxygen (smelly, rot) vs With oxygen (compost, forest smell).",
      "They are the same.",
      "Aerobic is bad."
    ],
    "answer": "A",
    "explanation": "We want Aerobic! Syntropic soils are fluffy and full of air. Anaerobic (compacted, wet) soils produce methane and breed pathogens."
  },
  {
    "id": 191,
    "question": "What is 'Phosporus Solubilization'?",
    "options": [
      "Making phosphorus disappear.",
      "Bacteria/Fungi releasing acids to unlock phosphorus bound in the soil so plants can use it.",
      "Adding chemical phosphorus."
    ],
    "answer": "B",
    "explanation": "Biology unlocks chemistry! There is usually plenty of Phosphorus in the soil, but it's locked. Microbes hold the key to release it."
  },
  {
    "id": 192,
    "question": "What is the role of 'Spontaneous Vegetation' (Weeds)?",
    "options": [
      "To annoy the farmer.",
      "To heal the soil; they are nature's bandaids.",
      "To look ugly."
    ],
    "answer": "B",
    "explanation": "Change your lens! Weeds tell you what the soil needs. A deep taproot weed says 'decompaction needed'. A nitrogen-fixer says 'nitrogen needed'."
  },
  {
    "id": 193,
    "question": "What is 'Lignin'?",
    "options": [
      "A protein.",
      "A complex organic polymer that makes wood hard.",
      "A type of sugar."
    ],
    "answer": "B",
    "explanation": "Fungal food! Lignin is the tough stuff in wood. Only fungi can break it down, creating the stable, long-term carbon (humus) in the soil."
  },
  {
    "id": 194,
    "question": "What is the 'Microclimate'?",
    "options": [
      "Global warming.",
      "The specific climate of a small area (under a leaf, in a row).",
      "A small cloud."
    ],
    "answer": "B",
    "explanation": "We are microclimate architects! By planting trees, we lower the temperature and raise the humidity right where our crops are growing."
  },
  {
    "id": 195,
    "question": "In Taiwan, why is 'Acacia confusa' (Taiwan Acacia) useful?",
    "options": [
      "It creates biomass, fixes nitrogen, and its hard wood makes great charcoal.",
      "It is an invasive species.",
      "It needs too much water."
    ],
    "answer": "A",
    "explanation": "A native champion. Acacia confusa is incredibly resilient and produces dense wood that feeds the soil slowly and steadily."
  },
  {
    "id": 196,
    "question": "What is 'Root Grafting'?",
    "options": [
      "Roots of the same species connecting underground to share resources.",
      "Surgical grafting.",
      "Roots attacking each other."
    ],
    "answer": "A",
    "explanation": "Underground solidarity! Trees of the same species often link up underground, keeping stumps alive and sharing sugars with weaker trees."
  },
  {
    "id": 197,
    "question": "What is the 'Harvest of Water'?",
    "options": [
      "Bottling water.",
      "Designing the system so it produces more clean water (via springs/aquifers) than it consumes.",
      "Irrigation."
    ],
    "answer": "B",
    "explanation": "The ultimate goal. A mature Syntropic system acts as a sponge, filtering rain and recharging springs, actually 'producing' water for the watershed."
  },
  {
    "id": 198,
    "question": "What is 'Phototropism'?",
    "options": [
      "Fear of light.",
      "Growth towards light.",
      "Photosynthesis."
    ],
    "answer": "B",
    "explanation": "Plants want sun! We manage the system so plants don't have to spend energy stretching crookedly to find light; we place them where the light is."
  },
  {
    "id": 199,
    "question": "What is the 'Disturbance Regime'?",
    "options": [
      "A riot.",
      "The frequency and intensity of pruning/management events.",
      "A bad government."
    ],
    "answer": "B",
    "explanation": "We are the disturbance! Nature uses storms; we use pruning shears. The trick is to disturb the system just enough to trigger growth, but not enough to kill it."
  },
  {
    "id": 200,
    "question": "What is the ultimate definition of 'Sustainability' in Syntropy?",
    "options": [
      "Doing less harm.",
      "Regeneration: leaving the system with more energy, water, and life than when you started.",
      "Breaking even."
    ],
    "answer": "B",
    "explanation": "Beyond sustainability. We don't just want to sustain the status quo; we want to spiral upwards into abundance. That is Syntropy!"
  }
];

// Map questions for use in the app
export const QUESTION_BANK: Question[] = RAW_DATA.map((q, idx) => ({
  id: `q-${q.id || idx}`,
  category: "Syntropic Agroforestry",
  questionText: q.question,
  options: q.options,
  correctAnswerIndex: mapAnswer(q.answer),
  explanation: q.explanation
}));

export const FALLBACK_QUESTIONS = QUESTION_BANK.slice(0, 5);