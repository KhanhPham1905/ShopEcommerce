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
        alert('Xóa thành công')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <p className={styles.xoa} onClick={showModal} style={{ margin: 0, color: "black", fontWeight: "normal" }} >
                <Image width={18} height={18} alt="" src="/xoa_cvc.png" style={{ marginRight: 10 }} />
                Xóa giai đoạn
            </p>
            <Modal title="Xác nhận xóa trường tùy chỉnh" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px", textAlign: "center" }}>
                    Bạn có đồng ý xóa giai đoạn<span style={{ fontWeight: "bold" }}> ffd</span> này?
                    Tất cả các nhiệm vụ sẽ bị xóa và không thể khôi phục!


                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xóa</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;