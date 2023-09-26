import React, { useEffect, useState } from 'react'
import styles from "../Xemchitiet.module.css"
import Btn_chuyentiep from '../Btn_chuyentiep';
import Btn_thatbai from '../Btn_thatbai';
import Btn_chuyenve from '../Btn_chuyenve';
import Children1 from './Children1';





export default function ChildrenMota() {
    const startDate = new Date('2023-07-13T14:47:00'); // Thay thế bằng ngày và giờ bắt đầu thực tế
    const endDate = new Date('2023-08-12T13:52:00'); // Thay thế bằng ngày và giờ kết thúc thực tế
    const isOngoing = endDate > startDate;
    return (
        <div>
            <div className={styles.mota}>
                <div className={styles.mota_edit} style={{ height: "auto" }}>
                    <p className={styles.text_title}
                        style={{ fontWeight: "bold", marginBottom: "0rem" }}>
                        GIAI ĐOẠN
                    </p>
                    <p
                        className={styles.btn_edit}
                        style={{
                            color: "#4c5bd4",
                            cursor: "pointer",
                            marginBottom: "0rem",
                        }}
                    >
                        {isOngoing && (
                            <p className={styles.statu} style={{ display: "flex" }}>
                                <Btn_chuyentiep />
                                <Btn_thatbai />
                                <Btn_chuyenve />
                            </p>
                        )}
                    </p>
                </div>
                <p>Giai đoạn hiện tại: <span>ffd</span></p>
                <div>
                    {isOngoing ? (
                        <label
                            style={{
                                width: '100%',
                                height: '38px',
                                textAlign: 'center',
                                color: '#ffffff',
                                background: '#4c5bd4',
                                marginBottom: '15px',
                            }}
                        >
                            ffd
                        </label>
                    ) : (
                        <>
                            {endDate > startDate && (
                                <button
                                    style={{
                                        width: '100%',
                                        height: '38px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        background: '#4c5bd4',
                                        border: 'none',
                                        marginBottom: '15px',
                                    }}
                                >
                                    ffd
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
