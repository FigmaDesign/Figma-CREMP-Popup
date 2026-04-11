export type OpportunityType = 'all' | 'franchise-new' | 'running-business' | 'restaurant-lease';

export interface Listing {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  type: OpportunityType;
  investmentMin?: number;
  investmentMax?: number;
  salePrice?: number;
  monthlyRevenue?: number;
  monthlyRent?: number;
  areaMin?: number;
  areaMax?: number;
  area?: number;
  tags: string[];
  pinColor: 'blue' | 'gold';
  lat: number;
  lng: number;
  highlight?: string;
  equipmentIncluded?: boolean;
  ownerRelocating?: boolean;
}

export const listings: Listing[] = [
  {
    id: 'l1',
    name: 'Shawarma Zone',
    category: 'Middle Eastern',
    subCategory: 'Shawarma',
    type: 'franchise-new',
    investmentMin: 1000000,
    investmentMax: 1200000,
    areaMin: 200,
    areaMax: 300,
    tags: ['Small Outlet', 'High Street Location'],
    pinColor: 'blue',
    lat: 17.44,
    lng: 78.38,
  },
  {
    id: 'l2',
    name: 'Running Café for Sale',
    category: 'Food & Beverage',
    subCategory: 'Café',
    type: 'running-business',
    salePrice: 2500000,
    monthlyRevenue: 400000,
    area: 280,
    ownerRelocating: true,
    tags: [],
    pinColor: 'blue',
    lat: 17.435,
    lng: 78.42,
  },
  {
    id: 'l3',
    name: 'Restaurant for Lease',
    category: 'North Indian',
    subCategory: 'Restaurant',
    type: 'restaurant-lease',
    monthlyRent: 140000,
    area: 1300,
    equipmentIncluded: true,
    tags: [],
    pinColor: 'gold',
    lat: 17.455,
    lng: 78.46,
  },
  {
    id: 'l4',
    name: 'Tea Cart',
    category: 'Beverages',
    subCategory: 'Mobile Kiosk',
    type: 'franchise-new',
    investmentMin: 150000,
    investmentMax: 250000,
    areaMin: 50,
    areaMax: 100,
    tags: ['Kiosk', 'Low Investment'],
    pinColor: 'blue',
    lat: 17.475,
    lng: 78.37,
  },
  {
    id: 'l5',
    name: 'Ice Cream Franchise',
    category: 'Desserts',
    subCategory: 'Ice Cream',
    type: 'franchise-new',
    investmentMin: 800000,
    investmentMax: 1200000,
    areaMin: 150,
    areaMax: 250,
    tags: ['Premium', 'Mall Preferred'],
    pinColor: 'blue',
    lat: 17.44,
    lng: 78.40,
  },
  {
    id: 'l6',
    name: 'Runner: Quick Serve',
    category: 'Fast Food',
    subCategory: 'QSR',
    type: 'running-business',
    salePrice: 1500000,
    monthlyRevenue: 300000,
    area: 400,
    tags: ['High Traffic'],
    pinColor: 'blue',
    lat: 17.450,
    lng: 78.455,
  },
];

export const mapPins = [
  { id: 'cluster1', label: '14 Opportunities', count: 14, lat: 17.443, lng: 78.412, type: 'cluster' as const },
  { id: 'cluster2', label: '6 Opportunities', count: 6, lat: 17.45, lng: 78.455, type: 'cluster' as const },
  { id: 'pin1', label: 'Tea Cart', lat: 17.475, lng: 78.37, type: 'franchise' as const },
  { id: 'pin2', label: 'Ice Cream Franchise', lat: 17.44, lng: 78.4, type: 'franchise' as const },
  { id: 'pin3', label: 'Runner: ₹ 15 L', lat: 17.452, lng: 78.456, type: 'running' as const },
];

export const radiusOptions = ['1 km', '2 km', '3 km', '5 km', '10 km'];
export const budgetRanges = ['₹ 0 - 5L', '₹ 5L - 25L', '₹ 25L - 50L', '₹ 50L+'];
export const runnerOptions = ['All', 'Running Business', 'Franchise New'];
export const areaOptions = ['< 200 sq ft', '200 - 500 sq ft', '500 - 1000 sq ft', '1000+ sq ft'];
