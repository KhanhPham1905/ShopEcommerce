"use client";
import React, { useEffect, useState } from 'react';
import { Pagination, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Btn_diadiem from './Btn_diadiem';
import Edit_address from './Edit_address';
import Delete from './Delete';
import { POST, POST_PARAM } from '@/pages/api/auth';
// import { log } from 'console';

export interface PostPageAProps { }

export default function Diadiem({
  selectedColor,
  isHasRole,
}:{
  isHasRole: boolean;
  selectedColor: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [page,setPage] = useState(1);
  const [data,setData]:any = useState([])
  const [dvsd,setDvsd] = useState('')
  const [reload,setReload] = useState(true)
  const [paginatedData, setPaginatedData]:any = useState([])
  const PAGE_SIZE = 10;
  const columns:any= [
    {
      title: 'Địa điểm',
      render: (record:any) => <p style={{fontWeight:'600',color:'#4c5bd4'}}>{record?.name}</p>,
    },
    {
      title: 'Đơn vị sử dụng',
      render: (record:any) => <p>{record?.dvsd}</p>,
    },
    {
      title: 'Địa chỉ',
      render: (record:any) => <p>{record?.address}</p>,
    },
    {
      title: 'Chức năng',
      key: 'action',
      render: (record:any) => (
        <div>
          {isHasRole ? (
            <Space size="middle">
              <Edit_address data={record} dvsd={dvsd} setReload = {setReload}/>
              <span>|</span>
              <Delete id={record?.id} setReload = {setReload}/>
            </Space>
          ) : (null)}
        </div>
      ),
      width: "15%",
    },
  ];
  useEffect(()=>{
    if(reload){
      POST_PARAM('meeting-rooms/quan-ly-dia-diem',{},page)
      .then(res=>{
        if(res?.data?.place?.length === 10){
          setPage(page+1)  
        }else{
          setReload(false)
          setPage(1)
        }
        if(page === 1){
          setData(res?.data?.place)
        }else{
          setData([...data,...res?.data?.place])
        }
        setDvsd(res?.data?.com_name)
      })
    }
  },[page,reload])
  useEffect(()=>{
    // log("test log")
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    setPaginatedData(data?.slice(startIndex, endIndex))
  },[currentPage,data])
  useEffect(()=>{
    // console.log(paginatedData);
  },[paginatedData])
  return (
    <div className="margin_20px">
      <div className="box_work">
        <div id="list_work">
          <div className="text_work1">
            <h4 className={` name_list ${selectedColor}`} style={{ fontSize: "16px", fontWeight: "bold" }}>Danh sách địa điểm</h4>
          </div>
          <form action="">
            {isHasRole ? (
              <div className="form_search">
                <Btn_diadiem 
                  selectedColor={selectedColor} 
                  dvsd={dvsd} 
                  setReload = {setReload}
                />
              </div>
            ) : (null)}
          </form>
          <Table
            columns={columns}
            // dataSource={data}
            dataSource={paginatedData}
            scroll={{ x: "max-content" }} />
        </div>
        <div className="tt_pages" >
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={PAGE_SIZE}
            onChange={(page) =>
              setCurrentPage(page)}
          />
        </div>
      </div>
    </div>);
}



