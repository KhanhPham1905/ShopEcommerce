"use client";
import React, { useState } from "react";
import { Input, List, Modal } from "antd";
import Image from 'next/image'


const { Search } = Input;
interface Follower {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;
}
const ListFollower = () => {
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
    const [data, setData] = useState<Follower[]>([
        {
            id: 1,
            name: "Nguyễn Văn Kha",
            email: "kha@example.com",
            avatarUrl: "/avatar1.jpg",
        },
        {
            id: 2,
            name: "Nguyễn Thị Mai",
            email: "mai@example.com",
            avatarUrl: "/avatar2.jpg",
        },
        // Add more followers here
    ]);

    const handleDelete = (index: number) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };
    return (
        <>
            <p className="cv_dot" onClick={showModal} style={{ margin: 0 }}>
                <Image width={18} height={18} alt="" src="/img_ntd.png" style={{ marginRight: 10 }} />
                Danh sách người theo dõi
            </p>
            <Modal
                title="Danh sách người theo dõi"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Search placeholder="Tìm kiếm người theo dõi" />
                <List
                    style={{ border: "none" }}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div>
                                <Image width={24} height={24} alt="" src={item.avatarUrl} />
                                <span>{item.name}</span>

                            </div>
                            <button onClick={() => handleDelete(index)}>Xóa</button>
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    );
};
export default ListFollower;
