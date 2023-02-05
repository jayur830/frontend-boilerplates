// import package modules
import { PropsWithChildren, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Import global modules
import { Provider, useContext } from '@/contexts/Provider';
import { client } from '@/graphql/apollo';
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default nest(Provider, Layout);
