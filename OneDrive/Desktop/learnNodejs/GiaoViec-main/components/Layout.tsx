import React, { Children } from "react";
import { Layout, Space } from "antd";
// import Sidebar from './sidebar/sidebar';
import Navbar from "./navbar/Navbar";

import Sidebar from "./sidebar/Sidebar";

export const HomeLayout = ({
  children,
  activeKey,
  setActiveKey,
  openKeys,
  onOpenChange,
  setOpenKeys,
  isHasRole,
  setIsHasRole,
  selectedColor,

}: any) => {


  return (
    <Layout>
      <div>
        <div className="" style={{ display: "flex" }}>
          <div className="s1" style={{ width: "20.7%" }}>

            <Sidebar

              selectedColor={selectedColor}
              isHasRole={isHasRole}
              setIsHasRole={setIsHasRole}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              setOpenKeys={setOpenKeys}
            />

          </div>
          <div className="s2" style={{ width: "79.3%" }}>
            <header>
              <Navbar

                selectedColor={selectedColor}
                isHasRole={isHasRole}
                setIsHasRole={setIsHasRole}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                setOpenKeys={setOpenKeys}
              />
            </header>
            <div
              className="s3"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

};

export default HomeLayout;
