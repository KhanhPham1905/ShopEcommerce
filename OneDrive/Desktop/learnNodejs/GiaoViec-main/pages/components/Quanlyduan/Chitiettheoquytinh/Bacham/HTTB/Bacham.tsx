import React from 'react';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Quanlytuychon from './Quanlytuychon';


const items: MenuProps['items'] = [
    {
        label: < Quanlytuychon />,
        key: '0',
    },

];

const App: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
            <Image width={4} height={13} alt='' src="/3cham.png" style={{ marginRight: 10 }} />
        </a>
    </Dropdown>
);

export default App;