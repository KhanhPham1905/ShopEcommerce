import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";


const Thatbai: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Đã chuyển nhiệm vụ tới giai đoạn thất bại')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p onClick={showModal}
                style={{
                    margin: 0, color: "#ffffff",
                    fontWeight: "bold", width: "150px",
                    height: "30px", background: "#ed5b5b",
                    textAlign: "center", borderRadius: "5px"
                }} >

                Đánh dấu thất bại
            </p>
            <Modal title="Chuyển sang giai đoạn thất bại" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ fontSize: "16px" }}>
                    <p style={{ fontWeight: "bold" }}>Lý do thất bại</p>
                    <textarea name="" id="" placeholder='Nhập lý do thất bại'
                        style={{ width: "100%", paddingLeft: "10px" }} />


                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Đồng ý</button>
                </div>
            </Modal>
        </>
    );
};

export default Thatbai;