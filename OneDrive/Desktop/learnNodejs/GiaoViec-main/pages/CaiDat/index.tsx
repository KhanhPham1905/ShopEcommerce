import React, { useState } from "react";
import styles from "./CaiDat.module.css";
import DanhSachThanhVien from "./DanhSachThanhVien";
import CaiDatChung from "./CaiDatChung";
import ThongTinBaoMat from "./ThongTinBaoMat";
import ThongTinCaNhan from "./ThongTinCaNhan";
import { Select, Input } from "antd";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const YourComponent = ({ isHasRole, setSelectedColor, selectedColor }: { isHasRole: boolean, setSelectedColor: Function, selectedColor: string }) => {
  const [selectedTab, setSelectedTab] = useState("caidatchung");
  const [selectedLabel, setSelectedLabel] = useState("Cài đặt chung");

  const items: MenuProps["items"] =  [
    
    {
      key: "1",
      label: (
        <div
          // value="caidatchung"
          className={` ${styles.remove_class} ${
            selectedTab === "caidatchung" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedTab("caidatchung");
            setSelectedLabel("Cài đặt chung");
          }}
        >
          Cài đặt chung
        </div>
      ),
    },
    
   
  ];
  if (isHasRole) {
    items.push({
      key: "2",
      label: (
        <div
          className={`${
            selectedTab === "thongtinbaomat" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedTab("thongtinbaomat");
            setSelectedLabel("Thông tin bảo mật");
          }}
        >
            Thông tin bảo mật
        </div>
      ),
    });
  } else {
    items.push({
      key: "2",
      label: (
        <div
          className={`${
            selectedTab === "thongtincanhan" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedTab("thongtincanhan");
            setSelectedLabel("  Thông tin cá nhân");
          }}
        >
         Thông tin cá nhân
        </div>
      ),
    });
  }
  if (isHasRole) {
    items.push({
      key: "3",
      label: (
        <div
          className={`${
            selectedTab === "danhsachthanhvien" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedTab("danhsachthanhvien");
            setSelectedLabel("Danh sách thành viên");
          }}
        >
          Danh sách thành viên
        </div>
      ),
    });
  } else {
    items.push({
      key: "3",
      label: (
        <div
          className={`${
            selectedTab === "thongtinbaomat" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedTab("thongtinbaomat");
            setSelectedLabel("Thông tin bảo mật");
          }}
        >
        Thông tin bảo mật
        </div>
      ),
    });
  }
 
  return (
    <div>
      {isHasRole ? (
        <div className={`${styles.box_setting} `}>
          <div >
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
              
            >
              <div style={{ width: "100%" }} className={styles.helo}>{selectedLabel}</div>
            </Dropdown>
          </div>
          <div
            className={`${styles.nav_setting} d-flex ${styles.remove_class} ${styles.hien} ${selectedColor}`}
          >
            <div
              // value="caidatchung"
              className={`${styles.nav_setting_con} ${styles.remove_class} ${
                selectedTab === "caidatchung" ? styles.active : selectedColor
              }`}
              onClick={
                () => setSelectedTab("caidatchung")
                // Cập nhật tên lựa chọn
              }
            >
              Cài đặt chung
            </div>
            <div
              className={`${styles.nav_setting_con} ${
                selectedTab === "thongtinbaomat" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("thongtinbaomat")}
            >
              Thông tin bảo mật
            </div>
          
            <div
              className={`${styles.nav_setting_con} ${
                selectedTab === "danhsachthanhvien" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("danhsachthanhvien")}
            >
              Danh sách thành viên
            </div>
          </div>
          {selectedTab === "caidatchung" && (
            <CaiDatChung selectedColor={selectedColor} setSelectedColor={setSelectedColor} isHasRole={isHasRole} />
          )}
          {selectedTab === "thongtinbaomat" && <ThongTinBaoMat  selectedColor={selectedColor} />}
          {selectedTab === "danhsachthanhvien" && <DanhSachThanhVien />}
        </div>
      ) : (
        <div className={`${styles.box_setting} `}>
          <div >
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
              
            >
              <div style={{ width: "100%" }} className={styles.helo}>{selectedLabel}</div>
            </Dropdown>
          </div>
          <div
            className={`${styles.nav_setting} d-flex ${styles.remove_class} ${selectedColor}`}
          >
            <div
              className={`${styles.nav_setting_con} ${
                selectedTab === "caidatchung" ? styles.active : selectedColor
              }`}
              onClick={() => setSelectedTab("caidatchung")}
            >
              Cài đặt chung
            </div>
            <div
              className={`${styles.nav_setting_con} ${
                selectedTab === "thongtincanhan" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("thongtincanhan")}
            >
              Thông tin cá nhân{" "}
            </div>
            <div
              className={`${styles.nav_setting_con} ${
                selectedTab === "thongtinbaomat" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("thongtinbaomat")}
            >
              Thông tin bảo mật
            </div>
            {/* <!-- <li data-tab="cds_four">Nhật ký hoạt động</li> --> */}
          </div>
          {selectedTab === "caidatchung" && (
            <CaiDatChung selectedColor={selectedColor} setSelectedColor={setSelectedColor} isHasRole={isHasRole} />
          )}
          {selectedTab === "thongtincanhan" && <ThongTinCaNhan />}
          {selectedTab === "thongtinbaomat" && <ThongTinBaoMat selectedColor={selectedColor} />}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
