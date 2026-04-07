export interface WishlistItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  investmentRange: string;
  roi: string;
  paybackPeriod: string;
  monthlyRevenue: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  isVerified?: boolean;
  addedAt: string;
}

export interface Folder {
  id: string;
  name: string;
  itemIds: string[];
}
