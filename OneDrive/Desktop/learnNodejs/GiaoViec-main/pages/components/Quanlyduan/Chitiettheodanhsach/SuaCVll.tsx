"use client"
import React, { useState, useContext } from "react";
import styles from "./Themmoiduan/Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import {compareDatesAndTimes} from '@/utils/dataUtils';
import {ListEpContext} from "@/components/context/listEpContext"
import {reverseDate} from "@/utils/dataUtils"


const Thietlapcvll =  ({record, setReload}:{record:any; setReload:any}) => {
    const listEp:any = useContext(ListEpContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(false);
    const [formData,setFormData]:any = useState({
      job_name: record.job_name,
      job_member: record.job_member,
      date_start: record.date_start,
      time_in: record.time_in,
      date_end: record.date_end,
      time_out: record.time_out,
      type_repeat:record.type_repeat,
      day_repeat:record.day_repeat,
      date_repeat:record.date_repeat,
    })
    const [errorMessages, setErrorMessages]:any = useState({
      month:null,
      week:null,
    })
    const fmessageMonthWeek = ()=>{
      setErrorMessages({
        month:'',
        week:'',
      })
  
      if(formData.type_repeat === 1 && !formData.date_repeat){
        setErrorMessages({
          month:'Không được để trống',
          week:'',
        })
        return;
      }
      if(formData.type_repeat === 2 && !formData.day_repeat){
        setErrorMessages({
          month:'',
          week:'chọn ít nhất 1 ngày',
        })
        return;
      }
    }
    const handleOk = () => {
  
      fmessageMonthWeek();
  
      const params = {
        job_name: formData.job_name,
        job_member: formData.job_member,
        date_start: formData.date_start,
        time_in: formData.time_in,
        date_end: formData.date_end,
        time_out: formData.time_out,
  
      }; 
      if (!fValid(params)) {
        return;
      }
  
      const alertMessage = compareDatesAndTimes(formData.date_start,formData.date_end,formData.time_in,formData.time_out); 
      if (alertMessage) {
        return; 
      }
      setIsModalOpen(false);
      POST(`projects/danh-sach-lap-lai/${record.job_id}/edit`,formData)
      .then(res => {
        if(res){
          alert("Chỉnh sửa công việc lặp lại thành công")
          setReload(true);
        } 
    })
  }
    const showModal = () => {
      setIsModalOpen(true);
    };
  
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleSelectChange = (value:any) => {
      if (value === '2') {
        setFormData({...formData,type_repeat:2})
        setShowCheckbox(true); 
      } else {
        setFormData({...formData,type_repeat:1})
        setShowCheckbox(false);
      }
    };
  
    const handleDayRepeat = (values:any, name:string) => {
  
      setFormData({...formData,[name]:values.join(','), date_repeat: null})
    };
  
    const handleDateRepeat = (e:any) => {
      setFormData({...formData,[e.target.name]:e.target.value, day_repeat: null})
    };
    const handleJobMember = (values:any, name:string) => {
      setFormData({...formData,[name]:values})
    };
  
    const onChange = (e:any) => {
      const {name, value} = e.target
      setFormData({...formData,[name]:value});
    };
    const handleDate = (e:any) => {
      var parts = e.target.value.split("-");
      var reversedDate = parts.reverse().join("-");
      const {name} = e.target
      setFormData({...formData,[name]:reversedDate});
    };
    return (
      <div >
  
        <p onClick={showModal} style={{ margin: "0" }}>
          <Image width={18} height={18} src="/add_laplai.png" alt="" style={{ marginRight: 10 }} />
          Sửa công việc lặp lại

        </p>
        <Modal destroyOnClose title='Sửa công việc lặp lại' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={styles.title} >
            <p className={styles.name}>Tên công việc <span>*</span></p>
            <input 
              defaultValue={formData.job_name}
              name = 'job_name'
              onChange={onChange}
              style={{ width: "100%" }} type="text" placeholder="Tên công việc" />
          </div>
          <span className="err job_name" ></span>
  
          <div className={styles.title}>
            <p className={styles.name}>Tần suất lặp lại <span>*</span></p>
            <Select
          className={styles.hz}
          showSearch
          style={{ width: '100%' }}
          placeholder="Tần suất lặp lại"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          defaultValue={formData.type_repeat === 2? 'Lặp lại theo tuần':'Lặp lại theo tháng'}
          onChange={handleSelectChange}
          options={[
            {
              value: '1',
              label: 'Lặp lại theo tháng',
            },
            {
              value: '2',
              label: 'Lặp lại theo tuần',
            },
          ]}
        />
        { formData.type_repeat === 2 && (
          <div>
            <Checkbox.Group defaultValue={formData.day_repeat.split(',')} onChange={values => handleDayRepeat(values,'day_repeat')}>
              <Checkbox value ={'1'}>Thứ 2</Checkbox>
              <Checkbox value ={'2'}>Thứ 3</Checkbox>
              <Checkbox value ={'3'}>Thứ 4</Checkbox>
              <Checkbox value ={'4'}>Thứ 5</Checkbox>
              <Checkbox value ={'5'}>Thứ 6</Checkbox>
              <Checkbox value ={'6'}>Thứ 7</Checkbox>
              <Checkbox value ={'0'}>Chủ nhật</Checkbox>
            </Checkbox.Group>
          </div>
        )}
          </div>
          {formData.type_repeat === 1 &&
          (<div className={styles.title} >
            <p className={styles.name}>Ngày lặp lại <span>*</span></p>
            <input 
              name='date_repeat'
              defaultValue={formData.date_repeat}
              onChange={handleDateRepeat}
              style={{ width: "100%" }} type="text" placeholder="Nhập ngày lặp lại, giữa các ngày phải cách nhau bằng dấu phẩy ',' " />
          </div>
          )}
             {errorMessages.month && <p className={styles.errorMessage}>{errorMessages.month}</p>}
             {errorMessages.week && <p className={styles.errorMessage}>{errorMessages.week}</p>}
          <div className={styles.title}>
            <p className={styles.name}>Thành viên thực hiện <span>*</span></p>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Chọn thành viên thực hiện"
              defaultValue={(formData?.job_member && typeof formData.job_member === 'string') ? formData.job_member.split(',').map(Number) : []}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              onChange={ values => handleJobMember( values,'job_member')}
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
          <span className="err job_member" ></span>
          <div className={styles.title}>
            <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
            <div className={styles.time_work}>
              <input defaultValue={reverseDate(formData.date_start)} name = 'date_start' style={{ width: '45%' }} type="date" onChange={handleDate}/>
              <input defaultValue={formData.time_in} name= 'time_in' style={{ width: '45%' }} type="time" onChange={onChange}/>
            </div>
            <span className="err date_start time_in" ></span>
          </div>
  
          <div className={styles.title}>
            <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
            <div className={styles.time_work}>
              <input defaultValue={reverseDate(formData.date_end)} name = 'date_end' style={{ width: '45%' }} type="date" onChange={handleDate}/>
              <input defaultValue={formData.time_out}  name = 'time_out'  style={{ width: '45%' }} type="time" onChange={onChange}/>
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
  export default Thietlapcvll;