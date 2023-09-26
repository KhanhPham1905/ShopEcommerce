import React, { useState } from 'react';
import { Input, Modal, Select } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css";


const Xoa: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        alert('Chuyển về giai đoạn trước đó thành công')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>

            <p onClick={showModal} style={{ margin: 0, color: "#ffffff", fontWeight: "normal", width: "50px", height: "38px", background: "#ffa800" }} >
                Chuyển về
            </p>
            <Modal title="Chuyển về" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px" }}>
                    <form action="" className="frm_cvgdt" >
                        <div className=" ">
                            <p style={{ fontWeight: "bold", margin: "0" }}>Giao lại cho: <i style={{ fontWeight: "normal" }}>(Người nhận nhiệm vụ ở giai đoạn trước)</i></p>
                            <div className="select_no_muti_li">
                                <label
                                    style={{ width: "440px", height: "30px", border: "1px solid #cccccc", borderRadius: "5px" }} />
                            </div>
                        </div>
                        <div className="">
                            <p style={{ fontWeight: "bold", margin: "0" }}>Thời lượng:</p>
                            <Input prefix="" suffix="giờ" />
                        </div>
                    </form>
                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Đồng ý</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;