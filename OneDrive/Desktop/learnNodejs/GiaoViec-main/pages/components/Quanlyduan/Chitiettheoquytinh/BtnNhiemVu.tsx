"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/Themnhiemvu/Add_mission.module.css"
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

const Themnhiemvumoi: React.FC = () => {
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

            <button onClick={showModal}
                style={{
                    border: "none", background: "#4c5bd4",
                    color: "#ffffff", fontSize: "13px",
                    height: "32px", fontWeight: "bold",
                    borderRadius: "20px"
                    , padding: "6px 10px"
                }}>

                + Nhiệm vụ
            </button>
            <Modal title='Thêm nhiệm vụ mới' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên nhiệm vụ <span>*</span></p>
                    <input style={{ width: "100%" }} type="text" placeholder="Nhập tên nhiệm vụ" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ nhiệm vụ <span>*</span></p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={onChange} />

                </div>



                <div className={styles.title}>
                    <p className={styles.name}>Mô tả nhiệm vụ</p>
                    <textarea style={{ width: "100%" }} name="" id="" placeholder="Nhập mô tả nhiệm vụ" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên thực hiện <span>*</span></p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Thêm thành viên thực hiện"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                </div>



                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Tạo nhiệm vụ</button>
                </div>
            </Modal>
        </div>
    );
}
export default Themnhiemvumoi;