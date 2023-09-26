"use client"
import React, { useState, useEffect } from "react";
import styles from "./Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';


const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredMember:any = [];

const Themcongviec = ({item, listEp, project, setReload, reload}:{item:any, listEp:any, project:any, setReload:any, reload:any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupJob, setGroupJob]:any = useState([]);
    const [formData, setFormData] = useState({
        job_name:null,
        job_card:null,
        job_description:null,
        job_member:null,
        time_in: null,
        time_out: null,
        date_start: null,
        date_end: null,
        job_group_id:null,
    });
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
        setIsModalOpen(false);
        // Thực hiện xử lý lưu thông tin ở đây
        POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/add-cong-viec`,formData)
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
                job_group_id:null,
            });
            setGroupJob([])
            setReload(!reload);
            setIsModalOpen(false);
          } 
      })
    }
    const handleChange = (values: any, field: any) => {
        if(values == null){
            setFormData({...formData, [field] :null})
            return;
        }
        setFormData({...formData, [field] :values})
    };
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleJobCard = (checkedValues: any) => {
        setFormData({...formData, job_card:checkedValues.join(',')});
    };


    useEffect(() => {
        const url = `projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}`;
        POST(url).then((res) => {
            setGroupJob(res?.data?.jobDetail);
            if(formData.job_group_id){
                var ob ={'project_member':'',}
                for(var i = 0; i < (res?.data?.jobDetail).length; i++){
                    if(res?.data?.jobDetail[i].id == formData.job_group_id){
                        ob = {...(res?.data?.jobDetail)[i]}
                    }
                }
                filteredMember = listEp?.filter((itm:any) => ob?.project_member?.includes(itm?._id.toString()));

            }else{
                filteredMember = listEp?.filter((itm:any) => project?.project_member?.includes(itm?._id.toString()));
            }
        })
      }, [formData.job_group_id]);

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
                        name= 'job_name'
                        onChange={onChange} 
                        style={{ width: "100%" }} type="text" placeholder="Tên công việc" 
                        />
                    <span className="err job_name" ></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ công việc:</p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]}  onChange={handleJobCard} />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả công việc </p>
                    <textarea style={{ width: "100%" }} name="job_description" id="" placeholder="Nhập mô tả công việc" 
                         onChange = {onChange}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhóm công việc </p>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Nhóm công việc"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        onChange={ values => handleChange( values, 'job_group_id')}
                        options={[
                            {
                              value:null,
                              label:'Chưa phân loại'
                            }
                            ,
                            ...(Array.isArray(groupJob)
                          ? groupJob.map((data: any) => ({
                              value: data?.id,
                              label: data?.name
                            }))
                          : [])
                            
                          ]
                        }
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        filterOption={(input, option) => (String(option?.label) ?? '').toLowerCase().includes(input.toLowerCase())}
                        onChange={ values => handleChange( values, 'job_member')}
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