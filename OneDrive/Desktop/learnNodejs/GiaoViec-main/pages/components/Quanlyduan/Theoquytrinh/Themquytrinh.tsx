"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Theoquytrinh.module.css";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";


const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

const plainOptions = ['Quan trọng', 'Khẩn cấp'];


const options: SelectProps['options'] = [];

for (let i = 1; i < 10; i++) {
    options.push({
        label: 'Nguyễn Hoàng' + i,
        value: 'Nguyễn Hoàng' + i,
    });
}
const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
};

const Themquytrinh: React.FC = () => {
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

            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/Vector (17).png" alt="" style={{ marginRight: 10 }} />
                Thêm quy trình
            </p>
            <Modal title='Thêm quy trình' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên quy trình <span>*</span></p>
                    <input style={{ width: "100%" }} type="text" placeholder="Tên quy trình" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ quy trình <span>*</span></p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={onChange} />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên quản trị <span>*</span></p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên quản trị"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên thực hiện <span>*</span></p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên theo dõi dự án </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên theo dõi"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên đánh giá </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên đánh giá"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả quy trình</p>
                    <textarea style={{ width: "100%" }} name="" id="" placeholder="Nhập mô tả quy trình" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Lý do thất bại<span>*</span></p>
                    <input style={{ width: "100%" }} name="" id="" placeholder="Nhập lý do thất bại" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <div className={styles.time_work}>
                        <input style={{ width: "45%" }} type="date" />
                        <input style={{ width: "45%" }} type="time" />
                    </div>
                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
                    <div className={styles.time_work}>
                        <input style={{ width: "45%" }} type="date" />
                        <input style={{ width: "45%" }} type="time" />
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Thêm quy trình</button>
                </div>
            </Modal>
        </div>
    );
}
export default Themquytrinh;