export interface CleatSizingRow {
  partNo: string;
  minDia: string;
  midDia: string;
  maxDia: string;
  height: string;
  width: string;
}

export interface CleatWithstandRow {
  maxSpacing: string;
  ratings: Record<string, string>; // column key -> kA value
}

export interface CleatSizingTable {
  title: string;
  subtitle?: string;
  headers: string[];
  rows: CleatSizingRow[];
}

export interface CableCleatProductDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  formation: 'Trefoil Formation' | 'Single Cable Formation';
  features: string[];
  specs: {
    frameMaterial: string;
    boltsFasteners: string;
    lockingSystem: string;
    cushioningPad: string;
    shortCircuitWithstand: string;
    operatingTemp: string;
    impactResistance: string;
    flameResistance: string;
    standards: string;
  };
  applications: string[];
  tables: CleatSizingTable[];
  withstandTable?: {
    title: string;
    subtitle: string;
    spacingHeaders: string[]; // 23, 25, 27, ..., 61
    rows: {
      maxSpacing: string; // 225, 300, 450, 600, 675, 900 mm
      values: string[];
    }[];
  };
}

export const cableCleatsCatalogItems = [
  {
    id: 'trefoil-cleat',
    title: 'Trefoil Cable Cleats',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'TREFOIL FORMATION · IEC 61914',
    tagline: 'High-strength composite and 316L stainless steel cleats engineered for three-phase single-core cable bundles.',
    image: '/assets/cable_cleats/cable_cleats_hero_hd.webp',
    link: '/products/cable-cleat/trefoil-cleat',
    cableRange: '18 mm to 128 mm Outer Diameter',
    shortCircuit: 'Up to 180 kA Peak @ 300 mm Spacing',
  },
  {
    id: 'single-cleat',
    title: 'Single Cable Cleats',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'SINGLE FORMATION · HIGH RETENTION',
    tagline: 'Engineered for secure single-cable runs, delivering exceptional mechanical stability and short-circuit protection.',
    image: '/assets/cable_cleats/single_cable_cleat_product.webp',
    link: '/products/cable-cleat/single-cleat',
    cableRange: '32 mm to 150 mm Outer Diameter',
    shortCircuit: 'Up to 274 kA Peak Tested',
  },
];

export const cableCleatsProductsDetails: Record<string, CableCleatProductDetail> = {
  'trefoil-cleat': {
    id: 'trefoil-cleat',
    slug: 'trefoil-cleat',
    title: 'Trefoil Cable Cleats',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'TREFOIL FORMATION · SHORT-CIRCUIT TESTED',
    tagline: 'Engineered to secure three-phase trefoil cable arrangements and withstand catastrophic electromagnetic short-circuit repulsion forces up to 180 kA peak.',
    description: 'NAEPL Trefoil Cable Cleats are designed to securely restrain and support three single-core power cables arranged in a triangular (trefoil) configuration along cable trays, ladders, or structural steelwork. Built with a heavy-duty 50 × 2.1 mm marine-grade AISI 316L stainless steel perimeter frame and an integral Low Smoke Zero Halogen (LSZH) cushioning pad, they prevent cable sheath degradation while safeguarding personnel and equipment during short-circuit faults.',
    image: '/assets/cable_cleats/cable_cleats_hero_hd.webp',
    formation: 'Trefoil Formation',
    features: [
      'Composite body with a robust 50 × 2.1 mm marine-grade AISI 316L stainless steel frame.',
      'Supplied with marine-grade 316L stainless steel M8, M10, or M12 fasteners and nylon lock nuts.',
      'Integral Low-Smoke Low-Fume Zero-Halogen (LSZH / LSOH) cushioning pad prevents damage to soft cable sheaths.',
      'Withstands dynamic electromagnetic fault surges up to 180 kA peak at 300 mm spacing (125 kA at 600 mm spacing).',
      'Fully compliant with international short-circuit restraint standard IEC 61914.',
      'Passes 30-second needle flame fire safety test (Self-Extinguishing, Non-Propagating).',
      'Single-bolt mounting design allows rapid installation using standard metric wrenches.',
    ],
    specs: {
      frameMaterial: '50 × 2.1 mm Marine Grade AISI 316L Stainless Steel & High-Strength Composite',
      boltsFasteners: 'AISI 316L Stainless Steel M8 / M10 / M12 Bolts (Mounting Hardware Supplied)',
      lockingSystem: 'Self-Locking Nylon Insert Lock Nuts for Vibration-Proof Retention',
      cushioningPad: 'Integral Low Smoke, Zero Halogen (LSZH / LSOH) Cushioning Pad',
      shortCircuitWithstand: '180 kA Peak @ 300 mm Spacing | 125 kA Peak @ 600 mm Spacing',
      operatingTemp: '-40°C to +60°C Operating Temperature Tested',
      impactResistance: 'High Impact Resistance (Certified for Heavy Mechanical Loads)',
      flameResistance: 'Passes 30-second needle flame test (Self-Extinguishing, Non-Propagating)',
      standards: 'IEC 61914 Compliant (Cable Cleats for Electrical Installations)',
    },
    applications: [
      'Cable Tray & Heavy Ladder Racks',
      'Power Distribution & Substations',
      'Industrial Switchgear & Transformers',
      'Solar Photovoltaic Inverter Skids',
      'Wind Turbine Down-Tower Cables',
      'Offshore Oil & Gas Rigs & Marine Vessels',
      'Underground Metro & High-Speed Rail Transit',
      'Petrochemical & Industrial Processing Plants',
      'Short-Circuit Electromechanical Protection',
    ],
    tables: [
      {
        title: 'Trefoil Cable Cleats Dimensional & Sizing Specifications',
        subtitle: 'Brochure specifications for trefoil formation cable range (18 mm to 128 mm OD)',
        headers: ['Part Number', 'Min. Cable Dia (mm)', 'Mid. Cable Dia (mm)', 'Max. Cable Dia (mm)', 'Height H (mm)', 'Width W (mm)'],
        rows: [
          { partNo: 'NCC-T1823', minDia: '18', midDia: '20', maxDia: '23', height: '79', width: '82' },
          { partNo: 'NCC-T2328', minDia: '23', midDia: '25', maxDia: '28', height: '84', width: '93' },
          { partNo: 'NCC-T2732', minDia: '27', midDia: '29', maxDia: '32', height: '91', width: '99' },
          { partNo: 'NCC-T3035', minDia: '30', midDia: '33', maxDia: '35', height: '96', width: '103' },
          { partNo: 'NCC-T3338', minDia: '33', midDia: '35', maxDia: '38', height: '101', width: '107' },
          { partNo: 'NCC-T3642', minDia: '36', midDia: '38', maxDia: '42', height: '107', width: '113' },
          { partNo: 'NCC-T4046', minDia: '40', midDia: '44', maxDia: '46', height: '114', width: '119' },
          { partNo: 'NCC-T4450', minDia: '44', midDia: '47', maxDia: '50', height: '121', width: '126' },
          { partNo: 'NCC-T4855', minDia: '48', midDia: '51', maxDia: '55', height: '129', width: '137' },
          { partNo: 'NCC-T5158', minDia: '51', midDia: '53', maxDia: '58', height: '134', width: '143' },
          { partNo: 'NCC-T5562', minDia: '55', midDia: '57', maxDia: '62', height: '141', width: '152' },
          { partNo: 'NCC-T5966', minDia: '59', midDia: '64', maxDia: '66', height: '148', width: '161' },
          { partNo: 'NCC-T6370', minDia: '63', midDia: '65', maxDia: '70', height: '155', width: '169' },
          { partNo: 'NCC-T6774', minDia: '67', midDia: '69', maxDia: '74', height: '161', width: '178' },
          { partNo: 'NCC-T7178', minDia: '71', midDia: '73', maxDia: '78', height: '168', width: '186' },
          { partNo: 'NCC-T7482', minDia: '74', midDia: '76', maxDia: '82', height: '175', width: '195' },
          { partNo: 'NCC-T7785', minDia: '77', midDia: '80', maxDia: '85', height: '180', width: '202' },
          { partNo: 'NCC-T8288', minDia: '82', midDia: '84', maxDia: '88', height: '185', width: '208' },
          { partNo: 'NCC-T8896', minDia: '88', midDia: '92', maxDia: '96', height: '199', width: '225' },
          { partNo: 'NCC-T96103', minDia: '96', midDia: '100', maxDia: '103', height: '210', width: '240' },
          { partNo: 'NCC-T103111', minDia: '103', midDia: '107', maxDia: '111', height: '224', width: '258' },
          { partNo: 'NCC-T111119', minDia: '111', midDia: '115', maxDia: '119', height: '237', width: '275' },
          { partNo: 'NCC-T119128', minDia: '119', midDia: '124', maxDia: '128', height: '253', width: '295' },
        ],
      },
    ],
  },

  'single-cleat': {
    id: 'single-cleat',
    slug: 'single-cleat',
    title: 'Single Cable Cleats',
    category: 'POWER CABLE ACCESSORIES',
    badge: 'SINGLE FORMATION · HIGH RETENTION',
    tagline: 'Heavy-duty single conductor cable cleats engineered for secure individual power cable routing and high fault-current restraint.',
    description: 'NAEPL Single Cable Cleats deliver robust, vibration-proof retention for individual single-core and multi-conductor cables in electrical switchgear, cable trays, and transformer feeds. Engineered with an AISI 316L stainless steel frame, high-impact composite body, and low-smoke halogen-free liner, they provide reliable lateral and axial restraint against destructive short-circuit magnetic surges.',
    image: '/assets/cable_cleats/single_cable_cleat_product.webp',
    formation: 'Single Cable Formation',
    features: [
      'Engineered for single-conductor cable retention across power distribution and control panels.',
      'Heavy-duty composite body with 50 × 2.1 mm AISI 316L marine-grade stainless steel frame.',
      'Integral LSZH (Low Smoke Zero Halogen) liner prevents cable sheath pinching and damage.',
      'Accommodates large single cables from 32 mm up to 150 mm outer diameter.',
      'Withstands extreme electromagnetic forces with tested peak ratings up to 274 kA IP Peak.',
      'Passes rigid lateral and axial load pull tests compliant with IEC 61914.',
      'Temperature rated from -40°C to +60°C for extreme indoor and outdoor industrial duty.',
    ],
    specs: {
      frameMaterial: '50 × 2.1 mm Marine Grade AISI 316L Stainless Steel & High-Strength Composite',
      boltsFasteners: 'AISI 316L Stainless Steel M8 / M10 / M12 Bolts (Mounting Hardware Supplied)',
      lockingSystem: 'Nylon Insert Lock Nuts ensuring vibration-resistant fastening',
      cushioningPad: 'Integral Low Smoke, Zero Halogen (LSZH / LSOH) Cushioning Liner',
      shortCircuitWithstand: 'Tested up to 274 kA IP Peak (refer to Spacing vs Conductor Distance Table)',
      operatingTemp: '-40°C to +60°C Operating Temperature Tested',
      impactResistance: 'High Mechanical Impact Resistance Rating',
      flameResistance: 'Passes 30-second needle flame test (Self-Extinguishing)',
      standards: 'IEC 61914 Compliant (Cable Cleats for Electrical Installations)',
    },
    applications: [
      'Cable Tray & Ladder Systems',
      'High-Voltage Power Distribution',
      'Control & Switchgear Panels',
      'Heavy Industrial Facilities',
      'Solar PV & Inverter Skids',
      'Wind Turbines & Nacelles',
      'Marine & Shipbuilding',
      'Underground Duct & Transit Ducts',
      'Dynamic Short-Circuit Restraint',
    ],
    tables: [
      {
        title: 'Single Cable Cleats Dimensional & Sizing Specifications',
        subtitle: 'Brochure specifications for single cable conductor range (32 mm to 150 mm OD)',
        headers: ['Part Number', 'Min. Cable Dia (mm)', 'Mid. Cable Dia (mm)', 'Max. Cable Dia (mm)', 'Height H (mm)', 'Width W (mm)'],
        rows: [
          { partNo: 'NCC-S3239', minDia: '32', midDia: '35', maxDia: '39', height: '74', width: '81' },
          { partNo: 'NCC-S3745', minDia: '37', midDia: '40', maxDia: '45', height: '77', width: '88' },
          { partNo: 'NCC-S4452', minDia: '44', midDia: '47', maxDia: '52', height: '83', width: '94' },
          { partNo: 'NCC-S5159', minDia: '51', midDia: '54', maxDia: '59', height: '87', width: '102' },
          { partNo: 'NCC-S5866', minDia: '58', midDia: '61', maxDia: '66', height: '91', width: '110' },
          { partNo: 'NCC-S6573', minDia: '65', midDia: '68', maxDia: '73', height: '97', width: '116' },
          { partNo: 'NCC-S7385', minDia: '73', midDia: '75-79', maxDia: '85', height: '101', width: '131' },
          { partNo: 'NCC-S8494', minDia: '84', midDia: '86-90', maxDia: '94', height: '110', width: '140' },
          { partNo: 'NCC-S94118', minDia: '94', midDia: '98-106', maxDia: '118', height: '134', width: '163' },
          { partNo: 'NCC-S118130', minDia: '118', midDia: '120-124', maxDia: '130', height: '146', width: '175' },
          { partNo: 'NCC-S127150', minDia: '127', midDia: '131-139', maxDia: '150', height: '166', width: '195' },
        ],
      },
    ],
    withstandTable: {
      title: 'Single Conductor Short-Circuit Withstand Capability',
      subtitle: 'Peak current rating (IP Peak in kA) based on cleat spacing and conductor center-to-center distance (from brochure Page 33)',
      spacingHeaders: ['23', '25', '27', '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55', '57', '59', '61'],
      rows: [
        { maxSpacing: '225 mm', values: ['168', '175', '182', '189', '195', '201', '207', '213', '219', '224', '230', '235', '240', '245', '250', '255', '260', '265', '269', '274'] },
        { maxSpacing: '300 mm', values: ['145', '152', '158', '163', '169', '174', '180', '185', '190', '194', '199', '204', '208', '212', '217', '221', '225', '229', '233', '237'] },
        { maxSpacing: '450 mm', values: ['119', '124', '129', '133', '138', '142', '146', '151', '155', '159', '162', '166', '170', '173', '177', '180', '184', '187', '190', '194'] },
        { maxSpacing: '600 mm', values: ['103', '107', '111', '115', '119', '123', '127', '130', '134', '137', '141', '144', '147', '150', '153', '156', '159', '162', '165', '168'] },
        { maxSpacing: '675 mm', values: ['97', '101', '105', '109', '112', '116', '119', '123', '126', '129', '133', '136', '139', '141', '144', '147', '150', '153', '155', '158'] },
        { maxSpacing: '900 mm', values: ['84', '87', '91', '94', '97', '100', '103', '106', '109', '112', '115', '117', '120', '122', '125', '127', '130', '132', '134', '137'] },
      ],
    },
  },
};
