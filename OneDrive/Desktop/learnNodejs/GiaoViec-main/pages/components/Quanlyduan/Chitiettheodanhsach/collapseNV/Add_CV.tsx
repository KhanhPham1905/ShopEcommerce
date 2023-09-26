"use client"
import React, { useState, useEffect } from "react";
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import {compareDatesAndTimes, fValidDate} from '@/utils/dataUtils'

const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredMember:any = [];

const Themcongviec = ({itemGroup, listEp, project, setReload, reload}:{itemGroup:any; listEp:any; project: any;setReload:any; reload:any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
    job_name:null,
    job_card:null,
    job_description:null,
    job_member:null,
    time_in: null,
    time_out: null,
    date_start: null,
    date_end: null,
    job_group_id:itemGroup.id,
    content:null,
    });

    useEffect(()=>{
        filteredMember = listEp?.filter((itm:any) => itemGroup?.project_member?.includes(itm?._id.toString()));
    },[])
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        const params = {
            job_name: formData.job_name,
            job_member: formData.job_member,
            date_start: formData.date_start,
            time_in: formData.time_in,
            date_end: formData.date_end,
            time_out: formData.time_out
          }; 
          if (!fValid(params)) {
            return;
          }

          const alertMessage = compareDatesAndTimes(formData.date_start,formData.date_end,formData.time_in,formData.time_out); 
          if (alertMessage) {
          return; 
          }else{
            if(fValidDate(formData,project)){
                return
            }
          }

        setIsModalOpen(false);
        // Thực hiện xử lý lưu thông tin ở đây
        POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${itemGroup.project_id}/add-cong-viec`,formData)
        .then(res => {
          if(res){
            alert("Thêm mới công việc thành công")
            setFormData({
                job_name:null,
                job_card:null,
                job_description:null,
                job_member:null,
                time_in: null,
                time_out: null,
                date_start: null,
                date_end: null,
                job_group_id:itemGroup.id,
                content:null,
                });
            setReload(!reload)
            setIsModalOpen(false);
          } 
      })
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
      const handleJobCard = (checkedValues: any) => {
        setFormData({...formData, job_card:checkedValues.join(',')});
    };

    const handleChange = (values: any, field: any) => {
        setFormData({...formData, [field] :values.join(',')})
    };
      const handleDate = (e:any) => {
        var parts = e.target.value.split("-");
        var reversedDate = parts.reverse().join("-");
        const {name} = e.target
        setFormData({...formData,[name]:reversedDate});
      };
      const onChange = (e:any) => {
        const {name, value} = e.target
        setFormData({...formData,[name]:value});
      };
    return (
        <div >

            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/ic_gr_cv.png" alt="" style={{ marginRight: 10 }} />
                Thêm công việc
            </p>
            <Modal destroyOnClose title='Thêm công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên công việc <span>*</span></p>
                    <input 
                    name ='job_name'
                    onChange={onChange} 
                    type="text" placeholder="Tên công việc" />
                    <span className="err job_name" ></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ công việc:</p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={handleJobCard}  />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả công việc </p>
                    <textarea id="" name="job_description"  placeholder="Nhập mô tả công việc" 
                         onChange = {onChange}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhóm công việc </p>
                    <Select
                        showSearch
                        disabled
                        style={{ width: "100%" }}
                        // placeholder="Nhóm công việc"
                        optionFilterProp="children"
                        filterOption={(input, option) => (String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())}
                        defaultValue={[{
                            value: itemGroup?.id,
                            label: itemGroup?.name
                            }]}
                        options={
                            [{
                            value: itemGroup?.id,
                            label: itemGroup?.name
                            }]
                        }
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        defaultValue={[]}
                        filterOption={(input, option) => (String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())}
                        onChange={values => handleChange( values, 'job_member')}
                        options={
                            filteredMember?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                    <span className="err job_member" ></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <div className={styles.time_work}>
                        <input name= 'date_start' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input name= 'time_in' style={{ width: "45%" }} type="time" onChange={onChange}/>
                    </div>
                    <span className="err date_start time_in" ></span>
                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
                    <div className={styles.time_work}>
                        <input name= 'date_end' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input name= 'time_out' style={{ width: "45%" }} type="time" onChange={onChange}/>
                    </div>
                    <span className="err date_end time_out"></span>
                </div>
                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Tạo dự án mới</button>
                </div>
            </Modal>
        </div>
    );
}
export default Themcongviec;