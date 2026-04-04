import React, { useState } from 'react';
import { Collapse } from '@mui/material';

import Hero from './Hero/Hero';
import StatsBar from './StatsBar/StatsBar';
import MediaGallery from './ExpandedDetails/MediaGallery';
import InfoSection from './ExpandedDetails/InfoSection';
import { expandedSections } from './data';

const TopSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full pt-1">
      <Hero expanded={expanded} />
      
      <StatsBar 
        expanded={expanded} 
        onToggle={() => setExpanded((prev) => !prev)} 
      />

      <Collapse in={expanded} timeout={500} unmountOnExit>
        <div className="">
          <MediaGallery />
          
          {expandedSections.map((section) => (
            <InfoSection key={section.title} {...section} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default TopSection;