
import styles from './vaitro.module.css'

import React, { useState } from 'react';
import { Checkbox, Radio, Select, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { SelectProps, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import Image from 'next/image';


const onChanges = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

export default function Themvaitro({ setActiveKey, selectedColor }: { setActiveKey: Function, selectedColor: string }) {


    const renderApplyKey = () => {
        setActiveKey("vai-tro");
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [size, setSize] = useState<SizeType>('middle');
    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
    };
    const options: SelectProps['options'] = [
        {
            value: 'Xem',
            label: 'Xem',
            width: '100px'
        },
        {
            value: 'Thêm',
            label: 'Thêm',
        },
        {
            value: 'Sửa',
            label: 'Sửa',
        },
        {
            value: 'Xóa',
            label: 'Xóa',
        },
    ]




    return (
        <div>
            <div className="margin_20px">
                <div className="box_work">
                    <div id="list_work">
                        <div className="text_work1" onClick={renderApplyKey}>

                            <h4 className={`${styles.name_list} ${selectedColor}`}><Image width={7} height={14} alt='' src="/img15.png" style={{ marginRight: "5px" }} />Thêm vai trò</h4>
                        </div>
                        <div className={styles.noidung}>
                            <div className={styles.title1} >
                                <p className={styles.name}>Tên vai trò <span>*</span></p>
                                <input type="text" placeholder="Nhập tên vai trò" />
                            </div>
                            <div className={styles.title1}>
                                <p className={styles.name}>Mô tả</p>
                                <input name="" id="" placeholder='Nhập mô tả' />
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Quản lý dự án</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Theo danh sách công việc</p>
                                        <p className={styles.name1}>Theo danh quy trình</p>
                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Quản lý tài liệu</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Tài liệu công việc</p>
                                        <p className={styles.name1}>Tài liệu của tôi</p>
                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Quản lý phòng họp</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Địa điểm</p>
                                        <p className={styles.name1}>Phòng họp</p>

                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                        <Select style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Quản lý cuộc họp </p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Quản lý cuộc họp</p>


                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Công việc của tôi</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Công việc của tôi</p>


                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Báo cáo</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Theo quy trình</p>
                                        <p className={styles.name1}>Theo dự án</p>
                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Dữ liệu xoá gần đây</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Dữ liệu xoá gần đây</p>


                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Phân quyền</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Vai trò</p>
                                        <p className={styles.name1}>Người dùng</p>
                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.name}>Cài đặt</p>
                                <div className={styles.box}>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>
                                        <p className={styles.name1}>Cài đặt</p>


                                    </div>
                                    <div className={`boxvaitro ${styles.quanlyda}`}>

                                        <Select
                                            style={{ marginBottom: "30px" }}
                                            mode="multiple"
                                            size={size}
                                            placeholder="Chọn quyền"

                                            onChange={handleChange}

                                            options={options}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className={styles.button}>
                                <button className={`${styles.huy} `} >Hủy</button>
                                <button className={`${styles.ok} ${selectedColor}`} >Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
