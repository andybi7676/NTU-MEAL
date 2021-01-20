import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Icon, Message, Segment, Image, Button, Card, Input, Confirm, Modal } from 'semantic-ui-react';
import { useAPI } from '../../../hooks';
import { BACKEND } from '../../../config';

const FindMine = () => {
  const { token } = useSelector(state => state.user);
  const [conn, connect] = useAPI('json');
  const [myEvents, setMyEvents] = useState([]);
  const [revisedAmount, setRevisedAmount] = useState("");
  const [openRevise, setOpenRevise] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [revisingEvent, setRevisingEvent] = useState(null);

  if (conn.isInit()) {
    connect(
      BACKEND + `/event/mine`,
      "GET",
      null,
      { 'authorization': token, 'content-type': "application/json" }
    );
  }

  const revise = () => {
    if(isNaN(revisedAmount) || revisedAmount === "") {
      alert('please input a number!');
      return;
    }
    const newAmount = Math.round(parseInt(revisedAmount));
    console.log(revisingEvent);
    console.log(newAmount);
    const body = { amount: newAmount };
    connect(
      BACKEND + `/event/revise?id=${revisingEvent._id}`,
      "POST",
      JSON.stringify(body),
      { 'authorization': token, 'content-type': "application/json" }
    )
    setRevisingEvent(null);
    setOpenRevise(false);
    setRevisedAmount("");
  }
  
  const deleteEvent = () => {
    connect(
      BACKEND + `/event/delete?id=${revisingEvent._id}`,
      "POST",
      null,
      { 'authorization': token, 'content-type': "application/json" }
    )
    setRevisingEvent(null);
    setOpenConfirm(false);
  }

  const startRevise = (evt) => {
    setOpenRevise(true);
    setRevisingEvent(evt);
  }
  
  const startDelete = (evt) => {
    setOpenConfirm(true);
    setRevisingEvent(evt);
  }

  const refresh = () => {
    console.log("refresh");
    connect(
      BACKEND + `/event/mine`,
      "GET",
      null,
      { 'authorization': token, 'content-type': "application/json" }
    )
    setRevisingEvent(null);
    setOpenConfirm(false);
    setOpenRevise(false);
    setRevisedAmount("");
  }
  
  useEffect(() => {
    console.log(conn);
    if(conn.success) {
      if(conn.response.delete === true) {
        refresh();
        return;
      }
      if(conn.response.revise === true) {
        refresh();
        return;
      }
      if(typeof(conn.response) === typeof([])){
        console.log("conn: ", conn.response);
        setMyEvents([ ...conn.response ]);
      }
    }
  }, [conn.response]);

  return <>
    {
      conn.loading?
      <Segment loading>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
      :
      conn.success?
      <>
      <Card.Group>
      {
        myEvents.map((evt, idx) => {
          return (
            <Card key={`MINE-${idx}`} color='black'>
              <Card.Content>
                <Button icon floated='right' basic color='black' onClick={() => refresh(evt._id, `MINE-${idx}`)}>
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
                  <Button basic color='green' onClick={() => startRevise(evt)} >
                    Revise
                  </Button>
                  <Button basic color='red' onClick={() => startDelete(evt)} >
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          );
        })
      }
      </Card.Group>
      </>
      :
      conn.error?
      <Message negative>{conn.errMsg}</Message>
      :
      null
    }
    <Confirm 
      open={openConfirm}
      onCancel={() => {setRevisingEvent(null); setOpenConfirm(false)}}
      onConfirm={() => deleteEvent()}
    />
    <Modal
      size='tiny'
      open={openRevise}
      onClose={() => {setOpenRevise(false);setRevisingEvent(null);setRevisedAmount(0)}}
    >
      <Modal.Header>Revise amount</Modal.Header>
      <Modal.Content>
        <Input type='text' placeholder='type in new amount' onChange={(e) => {setRevisedAmount(e.target.value)}} />
      </Modal.Content>
      <Modal.Actions>
        <Button floated='left' content='Confirm revise' primary onClick={() => revise()} />
        <Button onClick={() => {setOpenRevise(false);setRevisedAmount(0);setRevisingEvent(null)}} color='red'>
          <Icon name='close' /> close
        </Button>
      </Modal.Actions>
    </Modal>
  </>
}

export default FindMine;