import React,{  useState,useEffect }from 'react';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Add_CV from './Add_CV';
import Xemchitiet from './Xemchitiet';
import Edit_nhomcv from './Edit_nhomcv';
import Del_ncv from './Del_ncv';

const App= ({group, listEp, project, setReload, reload}:{group:any; listEp:any; project:any; setReload:any; reload:any}) => {
    const [itemGroup, setItemGroup] = useState();
    const startClick = (group: any) => {
        setItemGroup(group)
      };
    const items: MenuProps['items'] = [
        {
            label: <Add_CV itemGroup={itemGroup}  listEp={listEp} project ={project} setReload={setReload} reload={reload}/>,
            key: '0',
        },
        {
            label: <Xemchitiet  itemGroup ={itemGroup} />,
            key: '1',
        },
        {
            label: <Edit_nhomcv itemGroup ={itemGroup} listEp={listEp} project ={project} setReload={setReload} reload={reload}/>,
            key: '2',
        },
        {
            type: 'divider'
        },
        {
            label: <Del_ncv itemGroup={itemGroup} setReload={setReload} reload={reload}/>,
            key: '3',
        },
    
    ];

    return (
    <Dropdown menu={{ items }} trigger={['click']}  onOpenChange={() => 
        startClick(
        group
    )}>
        <a>
            <Image width={27} height={27} alt='' src="/show_cvl.png"
            />
        </a>
    </Dropdown>
    )
};

export default App;