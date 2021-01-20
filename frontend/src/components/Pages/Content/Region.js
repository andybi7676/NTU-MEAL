import React, { useState } from 'react';
import '../styles/Region.css';

const regionRGBary = [[205, 92, 92], [135, 206, 250], [50, 205, 50], [218, 165, 32], [138, 43, 226 ], [255, 140, 0], [32, 178, 170]]
const regionName = ["E", "N", "M", "S", "SE", "W", "CZ"];

const Region = ({x, y, idx, select}) => {
  const [regionStyle, setRegionStyle] = useState({
    left: `${x}px`,
    top: `${y}px`,
    backgroundColor: `rgba(${regionRGBary[idx][0]}, ${regionRGBary[idx][1]}, ${regionRGBary[idx][2]}, 0.5)`
  });

  const onHover = () => {
    setRegionStyle({
      left: `${x}px`,
      top: `${y}px`,
      backgroundColor: `rgba(${regionRGBary[idx][0]}, ${regionRGBary[idx][1]}, ${regionRGBary[idx][2]}, 0.2)`
    })
  }

  const unHover = () => {
    setRegionStyle({
      left: `${x}px`,
      top: `${y}px`,
      backgroundColor: `rgba(${regionRGBary[idx][0]}, ${regionRGBary[idx][1]}, ${regionRGBary[idx][2]}, 0.5)`
    })
  }

  return <div onMouseEnter={()=>onHover()} onMouseLeave={()=>unHover()} className='circle_div' style={regionStyle} onClick={() => select(regionName[idx])}>
    
  </div>
}

export default Region;