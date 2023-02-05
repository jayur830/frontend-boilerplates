// import package modules
import Link from 'next/link';
import { Button, Grid, styled, Typography } from '@mui/material';

// Import global modules
import { nest } from '@/utils';

// Import local modules
import { Provider, useContext } from './Provider';

function Hello() {
  const data = useContext((value) => value.data);
  const count = useContext((value) => value.count);
  const increase = useContext((value) => value.increase);
  const decrease = useContext((value) => value.decrease);

  return (
    <HelloContainer>
      <Typography>{data?.hello}</Typography>
      <Grid>
        <Typography>{count}</Typography>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </Grid>
      <Link href="/">back</Link>
    </HelloContainer>
  );
}

export default nest(Provider, Hello);

const HelloContainer = styled(Grid)({});
