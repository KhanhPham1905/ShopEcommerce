import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "./Themmoiduan/Add_duan.module.css";
import {POST} from '@/pages/api/auth';
const DelCvll= ({record,setReload}: {record:any; setReload:any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        try{
            POST(`/projects/danh-sach-lap-lai/${record.job_id}/delete`)
            .then(res =>{
                alert('Xoá nhóm công việc thành công');
                setReload(true)
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

            <p className="cv_dot" onClick={showModal} style={{ margin: 0 }} >
                <Image width={18} height={18} alt="" src="/xoa_cvc.png" style={{ marginRight: 10 }} />
                Xóa công việc lặp lại
            </p>
            <Modal title=" Xóa công việc lặp lại" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px" }}>
                    Bạn có chắc muốn xóa công việc lặp lại <span style={{ fontWeight: "bold" }}>{record.job_name}</span> ?

                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
                </div>
            </Modal>
        </>
    );
};

export default DelCvll;