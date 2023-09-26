import React, { useState } from 'react';
import { Input, Modal, Select, SelectProps } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";


const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};
const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
};
const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Cập nhật người thực hiện thành công')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { Search } = Input;

    return (
        <>

            <p
                onClick={showModal}
                className={styles._edit}
                style={{
                    color: "blue",
                    cursor: "pointer",
                    marginBottom: "0rem",
                }}
            >
                Chỉnh sửa
            </p>
            <Modal title="Chỉnh sửa người thực hiện" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Select
                    showSearch
                    placeholder="Tìm kiếm"
                    optionFilterProp="children"

                    onSearch={onSearch}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    options={options}


                />
                <label htmlFor="">Gợi ý</label>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid black" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Image width={24} height={24} alt='' src="/Group 626671.png" />
                        <p>sdfsdf</p>
                    </div>
                    <input style={{ width: "18px", height: "18px" }} type="checkbox" />
                </div>
                <div className={styles.button} style={{ textAlign: "center", marginTop: "20px" }}>
                    <button className={styles.ok} onClick={handleOk}>Thêm</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;