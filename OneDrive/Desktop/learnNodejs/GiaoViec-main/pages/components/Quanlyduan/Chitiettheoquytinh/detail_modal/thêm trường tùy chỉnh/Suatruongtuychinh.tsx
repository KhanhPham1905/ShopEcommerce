"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./truong.module.css"
import { Select, Modal, Checkbox, Input } from 'antd';

import { CheckboxValueType } from "antd/es/checkbox/Group";


const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};
const onSearch = (value: string) => {
    console.log('search:', value);
};

const Suatruongtuychinh: React.FC = () => {
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
        <div >

            <p onClick={showModal} style={{ margin: "0", cursor: "pointer", color: "#4c5bd4", fontWeight: "bold" }}>
                Sửa
            </p>
            <Modal title='Sửa trường tùy chỉnh' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Loại dữ liệu <span>*</span></p>
                    <Select
                        showSearch
                        placeholder="Chọn kiểu dữ liệu"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Kiểu số',
                                label: 'Kiểu số',
                            },
                            {
                                value: 'Kiểu ký tự',
                                label: 'Kiểu ký tự',
                            },
                            {
                                value: 'Ngày',
                                label: 'Ngày',
                            },
                            {
                                value: 'Ngày giờ',
                                label: 'Ngày giờ',
                            },
                            {
                                value: 'Đổ xuống một câu trả lời',
                                label: 'Đổ xuống một câu trả lời',
                            },
                            {
                                value: 'Đổ xuống nhiều câu trả lời',
                                label: 'Đổ xuống nhiều câu trả lời',
                            },
                        ]}
                    />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhập tên trường dữ liệu<span>*</span> </p>
                    <Input placeholder="Nhập tên trường dữ liệu" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả trường dữ liệu</p>
                    <textarea name="" id="" placeholder="Nhập mô tả tên trường dữ liệu" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Trường bắt buộc <span>*</span></p>
                    <Checkbox.Group defaultValue={[]} onChange={onChange} />

                </div>




                <div className={styles.title}>
                    <p className={styles.name}>Liên kết với giai đoạn <span>*</span></p>

                </div>



                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Áp dụng</button>
                </div>
            </Modal>
        </div>
    );
}
export default Suatruongtuychinh;