import React, { useState } from 'react';
import Image from 'next/image'
import { Button, Modal, Select } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from "./Editmeeting.module.css"
const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
};

const EditMeeting: React.FC = () => {
    const [tenCuocHop, setTenCuocHop] = useState('');
    const [noiDungCuocHop, setNoiDungCuocHop] = useState('');
    const [thoiGianBatDau, setThoiGianBatDau] = useState('');
    const [thoiLuongDuKien, setThoiLuongDuKien] = useState('');



    const [isSaveClicked, setIsSaveClicked] = useState(false);
    const handleSaveClick = () => {
        setIsSaveClicked(true);
        if (!tenCuocHop || !noiDungCuocHop || !thoiGianBatDau || !thoiLuongDuKien) {

            return;
        }
        // Xử lý logic lưu dữ liệu ở đây
        console.log('Dữ liệu đã được lưu.');
        setIsModalOpen(false);
    };




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
        <>
            <p className="cv_dot" onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={16} alt="met" src="/editch.png" style={{ marginRight: "10px" }} />
                Chỉnh sửa cuộc họp
            </p>
            <Modal title="Sửa cuộc họp trực tiếp" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.offline}>

                    <div className={styles.off_content}>

                        <div className={styles.content}>
                            <div className={styles.form_gr}>
                                <p>Tên cuộc họp <span style={{ color: "red" }}>*</span></p>
                                <input style={{ width: "100%" }} type="text" placeholder='Nhập tên cuộc họp' onChange={(e) => setTenCuocHop(e.target.value)} required />

                                {isSaveClicked && tenCuocHop === '' && <p style={{
                                    color: "red",
                                    fontSize: "11px",
                                    marginTop: "5px"
                                }}
                                >Không được bỏ trống phần này!!</p>}

                            </div>


                            <div className={styles.form_gr}>
                                <p>Nội dung cuộc họp cuộc họp <span style={{ color: "red" }}>*</span></p>
                                <textarea style={{ width: "100%" }} placeholder='Nhập nội dung cuộc họp' onChange={(e) => setNoiDungCuocHop(e.target.value)} required />

                                {isSaveClicked && noiDungCuocHop === '' && <p style={{
                                    color: "red",
                                    fontSize: "11px",
                                    marginTop: "5px"
                                }}
                                >Không được bỏ trống phần này!!</p>}


                            </div>

                            <div className={styles.form_gr}>
                                <div className={`${styles.timegr} ${styles.gr}`}>
                                    <div className={styles.date_start}>
                                        <p>Thời gian bắt đầu <span style={{ color: "red" }}>*</span></p>
                                        <input type="date" style={{ width: "132px", padding: "7px 10px", borderRadius: "5px", border: "1px solid black" }} onChange={(e) => setThoiGianBatDau(e.target.value)} required />
                                        {isSaveClicked && thoiGianBatDau === '' && <p style={{
                                            color: "red",
                                            fontSize: "11px",
                                            marginTop: "5px"
                                        }}
                                        >Không được để trống!!</p>}





                                    </div>
                                    <div className={styles.time_start}>
                                        <input type="time" style={{ width: "132px", padding: "7px 10px", borderRadius: "5px", border: "1px solid black" }} />
                                    </div>
                                    <div className={styles.time}>
                                        <p>Thời lượng dự kiến<span style={{ color: "red" }}>*</span></p>
                                        <input type="text" placeholder='Nhập số phút' style={{ width: "132px", padding: "7px 10px", borderRadius: "5px", border: "1px solid black" }}
                                            onChange={(e) => setThoiLuongDuKien(e.target.value)} required

                                        />


                                        {isSaveClicked && thoiLuongDuKien === '' && <p style={{
                                            color: "red",
                                            fontSize: "11px",
                                            marginTop: "5px"
                                        }}
                                        >Không được để trống!!</p>}
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
                                    style={{ width: '100%', color: "black" }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Phòng 1',
                                            label: 'Phòng 1',

                                        },
                                        {
                                            value: 'Phòng 2',
                                            label: 'Phòng 2',
                                        },
                                        {
                                            value: 'Phòng 3',
                                            label: 'Phòng 3',
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.form_gr}>
                                <p>Thêm chủ trì cuộc họp <span style={{ color: "red" }}>*</span></p>
                                <Select
                                    mode="multiple"

                                    placeholder="Chọn người chủ trì cuộc họp"
                                    defaultValue={[]}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Phòng 1',
                                            label: 'Phòng 1',

                                        },
                                        {
                                            value: 'Phòng 2',
                                            label: 'Phòng 2',
                                        },
                                        {
                                            value: 'Phòng 3',
                                            label: 'Phòng 3',
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.form_gr}>
                                <p>Thêm thư ký cuộc họp <span style={{ color: "red" }}>*</span></p>
                                <Select
                                    mode="multiple"

                                    placeholder="Chọn thư ký cuộc họp"
                                    defaultValue={[]}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Phòng 1',
                                            label: 'Phòng 1',

                                        },
                                        {
                                            value: 'Phòng 2',
                                            label: 'Phòng 2',
                                        },
                                        {
                                            value: 'Phòng 3',
                                            label: 'Phòng 3',
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
                                    style={{ width: '100%' }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Phòng 1',
                                            label: 'Phòng 1',

                                        },
                                        {
                                            value: 'Phòng 2',
                                            label: 'Phòng 2',
                                        },
                                        {
                                            value: 'Phòng 3',
                                            label: 'Phòng 3',
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.form_gr}>
                                <p>Thêm người tham gia cuộc họp</p>
                                <Select

                                    placeholder="Chọn người tham gia"
                                    defaultValue={[]}
                                    onChange={handleChange}
                                    style={{ width: '100%', height: "38px", color: "black" }}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Phòng 1',
                                            label: 'Phòng 1',

                                        },
                                        {
                                            value: 'Phòng 2',
                                            label: 'Phòng 2',
                                        },
                                        {
                                            value: 'Phòng 3',
                                            label: 'Phòng 3',
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.form_gr}>
                                <p>Phòng họp</p>
                                <select name="" id="" style={{ width: "100%" }}>
                                    <option value="0">Họp mỗi ngày</option>
                                    <option value="1">Phòng họp kiểm thử</option>
                                    <option value="1">Phòng họp 11</option>
                                </select>
                            </div>
                            <div>
                                <p style={{ textAlign: "center" }}>
                                    <input type="checkbox" style={{ width: "15px" }} />
                                    Gửi tin nhắn thông báo
                                </p>

                            </div>
                            <div className={styles.cancel_ok}>
                                <button onClick={handleCancel} className={styles.huy}>Hủy</button>
                                <button key="save" type="submit" onClick={handleSaveClick} className={styles.ok}>Tạo cuộc họp</button>
                            </div>
                        </div>

                    </div>

                </div>
            </Modal>
        </>
    );
};

export default EditMeeting;