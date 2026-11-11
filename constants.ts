import { Question } from './types';

export const APP_NAME = "Syntropic Agroforestry Exam";
export const EXAM_VERSION = "2.1";
export const BANK_DATE = "2026-11-11";

// Map an answer letter to an option index. Unknown letters stop the build instead of silently defaulting.
const mapAnswer = (letter: string, id: number) => {
  const i = ['A', 'B', 'C'].indexOf(letter.toUpperCase().trim());
  if (i < 0) throw new Error(`Question ${id}: answer must be A, B or C`);
  return i;
};

// Question bank v2 (2026-11-11): one question per fact, options of similar length,
// plant facts aligned with PLANTDB. The correct answer is listed first ("A");
// the app shuffles the options on every attempt (services/geminiService.ts).
const RAW_DATA = [
  {
    "id": 1,
    "question": "In Syntropic Agroforestry, what does the term 'Syntropy' fundamentally represent?",
    "options": [
      "A process in which life concentrates energy and builds complexity and abundance.",
      "The tendency of all systems to lose energy and move toward disorder and decay over time.",
      "A farming method that keeps order mainly through external chemical inputs."
    ],
    "answer": "A",
    "explanation": "Excellent start! Syntropy is the biological opposite of entropy. While physics often highlights how energy dissipates (entropy), life has the miraculous ability to organize energy and build complexity over time."
  },
  {
    "id": 2,
    "question": "What is the primary factor used to determine which vertical 'Strata' a plant belongs to?",
    "options": [
      "The amount of light the plant needs to thrive at maturity.",
      "The maximum height the plant reaches when fully grown.",
      "The depth and reach of the plant's root system in the soil."
    ],
    "answer": "A",
    "explanation": "A very common misconception clarified! In our forest architecture, strata is about 'light, not height.' We arrange plants based on how much sun they need—whether they are sun-hungry Emergents or shade-loving Low strata species."
  },
  {
    "id": 3,
    "question": "Why is the first stage of ecological succession in this method called the 'Placenta' stage?",
    "options": [
      "Its early species protect and nourish the system, like a placenta for the future forest.",
      "It is the stage in which the most expensive target crops are always planted first, for income.",
      "It refers to animal-based fertilizers that are applied during the installation."
    ],
    "answer": "A",
    "explanation": "That is a beautiful way to see it! Just as a placenta nourishes a developing life, these hardy pioneer plants protect the soil from the sun and rain, building the fertility needed for the longer-lived trees to follow."
  },
  {
    "id": 4,
    "question": "According to the 'Food Forest Equation,' which variable acts as the exponent that determines the system's success?",
    "options": [
      "The intensity and timing of management (pruning).",
      "The total amount of space available for planting.",
      "The length of time that has passed since planting."
    ],
    "answer": "A",
    "explanation": "Correct! We often say that management—specifically strategic pruning—is 95% of the work. Without active human participation to 'pulse' the system, it may stagnate into senescence."
  },
  {
    "id": 5,
    "question": "How does Syntropic philosophy reframe the presence of 'pests' and diseases on a farm?",
    "options": [
      "As a 'department of censorship' that signals imbalance or a management error.",
      "As random acts of aggression from nature that must always be suppressed with sprays.",
      "As a sign that the farmer must buy more organic pesticides right away."
    ],
    "answer": "A",
    "explanation": "A thoughtful perspective! Ernst Götsch teaches us that pests target plants that are no longer contributing to the system's vitality. They are diagnostic signals telling us where we need to adjust our strata or pruning."
  },
  {
    "id": 6,
    "question": "What is a 'Growth Pulse' in the context of system management?",
    "options": [
      "A surge of growth across the system triggered by synchronized pruning.",
      "The moment when a plant reaches its maximum height and stops growing.",
      "A seasonal event in which only weeds may flower to attract pollinators."
    ],
    "answer": "A",
    "explanation": "Spot on! When we prune support species, we release hormones like gibberellin and trigger root dieback, which feeds the soil food web and causes a collective 'wake-up call' for all neighboring plants."
  },
  {
    "id": 8,
    "question": "What is 'Muvuca'?",
    "options": [
      "A dense mix of seeds from many species, sown together to start several stages at once.",
      "A heavy-duty pruning tool used in Brazil to cut banana pseudostems and thick woody branches.",
      "A fermented liquid fertilizer made from banana pseudostems and kitchen scraps."
    ],
    "answer": "A",
    "explanation": "Precisely! Muvuca mimics the way a forest naturally regenerates with thousands of seeds. It allows natural selection to decide which individuals are best adapted to each specific micro-site."
  },
  {
    "id": 9,
    "question": "What does the concept of the 'Macro-organism' imply for a syntropic farm?",
    "options": [
      "The whole farm works as one living body in which each plant acts like an organ.",
      "The farm should be as large as possible, because only big farms are profitable.",
      "Only large grazing animals should provide fertility to the soil of the farm."
    ],
    "answer": "A",
    "explanation": "Wonderful insight! In this worldview, we don't just care for individual crops; we manage the relationships between them to ensure the health of the whole 'body' of the farm."
  },
  {
    "id": 10,
    "question": "What occurs during the 'Accumulation' phase of succession?",
    "options": [
      "The system builds soil structure and natural capital; much of its biomass is woody.",
      "The soil is barren and needs heavy external fertilizer before anything can grow.",
      "The system is already self-sustaining and gives maximum yields of fruits like avocado."
    ],
    "answer": "A",
    "explanation": "Correct! During the Accumulation phase, we are 'fattening up' the system with carbon and biomass to prepare for the Abundance phase where high-value crops can finally thrive."
  },
  {
    "id": 11,
    "question": "Which of these is a key 'rule' for applying mulch in a syntropic system?",
    "options": [
      "Woody material goes on the bottom, touching the soil; green material goes on top.",
      "Green, leafy material goes on the bottom; heavy wood is placed on top to hold it.",
      "Only bought wood chips should be used, so that no weed seeds enter the system."
    ],
    "answer": "A",
    "explanation": "That is a vital trick for soil health! Putting wood on the bottom feeds the beneficial fungi, while the 'greens' on top retain moisture and provide a quick nutrient hit for soil life."
  },
  {
    "id": 12,
    "question": "What is 'Senescence' and how do we manage it?",
    "options": [
      "The aging and slowing of a plant; strategic pruning can reset its growth cycle.",
      "The peak growth phase of a plant; it is managed by giving the plant more water.",
      "A soil disease caused by a lack of sunlight; it is managed by removing the canopy."
    ],
    "answer": "A",
    "explanation": "A very important concept! Senescent plants send 'slowing' signals to the rest of the forest. By pruning them, we 'take the foot off the brake' and allow the system to remain in vigorous youth."
  },
  {
    "id": 13,
    "question": "Why is it recommended to plant 'Strata Pairs' (e.g., Emergent + Medium) in a single row?",
    "options": [
      "To keep vertical distance between the canopies and reduce the need for management.",
      "Because plants of the same stratum always help each other to grow faster.",
      "To make all plants in the row reach exactly the same height at the same time each year."
    ],
    "answer": "A",
    "explanation": "You've captured the logic perfectly! By 'skipping' a strata (pairing Emergent with Medium), we create a physical gap that allows better light penetration and makes management much simpler."
  },
  {
    "id": 14,
    "question": "What is 'Necromass' and why is it important in recent soil research?",
    "options": [
      "The remains of dead soil microbes, which make up over half of soil organic carbon.",
      "A synthetic fertilizer that is designed to imitate the effect of dead organic matter.",
      "The term for weeds that were killed by herbicides and then left to rot in place."
    ],
    "answer": "A",
    "explanation": "This is a cutting-edge insight! Recent science shows that the 'soil microbial carbon pump' depends on the death of microbes (necromass) to build stable, long-term soil fertility."
  },
  {
    "id": 15,
    "question": "In the 'Abundance' phase, what is the primary indicator that a system is self-sustaining?",
    "options": [
      "Vibrant green vegetation and a moist soil dominated by beneficial fungi.",
      "The farmer no longer needs to prune or intervene in the system in any way.",
      "A single commercial tree species dominates and gives a high, even yield."
    ],
    "answer": "A",
    "explanation": "Well observed! Abundance is characterized by high natural capital, where the system is so healthy it produces water and fertility internally."
  },
  {
    "id": 16,
    "question": "What is 'Overpositioning'?",
    "options": [
      "Placing two plants of the same stratum and life cycle too close together.",
      "Planting too many different species within the same climate zone.",
      "Pruning a tree so heavily, so often, that it can no longer grow back afterwards."
    ],
    "answer": "A",
    "explanation": "Correct! Overpositioning is one of the few ways plants 'compete' in a syntropic system. We design our matrices to ensure every plant has its own unique niche in both space and time."
  },
  {
    "id": 17,
    "question": "What 'Center of Origin' information helps a designer place a plant in its correct stratum?",
    "options": [
      "Whether it evolved in a rainforest understory (Low) or an open savannah (Emergent).",
      "Which country the plant was first exported from for large-scale commercial production.",
      "How many seeds the plant produces in a single season in its original home range."
    ],
    "answer": "A",
    "explanation": "Exactly! By looking at where a plant evolved, we respect its inherent 'intelligence' and light requirements, ensuring it stays healthy without stress."
  },
  {
    "id": 18,
    "question": "What is the function of C4 grasses in a syntropic system?",
    "options": [
      "They act as fast 'biomass engines' that capture carbon and produce mulch.",
      "They are grown mainly as a staple grain crop to feed the household all year.",
      "They form a permanent canopy layer that shades the young fruit trees below."
    ],
    "answer": "A",
    "explanation": "A vital piece of the puzzle! These grasses are incredibly efficient at photosynthesizing in full sun, allowing us to grow a massive amount of 'fertilizer' right on site. In Taiwan, the native 五節芒 (Miscanthus floridulus, wǔ jié máng) is preferred, because Napier grass and guinea grass are listed as invasive."
  },
  {
    "id": 19,
    "question": "What is 'Synchronization' in management?",
    "options": [
      "Aligning pruning so the whole system receives the same growth signal at once.",
      "Waiting until every tree reaches the same height before pruning any of them.",
      "Using a computer to track the exact growth rate of every plant on the farm."
    ],
    "answer": "A",
    "explanation": "Precisely! By pruning everything in a 'synchronized' event, we mimic a natural disturbance like a storm, ensuring the whole system restarts its growth cycle together in harmony."
  },
  {
    "id": 20,
    "question": "What is a 'Nest' in Syntropic design?",
    "options": [
      "A dense circular planting for establishing target trees in small or difficult spots.",
      "A small wooden house built for birds so that they help with pest control on the farm.",
      "A pit in which organic waste is buried and left to rot for several years before use."
    ],
    "answer": "A",
    "explanation": "You've got it! Nests are a fantastic strategy for starting a 'macro-organism' in a targeted spot, surrounding a target tree with its own nursing community of support plants."
  },
  {
    "id": 21,
    "question": "What is the primary difference between a conventional food forest and a Syntropic Agroforestry system according to the sources?",
    "options": [
      "A food forest is a fixed picture; a syntropic system is a film that needs active work.",
      "Food forests are for commercial production, while syntropic systems are for home gardens.",
      "Syntropic systems never use trees at all, while food forests are made only of trees."
    ],
    "answer": "A",
    "explanation": "In Syntropic Agroforestry, the farmer is an integral part of the system, acting as a disturbance agent to keep the forest evolving."
  },
  {
    "id": 23,
    "question": "In a well-designed abundance system, what share of the 'Emergent' layer should ideally be occupied by canopy?",
    "options": [
      "About 20%",
      "About 50%",
      "At least 80%"
    ],
    "answer": "A",
    "explanation": "The Emergent layer remains sparse to allow sufficient light to reach the High, Medium, and Low strata beneath."
  },
  {
    "id": 24,
    "question": "How do mycorrhizal fungi benefit the 'macro-organism' of a syntropic farm?",
    "options": [
      "They form an underground network that trades nutrients and water for plant sugars.",
      "They compete with the trees for nitrogen and water, which makes the trees work harder.",
      "They form a protective barrier in the soil that keeps roots from growing too deep."
    ],
    "answer": "A",
    "explanation": "Mycorrhizal fungi act like an 'underground internet,' connecting root systems and increasing the absorption zone of plants up to seven times."
  },
  {
    "id": 25,
    "question": "Which plant growth hormone is released into the system after an aggressive pruning event, stimulating a 'growth pulse'?",
    "options": [
      "Gibberellins (gibberellic acid)",
      "Ethylene (the ripening hormone)",
      "Abscisic acid (the dormancy hormone)"
    ],
    "answer": "A",
    "explanation": "Pruning support species resets the system's metabolism and signals neighbors to grow through the release of hormones like gibberellins."
  },
  {
    "id": 30,
    "question": "In Ernst Götsch's TAO philosophy, the concept that every being acts to fulfill a specific task for the macro-organism is driven by:",
    "options": [
      "Internal pleasure and appetite",
      "Fear of predators and hunger",
      "Direct commands from the farmer"
    ],
    "answer": "A",
    "explanation": "Life is viewed as a cooperative venture where every organism performs its role effectively when moved by its inner motivation or pleasure."
  },
  {
    "id": 32,
    "question": "Which 'Strata Pair' is often combined in a single row to reduce management needs?",
    "options": [
      "Emergent + Medium",
      "High + Emergent",
      "Medium + High"
    ],
    "answer": "A",
    "explanation": "Skipping a stratum (pairing Emergent with Medium or High with Low) creates a clear vertical gap that allows light to penetrate better and reduces canopy conflict."
  },
  {
    "id": 33,
    "question": "How can a system be moved from an 'Accumulation System' (low fertility) to an 'Abundance System'?",
    "options": [
      "Through high-density planting and strategic, synchronized pruning.",
      "By doubling the amount of irrigation and synthetic fertilizer used.",
      "By removing all support trees and leaving only the fruit trees."
    ],
    "answer": "A",
    "explanation": "Intensive management boosts the system's metabolism, allowing it to generate its own fertility and water internally over time."
  },
  {
    "id": 34,
    "question": "In syntropic management, human intervention mimics which natural event?",
    "options": [
      "Natural disturbances like windstorms or browsing animals",
      "The slow aging and death of a solitary old tree",
      "The seasonal flooding of a river valley during the summer typhoons"
    ],
    "answer": "A",
    "explanation": "Human pruning acts as a beneficial disturbance that resets the succession cycle and triggers a collective growth pulse in the forest macro-organism."
  },
  {
    "id": 36,
    "question": "Why are deciduous species (trees that lose leaves) useful in a syntropic design?",
    "options": [
      "They let more light reach the understory in some seasons, stimulating lower strata.",
      "They are easier to cut down when they are dormant and have dropped their leaves.",
      "They always need less water than evergreen trees, so they suit dry, exposed sites better."
    ],
    "answer": "A",
    "explanation": "Deciduous trees create a natural 'light window' for lower-level crops like coffee or ginger to receive a boost of energy during certain months."
  },
  {
    "id": 37,
    "question": "Management that increases 'soil metabolism' typically involves:",
    "options": [
      "Continually cycling organic material and stimulating root shedding by pruning.",
      "Ploughing the soil once a month to let more air and water into the upper layers.",
      "Removing most fungi from the soil to prevent root rot in the young fruit trees."
    ],
    "answer": "A",
    "explanation": "Pruning not only adds mulch above ground but triggers root dieback and new growth, which feeds the soil food web and increases energy cycling."
  },
  {
    "id": 38,
    "question": "To prevent canopy conflict, what is the recommended vertical gap to maintain between designated strata?",
    "options": [
      "About 0.5 to 1.5 meters",
      "No gap; canopies should touch",
      "At least 5 meters"
    ],
    "answer": "A",
    "explanation": "Maintaining a vertical gap between layers ensures adequate airflow and light penetration, making the system more productive and easier to manage."
  },
  {
    "id": 39,
    "question": "Indigenous Taiwanese 'Gaga' or 'Gaya' principles are closely related to syntropy because they emphasize:",
    "options": [
      "Ethical codes of stewardship and harmony with the land.",
      "Industrial efficiency and the maximization of inputs.",
      "The importance of export-oriented monoculture crops."
    ],
    "answer": "A",
    "explanation": "These traditional ecological codes view humans as part of a sacred order that must maintain the balance and fertility of the land."
  },
  {
    "id": 41,
    "question": "What does the etymology of 'Syntropy' literally mean, according to the sources?",
    "options": [
      "To change with",
      "To grow alone",
      "To fight against"
    ],
    "answer": "A",
    "explanation": "You've got a sharp eye for detail! The word comes from 'Syn' (with) and 'Tropic' (change). It represents life's natural tendency to accumulate energy and move toward complexity rather than disorder."
  },
  {
    "id": 48,
    "question": "At which point in the 'S-curve' growth cycle is a plant providing the most energy to the ecosystem?",
    "options": [
      "During its peak adolescent growth phase",
      "Right after germination, as a seedling",
      "When it is old, slowing down and dying"
    ],
    "answer": "A",
    "explanation": "Excellent observation! In its phase of exuberant, rapid growth, a plant gives more back to the system through root exudates and hormonal pulses than it takes."
  },
  {
    "id": 55,
    "question": "Who is best known for describing and popularizing the Soil Food Web as a network of interdependent organisms?",
    "options": [
      "Dr. Elaine Ingham",
      "Ernst Götsch",
      "Nikolai Vavilov"
    ],
    "answer": "A",
    "explanation": "A great piece of history! Dr. Elaine Ingham first described the complex interactions of bacteria, fungi, and protozoa that drive nutrient cycling in the soil."
  },
  {
    "id": 56,
    "question": "What does the scientific measurement 'Amax' tell a designer about a native Taiwanese tree?",
    "options": [
      "Its photosynthetic capacity and shade tolerance",
      "Its maximum fruit weight in a good growing year",
      "How tall the tree will grow within ten years"
    ],
    "answer": "A",
    "explanation": "Brilliant! Research into Amax allows us to use objective data to determine if a native species belongs in the Emergent, High, Medium, or Low strata."
  },
  {
    "id": 58,
    "question": "What is the recommended ratio of biomass production area to target tree area in a healthy design?",
    "options": [
      "3 to 1",
      "1 to 1",
      "10 to 1"
    ],
    "answer": "A",
    "explanation": "A vital rule for success! We aim for a 3:1 ratio of support species to target crops to ensure we generate enough 'fertilizer' within the system itself."
  },
  {
    "id": 62,
    "question": "What happens during the 'Rhizophagy Cycle' in a healthy soil system?",
    "options": [
      "Roots take in microbes, strip their nutrients and release them back into the soil.",
      "Plants release toxins that kill all of the bacteria and fungi living close to their roots.",
      "Soil microbes slowly feed on the plant roots until the plant weakens and dies."
    ],
    "answer": "A",
    "explanation": "That is a fascinating biological process! Recent research shows that plants actually attract microbes to their root tips and 'digest' their outer walls to get nutrients directly before sending the microbes back out to 'recharge'."
  },
  {
    "id": 64,
    "question": "In the 'Liquid Carbon Pathway,' what percentage of a plant's manufactured sugars are typically sent into the soil to feed fungi?",
    "options": [
      "About 30–40%",
      "Less than 5%",
      "Exactly 100%"
    ],
    "answer": "A",
    "explanation": "Excellent observation! It may seem like a lot, but plants 'invest' nearly half of their energy into the soil to feed their microbial partners, who in return bring back water and minerals the plant cannot reach alone."
  },
  {
    "id": 66,
    "question": "Why is 'Selective Weeding' preferred over clearing all spontaneous vegetation?",
    "options": [
      "Many weeds are placenta species that heal the soil and show its condition.",
      "Leaving some weeds is simply less work for the farmer than clearing everything.",
      "Weeds give pests a place to hide, so the pests stay away from the crops."
    ],
    "answer": "A",
    "explanation": "A very thoughtful approach. We view 'weeds' as a diagnosis. If they appear, they are trying to cover a 'wound' in the soil. We only remove them when their work is done and they transition into senescence."
  },
  {
    "id": 67,
    "question": "What is the primary function of a 'C-Line' in a large-scale system layout?",
    "options": [
      "A dedicated biomass line that produces mulch for the A-lines.",
      "A pathway kept open only for tractors and other machines.",
      "The line where the most expensive fruit trees are planted."
    ],
    "answer": "A",
    "explanation": "Precisely! C-lines are our 'biomass engines'. We plant fast-growing support species there specifically to prune them and 'feed' the high-value tree lines nearby."
  },
  {
    "id": 70,
    "question": "Which successional stage is characterized by high lignin (woody) biomass and the building of fungal networks?",
    "options": [
      "Accumulation (Secondary)",
      "Colonization (Placenta)",
      "Abundance (Climax)"
    ],
    "answer": "A",
    "explanation": "Exactly. During the Accumulation stage, we focus on 'fattening' the system with wood and carbon to create the rich, fungal-heavy soil that Climax species love."
  },
  {
    "id": 71,
    "question": "What is the 'Department of Censorship' in Syntropic theory?",
    "options": [
      "Pests and diseases that remove plants no longer useful to the system",
      "A government agency that sets limits on the size of farms in a region",
      "A group of local farmers who decide which seeds may be planted"
    ],
    "answer": "A",
    "explanation": "A deep philosophical catch! Pests are seen as the system's quality control; they target the weak or 'senescent' plants to make room for new life."
  },
  {
    "id": 72,
    "question": "Which of these describes the 'Poop Loop' (Microbial Loop) in nutrient cycling?",
    "options": [
      "Protozoa and nematodes eat microbes and release surplus nutrients for plants.",
      "Using animal manure as the only source of fertilizer for the whole system.",
      "The process of cleaning, sorting and drying seeds before they are planted."
    ],
    "answer": "A",
    "explanation": "Wonderful! This is nature's own fertilizer factory. Because predators like protozoa have less nitrogen than the bacteria they eat, they 'poop' out the extra as ammonium right near the plant roots."
  },
  {
    "id": 73,
    "question": "Why is 'Muvuca' (high-density seed mixing) used instead of just planting single saplings?",
    "options": [
      "Natural selection then decides which individuals suit each micro-site best.",
      "It saves money on plastic pots, potting soil and on buying seedlings from a nursery.",
      "It attracts many more birds to the farm during the first few months."
    ],
    "answer": "A",
    "explanation": "Spot on! By planting thousands of seeds, we let nature choose the 'winner' for each specific spot, resulting in a much stronger and more resilient forest."
  },
  {
    "id": 75,
    "question": "Which successional phase is the 'adolescence' of the forest, focusing on lifting water and building soil structure?",
    "options": [
      "Secondary stage",
      "Placenta stage",
      "Climax stage"
    ],
    "answer": "A",
    "explanation": "You've got it! The Secondary stage is all about growth and accumulation. It prepares the 'cradle' of fertility needed for the high-value Climax trees."
  },
  {
    "id": 78,
    "question": "What is the primary indicator that a plant has entered 'Senescence'?",
    "options": [
      "Its growth slows, and it may become woodier, flower or set seed.",
      "It suddenly begins to grow twice as fast as it did before.",
      "Its leaves turn a bright, vibrant purple during the hot summer months."
    ],
    "answer": "A",
    "explanation": "A key observation skill! Senescence is the 'aging' signal. When a plant stops growing vigorously, it starts sending 'slowing' messages to the whole system, which is our cue to prune."
  },
  {
    "id": 82,
    "question": "What is the primary difference between 'layers' in permaculture and 'strata' in Syntropic farming?",
    "options": [
      "Layers describe height; strata describe light requirements.",
      "Strata are used only in tropical climates, layers everywhere.",
      "Layers include animals, while strata include only trees."
    ],
    "answer": "A",
    "explanation": "A key rule is 'Light, NOT Height.' Strata groups (Emergent, High, Medium, Low) are assigned based on how much sun a plant needs at maturity, regardless of how tall it physically grows."
  },
  {
    "id": 84,
    "question": "Why does a syntropic farmer use heavy pruning to manage support species?",
    "options": [
      "To trigger a growth pulse and cycle organic matter into the soil",
      "To kill the trees so that they stop taking water from the crops",
      "To make the farm look more tidy and organized for visitors"
    ],
    "answer": "A",
    "explanation": "Pruning mimics natural disturbances like windstorms, releasing growth hormones and providing mulch that feeds the soil food web and accelerates succession."
  },
  {
    "id": 88,
    "question": "How does Syntropic philosophy describe the relationship between plants in a forest?",
    "options": [
      "Unconditional love and cooperation",
      "Brutal competition for survival",
      "Indifference to one another"
    ],
    "answer": "A",
    "explanation": "Ernst Götsch's TAO philosophy suggests that nature is driven by cooperation, where every being fulfills a specific task for the benefit of the macro-organism."
  },
  {
    "id": 90,
    "question": "Which C4 biomass grass is preferred in Taiwan?",
    "options": [
      "The native 五節芒 (Miscanthus floridulus, wǔ jié máng)",
      "Napier grass, planted densely along every tree row",
      "Guinea grass 'Mombasa', sown as the main mulch crop"
    ],
    "answer": "A",
    "explanation": "In Taiwan, Napier grass (象草 xiàng cǎo) and guinea grass, including 'Mombasa' (大黍 dà shǔ), are listed as invasive: use and manage stands that already exist, but do not spread them. The native 五節芒 (wǔ jié máng) is the preferred C4 biomass grass."
  },
  {
    "id": 94,
    "question": "Why is it recommended to place woody logs directly on the soil when mulching?",
    "options": [
      "To feed beneficial fungi and act as a water reservoir",
      "To stop people and animals from walking on the planting beds",
      "To keep birds from finding and eating the seeds"
    ],
    "answer": "A",
    "explanation": "Woody material (lignin) on the bottom attracts fungi and mimics 'nurse logs' found in old-growth forests, while leafy material on top retains moisture."
  },
  {
    "id": 96,
    "question": "Which native Taiwanese tree is a long-lived Climax species of the High stratum that is threatened in the wild, so it should be planted only from nursery stock?",
    "options": [
      "Stout camphor (Camphora kanahirae, 牛樟 niú zhāng)",
      "Taiwan acacia (Acacia confusa, 相思樹 xiāng sī shù)",
      "White popinac (Leucaena leucocephala, 銀合歡 yín hé huān)"
    ],
    "answer": "A",
    "explanation": "Stout camphor (牛樟 niú zhāng) is endemic to Taiwan and listed as Endangered. It is a Climax tree of the High stratum: plant nursery-grown stock and never collect it from the wild. Taiwan acacia is a native Emergent tree, and white popinac is listed as invasive."
  },
  {
    "id": 98,
    "question": "According to Ernst Götsch, what is 'Water has to be planted' referring to?",
    "options": [
      "Forests create microclimates that bring rainfall and keep soils moist.",
      "The use of expensive drip irrigation pipes along every planted row in the dry season.",
      "Pouring water directly into each seed hole at the time of sowing."
    ],
    "answer": "A",
    "explanation": "Healthy, stratified forests act as a 'biotic pump,' creating the conditions for condensation, rainfall, and high soil water retention."
  },
  {
    "id": 99,
    "question": "Which of these is the first step in the 'Order of Operations' for establishing a system?",
    "options": [
      "Design and foresight",
      "Adding soil amendments",
      "Planting the target fruit trees"
    ],
    "answer": "A",
    "explanation": "Because syntropic systems are complex, success starts with a well-thought-out design that considers the system's evolution over decades."
  },
  {
    "id": 100,
    "question": "What is 'Succession' primarily concerned with in this context?",
    "options": [
      "How the system evolves over time, from simple colonization to complex abundance.",
      "The legal process of transferring the farm from one generation to the next.",
      "Planting the same crop in the same place every year to keep the farm stable and simple."
    ],
    "answer": "A",
    "explanation": "Succession is the dimension of Time. We plan how the system changes from the placenta phase (days/months) to the climax phase (decades/centuries)."
  },
  {
    "id": 101,
    "question": "Aside from timber, what is the main function of tall Emergent trees (such as eucalyptus or Taiwan acacia) in a syntropic system?",
    "options": [
      "They condense humidity and pump water and energy through the system.",
      "They shade out all other plants so that weeding is no longer needed.",
      "They are planted mainly to attract visitors and tourists to the farm."
    ],
    "answer": "A",
    "explanation": "Correct! These giants interact with the atmosphere to condense humidity, and their massive root systems pump water from deep underground, hydrating the entire system."
  },
  {
    "id": 102,
    "question": "In the 'Consortium' design, to which Stratum does Coffee (Coffea arabica) typically belong?",
    "options": [
      "Low or Medium (it evolved in the understory)",
      "Emergent (it needs full, direct sun all day long)",
      "High (it needs about 60–80% of full sunlight)"
    ],
    "answer": "A",
    "explanation": "Excellent! Coffee is naturally an understory plant (Low/Medium). Growing it in full sun stresses the plant; growing it under the shade of a Syntropic canopy keeps it healthy and productive."
  },
  {
    "id": 103,
    "question": "What is the 'System Accumulator' in the context of succession?",
    "options": [
      "A fast-growing woody species planted mainly to be pruned for biomass.",
      "A machine that is used to collect and store crops during the harvest.",
      "A storage shed where fertilizers and tools are kept until they are used."
    ],
    "answer": "A",
    "explanation": "Spot on! System Accumulators are the engines of the farm. We grow them not for their fruit, but for the carbon and wood they provide to the soil when pruned."
  },
  {
    "id": 104,
    "question": "When pruning a tree to stimulate growth, why is 'Apical Dominance' important to understand?",
    "options": [
      "Cutting the main tip (apex) encourages bushier side growth.",
      "It shows that the top of a tree should never be cut at all.",
      "It refers to the tallest, dominant species of the forest."
    ],
    "answer": "A",
    "explanation": "Precisely! By breaking apical dominance, we redistribute growth hormones (auxins) to lower buds, creating a denser, more complex structure."
  },
  {
    "id": 105,
    "question": "In Taiwan, what is a specific benefit of 'Contour Planting' during typhoon season?",
    "options": [
      "It slows runoff and increases infiltration, reducing landslides.",
      "It makes the rows look more attractive in photos and from drones.",
      "It makes the wind blow faster, drying the soil after the storm."
    ],
    "answer": "A",
    "explanation": "A vital safety measure! Planting along contours creates living barriers that stop soil erosion and turn destructive heavy rains into stored groundwater."
  },
  {
    "id": 106,
    "question": "What is the typical lifespan of 'Placenta I' species like arugula, radish, or beans?",
    "options": [
      "0 to 6 months",
      "2 to 5 years",
      "10 to 20 years"
    ],
    "answer": "A",
    "explanation": "Correct. These are the sprinters of the system. They germinate quickly, cover the soil instantly, and yield a harvest while the longer-term plants are just waking up."
  },
  {
    "id": 107,
    "question": "According to Ernst Götsch, what is the 'Currency' of life in the soil?",
    "options": [
      "Carbon",
      "Nitrogen",
      "Phosphorus"
    ],
    "answer": "A",
    "explanation": "Deep insight! Carbon is the energy currency. Through photosynthesis, plants print this currency (sugars) and pay the soil microbes to work for them."
  },
  {
    "id": 108,
    "question": "Why do we avoid 'Monoculture' even in the rows of a Syntropic system?",
    "options": [
      "Monocultures exhaust specific nutrients and attract specific pests.",
      "Seeds for monoculture planting are too expensive to buy in bulk.",
      "Monoculture rows are not allowed under organic certification rules."
    ],
    "answer": "A",
    "explanation": "Exactly. Nature never plants just one thing. Diversity confuses pests and ensures that different root systems mine nutrients from different soil depths."
  },
  {
    "id": 109,
    "question": "What is the 'Flying River' concept related to large-scale Agroforestry?",
    "options": [
      "The water vapor transpired by forests that brings rain far downwind.",
      "A new irrigation technology that uses drones to spread water over fields.",
      "A river that flows uphill, pulled by the strong winds above forests."
    ],
    "answer": "A",
    "explanation": "A poetic and scientific truth! Large contiguous forests, like those we mimic, release so much moisture they actually generate their own weather systems and rainfall."
  },
  {
    "id": 110,
    "question": "If you see 'Oxalis' (sorrel) appearing spontaneously in your system, what is the soil diagnosis?",
    "options": [
      "The soil is compacted and probably acidic.",
      "The soil is very rich in available nitrogen.",
      "The soil is in perfect balance and needs no care."
    ],
    "answer": "A",
    "explanation": "Good diagnosis! Indicators like Oxalis tell us the soil is tired. We don't poison the Oxalis; we aerate the soil and add organic matter to make the Oxalis unnecessary."
  },
  {
    "id": 111,
    "question": "What is the ideal orientation for tree rows in a Syntropic system, if the slope allows?",
    "options": [
      "North–South",
      "East–West",
      "It does not matter"
    ],
    "answer": "A",
    "explanation": "Correct! A North-South orientation generally ensures that both sides of the row get equal sunlight throughout the day, preventing one side from being permanently shaded."
  },
  {
    "id": 112,
    "question": "Banana is a Secondary I plant (about 2 to 5 years in the system). What role does it play for young trees?",
    "options": [
      "A water reservoir and nurse plant: its stems hold water and its leaves give shade.",
      "It is grown only for its fruit and is kept well away from the young trees.",
      "It is removed in the first months, because its roots compete with every tree."
    ],
    "answer": "A",
    "explanation": "Banana is a nurse plant in the young system! Its pseudostems are full of water, keeping the system hydrated, and its large leaves protect young cacao or coffee from the harsh noon sun. In our Taiwan plant database, dessert banana is a Secondary I plant (about 2–5 years); the native 臺灣芭蕉 (táiwān bājiāo) enters a little earlier, from Placenta II."
  },
  {
    "id": 113,
    "question": "When harvesting a Banana bunch, how should the pseudostem be managed?",
    "options": [
      "Cut it at the base and lay it as wet mulch around a neighboring tree.",
      "Leave it standing until it rots, so that it can shade the soil below.",
      "Burn it in the row and spread the ash around the plants as fertilizer."
    ],
    "answer": "A",
    "explanation": "Perfect! That stem is 90% water and nutrients. Laying it next to a demanding tree (like Cacao) acts as a slow-release irrigation and fertilizer pack."
  },
  {
    "id": 114,
    "question": "What differentiates a 'Secondary' forest stage from a 'Climax' stage?",
    "options": [
      "Secondary means fast growth and wood accumulation; Climax means quality and stability.",
      "Secondary stages have no trees at all, while Climax stages are made only of very old trees.",
      "Secondary forests are always planted by people, while Climax forests grow wild."
    ],
    "answer": "A",
    "explanation": "Well defined. Secondary species (like Capulin or Acacia) work hard to build resources. Climax species (like Oak or Camphor) enjoy those resources to live long, stable lives."
  },
  {
    "id": 115,
    "question": "In the 'Muvuca' seed mix, what is the approximate ratio of tree seeds to biomass/grass seeds?",
    "options": [
      "Mostly biomass and grass seeds",
      "Mostly seeds of the target trees",
      "Exactly half tree seeds, half grass"
    ],
    "answer": "A",
    "explanation": "Interesting, isn't it? We need massive amounts of biomass seeds (placenta) to protect the fewer, high-value tree seeds. We plant the forest, but we also plant the 'soil builders'."
  },
  {
    "id": 116,
    "question": "Why is 'Pollarding' (cutting off the top branches) used on support trees?",
    "options": [
      "To keep the tree at a manageable height and produce pole wood.",
      "To kill the tree slowly, so its wood can be used later.",
      "To stop the roots from spreading sideways into the neighboring rows."
    ],
    "answer": "A",
    "explanation": "Correct! Pollarding allows us to keep a large tree in the system without it shading everything out, while harvesting useful wood for construction or mulch."
  },
  {
    "id": 117,
    "question": "What is 'Glomalin'?",
    "options": [
      "A sticky protein from mycorrhizal fungi that glues soil into stable aggregates.",
      "A synthetic soil conditioner that is sprayed on fields to bind loose soil particles together.",
      "A plant hormone that makes roots grow downwards toward the water table."
    ],
    "answer": "A",
    "explanation": "A microscopic miracle! Glomalin is the 'super glue' of the soil. It gives soil its structure, preventing erosion and allowing air and water to enter."
  },
  {
    "id": 118,
    "question": "How does Syntropic Agroforestry view 'Competition' for water?",
    "options": [
      "With good stratification, roots lift and share water between the layers.",
      "Plants always fight for water, so the strongest one takes all of it.",
      "Water is not important in a syntropic system once mulch is applied."
    ],
    "answer": "A",
    "explanation": "A paradigm shift! Deep-rooted trees pull water up and release it into the upper soil layers at night, actually watering the shallow-rooted vegetables."
  },
  {
    "id": 119,
    "question": "Which of these is a 'Low' stratum crop often used in Taiwan?",
    "options": [
      "Ginger or turmeric",
      "Papaya or banana",
      "Coconut or betel nut"
    ],
    "answer": "A",
    "explanation": "Correct! Ginger and Turmeric love the dappled shade of the forest floor. They thrive in the 'Low' stratum under the canopy of fruit trees."
  },
  {
    "id": 120,
    "question": "What is the 'Edge Effect' we try to avoid inside the system?",
    "options": [
      "The drying effect of wind and sun entering from the sides of a forest.",
      "The damage caused to branches by the sharp edges of blunt pruning shears.",
      "The problems caused by planting the trees too close to the fence line."
    ],
    "answer": "A",
    "explanation": "Well observed. We plant dense 'border lines' or windbreaks to stop the 'Edge Effect' from drying out the microclimate inside our agroforest."
  },
  {
    "id": 121,
    "question": "Why is eucalyptus sometimes used in syntropic systems, even where it is not native?",
    "options": [
      "It grows very fast and gives a lot of wood and biomass when pruned.",
      "It fixes more nitrogen from the air than any legume tree in the system.",
      "It is native to the lowland forests of Taiwan and grows wild there."
    ],
    "answer": "A",
    "explanation": "It's a functional choice! We use eucalyptus as a managed tool, not as a forest invader: its growth rate generates a lot of organic matter to heal the soil quickly, and regular pruning keeps it in check. It does not fix nitrogen, and it is not native to Taiwan."
  },
  {
    "id": 122,
    "question": "What is the primary sign that it is time to prune a 'Support' tree?",
    "options": [
      "When its canopy closes and starts blocking light to the lower strata.",
      "Only when the moon is full, because the sap then rises up into the crown.",
      "Only after the tree has dropped all of its leaves in winter."
    ],
    "answer": "A",
    "explanation": "Light is the trigger! As soon as the lower layers (like coffee or veggies) are shaded beyond their capacity, we must prune the upper layer to reopen the 'light window'."
  },
  {
    "id": 124,
    "question": "What is the role of 'Root Exudates'?",
    "options": [
      "Sugars and proteins released by roots to feed beneficial microbes.",
      "Waste products that plants push out of their roots to get rid of them.",
      "Toxins released by the roots to kill all of the neighboring plants."
    ],
    "answer": "A",
    "explanation": "Plants are generous! They don't just take from the soil; they pump liquid carbon (sugar) into it to farm the bacteria and fungi they need."
  },
  {
    "id": 125,
    "question": "In Taiwan, which native legume tree is excellent for nitrogen fixation and wind protection?",
    "options": [
      "Pongamia (Pongamia pinnata, 水黃皮 shuǐ huáng pí)",
      "Betel nut palm (Areca catechu, 檳榔 bīng láng)",
      "Norfolk Island pine (Araucaria heterophylla)"
    ],
    "answer": "A",
    "explanation": "A great local ally! Pongamia is hardy, salt-tolerant, fixes nitrogen, and provides great biomass, making it perfect for Taiwan's coastal and windy areas."
  },
  {
    "id": 126,
    "question": "What happens if you plant a 'High' stratum tree in the 'Emergent' stratum's position?",
    "options": [
      "It becomes stressed and prone to pests, as it cannot handle full exposure.",
      "It grows perfectly well, because all trees prefer full sun when young.",
      "It slowly turns into an Emergent tree as it adapts to the extra light."
    ],
    "answer": "A",
    "explanation": "Respect the nature of the plant! A High stratum tree (like an Apple or Mango) needs some protection. Forcing it to be the 'King' (Emergent) stresses its metabolism."
  },
  {
    "id": 127,
    "question": "What is the 'Time Console' concept?",
    "options": [
      "Planning so that as one crop finishes, the next one is already taking over.",
      "A device that measures and records the weight of each harvest over the seasons.",
      "A calendar app that tells the farmer the best day for every single task."
    ],
    "answer": "A",
    "explanation": "Like a relay race! There is never 'empty space' or 'empty time'. The decline of one species is the launchpad for the next."
  },
  {
    "id": 128,
    "question": "Why is 'Tilling' (ploughing) generally minimized after the initial installation?",
    "options": [
      "It destroys fungal networks and oxidizes the soil carbon.",
      "Tractors are expensive to buy, run and maintain on slopes.",
      "It makes the soil far too soft for young trees to anchor."
    ],
    "answer": "A",
    "explanation": "Correct! We want a 'Living Soil'. Tilling tears up the fungal internet. We use roots and soil life to aerate the soil, not metal blades."
  },
  {
    "id": 129,
    "question": "What is 'Ecophysiology'?",
    "options": [
      "The study of how an organism's physiology interacts with its environment.",
      "The study of farm economics and the prices of agricultural products.",
      "A branch of medicine that treats human illnesses with plant extracts."
    ],
    "answer": "A",
    "explanation": "This is the science behind our intuition. Understanding a plant's ecophysiology helps us know exactly how much light, water, and nutrients it needs to be happy."
  },
  {
    "id": 130,
    "question": "In which stratum does cacao (Theobroma cacao) grow best in a syntropic system?",
    "options": [
      "Low, below the canopy, as it evolved in the rainforest understory",
      "Emergent, above all other trees, as it needs full sun to fruit",
      "High, forming the main canopy layer above the other fruit trees"
    ],
    "answer": "A",
    "explanation": "Correct! Cacao evolved in the Amazon understory. In our Taiwan plant database it is a Low stratum tree, protected by taller canopy trees."
  },
  {
    "id": 131,
    "question": "Castor bean (Ricinus communis, 蓖麻 bì má) produces biomass very quickly. What must a designer in Taiwan keep in mind?",
    "options": [
      "Its seeds are toxic and it spreads on its own, so use it with care.",
      "It is a native nitrogen-fixer that can be planted without limits.",
      "It is a long-lived climax tree that needs deep shade to grow."
    ],
    "answer": "A",
    "explanation": "Castor bean is a biomass champion: it establishes quickly, breaks compacted soil and gives the first heavy pruning material. But its seeds are highly toxic, and in Taiwan it is naturalized and spreads on its own. Use it with care and manage where it seeds."
  },
  {
    "id": 132,
    "question": "How does 'Thermodynamics' apply to Syntropy?",
    "options": [
      "They cool the land by turning solar energy into biomass instead of heat.",
      "They have no relation to thermodynamics, which is only about engines.",
      "They create heat islands, because dense planting traps the warm air."
    ],
    "answer": "A",
    "explanation": "A planetary cooling system! Bare soil reflects heat (albedo). A complex forest absorbs that heat and turns it into life (carbon bonds) and cool water vapor."
  },
  {
    "id": 133,
    "question": "What is the 'O horizon' in soil science?",
    "options": [
      "The organic layer on the surface (leaves and mulch)",
      "The layer of weathered bedrock at the very bottom",
      "The dense layer of clay found just below the topsoil"
    ],
    "answer": "A",
    "explanation": "The 'O' stands for Organic! In Syntropy, we are constantly building this 'O Horizon' with pruning material to mimic the forest floor."
  },
  {
    "id": 134,
    "question": "Why do we plant 'High Density' (e.g., 20-30 seeds per square meter)?",
    "options": [
      "To encourage positive competition and rapid site occupation.",
      "To make sure that at least one seedling survives the dry season.",
      "To use up old seed stock before it loses its ability to germinate."
    ],
    "answer": "A",
    "explanation": "Plants like company! High density forces plants to grow straight and tall (upward orientation) and ensures the soil is completely covered by green leaves."
  },
  {
    "id": 135,
    "question": "What is a 'Consortium'?",
    "options": [
      "A group of companion plants from different strata and life cycles planted together.",
      "A cooperative of farmers who share their machines and sell their harvest together at market.",
      "A single row of one crop, planted at the same spacing from end to end."
    ],
    "answer": "A",
    "explanation": "Exactly. A consortium is a team. It might include Lettuce (Placenta/Low), Corn (Placenta/Emergent), and an Orange tree (Secondary/Medium) all in the same space."
  },
  {
    "id": 136,
    "question": "What is the primary error when a farmer sees 'Strata' as 'Height'?",
    "options": [
      "They put a short, sun-loving plant in the shade because it is short.",
      "They prune the wrong trees, because they confuse the species.",
      "They plant far too many tall trees close together in every row."
    ],
    "answer": "A",
    "explanation": "A critical distinction! A cactus is short but needs 100% sun (Emergent). If you put it in the 'Low' stratum (shade) because it is short, it will rot."
  },
  {
    "id": 137,
    "question": "Which microorganism is primarily responsible for decomposing woody (high C:N) mulch?",
    "options": [
      "Fungi",
      "Bacteria",
      "Protozoa"
    ],
    "answer": "A",
    "explanation": "Fungi are the wood-eaters! Bacteria prefer soft greens (high nitrogen). Fungi are the only ones with the enzymes to break down tough lignin in wood."
  },
  {
    "id": 138,
    "question": "What is the 'biomass ratio' usually aiming for?",
    "options": [
      "More biomass is generated than is removed by harvest.",
      "More is removed by harvest than the system generates.",
      "Exactly as much is generated as is removed by harvest."
    ],
    "answer": "A",
    "explanation": "The system must pay for itself! We need to grow more energy (wood/leaves) to feed the soil than we remove in the form of fruit/vegetables."
  },
  {
    "id": 139,
    "question": "In the 'Accumulation' phase, what is the soil characteristic?",
    "options": [
      "Shifting from bacterial to fungal dominance",
      "Dominated by bacteria, with very few fungi",
      "Sterile, with almost no microbial life"
    ],
    "answer": "A",
    "explanation": "Correct. As we add wood and carbon, the soil biology shifts. We move from the bacterial dominance of a field to the fungal dominance of a forest."
  },
  {
    "id": 140,
    "question": "Tithonia diversifolia (Mexican sunflower, 王爺葵 wáng yé kuí) is rich in phosphorus. How should it be handled in Taiwan?",
    "options": [
      "It is listed invasive: use existing stands as mulch, but do not spread it.",
      "It is an endemic shrub that should be planted along every new tree row.",
      "It is a slow-growing timber tree that is reserved for the climax stage."
    ],
    "answer": "A",
    "explanation": "Tithonia grows rapidly and accumulates phosphorus in its leaves, so chopping it feeds fruit trees. In Taiwan it is listed as invasive: use and manage stands that are already there, and do not spread it to new places."
  },
  {
    "id": 141,
    "question": "What is the 'Harvest of the Sun'?",
    "options": [
      "Photosynthesis",
      "Solar panels",
      "Sunflower seeds"
    ],
    "answer": "A",
    "explanation": "Farming is harvesting light! Every leaf is a solar panel. Our goal is to arrange leaves so that 100% of the sunlight hitting the farm is captured by a plant."
  },
  {
    "id": 142,
    "question": "What happens if you do NOT prune a Syntropic system?",
    "options": [
      "It stagnates: photosynthesis slows and the system starts to oxidize.",
      "It turns into a wild, natural forest that produces even more fruit every year.",
      "It stays exactly as it is, as a stable and productive system."
    ],
    "answer": "A",
    "explanation": "Counter-intuitive but true. Without the disturbance of pruning, the system settles into a slow equilibrium. Pruning keeps it in an 'aggrading' (growing) phase."
  },
  {
    "id": 143,
    "question": "What is 'Phytosanitary' pruning?",
    "options": [
      "Removing diseased or damaged parts to keep the plant healthy.",
      "Shaping the crown so that the tree looks balanced and tidy.",
      "Cutting branches mainly to produce biomass for the mulch."
    ],
    "answer": "A",
    "explanation": "Like surgery. If a branch is sick, we remove it to prevent the spread of disease and to signal the plant to grow new, healthy tissue."
  },
  {
    "id": 144,
    "question": "What is the Taiwan golden-rain tree (Koelreuteria henryi, 臺灣欒樹 táiwān luán shù) good for in a syntropic system?",
    "options": [
      "A hardy endemic Secondary II tree that tolerates poor soil.",
      "A short-lived Placenta herb for the first months only.",
      "An invasive tree that should be removed wherever it grows."
    ],
    "answer": "A",
    "explanation": "Taiwan golden-rain tree is endemic and hardy. In our Taiwan plant database it is a Secondary II tree of the Medium to High strata that copes with poor soil, and its flowers feed pollinators."
  },
  {
    "id": 145,
    "question": "What is the 'Dripline' of a tree?",
    "options": [
      "The outer edge of the canopy, where rain drips onto the soil.",
      "The line where the trunk meets the soil at the root collar.",
      "The tip of the deepest root, where the roots take up water."
    ],
    "answer": "A",
    "explanation": "This is the active zone! The feeder roots are usually concentrated at the dripline. This is where we apply mulch and amendments."
  },
  {
    "id": 146,
    "question": "Why do we plant 'lines' of trees rather than scattered individual trees?",
    "options": [
      "They make pruning and harvesting easier and create corridors of light.",
      "They simply look more organized and attractive to visitors.",
      "They use more trees in total, which always means a higher total yield for the farm."
    ],
    "answer": "A",
    "explanation": "Management is key. Continuous lines allow us to move efficiently through the system and create clear alleys for biomass production."
  },
  {
    "id": 148,
    "question": "What is a 'Biomass Island' or 'Tree Row' vs an 'Alley'?",
    "options": [
      "The tree row holds long-term trees; the alley grows biomass to feed it.",
      "They are the same thing: two different names for the same planted strip.",
      "The alley is the space kept free for parking machines and storing tools."
    ],
    "answer": "A",
    "explanation": "The engine and the passenger. The alley (often grass) produces the fuel (mulch) that is thrown onto the tree row to feed the crops."
  },
  {
    "id": 149,
    "question": "Which of these is a 'Secondary I' (short lifecycle) tree?",
    "options": [
      "Papaya",
      "Mahogany",
      "Oak"
    ],
    "answer": "A",
    "explanation": "Correct. Papaya grows fast, fruits early (year 1-3), and then declines. It bridges the gap between the Placenta vegetables and the longer-term fruit trees."
  },
  {
    "id": 150,
    "question": "What is the 'Information' given to the system by pruning shears?",
    "options": [
      "Renewal and growth",
      "Panic and decline",
      "Death and decay"
    ],
    "answer": "A",
    "explanation": "Pruning is communication! The cut tells the plant: 'You are not old; grow again!' This pulse of youth rejuvenates the whole system."
  },
  {
    "id": 151,
    "question": "Can 'Pineapple' be integrated into a Syntropic system?",
    "options": [
      "Yes, it is a good Low stratum plant for the early years.",
      "No, it only grows well in a full-sun monoculture.",
      "Yes, but only in deep shade under the climax trees."
    ],
    "answer": "A",
    "explanation": "Absolutely! Pineapple is a classic bromeliad. It fits perfectly in the Low stratum of the Placenta/Secondary phase, sitting under the young trees."
  },
  {
    "id": 152,
    "question": "What is the role of 'Organic Matter' in water retention?",
    "options": [
      "It acts like a sponge, holding many times its own weight in water.",
      "It repels water, so that the rain runs off the soil surface faster and further.",
      "It has no real effect on how much water a soil can hold."
    ],
    "answer": "A",
    "explanation": "The soil sponge! Increasing organic matter by just 1% can increase water holding capacity by 20,000 gallons per acre."
  },
  {
    "id": 153,
    "question": "Why are biomass grasses cut just before they flower and set seed?",
    "options": [
      "Their energy and nutrients are at a peak, and no seed is set.",
      "Their stems are softest then, so they are easiest to bale and sell as fodder.",
      "Flowering grasses attract pests that damage the trees."
    ],
    "answer": "A",
    "explanation": "Timing is everything. Before flowering, the plant pumps energy up; after flowering, the energy goes into seed or lignifies. Cutting before seed also stops grasses from spreading, which matters for Napier and guinea grass, both listed as invasive in Taiwan."
  },
  {
    "id": 154,
    "question": "What is the 'Vegetative Period' vs 'Reproductive Period'?",
    "options": [
      "Growing leaves and stems vs. growing flowers, fruit and seeds",
      "Growth during the daytime vs. growth during the night",
      "Growth in the cool winter vs. growth in the warm summer"
    ],
    "answer": "A",
    "explanation": "Correct. Syntropy aims to keep the system in a 'Vegetative' (youthful) state for as long as possible to maximize biomass and photosynthesis."
  },
  {
    "id": 155,
    "question": "What does 'Species Diversity' provide to the system's immune system?",
    "options": [
      "Resilience: pests struggle to find hosts and predators find habitat.",
      "Confusion: plants cannot tell which neighbors to cooperate with.",
      "Competition: diverse plants weaken each other and reduce pests."
    ],
    "answer": "A",
    "explanation": "Diversity is security. A complex system has natural checks and balances, so no single pest can destroy the whole farm."
  },
  {
    "id": 156,
    "question": "What is 'Carbon Sequestration'?",
    "options": [
      "Capturing CO2 from the air and storing it in plants and soil.",
      "Burning wood to release the energy stored in plant biomass.",
      "Releasing CO2 from the soil by ploughing and aerating it."
    ],
    "answer": "A",
    "explanation": "We are climate coolers. By growing wood and building soil humus, we are physically taking carbon out of the sky and putting it back in the ground."
  },
  {
    "id": 157,
    "question": "What is the 'C:N Ratio' (Carbon to Nitrogen)?",
    "options": [
      "The balance of carbon (woody) to nitrogen (green) material",
      "The ratio of crop prices to the cost of fertilizer inputs",
      "The ratio of compost to soil used in each planting hole"
    ],
    "answer": "A",
    "explanation": "Balancing the diet! High C (wood) feeds fungi; High N (greens) feeds bacteria. A healthy system cycles both."
  },
  {
    "id": 158,
    "question": "In Taiwan, why is 'Bamboo' handled with caution in mixed systems?",
    "options": [
      "It can spread aggressively and dominate unless it is managed strictly.",
      "It poisons the soil, so that no other plant can grow near it.",
      "It grows poorly in Taiwan's warm climate and rarely survives long."
    ],
    "answer": "A",
    "explanation": "Bamboo is powerful! It is a great biomass source, but its root system is so aggressive it can outcompete fruit trees if not trenched or managed carefully."
  },
  {
    "id": 159,
    "question": "What is 'Successional Pruning'?",
    "options": [
      "Removing plants that finish their cycle to make room for the next stage.",
      "Pruning only the young seedlings, so that they branch out earlier.",
      "Pruning on a fixed weekly schedule, whatever the stage of the system."
    ],
    "answer": "A",
    "explanation": "The passing of the baton. When the Papaya is done, we prune it out (or chop it) to give light to the Coffee or Jackfruit growing beneath it."
  },
  {
    "id": 160,
    "question": "What is the role of 'Animals' in a mature Syntropic system?",
    "options": [
      "They can be integrated as mobile pruners and fertilizers (silvopasture).",
      "They are never allowed in the system, because they damage young trees.",
      "They are kept only as pets and play no role in the system's functions."
    ],
    "answer": "A",
    "explanation": "Animals are the mobile leg of the system! Chickens, pigs, or cows can cycle nutrients and manage grass, provided the trees are established enough to not be damaged."
  },
  {
    "id": 161,
    "question": "What is 'aerenchyma'?",
    "options": [
      "Spongy plant tissue with large air spaces, as in many wetland plants",
      "A small spider that spins its webs among the leaves of banana plants",
      "A fungal disease that rots the pseudostems of banana plants from inside"
    ],
    "answer": "A",
    "explanation": "Aerenchyma is spongy plant tissue full of air spaces. It lets wetland plants such as taro or lotus carry oxygen down to roots in waterlogged soil, and banana pseudostems also contain large air chambers."
  },
  {
    "id": 162,
    "question": "Why is 'Soil Coverage' non-negotiable?",
    "options": [
      "Bare soil dies: sun sterilizes it and heavy rain compacts it.",
      "Bare soil looks messy and makes the farm hard to sell.",
      "Covering the soil saves time, because mulch replaces pruning."
    ],
    "answer": "A",
    "explanation": "The golden rule! In a forest, you never see bare soil. We must always keep the 'skin' of the earth covered to protect the life underneath."
  },
  {
    "id": 163,
    "question": "What is 'Mycelium'?",
    "options": [
      "The network of fine fungal threads that forms a fungus's body",
      "The thin root hairs that grow near the tips of plant roots to absorb water",
      "The hard outer coat that protects a seed in the soil"
    ],
    "answer": "A",
    "explanation": "The internet of the soil! These white threads connect plant roots, transport nutrients, and decompose organic matter."
  },
  {
    "id": 164,
    "question": "What is a 'Support Species'?",
    "options": [
      "A plant grown to serve the system with biomass, nitrogen or shade",
      "A plant grown mainly as a living post to hold up climbing vines",
      "A spontaneous weed that is simply left to grow wherever it appears"
    ],
    "answer": "A",
    "explanation": "The unsung heroes! While we sell the mangoes, it is the Inga or Gliricidia trees that are working hard to feed and protect the mango tree."
  },
  {
    "id": 165,
    "question": "What is 'Stratification' in simple terms?",
    "options": [
      "Stacking plants vertically to fill every niche of light",
      "Planting every crop in perfectly straight lines",
      "Digging deep holes to place plants at different depths"
    ],
    "answer": "A",
    "explanation": "Like an apartment building! We fill the penthouse (Emergent), the middle floors (High/Medium), and the ground floor (Low) all at once."
  },
  {
    "id": 166,
    "question": "What is the 'Rhizosphere'?",
    "options": [
      "The thin zone of soil directly shaped by roots and their microbes",
      "The thin layer of moist air that surrounds the leaves of a plant",
      "The overall shape and spread of a plant's whole root system"
    ],
    "answer": "A",
    "explanation": "The life zone! This millimeter-thin layer around the root is where all the trading (sugar for minerals) happens between plants and microbes."
  },
  {
    "id": 167,
    "question": "Why do we use 'Seeds' directly in the field (Direct Seeding) when possible?",
    "options": [
      "It produces a better taproot that is not deformed by a pot.",
      "It is always cheaper than buying seedlings from a nursery.",
      "It always gives a faster harvest than planting seedlings."
    ],
    "answer": "A",
    "explanation": "The taproot is the anchor! A seed planted in place sends a root deep immediately. A potted plant often has a curled root that never establishes as well."
  },
  {
    "id": 168,
    "question": "What is 'Inga edulis' (Ice Cream Bean)?",
    "options": [
      "A classic support tree, valued for nitrogen fixation and biomass",
      "A popular frozen dessert made from the pods of tropical beans",
      "A fast-spreading weed that should be removed as soon as it appears"
    ],
    "answer": "A",
    "explanation": "A superstar support tree! It grows fast, fixes nitrogen, and its leaves decompose perfectly to make rich soil. Plus, the fruit is tasty!"
  },
  {
    "id": 169,
    "question": "What is the psychological shift required for a Syntropic farmer?",
    "options": [
      "From controlling nature to cooperating with nature",
      "From working less to working much harder every day",
      "From saving money to spending more on inputs"
    ],
    "answer": "A",
    "explanation": "The inner landscape changes. We stop fighting pests and weeds and start asking: 'What is this telling me about the system?'"
  },
  {
    "id": 170,
    "question": "What is 'Bio-char'?",
    "options": [
      "Charcoal added to soil to house microbes and hold nutrients",
      "Food that has been burnt and composted with kitchen waste",
      "A synthetic chemical that is sprayed to sterilize soil"
    ],
    "answer": "A",
    "explanation": "Coral reef for microbes! The porous structure of charcoal provides millions of tiny homes for soil bacteria and fungi to live in."
  },
  {
    "id": 171,
    "question": "Can Syntropic Agroforestry restore degraded land?",
    "options": [
      "Yes, it is designed to regenerate degraded soils through succession.",
      "No, it needs good, fertile soil from the very start to work.",
      "Only if chemical fertilizers are added during the first few years of the system."
    ],
    "answer": "A",
    "explanation": "It is a healing technology. By using hardy pioneer plants (placenta), we can bring life back to even the most compacted, dead soils."
  },
  {
    "id": 172,
    "question": "What is the 'Climax' phase?",
    "options": [
      "The stage of maximum stability, quality and complexity",
      "The final harvest, after which the farm is cleared",
      "The first planting phase, when the seeds are sown"
    ],
    "answer": "A",
    "explanation": "The destination! The Climax phase is when the system has abundant resources, high-value timber/fruit, and requires less external input."
  },
  {
    "id": 173,
    "question": "What is 'Light pruning' vs 'Drastic pruning'?",
    "options": [
      "Drastic pruning removes most foliage to reset growth; light pruning shapes.",
      "They are the same; the words only describe the size of the tools.",
      "Drastic pruning always kills the tree, so it is used only to remove it."
    ],
    "answer": "A",
    "explanation": "Sometimes we need a 'Reboot'. Drastic pruning shocks the system into a massive regrowth pulse, which is useful if the system has stalled."
  },
  {
    "id": 174,
    "question": "What is the 'Nitrogen Cycle'?",
    "options": [
      "How nitrogen changes between chemical forms, e.g. fixation and nitrification",
      "The yearly routine of buying and spreading nitrogen fertilizer on fields",
      "The movement of water vapor between the leaves and the surrounding air"
    ],
    "answer": "A",
    "explanation": "The engine of growth. Legumes and bacteria pull N from the air; biomass pruning returns it to the soil. We manage this cycle biologically."
  },
  {
    "id": 175,
    "question": "Why is 'Diversity' essentially 'Safety'?",
    "options": [
      "If one crop fails from weather or disease, others still thrive.",
      "Diverse farms look more attractive and draw in more paying visitors each year.",
      "Diversity means more species to sell, so prices rise."
    ],
    "answer": "A",
    "explanation": "Don't put all eggs in one basket. In a diverse system, a bad year for mangoes might be a great year for avocados or timber."
  },
  {
    "id": 176,
    "question": "What is 'Epigenetics' in the context of seeds?",
    "options": [
      "Environmental conditions can influence how genes are expressed in offspring.",
      "The genetic modification of seeds in a laboratory to add new useful traits.",
      "The storage of seeds in cold, dry conditions so that they stay viable longer."
    ],
    "answer": "A",
    "explanation": "Seeds learn! A seed harvested from a Syntropic system 'remembers' the abundance and fungal connections, producing a stronger plant than a conventional seed."
  },
  {
    "id": 177,
    "question": "What is 'Albedo'?",
    "options": [
      "How much of the light that hits a surface is reflected",
      "How much rain a surface absorbs before water runs off",
      "How much heat a dark soil stores during a sunny day"
    ],
    "answer": "A",
    "explanation": "We want low albedo! We want the farm to absorb light (photosynthesis), not reflect it back into the atmosphere as heat (which bare soil does)."
  },
  {
    "id": 178,
    "question": "What is the main benefit of windbreaks?",
    "options": [
      "They reduce wind damage and evaporation, keeping humidity in the system.",
      "They block all wind completely, so the air inside stays perfectly still.",
      "They serve mainly as a fence that keeps animals out of the rows."
    ],
    "answer": "A",
    "explanation": "Wind is a thief! It steals moisture. By slowing the wind, we keep the precious humidity inside the system for the plants to use."
  },
  {
    "id": 179,
    "question": "In Taiwan, how does 'Betel Nut' farming typically damage the soil?",
    "options": [
      "Often a slope monoculture with herbicides, which causes heavy erosion",
      "It fixes too much nitrogen and makes the soil much too rich for crops",
      "It shades the soil so deeply that nothing else can germinate"
    ],
    "answer": "A",
    "explanation": "A local challenge. Syntropy offers a solution: converting Betel Nut plantations into diverse agroforests to stabilize the slopes."
  },
  {
    "id": 180,
    "question": "What is the 'Water Table'?",
    "options": [
      "The level below which the ground is saturated with water",
      "The total amount of rain that falls on a farm in one year",
      "The level of the water in the nearest river or mountain stream"
    ],
    "answer": "A",
    "explanation": "We want to raise it! By increasing infiltration and planting trees, we help recharge the aquifers and raise the local water table."
  },
  {
    "id": 181,
    "question": "What is 'Humus'?",
    "options": [
      "Stable, decomposed organic matter that darkens and enriches soil",
      "Fresh plant material that has just been chopped and laid as mulch",
      "A type of fine, sticky clay that holds water in the deeper subsoil"
    ],
    "answer": "A",
    "explanation": "The black gold! Humus is the stable end-product of decomposition. It holds nutrients and water like a battery for the plants."
  },
  {
    "id": 182,
    "question": "What is 'Biophilia'?",
    "options": [
      "The innate human tendency to seek connection with nature",
      "A strong fear of insects, snakes and other wild forest animals",
      "A plant disease caused by too much contact with people"
    ],
    "answer": "A",
    "explanation": "Why we are here! Syntropic farming isn't just production; it satisfies our deep biological need to be surrounded by thriving life."
  },
  {
    "id": 183,
    "question": "What is the 'Cradle' concept?",
    "options": [
      "Preparing a rich, protected micro-site for a demanding tree like cacao",
      "A wooden frame that holds a young tree upright during strong typhoon winds",
      "A raised bed in which all seedlings are grown before planting"
    ],
    "answer": "A",
    "explanation": "Babies need protection! We don't just stick a Cacao tree in the sun. We build a 'cradle' of placenta plants, biomass, and shade around it."
  },
  {
    "id": 184,
    "question": "What is the difference between 'Annual' and 'Perennial'?",
    "options": [
      "Annuals complete their life in one season; perennials live many years.",
      "Annuals live for many years; perennials die after their first season.",
      "Annuals are always grasses; perennials are always woody trees."
    ],
    "answer": "A",
    "explanation": "Syntropy mixes them! We use Annuals (corn, beans) to pay the bills and build soil while the Perennials (fruit trees) are establishing."
  },
  {
    "id": 185,
    "question": "What is 'Agroecology'?",
    "options": [
      "Farming based on ecological principles",
      "Industrial farming with high external inputs",
      "The study of rocks and soil formation"
    ],
    "answer": "A",
    "explanation": "Syntropy is a form of Agroecology. It treats the farm as an ecosystem, not a factory."
  },
  {
    "id": 186,
    "question": "Why is 'Observation' the most important tool?",
    "options": [
      "Because every site, climate and day is different",
      "Because books and courses are usually wrong",
      "Because it replaces the need for any pruning"
    ],
    "answer": "A",
    "explanation": "The land speaks. The Syntropic farmer must constantly observe: Is the tree shaded? Is the soil dry? The answers are in the field, not the manual."
  },
  {
    "id": 187,
    "question": "What is 'Girdling' (Ring-barking)?",
    "options": [
      "Removing a ring of bark to kill a tree standing, leaving a habitat snag",
      "Tying a wide belt around a young trunk so that the wind cannot bend it over",
      "Planting several young trees in a tight circle around a pole"
    ],
    "answer": "A",
    "explanation": "Useful death. Sometimes we girdle an invasive or unwanted tree to let it rot in place, providing habitat for birds and slowly releasing carbon."
  },
  {
    "id": 189,
    "question": "What is the 'Biotic Pump' theory?",
    "options": [
      "Forests draw moist ocean air inland by condensing water vapor",
      "A mechanical pump driven by plant roots to lift groundwater",
      "The heartbeat-like pulse of sap moving up and down a tree trunk"
    ],
    "answer": "A",
    "explanation": "Forests bring rain! By transpiring water, forests create low pressure that sucks moist ocean air inland. Without forests, the interior dries out."
  },
  {
    "id": 190,
    "question": "What is 'Anaerobic' vs 'Aerobic' decomposition?",
    "options": [
      "Without oxygen (smelly rot) vs. with oxygen (compost, forest smell)",
      "They are the same process, only happening at different temperatures",
      "Aerobic decomposition is harmful to soil life and should be avoided"
    ],
    "answer": "A",
    "explanation": "We want Aerobic! Syntropic soils are fluffy and full of air. Anaerobic (compacted, wet) soils produce methane and breed pathogens."
  },
  {
    "id": 191,
    "question": "What is 'phosphorus solubilization'?",
    "options": [
      "Microbes release acids that unlock soil-bound phosphorus for plants",
      "Phosphorus disappearing from the soil after heavy rainfall",
      "Adding soluble chemical phosphorus fertilizer to the soil before planting crops"
    ],
    "answer": "A",
    "explanation": "Biology unlocks chemistry! There is usually plenty of Phosphorus in the soil, but it's locked. Microbes hold the key to release it."
  },
  {
    "id": 193,
    "question": "What is 'Lignin'?",
    "options": [
      "A complex polymer that makes wood hard and rigid",
      "A protein that gives leaves their green color",
      "A simple sugar that plants store in their roots"
    ],
    "answer": "A",
    "explanation": "Fungal food! Lignin is the tough stuff in wood. Only fungi can break it down, creating the stable, long-term carbon (humus) in the soil."
  },
  {
    "id": 194,
    "question": "What is the 'Microclimate'?",
    "options": [
      "The specific climate of a small area, such as under a canopy",
      "The global climate trend expected over the coming decades",
      "A small cloud that forms over a forest in the morning"
    ],
    "answer": "A",
    "explanation": "We are microclimate architects! By planting trees, we lower the temperature and raise the humidity right where our crops are growing."
  },
  {
    "id": 195,
    "question": "In Taiwan, why is Taiwan acacia (Acacia confusa, 相思樹 xiāng sī shù) useful?",
    "options": [
      "It produces biomass, fixes nitrogen, and its hard wood makes good charcoal.",
      "It is an invasive tree from Australia that must be removed everywhere.",
      "It is a shade-loving shrub that belongs in the Low stratum under fruit trees."
    ],
    "answer": "A",
    "explanation": "A native champion. Acacia confusa is incredibly resilient and produces dense wood that feeds the soil slowly and steadily."
  },
  {
    "id": 196,
    "question": "What is 'Root Grafting'?",
    "options": [
      "Roots of the same species joining underground to share resources",
      "Joining a scion onto a rootstock by hand in the tree nursery, as with fruit trees",
      "Roots of rival trees attacking and strangling each other"
    ],
    "answer": "A",
    "explanation": "Underground solidarity! Trees of the same species often link up underground, keeping stumps alive and sharing sugars with weaker trees."
  },
  {
    "id": 197,
    "question": "What is the 'Harvest of Water'?",
    "options": [
      "A system that yields more clean water to springs than it uses",
      "Collecting rainwater from roofs and storing it in large tanks",
      "Pumping groundwater to irrigate the rows in dry months"
    ],
    "answer": "A",
    "explanation": "The ultimate goal. A mature Syntropic system acts as a sponge, filtering rain and recharging springs, actually 'producing' water for the watershed."
  },
  {
    "id": 198,
    "question": "What is 'Phototropism'?",
    "options": [
      "Growth toward light",
      "Growth toward water",
      "Growth away from gravity"
    ],
    "answer": "A",
    "explanation": "Plants want sun! We manage the system so plants don't have to spend energy stretching crookedly to find light; we place them where the light is."
  },
  {
    "id": 199,
    "question": "What is the 'Disturbance Regime'?",
    "options": [
      "The frequency and intensity of pruning and other disturbances",
      "The set of rules that limit how often a farm may be visited",
      "A period in which no pruning at all is allowed on the farm"
    ],
    "answer": "A",
    "explanation": "We are the disturbance! Nature uses storms; we use pruning shears. The trick is to disturb the system just enough to trigger growth, but not enough to kill it."
  },
  {
    "id": 200,
    "question": "What is the ultimate definition of 'Sustainability' in Syntropy?",
    "options": [
      "Regeneration: leaving more energy, water and life than at the start",
      "Doing less harm to the land than conventional, high-input farming usually does",
      "Breaking even: putting back exactly as much as is taken"
    ],
    "answer": "A",
    "explanation": "Beyond sustainability. We don't just want to sustain the status quo; we want to spiral upwards into abundance. That is Syntropy!"
  }
];

// Map questions for use in the app
export const QUESTION_BANK: Question[] = RAW_DATA.map((q) => ({
  id: `q-${q.id}`,
  category: "Syntropic Agroforestry",
  questionText: q.question,
  options: q.options,
  correctAnswerIndex: mapAnswer(q.answer, q.id),
  explanation: q.explanation
}));

export const QUESTION_COUNT = QUESTION_BANK.length;
export const FALLBACK_QUESTIONS = QUESTION_BANK.slice(0, 5);
