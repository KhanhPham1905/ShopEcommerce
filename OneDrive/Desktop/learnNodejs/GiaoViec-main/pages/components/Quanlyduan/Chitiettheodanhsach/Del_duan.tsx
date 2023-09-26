import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "./Themmoiduan/Add_duan.module.css";
import { POST } from '@/pages/api/auth';

const Del_duan = ({item}:{item:any}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    try{
      POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/delete-du-an`)
      .then(res =>{
        alert('Xoá dự án thành công');
      })
    }catch(error){
        console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <p className="cv_dot" onClick={showModal} style={{ margin: 0 }} >
        <Image width={18} height={18} alt="" src="/xoa_cvc.png" style={{ marginRight: 10 }} />
        Xóa dự án
      </p>
      <Modal title="Xóa dự án" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <div style={{ padding: "20px", fontSize: "16px" }}>
          Bạn có chắc muốn xóa dự án <span style={{ fontWeight: "bold" }}>{item.project_name}</span> ?
          Công việc sẽ được lưu trữ tại
          <span style={{ fontWeight: "bold" }}> Dữ liệu đã xóa gần đây </span> trong thời gian 5 ngày trước khi bị xóa vĩnh viễn!
        </div>
        <div className={styles.button}>
          <button className={styles.huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
        </div>
      </Modal>
    </>
  );
};

export default Del_duan;