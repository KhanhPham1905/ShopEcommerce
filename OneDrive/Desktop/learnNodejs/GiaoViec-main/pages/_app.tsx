import "../styles/globals.css";
import "../styles/globals2.css";
import "../styles/Tqt.css";
import "../styles/work_document.css";
import "../styles/box_home.css";
import "../styles/Layouts.css";
import "../styles/reponsive.css";
import "../styles/project_detail.css";
import "../styles/suaphanquyen.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/dscvlaplai.css";
import "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/atd.css";
import { Component, useEffect, useState } from "react";
import HomeLayout from "../components/Layout";
import type { AppProps } from "next/app";
import { Button, MenuProps, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import NhanVienLayout from "../components/Layout";
import { LOGIN } from '@/pages/api/auth';
import { setCookie } from "cookies-next";
export default function MyApp({ Component, pageProps }: AppProps) {
  const [isAccess, setIsAccess] = useState(false);
  const [activeKey, setActiveKey]: any = useState("trang-chu");
  const rootSubmenuKeys = [
    "quan-ly-du-an",
    "bao-cao",
    "quan-ly-tai-lieu",
    "quan-ly-phong-hop",
    "cong-viec-cua-toi",
    "du-lieu-xoa-gan-day",
    "phan-quyen",
    "chuyen-doi-so",
    "quan-ly-du-lieu-da-xoa-gan-day",
  ];
  const [openKeys, setOpenKeys]: any[] = useState([]);
  const [isHasRole, setIsHasRole]: any[] = useState(false);
  const [selectedColor, setSelectedColor] = useState("bgr_alt0");
  const [idProject,setIdProject]  = useState();
  const [file,setFile] = useState();
  const [detailJob, setDetailJob] = useState();

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys?.find((key) => openKeys?.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  useEffect(() => {
    setIsAccess(true);
    LOGIN('http://210.245.108.202:3000/api/qlc/employee/login',{
      account:'duonghiepit1@gmail.com',
      password:'123123a',
      type:1
    }).then(res =>{
      setCookie('inForUser',res?.data);     
    })
  }, []);

  
  
  const LoadingComp = () => {
    return (
      <Spin
        indicator={<LoadingOutlined />}
        size="large"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      />
    );
  };

  const homeStyles = {
    backgroundColor: selectedColor,
    // Thêm các kiểu khác theo ý muốn
  };
  const Home = () => {
    if (isHasRole) {
      return (
        <div
          className={selectedColor ? selectedColor : ''}
        // style={homeStyles}
        >
          {/* < Button onClick={() => setIsHasRole(!isHasRole)} /> */}
          <HomeLayout
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            setOpenKeys={setOpenKeys}
            isHasRole={isHasRole}
            setIsHasRole={setIsHasRole}
            selectedColor={selectedColor}
            idProject={idProject}
            setIdProject= {setIdProject}
            file={file}
            setFile={setFile}
            detailJob={detailJob}
            setDetailJob={setDetailJob}
          >
            <Component
              {...pageProps}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              isHasRole={isHasRole}
              setIsHasRole={setIsHasRole}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
              idProject={idProject}
              setIdProject= {setIdProject}
              file={file}
              setFile={setFile}
              detailJob={detailJob}
              setDetailJob={setDetailJob}
            />
          </HomeLayout>
        </div>
      );
    } else {
      return (
        <div >
          <HomeLayout
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            setOpenKeys={setOpenKeys}
            isHasRole={isHasRole}
            setIsHasRole={setIsHasRole}
            selectedColor={selectedColor}
          >
            <Component
              {...pageProps}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              isHasRole={isHasRole}
              setIsHasRole={setIsHasRole}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
            />
          </HomeLayout>
        </div>
      );
    }
  };

  return isAccess ? <Home /> : <LoadingComp />;
}
