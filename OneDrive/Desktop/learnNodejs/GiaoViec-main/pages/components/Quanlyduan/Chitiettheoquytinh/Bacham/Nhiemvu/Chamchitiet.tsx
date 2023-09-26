import React from 'react';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Suanhiemvu from './Suanhiemvu';
import Xoanv from './Xoanv';



const items: MenuProps['items'] = [
    {
        label: < Suanhiemvu />,
        key: '0',
    },
    {
        label: < Xoanv />,
        key: '1',
    },

];

const App: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
            <Image width={24} height={24} alt='' src="/anh103.png" style={{ marginRight: 10 }} />
        </a>
    </Dropdown>
);

export default App;