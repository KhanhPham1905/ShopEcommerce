"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from 'antd';

import Themtruongtuychinh from "./Themtruongtuychinh";

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Suatruongtuychinh from "./Suatruongtuychinh";
import Xoa from "./Xoa"

interface DataType {
    key: string;
    name: string;
    kieu: string;
    mota: string;

}
const columns: ColumnsType<DataType> = [
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '',
        dataIndex: 'kieu',
        key: 'kieu',
    },
    {
        title: '',
        dataIndex: 'mota',
        key: 'mota',
    },

    {
        title: '',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Suatruongtuychinh />
                <span>/</span>
                <Xoa />
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        kieu: "fasf",
        mota: 'New York No. 1 Lake Park',

    },
    {
        key: '2',
        name: 'Jim Green',
        kieu: 'sfsd',
        mota: 'London No. 1 Lake Park',

    },

];




const Themnhiemvu: React.FC = () => {
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

            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/quanli.png" alt="" style={{ marginRight: 10 }} />
                Quản lý trường tùy chỉnh
            </p>
            <Modal title='Thêm nhiệm vụ mới' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table columns={columns} dataSource={data}
                    style={{ borderBottom: "1px dashed #474747" }} />
                <Themtruongtuychinh />
            </Modal>
        </div>
    );
}
export default Themnhiemvu;