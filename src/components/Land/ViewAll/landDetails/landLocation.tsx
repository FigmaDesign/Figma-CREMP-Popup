import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TrainIcon from '@mui/icons-material/Train';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface LocationItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  distance: string;
}

const nearbyPlaces: LocationItem[] = [
  { icon: <TrainIcon sx={{ fontSize: 14 }} />, label: 'Metro Station', value: 'Green Valley Metro', distance: '2.5 km' },
  { icon: <LocalAirportIcon sx={{ fontSize: 14 }} />, label: 'Airport', value: 'Rajiv Gandhi Intl', distance: '18 km' },
  { icon: <SchoolIcon sx={{ fontSize: 14 }} />, label: 'Schools', value: '5+ Institutions', distance: '3 km' },
  { icon: <LocalHospitalIcon sx={{ fontSize: 14 }} />, label: 'Hospital', value: 'Care Hospital', distance: '4 km' },
  { icon: <ShoppingCartIcon sx={{ fontSize: 14 }} />, label: 'Shopping', value: 'City Center Mall', distance: '5 km' },
  { icon: <DirectionsCarIcon sx={{ fontSize: 14 }} />, label: 'Highway', value: 'ORR Exit 15', distance: '1.5 km' },
];

const LandLocation: React.FC = () => {
  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col pb-2">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5">
          <div className="w-1 h-4 bg-gradient-to-b from-[#1c2a44] to-[#D4AF37] rounded" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight">
            Location &amp; Connectivity
          </h3>
        </div>

        <div className="flex flex-col gap-1 px-4 pt-1">
          {nearbyPlaces.map((place, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-1.5 rounded-[4px] hover:bg-[#f1f5f9] hover:border-[#1c2a44]/10 transition-all duration-200 group cursor-default"
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-[4px] bg-white  text-[#1c2a44] shrink-0 group-hover:bg-[#1c2a44] group-hover:text-white transition-all duration-200">
                {React.cloneElement(place.icon as React.ReactElement<any>, {
                  color: 'inherit',
                  className: 'transition-colors duration-200 group-hover:text-white text-inherit'
                })}
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[0.7rem] font-bold text-[#1c2a44] truncate leading-tight">
                  {place.value}
                </span>
                <span className="text-[0.55rem] font-bold text-[#1c2a44]/50 tracking-wider truncate">
                  {place.label}
                </span>
              </div>

              <div className="w-12 h-[22px] flex items-center justify-center bg-white rounded border border-[#D4AF37]/30 shrink-0">
                <span className="text-[0.65rem] font-bold text-[#D4AF37] tracking-tight whitespace-nowrap">
                  {place.distance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandLocation;