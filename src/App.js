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
                Your task is to display different type of noitification when appropriate action is performed:
              </p>
              <ul>
                <li>
                  <em>Error</em>
                  {' '}
                  - When email incorrect email is submitted (`hello@bridebook`)
                </li>
                <li>
                  <em>Warning</em>
                  {' '}- When you have unsaved / unsubmitted input field
                </li>
                <li>
                  <em>Success</em>
                  {' '}
                  - When email passed validation after submitting (`hello@bridebook.co.uk` and clear the fields and display success message)
                </li>
                <li>
                  <em>Custom HTML</em>
                  {' '}
                  - Add ability to pass custom html to notification box (Optional, do this one last if have time)
                </li>
              </ul>
              <p>
                There's an example of action and reducer when you start typing in input field, that adds `unsaved` warning notification to store, you just need to display it in Notification.js. Please refer to ROUGH notification designs in "./designs" folder on how notifications should look. Extra points if you use flexbox in your css.
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
