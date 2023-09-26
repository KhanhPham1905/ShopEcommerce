import React from 'react';
import Image from 'next/image';

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import EditMeeting from './EditMeeting';
import Phanquyen from './Phanquyen';
import XuatExcel from './XuatExcel';
import Caidattinnhan from './Caidattinnhan';
import Huycuochop from './Huycuochop';
import Xoacuochop from './Xoacuochop';


const items: MenuProps['items'] = [
    {

        label: < EditMeeting />,

        key: '0',
    },
    {
        label: <Phanquyen />,
        key: '1',
    },
    {
        label: <XuatExcel />,
        key: '3',
    },
    {
        label: <Caidattinnhan />,
        key: '4',
    },

    {
        label: <Huycuochop />,
        key: '5',
    },
    {
        label: <Xoacuochop />,
        key: '6',
    },



];

const App: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']} className="img_dot">
        <a onClick={(e) => e.preventDefault()}>

            <Image width={26} height={26} alt=""
                src="/anh103.png"
            />

        </a>
    </Dropdown>
);

export default App;