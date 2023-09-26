"use client"
import React, { useState, useEffect } from "react";
import styles from "./Add_duan.module.css";
import Image from "next/image";
import { Select, Modal, Checkbox } from 'antd';
import type { SelectProps } from 'antd';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { POST } from '@/pages/api/auth';

const plainOptions = [{label:'Quan trọng', value:'1'}, {label:'Khẩn cấp', value:'2'}];

var message = 'Không được bỏ trống phần này!!';
var errorMessagetest:any=({
  project_name:null,
  project_management:null,
  project_member:null,
  project_evaluate:null,
  project_follow:null
})
const Add_work_for_exp = ({selectedColor, listEp, listP, setReload, reload} : {selectedColor: string; listEp : any[]; listP: any[]; setReload: any; reload:any})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [duan, setDuan]:any = useState();
    const [project_management, setproject_management]:any = useState();
    const [project_member, setproject_member]:any = useState();
    const [project_evaluate, setproject_evaluate]:any = useState();
    const [project_follow, setproject_follow]:any = useState();
    const [formData, setFormData]:any = useState({
        id:null,
        project_name: null,
        project_card: null,
        job_groupJob:'1',
      });


      const handleOk = () => {
        let check = true;
        errorMessagetest=({
          project_name:formData.project_name,
          project_management,
          project_member,
          project_evaluate,
          project_follow
        })
          for (let key in errorMessagetest) {
            if(errorMessagetest[key] == null){
                errorMessagetest={...errorMessagetest,[key]:message}
                check = false;
            }else{
              errorMessagetest={...errorMessagetest,[key]:null}
            }
          }
          setReload(!reload)
          if(!check){
            return;
          }
          setIsModalOpen(false);
          // Thực hiện xử lý lưu thông tin ở đây
          POST(`projects/quan-ly-du-an-theo-danh-sach-cong-viec/them-du-an-theo-mau`,{
            ...formData,
            project_management,
            project_member,
            project_evaluate,
            project_follow}
          )
          .then(res => {
            if(res){
              alert("Thêm mới dự án thành công")
              setReload(true)
              setFormData({
                id:null,
                project_name: null,
                project_card: null,
                job_groupJob:'1',
              });
              setproject_management(null);
              setproject_member(null);
              setproject_evaluate(null);
              setproject_follow(null);
              setIsModalOpen(false);
            } 
      })
    }

      useEffect(()=>{
        POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${duan}`)
        .then(res => {
          if(res){
            setproject_management(res?.data?.project?.project_management);
            setproject_follow(res?.data?.project?.project_follow);
            setproject_member(res?.data?.project?.project_member);
            setproject_evaluate(res?.data?.project?.project_evaluate);
           } 
      })
      },[duan])

    const handleChange = (values: any, field: any) => {
        switch (field) {
            case "project_management":
                setproject_management(values.join(','))
              break;
            case "project_member":
                setproject_member(values.join(','))
              break;
            case "project_follow":
                setproject_follow(values.join(','))
              break;
            case "project_evaluate":
                setproject_evaluate(values.join(','))
              break;
          }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

      const handleProjectCard = (checkedValues: any) => {
        setFormData({...formData, project_card:checkedValues.join(',')});
      };

      const handleProjectTemplate = (value: any) => {
        setFormData({...formData,id:(value+'')});
        setDuan(value);
      };

      const onChange = (e:any) => {
        const {name, value} = e.target
        setFormData({...formData,[name]:value});
      };

      
      const changeGroup = (e:any) => {
        setFormData({...formData,job_groupJob:Number(e)});
      };

    return (
        <div >
            <p onClick={showModal} style={{ margin: "0" }}>
                <Image width={18} height={18} src="/add_thumuc.png" alt="" style={{ marginRight: 10 }} />
                Thêm dự án theo mẫu
            </p>
            <Modal destroyOnClose title='Thêm dự án theo mẫu' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.title} >
                    <p className={styles.name} > Tên dự án <span>*</span></p>
                    <input 
                        name = 'project_name'
                        onChange={onChange}
                        style={{ width: '100%' }} type="text" placeholder="Tên dự án" />
                        {errorMessagetest.project_name && <p className={styles.errorMessage}>{errorMessagetest.project_name}</p>}
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thẻ dự án <span>*</span></p>
                    <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={handleProjectCard} />

                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Theo mẫu dự án <span>*</span></p>
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Chọn mẫu dự án"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        onChange = {handleProjectTemplate}
                        options={              
                            listP?.map((data:any) => (
                            {
                              value:data?.project_id,
                              label:data?.project_name
            
                            }
                            ))
                        }
                        
                    />
                    
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Nhóm công việc <span>*</span></p>
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Chọn nhóm công việc"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultValue={'1'}
                        onChange={changeGroup}
                        options={[
                            {
                                value: '2',
                                label: 'Giữ lại nhóm công việc',
                            },
                            {
                                value: '1',
                                label: 'Giữ lại công việc và nhóm công việc',
                            },
                            {
                                value: '0',
                                label: 'Không giữ lại công việc và nhóm công việc',
                            },

                        ]}
                    />
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên giao việc </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên giao việc"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        // value={filteredManagement.map((data:any) => (
                        //     {
                        //       value:data?._id,
                        //       label:data?.userName
                        //     }
                        //   ))
                        // }
                        value={project_management ? project_management?.split(','): []}
                        onChange={ values => handleChange( values,'project_management')}
                        options={              
                            listEp?.map((data:any) => (
                            {
                              value:data?._id?.toString(),
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                    {errorMessagetest.project_management && <p className={styles.errorMessage}>{errorMessagetest.project_management}</p>}
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Chọn thành viên nhận việc </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên nhận việc"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        value={project_member ? project_member?.split(','): []}
                        onChange={ values => handleChange( values,'project_member')}
                        options={              
                            listEp?.map((data:any) => (
                            {
                              value:data?._id?.toString(),
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                    {errorMessagetest.project_member && <p className={styles.errorMessage}>{errorMessagetest.project_member}</p>}
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Thêm thành viên theo dõi </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên theo dõi"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        value={project_follow ? project_follow?.split(','):[]}
                        onChange={ values => handleChange( values,'project_follow')}
                        options={              
                            listEp?.map((data:any) => (
                            {
                              value:data?._id?.toString(),
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                    {errorMessagetest.project_follow && <p className={styles.errorMessage}>{errorMessagetest.project_follow}</p>}
                </div>
                <div className={styles.title}>
                    <p className={styles.name}>Chọn thành viên đánh giá </p>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên nhận đánh giá"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA:{ label: string }, optionB:{ label: string }) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        value={project_evaluate ? project_evaluate?.split(','): []}
                        onChange={ values => handleChange( values,'project_evaluate')}
                        options={              
                            listEp?.map((data:any) => (
                            {
                              value:data?._id?.toString(),
                              label:data?.userName
              
                            }
                            ))
                        }
                    />
                    {errorMessagetest.project_evaluate && <p className={styles.errorMessage}>{errorMessagetest.project_evaluate}</p>}
                </div>


                <div className={styles.button}>
                    <button className={styles.huy} onClick={handleCancel}>Hủy</button>
                    <button className={styles.ok} onClick={handleOk}>Tạo dự án mới</button>
                </div>
            </Modal>
        </div>
    );
}
export default Add_work_for_exp;