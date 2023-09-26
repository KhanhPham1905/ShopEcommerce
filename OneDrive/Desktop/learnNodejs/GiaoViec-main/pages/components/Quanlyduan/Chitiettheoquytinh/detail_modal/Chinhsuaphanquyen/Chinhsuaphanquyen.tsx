import React, { useState } from 'react';
import { Checkbox, Modal, Table } from 'antd';
import styles from "./Chinhsuaphanquyen.module.css";
import Image from 'next/image';


const dataSource = [
    {
        key: '1',
        name: 'Thêm giai đoạn',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '2',
        name: 'Thêm nhiệm vụ',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '3',
        name: 'Chỉnh sửa nhiệm vụ',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '4',
        name: 'Quyền chuyển tiếp nhiệm vụ sang giai đoạn khác',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '5',
        name: 'Quyền chỉnh sửa giai đoạn',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '6',
        name: 'Quyền chỉnh sửa quản lý tuỳ chọn',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '7',
        name: 'Quyền cập nhật kết quả nhiệm vụ',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '8',
        name: 'Quyền xóa nhiệm vụ',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },
    {
        key: '9',
        name: 'Quyền xoá giai đoạn',
        check1: <Checkbox />,
        check2: <Checkbox />,
    },

];

const columns = [
    {
        title: 'Các quyền',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Thành viên quản trị',
        dataIndex: 'check1',
        key: 'check1',
    },
    {
        title: 'Thành viên thực hiện',
        dataIndex: 'check2',
        key: 'check2',
    },
];

const Suaphanquyen: React.FC = () => {
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

            <p className="cv_dot" onClick={showModal} style={{ margin: 0 }}>
                <Image width={18} height={18} alt="" src="/user_dsda.png" style={{ marginRight: 10 }} />
                Chỉnh sửa phân quyền
            </p>
            <Modal title='Chỉnh sửa phân quyền' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table columns={columns} dataSource={dataSource} />
                <div className={styles.button}>

                    <button className={styles.ok} onClick={handleOk}>Cập nhật</button>
                </div>
            </Modal>
        </div>
    );
}

export default Suaphanquyen;