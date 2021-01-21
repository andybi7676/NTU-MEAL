import React, { useState } from 'react';
import { useMeasure } from 'react-use';
import "../styles/Create.css";
import { Modal, Button, Icon } from 'semantic-ui-react';
import CreateEventModal from './CreateEventModal';
import ntuMap from '../../../images/ntu_map2.jpg';
import Draggable from 'react-draggable';
import Region from './Region';

const regionAry = [[854, 277], [571, 269], [490, 398], [702.5, 507.5], [933.5, 517], [220, 531], [219, 117]];
const mapW = 1200;
const mapH = mapW * 3543 / 4961;

const regionColor = {
  "E": 'red',
  "N": 'blue',
  "M": 'green', 
  "S": 'brown',
  "SE": 'purple',
  "W": 'orange',
  "CZ": "teal"
};

const Create = () => {
  const [ selection, setSelection ] = useState("");
  const [ open, setOpen ] = useState(false);
  const [ ref, { width, height } ] = useMeasure();

  const select = (name) => {
    setOpen(true);
    setSelection(name);
  }

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
    <Modal 
      color={regionColor[selection]}
      dimmer='inverted'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <CreateEventModal region={selection} />
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} color='red'>
          <Icon name='close' /> close
        </Button>
      </Modal.Actions>
    </Modal>
  </>
}

export default Create;