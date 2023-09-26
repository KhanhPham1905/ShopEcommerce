
import React, { useState } from 'react';
import { Table, Input, Pagination } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import Image from 'next/image';
import styles from '@/pages/PhanQuyen/VaiTro/vaitro.module.css'
interface DataType {
  key: React.Key;
  id: number;
  name: string;
  email: string;
  sdt: string;
  phongban: string;
  vitri: string;


}

const App = ({ selectedColor }: { selectedColor: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '    Họ & Tên',
      dataIndex: 'name',

    },
    {
      title: 'Email',
      dataIndex: 'email',
    },

    {
      title: 'SĐT',
      dataIndex: 'sdt',

    },
    {
      title: 'Phòng Ban',
      dataIndex: 'phongban',
      filters: [
        {
          text: 'KỸ THUẬT',
          value: 'KỸ THUẬT',
        },
        {
          text: 'BIÊN TẬP',
          value: 'BIÊN TẬP',
        },
      ],
      onFilter: (value: any, record: any) => record.phongban.startsWith(value),
      filterSearch: true,
      width: '30%',
    },
    {
      title: 'Vị trí',
      dataIndex: 'vitri',
      filters: [
        {
          text: 'SINH VIÊN THỰC TẬP',
          value: 'SINH VIÊN THỰC TẬP',
        },
        {
          text: 'NHÂN VIÊN CHÍNH THỨC',
          value: 'NHÂN VIÊN CHÍNH THỨC',
        },
      ],
      onFilter: (value: any, record: any) => record.vitri.startsWith(value),
      filterSearch: true,
      width: '30%',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      id: 4,
      name: 'John Brown',
      email: 'kkkk',
      sdt: '0111',
      phongban: 'KỸ THUẬT',
      vitri: 'SINH VIÊN THỰC TẬP',
    },
    {
      key: '2',
      id: 999,
      name: 'Jim Green',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'BIÊN TẬP',
      vitri: 'SINH VIÊN PART TIME',
    },
    {
      key: '3',
      id: 888,
      name: 'Joe Black',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'KINH DOANH',
      vitri: 'NHÂN VIÊN CHÍNH THỨC',
    },
    {
      key: '4',
      id: 9,
      name: 'Jim Red',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'SEO',
      vitri: 'TRƯỞNG NHÓM',
    },
    {
      key: '5',
      id: 4,
      name: 'John Brown',
      email: 'kkkk',
      sdt: '0111',
      phongban: 'KỸ THUẬT',
      vitri: 'SINH VIÊN THỰC TẬP',
    },
    {
      key: '6',
      id: 999,
      name: 'Jim Green',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'BIÊN TẬP',
      vitri: 'SINH VIÊN PART TIME',
    },
    {
      key: '7',
      id: 888,
      name: 'Joe Black',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'KINH DOANH',
      vitri: 'NHÂN VIÊN CHÍNH THỨC',
    },
    {
      key: '8',
      id: 9,
      name: 'Jim Red',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'SEO',
      vitri: 'TRƯỞNG NHÓM',
    },
    {
      key: '9',
      id: 4,
      name: 'John Brown',
      email: 'kkkk',
      sdt: '0111',
      phongban: 'KỸ THUẬT',
      vitri: 'SINH VIÊN THỰC TẬP',
    },
    {
      key: '10',
      id: 999,
      name: 'Jim Green',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'BIÊN TẬP',
      vitri: 'SINH VIÊN PART TIME',
    },
    {
      key: '11',
      id: 888,
      name: 'Joe Black',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'KINH DOANH',
      vitri: 'NHÂN VIÊN CHÍNH THỨC',
    },
    {
      key: '12',
      id: 9,
      name: 'Jim Red',
      email: 'kkkk',
      sdt: '01233',
      phongban: 'SEO',
      vitri: 'TRƯỞNG NHÓM',
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedData = data.slice(startIndex, endIndex);
  return (
    <div className="margin_20px">
      <div className="box_work">
        <div id="list_work">
          <div className="text_work1">
            <h4 className={`name_list ${selectedColor}`}>Danh sách nhân viên</h4>
          </div>
          <form action="">
            <div className="form_search">
              <p></p>
              <div className="searchcv">

                <Search placeholder="Tìm kiếm dự án" onSearch={onSearch} />

              </div>
            </div>
          </form>
          <Table
            columns={columns}
            // dataSource={data}
            dataSource={paginatedData}
            onChange={onChange}
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
}
export default App;