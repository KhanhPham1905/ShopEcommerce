import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { Input, Pagination } from 'antd';
import { convertDateFormat, calculateTaskStatus} from '@/utils/dataUtils';
import Btn_themmoi from '@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoi';
import { POST } from '@/pages/api/auth';
import {ListEpContext} from "@/components/context/listEpContext"

export default function Listwork({
  setActiveKey,
  setOpenKeys,
  selectedColor,
  isHasRole,
  setIdProject,
}: {
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
  isHasRole: boolean;
  setIdProject: Function;

}) {
  const listEp:any = useContext(ListEpContext);
  const [listP, setListP] = useState([]);
  const [textSearch, setTextSearch]:any = useState(''); 
  const [allContent, setAllContent]:any = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [reload, setReload] = useState(false)
  useEffect(() => {
    try{
      POST(`projects/quan-ly-du-an-theo-danh-sach-cong-viec/${currentPage}?keywords=${textSearch}`).then((res) => {
        setListP(res?.data?.project);
        setAllContent(res?.data?.total)
      });
     }catch(e){
      console.log(e);
     }
  }, [currentPage, reload]);
  
  const startClick = (info: any, item : any) => {
    setIdProject(item)
    setActiveKey(info?.key);
    info?.key === 'trang-chu' ? setOpenKeys([]) : null;
  };
  const { Search } = Input;

  const onSearch = async (value: any) => {
    setTextSearch(value);
    try {
      const response = await POST(`projects/quan-ly-du-an-theo-danh-sach-cong-viec/${currentPage}?keywords=${value}`);
        setListP(response.data.project);
        setAllContent(response?.data?.total)
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };


  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  };

  
  const handleProjectMember = (item:any) => {
    let nameMember = '';
    const memberIDs = item.project_member.split(",");
    const result = memberIDs.map((id:any) => {
      for (let i = 0; i < listEp?.length; i++) {
        const epItem = listEp[i];
        if (epItem._id === Number(id)) {
          nameMember = epItem.userName;
          break;
        }
      }
      return (
        <div key={item.id}>
          <Image
            width={22}
            height={22}
            src="/Group 626671.png"
            alt=""
            className="img_table_work"
          />
          {nameMember}
        </div>
      );
    });
    return result;
  };

  const handleProjectManagement = (item:any) => {
    const memberIDs = item.project_management.split(",");
    const result = memberIDs.map((id:any) => {
      let nameManagement = '';
      for (let i = 0; i < listEp?.length; i++) {
        const epItem = listEp[i];
        if (epItem._id === Number(id)) {
          nameManagement = epItem.userName;
          break;
        }
      }
      return (
        <div key={item.id}>
          <Image
            width={22}
            height={22}
            src="/Group 626671.png"
            alt=""
            className="img_table_work"
          />
          {nameManagement}
        </div>
      );
    });
  return result;
  };

  return (
    <div>
      <div>
        <div className="margin_20px">
          <div className="box_work">
            <div id="list_work">
              <div className="text_work1">
                <h4 className={`name_list ${selectedColor}`}>
                  Danh sách dự án
                </h4>
              </div>

              {isHasRole ? (
                // =====================================Công ty================================
                <div>
                  <form action="">
                    <div className="form_search">
                      <Btn_themmoi selectedColor={selectedColor}  listEp={listEp} listP={listP} setReload={setReload}/>
                      <br />
                      <div className="searchcv" onKeyDown={e=>{
                        if(e.key==='Enter'){
                          e.preventDefault()
                        }
                      }}>
                        <Search
                          placeholder="Tìm kiếm dự án"
                          onSearch={onSearch}
                        />
                      </div>
                    </div>   
                  </form>
                  <div className="scrollmobile table-container">
                    <table className="tbl_work">
                      <thead>
                        <tr>
                          <th className="stt_tbl">STT</th>
                          <th className="name_work_tbl">Tên dự án</th>
                          <th>Nhân sự thực hiện</th>
                          <th>Nhân sự quản lý</th>
                          <th>Trạng thái</th>
                          <th>Thời gian</th>
                        </tr>
                      </thead>
                      <tbody>
                        { listP?.map((item:any, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{index + 1}</td>
                              <td>
                                <div
                                  onClick={() =>
                                    startClick(
                                     { key: 'chi-tiet-theo-danh-sach'},
                                    item
                                   )
                                  }
                                  style={{
                                    color: '#4c5bd4',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {item.project_name}
                                </div>
                                <div>
                                  <span>DA</span>
                                  {item.project_card.includes(2) && (
                                    <span>Khẩn cấp</span>
                                  )}
                                  <br />
                                  {item.project_card.includes(1) && (
                                    <span>Quan trọng</span>
                                  )}
                                </div>
                              </td>
                      
                              <td> {handleProjectMember(item)} </td>
                              <td> {handleProjectManagement(item)} </td>
                              {/* <td>
                                <Image
                                  width={22}
                                  height={22}
                                  src="/Group 626671.png"
                                  alt=""
                                />
                              </td> */}
                              <td>{calculateTaskStatus(item)}</td>
                              <td className="show_date">
                                <div>
                                  <p className="start_work">
                                    {convertDateFormat(item.date_start)}
                                  </p>{' '}
                                  {/* Sửa định dạng ngày */}
                                  <p className="end_work">
                                    {convertDateFormat(item.date_end)}
                                  </p>{' '} 
                                  {/* Sửa định dạng ngày */}
                                </div>
                                <div className="hover_show">
                                  <p className="start_work">
                                    Thời gian bắt đầu: 30/08/2023
                                  </p>{' '}
                                  {/* Sửa định dạng ngày */}
                                  <p className="end_work">
                                    Thời gian kết thúc: 30/08/2023
                                  </p>{' '}
                                  {/* Sửa định dạng ngày */}
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                //==================================== Nhân Viên============================================<3
                <div>
                <form action="">
                  <div className="form_search">
                    <br />
                    <div className="searchcv" onKeyDown={e=>{
                      if(e.key==='Enter'){
                        e.preventDefault()
                      }
                    }}>
                      <Search
                        placeholder="Tìm kiếm dự án"
                        onSearch={onSearch}
                      />
                    </div>
                  </div>   
                </form>
                <div className="scrollmobile table-container">
                  <table className="tbl_work">
                    <thead>
                      <tr>
                        <th className="stt_tbl">STT</th>
                        <th className="name_work_tbl">Tên dự án</th>
                        <th>Nhân sự thực hiện</th>
                        <th>Nhân sự quản lý</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      { listP?.map((item:any, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <div
                                onClick={() =>
                                  startClick(
                                   { key: 'chi-tiet-theo-danh-sach'},
                                  item
                                 )
                                }
                                style={{
                                  color: '#4c5bd4',
                                  cursor: 'pointer',
                                }}
                              >
                                {item.project_name}
                              </div>
                              <div>
                                {}
                                <span>DA</span>
                                {item.project_card.includes(2) && (
                                  <span>Khẩn cấp</span>
                                )}
                                <br />
                                {item.project_card.includes(1) && (
                                  <span>Quan trọng</span>
                                )}
                              </div>
                            </td>
                    
                            <td> {handleProjectMember(item)} </td>
                            <td> {handleProjectManagement(item)} </td>
                            {/* <td>
                              <Image
                                width={22}
                                height={22}
                                src="/Group 626671.png"
                                alt=""
                              />
                            </td> */}
                            <td>{calculateTaskStatus(item)}</td>
                            <td className="show_date">
                              <div>
                                <p className="start_work">
                                  {convertDateFormat(item.date_start)}
                                </p>{' '}
                                {/* Sửa định dạng ngày */}
                                <p className="end_work">
                                  {convertDateFormat(item.date_end)}
                                </p>{' '} 
                                {/* Sửa định dạng ngày */}
                              </div>
                              <div className="hover_show">
                                <p className="start_work">
                                  Thời gian bắt đầu: 30/08/2023
                                </p>{' '}
                                {/* Sửa định dạng ngày */}
                                <p className="end_work">
                                  Thời gian kết thúc: 30/08/2023
                                </p>{' '}
                                {/* Sửa định dạng ngày */}
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              )}
            </div>
            <div className="tt_pages">
              <Pagination current={currentPage} total={allContent} onChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
