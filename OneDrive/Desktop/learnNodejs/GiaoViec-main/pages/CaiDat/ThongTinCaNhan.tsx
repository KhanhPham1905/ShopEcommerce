import React, { useState } from "react";
import styles from "./CaiDat.module.css";
import { Modal, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Input, Checkbox } from "antd";


export interface PostPageAProps { }

export default function PostPage(props: PostPageAProps) {
  const [showModal, setShowModal] = useState(false);
  // Hàm xử lý khi người dùng bấm vào nút mở modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Hàm xử lý khi người dùng đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [editedInfo, setEditedInfo] = useState({
    hoTen: "",
    gioiTinh: "Nam",
    ngaySinh: "",
    queQuan: "",
    sdt: "",
    email: "",
    trinhDoHocVan: "",
    tinhTrangHonNhan: "",
    ngayBatDauLamViec: "",
    chucVu: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setEditedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: checked ? "Nam" : "Nữ",
    }));
  };

  return (
    <div>

      <div id="multiCollapseExample2">
        <div className="card card-body">
          <div className={`${styles.list_setting} active`} id="cds_three">
            <div className={styles.sett_wtt}>
              <div className={`${styles.profile_avt} d-flex`}>
                <div className={`${styles.prof_full} d-flex`}>
                  <Image src="duc.jpg" alt="" className={styles.prof_avt} />

                  <div
                    className={styles.prof_infm}
                    style={{ marginLeft: "18px" }}
                  >
                    <div className="d-flex">
                      <h1
                        style={{
                          fontWeight: "bold",
                          fontSize: "17px",
                          width: "100%",
                        }}
                      >
                        {/* Nguyễn Khánh Đức */}
                        {editedInfo.hoTen}
                      </h1>
                      <div className={styles.chinhsua_2}>
                        <Image
                          width={15} height={15} alt='' src="/chinhsua.png" onClick={handleShowModal} />
                        <Modal
                          show={showModal}
                          onHide={handleCloseModal}
                          scrollable
                        >
                          <Modal.Header style={{ backgroundColor: "#4C5BD4" }}>
                            <Modal.Title
                              style={{
                                textAlign: "center",
                                color: "white",
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            >
                              Cập nhật thông tin cá nhân
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body
                            style={{
                              overflowY: "clip",
                            }}
                          >
                            <div>
                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>Họ tên</label>
                                <Input name="hoTen"
                                  value={editedInfo.hoTen}
                                  placeholder=" Nhập họ và tên"
                                  onChange={(e) => handleInputChange(e)} />
                              </div>
                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>
                                  Giới tính
                                </label>
                                <Checkbox style={{ width: "25%" }}
                                  name="gioiTinh"
                                  checked={editedInfo.gioiTinh === "Nam"}
                                  onChange={(e) => handleCheckboxChange(e)}>
                                  Nam
                                </Checkbox>
                                <Checkbox style={{ width: "25%" }}
                                  name="gioiTinh"
                                  checked={editedInfo.gioiTinh === "Nữ"}
                                  onChange={(e) => handleCheckboxChange(e)}>Nữ</Checkbox>
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>
                                  Ngày sinh
                                </label>
                                <Input
                                  name='ngaySinh'
                                  onChange={handleInputChange}
                                  placeholder=" Nhập ngày sinh"
                                  type="date"
                                />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>Quê quán</label>
                                <Input placeholder=" Nhập quê quán" name="queQuan" onChange={handleInputChange} />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>SĐT</label>
                                <Input placeholder=" Nhập số điện thoại" name="sdt" onChange={handleInputChange} />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }} >Email</label>
                                <Input placeholder=" Nhập email" name="email" onChange={handleInputChange} />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>
                                  Trình độ học vấn
                                </label>
                                <Input placeholder="  Nhập trình độ học vấn" />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>
                                  Tình trạng hôn nhân
                                </label>
                                <Input placeholder="  Nhập tình trạng hôn nhân" />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>
                                  Ngày bắt đầu làm việc
                                </label>
                                <Input placeholder="  Nhập ngày bắt đầu làm việc" />
                              </div>

                              <div
                                className="form-group d-flex "
                                style={{ margin: "10px" }}
                              >
                                <label style={{ width: "50%" }}>Chức vụ</label>
                                <Input name="chucVu" placeholder="  Nhập chức vụ" onChange={handleInputChange} />
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer
                            style={{
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <Button
                              style={{
                                color: "white",
                                backgroundColor: "#FFA800",
                                padding: "9px 58px",
                              }}
                              onClick={handleCloseModal}
                            >
                              Huỷ
                            </Button>

                            <Button
                              key="save"
                              onClick={handleCloseModal}
                              style={{
                                color: "white",
                                borderRadius: "5px",
                                padding: "9px 20px",
                              }}
                            >
                              Lưu thông tin
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                    <div>
                      <b>
                        Bộ phận:{" "}
                        <span style={{ fontWeight: "100" }}>
                          PHÒNG 1: PHÒNG BIÊN TẬP NỘI DUNG - Đ/C BÍCH PHƯỢNG
                        </span>
                      </b>
                    </div>
                    <div>
                      <b>
                        Vị trí:{" "}
                        <span style={{ fontWeight: "100" }}>
                          {/* Nhân viên thử việc */}
                          {editedInfo.chucVu}
                        </span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.prof_brit}>
                <p className={styles.prof_gedr}>
                  <b>Giới tính:</b> <u>Nam</u>{" "}
                </p>
                <p className={styles.prof_inv}>
                  <b>Mã nhân viên:</b> <u>957772</u>
                </p>
              </div>

              <div className={styles.prof_brit}>
                <p className={styles.brit_nv}>
                  <b>Ngày sinh: </b> <u>{editedInfo.ngaySinh}</u>
                </p>

                <p className={styles.post_nv}>
                  <b>Chức vụ: </b> <u>Nhân viên thử việc</u>
                </p>
              </div>

              <div className={`${styles.prof_brit} ${styles.prof_britdone}`}>
                <p className={styles.addr_nv}>
                  <b>Quê quán: </b> <u>{editedInfo.queQuan}</u>
                </p>
                <p className={styles.marr_nv}>
                  <b>Tình trạng hôn nhân: </b> <u>Độc thân</u>
                </p>
              </div>
              <div className={`${styles.prof_brit} ${styles.prof_britdone}`}>
                <p className={styles.sdt_nv}>
                  <b>SĐT: </b> <u>{editedInfo.sdt}</u>
                </p>

                <p className={styles.star_nv}>
                  <b>Ngày bắt đầu làm việc: </b> <u>2023-07-20 09:03:21</u>
                </p>
              </div>
              <div className={`${styles.prof_brit} ${styles.prof_britdone}`}>
                <p className={styles.adre_nv}>
                  <b>Địa chỉ: </b>
                  <u>Hà Đông, Hà Nội</u>
                </p>
                <p className={styles.tdhv_nv}>
                  <b>Trình độ học vấn: </b> <u>Đại học</u>
                </p>
              </div>

              <div className={styles.prof_brit}>
                <p className={styles.email_nv}>
                  <b>Email:  <u>{editedInfo.email}</u></b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <b></b>
      </div>
    </div>
  );
}
