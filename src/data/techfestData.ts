export interface Competition {
  id: string;
  name: string;
  category: 'Robotics' | 'AI & Software' | 'Aeromodelling' | 'Innovation & Social' | 'School & Olympiad';
  prize: string;
  date: string;
  location: string;
  description: string;
  rulesSummary: string[];
  teamSize: string;
  image: string;
  featured?: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  category: 'AI & ML' | 'Robotics' | 'Web Development' | 'Game Dev' | 'Cyber Security';
  duration: string;
  instructor: string;
  level: string;
  highlights: string[];
  image: string;
  date: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  topic: string;
  date: string;
  venue: string;
  image: string;
}

export interface ZonalCity {
  id: string;
  name: string;
  state: string;
  lat: number; // For SVG mapping percentage
  lng: number; // For SVG mapping percentage
  date: string;
  venue: string;
  status: 'Completed' | 'Upcoming' | 'Live';
  eventsCount: number;
}

export interface ScheduleItem {
  id: string;
  day: 'Day 01' | 'Day 02' | 'Day 03';
  time: string;
  title: string;
  category: 'Competitions' | 'Robowars' | 'Workshops' | 'Lectures' | 'Ozone' | 'Technoholix' | 'Drone Show';
  venue: string;
  description: string;
  isLive?: boolean;
}

export interface CampusLocation {
  id: string;
  name: string;
  code: string;
  x: number; // Percentage on 2D map
  y: number; // Percentage on 2D map
  description: string;
  eventsHosted: string[];
  zoneType: 'Arena' | 'Auditorium' | 'Workshops' | 'Exhibitions' | 'Food & Chill';
}

export const FESTIVAL_STATS = {
  footfall: '180,000+',
  events: '300+',
  editions: '30th',
  globalReach: '75+ Countries',
  prizes: '₹50,000,000+',
  universities: '2,500+'
};

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: 'roboracers',
    name: 'Roboracers',
    category: 'Robotics',
    prize: '₹1,500,000',
    date: 'Day 01 - 03',
    location: 'Gymkhana Grounds',
    description: 'Design an autonomous or wireless high-speed robot capable of tackling treacherous all-terrain obstacle tracks under harsh dynamic conditions.',
    rulesSummary: ['Max bot dimensions: 30x30x30 cm', 'Weight limit: 5 kg', 'Pneumatic/hydraulic actuators permitted'],
    teamSize: '2 - 4 Members',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'aeromodelling',
    name: 'Aeromodelling Challenge',
    category: 'Aeromodelling',
    prize: '₹2,000,000',
    date: 'Day 02',
    location: 'IIT Bombay Helipad / Gymkhana',
    description: 'Craft fixed-wing RC aircraft engineered for high-agility aerobatic maneuvers, payload drop precision, and extreme aerodynamic endurance.',
    rulesSummary: ['Electric propulsion only', 'Wingspan max: 1.5 meters', 'Payload delivery mechanism mandatory'],
    teamSize: '3 - 5 Members',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'voice-agent-hackathon',
    name: 'Voice Agent Hackathon',
    category: 'AI & Software',
    prize: '₹1,200,000',
    date: 'Day 01 - 02',
    location: 'LH 101, Lecture Hall Complex',
    description: 'Build real-time multimodal LLM voice agents capable of zero-latency natural conversational workflow, tool invocation, and offline resilience.',
    rulesSummary: ['Open-source base models permitted', 'Latency benchmark under 400ms', 'Live deployment required'],
    teamSize: '1 - 4 Members',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'blix-a-thon',
    name: 'Blix-a-thon',
    category: 'Robotics',
    prize: '₹800,000',
    date: 'Day 01',
    location: 'SAC Indoor Hall',
    description: 'Rapid modular robotics hackathon challenging young innovators to construct functional task-oriented bots using Blix mechanical kits.',
    rulesSummary: ['Kit components provided on-site', '4-hour build challenge', 'Live operational arena testing'],
    teamSize: '2 Members',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'meshmerise',
    name: 'Meshmerise',
    category: 'Robotics',
    prize: '₹1,000,000',
    date: 'Day 02',
    location: 'Gymkhana Arena 2',
    description: 'Autonomous grid-solving line follower bot challenge traversing complex multi-level mazes with dynamic obstacle avoidance.',
    rulesSummary: ['Autonomous micro-controller driven', 'No remote communication', 'Line sensors limit: 16'],
    teamSize: '2 - 4 Members',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'ideathon',
    name: 'Techfest Ideathon',
    category: 'Innovation & Social',
    prize: '₹2,500,000',
    date: 'Day 03',
    location: 'Convocation Hall',
    description: 'National innovation incubator presenting breakthrough solutions across climate technology, healthcare, renewable energy, and smart cities.',
    rulesSummary: ['Working prototype or validated proof-of-concept required', 'Venture pitching to VC panel'],
    teamSize: '1 - 5 Members',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'techfest-olympiad',
    name: 'Techfest Olympiad',
    category: 'School & Olympiad',
    prize: '₹500,000',
    date: 'Day 01',
    location: 'Lecture Hall Complex',
    description: 'Premier national STEM aptitude assessment for school students testing computational thinking, physics, logic, and creative problem solving.',
    rulesSummary: ['Classes 8 to 12 eligible', 'Individual participation', '2-hour examination format'],
    teamSize: 'Individual',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'robowotics',
    name: 'Robowotics',
    category: 'Robotics',
    prize: '₹900,000',
    date: 'Day 03',
    location: 'Gymkhana Arena 3',
    description: 'Aquatic robotics challenge designing amphibious unmanned surface vehicles for underwater navigation and object retrieval.',
    rulesSummary: ['Waterproof chassis required', 'Depth rating min: 2 meters', 'Wireless control frequency: 2.4 GHz'],
    teamSize: '3 - 4 Members',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'upskill-india',
    name: 'Upskill India Challenge',
    category: 'Innovation & Social',
    prize: '₹750,000',
    date: 'Day 02',
    location: 'LH 102',
    description: 'Developing digital ed-tech platforms and AI tutors targeting rural education access and technical skill development.',
    rulesSummary: ['Multilingual support mandatory', 'Offline sync capability rewarded'],
    teamSize: '2 - 4 Members',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'safetronix',
    name: 'Safetronix',
    category: 'AI & Software',
    prize: '₹600,000',
    date: 'Day 01',
    location: 'Software Lab 3',
    description: 'Cybersecurity & IoT hardware security contest focusing on vulnerability identification, firmware auditing, and zero-day defense.',
    rulesSummary: ['CTF format', 'Hardware hacking bench provided', 'Ethical guidelines apply strictly'],
    teamSize: '1 - 3 Members',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'sparkx',
    name: 'SparkX Electrical Design',
    category: 'AI & Software',
    prize: '₹700,000',
    date: 'Day 02',
    location: 'EE Dept Labs',
    description: 'High-frequency PCB design, power electronics optimization, and semiconductor circuit synthesis challenge.',
    rulesSummary: ['Altium / KiCad designs', 'Thermal analysis requirement'],
    teamSize: '2 Members',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'panchayati-raj',
    name: 'Panchayati Raj Tech Drive',
    category: 'Innovation & Social',
    prize: '₹1,000,000',
    date: 'Day 03',
    location: 'SOM Auditorium',
    description: 'Deploying IoT ground sensors and rural governance software to digitize village administration and water resource distribution.',
    rulesSummary: ['Field test validation', 'Low-cost BOM constraint'],
    teamSize: '3 - 5 Members',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'jfs',
    name: 'Junior Financial Summit (JFS)',
    category: 'School & Olympiad',
    prize: '₹500,000',
    date: 'Day 02',
    location: 'FC Kohli Auditorium',
    description: 'Fintech case study and algorithmic trading simulation designed for high school and undergraduate finance enthusiasts.',
    rulesSummary: ['Simulated portfolio trading', 'Real-time market volatility scenarios'],
    teamSize: '2 Members',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'idrl-drone-racing',
    name: 'IDRL Techfest Grand Prix',
    category: 'Aeromodelling',
    prize: '₹3,000,000',
    date: 'Day 02 - 03 (Night)',
    location: 'Main Hockey Ground Arena',
    description: 'Official International Drone Racing League (IDRL) night circuit battle featuring FPV pilots racing neon LED quadcopters at 140 km/h.',
    rulesSummary: ['5-inch quadcopters max', 'HD video transmision', 'Strict frequency management'],
    teamSize: 'Individual + Crew',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000',
    featured: true
  }
];

export const ROBOWARS_WEIGHT_CLASSES = [
  { class: '8 KG', label: 'Featherweight', desc: 'High RPM spinning weapons and titanium wedge bots battling in fast-paced agility bouts.' },
  { class: '15 KG', label: 'Lightweight', desc: 'Crushing hydraulic jaws and pneumatic flippers delivering massive vertical catapult flips.' },
  { class: '30 KG', label: 'Middleweight', desc: 'Heavy vertical drums and horizontal spinners smashing reinforced bulletproof polycarbonate walls.' },
  { class: '60 KG', label: 'Heavyweight International', desc: 'The flagship supreme arena battle with international teams competing for Asia\'s largest combat trophy.' }
];

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'ai-agentic-systems',
    title: 'Generative AI & Agentic Frameworks',
    category: 'AI & ML',
    duration: '2 Days (12 Hours)',
    instructor: 'Senior AI Engineers & Industry Labs',
    level: 'Intermediate - Advanced',
    highlights: ['Multi-agent orchestration', 'LangChain & AutoGen hands-on', 'Deploying localized LLMs', 'Official Certification'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=1000',
    date: 'Day 01 - 02'
  },
  {
    id: 'embedded-robotics-ros2',
    title: 'Autonomous Systems with ROS 2 & NVIDIA Jetson',
    category: 'Robotics',
    duration: '2 Days (14 Hours)',
    instructor: 'Robotics Research Scientists',
    level: 'All Levels',
    highlights: ['LiDAR SLAM mapping', 'Real-time motion planning', 'Hardware deployment on Jetson Orin', 'Certificate of Excellence'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    date: 'Day 01 - 02'
  },
  {
    id: 'fullstack-web-architecture',
    title: 'High-Scale Web Engineering & Cloud Native',
    category: 'Web Development',
    duration: '1 Day (7 Hours)',
    instructor: 'Techfest Core Dev Team & Guest Architects',
    level: 'Beginner - Intermediate',
    highlights: ['Next.js App Router & Edge Functions', 'Distributed Caching & DB Sharding', 'Live Cloud Deployment', 'IIT Bombay Certificate'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    date: 'Day 02'
  },
  {
    id: 'unreal-engine-game-dev',
    title: 'Unreal Engine 5 & Real-Time Motion Rendering',
    category: 'Game Dev',
    duration: '1 Day (8 Hours)',
    instructor: 'AAA Game Studio Lead Artists',
    level: 'Intermediate',
    highlights: ['Nanite & Lumen lighting', 'Blueprint visual scripting', 'Physics-based combat engines', 'Portfolio Project'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    date: 'Day 03'
  },
  {
    id: 'ethical-hacking-quantum',
    title: 'Quantum Cryptography & Offensive Security',
    category: 'Cyber Security',
    duration: '1 Day (6 Hours)',
    instructor: 'Global Information Security Experts',
    level: 'Intermediate',
    highlights: ['Post-quantum encryption', 'Zero-day vulnerability analysis', 'Live CTF sandbox session', 'Industry Certification'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    date: 'Day 03'
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'speaker-1',
    name: 'Dr. A.P. J. Abdul Kalam',
    title: 'Former President of India (In Memoriam Legacy Speaker)',
    organization: 'ISRO / Govt of India',
    topic: 'Empowering Youth Through Science & Technology',
    date: '30 Years Legacy Highlight',
    venue: 'Convocation Hall',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'speaker-2',
    name: 'Dr. S. Somanath',
    title: 'Chairman',
    organization: 'Indian Space Research Organisation (ISRO)',
    topic: 'Chandrayaan-3 & Future Horizons of Deep Space Exploration',
    date: 'Day 01 - 11:00 AM',
    venue: 'Convocation Hall',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'speaker-3',
    name: 'Prof. Yann LeCun',
    title: 'Chief AI Scientist & Turing Awardee',
    organization: 'Meta AI / NYU',
    topic: 'Objective-Driven AI Architecture Beyond LLMs',
    date: 'Day 02 - 03:00 PM',
    venue: 'Open Air Theatre (OAT)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'speaker-4',
    name: 'Sophia',
    title: 'Humanoid Robot Keynote',
    organization: 'Hanson Robotics',
    topic: 'The Nexus of AI Empathy & Humanoid Robotics',
    date: 'Day 03 - 05:00 PM',
    venue: 'Open Air Theatre (OAT)',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
  }
];

export const ZONAL_CITIES: ZonalCity[] = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', lat: 60, lng: 28, date: 'Oct 15, 2026', venue: 'IIT Bombay Campus', status: 'Live', eventsCount: 18 },
  { id: 'delhi', name: 'New Delhi', state: 'Delhi NCR', lat: 30, lng: 40, date: 'Oct 22, 2026', venue: 'IIT Delhi Campus', status: 'Upcoming', eventsCount: 14 },
  { id: 'bangalore', name: 'Bengaluru', state: 'Karnataka', lat: 78, lng: 38, date: 'Nov 05, 2026', venue: 'IISc Bangalore', status: 'Upcoming', eventsCount: 16 },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', lat: 48, lng: 75, date: 'Nov 12, 2026', venue: 'Science City Kolkata', status: 'Upcoming', eventsCount: 12 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', lat: 35, lng: 30, date: 'Nov 18, 2026', venue: 'MNIT Jaipur', status: 'Upcoming', eventsCount: 10 },
  { id: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', lat: 45, lng: 45, date: 'Nov 25, 2026', venue: 'MANIT Bhopal', status: 'Upcoming', eventsCount: 12 }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: 'sch-1', day: 'Day 01', time: '09:00 AM', title: 'Techfest 30 Inaugural Ceremony', category: 'Lectures', venue: 'Convocation Hall', description: 'Grand opening ceremony featuring ISRO leadership, IIT Bombay Director, and international delegations.', isLive: true },
  { id: 'sch-2', day: 'Day 01', time: '11:00 AM', title: 'ISRO Deep Space Keynote', category: 'Lectures', venue: 'Convocation Hall', description: 'Keynote presentation by ISRO Chairman on interplanetary missions.', isLive: true },
  { id: 'sch-3', day: 'Day 01', time: '01:30 PM', title: 'International Robowars Qualifiers (8kg & 15kg)', category: 'Robowars', venue: 'Main Gymkhana Arena', description: 'Fast-paced combat qualifiers with horizontal spinners and flippers.', isLive: false },
  { id: 'sch-4', day: 'Day 01', time: '03:00 PM', title: 'Generative AI Agentic Systems Workshop', category: 'Workshops', venue: 'LH 101', description: 'Hands-on orchestration of multi-agent LLMs.', isLive: false },
  { id: 'sch-5', day: 'Day 01', time: '07:00 PM', title: 'Technoholix: International Laser Visuals & EDM', category: 'Technoholix', venue: 'Open Air Theatre (OAT)', description: 'Spectacular visual laser extravaganza and world-class EDM artist performance.', isLive: false },

  { id: 'sch-6', day: 'Day 02', time: '10:00 AM', title: 'Aeromodelling Payload Flight Rounds', category: 'Competitions', venue: 'Helipad Ground', description: 'Precision payload drop and endurance aerial maneuvers.', isLive: false },
  { id: 'sch-7', day: 'Day 02', time: '01:00 PM', title: 'International Robowars 30kg & 60kg Combat', category: 'Robowars', venue: 'Main Gymkhana Arena', description: 'Heavyweight bot combat with international teams from 12 countries.', isLive: false },
  { id: 'sch-8', day: 'Day 02', time: '04:00 PM', title: 'Meta AI Keynote: Beyond LLMs', category: 'Lectures', venue: 'Open Air Theatre (OAT)', description: 'Turing awardee lecture on autonomous AI architectures.', isLive: false },
  { id: 'sch-9', day: 'Day 02', time: '08:30 PM', title: 'IDRL Night Drone Racing Grand Prix', category: 'Drone Show', venue: 'Hockey Ground Arena', description: 'FPV pilots racing 140 km/h neon drones around glowing obstacle gates.', isLive: false },

  { id: 'sch-10', day: 'Day 03', time: '10:30 AM', title: 'Techfest Ideathon Pitching Finals', category: 'Competitions', venue: 'Convocation Hall', description: 'Top 10 national startups pitching to VC panels for ₹2.5 Million funding.', isLive: false },
  { id: 'sch-11', day: 'Day 03', time: '02:00 PM', title: 'Robowars 60KG Supreme Championship Final', category: 'Robowars', venue: 'Main Gymkhana Arena', description: 'The ultimate battle for the Techfest 30th Edition Combat Trophy.', isLive: false },
  { id: 'sch-12', day: 'Day 03', time: '05:00 PM', title: 'Humanoid Sophia Interaction & Keynote', category: 'Lectures', venue: 'Open Air Theatre (OAT)', description: 'Live Q&A session with world-renowned humanoid robot Sophia.', isLive: false },
  { id: 'sch-13', day: 'Day 03', time: '07:30 PM', title: 'Technoholix Grand Finale Concert & Awards', category: 'Technoholix', venue: 'Gymkhana Main Stage', description: 'Closing concert, trophies distribution, and 30th Edition celebration.', isLive: false }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  { id: 'oat', name: 'Open Air Theatre (OAT)', code: 'OAT', x: 45, y: 55, description: 'Iconic 5,000 seat open stadium hosting flagship lectures, Technoholix concerts, and keynote dialogues.', eventsHosted: ['Technoholix Concerts', 'Yann LeCun Keynote', 'Sophia Humanoid QA'], zoneType: 'Auditorium' },
  { id: 'gymkhana', name: 'Gymkhana Grounds', code: 'GYM', x: 60, y: 40, description: 'Massive central sports grounds housing the steel bulletproof Robowars Combat Arena, Roboracers track, and exhibition domes.', eventsHosted: ['International Robowars', 'Roboracers Track', 'TechX Domes'], zoneType: 'Arena' },
  { id: 'convo', name: 'Convocation Hall', code: 'CONVO', x: 35, y: 45, description: 'Prestigious academic auditorium hosting inaugural ceremonies, Ideathon VC pitches, and ISRO Chairman keynotes.', eventsHosted: ['Inaugural Ceremony', 'ISRO Keynote', 'Ideathon Finals'], zoneType: 'Auditorium' },
  { id: 'lhc', name: 'Lecture Hall Complex (LHC)', code: 'LHC', x: 30, y: 65, description: 'Modern multi-tiered lecture halls (LH 101, LH 102) housing AI hackathons, workshops, and Techfest Olympiad.', eventsHosted: ['Voice Agent Hackathon', 'ROS 2 Workshop', 'Techfest Olympiad'], zoneType: 'Workshops' },
  { id: 'sac', name: 'Students Activity Centre (SAC)', code: 'SAC', x: 50, y: 30, description: 'Hub for Ozone interactive fun, gaming lounges, indoor robotics (Blix-a-thon), and central information desk.', eventsHosted: ['Ozone Gaming Zone', 'Blix-a-thon', 'Core Control Room'], zoneType: 'Food & Chill' },
  { id: 'hockey', name: 'Main Hockey Ground', code: 'HG', x: 75, y: 50, description: 'Expansive night arena for IDRL Drone Racing, international drone swarm shows, and food court.', eventsHosted: ['IDRL Drone Racing', '3D Drone Swarm Show', 'Food Village'], zoneType: 'Arena' }
];

export const TIMELINE_ARCHIVE = [
  { year: '1998', title: 'The Genesis', desc: 'Techfest is founded by IIT Bombay students as a pioneering regional technology convention with 2,000 attendees.' },
  { year: '2005', title: 'Going Pan-India', desc: 'Introduced Zonals across 10 major Indian cities and launched International Robowars.' },
  { year: '2012', title: 'Global Footprint', desc: 'Crossed 100,000+ footfall with delegates from 45 countries and talks by Nobel Laureates.' },
  { year: '2018', title: 'The Next Dimension', desc: 'Pioneered Asia\'s largest night drone race circuit (IDRL) and hosted Sophia the Humanoid.' },
  { year: '2026', title: '30th Edition: The Future Is An Event', desc: 'Celebrating 30 years of technological ambition, 180K+ footfall, 300+ events, and global innovation leadership.' }
];

export const SOCIAL_WALL_ITEMS = [
  { id: 's1', tag: '@techfest_iitb', platform: 'Instagram', caption: 'The clash of steel in the 60KG arena at Robowars! 🤖🔥 #Techfest30 #IITBombay', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800', likes: '12.4K' },
  { id: 's2', tag: 'Techfest Official', platform: 'YouTube', caption: 'Official Teaser | 30th Edition — "The Future Is An Event"', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', likes: '45.2K' },
  { id: 's3', tag: '@Techfest_IITB', platform: 'X', caption: 'Honored to welcome ISRO Chairman Dr. S. Somanath for Techfest 30 keynote address at Convocation Hall.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', likes: '8.9K' },
  { id: 's4', tag: 'Techfest IIT Bombay', platform: 'LinkedIn', caption: 'Techfest Ideathon awards ₹2.5 Million to groundbreaking climate-tech startups. Congratulations to the winners!', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800', likes: '15.1K' }
];

export const OFFICIAL_CONTACT = {
  address: "Techfest Office, Students' Activity Centre (SAC), IIT Bombay, Powai, Mumbai, Maharashtra 400076, India",
  email: "info@techfest.org",
  phone: "+91 22 2576 4045 / +91 9136 789 030",
  socials: {
    instagram: "https://instagram.com/techfest_iitb",
    youtube: "https://youtube.com/user/techfestiitbombay",
    x: "https://x.com/Techfest_IITB",
    linkedin: "https://linkedin.com/company/techfest-iit-bombay"
  }
};
