import React, { useState, useEffect } from "react";
import { SubMenu, Item as MenuItem } from "rc-menu";
import styles from "./Sidebar.module.css";
import { Menu, MenuProps, Button } from "antd";
import { Router, useRouter } from "next/router";
import { Image } from "react-bootstrap";
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
  const router = useRouter();

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

  return (
    <div >

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
        <NhanVien
          selectedColor={selectedColor}
          isHasRole={isHasRole}
          setIsHasRole={setIsHasRole}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          setOpenKeys={setOpenKeys} />)}
    </div>
  );
};

export default App;
