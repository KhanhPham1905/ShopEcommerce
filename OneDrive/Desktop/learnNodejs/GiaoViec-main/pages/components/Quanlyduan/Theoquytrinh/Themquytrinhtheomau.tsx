"use client"
import React, { useState } from "react";
import styles from "./Theoquytrinh.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";


const onChanges = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

const plainOptions = ['Quan trọng', 'Khẩn cấp'];


const options: SelectProps['options'] = [];


const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

const Add_duan: React.FC = () => {
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
                <Image width={18} height={18} src="/img_add_qttm.png" alt="" style={{ marginRight: 10 }} />
                Thêm quy trình theo mẫu
            </p>
            <Modal title='Thêm quy trình theo mẫu' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên quy trình <span>*</span></p>
                    <input style={{ width: "100%" }} type="text" placeholder="Tên quy trình" />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ quy trình <span>*</span></p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={onChanges} />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Theo mẫu quy trình <span>*</span></p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn quy trình"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhiệm vụ/Giai đoạn <span>*</span></p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn quy trình"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Giữ lại tất cả nhiệm vụ và giai đoạn',
                                label: 'Giữ lại tất cả nhiệm vụ và giai đoạn',
                            },
                            {
                                value: 'Giữ lại giai đoạn',
                                label: 'Giữ lại giai đoạn',
                            },
                            {
                                value: 'Không giữ lại nhiệm vụ và giai đoạn',
                                label: 'Không giữ lại nhiệm vụ và giai đoạn',
                            },
                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên chủ trì<span>*</span> </p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn thành viên chủ trì"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Giữ nguyên thông tin thành viên chủ trì',
                                label: 'Giữ nguyên thông tin thành viên chủ trì',
                            },
                            {
                                value: 'Không giữ lại thông tin thành viên chủ trì',
                                label: 'Không giữ lại thông tin thành viên chủ trì',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện<span>*</span> </p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn thành viên thực hiện"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Giữ nguyên thông tin thành viên thực hiện',
                                label: 'Giữ nguyên thông tin thành viên thực hiện',
                            },
                            {
                                value: 'Không giữ lại thông tin thành viên thực hiện',
                                label: 'Không giữ lại thông tin thành viên thực hiện',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên theo dõi <span>*</span></p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn thành viên theo dõi"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Giữ lại thông tin thành viên theo dõi công việc',
                                label: 'Giữ lại thông tin thành viên theo dõi công việc',
                            },
                            {
                                value: 'Không giữ lại thông tin thành viên theo dõi công việc',
                                label: 'Không giữ lại thông tin thành viên theo dõi công việc',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên đánh giá công việc<span>*</span> </p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Chọn thành viên đánh giá"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'Giữ lại thông tin thành viên đánh giá công việc',
                                label: 'Giữ lại thông tin thành viên đánh giá công việc',
                            },
                            {
                                value: 'Không giữ lại thông tin thành viên đánh giá công việc',
                                label: 'Không giữ lại thông tin thành viên đánh giá công việc',
                            },

                        ]}
                    />
                </div>


                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Thêm quy trình</button>
                </div>
            </Modal>
        </div>
    );
}
export default Add_duan;