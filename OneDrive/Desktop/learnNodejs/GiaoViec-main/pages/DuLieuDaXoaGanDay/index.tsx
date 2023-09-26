import React from "react";
import styles from "./DuLieuDaXoaGanDay.module.css";
import Link from "next/link";
import { Button, Col, Dropdown, Input, Menu, Row } from "antd";
import { Image } from "react-bootstrap";

export interface PostPageAProps { }

export default function DuLieuDaXoaGanDay({ setActiveKey }: { setActiveKey: Function }) {
  const renderApplyKeyDuAn = () => {
    setActiveKey("quan-ly-du-lieu-da-xoa-gan-day");
  };

  const renderApplyKeyQuyTrinh = () => {
    setActiveKey("quy-trinh-xoa-gan-day");
  };
  const renderApplyKeyTaiLieu = () => {
    setActiveKey("tai-lieu-da-xoa-gan-day");
  };

  const renderApplyKeyCuocHop = () => {
    setActiveKey("cuoc-hop-da-xoa-gan-day");
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <div>
      <div className={`form_search_file ${styles.background}`}>
        <p></p>

        <div className="search_doc_file">
          <div className="searchcv">

            <Search placeholder="Tìm kiếm nhanh" onSearch={onSearch} />

          </div>
        </div>
      </div>
      <div >
        <div style={{ width: "100%" }} className={styles.data_delete_tt}>
          <div style={{ width: "25%", padding: '5px' }} className={styles.div_dlx}>
            <Button
              onClick={renderApplyKeyDuAn}
              className={`${styles.buttonItem} ${styles.col_data_delete_tt_text} `}
            >
              <Image
                width={25} height={25} alt='' src="/quan-ly-tai-lieu-1.png"></Image>
              <div className={styles.col_data_delete_tt_text}>
                <span className={styles.title_sl}>2</span>
                <p> Dự án đã xóa</p>
              </div>
            </Button>
          </div>
          <div style={{ width: "25%", padding: '5px' }} className={styles.div_dlx}>
            <Button
              onClick={renderApplyKeyQuyTrinh}
              className={`${styles.buttonItem}`}
            >
              <Image
                width={25} height={25} alt='' src="/quy-trinh-1.png"></Image>
              <div className={styles.col_data_delete_tt_text}>
                <span className={styles.title_sl}>5</span>
                <p> Quy trình đã xóa</p>
              </div>
            </Button>
          </div>
          <div style={{ width: "25%", padding: '5px' }} className={styles.div_dlx}>
            <Button
              onClick={renderApplyKeyTaiLieu}
              className={`${styles.buttonItem}`}
            >
              <Image
                width={25} height={25} alt='' src="/tai-lieu-da-xoa-1.png"></Image>
              <div className={styles.col_data_delete_tt_text}>
                <span className={styles.title_sl}>5</span>
                <p> Tài liệu đã xóa</p>
              </div>
            </Button>
          </div>
          <div style={{ width: "25%", padding: '5px' }} className={styles.div_dlx}>
            <Button
              onClick={renderApplyKeyCuocHop}
              className={`${styles.buttonItem} `}
            >
              <Image
                width={25} height={25} alt='' src="/cuoc-hop-da-xoa-1.png"></Image>

              <div className={styles.col_data_delete_tt_text}>
                <span className={styles.title_sl}>2</span>
                <p className={styles.name_}>Cuộc họp đã xóa</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.data_delete_main}>
        <div className={styles.data_delete_main_title}>
          <p className={styles.title_1}>Đã xóa gần đây</p>
        </div>

        <div className={styles.data_delete_main_body}>
          <div
            className={`${styles.row_delete_main_body} ${styles.space_b} d-flex`}
          >
            <div className={`${styles.col_delete_main_body}  d-flex`}>
              <div className={styles.col_data_delete_body_img}>
                <Image
                  width={25} height={25} alt='' src="/file.png" ></Image>
              </div>
              <div className={styles.col_data_delete_body_text}>
                <p className={styles.title_sl}>221 </p>
                <p className={styles.name_}>16:12 18-07-2023 </p>
              </div>
            </div>

            <div className={`${styles.col_delete_main_body}  d-flex`}>
              <div className={styles.col_data_delete_body_img}>
                <Image
                  width={25} height={25} alt='' src="/file.png"></Image>
              </div>
              <div className={styles.col_data_delete_body_text}>
                <p className={styles.title_sl}>Dự án S </p>
                <p className={styles.name_}>16:12 18-07-2023 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
