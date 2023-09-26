import React from 'react';
import Head from 'next/head'
import styles from '../Body.module.css'
import Link from 'next/link';
import { test } from 'node:test';
import { Image } from 'react-bootstrap';

export interface AboutPageAProps {

}

export default function About({
   
    setActiveKey,
    selectedColor

  }: {
  
    setActiveKey: Function;
    selectedColor:string
   
  }) {


    const renderApplyKey = () => {
        setActiveKey("du-an");
      };
  return(
        <>
            <div className={styles.boxt_setting} style={{ paddingTop: "30px", display: "block" }}>

                <div className={`${styles.path_tlct} ${styles.qly_bcqt}  `}>
                    <div className='d-flex'>
                        <Image src="https://phanmemgiaoviec.timviec365.vn/assets/images/l_exp22.png" width={'60px'} height={'60px'} alt="" />
                        <h4 className={styles.path_n} >
                            Dự án :
                        </h4>

                        <h4 className={styles.path_form}>tên dự án</h4>
                    </div>
                </div>
                <div onClick={renderApplyKey} className={`text-decoration-none text-light`}>

                    <div className={styles.report_search}>
                        <div className={styles.prew_repr}>
                            <div className={`${styles.pre_rep} text-decoration-none text-dark `} >Trở về</div>
                        </div>
                    </div>
                </div>
                <div className={styles.report_proce}>
                    <h4 className={styles.detli_repr}>
                        Tên dự án
                    </h4>
                    <div className={styles.numb_reprt_pc} style={{ display: 'flex', marginBottom: "20px"  , justifyContent: 'space-between'}} >
                        <div className={styles.mission_reprt} >
                            <div className={styles.fl_repr}>
                                <h4 className={styles.deil_reph}>
                                    Nhóm công việc
                                </h4>
                                <div className={styles.numbr_repr}>
                                    <p className={styles.numbr_cn}><span className={styles.colrb_numbr}>0</span>/0</p>
                                    <p className={styles.note_numbr}>Hoàn thành/Tổng số</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.mission_reprt} ${styles.mission_repr_o}`}>
                            <div className={styles.fl_repr}>
                                <h4 className={styles.deil_reph}>
                                    Nhóm công việc quan trọng
                                </h4>
                                <div className={styles.numbr_repr}>
                                    <p className={styles.numbr_cn}><span className={styles.colrb_numbr}>0</span>/0</p>
                                    <p className={styles.note_numbr}>Hoàn thành/Tổng số</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.mission_reprt} ${styles.mission_repr_t}`}>
                            <div className={styles.fl_repr}>
                                <h4 className={styles.deil_reph}>
                                    Nhóm công việc khẩn cấp
                                </h4>
                                <div className={styles.numbr_repr}>
                                    <p className={styles.numbr_cn}><span className={styles.colrx_numbr}>0</span>/0</p>
                                    <p className={styles.note_numbr}>Hoàn thành/Tổng số</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mission_reprt}>
                            <div className={styles.fl_repr}>
                                <h4 className={styles.deil_reph}>
                                    Nhóm công việc quá hạn
                                </h4>
                                <div className={styles.numbr_repr}>
                                    <p className={styles.numbr_cn}><span className={styles.colrr_numbr}>0</span></p>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.report_finish} >
                        <div className={`${styles.staff_rep_lotwk} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên còn nhiều việc nhất
                            </h4>
                            <p className={styles.chuxanh} style={{ textAlign: "center" }}>Trống</p>
                        </div>

                        <div className={`${styles.staff_rep_latewk} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên hoàn thành muộn nhiều nhất
                            </h4>
                            <p className={styles.chuxanh} style={{ textAlign: "center" }}>Trống</p>
                        </div>


                        <div className={`${styles.staff_rep_excellent} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên hoàn xuất sắc nhất
                            </h4>
                            <p className={styles.chuxanh} style={{ textAlign: "center" }}>Trống</p>
                        </div>




                    </div>

                    <div className={styles.proj_reprt}>
                        <div className={styles.reprt_protb}>
                            <table className={styles.table}>
                                <thead className={`${styles.thead_tb} ${selectedColor}`}>
                                    <tr>
                                        <th className={styles.col_tb}>Tên thành viên</th>
                                        <th className={styles.col_tb}>Số công việc được giao</th>
                                        <th className={styles.col_tb}>Số công việc đã hoàn thành</th>
                                        <th className={styles.col_tb}>Thời gian trung bình</th>
                                        <th className={styles.col_tb}>Hoàn thành muộn</th>
                                        <th className={styles.col_tb}>Quá hạn</th>
                                        <th className={styles.col_tb}>Đang thực hiện</th>

                                    </tr>

                                </thead>
                                <tbody className={styles.tbody_tb}>
                               
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}