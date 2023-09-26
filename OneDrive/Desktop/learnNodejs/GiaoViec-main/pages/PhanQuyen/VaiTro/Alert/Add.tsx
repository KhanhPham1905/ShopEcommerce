import React from 'react';
import { Button, message, Space } from 'antd';
import styles from '@/pages/PhanQuyen/VaiTro/vaitro.module.css'

const App: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thêm vai trò thành công',
        });
    };



    return (
        <>
            {contextHolder}
            <button onClick={success} className={styles.ok} >Lưu</button>
        </>
    );
};

export default App;