// import package modules
import { PropsWithChildren, useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

// Import global modules
import { Provider, useContext } from '@/contexts/Provider';
import { client } from '@/graphql/apollo';
import { persistor, store } from '@/store';
import { nest } from '@/utils';

// Import local modules

function Layout({ children }: PropsWithChildren) {
  const isDarkMode = useContext((value) => value.isDarkMode);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: "'Pretendard', sans-serif",
      },
    });
  }, [isDarkMode]);

  return (
    <ReduxProvider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default nest(Provider, Layout);
