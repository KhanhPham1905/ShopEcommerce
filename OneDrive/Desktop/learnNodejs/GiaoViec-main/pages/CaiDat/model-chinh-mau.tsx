import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Modal, Space, Image } from "antd";
import styles from "./CaiDat.module.css";

const LocalizedModal = ({ setSelectedColor, selectedColor }: { setSelectedColor: Function, selectedColor: string }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleColorChange = (newColor: any) => {
    setSelectedColor(newColor);
  };

  return (
    <>
      <p
        className={`${styles.inf_tc} ${styles.backgr_btx} `}
        onClick={showModal}
        style={{ backgroundColor: selectedColor }}
      >
        <span className={`${styles.inf_md_one} ${styles.plus} d-flex`}>
          Tùy chỉnh
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
      </p>
      <Modal
        title={<div className={` ${selectedColor}`}>

          Chọn màu giao diện
        </div>}
        visible={open}
        onOk={hideModal}
        onCancel={hideModal}
        className={`${styles.myCustomModal} ${styles.noidung} `}
      >
        <p className={`${styles.dau_model} `}>
          Hãy lựa chọn một màu cá nhân hóa cho riêng bạn!
        </p>
        <div style={{ display: "contents" }}>
          <ul className={`${styles.noidung}  `}>
            <div className="col-6 d-flex">
              <li className="color">
                <div
                  className={`${styles.bgr_alt1} ${selectedColor === "bgr_alt1" ? styles.nav_setting : ""
                    }`}
                  data-bg="bgr_alt1"
                  onClick={() => handleColorChange("bgr_alt1")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt2} ${selectedColor === "bgr_alt2" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt2"
                  onClick={() => handleColorChange("bgr_alt2")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt3} ${selectedColor === "bgr_alt3" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt3"
                  onClick={() => handleColorChange("bgr_alt3")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt4} ${selectedColor === "bgr_alt4" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt4"
                  onClick={() => handleColorChange("bgr_alt4")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt5} ${selectedColor === "bgr_alt5" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt5"
                  onClick={() => handleColorChange("bgr_alt5")}
                ></div>
              </li>
            </div>
            <div className="col-6  d-flex">
              <li className="color">
                <div
                  className={`${styles.bgr_alt6} ${selectedColor === "bgr_alt6" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt6"
                  onClick={() => handleColorChange("bgr_alt6")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt7} ${selectedColor === "bgr_alt7" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt7"
                  onClick={() => handleColorChange("bgr_alt7")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt8} ${selectedColor === "bgr_alt8" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt8"
                  onClick={() => handleColorChange("bgr_alt8")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt9} ${selectedColor === "bgr_alt9" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt9"
                  onClick={() => handleColorChange("bgr_alt9")}
                ></div>
              </li>
              <li className="color">
                <div
                  className={`${styles.bgr_alt10} ${selectedColor === "bgr_alt10" ? styles.nav_setting : " "
                    }`}
                  data-bg="bgr_alt10"
                  onClick={() => handleColorChange("bgr_alt10")}
                ></div>
              </li>
            </div>
          </ul>

          {/* ... */}
        </div>
      </Modal>
    </>
  );
};

const App = ({ setSelectedColor, selectedColor }: { setSelectedColor: Function, selectedColor: string }) => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <Space>
        <LocalizedModal selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </Space>
      {contextHolder}
    </>
  );
};

export default App;
