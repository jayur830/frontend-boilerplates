// import package modules
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Button, Grid, styled, Typography } from '@mui/material';

// Import global modules
import { nest } from '@/utils';

// Import local modules
import { decreaseCount, increaseCount } from './countSlice';
import { Provider, useContext } from './Provider';

function Hello() {
  const dispatch = useDispatch();
  const data = useContext((value) => value.data);
  const count = useContext((value) => value.count);

  return (
    <HelloContainer>
      <Typography>{data?.hello}</Typography>
      <Grid>
        <Typography>{count}</Typography>
        <Button onClick={() => dispatch(increaseCount())}>+</Button>
        <Button onClick={() => dispatch(decreaseCount())}>-</Button>
      </Grid>
      <Link href="/">back</Link>
    </HelloContainer>
  );
}

export default nest(Provider, Hello);

const HelloContainer = styled(Grid)({});
