import React from "react";
import styles from "./Danhgiagiaidoan.module.css";

export default function Danhgiagiaidoan() {
  return (
    <div>
      <div
        id="modal_popup_danh_gia_gd"
        className={styles.modal_edit_folder}
        style={{ display: "block" }}
      >
        <div className={styles.modal_content}>
          <div className={styles.incl_all}>
            <div className={styles.modal_header}>
              <h4>Đánh giá giai đoạn</h4>
              <span className={styles.close_detl}>X</span>
            </div>
            <div className={styles.modal_body}>
              <div className={styles.foder_md}>
                <form

                  className={styles.frm_dggd}

                >
                  <input type="hidden" id="id_hidden" name="id_hidden" />
                  <div className={styles.form_group}>
                    <label className={styles.nam_giaidoan_dgi}>ffd</label>
                  </div>
                  <div className={styles.form_group}>
                    <div className={styles.flex_start}>
                      <label>
                        Trong quy trình:
                        <span className={styles.span_2}>
                          <i>làm việc 123</i>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className={styles.form_group}>
                    <label>
                      Đánh giá giai đoạn<span className={styles.cr_red}>*</span>
                    </label>
                    <div className={styles.form_valid}>
                      <div className="select_no_muti_li select_dggd">
                        <select
                          name="select_dggd"
                          className={styles.select_mot_qlcv_tqt_l}
                          data-select2-id="select2-data-66-ktv4"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option

                            disabled
                            selected
                            data-select2-id="select2-data-68-dxmv"
                          >
                            Đánh giá giai đoạn
                          </option>
                          <option value={1}>Giai đoạn có rủi ro cao</option>
                          <option value={2}>Hoàn thành tốt</option>
                          <option value={3}>Chậm tiến độ</option>
                          <option value={4}>Tăng tốc độ</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-67-nkwm"
                          style={{ width: "100%" }}
                        >
                          <span className={styles.selection}>
                            <span
                              className={styles.select2_selection}
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-select_dggd-jd-container"
                              aria-controls="select2-select_dggd-jd-container"
                            >
                              <span
                                className={styles.select2_selection__rendered}
                                id="select2-select_dggd-jd-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Đánh giá giai đoạn"
                              >
                                Đánh giá giai đoạn
                              </span>
                              <span
                                className={styles.select2_selection__arrow}
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className={styles.dropdown_wrapper}
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.form_buttom}>
                    <div className={styles.butt_dfle}>
                      <button type="button" className={styles.clode_modal}>
                        Hủy
                      </button>
                      <button
                        type="submit"
                        className={styles.luu_danhgia_gd}
                        data-id={74}
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
