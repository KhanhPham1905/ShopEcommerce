import React, {useState} from 'react';
import Image from 'next/image';

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import SuaCVll from './SuaCVll';
import DelCvll from './DelCvll';





const App =  ({record,setReload}:{record:any;setReload:any}) => {

    const items: MenuProps['items'] = [
        {
            label: < SuaCVll record = {record} setReload={setReload}/>,
            key: '0',
        },
        {
            label: <DelCvll record = {record} setReload = {setReload}/>,
            key: '1',
        },



    ];

    return (

        <div>
            <Dropdown menu={{ items }} trigger={['click']} className="img_dot" >
                <a onClick={(e) => e.preventDefault}>
                    <Space size="middle">
                        <Image width={18} height={18} alt="" style={{ marginRight: 10 }}
                            src="/show_cvl.png"
                        />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}
export default App;