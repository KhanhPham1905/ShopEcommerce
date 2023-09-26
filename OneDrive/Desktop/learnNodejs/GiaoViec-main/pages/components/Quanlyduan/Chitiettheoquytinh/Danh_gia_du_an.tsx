import React, { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./Danh_gia_du_an.module.css";
import Bachamngang from "./Bachamngang";
import Giaidoan from "./Bacham/Giaidoan/Giaidoan";
import Bacham from "./Bacham/HTTB/Bacham";
import Chamnv from "./Bacham/Nhiemvu/Chamnv";

import { Input } from "antd";
import BtnNhiemVu from "./BtnNhiemVu";
import Boloc from "./Boloc";




export default function Danh_gia_du_an({

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


  const renderApplyKey = () => {
    setActiveKey("theo-quy-trinh");
  };
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <div>
      <div className={styles.margin_px}>

        {isHasRole ? (


          // -----------------------Công ty-------------------------
          <div className={styles.form_up_search}>
            <BtnNhiemVu />

            <div className={styles.f_search_loc}>
              <div className={styles.f_search}>
                <Search placeholder="Tìm kiếm nhiệm vụ" onSearch={onSearch} />
              </div>
              {/* loc */}
              <Boloc />
            </div>
          </div>
        ) : (



          // --------------------Nhân viên------------------------




          <div className={styles.form_up_search}>
            <p></p>
            {/*----popup thêm nhiệm vụ-----*/}
            <div className={styles.modal_popup_them_nhiem_vu}>
              {isOpen ?
                <div className={styles.modal_content}>
                  <div className={styles.incl_all}>
                    <div className={styles.popup_them_qttm}>
                      <div className={styles.popup_them_qttm_header} >
                        <h3 className={styles.header_name}>
                          Thêm nhiệm vụ mới
                        </h3>
                        <Image
                          width={25} height={25} alt='' className={styles.dau_x} src="/daux.png" onClick={closeModal} />
                      </div>
                      <div className={styles.popup_them_qttm_body}>
                        <form className={styles.frm_add_nvm} >
                          <div className={styles.form_valid}>
                            <div className={styles.popup_themqttm_tenmuc}>
                              <p className={styles.name_m}>Tên nhiệm vụ<span className={styles.cr_red}>*</span>:</p>
                            </div>
                            <input className={styles.the_input} type="text" autoComplete="off" name="txt_name_nvm" placeholder="Nhập tên nhiệm vụ" />
                          </div>
                          <div className={styles.form_valid}>
                            <div className={styles.them_qttm_tv_qt}>
                              <div className={styles.popup_themqttm_tenmuc}>
                                <p className={styles.name_m}>Thêm thẻ nhiệm vụ:</p>
                              </div>
                              {/* checnk box */}
                              <div className={styles.form_pop_sua}>
                                <div className={styles.row_pop_sua}>
                                  <label className={styles.radio_mr_sua}>
                                    <input type="checkbox" name="chb_add_nv[]" id="quantrong7" className={styles.card_pro_nv} defaultValue={1} />
                                    <span className={styles.mod_radio} />
                                    Quan trọng
                                  </label>
                                  <label className={styles.radio_mr_sua}>
                                    <input type="checkbox" name="chb_add_nv[]" id="khancap5" className={styles.card_pro_nv} defaultValue={2} />
                                    <span className={styles.mod_radio} />
                                    Khẩn cấp
                                  </label>
                                </div>
                              </div>
                              {/* chexkbox */}
                            </div>
                          </div>
                          <div className={styles.form_valid}>
                            <div className={styles.popup_themqttm_tenmuc}>
                              <p className={styles.name_m}>Mô tả nhiệm vụ:</p>
                            </div>
                            <textarea className={styles.textarea_qttm} rows={3} cols={3} placeholder="Nhập mô tả nhiệm vụ" name="txtarea_mt" defaultValue={""} />
                          </div>
                          <div className={styles.form_valid}>
                            <div className={styles.popup_themqttm_tenmuc}>
                              <p className={styles.name_m}>Thêm thành viên thực hiện<span className="cr_red">*</span>:</p>
                            </div>
                            <div className={styles.select_no_muti_li}>
                              <select className={styles.select_add_thanhvien_thuchien} >
                                <option >Chọn thành viên thực hiện</option>
                                <option value={121655}>121655 - </option>
                              </select><span className={styles.select2_container} style={{ width: '100%', display: "none" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-select_th-mb-container" aria-controls="select2-select_th-mb-container"><span className="select2-selection__rendered" id="select2-select_th-mb-container" role="textbox" aria-readonly="true" title="Thêm thành viên thực hiện"><span className="select2-selection__placeholder">Thêm thành viên thực hiện</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                            </div>
                          </div>
                          <div className={styles.popup_them_qttm_body_submit}>
                            <button className={styles.submit_huy_them_qt} type="button">Hủy</button>
                            <button className={styles.submit_ok_them_qt} type="button" >Tạo nhiệm vụ</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                : ""}
            </div>

            <div className={styles.f_search_loc}>
              <div className="searchcv">

                <Search placeholder="Tìm kiếm nhiệm vụ" onSearch={onSearch} />

              </div>

              <Boloc />

            </div>
          </div>
        )}
        <div className={styles.content} >
          <div className={styles.text_name}>
            <div className={styles.name} onClick={renderApplyKey}>
              <Image width={18} height={18} alt='' src="/img15.png" />
              <h5 style={{ fontSize: "16px" }}>làm việc 123</h5>
            </div>
            <Bachamngang />

          </div>
          <div className={styles.stage}>
            <div className={styles.name_stage}>
              <span style={{ fontWeight: "bold" }}>tên giai đoạn</span>
              <Giaidoan />
            </div>
            <div className={styles.danh_gia}>
              <div className={styles.abc_linh_colums}>
                <span>0 Nhiệm vụ</span>.
                <span>0 Quá hạn</span>.
                <span>Chưa đánh giá</span>
              </div>
              <div className={styles.item_work_time}>
                <Image
                  width={25} height={25} alt='' src="/anh101.png" />
                <span>333 Giờ</span>
              </div>
            </div>
            <div className={styles.name_tvqt}>

              <div id="name">
                <Image width={18} height={18} alt='' src="/Group 626671.png" />
                <span>Tên quản trị</span>
              </div>
            </div>


          </div>
          <div className={styles.complete}>
            <div className={styles.name_complete}>
              <span style={{ fontWeight: "bold" }}>Hoàn Thành</span>
              <Bacham />
            </div>
            <div className={styles.nv_complete}>
              <div><span>0</span>.Nhiệm vụ hoàn thành</div>
            </div>
          </div>
          <div className={styles.failure}>
            <div className={styles.name_failure}>
              <span style={{ fontWeight: "bold" }}>Thất Bại</span>
              <Bacham />
            </div>
            <div className={styles.nv_complete}>
              <div><span>0</span>.Nhiệm vụ thất bại</div>
            </div>
          </div>
          <div className={styles.mission}>
            <div className={styles.name_mission}>

              <div style={{ fontWeight: "bold", cursor: "pointer" }}

                key={"xem-chi-tiet-nhiem-vu"}
                onClick={() =>
                  onClick({ key: "xem-chi-tiet-nhiem-vu" })
                }
              >
                Tên nhiệm vụ

              </div>

              <Chamnv />
            </div>
            <div>
              <span>Mô tả</span>
              <div className={styles.cart_eva}>
                <span>Thẻ dự án</span>
                <span style={{ color: "blue", cursor: "pointer" }}>Chờ đánh giá</span>
              </div>

            </div>
            <div className={styles.name_tvth}>
              <Image width={18} height={18} alt='' src="/Group 626671.png" />
              <span>Tên thành viên thực hiện</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
