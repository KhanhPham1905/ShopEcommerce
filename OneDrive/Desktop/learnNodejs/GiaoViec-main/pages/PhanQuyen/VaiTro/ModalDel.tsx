import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import styles from './vaitro.module.css'
import Del from './Alert/Del';
const App: React.FC = () => {
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
            <a onClick={showModal} style={{ fontWeight: "bold", fontSize: "15px", color: "#f46a6a" }}><Image width={14} height={16} alt='' src="/del_ql_rd.png" />Xóa</a>
            <Modal title="Xóa vai trò"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <p style={{ textAlign: 'center', fontSize: '16px', paddingTop: '10px' }}>Bạn có chắc chắn muốn xóa vai trò <span>u</span> này không?</p>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <Del />
                </div>
            </Modal>
        </>
    );
};

export default App;