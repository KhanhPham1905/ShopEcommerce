import React, { useState } from 'react';
import { Button, Modal, Select, Input, notification } from 'antd';

import styles from "./Diadiem.module.css"
import { flatMap } from 'lodash';
import { POST } from '@/pages/api/auth';

const Btn_Address = ({ 
  selectedColor,
  listPlace,
  setReload
} : { 
  selectedColor: string ,
  listPlace : any[],
  setReload: Function
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenPhong, setTenPhong] = useState("");
  const [diaDiem, setDiaDiem] = useState("");
  const [sucChua, setSucChua] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (!tenPhong || !diaDiem || !sucChua) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin!",
      })
    } else {
      setIsModalOpen(false);
      // Thực hiện xử lý lưu thông tin ở đây
      POST('meeting-rooms/quan-ly-phong-hop/them-moi-phong-hop',{
        name:tenPhong,
        succhua:sucChua,
        diadiem:diaDiem,
      })
      .then(res => {
        if(res){
          setReload(true)
          setIsModalOpen(false);
          setTenPhong('')
          setDiaDiem('')
          setSucChua('')
        } 
      })
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value: any) => {
    setDiaDiem(value);
  };
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} style={{ width: "150px", borderRadius: "20px", fontWeight: "bold", fontSize: "16px", height: "34px" }} className={`${selectedColor}`}>
        + Thêm mới
      </Button>
      <Modal title="Thêm phòng họp" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.name} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }} >Tên phòng họp <span style={{ color: "red" }}>*</span></p>
          <Input
            style={{ width: "100%" }}
            type="text" placeholder='Nhập tên địa điểm'
            value={tenPhong}
            onChange={(e) => setTenPhong(e.target.value)}
          />
        </div>
        <div className={styles.select} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Chọn địa điểm <span style={{ color: "red" }}>*</span></p>
          <Select
            value={diaDiem}
            onSelect={setDiaDiem}
            showSearch
            style={{ width: "100%" }}
            placeholder="Chọn địa điểm"
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={(Input, option) =>
              (option?.label ?? '').toLowerCase().includes(Input.toLowerCase())
            }
            options={
              listPlace?.map((data:any) => (
              {
                value:data?.id,
                label:data?.name
              }
              ))
            }
          />
        </div>
        <div className={styles.name} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Sức chứa (số người)<span style={{ color: "red" }}>*</span></p>
          <Input
            value={sucChua}
            onChange={(e) => setSucChua(e.target.value)}
            style={{ width: "100%" }} type="number" placeholder='Nhập số lượng' />
        </div>
        <div className={styles.btn}>
          <button className={styles.btn_huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.btn_ok} onClick={handleOk}>Lưu</button>
        </div>
      </Modal>
    </>
  );
};

export default Btn_Address;