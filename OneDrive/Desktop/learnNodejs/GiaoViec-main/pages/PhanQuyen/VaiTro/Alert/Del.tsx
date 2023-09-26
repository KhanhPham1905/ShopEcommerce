import React, { useState } from 'react';
import { Button, message, Space } from 'antd';
import styles from '@/pages/PhanQuyen/VaiTro/vaitro.module.css'
import { access } from 'fs';

const App: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
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
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Xóa vai trò thành công',
        });
    };



    return (
        <>
            {contextHolder}

            <button onClick={handleOk} className={styles.ok} type="submit" >Xóa</button>
        </>
    );
};

export default App;