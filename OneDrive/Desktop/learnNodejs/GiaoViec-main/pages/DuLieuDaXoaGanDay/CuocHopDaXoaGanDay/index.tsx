import React, { useState } from "react";
import styles from "./index.module.css";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Input, Menu, Segmented } from "antd";
import DuLieuDaXoa from "./DuLieuDaXoa";
import DuLieuDaXoaCot from "./DuLieuDaXoaCot";
import DuLieuDaXoaGanDay from "..";
import Image from "next/image";

export interface NavbarProp { }

export default function CuocHopDaXoaGanDay({ setActiveKey, selectedColor }: { setActiveKey: Function, selectedColor: string }) {
  const renderApplyKey = () => {
    setActiveKey("du-lieu-da-xoa-gan-day");
  };
  const [selectedOption, setSelectedOption] = useState("List");

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <div className={styles.box_setting}>
      <div className={styles.meeting_all}>
        <div className={`${styles.dau_1} ${selectedColor}`} onClick={renderApplyKey}>



          Cuộc họp đã xóa
        </div>
        <div className={styles.creart_meeting}>
          <div
            className={`${styles.creartm_one} ${styles.deta_delete_one} d-flex`}
          >
            <Segmented
              options={[
                {
                  value: "List",
                  icon: <BarsOutlined />,
                },
                {
                  value: "Kanban",
                  icon: <AppstoreOutlined />,
                },
              ]}
              onChange={handleOptionChange}
            />
          </div>
          <div className={`form_search_file ${styles.background}`}>
            <p></p>

            <div className="search_doc_file">
              <div className="searchcv">

                <Search placeholder="Tìm kiếm dự án" onSearch={onSearch} />

              </div>
            </div>
          </div>
        </div>
        {selectedOption === "List" && <DuLieuDaXoa />}
        {selectedOption === "Kanban" && <DuLieuDaXoaCot />}
      </div>
    </div>
  );
}
