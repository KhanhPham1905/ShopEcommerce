import React from 'react'



export default function Boxcontent({

  isHasRole,

}: {

  isHasRole: boolean;

}) {




  return (
    <div>
      {isHasRole ? (
        <div>
          <div id="box_content" className=' db_flex'>
            <div className="box box1">
              <p className="num num_bl">00</p>
              <p className="box_suff">Tổng nhân viên</p>
            </div>
            <div className="box box2">
              <p className="num num_gr">00</p>
              <p className="box_suff">Tổng số cuộc họp sắp tới</p>
            </div>
            <div className="box box3">
              <p className="num num_gr">00</p>
              <p className="box_suff">Dự án đang làm/Tổng số dự án</p>
            </div>
            <div className="box box4">
              <p className="num num_bl">00</p>
              <p className="box_suff">Tổng số công việc/Tổng số dự án</p>
            </div>
            <div className="box box5">
              <p className="num num_yl" >00</p>
              <p className="box_suff">Công việc đang làm/Dự án đang làm</p>
            </div>
            <div className="box box6">
              <p className="num num_red">00</p>
              <p className="box_suff">Công việc quá hạn/Dự án quá hạn</p>
            </div>
          </div>
        </div>
      ) : (<div>
        <div id="box_content" className=' db_flex'>
          <div className="box box1">
            <p className="num num_bl">00</p>
            <p className="box_suff">Dự án tham gia</p>
          </div>
          <div className="box box2">
            <p className="num num_gr">00</p>
            <p className="box_suff">Dự án hoàn thành</p>
          </div>
          <div className="box box3">
            <p className="num num_gr">00</p>
            <p className="box_suff">Số dự án quá hạn</p>
          </div>
          <div className="box box4">
            <p className="num num_bl">00</p>
            <p className="box_suff">Tổng số công việc</p>
          </div>
          <div className="box box5">
            <p className="num num_yl" >00</p>
            <p className="box_suff">Số công việc hoàn thành</p>
          </div>
          <div className="box box6">
            <p className="num num_red">00</p>
            <p className="box_suff">Số công việc quá hạn</p>
          </div>
        </div>





      </div>)}

    </div>
  )
}


