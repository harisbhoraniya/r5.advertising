export interface LugSizingRow {
  code: string;
  sqmm: string;
  stud: string;
  studHole?: string;
  barrelId?: string;
  palmWidth?: string;
  barrelLength?: string;
  totalLength?: string;
  extra?: string;
}

export interface LugSizingTable {
  title: string;
  subtitle?: string;
  headers: string[];
  rows: LugSizingRow[];
}

export interface LugProductDetail {
  id: string;
  num: number;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: {
    material: string;
    surfaceFinish: string;
    conductorRange: string;
    studRange: string;
    voltageRating: string;
    standards: string;
    barrelType: string;
    operatingTemp: string;
  };
  applications: string[];
  tables: LugSizingTable[];
}

export const lugsCatalogItems = [
  {
    id: 'copper-one-hole-standard',
    num: 1,
    title: 'Copper One-Hole Standard Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · STANDARD BARREL',
    desc: 'Standard copper cable lugs featuring a single mounting hole and crimping barrel for secure conductor termination in power distribution systems.',
    image: '/assets/lugx/copper_one_hole_standard.png',
    link: '/products/lugx/copper-one-hole-standard',
  },
  {
    id: 'copper-one-hole-long-barrel',
    num: 2,
    title: 'Copper One-Hole Long Barrel Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · LONG BARREL',
    desc: 'Extended crimping barrel and single-hole palm providing increased conductor insertion length and double crimping contact.',
    image: '/assets/lugx/copper_one_hole_long_barrel.png',
    link: '/products/lugx/copper-one-hole-long-barrel',
  },
  {
    id: 'copper-one-hole-heavy-duty',
    num: 3,
    title: 'Copper One-Hole Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · HEAVY DUTY',
    desc: 'Heavy-duty copper cable lugs featuring a reinforced palm, single mounting hole, and robust barrel construction for demanding terminations.',
    image: '/assets/lugx/copper_one_hole_heavy_duty.png',
    link: '/products/lugx/copper-one-hole-heavy-duty',
  },
  {
    id: 'copper-one-hole-bell-mouth',
    num: 4,
    title: 'Copper One-Hole Bell Mouth Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · BELL MOUTH ENTRY',
    desc: 'Flared bell-mouth barrel entrance facilitating easy conductor insertion, eliminating strand damage during flexible cable termination.',
    image: '/assets/lugx/copper_one_hole_bell_mouth.png',
    link: '/products/lugx/copper-one-hole-bell-mouth',
  },
  {
    id: 'copper-one-hole-narrow-palm',
    num: 5,
    title: 'Copper One-Hole Narrow Palm Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · NARROW PALM',
    desc: 'Narrow-width palm and single mounting hole engineered for compact terminal arrangements and space-restricted circuit breakers.',
    image: '/assets/lugx/copper_one_hole_narrow_palm.png',
    link: '/products/lugx/copper-one-hole-narrow-palm',
  },
  {
    id: 'copper-two-hole-heavy-duty',
    num: 6,
    title: 'Copper Two-Hole Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · HEAVY DUTY',
    desc: 'Reinforced palm with dual mounting holes providing secure anti-twist bolted connections and mechanical stability.',
    image: '/assets/lugx/copper_two_hole_heavy_duty.png',
    link: '/products/lugx/copper-two-hole-heavy-duty',
  },
  {
    id: 'copper-two-hole-long-barrel',
    num: 7,
    title: 'Copper Two-Hole Long Barrel Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · LONG BARREL',
    desc: 'Extended crimping barrel and dual mounting holes for secure conductor crimping and stable bolted electrical connections.',
    image: '/assets/lugx/copper_two_hole_long_barrel.png',
    link: '/products/lugx/copper-two-hole-long-barrel',
  },
  {
    id: 'copper-two-hole-long-barrel-heavy-duty',
    num: 8,
    title: 'Copper Two-Hole Long Barrel Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · LONG BARREL · HEAVY DUTY',
    desc: 'Extended barrel, heavy-duty reinforced palm, and dual-hole mounting engineered for the most demanding power cable terminations.',
    image: '/assets/lugx/copper_two_hole_long_barrel_heavy_duty.png',
    link: '/products/lugx/copper-two-hole-long-barrel-heavy-duty',
  },
  {
    id: 'copper-four-hole-transformer',
    num: 9,
    title: 'Copper Four-Hole Transformer Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'FOUR-HOLE · TRANSFORMER BUSHING',
    desc: 'Broad palm with four mounting holes and high-ampacity barrel designed for transformer terminals and high-current electrical assemblies.',
    image: '/assets/lugx/copper_four_hole_transformer.png',
    link: '/products/lugx/copper-four-hole-transformer',
  },
  {
    id: 'aluminium-one-hole-standard',
    num: 10,
    title: 'Aluminium One-Hole Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · ONE-HOLE STANDARD',
    desc: 'Single-hole mounting palm and conductor barrel designed for dependable termination of aluminium cables in power distribution.',
    image: '/assets/lugx/aluminium_one_hole_standard.png',
    link: '/products/lugx/aluminium-one-hole-standard',
  },
  {
    id: 'aluminium-two-hole-standard',
    num: 11,
    title: 'Aluminium Two-Hole Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · TWO-HOLE STANDARD',
    desc: 'Dual-hole mounting palm and crimping barrel providing secure bolted connections and anti-twist stability for aluminium conductors.',
    image: '/assets/lugx/aluminium_two_hole_standard.png',
    link: '/products/lugx/aluminium-two-hole-standard',
  },
  {
    id: 'aluminium-one-hole-long-barrel',
    num: 12,
    title: 'Aluminium One-Hole Long Barrel Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · LONG BARREL',
    desc: 'Extended crimping barrel and single-hole palm for increased conductor insertion depth and dependable aluminium cable termination.',
    image: '/assets/lugx/aluminium_one_hole_long_barrel.png',
    link: '/products/lugx/aluminium-one-hole-long-barrel',
  },
  {
    id: 'copper-ring-open-closed-soldering',
    num: 13,
    title: 'Copper Ring Terminals – Open & Closed Soldering Type',
    category: 'COPPER RING TERMINALS',
    badge: 'COPPER RING · OPEN & CLOSED SOLDERING',
    desc: 'Open or closed barrel configurations and circular mounting tongues designed for soldered or crimped conductor termination.',
    image: '/assets/lugx/copper_ring_soldering_type.png',
    link: '/products/lugx/copper-ring-open-closed-soldering',
  },
  {
    id: 'bimetallic-friction-welded',
    num: 14,
    title: 'Bi-Metallic Friction-Welded Terminals',
    category: 'BI-METALLIC TERMINALS',
    badge: 'BI-METALLIC · FRICTION WELDED',
    desc: 'Manufactured using solid friction-welding technology joining copper and aluminium sections to eliminate galvanic corrosion.',
    image: '/assets/lugx/bimetallic_friction_welded.png',
    link: '/products/lugx/bimetallic-friction-welded',
  },
  {
    id: 'bimetallic-copper-ring',
    num: 15,
    title: 'Bi-Metallic Copper Ring Terminals',
    category: 'BI-METALLIC TERMINALS',
    badge: 'BI-METALLIC · COPPER RING PALM',
    desc: 'Copper mounting tongue and aluminium conductor barrel engineered for secure bolted connections and aluminium cable termination.',
    image: '/assets/lugx/bimetallic_copper_ring.png',
    link: '/products/lugx/bimetallic-copper-ring',
  },
  {
    id: 'copper-crimping-pin',
    num: 16,
    title: 'Copper Crimping Pin Terminals – Non-Insulated & Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'PIN TERMINALS · BARE & INSULATED',
    desc: 'Solid pin-shaped contact and crimping barrel in bare and insulated configurations for terminal blocks and electrical interfaces.',
    image: '/assets/lugx/copper_crimping_pin.png',
    link: '/products/lugx/copper-crimping-pin',
  },
  {
    id: 'copper-crimping-ring',
    num: 17,
    title: 'Copper Crimping Ring Terminals – Non-Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'RING TERMINALS · NON-INSULATED',
    desc: 'Non-insulated copper ring terminals featuring a circular mounting tongue and crimping barrel for secure screw or bolt fastening.',
    image: '/assets/lugx/copper_crimping_ring.png',
    link: '/products/lugx/copper-crimping-ring',
  },
  {
    id: 'copper-crimping-fork',
    num: 18,
    title: 'Copper Crimping Fork Terminals – Insulated & Non-Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'FORK TERMINALS · BARE & INSULATED',
    desc: 'Open-ended mounting tongue and crimping barrel allowing fast screw-terminal connections without removing the fastener completely.',
    image: '/assets/lugx/copper_crimping_fork.png',
    link: '/products/lugx/copper-crimping-fork',
  },
  {
    id: 'copper-ring-tongue-fork',
    num: 19,
    title: 'Copper Crimping Ring Tongue Fork Terminals',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'RING TONGUE FORK · FLANGED & INSULATED',
    desc: 'Specialized ring-tongue fork configuration designed for vibration-resistant screw terminal connections in industrial control wiring.',
    image: '/assets/lugx/copper_ring_tongue_fork.png',
    link: '/products/lugx/copper-ring-tongue-fork',
  },
];

export const lugsProductsDetails: Record<string, LugProductDetail> = {
  'copper-one-hole-standard': {
    id: 'copper-one-hole-standard',
    num: 1,
    title: 'Copper One-Hole Standard Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · STANDARD BARREL',
    tagline: 'Standard copper cable lugs featuring a single mounting hole and crimping barrel for secure conductor termination in power distribution systems.',
    description: 'NAEPL Copper One-Hole Standard Cable Lugs are precision manufactured from high-conductivity electrolytic copper (ETP 99.9% pure) and electro-tinned to prevent atmospheric corrosion. Engineered with an optimal barrel length and internal inspection hole to ensure full cable insertion, they provide low electrical contact resistance and superior mechanical strength for switchgear, transformers, and distribution panels.',
    image: '/assets/lugx/copper_one_hole_standard.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '1.5 mm² to 1000 mm²',
      studRange: 'M4 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / IS 1897',
      barrelType: 'Standard Crimp Barrel with Inspection Hole',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CUL-1-01P5-M04",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "1.8",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CUL-1-01P5-M05",
                    "sqmm": "1.5",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "1.8",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CUL-1-01P5-M06",
                    "sqmm": "1.5",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "1.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CUL-1-02P5-M04",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "2.4",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CUL-1-02P5-M05",
                    "sqmm": "2.5",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "2.4",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CUL-1-02P5-M06",
                    "sqmm": "2.5",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "2.4",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-02P5-M08",
                    "sqmm": "2.5",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "2.4",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "26"
          },
          {
                    "code": "LX-CUL-1-0004-M04",
                    "sqmm": "4",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-0004-M05",
                    "sqmm": "4",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-0004-M06",
                    "sqmm": "4",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-0004-M08",
                    "sqmm": "4",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "3.1",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "24"
          },
          {
                    "code": "LX-CUL-1-0006-M04",
                    "sqmm": "6",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CUL-1-0006-M05",
                    "sqmm": "6",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CUL-1-0006-M06",
                    "sqmm": "6",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "24"
          },
          {
                    "code": "LX-CUL-1-0006-M08",
                    "sqmm": "6",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "3.8",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "27"
          },
          {
                    "code": "LX-CUL-1-0006-M10",
                    "sqmm": "6",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "3.8",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "32"
          },
          {
                    "code": "LX-CUL-1-0010-M05",
                    "sqmm": "10",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "barrelLength": "7",
                    "totalLength": "26.5"
          },
          {
                    "code": "LX-CUL-1-0010-M06",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "barrelLength": "7",
                    "totalLength": "26.5"
          },
          {
                    "code": "LX-CUL-1-0010-M08",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "27.5"
          },
          {
                    "code": "LX-CUL-1-0010-M10",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "4.5",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "32"
          },
          {
                    "code": "LX-CUL-1-0010-M12",
                    "sqmm": "10",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "4.5",
                    "palmWidth": "17",
                    "barrelLength": "13",
                    "totalLength": "39"
          },
          {
                    "code": "LX-CUL-1-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "16",
                    "totalLength": "64"
          },
          {
                    "code": "LX-CUL-1-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "14.8",
                    "palmWidth": "26",
                    "barrelLength": "20",
                    "totalLength": "68"
          },
          {
                    "code": "LX-CUL-1-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "73"
          },
          {
                    "code": "LX-CUL-1-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "16",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "73"
          },
          {
                    "code": "LX-CUL-1-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "18",
                    "palmWidth": "32",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "22",
                    "palmWidth": "38",
                    "barrelLength": "21",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-0300-M08",
                    "sqmm": "300",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "24",
                    "palmWidth": "42",
                    "barrelLength": "23",
                    "totalLength": "102"
          },
          {
                    "code": "LX-CUL-1-0400-M08",
                    "sqmm": "400",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-1-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "28",
                    "palmWidth": "49",
                    "barrelLength": "25",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-0006-M08",
                    "sqmm": "6",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "3.8",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "31.5"
          },
          {
                    "code": "LX-CUL-0010-M08",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "34"
          },
          {
                    "code": "LX-CUL-0010-M10",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "barrelLength": "10",
                    "totalLength": "40"
          },
          {
                    "code": "LX-CUL-0010-M12",
                    "sqmm": "10",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "4.5",
                    "palmWidth": "17",
                    "barrelLength": "12",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CUL-0016-M06",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CUL-0016-M08",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CUL-0016-M10",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "5.4",
                    "palmWidth": "15",
                    "barrelLength": "7",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CUL-0016-M12",
                    "sqmm": "16",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "5.4",
                    "palmWidth": "17",
                    "barrelLength": "7",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CUL-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "barrelLength": "12",
                    "totalLength": "41"
          },
          {
                    "code": "LX-CUL-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "6.8",
                    "palmWidth": "15",
                    "barrelLength": "12",
                    "totalLength": "41"
          },
          {
                    "code": "LX-CUL-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "6.8",
                    "palmWidth": "17",
                    "barrelLength": "12",
                    "totalLength": "43"
          },
          {
                    "code": "LX-CUL-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "14",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CUL-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "14",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CUL-0035-M12",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "14",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CUL-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "barrelLength": "16",
                    "totalLength": "59"
          },
          {
                    "code": "LX-CUL-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "barrelLength": "16",
                    "totalLength": "59"
          },
          {
                    "code": "LX-CUL-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "59"
          },
          {
                    "code": "LX-CUL-0050-M14",
                    "sqmm": "50",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "59"
          },
          {
                    "code": "LX-CUL-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "19",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "19",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "19",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "11.3",
                    "palmWidth": "22",
                    "barrelLength": "19",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-0070-M16",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "11.3",
                    "palmWidth": "22",
                    "barrelLength": "16.5",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "20",
                    "totalLength": "74"
          },
          {
                    "code": "LX-CUL-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "20",
                    "totalLength": "74"
          },
          {
                    "code": "LX-CUL-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "20",
                    "totalLength": "74"
          },
          {
                    "code": "LX-CUL-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "19",
                    "totalLength": "75"
          },
          {
                    "code": "LX-CUL-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "19",
                    "totalLength": "75"
          },
          {
                    "code": "LX-CUL-0095-M18",
                    "sqmm": "95",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "19",
                    "totalLength": "75"
          }
]
      }
    ]
  },
  'copper-one-hole-long-barrel': {
    id: 'copper-one-hole-long-barrel',
    num: 2,
    title: 'Copper One-Hole Long Barrel Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · LONG BARREL',
    tagline: 'Extended crimping barrel and single-hole palm providing increased conductor insertion length and double crimping contact.',
    description: 'NAEPL Long Barrel Copper Lugs feature an elongated crimp barrel designed to accommodate double or multiple crimp compressions. This delivers enhanced pull-out resistance, maximized electrical contact surface, and superior thermal cycling endurance across heavy-duty industrial and utility feeder cables.',
    image: '/assets/lugx/copper_one_hole_long_barrel.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '10 mm² to 1000 mm²',
      studRange: 'M5 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / IS 1897',
      barrelType: 'Extended Long Barrel (Multi-Crimp Compatible)',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CUL-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M18",
                    "sqmm": "120",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "24",
                    "totalLength": "86"
          },
          {
                    "code": "LX-CUL-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "23",
                    "totalLength": "95"
          },
          {
                    "code": "LX-CUL-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "112"
          },
          {
                    "code": "LX-CUL-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "117"
          },
          {
                    "code": "LX-CUL-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "117"
          },
          {
                    "code": "LX-CUL-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "117"
          },
          {
                    "code": "LX-CUL-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "117"
          },
          {
                    "code": "LX-CUL-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "barrelLength": "32",
                    "totalLength": "120"
          },
          {
                    "code": "LX-CUL-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "barrelLength": "34",
                    "totalLength": "134"
          },
          {
                    "code": "LX-CUL-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0500-M16",
                    "sqmm": "500",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0500-M18",
                    "sqmm": "500",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "28",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CUL-0630-M10",
                    "sqmm": "630",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0630-M12",
                    "sqmm": "630",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0630-M14",
                    "sqmm": "630",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0630-M16",
                    "sqmm": "630",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0630-M18",
                    "sqmm": "630",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "barrelLength": "30",
                    "totalLength": "158"
          },
          {
                    "code": "LX-CUL-0800-M16",
                    "sqmm": "800",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "barrelLength": "30",
                    "totalLength": "187"
          },
          {
                    "code": "LX-CUL-1000-M10",
                    "sqmm": "1000",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "barrelLength": "24",
                    "totalLength": "202"
          },
          {
                    "code": "LX-CUL-1000-M12",
                    "sqmm": "1000",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "barrelLength": "24",
                    "totalLength": "202"
          },
          {
                    "code": "LX-CUL-1000-M14",
                    "sqmm": "1000",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "barrelLength": "24",
                    "totalLength": "202"
          },
          {
                    "code": "LX-CUL-1000-M16",
                    "sqmm": "1000",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "barrelLength": "24",
                    "totalLength": "202"
          },
          {
                    "code": "LX-CUL-1000-M20",
                    "sqmm": "1000",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "barrelLength": "24",
                    "totalLength": "202"
          }
]
      }
    ]
  },
  'copper-one-hole-heavy-duty': {
    id: 'copper-one-hole-heavy-duty',
    num: 3,
    title: 'Copper One-Hole Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · HEAVY DUTY',
    tagline: 'Heavy-duty copper cable lugs featuring a reinforced palm, single mounting hole, and robust barrel construction for demanding terminations.',
    description: 'Designed for mission-critical power generation, offshore, and heavy industrial environments, NAEPL Heavy Duty Copper Cable Lugs incorporate reinforced palm thickness and heavy wall tube geometry. This design withstands severe short-circuit electromagnetic stresses, thermal shocks, and continuous vibration.',
    image: '/assets/lugx/copper_one_hole_heavy_duty.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Heavy-Duty Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (Heavy Duty Tin Plating)',
      conductorRange: '6 mm² to 1000 mm²',
      studRange: 'M5 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / DIN 46235',
      barrelType: 'Heavy Wall Seamless Copper Tube',
      operatingTemp: '-55°C to +160°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CUHV-0025-M06",
                    "sqmm": "25",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "6.8",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "68.5"
          },
          {
                    "code": "LX-CUHV-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "6.8",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "68.5"
          },
          {
                    "code": "LX-CUHV-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "6.8",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "68.5"
          },
          {
                    "code": "LX-CUHV-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "6.8",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "68.5"
          },
          {
                    "code": "LX-CUHV-0035-M06",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0035-M12",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0035-M14",
                    "sqmm": "35",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0035-M16",
                    "sqmm": "35",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "8.2",
                    "palmWidth": "19.5",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M06",
                    "sqmm": "50",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M14",
                    "sqmm": "50",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0050-M16",
                    "sqmm": "50",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "16",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CUHV-0070-M06",
                    "sqmm": "70",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0070-M16",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "11",
                    "palmWidth": "23",
                    "barrelLength": "16",
                    "totalLength": "81.5"
          },
          {
                    "code": "LX-CUHV-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M18",
                    "sqmm": "95",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0095-M20",
                    "sqmm": "95",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "13.5",
                    "palmWidth": "27",
                    "barrelLength": "16",
                    "totalLength": "90"
          },
          {
                    "code": "LX-CUHV-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M18",
                    "sqmm": "120",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "barrelLength": "16",
                    "totalLength": "98"
          },
          {
                    "code": "LX-CUHV-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "105"
          },
          {
                    "code": "LX-CUHV-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "18.5",
                    "palmWidth": "32.7",
                    "barrelLength": "19",
                    "totalLength": "113.5"
          },
          {
                    "code": "LX-CUHV-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CUHV-0300-M08",
                    "sqmm": "300",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "barrelLength": "22",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CUHV-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "barrelLength": "26",
                    "totalLength": "154"
          },
          {
                    "code": "LX-CUHV-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0500-M16",
                    "sqmm": "500",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0500-M18",
                    "sqmm": "500",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "barrelLength": "28",
                    "totalLength": "166"
          },
          {
                    "code": "LX-CUHV-0630-M10",
                    "sqmm": "630",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          },
          {
                    "code": "LX-CUHV-0630-M12",
                    "sqmm": "630",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          },
          {
                    "code": "LX-CUHV-0630-M14",
                    "sqmm": "630",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          },
          {
                    "code": "LX-CUHV-0630-M16",
                    "sqmm": "630",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          },
          {
                    "code": "LX-CUHV-0630-M18",
                    "sqmm": "630",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          },
          {
                    "code": "LX-CUHV-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "barrelLength": "33",
                    "totalLength": "188"
          }
]
      }
    ]
  },
  'copper-one-hole-bell-mouth': {
    id: 'copper-one-hole-bell-mouth',
    num: 4,
    title: 'Copper One-Hole Bell Mouth Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · BELL MOUTH ENTRY',
    tagline: 'Flared bell-mouth barrel entrance facilitating easy conductor insertion, eliminating strand damage during flexible cable termination.',
    description: 'NAEPL Bell Mouth Copper Lugs feature a smoothly contoured, flared entry funnel at the barrel base. This bell-mouth entry allows easy, rapid insertion of fine-stranded, flexible, or compacted cables (Class 5 & Class 6 conductors), eliminating strand splaying and preventing conductor shearing during crimping.',
    image: '/assets/lugx/copper_one_hole_bell_mouth.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '1.5 mm² to 1000 mm²',
      studRange: 'M4 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / IS 1897',
      barrelType: 'Flared Bell-Mouth Entry for Flexible Conductors',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CUL-1-BM-01P5-M04",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "1.8",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CUL-1-BM-01P5-M05",
                    "sqmm": "1.5",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "1.8",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CUL-1-BM-01P5-M06",
                    "sqmm": "1.5",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "1.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CUL-1-BM-02P5-M04",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "2.4",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CUL-1-BM-02P5-M05",
                    "sqmm": "2.5",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "2.4",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CUL-1-BM-02P5-M06",
                    "sqmm": "2.5",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "2.4",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-BM-02P5-M08",
                    "sqmm": "2.5",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "2.4",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "26"
          },
          {
                    "code": "LX-CUL-1-BM-0004-M04",
                    "sqmm": "4",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-BM-0004-M05",
                    "sqmm": "4",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-BM-0004-M06",
                    "sqmm": "4",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "3.1",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CUL-1-BM-0004-M08",
                    "sqmm": "4",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "3.1",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "24"
          },
          {
                    "code": "LX-CUL-1-BM-0006-M04",
                    "sqmm": "6",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CUL-1-BM-0006-M05",
                    "sqmm": "6",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CUL-1-BM-0006-M06",
                    "sqmm": "6",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "3.8",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "24"
          },
          {
                    "code": "LX-CUL-1-BM-0006-M08",
                    "sqmm": "6",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "3.8",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "27"
          },
          {
                    "code": "LX-CUL-1-BM-0006-M10",
                    "sqmm": "6",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "3.8",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "32"
          },
          {
                    "code": "LX-CUL-1-BM-0010-M05",
                    "sqmm": "10",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "barrelLength": "7",
                    "totalLength": "26.5"
          },
          {
                    "code": "LX-CUL-1-BM-0010-M06",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "barrelLength": "7",
                    "totalLength": "26.5"
          },
          {
                    "code": "LX-CUL-1-BM-0010-M08",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "27.5"
          },
          {
                    "code": "LX-CUL-1-BM-0010-M10",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "4.5",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "32"
          },
          {
                    "code": "LX-CUL-1-BM-0010-M12",
                    "sqmm": "10",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "4.5",
                    "palmWidth": "17",
                    "barrelLength": "13",
                    "totalLength": "39"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M05",
                    "sqmm": "16",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M06",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M08",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M10",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "5.4",
                    "palmWidth": "15",
                    "barrelLength": "12",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M12",
                    "sqmm": "16",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "5.4",
                    "palmWidth": "17",
                    "barrelLength": "13",
                    "totalLength": "39"
          },
          {
                    "code": "LX-CUL-1-BM-0016-M16",
                    "sqmm": "16",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "5.4",
                    "palmWidth": "21",
                    "barrelLength": "13",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0025-M06",
                    "sqmm": "25",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "barrelLength": "7",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CUL-1-BM-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "barrelLength": "7",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CUL-1-BM-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "6.8",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "36.5"
          },
          {
                    "code": "LX-CUL-1-BM-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "6.8",
                    "palmWidth": "17",
                    "barrelLength": "12",
                    "totalLength": "40"
          },
          {
                    "code": "LX-CUL-1-BM-0025-M16",
                    "sqmm": "25",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "6.8",
                    "palmWidth": "21",
                    "barrelLength": "12",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M06",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "9",
                    "totalLength": "36"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "9",
                    "totalLength": "36"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "barrelLength": "9",
                    "totalLength": "37"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M12",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "8.2",
                    "palmWidth": "18",
                    "barrelLength": "12",
                    "totalLength": "41"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M14",
                    "sqmm": "35",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "8.2",
                    "palmWidth": "20",
                    "barrelLength": "12",
                    "totalLength": "41"
          },
          {
                    "code": "LX-CUL-1-BM-0035-M16",
                    "sqmm": "35",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "8.2",
                    "palmWidth": "22",
                    "barrelLength": "18",
                    "totalLength": "50"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M06",
                    "sqmm": "50",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "barrelLength": "11",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "barrelLength": "11",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "barrelLength": "11",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "barrelLength": "12",
                    "totalLength": "45"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M16",
                    "sqmm": "50",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "9.5",
                    "palmWidth": "22",
                    "barrelLength": "15",
                    "totalLength": "52"
          },
          {
                    "code": "LX-CUL-1-BM-0050-M20",
                    "sqmm": "50",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "9.5",
                    "palmWidth": "26",
                    "barrelLength": "18",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M06",
                    "sqmm": "70",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "11",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "11",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "11",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "barrelLength": "11",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "11.3",
                    "palmWidth": "22",
                    "barrelLength": "15",
                    "totalLength": "55"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M16",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "11.3",
                    "palmWidth": "26",
                    "barrelLength": "16",
                    "totalLength": "56"
          },
          {
                    "code": "LX-CUL-1-BM-0070-M20",
                    "sqmm": "70",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "11.3",
                    "palmWidth": "28",
                    "barrelLength": "18",
                    "totalLength": "63"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M06",
                    "sqmm": "95",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "13",
                    "totalLength": "53"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "13",
                    "totalLength": "53"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "13",
                    "totalLength": "53"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "13",
                    "totalLength": "53"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "15",
                    "totalLength": "55"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "barrelLength": "16",
                    "totalLength": "58"
          },
          {
                    "code": "LX-CUL-1-BM-0095-M20",
                    "sqmm": "95",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "13.5",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "63"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M6",
                    "sqmm": "120",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M8",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "14",
                    "totalLength": "60"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "16",
                    "totalLength": "64"
          },
          {
                    "code": "LX-CUL-1-BM-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "barrelLength": "20",
                    "totalLength": "68"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M06",
                    "sqmm": "150",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "70"
          },
          {
                    "code": "LX-CUL-1-BM-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "barrelLength": "16",
                    "totalLength": "73"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M06",
                    "sqmm": "185",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "barrelLength": "19",
                    "totalLength": "80"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M06",
                    "sqmm": "240",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          },
          {
                    "code": "LX-CUL-1-BM-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "barrelLength": "20",
                    "totalLength": "94"
          }
]
      }
    ]
  },
  'copper-one-hole-narrow-palm': {
    id: 'copper-one-hole-narrow-palm',
    num: 5,
    title: 'Copper One-Hole Narrow Palm Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'ONE-HOLE · NARROW PALM',
    tagline: 'Narrow-width palm and single mounting hole engineered for compact terminal arrangements and space-restricted circuit breakers.',
    description: 'Designed specifically for molded-case circuit breakers (MCCB), miniature switchgear, and compact terminal blocks where standard palm widths cannot fit side-by-side. NAEPL Narrow Palm Lugs allow high-ampacity cable connections in tight spaces while maintaining standard electrical clearances.',
    image: '/assets/lugx/copper_one_hole_narrow_palm.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '35 mm² to 300 mm²',
      studRange: 'M6 to M12',
      voltageRating: 'Rated up to 11 kV',
      standards: 'IEC 61238-1 / BS 4579 / DIN 46235',
      barrelType: 'Slim Palm Compact Design with Inspection Hole',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CUL-1-NP-0035-M06",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "8.2",
                    "palmWidth": "15",
                    "barrelLength": "21",
                    "totalLength": "41"
          },
          {
                    "code": "LX-CUL-1-NP-0050-M06",
                    "sqmm": "50",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "9.5",
                    "palmWidth": "15",
                    "barrelLength": "22",
                    "totalLength": "43"
          },
          {
                    "code": "LX-CUL-1-NP-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "9.5",
                    "palmWidth": "15",
                    "barrelLength": "22",
                    "totalLength": "46"
          },
          {
                    "code": "LX-CUL-1-NP-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "9.5",
                    "palmWidth": "19",
                    "barrelLength": "22",
                    "totalLength": "49"
          },
          {
                    "code": "LX-CUL-1-NP-0070-M06",
                    "sqmm": "70",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "11.2",
                    "palmWidth": "17",
                    "barrelLength": "24",
                    "totalLength": "45"
          },
          {
                    "code": "LX-CUL-1-NP-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "11.2",
                    "palmWidth": "17",
                    "barrelLength": "24",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CUL-1-NP-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "11.2",
                    "palmWidth": "19",
                    "barrelLength": "24",
                    "totalLength": "51"
          },
          {
                    "code": "LX-CUL-1-NP-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "13.4",
                    "palmWidth": "19",
                    "barrelLength": "27",
                    "totalLength": "51"
          },
          {
                    "code": "LX-CUL-1-NP-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "13.4",
                    "palmWidth": "19",
                    "barrelLength": "27",
                    "totalLength": "55"
          },
          {
                    "code": "LX-CUL-1-NP-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "15.6",
                    "palmWidth": "19",
                    "barrelLength": "30",
                    "totalLength": "61"
          },
          {
                    "code": "LX-CUL-1-NP-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "15.6",
                    "palmWidth": "19",
                    "barrelLength": "30",
                    "totalLength": "61"
          },
          {
                    "code": "LX-CUL-1-NP-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "16.7",
                    "palmWidth": "19",
                    "barrelLength": "30",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-1-NP-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "16.7",
                    "palmWidth": "19",
                    "barrelLength": "30",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CUL-1-NP-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "18.4",
                    "palmWidth": "31",
                    "barrelLength": "38",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-1-NP-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "21.2",
                    "palmWidth": "31",
                    "barrelLength": "38",
                    "totalLength": "82"
          },
          {
                    "code": "LX-CUL-1-NP-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "23.5",
                    "palmWidth": "42",
                    "barrelLength": "42",
                    "totalLength": "87"
          },
          {
                    "code": "LX-CU2-HV-0025-M06",
                    "sqmm": "25",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "44.5",
                    "palmWidth": "6.8",
                    "barrelLength": "16",
                    "totalLength": "123"
          },
          {
                    "code": "LX-CU2-HV-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "6.8",
                    "barrelLength": "16",
                    "totalLength": "123"
          },
          {
                    "code": "LX-CU2-HV-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44.5",
                    "palmWidth": "6.8",
                    "barrelLength": "16",
                    "totalLength": "123"
          },
          {
                    "code": "LX-CU2-HV-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44.5",
                    "palmWidth": "6.8",
                    "barrelLength": "18",
                    "totalLength": "123"
          },
          {
                    "code": "LX-CU2-HV-0035-M06",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0035-M12",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0035-M14",
                    "sqmm": "35",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0035-M16",
                    "sqmm": "35",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "44.5",
                    "palmWidth": "8.2",
                    "barrelLength": "18",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M06",
                    "sqmm": "50",
                    "stud": "M6",
                    "studHole": "6.8",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M14",
                    "sqmm": "50",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0050-M16",
                    "sqmm": "50",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "44.5",
                    "palmWidth": "9.5",
                    "barrelLength": "20",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU2-HV-0070-M06",
                    "sqmm": "70",
                    "stud": "M6",
                    "studHole": "6.5",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0070-M16",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "44.5",
                    "palmWidth": "11",
                    "barrelLength": "23",
                    "totalLength": "126"
          },
          {
                    "code": "LX-CU2-HV-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0095-M18",
                    "sqmm": "95",
                    "stud": "M18",
                    "studHole": "19",
                    "barrelId": "44.5",
                    "palmWidth": "13.5",
                    "barrelLength": "27",
                    "totalLength": "138.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "barrelId": "44.5",
                    "palmWidth": "15",
                    "barrelLength": "29",
                    "totalLength": "144.5"
          }
]
      }
    ]
  },
  'copper-two-hole-heavy-duty': {
    id: 'copper-two-hole-heavy-duty',
    num: 6,
    title: 'Copper Two-Hole Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · HEAVY DUTY',
    tagline: 'Reinforced palm with dual mounting holes providing secure anti-twist bolted connections and mechanical stability.',
    description: 'NAEPL Two-Hole Heavy Duty Lugs feature an extended palm with two fixing stud holes at standardized industry pitch. This dual-bolt arrangement eliminates lug rotation during bolt torquing and prevents loosening caused by operational vibration in busbars, transformers, and switchboards.',
    image: '/assets/lugx/copper_two_hole_heavy_duty.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Heavy-Duty Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '16 mm² to 1000 mm²',
      studRange: 'M6 to M16 (Standard Spacing)',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / DIN 46235',
      barrelType: 'Two-Hole Anti-Rotation Heavy Palm',
      operatingTemp: '-55°C to +160°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Hole Spacing (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CU2-HV-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M18",
                    "sqmm": "120",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "29",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "32",
                    "totalLength": "144.5"
          },
          {
                    "code": "LX-CU2-HV-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "156"
          },
          {
                    "code": "LX-CU2-HV-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "160"
          },
          {
                    "code": "LX-CU2-HV-0300-M08",
                    "sqmm": "300",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "45",
                    "totalLength": "175"
          },
          {
                    "code": "LX-CU2-HV-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "27",
                    "palmWidth": "53",
                    "totalLength": "182.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M16",
                    "sqmm": "500",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M18",
                    "sqmm": "500",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "30.3",
                    "palmWidth": "57",
                    "totalLength": "194.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M10",
                    "sqmm": "630",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M12",
                    "sqmm": "630",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M14",
                    "sqmm": "630",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M16",
                    "sqmm": "630",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M18",
                    "sqmm": "630",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          },
          {
                    "code": "LX-CU2-HV-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "33.4",
                    "palmWidth": "61",
                    "totalLength": "206.5"
          }
]
      }
    ]
  },
  'copper-two-hole-long-barrel': {
    id: 'copper-two-hole-long-barrel',
    num: 7,
    title: 'Copper Two-Hole Long Barrel Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · LONG BARREL',
    tagline: 'Extended crimping barrel and dual mounting holes for secure conductor crimping and stable bolted electrical connections.',
    description: 'Combining an elongated crimp barrel for double crimping with a dual-hole mounting palm, NAEPL Two-Hole Long Barrel Lugs offer superior conductor retention and maximum current-carrying surface. Ideal for utility feeder lines and heavy industrial electrical distribution.',
    image: '/assets/lugx/copper_two_hole_long_barrel.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '6 mm² to 1000 mm²',
      studRange: 'M6 to M16 (Standard Spacing)',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / IS 1897',
      barrelType: 'Extended Long Barrel with Dual-Hole Palm',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Hole Spacing (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CU2-LB-0006-M06",
                    "sqmm": "6",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "3.8",
                    "palmWidth": "12",
                    "totalLength": "76"
          },
          {
                    "code": "LX-CU2-LB-0006-M08",
                    "sqmm": "6",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "3.8",
                    "palmWidth": "12",
                    "totalLength": "76"
          },
          {
                    "code": "LX-CU2-LB-0010-M06",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "totalLength": "78.5"
          },
          {
                    "code": "LX-CU2-LB-0010-M08",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "12",
                    "totalLength": "78.5"
          },
          {
                    "code": "LX-CU2-LB-0010-M10",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "15",
                    "totalLength": "84.5"
          },
          {
                    "code": "LX-CU2-LB-0010-M12",
                    "sqmm": "10",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "17",
                    "totalLength": "86.5"
          },
          {
                    "code": "LX-CU2-LB-0016-M06",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CU2-LB-0016-M08",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CU2-LB-0016-M10",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "15",
                    "totalLength": "79.5"
          },
          {
                    "code": "LX-CU2-LB-0016-M12",
                    "sqmm": "16",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "17",
                    "totalLength": "85.5"
          },
          {
                    "code": "LX-CU2-LB-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "totalLength": "85.5"
          },
          {
                    "code": "LX-CU2-LB-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "6.8",
                    "palmWidth": "15",
                    "totalLength": "85.5"
          },
          {
                    "code": "LX-CU2-LB-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "6.8",
                    "palmWidth": "17",
                    "totalLength": "85.5"
          },
          {
                    "code": "LX-CU2-LB-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "92.5"
          },
          {
                    "code": "LX-CU2-LB-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "92.5"
          },
          {
                    "code": "LX-CU2-LB-0035-M12",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "92.5"
          },
          {
                    "code": "LX-CU2-LB-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "103.5"
          },
          {
                    "code": "LX-CU2-LB-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "103.5"
          },
          {
                    "code": "LX-CU2-LB-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "totalLength": "103.5"
          },
          {
                    "code": "LX-CU2-LB-0050-M14",
                    "sqmm": "50",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "20",
                    "totalLength": "103.5"
          },
          {
                    "code": "LX-CU2-LB-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "110.5"
          },
          {
                    "code": "LX-CU2-LB-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "110.5"
          },
          {
                    "code": "LX-CU2-LB-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "110.5"
          },
          {
                    "code": "LX-CU2-LB-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "22",
                    "totalLength": "110.5"
          },
          {
                    "code": "LX-CU2-LB-0070-M16",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "110.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "118.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "118.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "118.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CU2-LB-0095-M18",
                    "sqmm": "95",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "119.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M18",
                    "sqmm": "120",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0120-M20",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "15",
                    "palmWidth": "28",
                    "totalLength": "126.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "130.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "139.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "156.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "164.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M16",
                    "sqmm": "500",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M18",
                    "sqmm": "500",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "178.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M10",
                    "sqmm": "630",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M12",
                    "sqmm": "630",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M14",
                    "sqmm": "630",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M16",
                    "sqmm": "630",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M18",
                    "sqmm": "630",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "35",
                    "palmWidth": "63.8",
                    "totalLength": "202.5"
          },
          {
                    "code": "LX-CU2-LB-0800-M10",
                    "sqmm": "800",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "totalLength": "208"
          },
          {
                    "code": "LX-CU2-LB-0800-M12",
                    "sqmm": "800",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "totalLength": "208"
          },
          {
                    "code": "LX-CU2-LB-0800-M14",
                    "sqmm": "800",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "totalLength": "208"
          },
          {
                    "code": "LX-CU2-LB-0800-M16",
                    "sqmm": "800",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "totalLength": "212"
          },
          {
                    "code": "LX-CU2-LB-0800-M20",
                    "sqmm": "800",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "totalLength": "212"
          },
          {
                    "code": "LX-CU2-LB-1000-M10",
                    "sqmm": "1000",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "totalLength": "238"
          },
          {
                    "code": "LX-CU2-LB-1000-M12",
                    "sqmm": "1000",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "totalLength": "238"
          },
          {
                    "code": "LX-CU2-LB-1000-M14",
                    "sqmm": "1000",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "totalLength": "238"
          },
          {
                    "code": "LX-CU2-LB-1000-M16",
                    "sqmm": "1000",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "totalLength": "242"
          },
          {
                    "code": "LX-CU2-LB-1000-M20",
                    "sqmm": "1000",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "44",
                    "palmWidth": "79",
                    "totalLength": "242"
          }
]
      }
    ]
  },
  'copper-two-hole-long-barrel-heavy-duty': {
    id: 'copper-two-hole-long-barrel-heavy-duty',
    num: 8,
    title: 'Copper Two-Hole Long Barrel Heavy Duty Cable Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'TWO-HOLE · LONG BARREL · HEAVY DUTY',
    tagline: 'Extended barrel, heavy-duty reinforced palm, and dual-hole mounting engineered for the most demanding power cable terminations.',
    description: 'The premier heavy-duty copper lug in the NAEPL range. Built with extra-thick seamless copper tubing, an extended multi-crimp barrel, and a dual-stud anti-rotational palm to endure extreme fault currents, harsh outdoor conditions, and dynamic mechanical vibration.',
    image: '/assets/lugx/copper_two_hole_long_barrel_heavy_duty.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Heavy-Duty Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (Heavy Duty Tin Plating)',
      conductorRange: '10 mm² to 1000 mm²',
      studRange: 'M5 to M16',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / DIN 46235',
      barrelType: 'Heavy Wall Long Barrel with Dual Fixing Holes',
      operatingTemp: '-55°C to +160°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Hole Spacing (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CU2-LHV-0010-M05",
                    "sqmm": "10",
                    "stud": "M5",
                    "studHole": "5.5",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "totalLength": "83"
          },
          {
                    "code": "LX-CU2-LHV-0010-M06",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "4.5",
                    "palmWidth": "11",
                    "totalLength": "83"
          },
          {
                    "code": "LX-CU2-LHV-0016-M05",
                    "sqmm": "16",
                    "stud": "M5",
                    "studHole": "5.5",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "totalLength": "93"
          },
          {
                    "code": "LX-CU2-LHV-0016-M06",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "5.4",
                    "palmWidth": "12",
                    "totalLength": "93"
          },
          {
                    "code": "LX-CU2-LHV-0025-M06",
                    "sqmm": "25",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "totalLength": "117.2"
          },
          {
                    "code": "LX-CU2-LHV-0025-M08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "6.8",
                    "palmWidth": "13",
                    "totalLength": "117.2"
          },
          {
                    "code": "LX-CU2-LHV-0035-M06",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "115"
          },
          {
                    "code": "LX-CU2-LHV-0035-M08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "115"
          },
          {
                    "code": "LX-CU2-LHV-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "8.2",
                    "palmWidth": "16",
                    "totalLength": "115"
          },
          {
                    "code": "LX-CU2-LHV-0050-M06",
                    "sqmm": "50",
                    "stud": "M6",
                    "studHole": "6.5",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "117.5"
          },
          {
                    "code": "LX-CU2-LHV-0050-M08",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "117.5"
          },
          {
                    "code": "LX-CU2-LHV-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "117.5"
          },
          {
                    "code": "LX-CU2-LHV-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "9.5",
                    "palmWidth": "18",
                    "totalLength": "117.5"
          },
          {
                    "code": "LX-CU2-LHV-0070-M08",
                    "sqmm": "70",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "121.6"
          },
          {
                    "code": "LX-CU2-LHV-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "121.6"
          },
          {
                    "code": "LX-CU2-LHV-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "121.6"
          },
          {
                    "code": "LX-CU2-LHV-0070-M14",
                    "sqmm": "70",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "11.3",
                    "palmWidth": "21",
                    "totalLength": "121.6"
          },
          {
                    "code": "LX-CU2-LHV-0095-M08",
                    "sqmm": "95",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "132.5"
          },
          {
                    "code": "LX-CU2-LHV-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "132.5"
          },
          {
                    "code": "LX-CU2-LHV-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "132.5"
          },
          {
                    "code": "LX-CU2-LHV-0095-M14",
                    "sqmm": "95",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "132.5"
          },
          {
                    "code": "LX-CU2-LHV-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "13.5",
                    "palmWidth": "25",
                    "totalLength": "132.5"
          },
          {
                    "code": "LX-CU2-LHV-0120-M08",
                    "sqmm": "120",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "14.2",
                    "palmWidth": "25.5",
                    "totalLength": "134.4"
          },
          {
                    "code": "LX-CU2-LHV-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "14.2",
                    "palmWidth": "25.5",
                    "totalLength": "134.4"
          },
          {
                    "code": "LX-CU2-LHV-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "14.2",
                    "palmWidth": "25.5",
                    "totalLength": "134.4"
          },
          {
                    "code": "LX-CU2-LHV-0120-M14",
                    "sqmm": "120",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "14.2",
                    "palmWidth": "25.5",
                    "totalLength": "134.4"
          },
          {
                    "code": "LX-CU2-LHV-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "14.2",
                    "palmWidth": "25.5",
                    "totalLength": "134.4"
          },
          {
                    "code": "LX-CU2-LHV-0150-M08",
                    "sqmm": "150",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M14",
                    "sqmm": "150",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M18",
                    "sqmm": "150",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0150-M20",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "16.5",
                    "palmWidth": "30",
                    "totalLength": "141"
          },
          {
                    "code": "LX-CU2-LHV-0185-M08",
                    "sqmm": "185",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M14",
                    "sqmm": "185",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M18",
                    "sqmm": "185",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0185-M20",
                    "sqmm": "185",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "18.5",
                    "palmWidth": "34",
                    "totalLength": "145"
          },
          {
                    "code": "LX-CU2-LHV-0240-M08",
                    "sqmm": "240",
                    "stud": "M8",
                    "studHole": "8.4",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M10",
                    "sqmm": "240",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M14",
                    "sqmm": "240",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M18",
                    "sqmm": "240",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "21",
                    "palmWidth": "38",
                    "totalLength": "159.7"
          },
          {
                    "code": "LX-CU2-LHV-0300-M10",
                    "sqmm": "300",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0300-M12",
                    "sqmm": "300",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0300-M14",
                    "sqmm": "300",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0300-M18",
                    "sqmm": "300",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "23.5",
                    "palmWidth": "43",
                    "totalLength": "181.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M14",
                    "sqmm": "400",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M16",
                    "sqmm": "400",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M18",
                    "sqmm": "400",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "28.5",
                    "palmWidth": "52.5",
                    "totalLength": "185.5"
          },
          {
                    "code": "LX-CU2-LHV-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          },
          {
                    "code": "LX-CU2-LHV-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          },
          {
                    "code": "LX-CU2-LHV-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          },
          {
                    "code": "LX-CU2-LHV-0500-M16",
                    "sqmm": "500",
                    "stud": "M16",
                    "studHole": "17",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          },
          {
                    "code": "LX-CU2-LHV-0500-M18",
                    "sqmm": "500",
                    "stud": "M18",
                    "studHole": "19",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          },
          {
                    "code": "LX-CU2-LHV-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "21",
                    "extra": "44.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "totalLength": "195"
          }
]
      }
    ]
  },
  'copper-four-hole-transformer': {
    id: 'copper-four-hole-transformer',
    num: 9,
    title: 'Copper Four-Hole Transformer Lugs',
    category: 'COPPER CABLE LUGS',
    badge: 'FOUR-HOLE · TRANSFORMER BUSHING',
    tagline: 'Broad palm with four mounting holes and high-ampacity barrel designed for transformer terminals and high-current electrical assemblies.',
    description: 'NAEPL Four-Hole Transformer Lugs feature an extra-wide rectangular palm with a 4-hole mounting grid specifically engineered to bolt onto power transformer LV/HV terminal flags and high-current copper busbars. Delivers high contact pressure and prevents hot spots in heavy industrial loads.',
    image: '/assets/lugx/copper_four_hole_transformer.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Heavy-Duty Electrolytic Copper (ETP 99.9% Pure)',
      surfaceFinish: 'Electro-Tinned (Heavy Duty Tin Plating)',
      conductorRange: '400 mm² to 1000 mm²',
      studRange: 'M10 to M20 (4-Hole Array)',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / BS 4579 / DIN 46235',
      barrelType: 'Large Bore Seamless Tube with 4-Hole Flag Palm',
      operatingTemp: '-55°C to +160°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CU4-0400-M10",
                    "sqmm": "400",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "28.5",
                    "palmWidth": "52",
                    "barrelLength": "35",
                    "totalLength": "118"
          },
          {
                    "code": "LX-CU4-0400-M12",
                    "sqmm": "400",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "28.5",
                    "palmWidth": "52",
                    "barrelLength": "35",
                    "totalLength": "118"
          },
          {
                    "code": "LX-CU4-0500-M10",
                    "sqmm": "500",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "35",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU4-0500-M12",
                    "sqmm": "500",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "35",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU4-0500-M14",
                    "sqmm": "500",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "30",
                    "palmWidth": "56",
                    "barrelLength": "35",
                    "totalLength": "124"
          },
          {
                    "code": "LX-CU4-0630-M10",
                    "sqmm": "630",
                    "stud": "M10",
                    "studHole": "10.5",
                    "barrelId": "35",
                    "palmWidth": "65",
                    "barrelLength": "35",
                    "totalLength": "146"
          },
          {
                    "code": "LX-CU4-0630-M12",
                    "sqmm": "630",
                    "stud": "M12",
                    "studHole": "13",
                    "barrelId": "35",
                    "palmWidth": "65",
                    "barrelLength": "35",
                    "totalLength": "146"
          },
          {
                    "code": "LX-CU4-0630-M14",
                    "sqmm": "630",
                    "stud": "M14",
                    "studHole": "14.5",
                    "barrelId": "35",
                    "palmWidth": "65",
                    "barrelLength": "35",
                    "totalLength": "146"
          },
          {
                    "code": "LX-CU4-0630-M16",
                    "sqmm": "630",
                    "stud": "M16",
                    "studHole": "17",
                    "barrelId": "35",
                    "palmWidth": "65",
                    "barrelLength": "35",
                    "totalLength": "146"
          },
          {
                    "code": "LX-CU4-0800-M20",
                    "sqmm": "800",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "39",
                    "palmWidth": "72",
                    "barrelLength": "35",
                    "totalLength": "170"
          },
          {
                    "code": "LX-CU4-1000-M20",
                    "sqmm": "1000",
                    "stud": "M20",
                    "studHole": "21",
                    "barrelId": "43",
                    "palmWidth": "78.5",
                    "barrelLength": "35",
                    "totalLength": "200"
          }
]
      }
    ]
  },
  'aluminium-one-hole-standard': {
    id: 'aluminium-one-hole-standard',
    num: 10,
    title: 'Aluminium One-Hole Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · ONE-HOLE STANDARD',
    tagline: 'Single-hole mounting palm and conductor barrel designed for dependable termination of aluminium cables in power distribution.',
    description: 'Manufactured from high-purity electrical conductor (EC Grade) aluminium (99.5% pure). Pre-filled with neutral oxide-inhibiting joint compound and capped at the barrel entrance to prevent oxidation of aluminium conductor strands upon crimping.',
    image: '/assets/lugx/aluminium_one_hole_standard.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrical Conductor (EC Grade) Aluminium 99.5%',
      surfaceFinish: 'Natural / Chemically Cleaned with Joint Compound',
      conductorRange: '2.5 mm² to 1000 mm²',
      studRange: 'M3 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / IS 5082 / DIN 46329',
      barrelType: 'Capped Barrel Pre-Filled with Oxide Inhibitor',
      operatingTemp: '-40°C to +130°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Barrel Mouth C (mm)","Palm Width D (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-ALT1-02P5-M03",
                    "sqmm": "2.5",
                    "stud": "M03",
                    "studHole": "3.2",
                    "barrelId": "2",
                    "extra": "5.5",
                    "palmWidth": "7",
                    "totalLength": "18"
          },
          {
                    "code": "LX-ALT1-02P5-M35",
                    "sqmm": "2.5",
                    "stud": "M35",
                    "studHole": "3.7",
                    "barrelId": "2.6",
                    "extra": "5.5",
                    "palmWidth": "7",
                    "totalLength": "18"
          },
          {
                    "code": "LX-ALT1-0004-M04",
                    "sqmm": "4",
                    "stud": "M04",
                    "studHole": "4.2",
                    "barrelId": "2.9",
                    "extra": "5.5",
                    "palmWidth": "7",
                    "totalLength": "18"
          },
          {
                    "code": "LX-ALT1-0004-M05",
                    "sqmm": "4",
                    "stud": "M05",
                    "studHole": "5.2",
                    "barrelId": "2.9",
                    "extra": "5.5",
                    "palmWidth": "9",
                    "totalLength": "24"
          },
          {
                    "code": "LX-ALT1-0006-M05",
                    "sqmm": "6",
                    "stud": "M05",
                    "studHole": "5.2",
                    "barrelId": "3.5",
                    "extra": "5.5",
                    "palmWidth": "8",
                    "totalLength": "24"
          },
          {
                    "code": "LX-ALT1-0006-M06",
                    "sqmm": "6",
                    "stud": "M06",
                    "studHole": "6.4",
                    "barrelId": "3.5",
                    "extra": "5.5",
                    "palmWidth": "11",
                    "totalLength": "24"
          },
          {
                    "code": "LX-ALT1-0010-M06",
                    "sqmm": "10",
                    "stud": "M06",
                    "studHole": "6.4",
                    "barrelId": "4.4",
                    "extra": "7.4",
                    "palmWidth": "11",
                    "totalLength": "30"
          },
          {
                    "code": "LX-ALT1-0010-M08",
                    "sqmm": "10",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "4.4",
                    "extra": "7.4",
                    "palmWidth": "13",
                    "totalLength": "30"
          },
          {
                    "code": "LX-ALT1-0016-M06",
                    "sqmm": "16",
                    "stud": "M06",
                    "studHole": "6.4",
                    "barrelId": "5.4",
                    "extra": "8.3",
                    "palmWidth": "11",
                    "totalLength": "37"
          },
          {
                    "code": "LX-ALT1-0016-M08",
                    "sqmm": "16",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "5.4",
                    "extra": "8.3",
                    "palmWidth": "14",
                    "totalLength": "37"
          },
          {
                    "code": "LX-ALT1-0016-M10",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "5.4",
                    "extra": "8.3",
                    "palmWidth": "15",
                    "totalLength": "37"
          },
          {
                    "code": "LX-ALT1-0025-M06",
                    "sqmm": "25",
                    "stud": "M06",
                    "studHole": "6.4",
                    "barrelId": "7",
                    "extra": "9.7",
                    "palmWidth": "14",
                    "totalLength": "44"
          },
          {
                    "code": "LX-ALT1-0025-M08",
                    "sqmm": "25",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "7",
                    "extra": "9.7",
                    "palmWidth": "14",
                    "totalLength": "44"
          },
          {
                    "code": "LX-ALT1-0025-M10",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "7",
                    "extra": "9.7",
                    "palmWidth": "17",
                    "totalLength": "44"
          },
          {
                    "code": "LX-ALT1-0025-M12",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "7",
                    "extra": "9.7",
                    "palmWidth": "18",
                    "totalLength": "44"
          },
          {
                    "code": "LX-ALT1-0035-M06",
                    "sqmm": "35",
                    "stud": "M06",
                    "studHole": "6.4",
                    "barrelId": "8",
                    "extra": "10.8",
                    "palmWidth": "15",
                    "totalLength": "47"
          },
          {
                    "code": "LX-ALT1-0035-M08",
                    "sqmm": "35",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "8",
                    "extra": "10.8",
                    "palmWidth": "15",
                    "totalLength": "47"
          },
          {
                    "code": "LX-ALT1-0035-M10",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "8",
                    "extra": "10.8",
                    "palmWidth": "17",
                    "totalLength": "47"
          },
          {
                    "code": "LX-ALT1-0050-M08",
                    "sqmm": "50",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "9.3",
                    "extra": "13",
                    "palmWidth": "18",
                    "totalLength": "54"
          },
          {
                    "code": "LX-ALT1-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "9.3",
                    "extra": "13",
                    "palmWidth": "18",
                    "totalLength": "54"
          },
          {
                    "code": "LX-ALT1-0050-M12",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "9.3",
                    "extra": "13",
                    "palmWidth": "18",
                    "totalLength": "54"
          },
          {
                    "code": "LX-ALT1-0070-M08",
                    "sqmm": "70",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "11.1",
                    "extra": "15.4",
                    "palmWidth": "22",
                    "totalLength": "60"
          },
          {
                    "code": "LX-ALT1-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "11.1",
                    "extra": "15.4",
                    "palmWidth": "22",
                    "totalLength": "60"
          },
          {
                    "code": "LX-ALT1-0070-M12",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "11.1",
                    "extra": "15.4",
                    "palmWidth": "22",
                    "totalLength": "60"
          },
          {
                    "code": "LX-ALT1-0095-M10",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "13",
                    "extra": "17.1",
                    "palmWidth": "25",
                    "totalLength": "64"
          },
          {
                    "code": "LX-ALT1-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "13",
                    "extra": "17.1",
                    "palmWidth": "25",
                    "totalLength": "64"
          },
          {
                    "code": "LX-ALT1-0095-M16",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "13",
                    "extra": "17.1",
                    "palmWidth": "25",
                    "totalLength": "64"
          },
          {
                    "code": "LX-ALT1-0120-M10",
                    "sqmm": "120",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "14.8",
                    "extra": "19.6",
                    "palmWidth": "28",
                    "totalLength": "73"
          },
          {
                    "code": "LX-ALT1-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "14.8",
                    "extra": "19.6",
                    "palmWidth": "28",
                    "totalLength": "73"
          },
          {
                    "code": "LX-ALT1-0120-M16",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "14.8",
                    "extra": "19.6",
                    "palmWidth": "28",
                    "totalLength": "73"
          },
          {
                    "code": "LX-ALT1-0150-M10",
                    "sqmm": "150",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "16.6",
                    "extra": "21.4",
                    "palmWidth": "31",
                    "totalLength": "79"
          },
          {
                    "code": "LX-ALT1-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "16.6",
                    "extra": "21.4",
                    "palmWidth": "31",
                    "totalLength": "79"
          },
          {
                    "code": "LX-ALT1-0150-M16",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "16.6",
                    "extra": "21.4",
                    "palmWidth": "31",
                    "totalLength": "79"
          },
          {
                    "code": "LX-ALT1-0185-M10",
                    "sqmm": "185",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "18.5",
                    "extra": "24",
                    "palmWidth": "34",
                    "totalLength": "84"
          },
          {
                    "code": "LX-ALT1-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "18.5",
                    "extra": "24",
                    "palmWidth": "34",
                    "totalLength": "84"
          },
          {
                    "code": "LX-ALT1-0185-M16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "18.5",
                    "extra": "24",
                    "palmWidth": "34",
                    "totalLength": "84"
          },
          {
                    "code": "LX-ALT1-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "22",
                    "extra": "28",
                    "palmWidth": "40",
                    "totalLength": "102"
          },
          {
                    "code": "LX-ALT1-0240-M16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "22",
                    "extra": "28",
                    "palmWidth": "40",
                    "totalLength": "102"
          },
          {
                    "code": "LX-ALT1-0240-M20",
                    "sqmm": "240",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "22",
                    "extra": "28",
                    "palmWidth": "40",
                    "totalLength": "102"
          },
          {
                    "code": "LX-ALT1-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "24",
                    "extra": "31",
                    "palmWidth": "44.7",
                    "totalLength": "115"
          },
          {
                    "code": "LX-ALT1-0300-M20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "24",
                    "extra": "31",
                    "palmWidth": "44.7",
                    "totalLength": "115"
          },
          {
                    "code": "LX-ALT1-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "28",
                    "extra": "36",
                    "palmWidth": "51",
                    "totalLength": "130"
          },
          {
                    "code": "LX-ALT1-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "31",
                    "extra": "41",
                    "palmWidth": "58",
                    "totalLength": "140"
          },
          {
                    "code": "LX-ALT1-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "35",
                    "extra": "46",
                    "palmWidth": "66",
                    "totalLength": "154"
          },
          {
                    "code": "LX-ALT1-0800-BL",
                    "sqmm": "800",
                    "stud": "BL",
                    "studHole": "–",
                    "barrelId": "39",
                    "extra": "51",
                    "palmWidth": "73",
                    "totalLength": "180"
          },
          {
                    "code": "LX-ALT1-1000-BL",
                    "sqmm": "1000",
                    "stud": "BL",
                    "studHole": "–",
                    "barrelId": "43.5",
                    "extra": "57",
                    "palmWidth": "81",
                    "totalLength": "220"
          }
]
      }
    ]
  },
  'aluminium-two-hole-standard': {
    id: 'aluminium-two-hole-standard',
    num: 11,
    title: 'Aluminium Two-Hole Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · TWO-HOLE STANDARD',
    tagline: 'Dual-hole mounting palm and crimping barrel providing secure bolted connections and anti-twist stability for aluminium conductors.',
    description: 'NAEPL Aluminium Two-Hole Terminals are engineered for high-current aluminium power feeder lines requiring two-bolt anti-rotational stability. Features heavy wall EC-grade aluminium construction pre-filled with oxide-inhibiting paste for durable low-resistance connections.',
    image: '/assets/lugx/aluminium_two_hole_standard.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrical Conductor (EC Grade) Aluminium 99.5%',
      surfaceFinish: 'Natural / Pre-Filled with Joint Compound',
      conductorRange: '25 mm² to 630 mm²',
      studRange: 'M8 to M16 (Dual Hole Pitch)',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / IS 5082 / DIN 46329',
      barrelType: 'Dual-Hole Palm with Sealed Barrel',
      operatingTemp: '-40°C to +130°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Barrel Mouth C (mm)","Palm Width D (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-ALT2-0025-M08",
                    "sqmm": "25",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "7",
                    "extra": "9.7",
                    "palmWidth": "14",
                    "totalLength": "88"
          },
          {
                    "code": "LX-ALT2-0035-M08",
                    "sqmm": "35",
                    "stud": "M08",
                    "studHole": "8.2",
                    "barrelId": "8",
                    "extra": "10.8",
                    "palmWidth": "15",
                    "totalLength": "90"
          },
          {
                    "code": "LX-ALT2-0050-M10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "9.3",
                    "extra": "13",
                    "palmWidth": "18",
                    "totalLength": "100"
          },
          {
                    "code": "LX-ALT2-0070-M10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "11.1",
                    "extra": "15.4",
                    "palmWidth": "22",
                    "totalLength": "103"
          },
          {
                    "code": "LX-ALT2-0095-M12",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "13",
                    "extra": "17.1",
                    "palmWidth": "25",
                    "totalLength": "111"
          },
          {
                    "code": "LX-ALT2-0120-M12",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "14.8",
                    "extra": "19.6",
                    "palmWidth": "28",
                    "totalLength": "118"
          },
          {
                    "code": "LX-ALT2-0150-M12",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "16.6",
                    "extra": "21.4",
                    "palmWidth": "31",
                    "totalLength": "120"
          },
          {
                    "code": "LX-ALT2-0185-M12",
                    "sqmm": "185",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "18.5",
                    "extra": "24",
                    "palmWidth": "34",
                    "totalLength": "123"
          },
          {
                    "code": "LX-ALT2-0240-M12",
                    "sqmm": "240",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "22",
                    "extra": "28",
                    "palmWidth": "40",
                    "totalLength": "137"
          },
          {
                    "code": "LX-ALT2-0300-M16",
                    "sqmm": "300",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "24",
                    "extra": "31",
                    "palmWidth": "45",
                    "totalLength": "147"
          },
          {
                    "code": "LX-ALT2-0400-M20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "28",
                    "extra": "36",
                    "palmWidth": "51",
                    "totalLength": "157"
          },
          {
                    "code": "LX-ALT2-0500-M20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "31",
                    "extra": "41",
                    "palmWidth": "58",
                    "totalLength": "167"
          },
          {
                    "code": "LX-ALT2-0630-M20",
                    "sqmm": "630",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "35",
                    "extra": "46",
                    "palmWidth": "66",
                    "totalLength": "178"
          }
]
      }
    ]
  },
  'aluminium-one-hole-long-barrel': {
    id: 'aluminium-one-hole-long-barrel',
    num: 12,
    title: 'Aluminium One-Hole Long Barrel Crimping Terminals',
    category: 'ALUMINIUM CRIMPING TERMINALS',
    badge: 'ALUMINIUM · LONG BARREL',
    tagline: 'Extended crimping barrel and single-hole palm for increased conductor insertion depth and dependable aluminium cable termination.',
    description: 'Featuring an elongated crimping barrel that supports multiple hydraulic compressions, NAEPL Aluminium Long Barrel Terminals ensure maximum mechanical tensile retention and low contact resistance across utility power cables.',
    image: '/assets/lugx/aluminium_one_hole_long_barrel.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrical Conductor (EC Grade) Aluminium 99.5%',
      surfaceFinish: 'Natural / Pre-Filled with Oxide Inhibitor',
      conductorRange: '25 mm² to 1000 mm²',
      studRange: 'M8 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / IS 5082 / DIN 46329',
      barrelType: 'Extended Long Barrel with Chamfered Entry',
      operatingTemp: '-40°C to +130°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-ALT1-LB-0025-M08",
                    "sqmm": "25",
                    "stud": "8.2",
                    "studHole": "8.2",
                    "barrelId": "7.2",
                    "palmWidth": "14",
                    "barrelLength": "21",
                    "totalLength": "69"
          },
          {
                    "code": "LX-ALT1-LB-0035-M08",
                    "sqmm": "35",
                    "stud": "8.2",
                    "studHole": "8.2",
                    "barrelId": "8.3",
                    "palmWidth": "16",
                    "barrelLength": "22",
                    "totalLength": "79"
          },
          {
                    "code": "LX-ALT1-LB-0050-M10",
                    "sqmm": "50",
                    "stud": "10.2",
                    "studHole": "10.2",
                    "barrelId": "9.3",
                    "palmWidth": "19.5",
                    "barrelLength": "24",
                    "totalLength": "81"
          },
          {
                    "code": "LX-ALT1-LB-0070-M10",
                    "sqmm": "70",
                    "stud": "10.2",
                    "studHole": "10.2",
                    "barrelId": "10.2",
                    "palmWidth": "20.5",
                    "barrelLength": "26",
                    "totalLength": "96"
          },
          {
                    "code": "LX-ALT1-LB-0095-M12",
                    "sqmm": "95",
                    "stud": "12.7",
                    "studHole": "12.7",
                    "barrelId": "12",
                    "palmWidth": "23.5",
                    "barrelLength": "28",
                    "totalLength": "109"
          },
          {
                    "code": "LX-ALT1-LB-0120-M12",
                    "sqmm": "120",
                    "stud": "12.7",
                    "studHole": "12.7",
                    "barrelId": "13.7",
                    "palmWidth": "26.5",
                    "barrelLength": "30",
                    "totalLength": "114"
          },
          {
                    "code": "LX-ALT1-LB-0150-M12",
                    "sqmm": "150",
                    "stud": "12.7",
                    "studHole": "12.7",
                    "barrelId": "15.1",
                    "palmWidth": "29.5",
                    "barrelLength": "34",
                    "totalLength": "128"
          },
          {
                    "code": "LX-ALT1-LB-0185-M12",
                    "sqmm": "185",
                    "stud": "12.7",
                    "studHole": "12.7",
                    "barrelId": "16.6",
                    "palmWidth": "33",
                    "barrelLength": "36",
                    "totalLength": "131"
          },
          {
                    "code": "LX-ALT1-LB-0240-M12",
                    "sqmm": "240",
                    "stud": "12.7",
                    "studHole": "12.7",
                    "barrelId": "19.3",
                    "palmWidth": "37.5",
                    "barrelLength": "44",
                    "totalLength": "144"
          },
          {
                    "code": "LX-ALT1-LB-0300-M20",
                    "sqmm": "300",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "21.8",
                    "palmWidth": "42",
                    "barrelLength": "54",
                    "totalLength": "157"
          },
          {
                    "code": "LX-ALT1-LB-0400-M20",
                    "sqmm": "400",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "25",
                    "palmWidth": "48",
                    "barrelLength": "60",
                    "totalLength": "187"
          },
          {
                    "code": "LX-ALT1-LB-0500-M20",
                    "sqmm": "500",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "28.2",
                    "palmWidth": "54",
                    "barrelLength": "64",
                    "totalLength": "205"
          },
          {
                    "code": "LX-ALT1-LB-0630-M20",
                    "sqmm": "630",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "31.7",
                    "palmWidth": "61",
                    "barrelLength": "68",
                    "totalLength": "225"
          },
          {
                    "code": "LX-ALT1-LB-0800-M20",
                    "sqmm": "800",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "35.7",
                    "palmWidth": "68",
                    "barrelLength": "78",
                    "totalLength": "250"
          },
          {
                    "code": "LX-ALT1-LB-1000-M20",
                    "sqmm": "1000",
                    "stud": "20.3",
                    "studHole": "20.3",
                    "barrelId": "41",
                    "palmWidth": "77.5",
                    "barrelLength": "90",
                    "totalLength": "280"
          }
]
      }
    ]
  },
  'copper-ring-open-closed-soldering': {
    id: 'copper-ring-open-closed-soldering',
    num: 13,
    title: 'Copper Ring Terminals – Open & Closed Soldering Type',
    category: 'COPPER RING TERMINALS',
    badge: 'COPPER RING · OPEN & CLOSED SOLDERING',
    tagline: 'Open or closed barrel configurations and circular mounting tongues designed for soldered or crimped conductor termination.',
    description: 'Precision-stamped from high-conductivity sheet copper and electro-tinned, NAEPL Soldering Type Ring Terminals provide versatile termination options for control panels, switchgear, and automotive/marine wiring where soldered joint integrity is specified.',
    image: '/assets/lugx/copper_ring_soldering_type.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'High-Conductivity Electrolytic Sheet Copper',
      surfaceFinish: 'Electro-Tinned for Superior Solder Wetting',
      conductorRange: '1.5 mm² to 625 mm²',
      studRange: 'M4 to M20',
      voltageRating: 'Up to 1.1 kV',
      standards: 'BS 4579 / IS 1897',
      barrelType: 'Open & Closed Seam Soldering Barrel',
      operatingTemp: '-55°C to +150°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Hole ØE (mm)","Barrel ID ØA (mm)","Barrel Mouth C (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-OCST-01P5-04",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "4.2",
                    "barrelId": "1.6",
                    "extra": "3.2",
                    "palmWidth": "7",
                    "barrelLength": "5",
                    "totalLength": "15"
          },
          {
                    "code": "LX-OCST-02P5-05",
                    "sqmm": "2.5",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "2.3",
                    "extra": "3.9",
                    "palmWidth": "9",
                    "barrelLength": "6",
                    "totalLength": "18"
          },
          {
                    "code": "LX-OCST-0004-05",
                    "sqmm": "4",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "2.8",
                    "extra": "4.8",
                    "palmWidth": "9",
                    "barrelLength": "6",
                    "totalLength": "20"
          },
          {
                    "code": "LX-OCST-0006-06",
                    "sqmm": "6",
                    "stud": "M7",
                    "studHole": "6.5",
                    "barrelId": "3.6",
                    "extra": "5.6",
                    "palmWidth": "12",
                    "barrelLength": "7",
                    "totalLength": "24"
          },
          {
                    "code": "LX-OCST-0010-06",
                    "sqmm": "10",
                    "stud": "M7",
                    "studHole": "6.5",
                    "barrelId": "4.4",
                    "extra": "6.4",
                    "palmWidth": "12",
                    "barrelLength": "9",
                    "totalLength": "27"
          },
          {
                    "code": "LX-OCST-0016-08",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "5.4",
                    "extra": "7.8",
                    "palmWidth": "15",
                    "barrelLength": "11",
                    "totalLength": "32"
          },
          {
                    "code": "LX-OCST-0025-08",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "7",
                    "extra": "10.2",
                    "palmWidth": "15",
                    "barrelLength": "14",
                    "totalLength": "36"
          },
          {
                    "code": "LX-OCST-0035-08",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "8",
                    "extra": "11.2",
                    "palmWidth": "18",
                    "barrelLength": "15",
                    "totalLength": "41"
          },
          {
                    "code": "LX-OCST-0050-10",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "9.5",
                    "extra": "13.1",
                    "palmWidth": "24",
                    "barrelLength": "18",
                    "totalLength": "50"
          },
          {
                    "code": "LX-OCST-0070-10",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "11.8",
                    "extra": "15.8",
                    "palmWidth": "28",
                    "barrelLength": "23",
                    "totalLength": "58"
          },
          {
                    "code": "LX-OCST-0095-12",
                    "sqmm": "95",
                    "stud": "M13",
                    "studHole": "12.7",
                    "barrelId": "13.5",
                    "extra": "18.7",
                    "palmWidth": "32",
                    "barrelLength": "25",
                    "totalLength": "66"
          },
          {
                    "code": "LX-OCST-0120-12",
                    "sqmm": "120",
                    "stud": "M13",
                    "studHole": "12.7",
                    "barrelId": "15.5",
                    "extra": "21.1",
                    "palmWidth": "34",
                    "barrelLength": "29",
                    "totalLength": "73"
          },
          {
                    "code": "LX-OCST-0150-12",
                    "sqmm": "150",
                    "stud": "M13",
                    "studHole": "12.7",
                    "barrelId": "16.5",
                    "extra": "22.9",
                    "palmWidth": "38",
                    "barrelLength": "30",
                    "totalLength": "79"
          },
          {
                    "code": "LX-OCST-0185-16",
                    "sqmm": "185",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "18.5",
                    "extra": "25.7",
                    "palmWidth": "42",
                    "barrelLength": "35",
                    "totalLength": "87"
          },
          {
                    "code": "LX-OCST-0240-16",
                    "sqmm": "240",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "22.5",
                    "extra": "30.5",
                    "palmWidth": "48",
                    "barrelLength": "42",
                    "totalLength": "100"
          },
          {
                    "code": "LX-OCST-0300-20",
                    "sqmm": "300",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "25",
                    "extra": "34",
                    "palmWidth": "54",
                    "barrelLength": "45",
                    "totalLength": "110"
          },
          {
                    "code": "LX-OCST-0400-20",
                    "sqmm": "400",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "29.5",
                    "extra": "39.5",
                    "palmWidth": "62",
                    "barrelLength": "54",
                    "totalLength": "125"
          },
          {
                    "code": "LX-OCST-0500-20",
                    "sqmm": "500",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "32",
                    "extra": "42.8",
                    "palmWidth": "62",
                    "barrelLength": "58",
                    "totalLength": "137"
          },
          {
                    "code": "LX-OCST-0625-20",
                    "sqmm": "625",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "36",
                    "extra": "46.8",
                    "palmWidth": "70",
                    "barrelLength": "65",
                    "totalLength": "148"
          }
]
      }
    ]
  },
  'bimetallic-friction-welded': {
    id: 'bimetallic-friction-welded',
    num: 14,
    title: 'Bi-Metallic Friction-Welded Terminals',
    category: 'BI-METALLIC TERMINALS',
    badge: 'BI-METALLIC · FRICTION WELDED',
    tagline: 'Manufactured using solid friction-welding technology joining copper and aluminium sections to eliminate galvanic corrosion.',
    description: 'NAEPL Friction-Welded Bi-Metallic Terminals join a high-conductivity copper palm to an aluminium barrel using molecular-level friction welding. This eliminates electrolytic corrosion when connecting aluminium cables to copper switchgear busbars in substations and solar power plants.',
    image: '/assets/lugx/bimetallic_friction_welded.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Molecular Friction-Welded Copper Palm & EC Aluminium Barrel',
      surfaceFinish: 'Natural Aluminium Barrel / Tinned Copper Palm',
      conductorRange: '16 mm² to 1000 mm²',
      studRange: 'M10 to M20',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / DIN 46235 / IS 1897',
      barrelType: 'Seamless Friction-Welded Transition Barrel',
      operatingTemp: '-40°C to +150°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Hole ØE (mm)","Barrel ID ØA (mm)","Barrel Mouth C (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-BMT-FWT-0016-10",
                    "sqmm": "16",
                    "stud": "M11",
                    "studHole": "10.5",
                    "barrelId": "5.5",
                    "extra": "12",
                    "palmWidth": "18",
                    "barrelLength": "30",
                    "totalLength": "70"
          },
          {
                    "code": "LX-BMT-FWT-0025-10",
                    "sqmm": "25",
                    "stud": "M11",
                    "studHole": "10.5",
                    "barrelId": "7.5",
                    "extra": "12",
                    "palmWidth": "18",
                    "barrelLength": "30",
                    "totalLength": "70"
          },
          {
                    "code": "LX-BMT-FWT-0035-10",
                    "sqmm": "35",
                    "stud": "M11",
                    "studHole": "10.5",
                    "barrelId": "8",
                    "extra": "14",
                    "palmWidth": "20",
                    "barrelLength": "30",
                    "totalLength": "70"
          },
          {
                    "code": "LX-BMT-FWT-0050-10",
                    "sqmm": "50",
                    "stud": "M11",
                    "studHole": "10.5",
                    "barrelId": "9.8",
                    "extra": "16",
                    "palmWidth": "20",
                    "barrelLength": "32",
                    "totalLength": "80"
          },
          {
                    "code": "LX-BMT-FWT-0070-10",
                    "sqmm": "70",
                    "stud": "M11",
                    "studHole": "10.5",
                    "barrelId": "11.2",
                    "extra": "18.5",
                    "palmWidth": "24",
                    "barrelLength": "45",
                    "totalLength": "90"
          },
          {
                    "code": "LX-BMT-FWT-0095-12",
                    "sqmm": "95",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "13.5",
                    "extra": "21",
                    "palmWidth": "24",
                    "barrelLength": "43",
                    "totalLength": "92"
          },
          {
                    "code": "LX-BMT-FWT-0120-12",
                    "sqmm": "120",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "15",
                    "extra": "23",
                    "palmWidth": "25",
                    "barrelLength": "55",
                    "totalLength": "100"
          },
          {
                    "code": "LX-BMT-FWT-0150-12",
                    "sqmm": "150",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "16.5",
                    "extra": "25",
                    "palmWidth": "25",
                    "barrelLength": "60",
                    "totalLength": "105"
          },
          {
                    "code": "LX-BMT-FWT-0150-12",
                    "sqmm": "185",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "18.3",
                    "extra": "28.5",
                    "palmWidth": "30",
                    "barrelLength": "60",
                    "totalLength": "120"
          },
          {
                    "code": "LX-BMT-FWT-0185-12",
                    "sqmm": "240",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "21",
                    "extra": "32",
                    "palmWidth": "30",
                    "barrelLength": "60",
                    "totalLength": "120"
          },
          {
                    "code": "LX-BMT-FWT-0185-16",
                    "sqmm": "240",
                    "stud": "M17",
                    "studHole": "17",
                    "barrelId": "21",
                    "extra": "32",
                    "palmWidth": "30",
                    "barrelLength": "60",
                    "totalLength": "120"
          },
          {
                    "code": "LX-BMT-FWT-0300-12",
                    "sqmm": "300",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "22.5",
                    "extra": "34",
                    "palmWidth": "36",
                    "barrelLength": "62",
                    "totalLength": "130"
          },
          {
                    "code": "LX-BMT-FWT-0300-16",
                    "sqmm": "300",
                    "stud": "M17",
                    "studHole": "17",
                    "barrelId": "22.5",
                    "extra": "34",
                    "palmWidth": "36",
                    "barrelLength": "62",
                    "totalLength": "130"
          },
          {
                    "code": "LX-BMT-FWT-0300-20",
                    "sqmm": "400",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "26.5",
                    "extra": "38",
                    "palmWidth": "36",
                    "barrelLength": "75",
                    "totalLength": "145"
          },
          {
                    "code": "LX-BMT-FWT-0630-20",
                    "sqmm": "400",
                    "stud": "M17",
                    "studHole": "17",
                    "barrelId": "26.5",
                    "extra": "38",
                    "palmWidth": "36",
                    "barrelLength": "75",
                    "totalLength": "145"
          },
          {
                    "code": "LX-BMT-FWT-0500-12",
                    "sqmm": "500",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "30",
                    "extra": "42",
                    "palmWidth": "36",
                    "barrelLength": "80",
                    "totalLength": "152"
          },
          {
                    "code": "LX-BMT-FWT-0630-12",
                    "sqmm": "630",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "34",
                    "extra": "46",
                    "palmWidth": "36",
                    "barrelLength": "70",
                    "totalLength": "146"
          },
          {
                    "code": "LX-BMT-FWT-0800-12",
                    "sqmm": "800",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "39",
                    "extra": "54",
                    "palmWidth": "50",
                    "barrelLength": "115",
                    "totalLength": "230"
          },
          {
                    "code": "LX-BMT-FWT-1000-12",
                    "sqmm": "1000",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "43",
                    "extra": "58",
                    "palmWidth": "50",
                    "barrelLength": "115",
                    "totalLength": "230"
          }
]
      }
    ]
  },
  'bimetallic-copper-ring': {
    id: 'bimetallic-copper-ring',
    num: 15,
    title: 'Bi-Metallic Copper Ring Terminals',
    category: 'BI-METALLIC TERMINALS',
    badge: 'BI-METALLIC · COPPER RING PALM',
    tagline: 'Copper mounting tongue and aluminium conductor barrel engineered for secure bolted connections and aluminium cable termination.',
    description: 'Featuring a solid copper circular ring tongue joined to an aluminium conductor crimping barrel, these terminals enable safe connection of large aluminium power cables into standard copper-faced breaker terminals and distribution blocks.',
    image: '/assets/lugx/bimetallic_copper_ring.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Copper Ring Tongue with Aluminium Barrel',
      surfaceFinish: 'Electro-Tinned Copper / Neutral Greased Barrel',
      conductorRange: '150 mm² to 630 mm²',
      studRange: 'M12 to M21',
      voltageRating: 'Rated up to 33 kV',
      standards: 'IEC 61238-1 / DIN 46235',
      barrelType: 'Bi-Metallic Composite Construction',
      operatingTemp: '-40°C to +150°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Hole ØE (mm)","Barrel ID ØA (mm)","Barrel Mouth C (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-BMT-CRT-0150-12",
                    "sqmm": "150",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "16.5",
                    "extra": "26",
                    "palmWidth": "103",
                    "barrelLength": "21.5",
                    "totalLength": "121"
          },
          {
                    "code": "LX-BMT-CRT-0185-12",
                    "sqmm": "185",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "18.5",
                    "extra": "29",
                    "palmWidth": "106",
                    "barrelLength": "22.5",
                    "totalLength": "128"
          },
          {
                    "code": "LX-BMT-CRT-0185-16",
                    "sqmm": "185",
                    "stud": "M17",
                    "studHole": "17",
                    "barrelId": "18.5",
                    "extra": "29",
                    "palmWidth": "106",
                    "barrelLength": "22.5",
                    "totalLength": "128"
          },
          {
                    "code": "LX-BMT-CRT-0300-12",
                    "sqmm": "300",
                    "stud": "M13",
                    "studHole": "13",
                    "barrelId": "23.5",
                    "extra": "34.5",
                    "palmWidth": "124",
                    "barrelLength": "24.5",
                    "totalLength": "148"
          },
          {
                    "code": "LX-BMT-CRT-0300-16",
                    "sqmm": "300",
                    "stud": "M17",
                    "studHole": "17",
                    "barrelId": "23.5",
                    "extra": "34.5",
                    "palmWidth": "124",
                    "barrelLength": "24.5",
                    "totalLength": "148"
          },
          {
                    "code": "LX-BMT-CRT-0300-20",
                    "sqmm": "300",
                    "stud": "M21",
                    "studHole": "21",
                    "barrelId": "23.5",
                    "extra": "34.5",
                    "palmWidth": "124",
                    "barrelLength": "24.5",
                    "totalLength": "148"
          },
          {
                    "code": "LX-BMT-CRT-0630-20",
                    "sqmm": "630",
                    "stud": "M21",
                    "studHole": "21",
                    "barrelId": "34",
                    "extra": "46",
                    "palmWidth": "127",
                    "barrelLength": "33",
                    "totalLength": "160"
          }
]
      }
    ]
  },
  'copper-crimping-pin': {
    id: 'copper-crimping-pin',
    num: 16,
    title: 'Copper Crimping Pin Terminals – Non-Insulated & Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'PIN TERMINALS · BARE & INSULATED',
    tagline: 'Solid pin-shaped contact and crimping barrel in bare and insulated configurations for terminal blocks and electrical interfaces.',
    description: 'Engineered for smooth insertion into European-style terminal blocks, screw clamp terminals, and relay sockets. Available in bare copper (LX-CPT), pre-insulated PVC (LX-CPI), and polyamide insulation (LX-CPD) to safeguard against accidental contact in control panels.',
    image: '/assets/lugx/copper_crimping_pin.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'Electrolytic Copper with High-Dielectric Insulation',
      surfaceFinish: 'Electro-Tinned Copper / Vinyl or Nylon Sleeve',
      conductorRange: '0.5 mm² to 95 mm²',
      studRange: 'Pin Contact (Ø 1.4 mm to 13.8 mm)',
      voltageRating: '600V (Insulated) / 1000V (Bare)',
      standards: 'DIN 46231 / IEC 60999',
      barrelType: 'Precision Rolled / Brazed Seam Pin Terminal',
      operatingTemp: '-40°C to +105°C (Insulated)',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Bare Code","Insulated Code","Sq.mm","Pin Type","Barrel ID ØA (mm)","Pin Width D (mm)","Pin Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CPT-01P5-T01",
                    "extra": "LX-CPI-01P5-T01",
                    "sqmm": "1–1.5",
                    "stud": "I",
                    "barrelId": "1.6",
                    "palmWidth": "1.9",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CPT-01P5-T02",
                    "extra": "LX-CPI-01P5-T02",
                    "sqmm": "1–1.5",
                    "stud": "II",
                    "barrelId": "1.6",
                    "palmWidth": "3.1",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CPT-02P5-T01",
                    "extra": "LX-CPI-02P5-T01",
                    "sqmm": "2.5",
                    "stud": "I",
                    "barrelId": "2.3",
                    "palmWidth": "1.9",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CPT-02P5-T02",
                    "extra": "LX-CPI-02P5-T02",
                    "sqmm": "2.5",
                    "stud": "II",
                    "barrelId": "2.3",
                    "palmWidth": "3.1",
                    "barrelLength": "5",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CPT-0004-T01",
                    "extra": "LX-CPI-0004-T01",
                    "sqmm": "4",
                    "stud": "I",
                    "barrelId": "2.9",
                    "palmWidth": "2.7",
                    "barrelLength": "6",
                    "totalLength": "20"
          },
          {
                    "code": "LX-CPT-0004-T02",
                    "extra": "LX-CPI-0004-T02",
                    "sqmm": "4",
                    "stud": "II",
                    "barrelId": "3.6",
                    "palmWidth": "5.1",
                    "barrelLength": "6",
                    "totalLength": "20"
          },
          {
                    "code": "LX-CPT-0006-T01",
                    "extra": "LX-CPI-0006-T01",
                    "sqmm": "6",
                    "stud": "I",
                    "barrelId": "3.6",
                    "palmWidth": "2.7",
                    "barrelLength": "6",
                    "totalLength": "20"
          },
          {
                    "code": "LX-CPT-0006-T02",
                    "extra": "LX-CPI-0006-T02",
                    "sqmm": "6",
                    "stud": "II",
                    "barrelId": "4",
                    "palmWidth": "2.7",
                    "barrelLength": "6",
                    "totalLength": "20"
          },
          {
                    "code": "LX-CPT-0010-T03",
                    "extra": "LX-CPI-0010-T03",
                    "sqmm": "10",
                    "stud": "III",
                    "barrelId": "4.5",
                    "palmWidth": "4.3",
                    "barrelLength": "8",
                    "totalLength": "22"
          },
          {
                    "code": "LX-CPT-0016-T03",
                    "extra": "LX-CPI-0016-T03",
                    "sqmm": "16",
                    "stud": "III",
                    "barrelId": "5.8",
                    "palmWidth": "5.5",
                    "barrelLength": "10",
                    "totalLength": "26"
          },
          {
                    "code": "LX-CPT-0025-T03",
                    "extra": "–",
                    "sqmm": "25",
                    "stud": "III",
                    "barrelId": "7.5",
                    "palmWidth": "7",
                    "barrelLength": "11",
                    "totalLength": "31"
          },
          {
                    "code": "LX-CPT-0035-T03",
                    "extra": "–",
                    "sqmm": "35",
                    "stud": "III",
                    "barrelId": "9",
                    "palmWidth": "8",
                    "barrelLength": "12",
                    "totalLength": "37"
          },
          {
                    "code": "LX-CPT-0050-T03",
                    "extra": "–",
                    "sqmm": "50",
                    "stud": "III",
                    "barrelId": "10.5",
                    "palmWidth": "9",
                    "barrelLength": "16",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CPT-0070-T03",
                    "extra": "–",
                    "sqmm": "70",
                    "stud": "III",
                    "barrelId": "12",
                    "palmWidth": "10",
                    "barrelLength": "18",
                    "totalLength": "45"
          },
          {
                    "code": "LX-CPT-0095-T03",
                    "extra": "–",
                    "sqmm": "95",
                    "stud": "III",
                    "barrelId": "13.8",
                    "palmWidth": "11",
                    "barrelLength": "21",
                    "totalLength": "52"
          }
]
      }
    ]
  },
  'copper-crimping-ring': {
    id: 'copper-crimping-ring',
    num: 17,
    title: 'Copper Crimping Ring Terminals – Non-Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'RING TERMINALS · NON-INSULATED',
    tagline: 'Non-insulated copper ring terminals featuring a circular mounting tongue and crimping barrel for secure screw or bolt fastening.',
    description: 'NAEPL Non-Insulated Copper Ring Terminals feature a burr-free seamless or brazed seam barrel with internal serrations for maximum wire pull-out strength. Widely specified in control panels, transformer marshalling kiosks, and heavy industrial instrumentation wiring.',
    image: '/assets/lugx/copper_crimping_ring.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'High-Conductivity Electrolytic Sheet Copper',
      surfaceFinish: 'Electro-Tinned (5–10 Microns)',
      conductorRange: '1.5 mm² to 150 mm²',
      studRange: 'M3 to M20',
      voltageRating: 'Rated up to 1000V',
      standards: 'DIN 46234 / IEC 60760 / IS 1897',
      barrelType: 'Brazed Seam with Internal Serrations',
      operatingTemp: '-55°C to +155°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Stud","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CRT-0010-05A",
                    "sqmm": "10",
                    "stud": "M5",
                    "studHole": "5.2",
                    "barrelId": "4.3",
                    "palmWidth": "10",
                    "barrelLength": "8",
                    "totalLength": "20"
          },
          {
                    "code": "LX-CRT-0010-06A",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.4",
                    "barrelId": "4.3",
                    "palmWidth": "12",
                    "barrelLength": "8",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CRT-0010-08A",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "4.3",
                    "palmWidth": "16",
                    "barrelLength": "8",
                    "totalLength": "27"
          },
          {
                    "code": "LX-CRT-0010-08B",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "4.3",
                    "palmWidth": "18",
                    "barrelLength": "8",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CRT-0010-10A",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "4.3",
                    "palmWidth": "18",
                    "barrelLength": "8",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CRT-0010-10B",
                    "sqmm": "10",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "4.3",
                    "palmWidth": "22",
                    "barrelLength": "8",
                    "totalLength": "34"
          },
          {
                    "code": "LX-CRT-0010-12A",
                    "sqmm": "10",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "4.3",
                    "palmWidth": "22",
                    "barrelLength": "8",
                    "totalLength": "34"
          },
          {
                    "code": "LX-CRT-0016-06A",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.4",
                    "barrelId": "5.6",
                    "palmWidth": "12",
                    "barrelLength": "10",
                    "totalLength": "26"
          },
          {
                    "code": "LX-CRT-0016-08A",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "5.6",
                    "palmWidth": "16",
                    "barrelLength": "10",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CRT-0016-08B",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "5.6",
                    "palmWidth": "18",
                    "barrelLength": "10",
                    "totalLength": "33"
          },
          {
                    "code": "LX-CRT-0016-10A",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "5.6",
                    "palmWidth": "18",
                    "barrelLength": "10",
                    "totalLength": "33"
          },
          {
                    "code": "LX-CRT-0016-10B",
                    "sqmm": "16",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "5.6",
                    "palmWidth": "22",
                    "barrelLength": "10",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CRT-0016-12A",
                    "sqmm": "16",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "5.6",
                    "palmWidth": "22",
                    "barrelLength": "10",
                    "totalLength": "35"
          },
          {
                    "code": "LX-CRT-0025-06A",
                    "sqmm": "25",
                    "stud": "M6",
                    "studHole": "6.4",
                    "barrelId": "7.5",
                    "palmWidth": "12",
                    "barrelLength": "11",
                    "totalLength": "31"
          },
          {
                    "code": "LX-CRT-0025-08A",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "7.5",
                    "palmWidth": "12",
                    "barrelLength": "11",
                    "totalLength": "31"
          },
          {
                    "code": "LX-CRT-0025-08B",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "7.5",
                    "palmWidth": "16",
                    "barrelLength": "11",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CRT-0025-08C",
                    "sqmm": "25",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "7.5",
                    "palmWidth": "18",
                    "barrelLength": "11",
                    "totalLength": "34"
          },
          {
                    "code": "LX-CRT-0025-10A",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "7.5",
                    "palmWidth": "16",
                    "barrelLength": "11",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CRT-0025-10B",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "7.5",
                    "palmWidth": "18",
                    "barrelLength": "11",
                    "totalLength": "34"
          },
          {
                    "code": "LX-CRT-0025-10C",
                    "sqmm": "25",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "7.5",
                    "palmWidth": "22",
                    "barrelLength": "11",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CRT-0025-12A",
                    "sqmm": "25",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "7.5",
                    "palmWidth": "22",
                    "barrelLength": "11",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CRT-0035-06A",
                    "sqmm": "35",
                    "stud": "M6",
                    "studHole": "6.4",
                    "barrelId": "9",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "31"
          },
          {
                    "code": "LX-CRT-0035-08A",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "9",
                    "palmWidth": "16",
                    "barrelLength": "12",
                    "totalLength": "31"
          },
          {
                    "code": "LX-CRT-0035-08B",
                    "sqmm": "35",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "9",
                    "palmWidth": "18",
                    "barrelLength": "12",
                    "totalLength": "36"
          },
          {
                    "code": "LX-CRT-0035-10A",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "9",
                    "palmWidth": "18",
                    "barrelLength": "12",
                    "totalLength": "36"
          },
          {
                    "code": "LX-CRT-0035-10B",
                    "sqmm": "35",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "9",
                    "palmWidth": "22",
                    "barrelLength": "12",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CRT-0035-12A",
                    "sqmm": "35",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "9",
                    "palmWidth": "22",
                    "barrelLength": "12",
                    "totalLength": "42"
          },
          {
                    "code": "LX-CRT-0050-08A",
                    "sqmm": "50",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "10.5",
                    "palmWidth": "18",
                    "barrelLength": "16",
                    "totalLength": "43"
          },
          {
                    "code": "LX-CRT-0050-10A",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "10.5",
                    "palmWidth": "18",
                    "barrelLength": "16",
                    "totalLength": "43"
          },
          {
                    "code": "LX-CRT-0050-10B",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "10.5",
                    "palmWidth": "22",
                    "barrelLength": "16",
                    "totalLength": "43"
          },
          {
                    "code": "LX-CRT-0050-10C",
                    "sqmm": "50",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "10.5",
                    "palmWidth": "24",
                    "barrelLength": "16",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CRT-0050-12A",
                    "sqmm": "50",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "10.5",
                    "palmWidth": "24",
                    "barrelLength": "16",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CRT-0050-16A",
                    "sqmm": "50",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "10.5",
                    "palmWidth": "32",
                    "barrelLength": "16",
                    "totalLength": "54"
          },
          {
                    "code": "LX-CRT-0070-10A",
                    "sqmm": "70",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "12",
                    "palmWidth": "22",
                    "barrelLength": "18",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CRT-0070-12A",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "12",
                    "palmWidth": "22",
                    "barrelLength": "18",
                    "totalLength": "47"
          },
          {
                    "code": "LX-CRT-0070-12B",
                    "sqmm": "70",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "12",
                    "palmWidth": "24",
                    "barrelLength": "18",
                    "totalLength": "48"
          },
          {
                    "code": "LX-CRT-0070-16A",
                    "sqmm": "70",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "12",
                    "palmWidth": "28",
                    "barrelLength": "20",
                    "totalLength": "54"
          },
          {
                    "code": "LX-CRT-0095-10A",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "13.5",
                    "palmWidth": "22",
                    "barrelLength": "20",
                    "totalLength": "46"
          },
          {
                    "code": "LX-CRT-0095-10B",
                    "sqmm": "95",
                    "stud": "M10",
                    "studHole": "10.2",
                    "barrelId": "13.5",
                    "palmWidth": "24",
                    "barrelLength": "20",
                    "totalLength": "50"
          },
          {
                    "code": "LX-CRT-0095-12A",
                    "sqmm": "95",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "13.5",
                    "palmWidth": "24",
                    "barrelLength": "20",
                    "totalLength": "50"
          },
          {
                    "code": "LX-CRT-0095-16A",
                    "sqmm": "95",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "13.5",
                    "palmWidth": "28",
                    "barrelLength": "20",
                    "totalLength": "58"
          },
          {
                    "code": "LX-CRT-0120-12A",
                    "sqmm": "120",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "15",
                    "palmWidth": "26",
                    "barrelLength": "22",
                    "totalLength": "52"
          },
          {
                    "code": "LX-CRT-0120-16A",
                    "sqmm": "120",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "15",
                    "palmWidth": "32",
                    "barrelLength": "22",
                    "totalLength": "64"
          },
          {
                    "code": "LX-CRT-0120-20A",
                    "sqmm": "120",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "15",
                    "palmWidth": "40",
                    "barrelLength": "22",
                    "totalLength": "72"
          },
          {
                    "code": "LX-CRT-0150-12A",
                    "sqmm": "150",
                    "stud": "M12",
                    "studHole": "12.7",
                    "barrelId": "16.5",
                    "palmWidth": "34",
                    "barrelLength": "24",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CRT-0150-16A",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "16.5",
                    "palmWidth": "34",
                    "barrelLength": "24",
                    "totalLength": "66"
          },
          {
                    "code": "LX-CRT-0150-16B",
                    "sqmm": "150",
                    "stud": "M16",
                    "studHole": "16.2",
                    "barrelId": "16.5",
                    "palmWidth": "40",
                    "barrelLength": "24",
                    "totalLength": "74"
          },
          {
                    "code": "LX-CRT-0150-20A",
                    "sqmm": "150",
                    "stud": "M20",
                    "studHole": "20.3",
                    "barrelId": "16.5",
                    "palmWidth": "40",
                    "barrelLength": "24",
                    "totalLength": "74"
          }
]
      }
    ]
  },
  'copper-crimping-fork': {
    id: 'copper-crimping-fork',
    num: 18,
    title: 'Copper Crimping Fork Terminals – Insulated & Non-Insulated',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'FORK TERMINALS · BARE & INSULATED',
    tagline: 'Open-ended mounting tongue and crimping barrel allowing fast screw-terminal connections without removing the fastener completely.',
    description: 'Fork (spade) terminals engineered to slide effortlessly around terminal screws and studs, drastically reducing assembly and maintenance time. Available in bare copper and color-coded vinyl insulation to prevent short circuits in dense control wiring.',
    image: '/assets/lugx/copper_crimping_fork.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'High-Conductivity Electrolytic Copper',
      surfaceFinish: 'Electro-Tinned / Color-Coded Insulation',
      conductorRange: '0.5 mm² to 10 mm²',
      studRange: 'M3 to M8 (Stud Hole 3.1 to 8.2 mm)',
      voltageRating: '600V (Insulated) / 1000V (Bare)',
      standards: 'DIN 46237 / IEC 60760',
      barrelType: 'Open-Ended Spade / Fork Configuration',
      operatingTemp: '-40°C to +105°C (Insulated)',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CFT-015-051",
                    "sqmm": "1-1.5",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "1.6",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CFT-015-041",
                    "sqmm": "1-1.5",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "1.6",
                    "palmWidth": "7.5",
                    "barrelLength": "5",
                    "totalLength": "17.5"
          },
          {
                    "code": "LX-CFT-015-035",
                    "sqmm": "1-1.5",
                    "stud": "M4",
                    "studHole": "3.5",
                    "barrelId": "1.6",
                    "palmWidth": "6.8",
                    "barrelLength": "4",
                    "totalLength": "13"
          },
          {
                    "code": "LX-CFT-015-030",
                    "sqmm": "1-1.5",
                    "stud": "M3",
                    "studHole": "3",
                    "barrelId": "2",
                    "palmWidth": "6.2",
                    "barrelLength": "5",
                    "totalLength": "13"
          },
          {
                    "code": "LX-CFT-025-035",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "3.5",
                    "barrelId": "2.3",
                    "palmWidth": "6.5",
                    "barrelLength": "5",
                    "totalLength": "15"
          },
          {
                    "code": "LX-CFT-025-041",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "2.3",
                    "palmWidth": "7.5",
                    "barrelLength": "5",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CFT-025-050",
                    "sqmm": "2.5",
                    "stud": "M5",
                    "studHole": "5",
                    "barrelId": "2.6",
                    "palmWidth": "10.6",
                    "barrelLength": "6.2",
                    "totalLength": "21"
          },
          {
                    "code": "LX-CFT-046-031",
                    "sqmm": "4-6",
                    "stud": "M3",
                    "studHole": "3.1",
                    "barrelId": "3.5",
                    "palmWidth": "6",
                    "barrelLength": "6",
                    "totalLength": "15"
          },
          {
                    "code": "LX-CFT-046-035",
                    "sqmm": "4-6",
                    "stud": "M4",
                    "studHole": "3.5",
                    "barrelId": "3.5",
                    "palmWidth": "6",
                    "barrelLength": "6",
                    "totalLength": "15"
          },
          {
                    "code": "LX-CFT-010-065",
                    "sqmm": "10",
                    "stud": "M7",
                    "studHole": "6.5",
                    "barrelId": "4.5",
                    "palmWidth": "16",
                    "barrelLength": "8",
                    "totalLength": "27"
          },
          {
                    "code": "LX-CFT-010-082",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.2",
                    "barrelId": "4.5",
                    "palmWidth": "16",
                    "barrelLength": "8",
                    "totalLength": "27"
          }
]
      }
    ]
  },
  'copper-ring-tongue-fork': {
    id: 'copper-ring-tongue-fork',
    num: 19,
    title: 'Copper Crimping Ring Tongue Fork Terminals',
    category: 'COPPER CRIMPING TERMINALS',
    badge: 'RING TONGUE FORK · FLANGED & INSULATED',
    tagline: 'Specialized ring-tongue fork configuration designed for vibration-resistant screw terminal connections in industrial control wiring.',
    description: 'Combining the rapid installation benefits of a spade terminal with the captive retention security of a ring terminal, NAEPL Flanged Ring Tongue Fork Terminals feature upturned tongue edges that grip beneath the screw head to prevent slipping out during extreme vibration.',
    image: '/assets/lugx/copper_ring_tongue_fork.png',
    features: [
      "Precision manufactured to international standards for low electrical contact resistance.",
      "High purity conductor materials (ETP Copper 99.9% / EC Aluminium 99.5%) ensure maximum conductivity.",
      "Electro-tinned surface finish prevents oxidation and galvanic corrosion over decades of service.",
      "Clear cross-section (Sq.mm) and stud size embossed markings for error-free installation.",
      "Tested for high short-circuit withstand currents, thermal shock, and cyclic mechanical vibrations."
],
    specs: {
      material: 'High-Conductivity Electrolytic Copper',
      surfaceFinish: 'Electro-Tinned / Pre-Insulated Sleeve Available',
      conductorRange: '1.5 mm² to 16 mm²',
      studRange: 'M3 to M8',
      voltageRating: '600V (Insulated) / 1000V (Bare)',
      standards: 'IEC 60760 / IS 1897',
      barrelType: 'Flanged Captive Fork / Hook Tongue Design',
      operatingTemp: '-40°C to +105°C',
    },
    applications: [
      "Industrial low & medium voltage power distribution boards",
      "Transformer low-voltage and high-voltage bushing terminations",
      "Air Circuit Breakers (ACB), Molded-Case Circuit Breakers (MCCB), and switchboards",
      "Solar photovoltaic combiner boxes, inverter skids, and wind turbine towers",
      "Heavy industrial motors, generators, pumps, and variable frequency drives (VFD)"
],
    tables: [
      {
        title: 'Technical Sizing Matrix & Dimensional Specifications',
        subtitle: 'NAEPL certified catalog dimensions. Custom stud holes and palm widths manufactured upon request.',
        headers: ["Part No.","Sq.mm","Hole ØE (mm)","Barrel ID ØA (mm)","Palm Width D (mm)","Barrel Length B (mm)","Total Length J (mm)"],
        rows: [
          {
                    "code": "LX-CTFT-01P5-03A",
                    "sqmm": "1.5",
                    "stud": "M3",
                    "studHole": "3.1",
                    "barrelId": "1.6",
                    "palmWidth": "6",
                    "barrelLength": "5",
                    "totalLength": "14"
          },
          {
                    "code": "LX-CTFT-01P5-35A",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "3.6",
                    "barrelId": "1.6",
                    "palmWidth": "6",
                    "barrelLength": "5",
                    "totalLength": "14"
          },
          {
                    "code": "LX-CTFT-01P5-03B",
                    "sqmm": "1.5",
                    "stud": "M3",
                    "studHole": "3.1",
                    "barrelId": "1.6",
                    "palmWidth": "6.8",
                    "barrelLength": "5",
                    "totalLength": "13"
          },
          {
                    "code": "LX-CTFT-01P5-35B",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "3.6",
                    "barrelId": "1.6",
                    "palmWidth": "6.8",
                    "barrelLength": "5",
                    "totalLength": "13"
          },
          {
                    "code": "LX-CTFT-01P5-04A",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "1.6",
                    "palmWidth": "7",
                    "barrelLength": "5",
                    "totalLength": "14"
          },
          {
                    "code": "LX-CTFT-01P5-04B",
                    "sqmm": "1.5",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "1.6",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "16"
          },
          {
                    "code": "LX-CTFT-01P5-05A",
                    "sqmm": "1.5",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "1.6",
                    "palmWidth": "10",
                    "barrelLength": "5",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CTFT-01P5-06A",
                    "sqmm": "1.5",
                    "stud": "M6",
                    "studHole": "6.1",
                    "barrelId": "1.6",
                    "palmWidth": "10",
                    "barrelLength": "5",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CTFT-02P5-03A",
                    "sqmm": "2.5",
                    "stud": "M3",
                    "studHole": "3.1",
                    "barrelId": "2.3",
                    "palmWidth": "6.5",
                    "barrelLength": "5",
                    "totalLength": "12.7"
          },
          {
                    "code": "LX-CTFT-02P5-35A",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "3.6",
                    "barrelId": "2.3",
                    "palmWidth": "6.5",
                    "barrelLength": "5",
                    "totalLength": "12.7"
          },
          {
                    "code": "LX-CTFT-02P5-04A",
                    "sqmm": "2.5",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "2.3",
                    "palmWidth": "8",
                    "barrelLength": "5",
                    "totalLength": "16"
          },
          {
                    "code": "LX-CTFT-02P5-05A",
                    "sqmm": "2.5",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "2.3",
                    "palmWidth": "10",
                    "barrelLength": "5",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CTFT-02P5-06A",
                    "sqmm": "2.5",
                    "stud": "M6",
                    "studHole": "6.1",
                    "barrelId": "2.3",
                    "palmWidth": "10",
                    "barrelLength": "5",
                    "totalLength": "18"
          },
          {
                    "code": "LX-CTFT-0006-04A",
                    "sqmm": "4-6",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "3.5",
                    "palmWidth": "8",
                    "barrelLength": "6",
                    "totalLength": "17"
          },
          {
                    "code": "LX-CTFT-0006-04B",
                    "sqmm": "4-6",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "3.5",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CTFT-0006-05A",
                    "sqmm": "4-6",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "3.5",
                    "palmWidth": "10",
                    "barrelLength": "6",
                    "totalLength": "19"
          },
          {
                    "code": "LX-CTFT-0006-05B",
                    "sqmm": "4-6",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "3.5",
                    "palmWidth": "12",
                    "barrelLength": "6",
                    "totalLength": "22"
          },
          {
                    "code": "LX-CTFT-0006-06A",
                    "sqmm": "4-6",
                    "stud": "M6",
                    "studHole": "6.1",
                    "barrelId": "3.5",
                    "palmWidth": "12",
                    "barrelLength": "6",
                    "totalLength": "22"
          },
          {
                    "code": "LX-CTFT-0010-04A",
                    "sqmm": "10",
                    "stud": "M4",
                    "studHole": "4.1",
                    "barrelId": "4.3",
                    "palmWidth": "10",
                    "barrelLength": "8",
                    "totalLength": "22"
          },
          {
                    "code": "LX-CTFT-0010-05A",
                    "sqmm": "10",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "4.3",
                    "palmWidth": "10",
                    "barrelLength": "8",
                    "totalLength": "22"
          },
          {
                    "code": "LX-CTFT-0010-06A",
                    "sqmm": "10",
                    "stud": "M6",
                    "studHole": "6.1",
                    "barrelId": "4.3",
                    "palmWidth": "12",
                    "barrelLength": "8",
                    "totalLength": "23"
          },
          {
                    "code": "LX-CTFT-0010-08A",
                    "sqmm": "10",
                    "stud": "M8",
                    "studHole": "8.1",
                    "barrelId": "4.3",
                    "palmWidth": "16",
                    "barrelLength": "8",
                    "totalLength": "27"
          },
          {
                    "code": "LX-CTFT-0016-05A",
                    "sqmm": "16",
                    "stud": "M5",
                    "studHole": "5.1",
                    "barrelId": "5.6",
                    "palmWidth": "10",
                    "barrelLength": "10",
                    "totalLength": "24"
          },
          {
                    "code": "LX-CTFT-0016-06A",
                    "sqmm": "16",
                    "stud": "M6",
                    "studHole": "6.1",
                    "barrelId": "5.6",
                    "palmWidth": "12",
                    "barrelLength": "10",
                    "totalLength": "26"
          },
          {
                    "code": "LX-CTFT-0016-08A",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.1",
                    "barrelId": "5.6",
                    "palmWidth": "16",
                    "barrelLength": "10",
                    "totalLength": "30"
          },
          {
                    "code": "LX-CTFT-0016-08B",
                    "sqmm": "16",
                    "stud": "M8",
                    "studHole": "8.1",
                    "barrelId": "5.6",
                    "palmWidth": "18",
                    "barrelLength": "10",
                    "totalLength": "33"
          }
]
      }
    ]
  },
};
