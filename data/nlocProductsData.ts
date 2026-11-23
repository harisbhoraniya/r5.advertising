export interface SizingRow {
  partNo: string;
  width: string;
  length: string;
  thickness: string;
  maxBundleDia: string;
  tensileStrength: string;
}

export interface SizingTable {
  title: string;
  subtitle?: string;
  finishType?: 'uncoated' | 'coated' | 'all';
  rows: SizingRow[];
}

export interface ProductDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  images: {
    uncoated: string;
    coated?: string;
  };
  features: string[];
  specs: {
    materialGrades: string;
    tempRangeUncoated?: string;
    tempRangeCoated?: string;
    tempRange: string;
    surfaceFinish: string;
    loopTensile: string;
    flammability: string;
    packaging: string;
  };
  applications: string[];
  tables: SizingTable[];
}

export const nlocProductsDetails: Record<string, ProductDetail> = {
  'roller-ball': {
    id: 'roller-ball',
    title: 'Roller Ball Cable Ties',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'SELF-LOCKING · ROLLER BALL',
    tagline: 'Precision self-locking roller ball mechanism engineered for fast, permanent, and secure fastening in demanding environments.',
    description: 'NAEPL N-LOC Roller Ball Cable Ties utilize an internal precision stainless steel ball mechanism that locks firmly at any point along the tie body. Engineered with smooth rounded edges to safeguard cable sheaths and operator hands, they deliver unmatched corrosion and thermal resistance across critical industrial installations.',
    images: {
      uncoated: '/assets/nloc/roller_ball_standard_transparent.webp',
      coated: '/assets/nloc/roller_ball_coated_black.webp',
    },
    features: [
      'Self-locking design for fast and secure installation.',
      'Fully enclosed head prevents dirt or grit from interfering with locking mechanism.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of cable insulation.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Fire proof for enhanced protection in demanding applications.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-60°C to +300°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-60°C to +300°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / Pure Polyester & Nylon Coated',
      loopTensile: '4.6mm: 445 N (100 lbs) | 7.9mm: 1112 N (250 lbs)',
      flammability: 'Fire-proof & Non-flammable',
      packaging: '100 Nos. per Bag (Custom bulk pack options available)',
    },
    applications: [
      'Offshore oil & gas rigs and maritime shipbuilding',
      'Industrial electrical switchgear and transformer routing',
      'Solar photovoltaic cable strings and wind turbine towers',
      'Mass rail transit systems, metro tunnels, and underground cable ducts',
      'Petrochemical refineries, chemical washdown processing plants',
    ],
    tables: [
      {
        title: 'Roller Ball Uncoated – 4.6mm Width',
        subtitle: 'Standard tensile strength (445 N) for general industrial routing',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NBU46-100', width: '4.6', length: '100', thickness: '0.25', maxBundleDia: '18', tensileStrength: '445 N' },
          { partNo: 'NBU46-127', width: '4.6', length: '127', thickness: '0.25', maxBundleDia: '27', tensileStrength: '445 N' },
          { partNo: 'NBU46-150', width: '4.6', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NBU46-200', width: '4.6', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NBU46-250', width: '4.6', length: '250', thickness: '0.25', maxBundleDia: '66', tensileStrength: '445 N' },
          { partNo: 'NBU46-300', width: '4.6', length: '300', thickness: '0.25', maxBundleDia: '82', tensileStrength: '445 N' },
          { partNo: 'NBU46-360', width: '4.6', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '445 N' },
          { partNo: 'NBU46-450', width: '4.6', length: '450', thickness: '0.25', maxBundleDia: '130', tensileStrength: '445 N' },
          { partNo: 'NBU46-520', width: '4.6', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '445 N' },
          { partNo: 'NBU46-680', width: '4.6', length: '680', thickness: '0.25', maxBundleDia: '203', tensileStrength: '445 N' },
          { partNo: 'NBU46-840', width: '4.6', length: '840', thickness: '0.25', maxBundleDia: '253', tensileStrength: '445 N' },
          { partNo: 'NBU46-1000', width: '4.6', length: '1000', thickness: '0.25', maxBundleDia: '304', tensileStrength: '445 N' },
        ],
      },
      {
        title: 'Roller Ball Uncoated – 7.9mm Width',
        subtitle: 'High tensile strength (1112 N) for heavy cable bundles',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NBU79-100', width: '7.9', length: '100', thickness: '0.25', maxBundleDia: '18', tensileStrength: '1112 N' },
          { partNo: 'NBU79-150', width: '7.9', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '1112 N' },
          { partNo: 'NBU79-200', width: '7.9', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NBU79-250', width: '7.9', length: '250', thickness: '0.25', maxBundleDia: '66', tensileStrength: '1112 N' },
          { partNo: 'NBU79-300', width: '7.9', length: '300', thickness: '0.25', maxBundleDia: '82', tensileStrength: '1112 N' },
          { partNo: 'NBU79-360', width: '7.9', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '1112 N' },
          { partNo: 'NBU79-450', width: '7.9', length: '450', thickness: '0.25', maxBundleDia: '130', tensileStrength: '1112 N' },
          { partNo: 'NBU79-520', width: '7.9', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '1112 N' },
          { partNo: 'NBU79-680', width: '7.9', length: '680', thickness: '0.25', maxBundleDia: '203', tensileStrength: '1112 N' },
          { partNo: 'NBU79-840', width: '7.9', length: '840', thickness: '0.25', maxBundleDia: '253', tensileStrength: '1112 N' },
          { partNo: 'NBU79-1000', width: '7.9', length: '1000', thickness: '0.25', maxBundleDia: '304', tensileStrength: '1112 N' },
        ],
      },
      {
        title: 'Roller Ball Coated – 4.6mm Width',
        subtitle: 'Pure polyester / nylon protective coating for galvanic insulation',
        finishType: 'coated',
        rows: [
          { partNo: 'NBC46-100', width: '4.6', length: '100', thickness: '0.25', maxBundleDia: '18', tensileStrength: '445 N' },
          { partNo: 'NBC46-150', width: '4.6', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NBC46-200', width: '4.6', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NBC46-250', width: '4.6', length: '250', thickness: '0.25', maxBundleDia: '66', tensileStrength: '445 N' },
          { partNo: 'NBC46-360', width: '4.6', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '445 N' },
          { partNo: 'NBC46-450', width: '4.6', length: '450', thickness: '0.25', maxBundleDia: '130', tensileStrength: '445 N' },
          { partNo: 'NBC46-520', width: '4.6', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '445 N' },
          { partNo: 'NBC46-680', width: '4.6', length: '680', thickness: '0.25', maxBundleDia: '203', tensileStrength: '445 N' },
          { partNo: 'NBC46-840', width: '4.6', length: '840', thickness: '0.25', maxBundleDia: '253', tensileStrength: '445 N' },
          { partNo: 'NBC46-1000', width: '4.6', length: '1000', thickness: '0.25', maxBundleDia: '304', tensileStrength: '445 N' },
        ],
      },
      {
        title: 'Roller Ball Coated – 7.9mm Width',
        subtitle: 'High tensile coated ties (1112 N) for severe outdoor exposure',
        finishType: 'coated',
        rows: [
          { partNo: 'NBC79-100', width: '7.9', length: '100', thickness: '0.25', maxBundleDia: '18', tensileStrength: '1112 N' },
          { partNo: 'NBC79-150', width: '7.9', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '1112 N' },
          { partNo: 'NBC79-200', width: '7.9', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NBC79-250', width: '7.9', length: '250', thickness: '0.25', maxBundleDia: '66', tensileStrength: '1112 N' },
          { partNo: 'NBC79-360', width: '7.9', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '1112 N' },
          { partNo: 'NBC79-450', width: '7.9', length: '450', thickness: '0.25', maxBundleDia: '130', tensileStrength: '1112 N' },
          { partNo: 'NBC79-520', width: '7.9', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '1112 N' },
          { partNo: 'NBC79-680', width: '7.9', length: '680', thickness: '0.25', maxBundleDia: '203', tensileStrength: '1112 N' },
          { partNo: 'NBC79-840', width: '7.9', length: '840', thickness: '0.25', maxBundleDia: '253', tensileStrength: '1112 N' },
          { partNo: 'NBC79-1000', width: '7.9', length: '1000', thickness: '0.25', maxBundleDia: '304', tensileStrength: '1112 N' },
        ],
      },
    ],
  },

  'roller-ball-hd': {
    id: 'roller-ball-hd',
    title: 'Roller Ball Heavy Duty Cable Ties',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · 12.7MM & 16MM',
    tagline: 'Extra heavy-gauge stainless steel cable ties engineered for extreme tensile restraint up to 3560 N (360 kg+).',
    description: 'Designed for high-mechanical-stress applications, NAEPL Roller Ball Heavy Duty Cable Ties feature reinforced band thicknesses up to 0.40 mm and broad 12.7 mm / 16 mm widths. They withstand intense electromagnetic short-circuit stresses, extreme wind loads, and heavy pipeline weight without deformation.',
    images: {
      uncoated: '/assets/nloc/roller_ball_hd_transparent.webp',
      coated: '/assets/nloc/roller_ball_hd_coated.webp',
    },
    features: [
      'Self-locking design for fast and secure installation under heavy loads.',
      'Fully enclosed head prevents dirt or grit from interfering with locking mechanism.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of cable insulation.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Fire proof for enhanced protection in demanding applications.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-60°C to +500°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-60°C to +500°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / Pure Polyester & Nylon Coated',
      loopTensile: '12.7mm: 3115 N (318 kg) | 16.0mm: 3560 N (363 kg)',
      flammability: 'Fire-proof & Non-flammable',
      packaging: '100 Nos. per Bag',
    },
    applications: [
      'Heavy industrial pipe insulation & cladding strapping',
      'High-voltage transmission line cabling and utility poles',
      'Offshore drilling platform marine risers',
      'Wind turbine tower down-tower power cabling',
    ],
    tables: [
      {
        title: 'Roller Ball Heavy Duty Uncoated – 12.7mm Width',
        subtitle: 'Tensile rating: 3115 N | Material thickness: 0.40 mm',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NBU12-100', width: '12.7', length: '100', thickness: '0.40', maxBundleDia: '18', tensileStrength: '3115 N' },
          { partNo: 'NBU12-150', width: '12.7', length: '150', thickness: '0.40', maxBundleDia: '34', tensileStrength: '3115 N' },
          { partNo: 'NBU12-200', width: '12.7', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '3115 N' },
          { partNo: 'NBU12-260', width: '12.7', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '3115 N' },
          { partNo: 'NBU12-360', width: '12.7', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3115 N' },
          { partNo: 'NBU12-520', width: '12.7', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3115 N' },
          { partNo: 'NBU12-680', width: '12.7', length: '680', thickness: '0.40', maxBundleDia: '203', tensileStrength: '3115 N' },
          { partNo: 'NBU12-840', width: '12.7', length: '840', thickness: '0.40', maxBundleDia: '253', tensileStrength: '3115 N' },
          { partNo: 'NBU12-1000', width: '12.7', length: '1000', thickness: '0.40', maxBundleDia: '304', tensileStrength: '3115 N' },
        ],
      },
      {
        title: 'Roller Ball Heavy Duty Uncoated – 16.0mm Width',
        subtitle: 'Tensile rating: 800 N | Material thickness: 0.40 mm',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NBU16-150', width: '16.0', length: '150', thickness: '0.40', maxBundleDia: '34', tensileStrength: '800 N' },
          { partNo: 'NBU16-200', width: '16.0', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '800 N' },
          { partNo: 'NBU16-260', width: '16.0', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '800 N' },
          { partNo: 'NBU16-360', width: '16.0', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '800 N' },
          { partNo: 'NBU16-520', width: '16.0', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '800 N' },
          { partNo: 'NBU16-620', width: '16.0', length: '620', thickness: '0.40', maxBundleDia: '183', tensileStrength: '800 N' },
          { partNo: 'NBU16-840', width: '16.0', length: '840', thickness: '0.40', maxBundleDia: '253', tensileStrength: '800 N' },
          { partNo: 'NBU16-1000', width: '16.0', length: '1000', thickness: '0.40', maxBundleDia: '304', tensileStrength: '800 N' },
        ],
      },
      {
        title: 'Roller Ball Heavy Duty Coated – 12.7mm Width',
        subtitle: 'Polyester / Nylon coated (3115 N) for galvanic insulation',
        finishType: 'coated',
        rows: [
          { partNo: 'NBC12-100', width: '12.7', length: '100', thickness: '0.40', maxBundleDia: '18', tensileStrength: '3115 N' },
          { partNo: 'NBC12-150', width: '12.7', length: '150', thickness: '0.40', maxBundleDia: '34', tensileStrength: '3115 N' },
          { partNo: 'NBC12-200', width: '12.7', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '3115 N' },
          { partNo: 'NBC12-260', width: '12.7', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '3115 N' },
          { partNo: 'NBC12-360', width: '12.7', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3115 N' },
          { partNo: 'NBC12-520', width: '12.7', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3115 N' },
          { partNo: 'NBC12-620', width: '12.7', length: '620', thickness: '0.40', maxBundleDia: '183', tensileStrength: '3115 N' },
          { partNo: 'NBC12-680', width: '12.7', length: '680', thickness: '0.40', maxBundleDia: '203', tensileStrength: '3115 N' },
          { partNo: 'NBC12-840', width: '12.7', length: '840', thickness: '0.40', maxBundleDia: '253', tensileStrength: '3115 N' },
          { partNo: 'NBC12-1000', width: '12.7', length: '1000', thickness: '0.40', maxBundleDia: '304', tensileStrength: '3115 N' },
        ],
      },
      {
        title: 'Roller Ball Heavy Duty Coated – 16.0mm Width',
        subtitle: 'Maximum loop tensile strength (3560 N) for extreme industrial cabling',
        finishType: 'coated',
        rows: [
          { partNo: 'NBC16-150', width: '16.0', length: '150', thickness: '0.40', maxBundleDia: '34', tensileStrength: '3560 N' },
          { partNo: 'NBC16-200', width: '16.0', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '3560 N' },
          { partNo: 'NBC16-260', width: '16.0', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '3560 N' },
          { partNo: 'NBC16-360', width: '16.0', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3560 N' },
          { partNo: 'NBC16-520', width: '16.0', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3560 N' },
          { partNo: 'NBC16-620', width: '16.0', length: '620', thickness: '0.40', maxBundleDia: '183', tensileStrength: '3560 N' },
          { partNo: 'NBC16-840', width: '16.0', length: '840', thickness: '0.40', maxBundleDia: '253', tensileStrength: '3560 N' },
          { partNo: 'NBC16-1000', width: '16.0', length: '1000', thickness: '0.40', maxBundleDia: '304', tensileStrength: '3560 N' },
        ],
      },
    ],
  },

  'releasable': {
    id: 'releasable',
    title: 'Releasable Cable Ties',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'REUSABLE · WING LOCK MECHANISM',
    tagline: 'Reusable stainless steel ties featuring wing-lock heads for temporary fastening, maintenance re-routing, and testing.',
    description: 'NAEPL Releasable Stainless Steel Cable Ties feature an innovative buckle with foldable wing-locks, allowing technicians to open, adjust, or replace cables multiple times without destroying the tie. Coated with specialized PPA 571 polymer, they provide exceptional stress-crack resistance and remain flexible even at -60°C.',
    images: {
      uncoated: '/assets/nloc/releasable_cable_tie.webp',
      coated: '/assets/nloc/releasable_cable_tie_coated.webp',
    },
    features: [
      'Releasable heads which can be reused many times over a long period of time.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of cable insulation.',
      'Remains flexible at -60°C.',
      'Resistant to stress cracking on bending (Elongation to break up to 800%).',
      'Excellent resistance to salt, sands, acids, temperature variations and chemicals.',
      'Flame retardant and nontoxic.',
      'Water absorption free.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-80°C to +150°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-80°C to +150°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / PPA 571 & Nylon Coated',
      loopTensile: '6.35mm: 1334 N – 2000 N | 9.35mm / 9.53mm: 2000 N',
      flammability: 'Flame retardant & non-toxic',
      packaging: '100 Nos. per Bag',
    },
    applications: [
      'Maintenance yards where cables require frequent addition or inspection',
      'Temporary construction and commissioning cable securing',
      'Marine cable trays and shipboard telecommunications',
    ],
    tables: [
      {
        title: 'Releasable Uncoated – 6.35mm Width',
        subtitle: 'Tensile rating: 2000 N | Reusable wing-lock head',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NRU66-152', width: '6.35', length: '152', thickness: '0.90', maxBundleDia: '34', tensileStrength: '2000 N' },
          { partNo: 'NRU66-229', width: '6.35', length: '229', thickness: '0.90', maxBundleDia: '59', tensileStrength: '2000 N' },
          { partNo: 'NRU66-305', width: '6.35', length: '305', thickness: '0.90', maxBundleDia: '91', tensileStrength: '2000 N' },
          { partNo: 'NRU66-457', width: '6.35', length: '457', thickness: '0.90', maxBundleDia: '129', tensileStrength: '2000 N' },
          { partNo: 'NRU66-610', width: '6.35', length: '610', thickness: '0.90', maxBundleDia: '177', tensileStrength: '2000 N' },
          { partNo: 'NRU66-762', width: '6.35', length: '762', thickness: '0.90', maxBundleDia: '225', tensileStrength: '2000 N' },
          { partNo: 'NRU66-914', width: '6.35', length: '914', thickness: '0.90', maxBundleDia: '273', tensileStrength: '2000 N' },
        ],
      },
      {
        title: 'Releasable Uncoated – 9.35mm Width',
        subtitle: 'Tensile rating: 2000 N | High loop strength reusable tie',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NRU96-152', width: '9.35', length: '152', thickness: '0.90', maxBundleDia: '34', tensileStrength: '2000 N' },
          { partNo: 'NRU96-229', width: '9.35', length: '229', thickness: '0.90', maxBundleDia: '59', tensileStrength: '2000 N' },
          { partNo: 'NRU96-305', width: '9.35', length: '305', thickness: '0.90', maxBundleDia: '91', tensileStrength: '2000 N' },
          { partNo: 'NRU96-457', width: '9.35', length: '457', thickness: '0.90', maxBundleDia: '129', tensileStrength: '2000 N' },
          { partNo: 'NRU96-610', width: '9.35', length: '610', thickness: '0.90', maxBundleDia: '177', tensileStrength: '2000 N' },
          { partNo: 'NRU96-762', width: '9.35', length: '762', thickness: '0.90', maxBundleDia: '225', tensileStrength: '2000 N' },
          { partNo: 'NRU96-914', width: '9.35', length: '914', thickness: '0.90', maxBundleDia: '273', tensileStrength: '2000 N' },
        ],
      },
      {
        title: 'Releasable Coated – 6.35mm Width',
        subtitle: 'PPA 571 / Nylon polymer coated (1334 N)',
        finishType: 'coated',
        rows: [
          { partNo: 'NRCP66-152', width: '6.35', length: '152', thickness: '0.50', maxBundleDia: '34', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-229', width: '6.35', length: '229', thickness: '0.50', maxBundleDia: '59', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-305', width: '6.35', length: '305', thickness: '0.50', maxBundleDia: '91', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-457', width: '6.35', length: '457', thickness: '0.50', maxBundleDia: '129', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-610', width: '6.35', length: '610', thickness: '0.50', maxBundleDia: '177', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-762', width: '6.35', length: '762', thickness: '0.50', maxBundleDia: '225', tensileStrength: '1334 N' },
          { partNo: 'NRCP66-914', width: '6.35', length: '914', thickness: '0.50', maxBundleDia: '273', tensileStrength: '1334 N' },
        ],
      },
      {
        title: 'Releasable Coated – 9.53mm Width',
        subtitle: 'PPA 571 coated heavy duty reusable tie (2000 N)',
        finishType: 'coated',
        rows: [
          { partNo: 'NRCP96-152', width: '9.53', length: '152', thickness: '0.90', maxBundleDia: '34', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-229', width: '9.53', length: '229', thickness: '0.90', maxBundleDia: '59', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-305', width: '9.53', length: '305', thickness: '0.90', maxBundleDia: '91', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-457', width: '9.53', length: '457', thickness: '0.90', maxBundleDia: '129', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-610', width: '9.53', length: '610', thickness: '0.90', maxBundleDia: '177', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-762', width: '9.53', length: '762', thickness: '0.90', maxBundleDia: '225', tensileStrength: '2000 N' },
          { partNo: 'NRCP96-914', width: '9.53', length: '914', thickness: '0.90', maxBundleDia: '273', tensileStrength: '2000 N' },
        ],
      },
    ],
  },

  'ladder': {
    id: 'ladder',
    title: 'Ladder Cable Ties',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'LADDER TYPE · MULTI-RUNG LOCK',
    tagline: 'Perforated ladder-slot profile providing flexible articulation and positive mechanical latching around bundles.',
    description: 'NAEPL Ladder Cable Ties feature precision-spaced rungs along the tie strap that engage with a multi-tooth locking head. This design delivers flexible banding capability, especially around irregularly shaped pipe transitions or cable groups, with consistent loop tensile resistance.',
    images: {
      uncoated: '/assets/nloc/ladder_cable_tie.webp',
      coated: '/assets/nloc/ladder_cable_tie_coated.webp',
    },
    features: [
      'Self-locking design for fast and secure installation.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of cable insulation.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Fire proof for enhanced protection in demanding applications.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-60°C to +300°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-60°C to +300°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / Pure Polyester Coated',
      loopTensile: '7.0mm: 445 N | 12.0mm: 1112 N',
      flammability: 'Fire-proof & Halogen-Free',
      packaging: '100 Nos. per Bag',
    },
    applications: [
      'Chemical and petrochem industrial cable ladders',
      'Commercial building vertical cable riser management',
      'HVAC ducting and flexible pipe bundle retention',
    ],
    tables: [
      {
        title: 'Ladder Cable Ties Uncoated – 7.0mm Width',
        subtitle: 'Mechanical ladder slots for positive grip (445 N)',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NLU76-150', width: '7.0', length: '150', thickness: '0.30', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NLU76-200', width: '7.0', length: '200', thickness: '0.30', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NLU76-225', width: '7.0', length: '225', thickness: '0.30', maxBundleDia: '58', tensileStrength: '445 N' },
          { partNo: 'NLU76-250', width: '7.0', length: '250', thickness: '0.30', maxBundleDia: '66', tensileStrength: '445 N' },
          { partNo: 'NLU76-300', width: '7.0', length: '300', thickness: '0.30', maxBundleDia: '80', tensileStrength: '445 N' },
          { partNo: 'NLU76-360', width: '7.0', length: '360', thickness: '0.30', maxBundleDia: '99', tensileStrength: '445 N' },
          { partNo: 'NLU76-450', width: '7.0', length: '450', thickness: '0.30', maxBundleDia: '128', tensileStrength: '445 N' },
          { partNo: 'NLU76-600', width: '7.0', length: '600', thickness: '0.30', maxBundleDia: '176', tensileStrength: '445 N' },
          { partNo: 'NLU76-1000', width: '7.0', length: '1000', thickness: '0.30', maxBundleDia: '303', tensileStrength: '445 N' },
        ],
      },
      {
        title: 'Ladder Cable Ties Uncoated – 12.0mm Width',
        subtitle: 'High loop strength ladder profile (1112 N)',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NLU126-150', width: '12.0', length: '150', thickness: '0.30', maxBundleDia: '34', tensileStrength: '1112 N' },
          { partNo: 'NLU126-200', width: '12.0', length: '200', thickness: '0.30', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NLU126-225', width: '12.0', length: '225', thickness: '0.30', maxBundleDia: '58', tensileStrength: '1112 N' },
          { partNo: 'NLU126-250', width: '12.0', length: '250', thickness: '0.30', maxBundleDia: '66', tensileStrength: '1112 N' },
          { partNo: 'NLU126-300', width: '12.0', length: '300', thickness: '0.30', maxBundleDia: '80', tensileStrength: '1112 N' },
          { partNo: 'NLU126-360', width: '12.0', length: '360', thickness: '0.30', maxBundleDia: '99', tensileStrength: '1112 N' },
          { partNo: 'NLU126-450', width: '12.0', length: '450', thickness: '0.30', maxBundleDia: '128', tensileStrength: '1112 N' },
          { partNo: 'NLU126-600', width: '12.0', length: '600', thickness: '0.30', maxBundleDia: '176', tensileStrength: '1112 N' },
          { partNo: 'NLU126-1000', width: '12.0', length: '1000', thickness: '0.30', maxBundleDia: '303', tensileStrength: '1112 N' },
        ],
      },
      {
        title: 'Ladder Cable Ties Coated – 7.0mm Width',
        subtitle: 'Pure polyester coated for marine & corrosive environments (445 N)',
        finishType: 'coated',
        rows: [
          { partNo: 'NLC76-150', width: '7.0', length: '150', thickness: '0.30', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NLC76-200', width: '7.0', length: '200', thickness: '0.30', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NLC76-225', width: '7.0', length: '225', thickness: '0.30', maxBundleDia: '58', tensileStrength: '445 N' },
          { partNo: 'NLC76-250', width: '7.0', length: '250', thickness: '0.30', maxBundleDia: '66', tensileStrength: '445 N' },
          { partNo: 'NLC76-300', width: '7.0', length: '300', thickness: '0.30', maxBundleDia: '80', tensileStrength: '445 N' },
          { partNo: 'NLC76-360', width: '7.0', length: '360', thickness: '0.30', maxBundleDia: '99', tensileStrength: '445 N' },
          { partNo: 'NLC76-450', width: '7.0', length: '450', thickness: '0.30', maxBundleDia: '128', tensileStrength: '445 N' },
          { partNo: 'NLC76-600', width: '7.0', length: '600', thickness: '0.30', maxBundleDia: '176', tensileStrength: '445 N' },
          { partNo: 'NLC76-1000', width: '7.0', length: '1000', thickness: '0.30', maxBundleDia: '303', tensileStrength: '445 N' },
        ],
      },
      {
        title: 'Ladder Cable Ties Coated – 12.0mm Width',
        subtitle: 'High tensile coated ladder profile (1112 N)',
        finishType: 'coated',
        rows: [
          { partNo: 'NLC126-150', width: '12.0', length: '150', thickness: '0.30', maxBundleDia: '34', tensileStrength: '1112 N' },
          { partNo: 'NLC126-200', width: '12.0', length: '200', thickness: '0.30', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NLC126-225', width: '12.0', length: '225', thickness: '0.30', maxBundleDia: '58', tensileStrength: '1112 N' },
          { partNo: 'NLC126-250', width: '12.0', length: '250', thickness: '0.30', maxBundleDia: '66', tensileStrength: '1112 N' },
          { partNo: 'NLC126-300', width: '12.0', length: '300', thickness: '0.30', maxBundleDia: '80', tensileStrength: '1112 N' },
          { partNo: 'NLC126-360', width: '12.0', length: '360', thickness: '0.30', maxBundleDia: '99', tensileStrength: '1112 N' },
          { partNo: 'NLC126-450', width: '12.0', length: '450', thickness: '0.30', maxBundleDia: '128', tensileStrength: '1112 N' },
          { partNo: 'NLC126-600', width: '12.0', length: '600', thickness: '0.30', maxBundleDia: '176', tensileStrength: '1112 N' },
          { partNo: 'NLC126-1000', width: '12.0', length: '1000', thickness: '0.30', maxBundleDia: '303', tensileStrength: '1112 N' },
        ],
      },
    ],
  },

  'zig-zag': {
    id: 'zig-zag',
    title: 'Ball Lock Spring Type Cable Ties',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'CONTOURED · HIGH VIBRATION',
    tagline: 'Contoured wave geometry engineered to absorb continuous industrial vibration and cyclic thermal bundle expansion.',
    description: 'NAEPL Ball Lock Spring Type (Zig-Zag) Cable Ties incorporate an undulating spring wave geometry along the tie strap. When fastened, this spring profile exerts continuous tension against the cable bundle, compensating for heat expansion and severe equipment vibration where rigid flat ties might loosen or cause sheath indentation.',
    images: {
      uncoated: '/assets/nloc/zig_zag_cable_tie_uncoated.jpg',
      coated: '/assets/nloc/zig_zag_cable_tie_coated.jpg',
    },
    features: [
      'Self-locking design for fast and secure installation.',
      'The unique spring form maintains greater installed tension on non-resilient objects.',
      'Fully enclosed head prevents dirt or grit from interfering with locking mechanism.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of cable insulation where tension on solid objects must be maintained.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Fire proof for enhanced protection in demanding applications.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-60°C to +300°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-60°C to +300°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / Pure Polyester Coated',
      loopTensile: '4.6mm: 445 N | 7.9mm: 1112 N',
      flammability: 'Fire-proof & Non-flammable',
      packaging: '100 Nos. per Bag',
    },
    applications: [
      'Locomotives, bogies, and rail vehicle underbody cabling',
      'Heavy vibratory screens, vibrating feeders, and crushing plants',
      'Automotive engine bays and exhaust-adjacent wiring routes',
      'Rotating industrial generators, pumps, and compressors',
    ],
    tables: [
      {
        title: 'Spring Type Uncoated – 4.6mm & 7.9mm Width',
        subtitle: 'Vibration-absorbing contoured spring tie (Metallic Finish)',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NZGU46-150', width: '4.6', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NZGU46-200', width: '4.6', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NZGU46-360', width: '4.6', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '445 N' },
          { partNo: 'NZGU79-200', width: '7.9', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NZGU79-360', width: '7.9', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '1112 N' },
          { partNo: 'NZGU79-520', width: '7.9', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '1112 N' },
        ],
      },
      {
        title: 'Spring Type Coated – 4.6mm & 7.9mm Width',
        subtitle: 'Black polyester coated for zero galvanic corrosion and vibration retention',
        finishType: 'coated',
        rows: [
          { partNo: 'NZGC46-150', width: '4.6', length: '150', thickness: '0.25', maxBundleDia: '34', tensileStrength: '445 N' },
          { partNo: 'NZGC46-200', width: '4.6', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '445 N' },
          { partNo: 'NZGC46-360', width: '4.6', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '445 N' },
          { partNo: 'NZGC79-200', width: '7.9', length: '200', thickness: '0.25', maxBundleDia: '50', tensileStrength: '1112 N' },
          { partNo: 'NZGC79-360', width: '7.9', length: '360', thickness: '0.25', maxBundleDia: '100', tensileStrength: '1112 N' },
          { partNo: 'NZGC79-520', width: '7.9', length: '520', thickness: '0.25', maxBundleDia: '151', tensileStrength: '1112 N' },
        ],
      },
    ],
  },

  'zig-zag-hd': {
    id: 'zig-zag-hd',
    title: 'Ball Lock Spring Type Heavy Duty',
    category: 'STAINLESS STEEL CABLE TIES',
    badge: 'HEAVY DUTY · HIGH VIBRATION',
    tagline: 'Heavy-duty spring-wave ties engineered for extreme vibration loads and high-capacity industrial power runs.',
    description: 'Combining the tension-retaining benefits of spring geometry with the sheer mechanical holding power of 12.7 mm and 16 mm heavy-duty straps, NAEPL Ball Lock Spring Type Heavy Duty Cable Ties are built for heavy cable runs subjected to intense vibration and demanding operational conditions.',
    images: {
      uncoated: '/assets/nloc/zig_zag_hd_cable_tie_uncoated.jpg',
      coated: '/assets/nloc/zig_zag_hd_cable_tie_coated.jpg',
    },
    features: [
      'Self-locking design for fast and secure installation under high load.',
      'The unique spring form maintains greater installed tension on non-resilient objects.',
      'Fully enclosed head prevents dirt or grit from interfering with locking mechanism.',
      'Smooth rounded edges for safe handling.',
      'Suitable for all types of heavy cable insulation.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Fire proof for enhanced protection in demanding applications.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRangeUncoated: '-60°C to +500°C',
      tempRangeCoated: '-60°C to +150°C',
      tempRange: '-60°C to +500°C (Uncoated) | -60°C to +150°C (Coated)',
      surfaceFinish: 'Metallic Uncoated / Pure Polyester Coated',
      loopTensile: '12.7mm: 3115 N | 16.0mm: 3560 N',
      flammability: 'Fire-proof & Non-flammable',
      packaging: '100 Nos. per Bag',
    },
    applications: [
      'Mining machinery, rock crushing equipment and vibrating conveyors',
      'Marine propulsion system cabling and engine room raceways',
      'High-speed rail bogie electrical connections',
    ],
    tables: [
      {
        title: 'Spring Type Heavy Duty Uncoated – 12.7mm & 16.0mm Width',
        subtitle: 'Uncoated heavy-gauge contoured strap (Tensile up to 3560 N)',
        finishType: 'uncoated',
        rows: [
          { partNo: 'NZGU12-200', width: '12.7', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '3115 N' },
          { partNo: 'NZGU12-360', width: '12.7', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3115 N' },
          { partNo: 'NZGU12-520', width: '12.7', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3115 N' },
          { partNo: 'NZGU16-260', width: '16.0', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '3560 N' },
          { partNo: 'NZGU16-360', width: '16.0', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3560 N' },
          { partNo: 'NZGU16-520', width: '16.0', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3560 N' },
        ],
      },
      {
        title: 'Spring Type Heavy Duty Coated – 12.7mm & 16.0mm Width',
        subtitle: 'Polyester coated heavy-gauge contoured strap (Tensile up to 3560 N)',
        finishType: 'coated',
        rows: [
          { partNo: 'NZGC12-200', width: '12.7', length: '200', thickness: '0.40', maxBundleDia: '50', tensileStrength: '3115 N' },
          { partNo: 'NZGC12-360', width: '12.7', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3115 N' },
          { partNo: 'NZGC12-520', width: '12.7', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3115 N' },
          { partNo: 'NZGC16-260', width: '16.0', length: '260', thickness: '0.40', maxBundleDia: '69', tensileStrength: '3560 N' },
          { partNo: 'NZGC16-360', width: '16.0', length: '360', thickness: '0.40', maxBundleDia: '100', tensileStrength: '3560 N' },
          { partNo: 'NZGC16-520', width: '16.0', length: '520', thickness: '0.40', maxBundleDia: '151', tensileStrength: '3560 N' },
        ],
      },
    ],
  },

  'marker-tag': {
    id: 'marker-tag',
    title: 'Cable Marker Tags & Carrier Strips',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'PERMANENT IDENTIFICATION',
    tagline: 'Corrosion-resistant stainless steel tags and modular carrier strips for permanent asset and cable identification.',
    description: 'NAEPL N-LOC Cable Marker Tags and Carrier Strips provide indelible, permanent identification for cables, pipelines, valves, and switchgear in harsh offshore and industrial environments. Easy to read even in low-light and high-dust areas, they slide directly onto cable ties to form an indestructible identification wrap.',
    images: {
      uncoated: '/assets/nloc/cable_marker_tag.webp',
    },
    features: [
      'Available in AISI 316 / 316L & 304 / 304L stainless steel.',
      'Easy to read in dim light and hard-to-reach places.',
      'Full range of individual letters, numbers and symbols.',
      'Fitted onto a variety of N-LOC cable ties.',
      'Slides directly onto cable ties to form a self-contained wrap tag.',
      'Carrier Strips let you build your own carrier, in multiple colours, for identification.',
      'Packaged quantity in 100 Nos. per Box / Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRange: '-80°C to +538°C Tested',
      surfaceFinish: 'Bright Stainless Steel (Uncoated & Coated Carrier Options)',
      loopTensile: 'Direct tie integration (Uses 4.6mm / 7.9mm cable ties)',
      flammability: 'Completely Non-flammable (Fireproof)',
      packaging: '100 Nos. per Box / Bag',
    },
    applications: [
      'Offshore drilling platforms, marine oil rigs, and FPSO vessels',
      'Petrochemical refineries, chemical plants, and fertilizer complexes',
      'Industrial piping, pneumatic lines, and high-voltage feeder identification',
    ],
    tables: [
      {
        title: 'Carrier Strips (Coated & Uncoated)',
        subtitle: 'Modular carrier strips for alphanumeric slide-in characters',
        finishType: 'all',
        rows: [
          { partNo: 'NLU06 / NLC06', width: '8.0', length: '92.5', thickness: '0.50', maxBundleDia: '7 Chars', tensileStrength: '100/Box' },
          { partNo: 'NLU10 / NLC10', width: '8.0', length: '132.5', thickness: '0.50', maxBundleDia: '12 Chars', tensileStrength: '100/Box' },
          { partNo: 'NLU12 / NLC12', width: '8.0', length: '152.5', thickness: '0.50', maxBundleDia: '14 Chars', tensileStrength: '100/Box' },
          { partNo: 'NLU16 / NLC16', width: '8.0', length: '192.5', thickness: '0.50', maxBundleDia: '19 Chars', tensileStrength: '100/Box' },
          { partNo: 'NLU22 / NLC22', width: '8.0', length: '252.5', thickness: '0.50', maxBundleDia: '26 Chars', tensileStrength: '100/Box' },
        ],
      },
    ],
  },

  'marker-plates': {
    id: 'marker-plates',
    title: 'Stainless Steel Marker Plates',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'LASER & EMBOSSED PLATES',
    tagline: 'Multi-line custom laser-etched and embossed marker plates engineered for lifetime readability in extreme environments.',
    description: 'NAEPL Stainless Steel Marker Plates are designed to identify conduits, valves, high-voltage cables, and industrial equipment. Custom-marked using computer-controlled laser etching or mechanical embossing systems, each plate provides permanent, abrasion-proof identification that withstands marine saltwater, corrosive chemicals, and harsh industrial environments.',
    images: {
      uncoated: '/assets/nloc/marker_plates.webp',
    },
    features: [
      'Available in AISI 316 / 316L & 304 / 304L stainless steel.',
      'Laser etching and mechanical embossing for permanent readability.',
      'Easy to read in dim light and hard-to-reach places.',
      'Identify pipes, conduit, valves, cables and equipment in harsh environments.',
      'Fitted onto a variety of N-LOC cable ties.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRange: '-80°C to +538°C Tested',
      surfaceFinish: 'Matte Stainless Steel with Deep Laser / Embossed Text',
      loopTensile: 'Mounting slots compatible with 4.6mm & 7.9mm ties',
      flammability: 'Completely Fireproof & Non-toxic',
      packaging: '100 Nos. per Bag / Box',
    },
    applications: [
      'Hazardous area equipment labeling in ATEX/IECEx zones',
      'Underground power cable circuit numbering',
      'Refinery valve and instrumentation tagging',
    ],
    tables: [
      {
        title: 'Marker Plates & Tags Dimensional Range',
        subtitle: 'Compatible with standard 4.6mm & 7.9mm stainless steel cable ties',
        finishType: 'all',
        rows: [
          { partNo: 'NL7407', width: '7.0', length: '74.0', thickness: '0.40', maxBundleDia: '1 Line', tensileStrength: 'Laser Only' },
          { partNo: 'NL8909', width: '9.5', length: '89.0', thickness: '0.40', maxBundleDia: '1 Line', tensileStrength: 'Embossed & Laser' },
          { partNo: 'NL5019', width: '19.0', length: '50.0', thickness: '0.40', maxBundleDia: '3 Lines', tensileStrength: 'Embossed & Laser' },
          { partNo: 'NL8919', width: '19.0', length: '89.0', thickness: '0.40', maxBundleDia: '3 Lines', tensileStrength: 'Embossed & Laser' },
          { partNo: 'NL6338', width: '38.0', length: '63.0', thickness: '0.40', maxBundleDia: '5 Lines', tensileStrength: 'Embossed & Laser' },
        ],
      },
    ],
  },

  'alphanumeric-characters': {
    id: 'alphanumeric-characters',
    title: 'Stainless Steel Alphanumeric Characters',
    category: 'IDENTIFICATION SYSTEMS',
    badge: 'EMBOSSED CHARACTERS',
    tagline: 'Individual embossed stainless steel characters, numerals, and symbols for flexible on-site carrier assembly.',
    description: 'NAEPL Stainless Steel Alphanumeric Characters allow field engineers to build custom tag configurations on site in minutes. With raised embossed letterforms that remain legible through dirt, paint, and grime, they slide directly onto N-LOC carrier strips and lock securely in place.',
    images: {
      uncoated: '/assets/nloc/alphanumeric_characters.jpg',
    },
    features: [
      'Available in AISI 316 / 316L & 304 / 304L stainless steel.',
      'Full range of individual letters (A–Z), numbers (0–9) and symbols (+, -, /, &, ~, ±, etc.).',
      'Raised embossed characters easy to read in dim light.',
      'Slides directly onto N-LOC carrier strips and locks securely.',
      'Ideal for applications where corrosion, vibration, radiation or extremes of temperature are a concern.',
      'Packaged quantity in 100 Nos. per Bag.',
    ],
    specs: {
      materialGrades: 'AISI 316 / 316L & AISI 304 / 304L Stainless Steel',
      tempRange: '-80°C to +538°C Tested',
      surfaceFinish: 'Embossed Stainless Steel',
      loopTensile: 'Mounts onto 8.0mm Carrier Strips',
      flammability: 'Completely Non-flammable (Fireproof)',
      packaging: '100 Nos. per Bag per character',
    },
    applications: [
      'On-site field assembly of custom cable markings',
      'Electrical control panel and marshalling box wiring tags',
      'Subsea cable and umbilical bundle marking',
    ],
    tables: [
      {
        title: 'Alphanumeric Character Range & Specifications',
        subtitle: 'Full range of embossed alphabets, digits, and symbols',
        finishType: 'all',
        rows: [
          { partNo: 'NLA to NLZ', width: '8.0', length: '12.0', thickness: '0.50', maxBundleDia: 'A to Z', tensileStrength: '100 / Bag' },
          { partNo: 'NL0 to NL9', width: '8.0', length: '12.0', thickness: '0.50', maxBundleDia: '0 to 9', tensileStrength: '100 / Bag' },
          { partNo: 'NL-SYM', width: '8.0', length: '12.0', thickness: '0.50', maxBundleDia: '>< ± / & + - ~', tensileStrength: '100 / Bag' },
          { partNo: 'NL-BLANK', width: '8.0', length: '12.0', thickness: '0.50', maxBundleDia: 'Blank Spacer', tensileStrength: '100 / Bag' },
        ],
      },
    ],
  },
};
