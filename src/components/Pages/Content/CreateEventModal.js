import React, { useState, useEffect } from 'react';
import { Form, Button, Message, Modal, Segment, Header, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux'
import { useAPI } from '../../../hooks';
import { BACKEND } from '../../../config';

const regionColor = {
  "E": 'red',
  "N": 'blue',
  "M": 'green', 
  "S": 'brown',
  "SE": 'purple',
  "W": 'orange',
  "CZ": "teal"
};

const CreateEventModal = ({ region }) => {
  const [createState, create] = useAPI("text");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [beginTime, setBeginTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [amountText, setAmountText] = useState("")
  const [description, setDescription] = useState("");
  const { token, id: admin } = useSelector(state => state.user);

  useEffect(() => {
    if(error) {
      setTimeout(() => {
        setError(false);
        setErrMsg("");
      }, 3000);
    }
  }, [error])

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(isNaN(amountText)) {
      setError(true);
      setErrMsg("Input Amount is not a number !");
      return;
    }
    const amount = Math.round(parseInt(amountText));
    if(amount < 0) {
      setError(true);
      setErrMsg("Input Amount must > 0 !");
      return;
    }

    const begin =  Date.parse(date + " " + beginTime);
    const end =  Date.parse(date + " " + endTime);
    if(end <= begin) {
      setError(true);
      setErrMsg("End time should be later than begin time!");
      return;
    }
    
    if(description.length > 100) {
      setError(true);
      setErrMsg("Description too long (must < 100 words) !");
      return;
    }
    const body = { admin, region, name, location, date, begin, end, amount, description };
    console.log(body);
    create(
      BACKEND+"/event",
      "POST", 
      JSON.stringify(body), 
      {'authorization': token, 'content-type': "application/json"}
    )
  }

  return <>
    <Modal.Header>
      <Header as='h2' color={regionColor[region]} style={{paddingLeft: "5px"}}>
        {`Create Event at region ${region}`}
      </Header>
    </Modal.Header>
    <Modal.Content>
    <Segment textAlign='center' color={regionColor[region]}>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Form onSubmit={e => onSubmit(e)} loading={createState.loading}>
        <Form.Group widths="equal">
          <Form.Input type="text" label="Event name" required={true} placeholder="e.g. 研討會剩餘便當" id="name" onChange={e => { setName(e.target.value); }} />        
          <Form.Input type="text" label="Location" required={true} placeholder="e.g. 博理館 113" id="location" onChange={e => { setLocation(e.target.value); }} />        
        </Form.Group>
        {/* <Form.Field required>
        </Form.Field> */}
        <Form.Field required>
          <label>Date</label>
          <Form.Group widths="equal">
            <Form.Input type="date" required={true} id="date" onChange={e => { setDate(e.target.value); }} />
          </Form.Group>
          <label style={{ textDecoration: "none", marginBottom: "1em" }}>Time interval</label>
          <Form.Group widths="equal">
            <Form.Input type="time" required={true} id="timeBegin" onChange={e => { setBeginTime(e.target.value); }} />
            <Form.Input type="time" required={true} id="timeEnd" onChange={e => { setEndTime(e.target.value) }} />
          </Form.Group>
        </Form.Field>
        <Form.Field>
          <Form.Group widths="equal">
            <Form.Input type="text" label='Amount' required={true} id="amount" onChange={e => { setAmountText(e.target.value); }} />
          </Form.Group>
        </Form.Field>
        <Form.Field>
          <label>More details...</label>
          <Form.TextArea required={false} placeholder='More details or descriptions...( < 100 words)'  onChange={ e => { setDescription(e.target.value); }} />
        </Form.Field>
        {createState.error || error
          ?
          <Message negative>{error?errMsg:createState.errMsg}</Message>
          :
          null
        }
        {createState.success
          ?
          <Message positive>Create Event Success!</Message>
          :
          null
        }
        <Button animated='fade' color={regionColor[region]} basic type="submit" >
          <Button.Content visible>Create Event</Button.Content>
          <Button.Content hidden>
            <Icon name='add' />
            <Icon name='wordpress forms' />
          </Button.Content>
        </Button>
        {/* <Button color={regionColor[region]} basic type="submit" >
          Create
        </Button> */}
      </Form>
      </div>
    </Segment>
    </Modal.Content>
  </>;
}

export default CreateEventModal;
