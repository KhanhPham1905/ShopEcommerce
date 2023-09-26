import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";
import { POST } from '@/pages/api/auth';

const DelCV = ({data, setReload, reload}:{data:any; setReload:any; reload:any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
        // Thực hiện xử lý lưu thông tin ở đây
        POST(`projects/chi-tiet-du-an/${data.job_id}/delete-cong-viec`)
        .then(res => {
          if(res){
            alert("Xóa công việc thành công")
            setReload(!reload);
            setIsModalOpen(false);
          } 
      })
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p className="cv_dot" onClick={showModal} style={{ margin: 0, color: "#f46a6a" }} >
                <Image width={18} height={18} alt="" src="/xoa_cvc.png" style={{ marginRight: 10 }} />
                Xóa công việc
            </p>
            <Modal title="Xóa dự án" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px" }}>
                    Bạn có chắc muốn xóa công việc <span style={{ fontWeight: "bold" }}>{data.job_name}</span> ?

                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
                </div>
            </Modal>
        </>
    );
};

export default DelCV;