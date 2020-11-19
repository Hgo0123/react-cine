import React, { useState } from 'react';

import '../styles/globals.scss';

import themeContext from '../contexts/theme.tsx';
import setThemeContext from '../contexts/setTheme.tsx';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <themeContext.Provider value={theme}>
        <setThemeContext.Provider value={setTheme}>
          <div className={`appContainer ${theme}`}>
            <Header />
            <Component {...pageProps} />
          </div>
        </setThemeContext.Provider>
      </themeContext.Provider>
    </>
  );
}

export default MyApp;
