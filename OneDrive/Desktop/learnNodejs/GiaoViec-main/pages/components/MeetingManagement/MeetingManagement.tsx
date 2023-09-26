import React, { useState, useEffect } from "react";
import { Button, Modal, Select, SelectProps, Radio, Space } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import styles from "./MeetingManagement.module.css";
import NavbarMeeting from "./NavbarMeeting";
import TodayMeeting from "./Detail/TodayMeeting";
import Meeting_ST from "./Detail/Meeting_ST";
import Meeting_DQ from "./Detail/Meeting_DQ";

import Image from "next/image";

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};
const Btn_Address = ({
  children,
  setActiveKey,
  setOpenKeys,
  selectedColor,
  isHasRole,
}: {
  isHasRole: boolean;
  children: any;
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
}) => {
  const [size, setSize] = useState<SizeType>("middle");

  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModaloff, setIsModaloff] = useState(false);
  const [isModalon, setIsModalon] = useState(false);

  const showSelect = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClick = () => {
    setIsModalOpen(false);
  };
  const offline = () => {
    setIsModaloff(!isModaloff);
  };

  const online = () => {
    setIsModalon(!isModalon);
  };
  const cancel = () => {
    setIsModaloff(false);
  };

  const oncancel = () => {
    setIsModalon(false);
  };
  return (
    <>
      <div className="margin_20px">
        <div className="box_work" id="meeting">
          <div id="list_work" style={{ height: "2000px" }}>
            <div className="text_work1">
              <h4 className={`name_list ${selectedColor}`}>
                Danh sách cuộc họp
              </h4>
            </div>
            <form action="">
              <div className="form_search">
                <Button
                  type="primary"
                  className={` ${selectedColor}`}
                  onClick={showSelect}
                  style={{
                    width: "150px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  + Thêm mới
                </Button>
                {isModalOpen ? (
                  <div className={styles.select}>
                    <p
                      style={{ margin: "0", padding: "11px 10px 11px 15px" }}
                      onClick={offline}
                    >
                      <Image
                        width={40} height={20} alt="" src="/vitri.png" style={{ paddingRight: "25px" }} />
                      Thêm cuộc họp trực tiếp
                    </p>
                    <p
                      style={{ margin: "0", padding: "11px 10px 11px 15px" }}
                      onClick={online}
                    >
                      <Image
                        width={40} height={20}
                        alt=""
                        src="/wif_meet(1).png"
                        style={{ paddingRight: "15px" }}
                      />
                      Thêm cuộc gọi trực tuyến
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div className="searchcv">
                  <input
                    type="text"
                    className="keywork-project"
                    placeholder="Tìm kiếm cuộc họp"
                  />
                  <Image
                    width={22}
                    height={22}
                    style={{
                      position: "relative",
                      right: "20px",
                      top: "15px"
                    }}
                    alt=""
                    className="img_search"
                    src="/search.png"
                  />
                </div>
              </div>
            </form>

            <div className="scrollmobile">
              <NavbarMeeting />
              <TodayMeeting setOpenKeys={setOpenKeys}
                setActiveKey={setActiveKey}
                selectedColor={selectedColor}
              />
              <Meeting_ST
                setOpenKeys={setOpenKeys}
                setActiveKey={setActiveKey}
                selectedColor={selectedColor}
              />
              <Meeting_DQ setOpenKeys={setOpenKeys}
                setActiveKey={setActiveKey}
                selectedColor={selectedColor}
              />
            </div>
          </div>
        </div>
      </div>
      {/* tạo cuộc họp trực tiếp */}
      {isModaloff ? (
        <div className={styles.offline}>
          <div className={styles.off_content}>
            <h4>Tạo cuộc họp trực tiếp</h4>
            <span onClick={cancel}>X</span>
            <div className={styles.content}>
              <div className={styles.form_gr}>
                <p>
                  Tên cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <input type="text" placeholder="Nhập tên cuộc họp" />
              </div>

              <div className={styles.form_gr}>
                <p>
                  Nội dung cuộc họp cuộc họp{" "}
                  <span style={{ color: "red" }}>*</span>
                </p>
                <textarea placeholder="Nhập nội dung cuộc họp" />
              </div>

              <div className={styles.form_gr}>
                <div className={styles.gr}>
                  <div className={styles.date_start}>
                    <p>
                      Thời gian bắt đầu <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      placeholder="Time start"
                      type="date"
                      style={{
                        width: "132px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div className={styles.time_start}>
                    <input placeholder="Time" type="time" />
                  </div>
                  <div className={styles.time}>
                    <p>
                      Thời lượng dự kiến<span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Nhập số phút"
                      style={{
                        width: "132px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.form_gr}>
                <p>Bộ phận</p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn bộ phận hoặc phòng ban"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px", color: "black" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>
                  Thêm chủ trì cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn người chủ trì cuộc họp"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>
                  Thêm thư ký cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn thư ký cuộc họp"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Thêm người chuẩn bị cuộc họp</p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn người chuẩn bị"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Thêm người tham gia cuộc họp</p>
                <Select
                  // mode="multiple"
                  size={size}
                  placeholder="Chọn người tham gia"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px", color: "black" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Phòng họp</p>
                <select title="select_dep" name="" id="" style={{ width: "535px" }}>
                  <option value="0">Họp mỗi ngày</option>
                  <option value="1">Phòng họp kiểm thử</option>
                  <option value="1">Phòng họp 11</option>
                </select>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  <input placeholder="Check" type="checkbox" style={{ width: "15px" }} />
                  Gửi tin nhắn thông báo
                </p>
              </div>
              <div className={styles.cancel_ok}>
                <button onClick={cancel} className={styles.huy}>
                  Hủy
                </button>
                <button className={styles.ok} onClick={cancel}  >
                  Tạo cuộc họp
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/*-------- Cuộc họp trực tuyến ---------*/}
      {isModalon ? (
        <div className={styles.offline}>
          <div className={styles.off_content}>
            <h4>Tạo cuộc họp trực tuyến</h4>
            <span onClick={oncancel}>X</span>
            <div className={styles.content}>
              <div className={styles.form_gr}>
                <p>
                  Tên cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <input type="text" placeholder="Nhập tên cuộc họp" />
              </div>

              <div className={styles.form_gr}>
                <p>
                  Nội dung cuộc họp cuộc họp{" "}
                  <span style={{ color: "red" }}>*</span>
                </p>
                <textarea placeholder="Nhập nội dung cuộc họp" />
              </div>

              <div className={styles.form_gr}>
                <div className={styles.gr}>
                  <div className={styles.date_start}>
                    <p>
                      Thời gian bắt đầu <span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      placeholder="Time start"
                      type="date"
                      style={{
                        width: "132px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div className={styles.time_start}>
                    <input placeholder="time" type="time" />
                  </div>
                  <div className={styles.time}>
                    <p>
                      Thời lượng dự kiến<span style={{ color: "red" }}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Nhập số phút"
                      style={{
                        width: "132px",
                        padding: "7px 10px",
                        borderRadius: "5px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.form_gr}>
                <p>Bộ phận</p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn bộ phận hoặc phòng ban"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px", color: "black" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>
                  Thêm chủ trì cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn người chủ trì cuộc họp"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>
                  Thêm thư ký cuộc họp <span style={{ color: "red" }}>*</span>
                </p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn thư ký cuộc họp"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Thêm người chuẩn bị cuộc họp</p>
                <Select
                  mode="multiple"
                  size={size}
                  placeholder="Chọn người chuẩn bị"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Thêm người tham gia cuộc họp</p>
                <Select
                  // mode="multiple"
                  size={size}
                  placeholder="Chọn người tham gia"
                  defaultValue={[]}
                  onChange={handleChange}
                  style={{ width: "535px", color: "black" }}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Phòng 1",
                      label: "Phòng 1",
                    },
                    {
                      value: "Phòng 2",
                      label: "Phòng 2",
                    },
                    {
                      value: "Phòng 3",
                      label: "Phòng 3",
                    },
                  ]}
                />
              </div>
              <div className={styles.form_gr}>
                <p>Phòng họp</p>
                <select title="select" name="" id="" style={{ width: "535px" }}>
                  <option value="0">Họp mỗi ngày</option>
                  <option value="1">Phòng họp kiểm thử</option>
                  <option value="1">Phòng họp 11</option>
                </select>
              </div>
              <div className={styles.form_gr}>
                <div className={styles.link}>
                  <p style={{ fontWeight: "bold" }}>
                    Đường dẫn đi đến phòng họp
                  </p>
                  <button style={{ border: "none", background: "none" }}>
                    Sao chép đường dẫn
                  </button>
                </div>
                <input
                  style={{ height: "36px", border: "1px solid black" }}
                  type="text"
                  placeholder="Nhập đường dẫn cuộc họp"
                />
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  <input placeholder="Check" type="checkbox" style={{ width: "15px" }} />
                  Gửi mail thông báo
                </p>
              </div>
              <div className={styles.cancel_ok}>
                <button onClick={oncancel} className={styles.huy}>
                  Hủy
                </button>
                <button type="submit" className={styles.ok} onClick={oncancel}>
                  Tạo cuộc họp
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Btn_Address;
