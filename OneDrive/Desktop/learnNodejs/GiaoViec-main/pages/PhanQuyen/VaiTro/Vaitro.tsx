import React, { useState } from 'react';
import Image from 'next/image';
import { Input, Pagination, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './vaitro.module.css'
import Link from 'next/link';
import ModalDel from './ModalDel'
import { useRouter } from 'next/router';

export default function Vaitro({
    setActiveKey,
    setOpenKeys,
    selectedColor,
    isHasRole,
}: {
    isHasRole: boolean;
    setActiveKey: Function;
    setOpenKeys: Function;
    selectedColor: string
}) {
    const onClick = (info: any) => {
        setActiveKey(info?.key);
        info?.key === "trang-chu" ? setOpenKeys([]) : null;
    };

    interface DataType {
        key: string;
        name: string;
        text: string;

    }
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 10;


    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên vai trò',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Link className={styles.name_vaitro} href={'/'}> {text}</Link>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: ' ',
            key: 'action',
            render: (text, record) => (<div>
                {record.key >= '3' && isHasRole ? (
                    <Space size="middle">
                        <div className={styles.sua} key={"sua-vai-tro"}
                            onClick={() => onClick({ key: "sua-vai-tro" })} >
                            <Image width={18} height={16} alt='' src="/edit_ql_blue.png" />
                            Sửa
                        </div>
                        <span>/</span>
                        <ModalDel />
                    </Space>
                ) : (null)}
            </div>
            ),
        },
    ];


    const data: any = [
        {
            key: '1',
            name: <div className={styles.name_vaitro} key={"quan-ly-nhan-vien"}
                onClick={() => onClick({ key: "quan-ly-nhan-vien" })}> Quản lý cấp cao</div>,
            text: "fsdf",

        },
        {
            key: '2',
            name: <div className={styles.name_vaitro} key={"quan-ly-nhan-vien"}
                onClick={() => onClick({ key: "quan-ly-nhan-vien" })}> Nhân Viên</div>,
            text: "dffd",

        },
        {
            key: '3',
            name: <div className={styles.name_vaitro} key={"chi-tiet-vai-tro"}
                onClick={() => onClick({ key: "chi-tiet-vai-tro" })}> Joe</div>,
            text: "dfsfd",

        },
    ];
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedData = data.slice(startIndex, endIndex);

    return (
        <div className="margin_20px">
            <div className="box_work">
                <div id="list_work">
                    <div className={`text_work1 `}>
                        <h4 className={`name_list ${selectedColor}`} >Danh sách vai trò</h4>
                    </div>
                    <form action="">

                        {isHasRole ? (
                            <div className="form_search">
                                <div className={`${styles.btn_themmoi} ${selectedColor}`} key={"them-moi-vai-tro"}
                                    onClick={() => onClick({ key: "them-moi-vai-tro" })}>
                                    <p>+Thêm mới</p>
                                </div>

                                <div className="searchcv">

                                    <Search placeholder="Tìm kiếm dự án" onSearch={onSearch} />

                                </div>
                            </div>
                        ) : (<div className="form_search">
                            <p></p>

                            <div className="searchcv">

                                <Search placeholder="Tìm kiếm dự án" onSearch={onSearch} />

                            </div>
                        </div>)}

                    </form>

                    <Table
                        columns={columns}
                        // dataSource={ data}
                        dataSource={paginatedData}
                        scroll={{ x: "max-content" }}
                    />

                </div>
                <div className="tt_page" style={{ paddingTop: 20 }}>
                    <Pagination
                        current={currentPage}
                        total={data.length}
                        pageSize={PAGE_SIZE}
                        onChange={(page) =>
                            setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    )
};

