"use client"
import Image from "next/image";

import React, { useState, useEffect } from 'react';
import { Space, Table, Input, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from "next/link";
import Tuychinh from "./Tuychinh";
import { POST } from '@/pages/api/auth';

const { Search } = Input;

interface DataType {
  key: string;
  name: string;
  nguoithuchien: string;
  end_time: string;
  ngayll: string;
  time: string;
}


export default function Dscvlaplai({
  setActiveKey,
  setOpenKeys,
  isHasRole,
  selectedColor

}: {
  isHasRole: boolean;
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
}) {

  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };
  const renderApplyKey = () => {
    setActiveKey("theo-danh-sach-cong-viec");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;
  const [valueSearch, setValueSearch] = useState('')
  const [page, setPage]= useState(1);
  const [reload, setReload] = useState(true)
  const [data, setData]:any = useState([]);

  useEffect(()=>{
    if(reload){ 
      POST(`projects/danh-sach-lap-lai/${page}?keywords=${valueSearch}`)
      .then(res=>{
        if(res?.data?.jobRepeat?.length === 10){
          setPage(page+1)  
        }else{
          setReload(false)
          setPage(1)
        }
        if(page === 1){
          setData(res?.data?.jobRepeat)
        }else{
          setData([...data,...res?.data?.jobRepeat])
        }
      })
    }
  },[page,reload,valueSearch])
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên công việc',
      dataIndex: 'job_name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Người thực hiện',
      dataIndex: 'nguoithuchien',
      key: 'nguoithuchien',
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'time_out',
      key: 'end_time',
    },
    {
      title: 'Ngày lặp lại',
      key: 'ngayll',
      render: (record:any) => <div>{record?.date_repeat || record?.day_repeat}</div>
    },
    {
      title: 'Thời gian áp dụng',
      key: 'time',
      render:(record:any) => 
      <div>
        <div>{record?.date_start}</div>
        <div>{record?.date_end}</div>
      </div>
    },


    {
      title: 'Tùy chỉnh',
      key: 'action',
      render: (record: DataType) => (
          <Tuychinh record={record} setReload={setReload}/> 
      ),
    },
  ];

  const onSearch = async (value: string) => {
    setValueSearch(value);
    setPage(1);
    setCurrentPage(1);
    setReload(true);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedData = data?.slice(startIndex, endIndex);
  return (
    <div>
      {/* Công ty */}
      {isHasRole ? (
        <div className="margin_2x">
          <div className={`text_cv `} onClick={renderApplyKey}>
            <div >
              <Image width={14} height={18} alt="" src="/img15.png" />
            </div>
            <h4 className="name_cv">Danh sách công việc lặp lại</h4>
          </div>
          <form action="">
            <div className="form_search_cv">
              <div className="search_cv">
                <Search placeholder="Tìm kiếm công việc" onSearch={onSearch} />

              </div>
            </div>
          </form>
        </div>
      ) :
        // Nhân viên

        (<div className="margin_2x">
          <div className="text_cv" onClick={renderApplyKey} >
            <div style={{ width: "14px", height: "18px", paddingBottom: "5px" }}>
              <Image width={14} height={18} alt="" src="/img15.png" />
            </div>
            <h4 className="name_cv">Danh sách công việc lặp lại</h4>
          </div>
          <form action="">
            <div className="form_search_cv">
              <div className="search_cv">
                <Search placeholder="Tìm kiếm công việc" onSearch={onSearch} />

              </div>
            </div>
          </form>
        </div>)}
        <Table columns={columns}
            //  dataSource={data} 
            dataSource={paginatedData}
            scroll={{ x: "max-content" }} />
          <Pagination
            current={currentPage}
            total={data?.length}
            pageSize={PAGE_SIZE}
            onChange={(page) =>
              setCurrentPage(page)}
          />
    </div>
  );
}
