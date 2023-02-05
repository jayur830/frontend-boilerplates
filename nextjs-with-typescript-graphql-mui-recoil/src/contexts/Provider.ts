import { useState } from 'react';

import { createProvider } from '@/utils';

function useApp() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  return { isDarkMode, setDarkMode };
}

export const { Provider, useContext } = createProvider(useApp);
