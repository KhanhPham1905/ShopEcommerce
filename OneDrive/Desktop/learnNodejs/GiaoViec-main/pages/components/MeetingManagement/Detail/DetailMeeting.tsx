
"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from "./Detail.module.css"
import Thongtinchung from "./Thongtinchung";
import Boss from "./Ngchutri/Nguoichutri";
import Secretary from "./Thuky/Thukycuochop";
import Prepare from "./Ngchuanbi/Nguoichuabijcuochop";
import Participants from "./Ngthamgia/Participants";
import CMT from "./Commment";
import Report from "./Report";
import EditMeeting from "./Modal/EditMeeting";
import Bacham from "./Modal/Bacham";


export default function DetailMeeting({ setActiveKey, selectedColor }: { setActiveKey: Function, selectedColor: string }) {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const renderApplyKey = () => {
    setActiveKey("quan-ly-cuoc-hop");
  };
  return (
    <div>

      <div className={`margin_x `} >
        <div className="detail_work">
          <div className={`text_name_work ${selectedColor}`} >
            <div className="name_detail" onClick={renderApplyKey}>
              <div>

                <Image width={20} height={15} alt=""
                  className="img_back"
                  src="/img15.png"
                />

                2200
              </div>
            </div>
            <Bacham />
            <div>


              <div className={styles.info_meet}>

                <Thongtinchung />

                <div className={styles.meet_ifmt_tv}>
                  <div className={styles.title_detl_meet}>
                    <h4>BỘ PHẬN THAM GIA</h4>
                  </div>
                  <div className={styles.detl_infm_meet}>
                    <div className={styles.avt_inf_meet}>
                      <p className={styles.bptg_met}>
                        <Image className={styles.bptg} src="/bophtg.png" width={22} height={22} alt="icon" />
                        Biên Tập
                      </p>
                    </div>
                  </div>
                </div>

                <Boss />

                <Secretary />


                <Prepare />
                <Participants />
                <CMT />
                <Report />



              </div>
            </div>
          </div>
          <div className={styles.content_detail}>
          </div>
        </div>
      </div>
    </div>
  );
}
