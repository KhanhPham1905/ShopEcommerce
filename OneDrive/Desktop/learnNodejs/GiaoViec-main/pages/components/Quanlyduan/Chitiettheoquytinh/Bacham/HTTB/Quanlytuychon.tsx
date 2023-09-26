import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Giaidoan/Giaidoan.module.css";


const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Cập nhật thành công')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };


    return (
        <>

            <p className={styles.xoa} onClick={showModal} style={{ margin: 0, color: "black", fontWeight: "normal" }} >
                <Image width={18} height={18} alt="" src="/quanli.png" style={{ marginRight: 10 }} />
                Quản lý tùy chọn
            </p>
            <Modal className={styles.modal} title="Quản lý tùy chọn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ fontSize: "16px" }}>

                    <div>
                        <p style={{ margin: "0", fontWeight: "bold " }}>Tùy chọn kéo ngược <span style={{ color: "red" }}>*</span></p>
                        <Select

                            showSearch
                            placeholder="Đánh giá giai đoạn"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'Tùy chọn chuyển về giai đoạn trước đó',
                                    label: 'Tùy chọn chuyển về giai đoạn trước đó',

                                },
                                {
                                    value: 'Không thể chuyển nhiệm vụ về giai đoạn trước',
                                    label: 'Không thể chuyển nhiệm vụ về giai đoạn trước',
                                },
                                {
                                    value: 'Có thể chuyển về bất kỳ giai đoạn nào trước đó',
                                    label: 'Có thể chuyển về bất kỳ giai đoạn nào trước đó',
                                },

                            ]}
                        />

                    </div>

                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Cập nhật</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;