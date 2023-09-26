import React, { useState } from "react";
import styles from "./CaiDat.module.css";
import { Modal, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";

export interface PostPageAProps { }

export default function PostPage({ selectedColor }: { selectedColor: string }) {
  const [showModal, setShowModal] = useState(false);
  // Hàm xử lý khi người dùng bấm vào nút mở modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Hàm xử lý khi người dùng đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div id="multiCollapseExample2">
        <div className="card card-body">
          <div className={`${styles.list_setting} active`} id="cds_three">
            <div className={styles.sett_wtt}>
              <div className={`${styles.profile_avt} d-flex`}>
                <div className={`${styles.prof_full} d-flex`}>
                  {/* <div className={styles.prof_avt}> */}
                  <Image src="duc.jpg" alt="" className={styles.prof_avt} />
                  {/* </div> */}
                  <div
                    className={styles.prof_infm}
                    style={{ marginLeft: "18px" }}
                  >
                    <h4>Công ty Cổ phần Thanh toán Hưng Hà</h4>
                    <p>
                      <b>Công ty</b>
                    </p>
                    <b></b>
                  </div>
                  <b></b>
                </div>
                <b></b>
              </div>
              <b>
                <div className={styles.staff_ndn}>
                  <h4
                    style={{
                      fontSize: "16px",
                      color: "#666666",
                      fontWeight: "bold",
                    }}

                  >
                    Nơi bạn đã đăng nhập
                  </h4>
                  <div className={styles.boc_nv}>
                    <div className={styles.view_login}>
                      <div className={styles.nddn_nv}>
                        <p className={styles.adpc_lg} >
                          <Image
                            width={20} height={20} alt=''
                            style={{
                              marginLeft: "60px",
                              marginRight: "22px",
                              // width: "20%",
                              fontSize: "14px",
                              color: "#666666",
                            }}
                            src="/pc.png"
                          />
                          <span
                            style={{
                              fontSize: "14px",
                              color: "#666666",
                            }}
                          >
                            Google Chrome 115.0.0.0 windows · Hanoi, Vietnam
                          </span>
                        </p>
                      </div>
                      <div
                        className={styles.nddn_nv}
                        style={{ paddingTop: "10px" }}
                      >
                        <p className={styles.adpc_lg}>
                          <Image
                            width={20} height={20} alt=''
                            style={{
                              marginLeft: "60px",
                              marginRight: "22px",
                              // width: "20%",
                            }}
                            src="/pc.png"
                          />
                          <span
                            style={{
                              fontSize: "14px",
                              color: "#666666",
                            }}
                          >
                            Google Chrome 115.0.0.0 windows · Hanoi, Vietnam
                          </span>
                        </p>
                      </div>
                    </div>

                    <span
                      className={`${styles.inf_md_one} ${styles.plus_1} d-flex `}
                      onClick={handleShowModal}
                    >
                      Xem thêm
                      <div>
                        <Image
                          width={14} height={14} alt=''
                          src="/plus.png"
                          style={{
                            padding: "0",
                            marginLeft: "2px",
                            marginBottom: "4px",
                          }}
                        ></Image>
                      </div>
                    </span>


                    <Modal
                      show={showModal}
                      onHide={handleCloseModal}
                      scrollable
                    >
                      <Modal.Header style={{ backgroundColor: "#4C5BD4" }} className={selectedColor}>
                        <Modal.Title style={{ textAlign: "center", color: 'white' }} >
                          Nơi bạn đã đăng nhập
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className={styles.view_login}>
                          <div className={styles.nddn_nv}>
                            <p className={styles.adpc_lg}>
                              <Image
                                width={20} height={20} alt=''
                                style={{
                                  marginLeft: "60px",
                                  marginRight: "22px",
                                  // width: "20%",
                                }}
                                src="/pc.png"
                              />
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "#666666",
                                }}
                              >
                                Google Chrome 115.0.0.0 windows · Hanoi, Vietnam
                              </span>
                            </p>
                          </div>
                          <div className={styles.nddn_nv}>
                            <p className={styles.adpc_lg}>
                              <Image
                                width={20} height={20} alt=''
                                style={{
                                  marginLeft: "60px",
                                  marginRight: "22px",
                                  // width: "20%",
                                }}
                                src="/pc.png"
                              />
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "#666666",
                                }}
                              >
                                Google Chrome 115.0.0.0 windows · Hanoi, Vietnam
                              </span>
                            </p>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer></Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </b>
            </div>
            <b></b>
          </div>
        </div>
      </div>
    </div>
  );
}
