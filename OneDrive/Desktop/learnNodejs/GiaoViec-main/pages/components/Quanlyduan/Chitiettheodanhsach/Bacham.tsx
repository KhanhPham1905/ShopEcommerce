import React from 'react';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Sua_da from './Sua_da';
import Del_duan from './Del_duan';
import Dong_da from './Dong_da';
import Follower_list_modal from './Dsnguoitheodoi'
import Thietlapcvll from './Thietlapcvll';
import Suaphanquyen from './Suaphanquyen';
import { useContext } from 'react';
import {ListEpContext} from '@/components/context/listEpContext'



const App: React.FC<{ setActiveKey: Function; setOpenKeys: Function ; item: any}> = ({ setActiveKey, setOpenKeys, item }) => {
    const onClick = (info: any) => {
        setActiveKey(info?.key);
        info?.key === "trang-chu" ? setOpenKeys([]) : null;
    };
    const listEp = useContext(ListEpContext)
    
    const items: MenuProps['items'] = [
        {

            label: < Sua_da item={item} listEp={listEp}/>,

            key: '0',
        },
        {
            label: <Dong_da item={item}/>,
            key: '1',
        },
        {
            label: <Suaphanquyen />,
            key: '2',
        },
        {
            label: <Thietlapcvll listEp={listEp} item={item}/>,
            key: '3',
        },
        {
            label:
                <p className="cv_dot" style={{ margin: 0, cursor: "pointer" }}>
                    <div key={"c"}
                        onClick={() =>
                            onClick({ key: "danh-sach-cong-viec-lap-lai" })

                        }>
                        <Image width={18} height={18} alt="" src="/add_laplai.png" style={{ marginRight: 10 }} />
                        Danh sách công việc lặp lại
                    </div>
                </p>,
            key: '4',
        },


        {
            label: <Follower_list_modal item={item} />,
            key: '5',
        },
        {
            label: <Del_duan item={item}/>,
            key: '6',
        },


    ];



    return (

        <div>
            <Dropdown menu={{ items }} trigger={['click']} className="img_dot">
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Image width={22} height={22} alt=""
                            src="/anh103.png"
                        />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}
export default App;