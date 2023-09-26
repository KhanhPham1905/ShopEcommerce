import React from 'react';
import Image from 'next/image';

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Add_duan from './Themmoiduan/Add_duan';
import Add_work_for_exp from './Themmoiduan/Add_work_for_exp';
import Add_work from './Themmoiduan/Add_work';
import Work_setting from './Themmoiduan/Congvieclaplai';




const Btn_themmoi = ({ selectedColor, listEp, listP , setReload, reload }: { selectedColor: string; listEp: any[]; listP: any[]; setReload: any; reload:any }) => {
    
    const items: MenuProps['items'] = [
        {
    
            label: < Add_duan selectedColor={selectedColor}  listEp={listEp} setReload={setReload} reload={reload}/>,
    
            key: '0',
        },
        {
            label: <Add_work_for_exp selectedColor={selectedColor}  listEp={listEp}  listP={listP}  setReload={setReload} reload={reload}/>,
            key: '1',
        },
        {
            label: <Add_work listP={listP} listEp={listEp} setReload={setReload} reload={reload}/>,
            key: '2',
        },
        {
            label: <Work_setting listEp={listEp} setReload={setReload} reload={reload}/>,
            key: '3',
        },
    
    ];

    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      };

    return(
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onKeyDown={handleKeyDown}  onClick={(e) => e.preventDefault()}>
            <button onKeyDown={handleKeyDown} className={` add_work ${selectedColor}`}>
                + Thêm mới
            </button>
        </a>
    </Dropdown>

    )

};

export default Btn_themmoi;