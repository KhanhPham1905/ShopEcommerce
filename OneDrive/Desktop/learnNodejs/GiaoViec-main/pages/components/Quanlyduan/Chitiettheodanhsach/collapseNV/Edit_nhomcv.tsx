"use client"
import React, { useState, useEffect } from "react";
import styles from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Themmoiduan/Add_duan.module.css";

import {convertDateFormat, reverseDate} from "@/utils/dataUtils";
import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';
import {fValid} from '@/utils/formValidation';
import {compareDatesAndTimes, fValidDate} from '@/utils/dataUtils'


const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];
var filteredMemberP:any = [];
var filteredManagementP:any = [];
var filteredMemberG:any = [];
var filteredManagementG:any = [];

const Themmoinhomcongviec = ({itemGroup, listEp, project, setReload, reload}:{itemGroup:any; listEp:any; project:any; setReload:any; reload:any}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name:itemGroup.name,
        card:itemGroup.card,
        description:itemGroup.description,
        project_manager:itemGroup.project_manager,
        project_member: itemGroup.project_member,
        time_in: itemGroup.time_in,
        time_out: itemGroup.time_out,
        date_start: itemGroup.date_start,
        date_end: itemGroup.date_end,
    });

    useEffect(() => {
        filteredMemberP = listEp?.filter((itm:any) => project?.project_member?.includes(itm?._id.toString()));
        filteredManagementP = listEp?.filter((itm:any) => project?.project_management?.includes(itm?._id.toString()));
        filteredMemberG = listEp?.filter((itm:any) => itemGroup?.project_member?.includes(itm?._id.toString()));
        filteredManagementG = listEp?.filter((itm:any) => itemGroup?.project_manager?.includes(itm?._id.toString()));
      }, []);
    const handleOk = () => {
        const params = {
            name: formData.name,
            project_manager: formData.project_manager,
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
          }else{
            if(fValidDate(formData,project)){
                return
            }
          }
        setIsModalOpen(false);
        POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${itemGroup.project_id}/edit-nhom-cong-viec/${itemGroup.id}`,formData)
        .then(res => {
          if(res){
            alert("Sửa nhóm công việc thành công")
            setReload(!reload);
           setFormData({
              name:null,
              card:null,
              description:null,
              project_manager:null,
              project_member:null,
              time_in: null,
              time_out: null,
              date_start: null,
              date_end: null,
          });
          } 
      })
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleJobCard = (checkedValues: any) => {
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
        
        setFormData({...formData, [field] :values.join(',')})
    };

    return (
        <div >

            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/add_thumuc.png" alt="" style={{ marginRight: 10 }} />
                Sửa nhóm công việc
            </p>
            <Modal title='Sửa nhóm công việc' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name}>Tên nhóm công việc <span>*</span></p>
                    <input 
                        name = 'name'
                        onChange = {onChange}
                        defaultValue={itemGroup.name}
                        type="text" placeholder="Tên nhóm công việc" />
                    <span className="err name" ></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ nhóm công việc:</p>
                    <Checkbox.Group options={plainOptions} defaultValue={itemGroup?.card?.split(',')}  onChange={handleJobCard}/>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Mô tả nhóm công việc </p>
                    <textarea name="description" id="" placeholder="Nhập mô tả nhóm công việc"
                        onChange = {onChange}
                        defaultValue={itemGroup.description} 
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên quản lý <span>*</span> </p>
                    <Select
                        mode="multiple"
                        showSearch
                        style={{ width: 472 }}
                        
                        placeholder="Thêm thành viên quản lý"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label?.toString()  ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label?.toString()  ?? '').toLowerCase().localeCompare((optionB?.label?.toString()  ?? '').toLowerCase())
                        }
                        defaultValue={filteredManagementG.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                        onChange={ values => handleChange( values,'project_manager')}
                        options={filteredManagementP.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                    />
                    <span className="err project_manager"></span>
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thành viên thực hiện công việc </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên thực hiện"
                        defaultValue={filteredMemberG?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                        onChange={ values => handleChange( values,'project_member')}
                        options={filteredMemberP?.map((data:any) => (
                            {
                              value:data?._id,
                              label:data?.userName
                            }
                          ))
                        }
                    />
                    <span className="err project_member" ></span>
                </div>





                <div className={styles.title}>
                    <p className={styles.name}>Thời gian bắt đầu <span>*</span></p>
                    <div className={styles.time_work}>
                        <input defaultValue={reverseDate(itemGroup.date_start)} name= 'date_start' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input defaultValue={itemGroup.time_in} name= 'time_in' style={{ width: "45%" }} type="time" onChange={onChange}/>
                    </div>
                    <span className="err date_start time_in" ></span>
                </div>

                <div className={styles.title}>
                    <p className={styles.name}>Thời gian kết thúc <span>*</span> </p>
                    <div className={styles.time_work}>
                        <input  defaultValue = {reverseDate(itemGroup.date_end)} name= 'date_end' style={{ width: "45%" }} type="date" onChange={handleDate}/>
                        <input defaultValue = {itemGroup.time_out} name= 'time_out' style={{ width: "45%" }} type="time" onChange={onChange}/>
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

export default Themmoinhomcongviec;