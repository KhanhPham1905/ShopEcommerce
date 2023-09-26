import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

import TrucTiep from "./TrucTiep"
import TrucTuyen from "./TrucTuyen"
const items: MenuProps['items'] = [
    {
        label: < TrucTiep />,

        key: '0',
    },
    {
        label: <TrucTuyen />,
        key: '1',
    },





];

const Btn_themmoi = ({ selectedColor }: { selectedColor: string }) => (

    <Dropdown menu={{ items }} trigger={['click']} >
        <a onClick={(e) => e.preventDefault()}>
            <button className={` add_work ${selectedColor}`}>
                + Thêm mới
            </button>
        </a>
    </Dropdown>

);

export default Btn_themmoi;