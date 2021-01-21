import React, { useState } from 'react';
import { Header, Menu, Image, Button, Sidebar, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

const mapStateToProps = (state) => ({
  hasLoggedin: state.user.token !== undefined,
  id: state.user.id,
  name: state.user.name,
  userGroup: state.user.group
})

const mapDispatchToProps = { logout };

const NavBar = ({ hasLoggedin, name, userGroup, logout }) => {
  console.log(hasLoggedin);

  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);
  return <div style={{background: "orange"}}>
    <Menu secondary >
      <Menu.Item
        as={Link} to="/"
      >
        <Header as='h2'>
          <Icon name='food' />
          <Header.Content>
            NTU - MEAL
            <Header.Subheader>Get meal, reduce waste!</Header.Subheader>
          </Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Menu position='right'>
      {
        hasLoggedin
        ?
        <Menu.Item>
          <Button animated color='grey' basic onClick={() => logout()} >
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name='sign-out alternate' />
            </Button.Content>
          </Button>
        </Menu.Item>
        :
        <>
          <Menu.Item >
          <Button.Group>
            <Button animated='fade' as={Link} to="/login" color='grey' basic >
              <Button.Content visible>&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</Button.Content>
              <Button.Content hidden>
                <Icon name='sign-in alternate' />
              </Button.Content>
            </Button>
            <Button animated='fade' as={Link} to="/register" color='grey' basic >
              <Button.Content visible>Register</Button.Content>
              <Button.Content hidden>
                <Icon name='add user' />
              </Button.Content>
            </Button>
          </Button.Group>
          </Menu.Item>
        </>
      }
      </Menu.Menu>
    </Menu>
  </div>
  {/* 
  const sideBar = (
    <Sidebar
      as={Menu}
      animation='overlay'
      direction="right"
      inverted
      onHide={hide}
      vertical
      visible={visible}
      width='thin'
      icon='labeled'
    >
      <Menu.Item as={Link} onClick={hide} to="/home">
        <Icon name='user' />
        {name}
      </Menu.Item>
      <Menu.Item as={Link} onClick={hide} to="/">
        <Icon name='home' color="olive" />
        Info
      </Menu.Item>
      <Menu.Item as={Link} onClick={hide} to="/participatedEvents">
        <Icon name='list' color="teal" />
        Events
      </Menu.Item>
      <Menu.Item as={Link} onClick={hide} to="/tickets">
        <Icon name='food' color="orange" />
        Food Tickets
      </Menu.Item>
      <Menu.Item as={Link} onClick={hide} to="/home">
        <Icon name='dollar' color="yellow" />
        Transactions
      </Menu.Item>
      <Menu.Item
        name='wallet'
        as={Link} to="/receive"
        onClick={hide}
      >
        <Icon name='qrcode' color="grey" />
        My QRcode
      </Menu.Item>
      <Menu.Item
        onClick={() => {hide(); logout();}}
      >
        <Icon name='sign-out' color="grey" />
        Logout
      </Menu.Item>
    </Sidebar>
  )

  const mainBar = userGroup === "user"
    ?
    <React.Fragment>
      <Responsive className="hamburger" maxWidth={767}>
        <Button icon inverted basic onClick={() => setVisible(true)}>
          <Icon name="sidebar" size="big" />
        </Button>
        {sideBar}
      </Responsive>
      <Responsive minWidth={768}>
        {userDesktopMenu}
      </Responsive>
    </React.Fragment>
    :
    (
      <div className="welcome-text">
        Hello,&nbsp;
        <Link className="welcome-link" to={'/home'}>{name}</Link>
        &nbsp;!&nbsp;
        <Button basic inverted className="small-link" onClick={_ => logout()} >Logout</Button>
      </div>
    );

  return (
    <div className="navbar">
      <Image src="/logo.png" as='a' href='/' size='medium' className="logo" />
      {hasLoggedin
        ?
        mainBar
        :
        <React.Fragment>
          <Link class="link" to="/login" >Login</Link>
          <Link class="link" to="/register" >Register</Link>
        </React.Fragment>
      }
    </div>
  ); */}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);