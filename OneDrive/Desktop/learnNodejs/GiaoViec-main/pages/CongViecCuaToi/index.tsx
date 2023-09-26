
import React, { useState } from 'react';
import Image from 'next/image';
import { Space, Table, Input, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
    key: number;
    stt: number;
    name: string;
    boss: string;
    status: string;
    time: string;
}
export interface PostPageAProps {

}
export default function PostPage({ selectedColor }: { selectedColor: string }) {
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 10;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',

        },
        {
            title: 'Tên công việc',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Người giao việc',
            dataIndex: 'boss',
            key: 'boss',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'name',
        },
        {
            title: 'Thời hạn công việc',
            dataIndex: 'time',
            key: 'time',
        },

    ]

    const data: DataType[] = [
        {
            key: 1,
            stt: 1,
            name: 'John Brown',
            boss: 'New York No. 1 Lake Park',
            status: 'quá hạn',
            time: "sadasd",

        },
        {
            key: 2,
            stt: 2,
            name: 'John Brown',
            boss: 'New York No. 1 Lake Park',
            status: 'quá hạn',
            time: "sadasd",

        },
        {
            key: 3,
            stt: 3,
            name: 'John Brown',
            boss: 'New York No. 1 Lake Park',
            status: 'quá hạn',
            time: "sadasd",

        },

    ];

    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedData = data.slice(startIndex, endIndex);

    return (
        <div className="margin_20px">
            <div className="box_work">
                <div id="list_work">
                    <div className={`text_work1 ${selectedColor}`} >
                        <h4 className={`name_list ${selectedColor}`}
                            style={{ fontSize: "16px", fontWeight: "bold" }}>

                            Danh sách công việc
                        </h4>
                    </div>
                    <form action="">
                        <div className="form_search">
                            <p></p>
                            <div className="searchcv">

                                <Search placeholder="Tìm kiếm công việc" onSearch={onSearch} />

                            </div>
                        </div>
                    </form>

                    <Table

                        columns={columns}
                        // dataSource={data}
                        dataSource={paginatedData}
                        scroll={{ x: "max-content" }} />

                </div>
                <div className="tt_pages">
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
}