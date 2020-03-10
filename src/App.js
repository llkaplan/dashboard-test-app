import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './pages/pages/Dashboard';
import Login from './pages/pages/Login';
import './App.css';
import Theme from './utils/themeutil';
import { ThemeProvider } from '@material-ui/core';
import { Container } from '@material-ui/core';


class App extends Component {
  render() {
    //need to set to a function to see if user is logged in from passport when working
    const loggedIn = true /* this.state.isLoggedIn */;
    return (
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Container maxWidth="xl">
          {loggedIn ? <Dashboard /> : <Login />}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;