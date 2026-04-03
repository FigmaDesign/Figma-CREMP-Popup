// ...existing code...
import { 
  Storefront, Handyman, LocationOn, 
  LocalParking, Bolt, WaterDrop,
  Groups, RecordVoiceOver, Settings, Inventory, Campaign
} from '@mui/icons-material';

export const data = {
  basicInfo: {
    brandName: "Brew & Bites",
    tagline: "Premium Coffee & Artisanal Snacks",
    establishedYear: "2018",
    headquarters: "Mumbai, India",
    category: "Food & Beverage",
    subcategory: "Cafe",
    microCategory: "Premium Artisanal Cafe",
    website: "brewandbites.demo",
    socialLinks: { instagram: "@brewandbites", linkedin: "brewandbites" }
  },
  highlights: {
    investmentRange: "₹25L - ₹40L",
    franchiseFee: "₹5L",
    availableLocations: "Pan India",
    totalOutlets: "45+"
  },
  businessOverview: {
    description: "Brew & Bites is a rapidly expanding premium cafe chain known for its sustainably sourced artisanal coffee and freshly baked goods. We offer a modern, inviting ambiance with a high return on investment.",
    usps: [
      "Proprietary coffee blends directly sourced from estates",
      "High-margin artisanal bakery products",
      "Automated inventory and POS systems",
      "Strong brand recall and loyalty program"
    ],
    modelSummary: "We operate on an Asset-Light FOFO model focusing on high-footfall premium commercial zones and tech parks."
  },
  investmentDetails: [
    { item: "Franchise Fee", amount: "₹ 5,00,000" },
    { item: "Setup Cost", amount: "₹ 15,00,000" },
    { item: "Equipment Cost", amount: "₹ 8,00,000" },
    { item: "Interior Cost", amount: "₹ 10,00,000" },
    { item: "Working Capital", amount: "₹ 2,00,000" }
  ],
  totalInvestmentRange: "₹ 25L - ₹ 40L",
  franchiseModel: {
    modelType: "FOFO",
    unitType: "Single & Multi Unit"
  },
  outletRequirements: [
    { label: "Min Area", value: "800 sq ft", icon: <Storefront fontSize="small" /> },
    { label: "Max Area", value: "1500 sq ft", icon: <LocationOn fontSize="small" /> },
    { label: "Preferred Location", value: "High Street, Malls", icon: <LocationOn fontSize="small" /> },
    { label: "Parking", value: "Required (Min 2 cars)", icon: <LocalParking fontSize="small" /> },
    { label: "Power", value: "15-20 kW 3-Phase", icon: <Bolt fontSize="small" /> },
    { label: "Water", value: "Continuous Supply", icon: <WaterDrop fontSize="small" /> }
  ],
  territoryAvailability: {
    cities: "Tier 1 & Tier 2 Cities",
    regions: "North & West India",
    exclusive: "Yes (Pin-code based)",
    expansionPlans: "Targeting 100+ outlets by 2027"
  },
  existingNetwork: {
    totalUnits: "45",
    franchiseUnits: "38",
    companyUnits: "7",
    cities: "12 Cities"
  },
  conceptTags: ["Low Investment", "Premium", "Investor Friendly", "Quick ROI"],
  contact: {
    name: "Rohan Sharma",
    role: "Director of Sales",
    phone: "+91 98765 43210",
    email: "franchise@brewandbites.demo",
    whatsapp: "+91 98765 43210"
  },
  support: [
    {
      category: "Setup & Launch",
      icon: <Handyman fontSize="small" className="text-[#c5a059]" />,
      items: ["Site Selection", "Store Setup", "Licensing Support"]
    },
    {
      category: "Training",
      icon: <Groups fontSize="small" className="text-[#c5a059]" />,
      items: ["Initial Staff Training", "Ongoing Refresher Courses", "14 Days Duration"]
    },
    {
      category: "Operations",
      icon: <Settings fontSize="small" className="text-[#c5a059]" />,
      items: ["Standard SOPs provided", "Inventory Tracking", "24/7 Tech Support"]
    },
    {
      category: "Supply Chain",
      icon: <Inventory fontSize="small" className="text-[#c5a059]" />,
      items: ["Centralized", "Approved Local Vendors"]
    },
    {
      category: "Marketing",
      icon: <Campaign fontSize="small" className="text-[#c5a059]" />,
      items: ["Digital ad templates", "Launch Campaigns", "Brand Guidelines"]
    },
    {
      category: "Staffing",
      icon: <RecordVoiceOver fontSize="small" className="text-[#c5a059]" />,
      items: ["Hiring Assist", "Training Manuals"]
    }
  ]
};
