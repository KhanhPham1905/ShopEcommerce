import React, { useContext, useState,useEffect } from "react";
import { Input, Dropdown, Space} from "antd";
import Themcongviec from "./Themmoiduan/Themcongviec";
import Themmoinhomcongviec from "./Themmoiduan/Themmoinhomcongviec";
import Bacham from "./Bacham";
import ChildrenDot from "./collapseNV/ChildrenDot";
import MasterDot from "./collapseNV/MasterDot";
import Image from "next/image";
// import styles from "./Project_details.module.css"
import styles from "./Project_details.module.css"
import DocViewer from "react-doc-viewer";
import { log } from "console";
import { POST } from '@/pages/api/auth';
import {ListEpContext} from '@/components/context/listEpContext'

export default function Project_details({

  setActiveKey,
  setOpenKeys,
  isHasRole,
  selectedColor,
  setIdProject,
  item,
  detailJob,
  setDetailJob,
}: {
  isHasRole: boolean;
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
  setIdProject: any;
  item: any,
  detailJob:any;
  setDetailJob:Function;
}) {
  const listEp = useContext(ListEpContext)
  const [project, setProject] = useState();
  const [listGroup, setListGroup] = useState<any>([]);
  const [newGroup, setNewGroup]:any = useState([]);
  const [group, setGroup]: any = useState({});
  const [reload, setReload] = useState(false);
  const [chooseID,setChooseID] = useState<number[]>([])
  const toggleShowChildren = (id:any) => {    
    setGroup({...listGroup.filter((data:any) => data?.id == id)})
    if(chooseID?.includes(id)){
      setChooseID(chooseID?.filter((data:any)=> data !== id))
    }else{
      setChooseID([...chooseID,id])
    }
  };

  const [rotate, setRotate] = useState(false);
  const handleImageClick = () => {
    setRotate(!rotate);
  };
  const onClick = (info: any, dt:any) => {
    setDetailJob(dt);
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };
  const renderApplyKey = () => {
    setActiveKey("theo-danh-sach-cong-viec");
  };
  const { Search } = Input;

  const onSearch = (e:any) => {
    const search = e.target.value.toLowerCase();
    setNewGroup(listGroup.filter((val:any) => {
      return val?.name?.toLowerCase().includes(search)
    }))
    // Do something with the filtered array 'newarray'
  };

  useEffect(() => {
    try{
      POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}`)
      .then((res) =>{
        setNewGroup(res?.data.jobDetail)
        setListGroup(res?.data.jobDetail); 
        setProject(res?.data?.project);   
      })
    }catch(error){
      console.log(error)
    }
  },[reload])

  const items = [
    {
      label: (
        <Themmoinhomcongviec listEp={listEp} item={item} project={project} setReload={setReload} reload={reload}/>
      ),
      key: "0",
    },
    {
      label: (
        <Themcongviec listEp={listEp} item={item} project={project} setReload={setReload} reload={reload}/>
      ),
      key: "1",
    },
  ];
  
  return (
    <div className={styles.detail_work}>
      <div className="margin_px">
        <div className="detail_work">
          <div className="text_name_work">
            <div className="name_detail">
              <Image
                width={7}
                height={13}
                alt=""
                className="img_back"
                src="/img_back.png"
              />
              <h4 onClick={renderApplyKey} style={{ cursor: "pointer" }}>
                {item?.project_name}
              </h4>
            </div>
            <Bacham setOpenKeys={setActiveKey} setActiveKey={setActiveKey} item={item} />
            <div></div>
          </div>
          <div className="content">
            {isHasRole ? (
              <div>
                <div className="f_search">
                  <Dropdown
                    className="drop"
                    menu={{ items }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>+ Thêm mới</Space>
                    </a>
                  </Dropdown>
                  <div className="search_gr">
                  <Search
                      placeholder="Tìm kiếm nhóm công việc"
                      onChange={onSearch}
                    />
                  </div>
                </div> 
                <div className="content_work_dsda">
                  <div className="show_list_dsda">
                    <div className="show_list_cvl">

                      <div
                        className="colap"
                        style={{
                          width: "100%",
                          overflowX: "auto",
                          height:1000
                        }}
                        
                      >
                      { newGroup?.map((itm:any, index:any)  =>(
                    <div key={index}>
                      <div className="master">
                    
                      <div
                        onClick={()=>toggleShowChildren(itm?.id)}
                        className="name__cv"
                      >

                        <p onClick={handleImageClick}>{itm.name}</p>
                      </div>
                      <div>
                        <p className="start_work" style={{ padding: 0 }}>
                          {itm.date_start}
                        </p>
                        <p className="end_work">{itm.date_end}</p>
                      </div>
                      <p>Quá hạn</p>
                      <Image
                        width={33}
                        height={33}
                        alt=""
                        src={"/el.png"}
                      />
                      <div 
                        
                      >
                        <MasterDot group={itm} listEp={listEp} project={item} setReload={setReload} reload={reload}
                      />
                      </div>
                      </div>

                      <div>
                        {
                        itm?.job?.map((dt:any)=>
                        chooseID?.includes(itm?.id) && (                     
                          <div className="children">
                          <div>
                            <p
                              key={"xem-chi-tiet-theo-danh-sach"}
                              onClick={() =>
                                onClick({
                                  key: "xem-chi-tiet-theo-danh-sach"
                                },
                                  dt
                                )
                              }
                              className="name__chil"
                            >
                              {/* <Image width={16} height={16} alt='' src={''} style={{marginRight:10}}/> */}
                              {dt?.job_name}
                            </p>
                            <p className="the_da">
                                  <span>DA</span> <br></br>
                                  {dt.job_card.includes(2) && (
                                    <span className="kc">Khẩn cấp</span>
                                  )}
                                  {dt.job_card.includes(1) && (
                                    <span className="qt">Quan trọng</span>
                                  )}
                            </p>
                            <br></br>
                          </div>
                          <div>
                            <p className="start_work">{dt?.date_start}</p>
                            <p className="end_work">{dt?.date_end}</p>
                          </div>
                          <p>Quá hạn</p>
                          <Image
                            width={33}
                            height={33}
                            alt=""
                            src={"/el.png"}
                          />
                          <ChildrenDot data={dt} group={group} setReload={setReload} reload={reload} />
                          </div>
                            
                          ))
                        }
                      </div>
                    </div>
                      ))}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              
            ) : (
              <div>
                <div className="f_search">
                  <p></p>
                  <div className="search_gr">
                    <Search placeholder="Tìm kiếm nhóm công việc" />
                  </div>
                </div>

                <div className="content_work_dsda">
                  <div className="show_list_dsda">
                    <div className="show_list_cvl">
                      <div
                        className="colap"
                        style={{
                          width: "100%",
                          overflowX: "auto",
                        }}
                      >
                        <div className="master">
                          <div
                            onClick={()=>toggleShowChildren(item?.id)}
                            className="name__cv"
                          >
                            <Image
                              width={12}
                              height={16}
                              alt=""
                              className={`img_90 ${rotate ? "rotate" : ""}`}
                              src={"/play_cvl.png"}
                            />
                            <p onClick={handleImageClick}>tên</p>
                          </div>
                          <div>
                            <p className="start_work" style={{ padding: 0 }}>
                              18/072023
                            </p>
                            <p className="end_work">18/07/2023</p>
                          </div>
                          <p>Quá hạn</p>
                          <Image
                            width={33}
                            height={33}
                            alt=""
                            src={"/el.png"}
                          />
                      <MasterDot group={item} listEp={listEp} project={item} setReload={setReload} reload={reload}/>
                        </div>
                        {chooseID?.includes(item?.id) &&(
                          <div className="children">
                            <div>
                              <p
                                key={"xem-chi-tiet-theo-danh-sach"}
                                
                                className="name__chil"
                              >
                                <Image width={16} height={16} alt='' src={"/img_l1.png"} style={{marginRight:10}}/>
                                tên
                              </p>
                              <p className="the_da">
                                <span className="qt">Quan trọng</span>
                                <span className="kc">Khẩn cấp</span>

                              </p>
                            </div>
                            <div>
                              <p className="start_work">18/072023</p>
                              <p className="end_work">18/07/2023</p>
                            </div>
                            <p>Quá hạn</p>
                            <Image
                              width={33}
                              height={33}
                              alt=""
                              src={"/el.png"}
                            />
                            <ChildrenDot data={dt} group={group} setReload={setReload} reload={reload}/>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
