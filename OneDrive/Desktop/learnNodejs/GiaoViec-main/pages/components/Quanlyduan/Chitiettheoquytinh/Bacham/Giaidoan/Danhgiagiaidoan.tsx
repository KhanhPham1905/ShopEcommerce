import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";

const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Cập nhật đánh giá thành công')
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

            <p onClick={showModal} style={{ margin: 0 }} >
                <Image width={18} height={18} alt="" src="/sdr_met.png" style={{ marginRight: 10 }} />
                Đánh giá giai đoạn
            </p>
            <Modal title="Đánh giá giai đoạn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <label htmlFor="">ffd</label><br />
                <label htmlFor="">Trong quy trình: <i style={{ fontWeight: "normal" }}>làm việc 123</i></label>
                <div><label htmlFor="">Đánh giá giai đoạn <span>*</span></label>
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
                                value: 'Giai đoạn có độ rủi ro cao',
                                label: 'Giai đoạn có độ rủi ro cao',

                            },
                            {
                                value: 'Hoàn thành tốt',
                                label: 'Hoàn thành tốt',
                            },
                            {
                                value: 'Chậm tiến độ',
                                label: 'Chậm tiến độ',
                            },
                            {
                                value: 'Tăng tốc độ',
                                label: 'Tăng tốc độ',
                            },
                        ]}
                    />

                </div>
                <div className={styles.button} style={{ paddingTop: "30px" }}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Lưu</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;