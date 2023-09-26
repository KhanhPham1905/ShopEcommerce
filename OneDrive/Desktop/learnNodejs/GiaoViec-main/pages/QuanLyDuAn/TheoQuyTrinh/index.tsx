import Image from "next/image";
import React, { useState } from "react";
import { Input, Pagination } from "antd";
import Themmoiquytrinh from "@/pages/components/Quanlyduan/Theoquytrinh/Themmoiquytrinh";



export default function Tqt({
  setActiveKey,
  setOpenKeys,
  selectedColor,
  isHasRole,
}: {
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
  isHasRole: boolean;
}) {
  const [add, setadd] = useState(false);
  const openadd = () => {
    setadd(!add);
  };
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);


  return (
    <div>
      <div className="margin_20px">
        <div className="box_work">
          <div id="list_work">
            <div className="text_work1">
              <h4 className={`name_list ${selectedColor}`}>Danh sách quy trình</h4>
            </div>



            {isHasRole ? (
              <div >
                {/* ---------------------------Công ty-------------------------------- */}
                <form action="">
                  <div className="form_search">


                    <Themmoiquytrinh selectedColor={selectedColor} />

                    <div className="searchcv">

                      <Search placeholder="Tìm kiếm quy trình" onSearch={onSearch} />
                      <div className="loc" onClick={handleClickOpen} >
                        <p style={{ margin: "0" }} >
                          Bộ lọc

                        </p>
                        <Image
                          width={18} height={13} alt=''
                          className="img_none"
                          src="/boloc.png"

                        />
                      </div>


                      {/* ------------------Bộ lọc-------------- */}
                      {popup ? (
                        <div className="boloc">
                          <div>
                            <div className="nenxanh_chutrang  head_boloc remove_class">
                              <h3 className="h3" style={{ fontSize: "18px", lineHeight: "38px", fontWeight: "bold" }}>Bộ lọc</h3>
                              <div className=" x_close close c-pointer">
                                <Image
                                  width={15} height={15} alt=''
                                  className="img_none23"
                                  onClick={closePopup}
                                  src="/close.png"
                                />
                              </div>
                            </div>
                            <div className="pd_20_bot25 nentrang">
                              <div className="bot-15">
                                <div className="w50 m_right_20">
                                  <p className="font-medium chuden bot5">
                                    Ngày tạo từ:
                                  </p>
                                  <input
                                    placeholder="Chọn ngày tạo"
                                    className="date_bl date_bl_sta"
                                    type="date"
                                  />
                                </div>
                                <div className="w50">
                                  <p className="font-medium chuden bot5">
                                    Đến ngày:
                                  </p>
                                  <input
                                    placeholder="Chọn ngày"
                                    className="date_bl date_bl_end"
                                    type="date"
                                  />
                                </div>
                              </div>
                              <div className="bot25">
                                <p className="font-medium chuden bot5">
                                  Trạng thái quy trình
                                </p>
                                <div className="select_no_muti_li">
                                  <select
                                    className="select_status select2-hidden-accessible"
                                    data-select2-id="select2-data-1-q71l"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                  >
                                    <option value={0}>Tất cả</option>
                                    <option value={2}>Đã hoàn thành</option>
                                    <option value={1}>Đang thực hiện</option>
                                    <option value={3}>Quá hạn</option>
                                  </select>
                                </div>
                              </div>
                              <div className=" j_between">
                                <div className="nentrang_chuxanh footer_boloc_huy footer_boloc  j_center c-pointer">
                                  <p className="size-15" onClick={closePopup}>
                                    Huỷ
                                  </p>
                                </div>
                                <div className="nenxanh_chutrang footer_boloc footer_boloc_capnhat  j_center c-pointer remove_class">
                                  <p className="size-15">Cập nhật</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : ("")}

                    </div>
                  </div>

                </form>
                <div className="scrollmobile table-container">
                  <table className="tbl_work">
                    <thead>
                      <tr>
                        <th className="stt_tbl">STT</th>
                        <th>Tên quy trình</th>
                        <th className="name_work_tbl">Nhân sự thực hiện</th>
                        <th>Nhân sự quản lý</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div
                            key={"chi-tiet-theo-quy-trinh"}
                            onClick={() =>
                              onClick({ key: "chi-tiet-theo-quy-trinh" })
                            }
                            style={{ color: "#4c5bd4", cursor: "pointer" }}
                          >
                            2200
                          </div>
                          <div>
                            <span>DA</span>
                            <span>Khẩn cấp</span>
                            <br />
                            <span>Quan trọng</span>
                          </div>
                        </td>
                        <td>
                          <Image src={""} alt={""} />
                          Việt
                        </td>
                        <td>
                          <Image src={""} alt={""} />
                          Việt
                        </td>
                        <td>Quá hạn</td>
                        <td className="show_date">
                          <p className="start_work">18/072023</p>
                          <p className="end_work">18/07/2023</p>
                          <div className="hover_show">
                            <p className="start_work">
                              Thời gian bắt đầu: 18/072023
                            </p>
                            <p className="end_work">
                              Thời gian kết thúc: 18/07/2023
                            </p>
                          </div>
                        </td>
                      </tr>


                    </tbody>
                  </table>

                </div>

              </div>

            ) : (
              <div >

                {/* ------------------------------------- Nhân Viên------------------------------------- */}
                <form action="">
                  <div className="form_search">
                    <p></p>
                    <div className="searchcv ">

                      <Search placeholder="Tìm kiếm quy trình" onSearch={onSearch} />
                    </div>

                    <div className="loc" onClick={handleClickOpen} >
                      <p style={{ margin: "0" }} >
                        Bộ lọc

                      </p>
                      <Image
                        width={18} height={13} alt=''
                        className="img_none"
                        src="/boloc.png"

                      />
                    </div>

                    {/* ------------------Bộ lọc-------------- */}
                    {popup ? (
                      <div className="boloc">
                        <div>
                          <div className="nenxanh_chutrang  head_boloc remove_class">
                            <h3 className="h3">Bộ lọc</h3>
                            <div className=" x_close close c-pointer">
                              <Image
                                width={15} height={15} alt=''
                                className="img_none23"
                                onClick={closePopup}
                                src="/close.png"
                              />
                            </div>
                          </div>
                          <div className="pd_20_bot25 nentrang">
                            <div className="bot-15">
                              <div className="w50 m_right_20">
                                <p className="font-medium chuden bot5">
                                  Ngày tạo từ:
                                </p>
                                <input
                                  placeholder="Chọn ngày tạo"
                                  className="date_bl date_bl_sta"
                                  type="date"
                                />
                              </div>
                              <div className="w50">
                                <p className="font-medium chuden bot5">
                                  Đến ngày:
                                </p>
                                <input
                                  placeholder="Chọn ngày"
                                  className="date_bl date_bl_end"
                                  type="date"
                                />
                              </div>
                            </div>
                            <div className="bot25">
                              <p className="font-medium chuden bot5">
                                Trạng thái quy trình
                              </p>
                              <div className="select_no_muti_li">
                                <select
                                  className="select_status select2-hidden-accessible"
                                  data-select2-id="select2-data-1-q71l"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value={0}>Tất cả</option>
                                  <option value={2}>Đã hoàn thành</option>
                                  <option value={1}>Đang thực hiện</option>
                                  <option value={3}>Quá hạn</option>
                                </select>
                              </div>
                            </div>
                            <div className=" j_between">
                              <div className="nentrang_chuxanh footer_boloc_huy footer_boloc  j_center c-pointer">
                                <p className="size-15" onClick={closePopup}>
                                  Huỷ
                                </p>
                              </div>
                              <div className="nenxanh_chutrang footer_boloc footer_boloc_capnhat  j_center c-pointer remove_class">
                                <p className="size-15">Cập nhật</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      null
                    )}

                  </div>


                </form>
                <div className="scrollmobile table-container">
                  <table className="tbl_work">
                    <thead>
                      <tr>
                        <th className="stt_tbl">STT</th>
                        <th className="name_work_tbl">Tên quy trình</th>
                        <th>Nhân sự thực hiện</th>
                        <th>Nhân sự quản lý</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div
                            key={"chi-tiet-theo-quy-trinh"}
                            onClick={() =>
                              onClick({ key: "chi-tiet-theo-quy-trinh" })
                            }
                            style={{ color: "#4c5bd4", cursor: "pointer" }}
                          >
                            2200
                          </div>
                          <div>
                            <span>DA</span>
                            <span>Khẩn cấp</span>
                            <br />
                            <span>Quan trọng</span>
                          </div>
                        </td>
                        <td>
                          <Image src={""} alt={""} />
                          Việt
                        </td>
                        <td>
                          <Image src={""} alt={""} />
                          Việt
                        </td>
                        <td>Quá hạn</td>
                        <td className="show_date">
                          <p className="start_work">18/072023</p>
                          <p className="end_work">18/07/2023</p>
                          <div className="hover_show">
                            <p className="start_work">
                              Thời gian bắt đầu: 18/072023
                            </p>
                            <p className="end_work">
                              Thời gian kết thúc: 18/07/2023
                            </p>
                          </div>
                        </td>
                      </tr>


                    </tbody>
                  </table>

                </div>
              </div>
            )}
          </div>
          <div className="tt_page" style={{ paddingTop: 20 }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>

        </div>

      </div>

    </div>


  );
}
