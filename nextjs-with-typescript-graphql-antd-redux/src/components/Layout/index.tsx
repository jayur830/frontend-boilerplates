// import package modules
import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

// Import global modules
import { Provider } from '@/contexts/Provider';
import { client } from '@/graphql/apollo';
import { persistor, store } from '@/store';
import theme from '@/styles/theme.json';
import { nest } from '@/utils';

// Import local modules

function Layout({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default nest(Provider, Layout);
