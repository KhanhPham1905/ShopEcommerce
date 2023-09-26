import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";


const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Xóa bình luận thành công')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p onClick={showModal}
                style={{ color: "red", cursor: "pointer", margin: "0rem" }}
            >
                Xóa
            </p>
            <Modal title="Xác nhận xóa bình luận" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px", textAlign: "center" }}>
                    Bạn có đồng ý xóa bình luận này không ?


                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;