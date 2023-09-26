import React, { useState } from 'react';
import { Checkbox, Modal, Table } from 'antd';
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/detail_modal/Chinhsuaphanquyen/Chinhsuaphanquyen.module.css";
import Image from 'next/image';


const dataSource = [
    {
        key: '1',
        name: 'Xem biên bản cuộc họp',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '2',
        name: 'Tải lên biên bản cuộc họp',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '3',
        name: 'Cài đặt email thông báo',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '4',
        name: 'Hủy cuộc họp',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },

];

const columns = [
    {
        title: ' ',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Thành viên quản lý',
        dataIndex: 'check1',
        key: 'check1',
    },
    {
        title: 'Thành viên',
        dataIndex: 'check2',
        key: 'check2',
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

            <p className="cv_dot" onClick={showModal} style={{ margin: '0' }}>
                <Image width={18} height={16} alt="met" src="/dtbt_met.png" style={{ marginRight: "10px" }} />
                Quản lý phân quyền cuộc họp
            </p>

            <Modal title='Chỉnh sửa phân quyền cuộc họp' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table columns={columns} dataSource={dataSource} scroll={{ x: "max-content" }} />
                <div className={styles.button}>

                    <button className={styles.ok} onClick={handleOk}>Cập nhật</button>

                </div>

            </Modal>

        </div>
    );
}

export default Phanquyen;