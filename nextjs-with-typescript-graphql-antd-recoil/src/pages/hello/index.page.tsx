// import package modules
import Link from 'next/link';
import { Button, Col, Row, Typography } from 'antd';
import styled from 'styled-components';

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
    <HelloRow>
      <Col span={24}>{data?.hello}</Col>
      <Col span={24}>
        <Typography>{count}</Typography>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </Col>
      <Col span={24}>
        <Link href="/">back</Link>
      </Col>
    </HelloRow>
  );
}

export default nest(Provider, Hello);

const HelloRow = styled(Row)({});
