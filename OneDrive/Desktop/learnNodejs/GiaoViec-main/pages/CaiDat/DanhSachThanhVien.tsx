
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  id: number;
  name: string;
  email: string;
  sdt: string ;
  phongban: string;
  vitri: string;
  

}

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
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
};

const App: React.FC = (  ) => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;