import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css"
import Image from 'next/image';
import { POST } from '@/pages/api/auth';
const Del: any = ({id, setReload}:{id: string, setReload: Function}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        POST(`meeting-rooms/quan-ly-phong-hop/delete/${id}`)
        .then(res =>{
            if(res){
                setReload(true)
                setIsModalOpen(false);
            }
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <a style={{ color: "red" }} onClick={showModal}><Image
                width={14} height={16} alt='' src="/del_ql_rd.png" />Xóa</a>

            <Modal

                title="Xóa phòng họp" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px", textAlign: "center" }}>

                    Tất cả lịch họp ở phòng họp <span style={{ fontWeight: "bold" }}>Họp mỗi ngày</span>  sẽ bị xoá. Bạn có chắc chắn muốn xoá phòng họp này không?
                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xóa</button>
                </div>
            </Modal>
        </>
    );
};

export default Del;