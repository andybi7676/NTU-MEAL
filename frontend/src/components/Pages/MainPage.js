import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Header, Icon, Divider, Image, Segment, Container, Grid, Label, Menu, Sticky } from 'semantic-ui-react';
import { BACKEND } from '../../config';
import { useAPI } from '../../hooks';

const MainPage = () => {
  const contextRef = useRef(null);
  const [activeItem, setActiveItem] = useState('Find');
  const select = (name) => {
    console.log(name);
    setActiveItem(name);
  }
  
  // console.log("Mainpage: ", token, userId, userName, userEmail);
  return <div style={{paddingTop: "2vh", paddingLeft: "2vh", paddingRight: "2vh"}} ref={contextRef}>
    <Grid columns={4} divided >
    <Grid.Row>
      <Grid.Column width={4} style={{paddingRight: "0px", zIndex:'1'}}>
        <Sticky context={contextRef}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='Find'
              active={activeItem === 'Find'}
              onClick={(e, {name}) => select(name)}
            >
              <Header as='h4' style={{padding: "1vh"}}>
                <Icon name='search' />
                <Header.Content>
                  Find
                </Header.Content>
              </Header>
            </Menu.Item>
            <Menu.Item
              name='Create'
              active={activeItem === 'Create'}
              onClick={(e, {name}) => select(name)}
            >
              <Header as='h4' style={{padding: "1vh"}}>
                <Icon name='bullhorn' />
                <Header.Content>
                  Create
                </Header.Content>
              </Header>
            </Menu.Item>
            <Menu.Item
              name='Account'
              active={activeItem === 'Account'}
              onClick={(e, {name}) => select(name)}
            >
              <Header as='h4' style={{padding: "1vh"}}>
                <Icon name='user circle' />
                <Header.Content>
                  Account
                </Header.Content>
              </Header>
            </Menu.Item>
            <Menu.Item
              name='About'
              active={activeItem === 'About'}
              onClick={(e, {name}) => select(name)}
            >
              <Header as='h4' style={{padding: "1vh"}}>
                <Icon name='info circle' />
                <Header.Content>
                  About
                </Header.Content>
              </Header>
            </Menu.Item>
          </Menu>
        </Sticky>
      </Grid.Column>
      <Divider vertical />
      <Grid.Column stretched width={12}>
        <Segment>
          This is an stretched grid column. This segment will always match the
          tab height
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
        </Segment>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default MainPage;