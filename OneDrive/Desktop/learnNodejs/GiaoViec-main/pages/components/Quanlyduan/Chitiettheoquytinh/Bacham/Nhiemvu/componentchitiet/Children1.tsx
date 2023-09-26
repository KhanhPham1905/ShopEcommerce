import React, { useCallback, useEffect, useState } from 'react'
import styles from "../Xemchitiet.module.css"

export default function Children1() {
    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const startDate = new Date('2023-07-13T14:47:00'); // Thay thế bằng ngày và giờ bắt đầu thực tế
    const endDate = new Date('2023-08-12T13:52:00'); // Thay thế bằng ngày và giờ kết thúc thực tế

    const calculateRemainingTime = useCallback(() => {
        const now = new Date();

        const timeDiff = endDate.getTime() - now.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
    }, [endDate]);

    useEffect(() => {
        const interval = setInterval(() => {
            calculateRemainingTime();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [calculateRemainingTime]);
    return (
        <div>
            <div className={styles.row_work}>
                <div className={styles.row_work_right}>
                    <p style={{ marginBottom: "0rem" }}>
                        Trong quy trình: <span>2200</span>
                    </p>
                    <p style={{ marginBottom: "0rem" }}>
                        Trong giai đoạn: <span>2200</span>
                    </p>
                    <p style={{ marginBottom: "0rem" }}>
                        Tạo vào lúc:{" "}
                        <span >
                            14:47 - 13/07/2023
                        </span>
                    </p>
                </div>
                <div className={styles.row_work_left}>
                    <p style={{ marginBottom: "0rem" }}>
                        Thời gian bắt đầu:{" "}
                        <span className={styles.start_work}>
                            14:47 - 13/07/2023
                        </span>
                    </p>
                    <p style={{ marginBottom: "0rem" }}>
                        Thời gian kết thúc:{" "}
                        <a style={{ color: "#FA6464", }}>13:52 - 12/08/2023 </a>
                    </p>
                    <p style={{ marginBottom: "0rem" }}>
                        Đến hạn trong:{" "}
                        <span className={styles.start_work}>{remainingTime.days} ngày {remainingTime.hours} giờ {remainingTime.minutes} phút {remainingTime.seconds} giây</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
