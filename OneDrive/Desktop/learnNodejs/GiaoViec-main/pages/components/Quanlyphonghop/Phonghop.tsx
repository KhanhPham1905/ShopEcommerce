import React, { useEffect, useState } from 'react';
import { Pagination, Space, Table, Tag } from 'antd';

import Btn_meeting from './Btn_meeting'
import Edit_meeting from './Edit_meeting'
import DeletePhonghop from './DeletePhonghop';

import { POST_PARAM } from '@/pages/api/auth';
export interface PostPageAProps { }

export default function Phonghop({
  selectedColor,
  isHasRole,
}: {
  isHasRole: boolean;
  selectedColor: string;
}) {
  const [data, setData]:any = useState([])
  const [listPlace, setListPlace]:any = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage]= useState(1);
  const [reload, setReload] = useState(true)
  const PAGE_SIZE = 10;
  const columns:any = [
    {
      title: 'Tên phòng',
      render: (record:any) => <p>{record?.name}</p>,
    },
    {
      title: 'Địa điểm',
      render: (record:any) => <p>{record?.diadiem}</p>,
    },
    {
      title: 'Sức chứa',
      render: (record:any) => <p>{record?.succhua}</p>,
    },
    {
      title: 'Trạng thái',
      render: (record:any) => (
        <>
          {
            record?.trangthai === 1 ?
            <Tag color={'green'}>
              ĐANG HOẠT ĐỘNG
            </Tag>:
            <Tag color={'red'}>
              NGƯNG HOẠT ĐỘNG
            </Tag>
          }
        </>
      ),
    },
    {
      title: '',
      render: (record:any) => (
        <div>
          {isHasRole ? (
            <Space size="middle">
              <Edit_meeting data={record} listPlace={listPlace} setReload = {setReload}/>
              <span>|</span>
              <DeletePhonghop id={record?.id} setReload = {setReload}/>
            </Space>
          ) : (null)}
        </div>
      ),
    },
  ]
  useEffect(()=>{
    if(reload){
      POST_PARAM('meeting-rooms/quan-ly-phong-hop',{},page)
      .then(res=>{
        if(res?.data?.meetingRoom?.length === 10){
          setPage(page+1)  
        }else{
          setReload(false)
          setPage(1)
        }
        if(page === 1){
          setData(res?.data?.meetingRoom)
        }else{
          setData([...data,...res?.data?.meetingRoom])
        }
        setListPlace(res?.data?.listPlace)
      })
    }
  },[page,reload])
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedData = data.slice(startIndex, endIndex);
  // console.log(paginatedData);
  return (
    <div className="margin_20px">
      <div className="box_work">
        <div id="list_work">
          <div className="text_work1">
            <h4 className={`name_list ${selectedColor}`} style={{ fontSize: "16px", fontWeight: "bold" }}>Danh sách phòng họp</h4>
          </div>
          <form action="">
            {isHasRole ? (
              <div className="form_search">
                <Btn_meeting selectedColor={selectedColor} listPlace={listPlace} setReload={setReload}/>
              </div>
            ) : (null)}
          </form>
          <Table
            className="table"
            scroll={{ x: "max-content" }}
            columns={columns}
            // dataSource={data} 
            dataSource={paginatedData}
          />
        </div>
        <div className="tt_pages" style={{ paddingTop: 10 }} >
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
