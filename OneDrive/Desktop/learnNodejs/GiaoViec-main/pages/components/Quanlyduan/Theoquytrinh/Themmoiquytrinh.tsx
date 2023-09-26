import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import Themquytrinh from './Themquytrinh';
import Themquytrinhtheomau from './Themquytrinhtheomau';


const items: MenuProps['items'] = [
    {

        label: < Themquytrinh />,

        key: '0',
    },
    {
        label: <Themquytrinhtheomau />,
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