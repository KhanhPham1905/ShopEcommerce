"use client"
import React, { useState, useEffect } from "react";
import styles from "./Themmoiduan/Add_duan.module.css";
import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import {reverseDate} from "@/utils/dataUtils"
import { POST } from '@/pages/api/auth';
import {compareDatesAndTimes} from '@/utils/dataUtils'


const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredListEp:any = [];
var filteredMember:any = [];
var filteredManagement:any = [];
var filteredEvaluate:any = [];
var  newErrorMessages = {
  projectName: "",
  projectManagement: "",
  projectMember: "",
}
const Sua_da = ({item, listEp}: {item: any; listEp:any}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState(item.project_description);
  const [projectName, setProjectName] = useState(item.project_name);
  const [projectCard, setProjectCard] = useState(item.project_card);
  const [projectManagement, setProjectManagement] = useState(item.project_management);
  const [projectMember, setProjectMember] = useState(item.project_member);
  const [projectEvaluate, setProjectEvaluate] = useState(item.project_evaluate);
  const [projectFollow, setProjectFollow] = useState(item.project_follow)
  const [errorMessages, setErrorMessages] = useState(
  {
    projectName: "",
    projectManagement: "",
    projectMember: "",
  });
  const [reload, setReload] = useState(true);
  const handleOk = () => {
    
    if (!projectName) {
      newErrorMessages.projectName = "Không được để trống";
    }
    if (!projectManagement) {
      newErrorMessages.projectManagement = "Không được để trống";
    }
    if (!projectMember) {
      newErrorMessages.projectMember = "Không được để trống.";
    }

    if (Object.values(errorMessages).some((message) => message !== "")) {
      setReload(!reload);
      return;
    }
    const alertMessage = compareDatesAndTimes(startDate,endDate,timeIn,timeOut); 
    if (alertMessage) {
      return; 
    }
    setIsModalOpen(false);
    // Thực hiện xử lý lưu thông tin ở đây
    POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/edit-du-an`,{
      project_name: projectName,
      project_description: projectDescription,
      time_in: timeIn,
      time_out: timeOut,
      date_start: startDate,
      date_end: endDate,
      project_card: projectCard,
      project_management: projectManagement,
      project_member: projectMember,
      project_evaluate: projectEvaluate, 
      project_follow: projectFollow,
    })
    .then(res => {
      if(res){
        alert("Chỉnh sửa dự án thành công")
        setIsModalOpen(false);
      }
  })
  };

  useEffect(()=>{
    setErrorMessages(newErrorMessages)
  }, [newErrorMessages])

  useEffect(()=>{
    if(projectName){
      errorMessages.projectName= ""
    }
    if(projectManagement){
      errorMessages.projectManagement= ""
    }
    if(projectMember){
      errorMessages.projectMember= ""
    }
    setReload(!reload);
  }
  ,[projectName,projectManagement,projectMember])

  useEffect(() => {
    filteredListEp = listEp?.filter((itm:any) => projectFollow?.includes(itm?._id.toString()));
    filteredMember = listEp?.filter((itm:any) => projectMember?.includes(itm?._id.toString()));
    filteredManagement = listEp?.filter((itm:any) => projectManagement?.includes(itm?._id.toString()));
    filteredEvaluate = listEp?.filter((itm:any) => projectEvaluate?.includes(itm?._id.toString()));
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleProjectName = (e:any) => {
    setProjectName(e.target.value);
  };

  const handleProjectCard = (checkedValues: any) => {
    setProjectCard(checkedValues.join(','));
  };

  const [timeIn, setTimeIn] = useState(item.time_in);
  const [timeOut, setTimeOut] = useState(item.time_out);
  const [startDate, setStartDate] = useState(item.date_start);
  const [endDate, setEndDate] = useState(item.date_end);
  const handleStartTimeChange = (e:any) => {
    setTimeIn(e.target.value);
  };

  const handleEndTimeChange = (e:any) => {
    setTimeOut(e.target.value);
  };
  const handleStartDateChange = (e:any) => {
    var parts = e.target.value.split("-");
    var reversedDate = parts.reverse().join("-");
    setStartDate(reversedDate);
  };

  const handleEndDateChange = (e:any) => {
      var parts = e.target.value.split("-");
      var reversedDate = parts.reverse().join("-");
      setEndDate(reversedDate);
  };
  const handleChange = (values: any, field: string) => {
    switch (field) {
      case 'projectManagement':
        const projectManagementValue = values.join(',');
        setProjectManagement(projectManagementValue);
        break;
      case 'projectMember':
        const projectMemberValue = values.join(',');
        setProjectMember(projectMemberValue);
        break;
      case 'projectFollow':
        const projectFollowValue = values.join(',');
        setProjectFollow(projectFollowValue);
        break;
      case 'projectEvaluate':
        const projecteEvaluateValue = values.join(',');
        setProjectEvaluate(projecteEvaluateValue);
        break;
      default:
        break;
    }
  };

  return (
    <div >
      <p onClick={showModal} style={{ margin: "0" }}>
        <Image width={18} height={18} src="/editch.png" alt="" style={{ marginRight: 10 }} />
        Sửa dự án
      </p>
      <Modal destroyOnClose title='Sửa dự án' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.title} >
          <p className={styles.name}>Tên dự án <span>*</span></p>
          <input 
            onChange={handleProjectName}
            style={{ width: "100%" }} type="text" placeholder="Tên dự án" defaultValue={projectName}/>
           {errorMessages.projectName && <p className={styles.errorMessage}>{errorMessages.projectName}</p>}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thẻ dự án <span>*</span></p>
          <Checkbox.Group options={plainOptions} defaultValue={projectCard.split(',')} onChange={handleProjectCard} />

        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên quản trị dự án <span>*</span></p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên quản trị"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            defaultValue={filteredManagement.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName
              }
            ))
          }
            onChange={ values => handleChange( values,'projectManagement')}
            options={
              listEp?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName 
              }
              ))
          }
          />
          {errorMessages.projectManagement && <p className={styles.errorMessage}>{errorMessages.projectManagement}</p>}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên thực hiện dự án <span>*</span></p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên thực hiện"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            defaultValue={filteredMember?.map((data:any) => (
                {
                  value:data?._id,
                  label:data?.userName
                }
              ))
            }
            onChange={ values => handleChange( values,'projectMember')}
            options={
                listEp?.map((data:any) => (
                {
                  value:data?._id,
                  label:data?.userName

                }
                ))
            }
          />
        {errorMessages.projectMember && <p className={styles.errorMessage}>{errorMessages.projectMember}</p>}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thêm thành viên theo dõi dự án </p>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên theo dõi"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            defaultValue={filteredListEp?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName

              }
              ))}
            onChange={ values => handleChange( values,'projectFollow')}
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
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            defaultValue={filteredEvaluate?.map((data:any) => (
              {
                value:data?._id,
                label:data?.userName

              }
              ))
            }
            onChange={ values => handleChange( values,'projectEvaluate')}
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
            defaultValue={projectDescription} 
            onChange = {(e) => {setProjectDescription(e.target.value)}}
            style={{ width: "100%" }} name="" id="" placeholder="Nhập mô tả dự án" />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
          <div className={styles.time_work}>
            <input style={{ width: "45%" }} type="date" defaultValue={reverseDate(startDate)} onChange={handleStartDateChange}/>
            <input style={{ width: "45%" }} type="time" defaultValue={timeIn} onChange={handleStartTimeChange}/>
          </div>
        </div>

        <div className={styles.title}>
          <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
          <div className={styles.time_work}>
            <input style={{ width: "45%" }} type="date" defaultValue={reverseDate(endDate)} onChange={handleEndDateChange}/>
            <input style={{ width: "45%" }} type="time" defaultValue={timeOut} onChange={handleEndTimeChange}/>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.ok} onClick={handleOk}>Lưu</button>
        </div>
      </Modal>
    </div>
  );
}
export default Sua_da;