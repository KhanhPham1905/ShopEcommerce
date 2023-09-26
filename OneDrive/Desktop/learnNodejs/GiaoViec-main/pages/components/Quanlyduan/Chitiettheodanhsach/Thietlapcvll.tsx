"use client"
import React, { useState, useEffect } from "react";
import styles from "./Themmoiduan/Add_duan.module.css";

import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import {compareDatesAndTimes} from '@/utils/dataUtils'

var filteredMember:any = [];

const Thietlapcvll = ({item, listEp}: {item:any, listEp:any}) => {
  const [groupJob, setGroupJob]:any = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [formData, setFormData]:any = useState({
    job_name: null,
    day_repeat: null,
    date_repeat: null,
    job_member: null,
    time_in: null,
    time_out: null,
    date_start: null,
    date_end: null,
    type_repeat: 1,
    job_group_id: null,
  });

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
    POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/thiet-lap-cong-viec-lap-lai`,formData)
    .then(res => {
      if(res){
        alert("Thiết lập công việc lặp lại thành công")
      } 
  })
}
  useEffect(()=>{
    const url = `projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}`;
      POST(url).then((res) => {
          setGroupJob(res?.data?.jobDetail);
      })
    filteredMember = listEp?.filter((itm:any) => item?.project_member?.includes(itm?._id.toString()));
  }, [])
  
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
      month:'Không được bỏ trống phần này!!',
      week:'',
    })
    return;
  }
  if(formData.type_repeat === 2 && !formData.day_repeat){
    setErrorMessages({
      month:'',
      week:'chọn ít nhất 1 ngày',
    })
    return
  }
}

  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (values: any, field: any) => {
    if(values == null){
        setFormData({...formData, [field] :null})
        return;
    }
    setFormData({...formData, [field] :values})
};
  const handleSelectChange = (value:any) => {
    if (value === '1') {
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
  const handleDateRepeat = (e:any) => {
    setFormData({...formData,[e.target.name]:e.target.value, day_repeat: null})
  };
  return (
    <div >

      <p onClick={showModal} style={{ margin: "0" }}>
        <Image width={18} height={18} src="/list_cv_dsda.png" alt="" style={{ marginRight: 10 }} />
        Thiết lặp công việc lặp lại
      </p>
      <Modal title='Thiết lặp công việc lặp lại' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.title} >
          <p className={styles.name}>Tên công việc <span>*</span></p>
          <input name ='job_name' onChange={onChange} style={{ width: "100%" }} type="text" placeholder="Tên công việc" />
        </div>
      <span className="err job_name" ></span>

        <div className={styles.title}>
          <p className={styles.name}>Tần suất lặp lại <span>*</span></p>
          <Select
        className={styles.hz}
        showSearch
        style={{ width: '100%' }}
        //placeholder="Tần suất lặp lại"
        //optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        defaultValue={'0'}
        onChange={handleSelectChange}
        options={[
          {
            value: '0',
            label: 'Lặp lại theo tháng',
          },
          {
            value: '1',
            label: 'Lặp lại theo tuần',
          },
        ]}
      />
      {showCheckbox && (
        <div>
          <Checkbox.Group onChange={values => handleDayRepeat(values,'day_repeat')}>
            <Checkbox value ={1}>Thứ 2</Checkbox>
            <Checkbox value ={2}>Thứ 3</Checkbox>
            <Checkbox value ={3}>Thứ 4</Checkbox>
            <Checkbox value ={4}>Thứ 5</Checkbox>
            <Checkbox value ={5}>Thứ 6</Checkbox>
            <Checkbox value ={6}>Thứ 7</Checkbox>
            <Checkbox value ={0}>Chủ nhật</Checkbox>
          </Checkbox.Group>
        </div>
      )}
        </div>
        {showCheckbox == false &&
        (<div className={styles.title} >
          <p className={styles.name}>Ngày lặp lại <span>*</span></p>
          <input 
            name='date_repeat'
            onChange={handleDateRepeat}
            style={{ width: "100%" }} type="text" placeholder="Nhập ngày lặp lại, giữa các ngày phải cách nhau bằng dấu phẩy ',' " />
        </div>
        )}
           {errorMessages.month && <p className={styles.errorMessage}>{errorMessages.month}</p>}
           {errorMessages.week && <p className={styles.errorMessage}>{errorMessages.week}</p>}
        <div className={styles.title}>
          <p className={styles.name}>Nhóm công việc <span>*</span></p>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Chọn nhóm công việc"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }     
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
          <p className={styles.name}>Thành viên thực hiện <span>*</span></p>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn thành viên thực hiện"
            defaultValue={[]}
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={ values => handleChange( values,'job_member')}
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
        <span className="err job_member" ></span>
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
export default Thietlapcvll;