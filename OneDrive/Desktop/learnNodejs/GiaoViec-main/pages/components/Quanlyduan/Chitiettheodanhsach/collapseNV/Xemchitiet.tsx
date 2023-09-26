"use client"
import React, { useState } from "react";
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";


import Image from "next/image";
import { Select, Modal, Checkbox, Input } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";


const plainOptions = ['Quan trọng', 'Khẩn cấp'];


const options: SelectProps['options'] = [];

for (let i = 1; i < 10; i++) {
    options.push({
        label: 'Nguyễn Hoàng' + i,
        value: 'Nguyễn Hoàng' + i,
    });
}

const Xemchitiet= ({itemGroup}:{itemGroup:any}) => {
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
                <Image width={16} height={20} src="/chitiet.png" alt="" style={{ marginRight: 10 }} />
                Xem chi tiêt nhóm công việc
            </p>
            <Modal title='Xem chi tiêt nhóm công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên nhóm công việc <span>*</span></p>
                    <p>{itemGroup.name}</p>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ công việc:</p>
                    <div>
                        {itemGroup.card?.includes(2) && (
                        <span>Khẩn cấp  </span>
                        )} 

                        {itemGroup.card?.includes(1) && (
                        <span>Quan trọng</span>
                        )}
                    </div>

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả công việc </p>
                    <p>{itemGroup.description}</p>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhóm công việc </p>
                    <p>dd</p>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <p>dd</p>
                </div>



                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <p>{itemGroup.time_in} - {itemGroup.date_start}</p>

                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian kết thúc  </p>
                    <p>{itemGroup.time_out} - {itemGroup.date_end}</p>

                </div>

                <div className={styles.title} style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className={styles.name}>Quá hạn  </p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontWeight: "bold" }}>Kết quả:</p>
                        <Input suffix="%" disabled style={{ width: "80px", height: "30px" }} />
                    </div>

                </div>
                <div className={styles.title} style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className={styles.name}>Quản lý đánh giá: </p>
                    <label htmlFor="">Chờ đánh giá</label>

                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Đóng</button>

                </div>
            </Modal>
        </div>
    );
}
export default Xemchitiet;