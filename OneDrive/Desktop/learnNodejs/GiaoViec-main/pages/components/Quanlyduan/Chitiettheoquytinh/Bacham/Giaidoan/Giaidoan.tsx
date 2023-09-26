import React from 'react';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Chinhsuagiaidoan from './Chinhsuagiaidoan';
import Danhgiagiaidoan from './Danhgiagiaidoan';
import Xoagiaidoan from './Xoagiaidoan';
import Quanlytuychon from './Quanlytuychon';

const items: MenuProps['items'] = [
    {
        label: <Chinhsuagiaidoan />,
        key: '0',
    },
    {
        label: <Danhgiagiaidoan />,
        key: '1',
    },

    {
        label: <Xoagiaidoan />,
        key: '2',
    },
    {
        label: <Quanlytuychon />,
        key: '3',
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