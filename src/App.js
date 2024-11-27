import React, { useEffect, useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

import Index from './components/Index.jsx';
import Landing from './components/Landing.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [showHomepage, setShowHomepage] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#000000',
        contrastText: '#ffffff', // White text for primary palette
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000000', // Black text for secondary palette
      },
      text: {
        primary: '#ffffff', // Default font color (white)
      },
    },
    typography: {
      allVariants: {
        color: '#ffffff', // Ensure all Typography components use white text
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            color: '#ffffff', // White font color for Tabs
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#ffffff', // White font color for individual Tab
            '&.Mui-selected': {
              color: '#ffffff', // White font color when Tab is selected
            },
          },
        },
      },
      components: {
        MuiTabs: {
          styleOverrides: {
            root: {
              color: '#ffffff', // White font color for Tabs
            },
          },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              color: '#ffffff', // White font color for individual Tab
              '&.Mui-selected': {
                color: '#ffffff', // White font color when Tab is selected
              },
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary, // Ensure font color applies to all text
        }}
      >
        <CSSTransition
          in={!showHomepage}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Landing />
        </CSSTransition>
        <CSSTransition
          in={showHomepage}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Index style = {{color: theme.palette.text.primary}}/>
        </CSSTransition>
      </div>
    </ThemeProvider>
  );
}

export default App;
