"use client"
import React, { useState, useEffect } from "react";
import styles from "./Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import {compareDatesAndTimes, fValidDate} from '@/utils/dataUtils'

const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredManagement:any = [];
var filteredMember:any = [];


const Themmoinhomcongviec = ({item, listEp, project, setReload, reload}:{item:any, listEp:any, project:any, setReload:any, reload:any} ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData]:any = useState({
        name: null,
        description: null,
        time_in: null,
        time_out: null,
        date_start: null,
        date_end: null,
        card: null,
        project_manager: null,
        project_member: null,
      });


    useEffect(()=>{
        filteredManagement = listEp?.filter((itm:any) => item?.project_management?.includes(itm?._id.toString()));
        filteredMember = listEp?.filter((itm:any) => item?.project_member?.includes(itm?._id.toString()));
    })
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const params = {
            name: formData.name,
            project_member: formData.project_member,
            project_manager: formData.project_manager,
            date_start: formData.date_start,
            time_in: formData.time_in,
            date_end: formData.date_end,
            time_out: formData.time_out
          }; 
        if (!fValid(params)) {
            return;
        }
         
        if (compareDatesAndTimes(formData.date_start,formData.date_end,formData.time_in,formData.time_out)){
            return; 
        }else{
            if(fValidDate(formData,project)){
                return
            }
        }

        setIsModalOpen(false);
            // Thực hiện xử lý lưu thông tin ở đây

        POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/add-nhom-cong-viec`,formData)
        .then(res => {
            if(res){
            alert("Thêm mới dự án thành công")
            setFormData({
                name: null,
                description: null,
                time_in: null,
                time_out: null,
                date_start: null,
                date_end: null,
                card: null,
                project_manager: null,
                project_member: null,
              });
              setReload(!reload);
            } 
        })
        }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleGroupJobCard = (checkedValues: any) => {
        setFormData({...formData, card:checkedValues.join(',')});
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
      const handleChange = (values: any, field: any) => {
        values = values.join(',')
        setFormData({...formData, [field] :values})
    };
    return (
        <div >

            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/add_thumuc.png" alt="" />
                Thêm mới nhóm công việc
            </p>
            <Modal destroyOnClose title='Thêm nhóm công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên nhóm công việc <span>*</span></p>
                    <input 
                        name = 'name'
                        onChange={onChange}
                        style={{ width: "100%" }} type="text" placeholder="Tên nhóm công việc" 
                    />
                <span className="err name" ></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ nhóm công việc:</p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={handleGroupJobCard} />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả nhóm công việc </p>
                    <textarea name="description" placeholder="Nhập mô tả nhóm công việc" 
                        onChange = {onChange}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên quản lý* </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên quản lý*"
                        defaultValue={[]}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        onChange={ values => handleChange( values,'project_manager')}
                        options={
                            filteredManagement?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                </div>
                <span className="err project_manager" ></span>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        defaultValue={[]}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        onChange={ values => handleChange( values,'project_member')}
                        options={
                            filteredMember?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                </div>
                <span className="err project_member" ></span>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <div className={styles.time_work}>
                        <input name= 'date_start'  style={{ width: "45%" }} type="date" onChange={handleDate}/>
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
                    <button className={styles.ok} onClick={handleOk}>Tạo nhóm công việc</button>
                </div>
            </Modal>
        </div>
    );
}
export default Themmoinhomcongviec;