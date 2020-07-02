import React, { Component } from "react";
import './App.css';
import { Link, Switch } from 'react-router-dom';
import RouthFile from "./routhComponent/routhFile";
import Login from "./login/login";
import { Route } from "react-router";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adminToken: null
    }
  }

  componentDidMount() {
    this.setState({
      adminToken: localStorage.getItem('adminToken')
    })

  }

  render() {
    let outputHtml = null;

    if (this.state.adminToken == null) {
      return outputHtml = (
        <div>
          <Login />
        </div>
      )
    } else {
      return outputHtml = (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></Link>
                  {/* <a className="nav-link" href="#">Home </a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/games'>Games </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/tag'>Tag </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>

          <RouthFile />

        </div>
      )
    }


    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
          {...rest}
          render={({ location }) =>
            fakeAuth.isAuthenticated ? (
              children
            ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
          }
        />
      );
    }


    return (
      <div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/home">
            {outputHtml}
          </PrivateRoute>
        </Switch>
      </div>

    );
  }
}

export default App;
