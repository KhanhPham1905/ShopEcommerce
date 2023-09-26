import React from 'react';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import SuaCV from './SuaCV';
import DelCV from './DelCV';

const App = ({data, group, setReload, reload}:{data:any; group:any; setReload:any; reload:any}) => {
    const items: MenuProps['items'] = [
        {
            label: <SuaCV data={data} group={group} setReload={setReload} reload={reload}/>,
            key: '0',
        },
        {
            label: <DelCV data={data} setReload={setReload} reload={reload}/>,
            key: '1',
        },
    ];
    return(
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Image width={27} height={27} alt='' src="/show_cvl.png" style={{ marginRight: 10 }} />
            </a>
        </Dropdown>
    )
};

export default App;