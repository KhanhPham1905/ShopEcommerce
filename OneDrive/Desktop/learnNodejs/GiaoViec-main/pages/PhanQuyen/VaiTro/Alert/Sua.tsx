import React from 'react';
import { Button, message, Space } from 'antd';
import styles from '@/pages/PhanQuyen/VaiTro/vaitro.module.css'

const App = ({selectedColor}:{selectedColor:string}) => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Cập nhật vai trò thành công',
        });
    };



    return (
        <>
            {contextHolder}
            <button onClick={success} className={`${styles.ok} ${selectedColor}`}>Lưu</button>
        </>
    );
};

export default App;