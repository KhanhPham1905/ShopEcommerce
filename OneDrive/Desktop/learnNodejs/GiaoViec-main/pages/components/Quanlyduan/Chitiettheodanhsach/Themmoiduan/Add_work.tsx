"use client"
import React, { useState,useEffect } from "react";
import styles from "./Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
      
import {compareDatesAndTimes, fValidDate} from '@/utils/dataUtils'

const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredMember:any = [];

const Add_work= ({listP, listEp, setReload, reload}:{listP:any; listEp:any; setReload:any; reload:any}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupJob, setGroupJob] = useState([]);
  const [fullProject, setFullProject] = useState([]);
  const [project,setProject] = useState();
  const [idProject,  setIdProject]:any = useState()
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
    content:null,
  });
  const [errorMessages, setErrorMessages]:any = useState({
    job_member:null,
  })
  const handleOk = () => {

    if(formData.job_member == null && idProject){
      setErrorMessages({
        job_member: 'Không được bỏ trống phần này!!'
      })
    }
    const params = {
        job_name: formData.job_name,
        date_start: formData.date_start,
        time_in: formData.time_in,
        date_end: formData.date_end,
        time_out: formData.time_out,
      }; 
      if (!fValid(params)) {
        return;
      }

      if(idProject){
        if(fValidDate(formData,project)){
          return
        }
      }else{
        const alertMessage = compareDatesAndTimes(formData.date_start,formData.date_end,formData.time_in,formData.time_out); 
        if (alertMessage) {
        return; 
        }
      }

      setIsModalOpen(false);
      // Thực hiện xử lý lưu thông tin ở đây
      POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${idProject}/add-cong-viec`,formData)
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
            content:null,
          });
          setReload(true)
          setIsModalOpen(false);
        } 
  })
}
  const handleChange = (values: any, field: any) => {
    setFormData({...formData, [field] :values+''})
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
    if(idProject){
      try {
        const url = `projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${idProject}`;
        POST(url).then((res) => {
          setGroupJob(res?.data?.jobDetail);
          filteredMember = listEp?.filter((itm:any) => res?.data?.project?.project_member?.includes(itm?._id.toString()));
          setProject(res?.data?.project)
        });
      } catch (error) {
      }
    }else{
      filteredMember =[...listEp]
    }
    }, [idProject]);

  useEffect(()=>{
    POST(`showListAllProject`)
    .then(res => {
      if(res){
        setFullProject(res?.result);
      } 
    })
  },[])  

  const handleChangeProject = (e:any) => {
    if(e == null){
      setIdProject(null);
      return;
    }
    setIdProject(e)
  }
  const handleChangeGroupJob = (e: any) => {
    setFormData({...formData,job_group_id:e})
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
        <Image width={18} height={18} src="/add_thumuc.png" alt="" style={{ marginRight: 10 }} />
        Thêm công việc
      </p>
      <Modal title='Thêm công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.title} >
          <p className={styles.name}>Tên công việc <span>*</span></p>
          <input 
            name= 'job_name'
            onChange={onChange} 
            style={{ width: "100%" }} type="text" placeholder="Tên công việc" />
          <span className="err job_name" ></span>
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thẻ công việc:</p>
          <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={handleJobCard} />

        </div>
        <div className={styles.title}>
          <p className={styles.name}>Chọn dự án </p>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Chọn dự án"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={null}
            onChange={ values => handleChangeProject( values)}
            options={[
              {
                value:null,
                label:'Chọn dự án',
              },
              ...(Array.isArray(fullProject)
            ? fullProject.map((data: any) => ({
                value: data?.project_id,
                label: data?.project_name
              }))
            : [])
            ]
          }
          />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Chọn nhóm công việc </p>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Chọn nhóm công việc"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            defaultValue={null}
            onChange={ values => handleChangeGroupJob( values)}
            options={[
              {
                value:null,
                label:'Chọn nhóm công việc'
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
          <p className={styles.name}>Mô tả công việc </p>
          <textarea name="job_description" id="" placeholder="Nhập mô tả công việc"
              onChange = {onChange}
          />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên thực hiện công việc <span>*</span> </p>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên thực hiện công việc"
            defaultValue={[]}
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
          {errorMessages.job_member && <p className={styles.errorMessage}>{errorMessages.job_member}</p>}
        </div>

        <div className={styles.title}>
          <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
          <div className={styles.time_work}>
            <input name = 'date_start' style={{ width: '45%' }} type="date" onChange={handleDate}/>
            <input name= 'time_in' style={{ width: '45%' }} type="time" onChange={onChange}/>
          </div>
          <span className="err date_start time_in" ></span>
        </div>

        <div className={styles.title}>
          <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
          <div className={styles.time_work}>
            <input name = 'date_end' style={{ width: '45%' }} type="date" onChange={handleDate}/>
            <input name = 'time_out' style={{ width: '45%' }} type="time" onChange={onChange}/>
          </div>
        </div>
        <span className="err date_end time_out"></span>
        <div className={styles.button}>
          <button className={styles.huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.ok} onClick={handleOk}>Lưu</button>
        </div>
      </Modal>
    </div>
  );
}
export default Add_work;