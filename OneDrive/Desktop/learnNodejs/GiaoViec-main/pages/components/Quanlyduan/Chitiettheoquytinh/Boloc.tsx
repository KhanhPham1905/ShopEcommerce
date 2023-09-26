"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Danh_gia_du_an.module.css";
import { Select, Modal, Checkbox } from 'antd';

import { CheckboxValueType } from "antd/es/checkbox/Group";


const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};



const Boloc: React.FC = () => {
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

            <div className="loc" style={{ background: "#ffffff" }} onClick={showModal} >
                <p style={{ margin: "0" }} >
                    Bộ lọc

                </p>
                <Image
                    width={18} height={13} alt=''
                    className="img_none"
                    src="/boloc.png"

                />
            </div>
            <Modal title='Bộ lọc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


                <div className="pd_20_bot25 nentrang">
                    <div className="bot-15">
                        <div className="w50 m_right_20">
                            <p className="font-medium chuden bot5">
                                Ngày tạo từ:
                            </p>
                            <input

                                className="date_bl date_bl_sta"
                                type="date"
                            />
                        </div>
                        <div className="w50">
                            <p className="font-medium chuden bot5">
                                Đến ngày:
                            </p>
                            <input

                                className="date_bl date_bl_end"
                                type="date"
                            />
                        </div>
                    </div>
                    <div className="bot25">
                        <p className="font-medium chuden bot5">
                            Trạng thái quy trình
                        </p>
                        <div className="select_no_muti_li">
                            <select
                                style={{ width: "100%" }}
                                className="select_status select2-hidden-accessible"

                                data-select2-id="select2-data-1-q71l"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option value={0}>Tất cả</option>
                                <option value={2}>Đã hoàn thành</option>
                                <option value={1}>Đang thực hiện</option>
                                <option value={3}>Quá hạn</option>
                            </select>
                        </div>
                    </div>
                    <div className="bot25">
                        <p className="font-medium chuden bot5">Đánh giá nhiệm vụ</p>
                        <div className="select_no_muti_li">
                            <select
                                style={{ width: "100%" }}
                                className="select_status js_danhgia_nv select2-hidden-accessible" data-select2-id="select2-data-4-pa70" tabIndex={-1} aria-hidden="true">
                                <option value={0} data-select2-id="select2-data-6-1o8q">Tất cả</option>
                                <option value={1} data-select2-id="select2-data-106-btvk">Chờ đánh giá</option>
                                <option value={2} data-select2-id="select2-data-107-d5wb">Vượt KPI </option>
                                <option value={3} data-select2-id="select2-data-108-a83i">Đạt yêu cầu</option>
                                <option value={4} data-select2-id="select2-data-109-z5nr">Chưa đạt yêu cầu</option>
                            </select>
                        </div>
                    </div>



                </div>

                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Cập nhật</button>
                </div>
            </Modal>
        </div>
    );
}
export default Boloc;