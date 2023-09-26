"use client"
import React, { useState } from "react";
import styles from "./Themmoiduan/Add_duan.module.css";
import Image from "next/image";
import { Select, Modal } from 'antd';
import { POST } from '@/pages/api/auth';

const Dong_da= ({item}:{item:any}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let OpenorClone 
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    try{
      POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/switch`)
      .then(res =>{
        alert('Đóng dự án thành công');
      })
    }catch{

    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpenOrClose =(value: any)=>{
    OpenorClone = value
  }
  return (
    <div >

      <p onClick={showModal} style={{ margin: "0" }}>
        <Image width={18} height={18} src="/khoa_dsda.png" alt="" style={{ marginRight: 10 }} />
        Đóng dự án
      </p>
      <Modal title='Đóng dự án' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.title} style={{ display: "flex" }} >
          <p className={styles.name}>Tên dự án <span>*</span></p>
          <input defaultValue={item.project_name}type="text" placeholder="Tên dự án" disabled style={{ width: "100%" }} />
        </div>




        <div className={styles.title} style={{ display: "flex" }}>
          <p className={styles.name} style={{ paddingRight: "10px" }}>Trạng thái </p>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Chọn trạng thái"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={ values => handleOpenOrClose(values)}
            options={[
              {
                value: '0',
                label: 'Dự án thất bại ',
              },
              {
                value: '1',
                label: 'Dự án thành công',
              },

            ]}
          />
        </div>

        <div className={styles.button}>
          <button className={styles.huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.ok} onClick={handleOk}>Đóng</button>
        </div>
      </Modal>
    </div>
  );
}
export default Dong_da;