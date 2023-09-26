import React, { useEffect, useState } from 'react';
import { Button, Modal, Select, notification } from 'antd';
import Image from 'next/image'
import styles from "./Diadiem.module.css"
import { POST } from '@/pages/api/auth';

const Btn_Address:any = ({
    data, listPlace, setReload
  } : {
    data:any, listPlace:any[], setReload:Function
  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name:data?.name,
    diadiem:data?.diadiem,
    succhua:data?.succhua,
    trangthai:data?.trangthai,
  })
  useEffect(()=>{
    setFormData({
      name:data?.name,
      diadiem:data?.diadiem,
      succhua:data?.succhua,
      trangthai:data?.trangthai,
    })
  },[data])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if(formData?.name !== '' && formData?.succhua !== 0){
      POST(`meeting-rooms/quan-ly-phong-hop/update/${data?.id}`,formData)
      .then(res => {
        if(res){
          setReload(true)
          setIsModalOpen(false);
        } 
      })
    }else{
      notification.error({
        message: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin!",
      })
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value: number) => {
    //console.log(`selected ${value}`);
    setFormData({...formData,diadiem:value})
  };
  const onSearch = (value: string) => {
    //console.log('search:', value);
  };
  const handleName = (e:any) => {
    setFormData({...formData,name:e.target.value})
  }
  const handleSucChua = (e:any) => {
    setFormData({...formData,succhua:Number(e.target.value)})
  }
  const handleStatus = (e:any) => {
    setFormData({...formData,trangthai:Number(e.target.value)})
  }
  return (
    <>
      <a type="primary" onClick={showModal} style={{ width: "136px" }}>
        <Image width={18} height={16} alt='' src="/edit_ql_blue.png" />
        Sửa
      </a>

      <Modal title="Chỉnh sửa phòng họp" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <body>
          <label className={styles.name} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }} >Tên phòng họp <span style={{ color: "red" }}>*</span></p>
            <input 
              style={{ width: "455px", border: "1px solid #cccccc" }} 
              type="text" 
              placeholder='Nhập tên địa điểm' 
              value={formData?.name}
              onChange={handleName}
            />
          </label>
          <label className={styles.select} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }}>Chọn địa điểm <span style={{ color: "red" }}>*</span></p>
            <Select
              style={{ width: "455px" }}
              showSearch
              placeholder="Chọn địa điểm"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(Input, option) =>
                (option?.label ?? '').toLowerCase().includes(Input.toLowerCase())
              }
              value={formData?.diadiem}
              options={
                listPlace?.map((data:any) => (
                {
                  value:data?.id,
                  label:data?.name
                }
                ))
              }
            />

          </label>
          <label className={styles.name} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }}>Sức chứa (số người)<span style={{ color: "red" }}>*</span></p>
            <input 
              style={{ width: "455px", border: "1px solid #cccccc" }} 
              type="text" 
              placeholder='Nhập tên địa chỉ' 
              value={formData?.succhua}
              onChange={handleSucChua}
            />
          </label>
          <label className={styles.select} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }}>Trạng thái <span style={{ color: "red" }}>*</span></p>
            <select name="" id="" value={formData?.trangthai} onChange={handleStatus}>
              <option value={1}>Đang hoạt động</option>
              <option value={2}>Ngưng hoạt động</option>
            </select>


          </label>
        </body>
        <div className={styles.btn}>
          <button className={styles.btn_huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.btn_ok} onClick={handleOk}>Lưu</button>
        </div>
      </Modal>
    </>
  );
};

export default Btn_Address;