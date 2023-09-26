import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";
import { POST } from '@/pages/api/auth';


const Del_ncv =({itemGroup, setReload, reload}:{itemGroup:any; setReload:any; reload:any})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        try{
            POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${itemGroup.id}/delete-nhom-cong-viec/${itemGroup.id}`)
            .then(res =>{
                alert('Xoá nhóm công việc thành công');
                setReload(!reload);
            })
        }catch(error){
            console.log(error);
        }
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p className="cv_dot" onClick={showModal} style={{ margin: 0, color: "#F46A6A" }} >
                <Image width={18} height={18} alt="" src="/xoa_cvc.png" style={{ marginRight: 10 }} />
                Xóa nhóm công việc
            </p>
            <Modal title="Xóa dự án" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px" }}>
                    Bạn có chắc muốn xóa nhóm công việc <span style={{ fontWeight: "bold" }}>{itemGroup.name}</span> ?

                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
                </div>
            </Modal>
        </>
    );
};

export default Del_ncv;