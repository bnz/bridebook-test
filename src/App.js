import React, { Component } from 'react';
import Logo from './components/Logo';
import ThemeProvider from './fela/components/ThemeProvider';
import { bridebookTheme } from './themes/bridebook-theme';
import NotificationPageContainer from './components/NotificationPageContainer';
import Box from './fela/components/Box';
import Text from './fela/components/Text';
import { logo, header, app, title, intro } from './App.style';

const App = () => {
  const theme = bridebookTheme;
  return (
    <ThemeProvider theme={theme}>
      <Box style={app}>
        <Box style={header}>
          <Box>
            <Box style={{ alignItems: 'center' }}>
              <Text as="h2" style={title}>
                Welcome to <Logo /> Bridebook React/Fela test
              </Text>
            </Box>
          </Box>
        </Box>
        <Box style={{ maxWidth: '1000px', alignSelf: 'center' }}>
          <Box style={intro}>
            <Text as="p">
              Your task is to display different type of noitification when
              appropriate action is performed:
            </Text>
            <Box as="ul">
              <Box as="li" style={{ display: 'list-item' }}>
                <Text as="em">Error</Text> - When email incorrect email is
                submitted (`hello@bridebook`)
              </Box>
              <Box as="li" style={{ display: 'list-item' }}>
                <Text as="em">Warning</Text> - When you have unsaved /
                unsubmitted input field
              </Box>
              <Box as="li" style={{ display: 'list-item' }}>
                <Text as="em">Success</Text> - When email passed validation
                after submitting (`hello@bridebook.co.uk` and clear the fields
                and display success message)
              </Box>
            </Box>
            <Text as="p">
              There's an example of action and reducer when you start typing in
              input field, that adds `unsaved` warning notification to store,
              you just need to display it in Notification.js. Please refer to
              ROUGH notification designs in "./designs" folder on how
              notifications should look. It doesn't have to look exactly like in
              designs, please don't change existing button design in
              components/Button.js
            </Text>
            <Text as="p">
              Please use Fela nad flexbox. Please use colors from theme file.
            </Text>
            <Text as="p">
              Make sure notification can be hidden by pressing X cross button on
              notification.
            </Text>
          </Box>
          <hr />
          <NotificationPageContainer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
