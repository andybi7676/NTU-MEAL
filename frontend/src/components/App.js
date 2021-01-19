import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login, Register, AutoLogin, Welcome, MainPage } from '../components';
// import { 

// } from '../containers';

const mapStateToProps = (state) => ({
  hasLoggedIn: state.user.token !== undefined,
})

const mustLogin = (hasLoggedIn, Tag) => {
  if(hasLoggedIn) return Tag;
  else return <Redirect to="/" />;
}

function App({hasLoggedIn}) {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/">
            {/*hasLoggedIn?
              <MainPage />
              :
              <Welcome />
            */}
            {hasLoggedIn?<MainPage />:<Welcome />}
          </Route>
          <Route exact path="/login">
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const [email, password] = [query.get("email"), query.get("password")];
              if(email && password) return <AutoLogin email={email} password={password} />;
              else return <Login />;
            }}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/:unknown">
            {({ match }) => {
              return <strong>{`${match.params.unknown} Not Found!`}</strong>;
            }}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);
