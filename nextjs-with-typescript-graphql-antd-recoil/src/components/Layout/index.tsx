// import package modules
import { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

// Import global modules
import { Provider } from '@/contexts/Provider';
import { client } from '@/graphql/apollo';
import theme from '@/styles/theme.json';
import { nest } from '@/utils';

// Import local modules

function Layout({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default nest(Provider, Layout);
