// import React, { useState } from "react";

import React, { useState, useEffect } from "react";
import { Button, Modal, Select, SelectProps, Radio, Space, Input } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import styles from "@/pages/components/MeetingManagement/MeetingManagement.module.css";
import NavbarMeeting from "@/pages/components/MeetingManagement/NavbarMeeting";
import TodayMeeting from "@/pages/components/MeetingManagement/Detail/TodayMeeting";
import Meeting_ST from "@/pages/components/MeetingManagement/Detail/Meeting_ST";
import Meeting_DQ from "@/pages/components/MeetingManagement/Detail/Meeting_DQ";

import Image from "next/image";
import BtnThemMoi from "./BtnThemMoi";

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};


const { Search } = Input;
const onSearch = (value: string) => console.log(value);
export interface PostPageAProps { }

export default function PostPage({
  setActiveKey,
  setOpenKeys,
  selectedColor,
  isHasRole,
}: {
  isHasRole: boolean;
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
}) {
  const [size, setSize] = useState<SizeType>("middle");

  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };


  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <>
        <div className="margin_20px">
          <div className="box_work" id="meeting">
            <div id="list_work" style={{ height: "2000px" }}>
              <div className="text_work1">
                <h4 className={`name_list ${selectedColor}`}>
                  Danh sách cuộc họp
                </h4>
              </div>

              {isHasRole ? (

                // ??????????cty???????????????????????????????????????????????
                <div>
                  <form action="">
                    <div className="form_searchch">
                      <BtnThemMoi selectedColor={selectedColor} />

                      <div className="searchcv">

                        <Search placeholder="Tìm kiếm cuộc họp" onSearch={onSearch} />

                      </div>
                    </div>
                  </form>
                  <div className="scrollmobile" id="navbar_meeting">
                    <div className="navbar" >


                      <div className={`all_metting ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => handleTabClick('all')} >
                        <label className="wind_alm windo_one">
                          <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Tất cả cuộc họp</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>

                      <div className={`all_metting ${activeTab === 'scheduling' ? 'active' : ''}`}
                        onClick={() => handleTabClick('scheduling')} >


                        <label className="wind_alm windo_tow">

                          <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp sắp diễn ra</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>



                      <div className={`all_metting ${activeTab === 'createdByMe' ? 'active' : ''}`}
                        onClick={() => handleTabClick('createdByMe')} >
                        <label className="wind_alm windo_three">
                          <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp tạo bởi tôi</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>




                      <div className={`all_metting ${activeTab === 'cancelled' ? 'active' : ''}`}
                        onClick={() => handleTabClick('cancelled')} >
                        <label className="wind_alm windo_four">

                          <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp bị hủy</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>


                    </div>


                    {activeTab === 'all' && <div>
                      <TodayMeeting setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} />
                      <Meeting_ST
                        setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor}
                      />
                      <Meeting_DQ setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} /></div>}
                    {activeTab === 'scheduling' && <div>

                      <TodayMeeting setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} />
                      <Meeting_ST
                        setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor}
                      />
                      <Meeting_DQ setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} /></div>}
                    {activeTab === 'createdByMe' && <div>
                      <TodayMeeting setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} />
                      <Meeting_ST
                        setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor}
                      />
                      <Meeting_DQ setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} /></div>}
                    {activeTab === 'cancelled' && <div>
                      <TodayMeeting setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} />
                      <Meeting_ST
                        setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor}
                      />
                      <Meeting_DQ setActiveKey={setActiveKey}
                        setOpenKeys={setActiveKey}
                        selectedColor={selectedColor} /></div>}
                  </div>
                </div>
              ) : (

                // Nhan Viên==============//??????????????????????
                <div>


                  <form action="">
                    <div className="form_searchch">
                      <p></p>
                      <div className="searchcv">

                        <Search placeholder="Tìm kiếm cuộc họp" onSearch={onSearch} />

                      </div>
                    </div>
                  </form>
                  <div className="scrollmobile" id="navbar_meeting">
                    <div className="navbar" >


                      <div className={`all_metting ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => handleTabClick('all')} >
                        <label className="wind_alm windo_one">
                          <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Tất cả cuộc họp</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>




                      <div className={`all_metting ${activeTab === 'scheduling' ? 'active' : ''}`}
                        onClick={() => handleTabClick('scheduling')} >


                        <label className="wind_alm windo_tow">

                          <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp sắp diễn ra</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>



                      <div className={`all_metting ${activeTab === 'createdByMe' ? 'active' : ''}`}
                        onClick={() => handleTabClick('createdByMe')} >
                        <label className="wind_alm windo_three">
                          <p className="numb_mett" style={{ margin: "0px" }}>6</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp tạo bởi tôi</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>




                      <div className={`all_metting ${activeTab === 'cancelled' ? 'active' : ''}`}
                        onClick={() => handleTabClick('cancelled')} >
                        <label className="wind_alm windo_four">

                          <p className="numb_mett" style={{ margin: "0px" }}>1</p>
                          <p className="note_mett" style={{ margin: "0px" }}>Cuộc họp bị hủy</p>
                          <input type="radio" name="number_meet" value="1"></input>
                        </label>
                      </div>


                    </div>



                    {activeTab === 'all' && (
                      <div>
                        <TodayMeeting setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                        <Meeting_ST
                          setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor}
                        />
                        <Meeting_DQ setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                      </div>
                    )}
                    {activeTab === 'scheduling' && (
                      <div>
                        <TodayMeeting setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                        <Meeting_ST
                          setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor}
                        />
                        <Meeting_DQ setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                      </div>
                    )}
                    {activeTab === 'createdByMe' && (
                      <div>
                        <TodayMeeting setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                        <Meeting_ST
                          setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor}
                        />
                        <Meeting_DQ setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                      </div>
                    )}
                    {activeTab === 'cancelled' && (
                      <div>
                        <TodayMeeting setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                        <Meeting_ST
                          setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor}
                        />
                        <Meeting_DQ setActiveKey={setActiveKey}
                          setOpenKeys={setActiveKey}
                          selectedColor={selectedColor} />
                      </div>
                    )}
                  </div>
                </div>
              )}



            </div>
          </div>
        </div>



      </>
    </div >
  );
}
