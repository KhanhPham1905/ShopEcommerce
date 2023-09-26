import React from 'react';
import styles from './Body.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Image } from 'react-bootstrap';


ChartJS.register(ArcElement, Tooltip, Legend);


export interface BodyProp {

}

const data = {
    labels: [
        'Dự án hoàn thành',
        'Dự án đang thực hiện',
        'Dự án quá hạn',
        'Dự án thất bại'
    ],
    datasets: [
        {
            // label: '# of Votes',
            data: [2, 2, 3, 5],
            backgroundColor: [
                '#76B51B',
                '#4C5BD4',
                '#FFA800',
                '#FF3333',


            ],

            cutout: '80%',

        },
    ],
};
const data2 = {
    labels: [
        'Nhóm công việc hoàn thành',
        'Nhóm công việc đang thực hiện',
        'Nhóm công việc quá hạn',
        'Nhóm công việc thất bại'
    ],
    datasets: [
        {
            // label: '# of Votes',
            data: [2, 2, 3, 5],
            backgroundColor: [
                '#76B51B',
                '#4C5BD4',
                '#FFA800',
                '#FF3333',

            ],
            cutout: '80%',


        },
    ],
};
const data3 = {
    labels: [
        'Số công việc hoàng thành đúng hạn',
        'Số công việc đang làm',
        'Số công việc hoàn thành muộn',

        'Số công việc quá hạn',

    ],
    datasets: [
        {
            // label: '# of Votes',
            data: [2, 9, 0, 5],
            backgroundColor: [
                '#76B51B',
                '#4C5BD4',
                '#FFA800',
                '#FF3333',



            ],
            cutout: '80%',


        },
    ],
};

const chartOptions = {

    plugins: {
        legend: {
            display: false,
        },
    },
};

const datasetData = data.datasets[0].data;
const datasetLabels = data.labels;

const datasetData2 = data2.datasets[0].data;
const datasetLabels2 = data2.labels;

const datasetData3 = data3.datasets[0].data;
const datasetLabels3 = data3.labels;


export default function Page({
    setActiveKey,
    setOpenKeys,
    selectedColor
}: {
    setActiveKey: Function;
    setOpenKeys: Function;
    selectedColor: string;
}) {
    const onClick = (info: any) => {
        setActiveKey(info?.key);
        info?.key === "trang-chu" ? setOpenKeys([]) : null;
    };


    return (

        <div className={styles.margin_20px} style={{ marginRight: "30px" }}>

            <div className={styles.boxt_setting}>
                <div className={styles.meeting_all} style={{ display: "block" }}>
                    <div className={styles.report_map}>
                        <div className={`${styles.report_qgc} ${styles.map_proced}`}>
                            <div className={styles.chart} style={{ position: "relative" }}>
                                <h4 className={styles.chart_titl}>Dự án</h4>

                                <div className={styles.pie_chart} >

                                    <Doughnut data={data} options={chartOptions} />

                                </div>
                                <div className={styles.note_chart}>
                                    <p className={styles.rept_note_one}>  {data.labels[0]} : {datasetData[0]}  </p>

                                    <p className={styles.rept_note_tow}>  {data.labels[1]} : {datasetData[1]}</p>
                                    <p className={styles.rept_note_three}> {data.labels[2]} : {datasetData[2]} </p>
                                    <p className={styles.rept_note_four}> {data.labels[3]} : {datasetData[3]} </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.report_qgc} ${styles.map_stage}`}>
                            <div className={styles.chart} style={{ position: "relative" }}>
                                <h4 className={styles.chart_titl}>Tiến độ thực hiện nhóm công việc</h4>
                                <div className={styles.pie_chart} >

                                    <Doughnut data={data2} options={chartOptions} />
                                </div>
                                <div className={styles.note_chart}>
                                    <p className={styles.rept_note_one}>{data2.labels[0]} : {datasetData2[0]} </p>
                                    <p className={styles.rept_note_tow}>{data2.labels[1]} : {datasetData2[1]}  </p>
                                    <p className={styles.rept_note_three}>{data2.labels[2]} : {datasetData2[2]} </p>
                                    <p className={styles.rept_note_four}>{data2.labels[3]} : {datasetData2[3]} </p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.report_qgc} ${styles.map_work}`}>
                            <div className={styles.chart} style={{ position: "relative" }}>
                                <h4 className={styles.chart_titl}>Công việc</h4>
                                <div className={styles.pie_chart} >
                                    <Doughnut data={data3} options={chartOptions} />
                                </div>
                                <div className={styles.note_chart}>
                                    <p className={styles.rept_note_one}>{data3.labels[0]}: {datasetData3[0]}</p>
                                    <p className={styles.rept_note_tow}>{data3.labels[1]}: {datasetData3[1]}</p>
                                    <p className={styles.rept_note_three}>{data.labels[2]}: {datasetData3[2]}</p>
                                    <p className={styles.rept_note_four}>{data.labels[3]}: {datasetData3[3]}</p>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.report_finish} >
                        <div className={`${styles.staff_rep_lotwk} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên còn nhiều việc nhất
                            </h4>
                            <p className={styles.chuxanh} >Trống</p>
                        </div>

                        <div className={`${styles.staff_rep_latewk} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên hoàn thành muộn nhiều nhất
                            </h4>
                            <p className={styles.chuxanh} >Trống</p>
                        </div>


                        <div className={`${styles.staff_rep_excellent} ${styles.repr_finle}`}>

                            <h4 className={styles.titl_rept}>
                                Nhân viên hoàn thành xuất sắc nhất
                            </h4>
                            <p className={styles.chuxanh} >Trống</p>
                        </div>




                    </div>

                    <div className='w-full'>
                        <div className={styles.report_count}>
                            <div className={styles.report_coutb}>
                                <table className={styles.table}>
                                    <thead className={`${styles.thead_tb} ${selectedColor}`} style={{ backgroundColor: "#4C5BD4" }}>
                                        <tr>
                                            <th className={styles.col_tb}>Tên dự án</th>
                                            <th className={styles.col_tb}>Số thành viên tham gia</th>
                                            <th className={styles.col_tb}>Trạng thái dự án</th>
                                            <th className={styles.col_tb}>Tổng nhóm công việc/Số công việc	</th>
                                            <th className={styles.col_tb}>Nhóm công việc đang làm</th>
                                            <th className={styles.col_tb}>Nhóm công việc quá hạn</th>
                                            <th className={styles.col_tb}>Nhóm công việc hoàn thành</th>
                                            <th className={styles.col_tb}>Nhóm công việc thất bại</th>
                                        </tr>
                                    </thead>
                                    <tbody className={styles.tbody_tb}>
                                        <tr>
                                            <td>


                                                <div key={'chi-tiet-du-an'} onClick={() => onClick({ key: 'chi-tiet-du-an' })} className={styles.chuden} >
                                                    Tên dự án
                                                </div>

                                            </td>
                                            <td>
                                                <div className={`${styles.numb_staff} ${styles.avt_fuln_sf}`}>
                                                    <Image src="https://phanmemgiaoviec.timviec365.vn/assets/images/Group 626671.png" alt="" className={`${styles.avt_tbrep} ${styles.show_tv_tg}`} />
                                                    <div className={styles.tv_tg}>
                                                        <div className={styles.tv_tg_item}>
                                                            <div className={styles.img}>
                                                                <Image src="https://phanmemgiaoviec.timviec365.vn/assets/images/Group 626671.png" alt="" />
                                                            </div>
                                                            <div className={styles.text}>
                                                                <p className={styles.name_tg}>Test Kiên</p>
                                                                <p className={styles.cv}>Nhân viên</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className={styles.bihuy_report}> Quá hạn</p>
                                            </td>
                                            <td>
                                                <p className={styles.work_sumg}>
                                                    0/0
                                                </p>
                                            </td>
                                            <td>
                                                <p className={styles.work_do}>
                                                    0
                                                </p>
                                            </td>
                                            <td>
                                                <p className={styles.work_qh}>
                                                    0
                                                </p>
                                            </td>
                                            <td>
                                                <p className={styles.work_nvht}>
                                                    0
                                                </p>
                                            </td>
                                            <td>
                                                <p className={styles.work_thatb}>
                                                    0
                                                </p>
                                            </td>

                                        </tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>
                                        <tr>hhh</tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}