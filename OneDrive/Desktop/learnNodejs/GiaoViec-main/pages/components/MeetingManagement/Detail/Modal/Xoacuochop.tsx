import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css"

const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p className="cv_dot" onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={16} alt="met" src="/xoa_cvc.png" style={{ marginRight: "10px" }} />
                Xóa cuộc họp
            </p>
            <Modal title="Xác nhận xóa cuộc họp" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px" }}>
                    Bạn có chắc muốn xóa cuộc họp <span style={{ fontWeight: "bold" }}>Họp khẩn cấp</span>này ?


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