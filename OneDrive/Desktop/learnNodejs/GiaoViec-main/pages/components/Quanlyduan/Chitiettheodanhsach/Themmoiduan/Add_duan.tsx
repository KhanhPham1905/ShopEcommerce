"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./Add_duan.module.css";
import Image from "next/image";
import { Form, Select, Modal, Checkbox, notification } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {compareDatesAndTimes} from '@/utils/dataUtils';
import {fValid} from '@/utils/formValidation';


const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];


const Add_duan = ({ selectedColor, listEp, setReload, reload}: { selectedColor: string; listEp:any[] ; setReload:any; reload:any}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    project_name: null,
    project_description: null,
    time_in: null,
    time_out: null,
    date_start: null,
    date_end: null,
    project_card: null,
    project_management: null,
    project_member: null,
    project_evaluate: null, 
    project_follow: null,
  });


  
  const handleOk = async (e:any) => {
    const params = {
      project_name: formData.project_name,
      project_management: formData.project_management,
      project_member: formData.project_member,
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
    }
      {
      const addProject = async () => {
          try {
            const response = await  POST('projects/quan-ly-du-an-theo-danh-sach-cong-viec/them-du-an',formData);
          } catch (error) {
          }
      };
        addProject()
        .then(() => {
            alert("Thêm mới dự án thành công")
            setFormData({
              project_name: null,
              project_description: null,
              time_in: null,
              time_out: null,
              date_start: null,
              date_end: null,
              project_card: null,
              project_management: null,
              project_member: null,
              project_evaluate: null, 
              project_follow: null,
            });
            setReload(!reload);
            setIsModalOpen(false);
        }
      )
    }
  };

  const handleChange = (values: any, field: any) => {
      values = values.join(',')
      setFormData({...formData, [field] :values})
  };

  const handleProjectCard = (checkedValues: any) => {
    setFormData({...formData, project_card:checkedValues.join(',')});
  };

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
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
        <Image width={18} height={18} src="/add_mayanh.png" alt="" style={{ marginRight: 10 }} />
        Thêm dự án
      </p>
      <Modal destroyOnClose title='Thêm dự án' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <div className={styles.title} >
          <p className={styles.name}>Tên dự án <span>*</span></p>
          <input 
              name = 'project_name'
              onChange={onChange}
              style={{ width: '100%' }} type="text" placeholder="Tên dự án"         
          />
          <span className="err project_name" ></span>
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thẻ dự án <span>*</span></p>
          <Checkbox.Group name='project_card' options={plainOptions} defaultValue={[]} onChange={handleProjectCard} />

        </div>
        <div className={styles.title} >
          <p className={styles.name}>Thêm thành viên quản trị dự án <span>*</span></p>
          <Select
            id='fullInfo2'
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên quản trị"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={[]}
            onChange={ values => handleChange( values,'project_management')}
            options={              
              listEp?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName

              }
              ))
            }
          />
          <span className="err project_management"></span>
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên thực hiện dự án <span>*</span></p>
          <Select
            id='fullInfo3'
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên thực hiện"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={[]}
            onChange={ values => handleChange( values,'project_member')}
            options={
              listEp?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName

              }
              ))
            }
          />
          <span className="err project_member" ></span>
        </div>
        <div className={styles.title} >
          <p className={styles.name}>Thêm thành viên theo dõi dự án </p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên theo dõi"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={[]}
            onChange={ values => handleChange( values,'project_follow')}
            options={
              listEp?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName

              }
              ))
            }
          />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên đánh giá dự án </p>
          <Select
            
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên đánh giá"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={[]}
            onChange={ values => handleChange( values,'project_evaluate')}
            options={
              listEp?.map((data:any) => (
                {
                  value:data?._id,
                  label:data?.userName
                }
                ))
            }
          />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Mô tả dự án</p>
          <textarea 
            name= 'project_description'
            onChange = {onChange}
            style={{ width: '100%' }} className={styles.textarea} id="" placeholder="Nhập mô tả dự án" />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
          <div className={styles.time_work}>
            <input  name= 'date_start' style={{ width: '45%' }} type="date" onChange={handleDate}/>
            <input name= 'time_in' style={{ width: '45%' }} type="time" onChange={onChange}/>
          </div>
          <span className="err date_start time_in" ></span>
        </div>

        <div className={styles.title}>
          <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
          <div className={styles.time_work}>
            <input  name= 'date_end' style={{ width: '45%' }} type="date" onChange={handleDate}/>
            <input  name= 'time_out' style={{ width: '45%' }} type="time" onChange={onChange}/>
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
export default Add_duan;