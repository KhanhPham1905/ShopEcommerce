"use client"
import React, { useState, useEffect, useContext } from "react";
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";
import {convertDateFormat, reverseDate} from "@/utils/dataUtils";
import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import {compareDatesAndTimes, fValidDate} from '@/utils/dataUtils'
import { ListEpContext } from "@/components/context/listEpContext";


const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}]
var filteredMember:any = [];
var filteredMemberG:any = [];


const Suacongviec = ({data, group, setReload, reload}:{data:any; group:any; setReload:any; reload:any}) => {
    var listEp = useContext(ListEpContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        job_name:data.job_name,
        job_card:data.job_card,
        job_description:data.job_description,
        job_group_id:data.job_group_id,
        job_member:data.job_member,
        time_in: data.time_in,
        time_out: data.time_out,
        date_start: data.date_start,
        date_end: data.date_end,
    });


    useEffect(() => {
        filteredMember = listEp?.filter((itm:any) => formData?.job_member?.includes(itm?._id.toString()));
        filteredMemberG = listEp?.filter((itm:any) => group[0].project_member?.includes(itm?._id.toString()));
      }, [listEp]);
      
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
            if(fValidDate(formData,group[0])){
                return
            }
          }

        setIsModalOpen(false);
        POST(`projects/chi-tiet-du-an/${data.job_group_id}/edit-cong-viec`,formData)
        .then(res => {
          if(res){
            alert("Sửa nhóm công việc thành công")
            setReload(!reload)
          } 
      })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    
    const handleJobCard = (checkedValues: any) => {
        setFormData({...formData, job_card:checkedValues.join(',')});
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
        
        setFormData({...formData, [field] :values.join(',')})
    };
    return (
        <div >
            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={19} src="/ic_gr_cv.png" alt="" style={{ marginRight: 10 }} />
                Sửa công việc
            </p>
            <Modal title='Sửa công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên công việc <span>*</span></p>
                    <input name='name' type="text" placeholder="Tên công việc" 
                        defaultValue={data.job_name}
                        onChange = {onChange}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ công việc:</p>
                    <Checkbox.Group options={plainOptions} defaultValue={data.job_card.split(',')} onChange={handleJobCard} />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả công việc </p>
                    <textarea name="job_description" id="" placeholder="Nhập mô tả công việc"
                        defaultValue={data.job_description}
                        onChange = {onChange}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhóm công việc </p>
                    <Select
                        showSearch
                        disabled
                        style={{ width: "100%" }}
                        placeholder="Nhóm công việc"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        value={
                            [{value:group[0].id, label:group[0].name}]
                        }
                        options={[
                            {
                                value: '0',
                                label: 'Chưa phân loại',
                            },
                            {
                                value: '1',
                                label: 'Test 1',
                            },
                            {
                                value: '2',
                                label: 'test 2',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        defaultValue={filteredMember?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                        onChange={ values => handleChange( values,'job_member')}
                        options={filteredMemberG?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                    />
                </div>



                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <div className={styles.time_work}>
                        <input defaultValue={reverseDate(data.date_start)} name= 'date_start' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input defaultValue={data.time_in} name= 'time_in' style={{ width: "45%" }} type="time" onChange={onChange}/>
                    </div>
                    <span className="err date_start time_in" ></span>
                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
                    <div className={styles.time_work}>
                        <input  defaultValue = {reverseDate(data.date_end)} name= 'date_end' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input defaultValue = {data.time_out} name= 'time_out' style={{ width: "45%" }} type="time" onChange={onChange}/>
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
export default Suacongviec;