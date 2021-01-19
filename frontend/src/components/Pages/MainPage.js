import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Icon, Divider, Image, Segment, Container, Grid, Table, Label } from 'semantic-ui-react';
import { BACKEND } from '../../config';
import { useAPI } from '../../hooks';


const MainPage = () => {
  const { token, id: userId, name: userName, email: userEmail } = useSelector(state => state.user);
  console.log("Mainpage: ", token, userId, userName, userEmail);
  return <>
    <Header>
      {
        userName
      }
    </Header>
    <p>
      {`userId: ${userId}, userEmail: ${userEmail}`}
    </p>
  </>
}

export default MainPage;