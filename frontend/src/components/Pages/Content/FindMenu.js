import React, { useState, useEffect } from 'react';
import { Icon, Message, Segment, Image, Button, Card } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useAPI } from '../../../hooks';
import { BACKEND } from '../../../config';

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

const FindMenu = ({ region, connection }) => {
  const { loading, success, error, errMsg, response } = connection;
  const { token } = useSelector(state => state.user);
  const [ reconn, reconnect ] = useAPI('json');
  const [events, setEvents] = useState(response);

  const refresh = (evtId) => {
    reconnect(
      BACKEND + `/event/single?id=${evtId}`,
      "GET",
      null,
      { 'authorization': token, 'content-type': "application/json" }
    )
  }

  useEffect(() => {
    if(reconn.success) {
      console.log(reconn);
      const { _id, name, region, location, date, begin, end, amount, description } = reconn.response;
      const newEvents = events.map((evt, idx) => {
        if(evt._id === _id) {
          return { _id, name, region, location, date, begin, end, amount, description };
        }
        return evt;
      })
      setEvents(newEvents);
      console.log(newEvents);
    }
  }, [reconn])

  return <>
    {
      loading?
      <Segment loading>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
      :
      success?
      <Card.Group>
      {
        events.filter((evt) => evt.region === region || region === "ALL").map((evt, idx) => {
          return (
              <Card key={`${region}-${idx}`} color={regionColor[region]}>
                <Card.Content>
                  <Button icon floated='right' basic color={regionColor[region]} onClick={() => refresh(evt._id)}>
                    <Icon name='refresh' />
                  </Button>
                  <Card.Header>{evt.name}</Card.Header>
                  <Card.Meta>{evt.location}</Card.Meta>
                  <Card.Description>
                    <strong>date: </strong>{evt.date}
                    <br/>
                    <strong>amount: </strong>{evt.amount}
                    <br/>
                    <strong>description: </strong>{evt.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
          );
        })
      }
      </Card.Group>
      :
      error?
      <Message negative>{errMsg}</Message>
      :
      null
    }
  </>
}

export default FindMenu;