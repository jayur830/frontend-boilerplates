// import package modules
import Link from 'next/link';
import { Grid, styled, Typography } from '@mui/material';

// Import global modules
import { nest } from '@/utils';

// Import local modules
import { Provider, useContext } from './Provider';

function Hello() {
  const data = useContext((value) => value.data);

  return (
    <HelloContainer>
      <Typography>{data?.hello}</Typography>
      <Link href="/">back</Link>
    </HelloContainer>
  );
}

export default nest(Provider, Hello);

const HelloContainer = styled(Grid)({});
