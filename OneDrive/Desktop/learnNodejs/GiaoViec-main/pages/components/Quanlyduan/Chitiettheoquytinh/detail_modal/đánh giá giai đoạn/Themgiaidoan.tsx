"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Danhgiagiaidoan.module.css"
import { Select, Modal, Checkbox, Input } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";


const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};


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
                <Image width={18} height={18} src="/anh100.png" alt="" style={{ marginRight: 10 }} />
                Thêm giai đoạn
            </p>
            <Modal title='Thêm gia đoạn' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên giai đoạn <span>*</span></p>
                    <input type="text" placeholder="Tên giai đoạn" />
                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên quản trị giai đoạn <span>*</span></p>
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
                    <p className={styles.name}>Thêm thành viên thực hiện giai đoạn<span>*</span></p>
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
                    <p className={styles.name}>Người nhận nhiệm vụ sau khi chuyển giai đoạn<span>*</span> </p>
                    <Select
                        showSearch
                        placeholder="Lựa chọn người nhận công việc sau khi chuyển giai đoạn"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Người nhận nhiệm vụ ở giai đoạn trước',
                                label: 'Người nhận nhiệm vụ ở giai đoạn trước',
                            },
                            {
                                value: 'Người nhận nhiệm vụ đầu tiên',
                                label: 'Người nhận nhiệm vụ đầu tiên',
                            },
                            {
                                value: 'Giao lại ngẫu nhiên',
                                label: 'Giao lại ngẫu nhiên',
                            },
                            {
                                value: 'Giao lại cho người ít nhiệm vụ nhất',
                                label: 'Giao lại cho người ít nhiệm vụ nhất',
                            },
                            {
                                value: 'Để người nhận nhiệm vụ giai đoạn hiện tại quyết định',
                                label: 'Để người nhận nhiệm vụ giai đoạn hiện tại quyết định',
                            },
                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thời gian hoàn thành dự kiến<span>*</span> </p>
                    <Input suffix="giờ" placeholder="Nhập số giờ dự kiến hoàn thành công việc" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Điều chỉnh thời hạn hoàn thành công việc </p>
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Thời hạn không thể điều chỉnh',
                                label: 'Thời hạn không thể điều chỉnh',
                            },
                            {
                                value: 'Thời hạn điều chỉnh trong từng gia đoạn',
                                label: 'Thời hạn điều chỉnh trong từng gia đoạn',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Vị trí đặt giai đoạn<span>*</span></p>
                    <input name="" id="" placeholder="Trước giai đoạn hoàn thành" disabled />
                </div>



                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Thêm giai đoạn</button>
                </div>
            </Modal>
        </div>
    );
}
export default Themquytrinh;