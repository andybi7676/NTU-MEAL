import React from 'react';
import { useMeasure } from 'react-use';
import "../styles/Create.css";
import ntuMap from '../../../images/ntu_map2.jpg';
import Draggable from 'react-draggable';
import Region from './Region';

const regionAry = [[854, 277], [571, 269], [490, 398], [702.5, 507.5], [933.5, 517], [220, 531], [219, 117]];
const mapW = 1200;
const mapH = mapW * 3543 / 4961;

const FindMap = ({select}) => {
  const [ ref, { width, height } ] = useMeasure();

  const boundStyle = {left: -(mapW - width)/2, right: (mapW - width)/2, top: -(mapH - height), bottom: 0 };

  return <>
    <div className='flex_div container' ref={ref} >
      <Draggable bounds={boundStyle}>
        <div className='inline_div'>
          <img src={ntuMap} alt="use this map to select event region" className="background_img"/>
          {
            regionAry.map((location, idx) => {
              return <Region key={idx} idx={idx} x={location[0]} y={location[1]} select={select} />
            })
          }
        </div>
      </Draggable>
    </div>
  </>
}

export default FindMap;