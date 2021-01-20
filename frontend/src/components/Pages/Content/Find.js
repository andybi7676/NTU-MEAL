import React, { useState, useEffect } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { useAPI } from '../../../hooks';
import { useSelector } from 'react-redux';
import FindMap from './FindMap';
import FindMenu from './FindMenu';
import { BACKEND } from '../../../config';

const regionAry = ["ALL", "E", "N", "M", "S", "SE", "W", "CZ"];
const regionColor = {
  "MAP":'grey',
  "ALL": 'black',
  "E": 'red',
  "N": 'blue',
  "M": 'green', 
  "S": 'brown',
  "SE": 'purple',
  "W": 'orange',
  "CZ": "teal"
};

const Find = () => {
  const { token } = useSelector(state => state.user);
  const [selection, setSelection] = useState("MAP");
  const [connection, connect] = useAPI("json");
  const [events, setEvents] = useState([]);
  if (connection.isInit()) {
    connect(
      BACKEND + `/event/all`,
      "GET",
      null,
      { 'authorization': token, 'content-type': "application/json" }
    );
  }
  // let events = connection.response || [];
  useEffect(() => {
    console.log(connection);
    if(connection.success) {
      console.log(`Get response: ${connection.response}`);
      setEvents(connection.response || []);
    }
  }, [connection])

  const select = (name) => {
    setSelection(name);
  }

  return <>
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='MAP'
          active={selection === 'MAP'}
          onClick={() => select("MAP")}
        />
        {
          regionAry.map((region, idx) => (
            <Menu.Item
              key={idx}
              name={region}
              color={regionColor[region]}
              active={selection === region}
              onClick={() => select(region)}
            />
          ))
        }
      </Menu>
      {
        selection === 'MAP'?
        <Segment color={regionColor[selection]}>
          <FindMap select={select} />
        </Segment>
        :
        <FindMenu region={selection}  connection={connection} />
      }
    </div>
  </>
}

export default Find;