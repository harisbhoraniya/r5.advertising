export interface AluminiumEnclosureRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  mountingPlate: boolean;
  dinRailT15: boolean;
  dinRailT35: boolean;
  hingesSet: boolean;
  mountingBracket: boolean;
}

export interface MildSteelJunctionBoxRow {
  partNo: string;
  enclosureH: string;
  enclosureW: string;
  enclosureD: string;
  panelH: string;
  panelW: string;
}

export interface StainlessSteelJunctionBoxRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  weight: string;
}

export interface PushButtonPanelRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  weight: string;
  holes: string;
}

export const aluminiumEnclosuresData: AluminiumEnclosureRow[] = [
  { partNo: 'NLB-ALE-01', width: '45', length: '50', height: '30', mountingPlate: false, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-02', width: '64', length: '58', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-03', width: '64', length: '98', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-04', width: '64', length: '150', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-05', width: '80', length: '75', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-06', width: '80', length: '125', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-07', width: '80', length: '175', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-08', width: '80', length: '250', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-09', width: '100', length: '100', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-10', width: '100', length: '160', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-11', width: '100', length: '200', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-12', width: '120', length: '122', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-13', width: '120', length: '122', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-14', width: '120', length: '220', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-15', width: '120', length: '220', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-16', width: '140', length: '140', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-17', width: '140', length: '200', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-18', width: '160', length: '160', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-19', width: '160', length: '260', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-20', width: '160', length: '360', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
];

export const mildSteelJunctionBoxesData: MildSteelJunctionBoxRow[] = [
  { partNo: 'NLB-MSJ-001', enclosureH: '4.00"', enclosureW: '4.00"', enclosureD: '3.00"', panelH: '—', panelW: '—' },
  { partNo: 'NLB-MSJ-002', enclosureH: '6.00"', enclosureW: '4.00"', enclosureD: '3.00"', panelH: '4.88"', panelW: '2.88"' },
  { partNo: 'NLB-MSJ-003', enclosureH: '8.00"', enclosureW: '6.00"', enclosureD: '3.50"', panelH: '6.75"', panelW: '4.88"' },
  { partNo: 'NLB-MSJ-004', enclosureH: '4.00"', enclosureW: '4.00"', enclosureD: '4.00"', panelH: '—', panelW: '—' },
  { partNo: 'NLB-MSJ-005', enclosureH: '6.00"', enclosureW: '4.00"', enclosureD: '4.00"', panelH: '4.88"', panelW: '2.88"' },
  { partNo: 'NLB-MSJ-006', enclosureH: '6.00"', enclosureW: '6.00"', enclosureD: '4.00"', panelH: '4.88"', panelW: '4.88"' },
  { partNo: 'NLB-MSJ-007', enclosureH: '10.00"', enclosureW: '8.00"', enclosureD: '4.00"', panelH: '8.75"', panelW: '6.88"' },
  { partNo: 'NLB-MSJ-008', enclosureH: '12.00"', enclosureW: '10.00"', enclosureD: '5.00"', panelH: '10.75"', panelW: '8.88"' },
  { partNo: 'NLB-MSJ-009', enclosureH: '14.00"', enclosureW: '12.00"', enclosureD: '6.00"', panelH: '12.75"', panelW: '10.88"' },
];

export const stainlessSteelJunctionBoxesData: StainlessSteelJunctionBoxRow[] = [
  { partNo: 'NLB-SSJ-001', width: '100', length: '100', height: '90', weight: '1.1' },
  { partNo: 'NLB-SSJ-002', width: '100', length: '150', height: '90', weight: '1.3' },
  { partNo: 'NLB-SSJ-003', width: '100', length: '200', height: '90', weight: '1.5' },
  { partNo: 'NLB-SSJ-004', width: '150', length: '150', height: '90', weight: '1.5' },
  { partNo: 'NLB-SSJ-005', width: '150', length: '150', height: '120', weight: '2.0' },
  { partNo: 'NLB-SSJ-006', width: '150', length: '200', height: '90', weight: '1.8' },
  { partNo: 'NLB-SSJ-007', width: '150', length: '300', height: '90', weight: '2.3' },
  { partNo: 'NLB-SSJ-008', width: '200', length: '200', height: '90', weight: '2.1' },
];

export const pushButtonPanelsData: PushButtonPanelRow[] = [
  { partNo: 'NLB-PBP-001', width: '100', length: '100', height: '90', weight: '1.1', holes: '1' },
  { partNo: 'NLB-PBP-002', width: '100', length: '150', height: '90', weight: '1.3', holes: '2' },
  { partNo: 'NLB-PBP-003', width: '100', length: '200', height: '90', weight: '1.5', holes: '3' },
  { partNo: 'NLB-PBP-004', width: '100', length: '300', height: '90', weight: '1.9', holes: '4' },
  { partNo: 'NLB-PBP-005', width: '150', length: '150', height: '90', weight: '1.5', holes: '2x2' },
  { partNo: 'NLB-PBP-006', width: '150', length: '200', height: '90', weight: '1.8', holes: '2x3' },
  { partNo: 'NLB-PBP-007', width: '150', length: '300', height: '90', weight: '2.3', holes: '2x4' },
];
