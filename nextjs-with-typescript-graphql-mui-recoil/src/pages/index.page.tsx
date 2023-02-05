// import package modules
import Link from 'next/link';
import { Grid, styled, Typography } from '@mui/material';

// Import global modules

// Import local modules

export default function Index() {
  return (
    <IndexContainer>
      <Typography>index</Typography>
      <Link href="/hello">hello</Link>
    </IndexContainer>
  );
}

const IndexContainer = styled(Grid)({});
