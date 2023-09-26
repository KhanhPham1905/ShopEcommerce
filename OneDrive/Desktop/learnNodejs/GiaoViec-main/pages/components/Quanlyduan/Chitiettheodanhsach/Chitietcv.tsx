import React, { useState, useEffect } from "react";

import Image from 'next/image'
import { Col, Dropdown, InputNumber, Row, Slider, Space } from "antd";

import { Button, Input, Upload } from "antd";
import styles from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/Xemchitiet.module.css"



import NgThuchien from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/NgThuchien";
import NgGiaoViec from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/NgGiaoViec";
import NgTheoDoi from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/NgTheoDoi";
import DelCMT from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/DelCMT";
import Link from "next/link";







interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  chucvu: string;
}
interface Props {
  startDate: Date;
  endDate: Date;
}

export default function Chitietcv(
  { setActiveKey,
    detailJob,
    setDetailJob, 
  }:
  { setActiveKey: Function;
    detailJob:any;
    setDetailJob:Function;
   }


) {
  const renderApplyKey = () => {
    setActiveKey("chi-tiet-theo-danh-sach");
  };

  //--------------------- -------CHỈNH SỬA MÔ TẢ-----------------------------------------------//
  const [isElipVisible, setIsElipVisible] = useState(true);
  const [elipContent, setElipContent] = useState('Initial elip content'); // Nội dung mặc định cho .elip
  const [editedElipContent, setEditedElipContent] = useState(''); // Lưu trữ nội dung được chỉnh sửa

  const handleEditClick = () => {
    setIsElipVisible(!isElipVisible);
    setEditedElipContent(elipContent); // Lưu nội dung hiện tại của .elip vào biến editedElipContent
  };

  const handleSaveClick = () => {
    setIsElipVisible(true); // Hiện lại .elip sau khi ấn nút Lưu
    setElipContent(editedElipContent); // Cập nhật nội dung của .elip với nội dung được chỉnh sửa
    alert("Lưu thành công !")
  };

  const handleCancelClick = () => {
    setIsElipVisible(true); // Hiện lại .elip sau khi hủy chỉnh sửa
    setEditedElipContent(''); // Xóa nội dung chỉnh sửa
  }
  // ========================================
  const [isCvconVisible, setIsCvconVisible] = useState(false);
  const [subWorkName, setSubWorkName] = useState('');
  const [subWorkDate, setSubWorkDate] = useState('');
  const [subWorkTime, setSubWorkTime] = useState('');
  const handleSaveCvcon = () => {
    if (subWorkName && subWorkDate && subWorkTime) {
      setIsCvconVisible(false);
      alert("Lưu thành công !")
      // Thực hiện lưu công việc con
    } else {
      alert('Vui lòng điền đầy đủ thông tin công việc con.');
    }
  };


  // ------------------------------------------------------------------------------------------//

  const [isCommentVisible, setIsCommentVisible] = useState(true); // Thêm trạng thái
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState('');
  const addComment = (content: string) => {
    if (content.trim() !== '') {
      const newComment: Comment = {
        id: comments.length + 1,
        user: 'Lại Thị Thu Trang A', // Change to user's name
        avatar: '/app1673583842_e168.jpg', // Change to user's avatar
        content: content,
        chucvu: "nhanvien",
      };
      setComments([...comments, newComment]);
      setCommentInput('');
    }
  };

  // xóa comment
  const deleteComment = (commentId: any) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
  };




  const handleShowCvcon = () => {
    setIsCvconVisible(true);
  };

  const handleCancelCvcon = () => {
    setIsCvconVisible(false);
  };



  const [inputValue, setInputValue] = useState<number | null>(1);

  const onChange = (newValue: number | null) => {
    setInputValue(newValue !== null ? newValue : 0);
  };

  const items = [
    {
      label: (
        <Upload>
          <Button>Tải tài liệu từ máy tính</Button>
        </Upload>
      ),
      key: "0",
    },
  ];
  const item = [
    {
      label: <p>Chờ đánh giá</p>,
      key: "0",
    },
  ];

  return (
    <div>
      <div className="margin_20px">
        <div className={styles.box_cv}>
          <div className={styles.chi_tiet}>
            <div className={styles.text_name} style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.name}
                onClick={renderApplyKey}
              >

                <Image width={7} height={14} alt='' src="/img15.png" />
                <h4 style={{ margin: "0", fontSize: "16px" }}>{detailJob?.job_name}</h4>

              </div>

            </div>

            <div className={styles.chitiet_content}>
              <div className={styles.row_work}>
                <div className={styles.row_work_right}>
                  <p style={{ marginBottom: "0rem" }}>
                    Trong hôm nay: <span>2200</span>
                  </p>
                  <p style={{ marginBottom: "0rem" }}>
                    Ngày bắt đầu:{" "}
                    <span className={styles.start_work}>
                      {detailJob.time_in} - {detailJob.date_start}
                    </span>
                  </p>
                </div>
                <div className={styles.row_work_left}>
                  <p style={{ marginBottom: "0rem" }}>
                    Đi tới:{" "}
                    <a style={{ color: "blue", cursor: "pointer" }}>2200 </a>
                  </p>
                  <p style={{ marginBottom: "0rem" }}>
                    Ngày kết thúc:{" "}
                    <span className={styles.end_work}>{detailJob.time_out} - {detailJob.date_end}</span>
                  </p>
                </div>
              </div>


              {/*---------------------- Mô tả giai đoạn------------------------- */}




              {/*--------------------- Mô tả công việc -------------------------*/}
              <div className={styles.mota}>
                <div className={styles.mota_edit}>
                  <p
                    className={styles.text_title}
                    style={{ fontWeight: "bold", marginBottom: "0rem" }}
                  >
                    MÔ TẢ CÔNG VIỆC
                  </p>
                  <p
                    className={styles.btn_edit}
                    style={{
                      color: "#4c5bd4",
                      cursor: "pointer",
                      marginBottom: "0rem",
                    }}
                    onClick={handleEditClick}
                  >
                    Chỉnh sửa
                  </p>
                </div>
                <div className={styles.text_gray}>
                  {isElipVisible && (
                    <p className={styles.click_none} style={{ marginBottom: "0rem" }}>
                      <Image width={22} height={22} alt='' className={styles.img_mota} src="/Group 626978.png" />
                      <span className={styles.elip}>{elipContent}</span>
                    </p>
                  )}
                </div>
                <div className={styles.form_add_desc}>
                  {!isElipVisible && (
                    <form action="" method="post">
                      <textarea
                        style={{ width: "100%" }}
                        value={editedElipContent}
                        onChange={(e) => setEditedElipContent(e.target.value)}
                        name="add_desc_work"
                        id="add_desc_work"
                      ></textarea>
                      <br />
                      <button type="button" onClick={handleCancelClick} className={styles.close_work}>
                        Hủy
                      </button>
                      <button type="button" onClick={handleSaveClick} className={styles.save_work}>
                        Lưu
                      </button>
                    </form>
                  )}
                </div>
              </div>




              {/*------------------------- Tài liệu đính kèm----------------------- */}
              <div className={styles.doc}>
                <div className={styles.document}>
                  <span style={{ fontWeight: "bold" }}>TÀI LIỆU ĐÍNH KÈM</span>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>Thêm tài liệu</Space>
                    </a>
                  </Dropdown>
                </div>
              </div>

              {/*--------------------------------------------------------------------------  */}
              <div className={styles.add_people}>
                <div className={styles.text_btn_edit}>
                  <span style={{ fontWeight: "bold" }}>
                    NGƯỜI GIAO VIỆC DỰ ÁN
                  </span>

                  <NgGiaoViec />
                </div>
                <div className={styles.people}>
                  <Image alt='' width={22} height={22} className={styles.icon_people} src="/favico.png" />
                  <div className={styles.name_chuvu}>
                    <p style={{ marginBottom: "0rem" }}>kien</p>
                    <p>nhan vien</p>
                  </div>
                </div>
                <p
                  className={styles.chucvu}
                  style={{ marginBottom: "0rem", color: "#474747" }}
                >
                  Chức vụ khác
                </p>
              </div>

              {/* -----------============================================================ */}
              <div className={styles.peo_thuchien}>
                <div className={styles.texxt_btn_edit}>
                  <span style={{ fontWeight: "bold" }}>NGƯỜI THỰC HIỆN</span>
                  {/*  */}
                  <NgThuchien />
                </div>
                <div className={styles.people_th}>
                  <Image width={22} height={22} alt='' className={styles.icon_people_th} src="/favico.png" />
                  <div className={styles.name_chucvu}>
                    <p style={{ marginBottom: "0rem" }}>kien</p>
                    <p>nhan vien</p>
                  </div>
                </div>
                <p
                  className={styles.chucvukhac}
                  style={{ marginBottom: "0rem", color: "#474747" }}
                >
                  Chức vụ khác
                </p>
              </div>
              {/* ==================================================================== */}
              <div className={styles.theo_doi}>
                <div className={styles.peo_theodoi} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "bold" }}>NGƯỜI THEO DÕI</span>

                  {/* ----------------- */}
                  <NgTheoDoi />
                </div>
                <p
                  className={styles.data_theo_doi}
                  style={{
                    marginBottom: "0rem",
                    color: "#474747",
                    fontSize: "16px",
                  }}
                >
                  không có dữ liệu người theo dõi
                </p>
              </div>
              {/* ///////////////////////////////////// */}
              <div className={styles.ket_qua_cv}>
                <div className={styles.kq_edit}>
                  <span style={{ fontWeight: "bold" }}>KẾT QUẢ CÔNG VIỆC</span>
                  <div >
                    <Row>
                      <Col span={12}>
                        <Slider
                          min={0}
                          max={100}
                          onChange={onChange}
                          value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={1}
                          max={100}
                          style={{ margin: '0 16px' }}
                          value={inputValue}
                          onChange={onChange}
                        />
                      </Col>
                    </Row>
                  </div>
                  {/*------- Cập nhật công việc ------- */}
                  <p
                    style={{
                      marginBottom: "0rem",
                      color: "#4c5bd4",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Cập nhật công việc
                  </p>
                </div>
              </div>
              {/* -------------------------công việc con--- --------------------------*/}
              <div className={styles.sub_work}>
                <div className={styles.text_sub_work}>
                  <span style={{ fontWeight: "bold" }}>CÔNG VIỆC CON </span>
                  <div>
                    <div>
                      <input
                        style={{ paddingLeft: "18px", width: "50%" }}
                        className={styles.ip_sub_work}
                        placeholder="Nhập tên công việc con"
                        value={subWorkName}
                        onChange={(e) => setSubWorkName(e.target.value)}
                        onClick={handleShowCvcon}
                      />
                    </div>
                  </div>
                  {isCvconVisible && (
                    <div>

                      <div className={styles.cvcon}>
                        <div style={{ display: "flex" }}>
                          <Image alt='' width={24} height={20}
                            src="/Group 626671 (1).png"
                            style={{ paddingRight: "10px" }}
                          />
                          <input disabled type="text" style={{ width: "100%" }}

                          />
                        </div>
                        <div className={styles.thoigian}>
                          <input
                            type="date"
                            style={{
                              width: "50%",
                              border: "none",
                              paddingRight: "40px",
                            }}
                            value={subWorkDate}
                            onChange={(e) => setSubWorkDate(e.target.value)}
                          />
                          <input
                            type="time"
                            style={{
                              width: "50%",
                              border: "none",
                              paddingRight: "45px",
                            }}
                            value={subWorkTime}
                            onChange={(e) => setSubWorkTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        style={{
                          width: "60px",
                          borderRadius: "10px",
                          color: "#ffffff",
                          background: "#FFA800",
                          border: "none",
                          margin: "0px 15px 0px 15px",
                        }}
                        onClick={handleCancelCvcon}
                      >
                        Hủy
                      </button>
                      <button
                        style={{
                          width: "60px",
                          borderRadius: "10px",
                          color: "#ffffff",
                          background: "#4c5bd4",
                          border: "none",
                          margin: "0px 15px 0px 15px",
                        }}
                        onClick={handleSaveCvcon}
                      >
                        Lưu
                      </button>
                    </div>
                  )}
                </div>

              </div>


              {/* ========================================================================== */}
              <div className={styles.danh_gia}>


                {/* ===================================================================== */}
                <div>
                  <div className={styles.nhanvien}>
                    <p style={{ marginBottom: "0rem", }}  >
                      NHÂN VIÊN ĐÁNH GIÁ:
                    </p>
                    <button>Chờ đánh giá</button>
                  </div>

                  {/* ====================================================== */}
                  <div className={styles.quan_ly}>
                    <p
                      style={{
                        marginBottom: "0rem",
                      }}
                    >
                      QUẢN LÝ ĐÁNH GIÁ:
                    </p>
                    <select name="" id="" style={{ width: 200, height: 34 }}>

                      <option value="">Chờ đánh giá</option>
                      <option value="">Vượt KPI</option>
                      <option value="">Đạt yêu cầu</option>
                      <option value="">Chưa đạt yêu cầu</option>
                      <option value="">Thất bại</option>
                    </select>
                  </div>
                </div>
              </div>



              {/* ========================================================== */}


              {isCommentVisible && (
                <div>
                  <label className={styles.comment}>Bình luận</label>
                  <div className={`all_cmt ${styles.dashed}`} style={{ margin: "10px" }}>
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className={`ach_cmt ${styles.cmt}`}
                        style={{ display: "flex" }}>
                        <div className="tnbl_cmt" style={{ display: "flex" }}>
                          <div className="avt_nbl">
                            <Image width={33}
                              height={33}
                              src={comment.avatar} alt=''
                              style={{ borderRadius: "50%" }} />
                          </div>
                          <div className="name_nbl" style={{ paddingLeft: "10px" }}>
                            <h4 style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#4c5bd4",
                              margin: "0 0 4px", width: "auto"

                            }}>
                              {comment.user}
                            </h4>
                            <p style={{ margin: "0" }}>
                              {comment.chucvu}
                            </p>
                          </div>
                        </div>

                        <div className="vt_cmt" style={{ display: "flex", justifyContent: "space-between", width: "100%", float: "right" }}>
                          <p className="vt_cmt_nd"
                            style={{
                              paddingLeft: "10px",
                              margin: "0",
                              color: "#4c5bd4",
                              fontSize: 15

                            }}>
                            {comment.content}
                          </p>
                          {/* <p
                            className={styles.delete_comment_button}
                            onClick={() => deleteComment(comment.id)} >
                            Xóa
                          </p> */}
                          <p >
                            <DelCMT />
                          </p>
                        </div>


                      </div>
                    ))}

                  </div>

                  <input
                    style={{ width: "100%", height: 40 }}
                    type="text"
                    placeholder="Nhập bình luận và nhấn Enter để đăng"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addComment(commentInput);
                      }
                    }}
                  />

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}
