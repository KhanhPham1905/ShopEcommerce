import React, { useState } from 'react'
import Image from 'next/image'
import { Modal, Select } from 'antd';

import styles from "@/pages/components/MeetingManagement/Detail/Modal/Editmeeting.module.css"
// import ClipboardJS from 'clipboard';

const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
};
export default function TrucTuyen() {

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
    // const clipboard = new ClipboardJS('.copy-button');

    // // Handle copying the link
    // const handleCopy = () => {
    //     // Use the clipboard instance to copy the input value
    //     const inputElement = document.getElementById('link-input') as HTMLInputElement;
    //     if (inputElement) {
    //         inputElement.select();
    //         document.execCommand('copy');
    //     }
    // };
    return (
        <div>
            <p className="cv_dot" onClick={showModal} style={{ margin: "0" }}>
                < Image
                    width={20} height={18} alt=''
                    src="/wif_meet.png"
                    style={{ marginRight: 10 }}
                />
                Thêm cuộc họp trực tuyến
            </p>
            <Modal title=" Thêm cuộc họp trực tuyến" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.content}>
                    <div className={styles.form_gr}>
                        <p>
                            Tên cuộc họp <span style={{ color: "red" }}>*</span>
                        </p>
                        <input style={{ width: "100%" }} type="text" placeholder="Nhập tên cuộc họp" />
                    </div>

                    <div className={styles.form_gr}>
                        <p>
                            Nội dung cuộc họp cuộc họp{" "}
                            <span style={{ color: "red" }}>*</span>
                        </p>
                        <textarea style={{ width: "100%" }} placeholder="Nhập nội dung cuộc họp" />
                    </div>

                    <div className={styles.form_gr}>
                        <div className={styles.gr}>
                            <div className={styles.date_start}>
                                <p>
                                    Thời gian bắt đầu{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    placeholder="date"
                                    type="date"
                                    style={{
                                        width: "132px",
                                        padding: "7px 10px",
                                        borderRadius: "5px",
                                        border: "1px solid black",
                                    }}
                                />
                            </div>
                            <div className={styles.time_start}>
                                <input type="time" placeholder="time" />
                            </div>
                            <div className={styles.time}>
                                <p>
                                    Thời lượng dự kiến
                                    <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    type="text"
                                    placeholder="Nhập số phút"
                                    style={{
                                        width: "132px",
                                        padding: "7px 10px",
                                        borderRadius: "5px",
                                        border: "1px solid black",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.form_gr}>
                        <p>Bộ phận</p>
                        <Select
                            mode="multiple"

                            placeholder="Chọn bộ phận hoặc phòng ban"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: "100%", color: "black" }}
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "Phòng 1",
                                    label: "Phòng 1",
                                },
                                {
                                    value: "Phòng 2",
                                    label: "Phòng 2",
                                },
                                {
                                    value: "Phòng 3",
                                    label: "Phòng 3",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.form_gr}>
                        <p>
                            Thêm chủ trì cuộc họp{" "}
                            <span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                            mode="multiple"

                            placeholder="Chọn người chủ trì cuộc họp"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: "1005" }}
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "Phòng 1",
                                    label: "Phòng 1",
                                },
                                {
                                    value: "Phòng 2",
                                    label: "Phòng 2",
                                },
                                {
                                    value: "Phòng 3",
                                    label: "Phòng 3",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.form_gr}>
                        <p>
                            Thêm thư ký cuộc họp <span style={{ color: "red" }}>*</span>
                        </p>
                        <Select
                            mode="multiple"
                            placeholder="Chọn thư ký cuộc họp"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "Phòng 1",
                                    label: "Phòng 1",
                                },
                                {
                                    value: "Phòng 2",
                                    label: "Phòng 2",
                                },
                                {
                                    value: "Phòng 3",
                                    label: "Phòng 3",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.form_gr}>
                        <p>Thêm người chuẩn bị cuộc họp</p>
                        <Select
                            mode="multiple"

                            placeholder="Chọn người chuẩn bị"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "Phòng 1",
                                    label: "Phòng 1",
                                },
                                {
                                    value: "Phòng 2",
                                    label: "Phòng 2",
                                },
                                {
                                    value: "Phòng 3",
                                    label: "Phòng 3",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.form_gr}>
                        <p>Thêm người tham gia cuộc họp</p>
                        <Select
                            // mode="multiple"

                            placeholder="Chọn người tham gia"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: "100%", color: "black" }}
                            filterOption={(input, option) =>
                                (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: "Phòng 1",
                                    label: "Phòng 1",
                                },
                                {
                                    value: "Phòng 2",
                                    label: "Phòng 2",
                                },
                                {
                                    value: "Phòng 3",
                                    label: "Phòng 3",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.form_gr}>
                        <p>Phòng họp</p>
                        <select name="aaa" id="" style={{ width: "100%" }}>
                            <option value="0">Họp mỗi ngày</option>
                            <option value="1">Phòng họp kiểm thử</option>
                            <option value="1">Phòng họp 11</option>
                        </select>
                    </div>
                    <div className={styles.form_gr}>
                        <div className={styles.link} style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>
                                Đường dẫn đi đến phòng họp
                            </p>
                            <button className="copy-button"
                                data-clipboard-target="#link-input"
                                // onClick={handleCopy}
                                style={{ border: "none", background: "none", color: "red" }}>
                                Sao chép đường dẫn
                            </button>
                        </div>
                        <input id="link-input"
                            style={{ width: "100%", height: "36px", border: "1px solid black" }}
                            type="text"
                            placeholder="Nhập đường dẫn cuộc họp"
                        />
                    </div>
                    <div>
                        <p style={{ textAlign: "center" }}>
                            <input placeholder="thongbao" type="checkbox" style={{ width: "15px" }} />
                            Gửi tin nhắn thông báo
                        </p>
                    </div>
                    <div className={styles.cancel_ok}>
                        <button onClick={handleCancel} className={styles.huy}>
                            Hủy
                        </button>
                        <button type="submit" className={styles.ok}>
                            Tạo cuộc họp
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
