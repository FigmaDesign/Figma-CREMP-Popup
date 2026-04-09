export interface WishlistItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  investmentRange: string;
  location: string;
  image: string;
  isVerified: boolean;
  addedAt: string;
}

export interface Folder {
  id: string;
  name: string;
  itemIds: string[];
}

export interface Folder {
  id: string;
  name: string;
  itemIds: string[];
}
