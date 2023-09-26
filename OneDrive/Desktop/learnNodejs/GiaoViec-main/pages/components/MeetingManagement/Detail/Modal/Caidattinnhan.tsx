import React, { useState } from 'react';
import { Checkbox, Modal, Table } from 'antd';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/Chinhsuaphanquyen/Chinhsuaphanquyen.module.css";
import Image from 'next/image';


const dataSource = [
    {
        key: '1',
        name: 'Nhắc nhở trước 10 phút khi có cuộc họp',
        check1: <Checkbox />,

    },
    {
        key: '2',
        name: 'Nhận tin nhắn khi có cuộc họp mới cần tham gia',
        check1: <Checkbox />,

    },
    {
        key: '3',
        name: 'Nhận tin tin nhắn khi có cuộc họp được chỉnh sửa',
        check1: <Checkbox />,

    },
    {
        key: '4',
        name: 'Nhận tin nhắn khi cập nhật kết quả và biên bản họp',
        check1: <Checkbox />,

    }, {
        key: '5',
        name: 'Nhận tin nhắn khi xóa cuộc họp',
        check1: <Checkbox />,

    },

];

const columns = [
    {

        dataIndex: 'name',
        key: 'name',
    },
    {

        dataIndex: 'check1',
        key: 'check1',
    },

];

const Phanquyen: React.FC = () => {
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

            <p className="cv_dot" onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={16} alt="met" src="/tt_email.png" style={{ marginRight: "10px" }} />
                Cài đặt tin nhắn thông báo
            </p>
            <Modal title='Cài đặt email thông báo' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    scroll={{ x: "max-content" }}
                />
                <div className={styles.button}>

                    <button className={styles.ok} onClick={handleOk}>Cập nhật</button>
                </div>
            </Modal>
        </div>
    );
}

export default Phanquyen;