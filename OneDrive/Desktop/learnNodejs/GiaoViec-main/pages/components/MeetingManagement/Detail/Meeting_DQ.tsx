"use client";
import React from 'react'
import { Image } from 'antd'
import Link from 'next/link'
import styles from "./Detail.module.css"


export default function Meeting_ST({
  setActiveKey,
  setOpenKeys,
  selectedColor
}: {
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string;
}
) {
  const onClick = (info: any) => {
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };
  const statusColors = {
    "hủy": "red", // Example color for "hủy" status
    "sắp tới": "#4c5bd4", // Example color for "sắp tới" status
    "Hoàn thành": "green", // Example color for "hoàn thành" status
  };

  // Assume you have a status variable representing the current status
  const currentStatus = "Hoàn thành"; // Replace with actual status
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.detai_meeting} >
          <div className={styles.list_mtt}>
            <div className={styles.cnt_lsmt}>
              {/*------lọc đã qua------- */}
              <div className={styles.hn_meet}>
                <div className={styles.ctn_meet_ctn}>
                  <div className={styles.dq_meet}>
                    <h4>Cuộc họp đã qua</h4>
                  </div>
                  <div className={styles.m_scroll}>
                    <div className={styles.nd_meet}>
                      <div className={styles.tgct_met}>
                        <div className={styles.tday_met}>
                          <div className={styles.day_meet}>
                            <p className={styles.day_meeting}>02/08</p>
                            <p className={styles.time_meeting}>9:25</p>
                          </div>
                          <div className={styles.name_meet}>
                            <div
                              key={"chi-tiet-cuoc-hop"}
                              onClick={() =>
                                onClick({ key: "chi-tiet-cuoc-hop" })}
                              style={{
                                textDecoration: "none",
                                color: "#474747",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              <p className={styles.title_meet}>Họp chi tiết</p>
                            </div>
                            <p className={styles.time}>Từ 09:25 - 02/08/2023 đến 09:48 - 02/08/2023</p>
                            <div className={styles.add}>
                              <Image
                                width={18} height={19} alt='' src='/vitri.png' />
                              <p className={styles.addres_meet}> Phòng họp kiểm thử</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.pep_meet}>
                          <div className={styles.num_meet}>
                            <Image
                              width={25} height={25} alt='' src='/favico.png' />
                            <p className={styles.count_met}>
                              +3
                            </p>
                          </div>
                          <div className={styles.stat_met} style={{ background: statusColors[currentStatus] }}>
                            <p>{currentStatus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

