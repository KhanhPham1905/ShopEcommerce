import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";
import { BorderRightOutlined } from '@ant-design/icons';


const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Chuyển đến giai đoạn tiếp theo thành công ')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p className={styles.xoa} onClick={showModal} style={{
                margin: 0, color: "#ffffff",
                fontWeight: "bold",
                width: "150px", height: "30px",
                background: "#4c5bd4",
                borderRadius: "5px",
                textAlign: "center",
                marginRight: "10px",




            }} >

                Chuyển tiếp
            </p>
            <Modal title="Chuyển tới giai đoạn Hoàn thành" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px", textAlign: "center" }}>
                    Xác nhận chuyển tới giai đoạn hoàn thành?


                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Đồng ý</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;