// import package modules
import Link from 'next/link';
import { Col, Row } from 'antd';
import styled from 'styled-components';

// Import global modules
import { nest } from '@/utils';

// Import local modules
import { Provider, useContext } from './Provider';

function Hello() {
  const data = useContext((value) => value.data);

  return (
    <HelloRow>
      <Col span={24}>{data?.hello}</Col>
      <Col span={24}>
        <Link href="/">back</Link>
      </Col>
    </HelloRow>
  );
}

export default nest(Provider, Hello);

const HelloRow = styled(Row)({});
