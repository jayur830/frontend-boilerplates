// import package modules
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Button, Col, Row, Typography } from 'antd';
import styled from 'styled-components';

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
    <HelloRow>
      <Col span={24}>{data?.hello}</Col>
      <Col span={24}>
        <Typography>{count}</Typography>
        <Button onClick={() => dispatch(increaseCount())}>+</Button>
        <Button onClick={() => dispatch(decreaseCount())}>-</Button>
      </Col>
      <Col span={24}>
        <Link href="/">back</Link>
      </Col>
    </HelloRow>
  );
}

export default nest(Provider, Hello);

const HelloRow = styled(Row)({});
