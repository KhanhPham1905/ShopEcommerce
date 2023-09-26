import React, { useState, useEffect, useRef } from "react";
import { SubMenu, Item as MenuItem } from "rc-menu";
import styles from "./abc.module.css";
import { Menu, DrawerProps, CollapseProps, Collapse } from "antd";

import { Image } from "react-bootstrap";

import Sidebar from "../sidebar/Sidebar";
import Congty from "../PhanQuyen/Congty";
import NhanVien from "../PhanQuyen/NhanVien";

const App = ({

    activeKey,
    setActiveKey,
    openKeys,
    onOpenChange,
    setOpenKeys,
    isHasRole,
    setIsHasRole,
    selectedColor
}: {

    activeKey: any;
    setActiveKey: Function;
    openKeys: any;
    onOpenChange: any;
    setOpenKeys: Function;
    isHasRole: boolean;
    setIsHasRole: Function;
    selectedColor: string
}) => {

    const onClick = (info: any) => {
        setActiveKey(info?.key);
        info?.key === "trang-chu" ? setOpenKeys([]) : null;
    };

    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: any) => {
        return time?.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour24: true,
        });
    };

    const formatDate = (date: any) => {
        return date?.toLocaleDateString();
    };
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
    const [isSidebarOpen, setSidebarOpen] = useState(true);




    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const showDrawer = () => {
        setOpen(true);
        setSidebarOpen(false);
    };

    const onClose = () => {
        setOpen(false);
        setSidebarOpen(true);
    };


    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarOpen(false);
            }
        };

        //  lắng nghe sự kiện khi thành phần được mount
        document.addEventListener("click", handleClickOutside);


        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label:

                <div onClick={toggleSidebar} >
                    {
                        isSidebarOpen ?

                            <Image
                                width={25}
                                height={25}
                                alt=''
                                src="/angles-right-solid.svg"
                                style={{ color: "#fff" }}
                                onClick={showDrawer}
                            />
                            :
                            <Image
                                width={20}
                                height={20}
                                alt=''
                                src="/x-solid.svg"
                                style={{ color: "#fff" }}
                                onClick={onClose}
                            />
                    }

                </div >,

            children:
                <p>
                    {isHasRole ? (


                        <Congty selectedColor={selectedColor}
                            isHasRole={isHasRole}
                            setIsHasRole={setIsHasRole}
                            activeKey={activeKey}
                            setActiveKey={setActiveKey}
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            setOpenKeys={setOpenKeys} />
                    ) : (

                        <NhanVien selectedColor={selectedColor}
                            isHasRole={isHasRole}
                            setIsHasRole={setIsHasRole}
                            activeKey={activeKey}
                            setActiveKey={setActiveKey}
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            setOpenKeys={setOpenKeys} />
                    )}
                </p >,
        },]


    return (
        <div ref={sidebarRef} >
            <Collapse className="nav_an" accordion items={items} />
        </div>
    );
};

export default App;
