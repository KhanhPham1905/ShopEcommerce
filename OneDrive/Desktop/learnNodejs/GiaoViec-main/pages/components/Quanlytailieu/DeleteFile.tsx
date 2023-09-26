import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/thêm trường tùy chỉnh/truong.module.css"
import { POST } from '@/pages/api/auth';

const Xoa: any = ({id, setReload}:{id: string, setReload: Function}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (e:any) => {
        POST(`files/quan-ly-tai-lieu-cong-viec/xoa-tai-lieu/${id}/`)
        .then(res =>{
            if(res){
                setReload(true)
                setIsModalOpen(false);
                alert('Xóa tài liệu thành công')
            }
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Image width={15} height={19} alt=""
                style={{ margin: "0 5px" }}
                src="/delete_folder.png"
                onClick={showModal}
            />
            <Modal

                title="Xác nhận xóa tài liệu" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div style={{ padding: "20px", fontSize: "16px", textAlign: "center" }}>
                    Bạn có chắc muốn xóa <span style={{ fontWeight: "bold" }}>tài liệu</span> này không ?


                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Xác nhận</button>
                </div>
            </Modal>
        </>
    );
};

export default Xoa;