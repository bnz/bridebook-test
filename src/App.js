import React, { Component } from 'react';
import Logo from './components/Logo';
import './App.styl';
import NotificationPageContainer from './components/NotificationPageContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="container">
            <div className="app-header-inner">
              <h2>Welcome to <Logo /> Bridebook React/Redux test</h2>
            </div>
          </div>
        </div>
        <div className="app-body">
          <div className="container">
            <div className="app-intro">
              <p>
                Your task is to display different type of noitification when appropriate button is clicked. There are 5 types of notificaitons:
              </p>
              <ul>
                <li><em>Error</em></li>
                <li><em>Warning</em></li>
                <li><em>Info</em></li>
                <li><em>Success</em></li>
                <li><em>Custom HTML</em> (Optional, do this one last)</li>
              </ul>
              <p>
                There's an example of action and reducer when you click "error" button. Please refer to designs in "./designs" folder on how notifications should look. Extra points if you use flexbox in your css.
              </p>
              <p>
                You can use icon font of your choice, icons shouldn't be exactly as in designs. Please try to use colors from "Variables.styl" file.
              </p>
              <p>
                Make sure notification can be hidden by pressing X cross button on notification.
              </p>
            </div>
            <hr />
            <NotificationPageContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
