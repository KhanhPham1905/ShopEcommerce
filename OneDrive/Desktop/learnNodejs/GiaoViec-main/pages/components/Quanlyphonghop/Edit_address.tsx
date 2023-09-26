import React, { useEffect, useState } from 'react';
import { Button, Modal, Select } from 'antd';
import Image from 'next/image';

import styles from "./Diadiem.module.css"
import { POST } from '@/pages/api/auth';

const EditaddressModal:any = ({
  data, dvsd, setReload
}:{
  data:any, dvsd:string, setReload:Function
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData,setFormData] = useState({
    dvsd:dvsd,
    name:data?.name,
    address:data?.address
  })
  useEffect(()=>{
    setFormData({
      dvsd:dvsd,
      name:data?.name,
      address:data?.address
    })
  },[data,dvsd])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    //setIsModalOpen(false);
    if(formData?.dvsd !== '' && formData?.name !== '' && formData?.address !== ''){
      POST(`meeting-rooms/quan-ly-dia-diem/update/${data?.id}`,formData)
      .then(res => {
        if(res){
          setReload(true)
          setIsModalOpen(false);
        } 
      })
    }else{
      alert('Vui lòng nhập đủ trường')
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value: string) => {
    //console.log(`selected ${value}`);
    setFormData({...formData,dvsd:value})
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const handleAddress = (e:any) => {
    setFormData({...formData,address:e.target.value})
  }

  const handleName = (e:any) => {
    setFormData({...formData,name:e.target.value})
  }

  return (
    <>
      <a type="primary" onClick={showModal} style={{ width: "136px" }}>
        <Image width={18} height={16} alt='' src="/edit_ql_blue.png" />
        Sửa
      </a>

      <Modal title="Sửa địa điểm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <body>
          <label className={styles.name} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }} >Tên địa điểm <span style={{ color: "red" }}>*</span></p>
            <input 
              style={{ width: "455px", border: "1px solid #cccccc" }} 
              type="text" 
              placeholder='Nhập tên địa điểm'
              value={formData?.name}
              onChange={handleName}
            />
          </label>
          <label className={styles.select} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }}>Đơn vị sử dụng <span style={{ color: "red" }}>*</span></p>
            <Select
              style={{ width: "455px" }}
              showSearch
              placeholder="Chọn đơn vị sử dụng"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              value = {formData?.dvsd}
              options={[
                {
                  value: dvsd,
                  label: dvsd,
                },

              ]}
            />
          </label>
          <label className={styles.name} style={{ paddingBottom: "15px" }}>
            <p style={{ margin: "0" }}>Địa chỉ<span style={{ color: "red" }}>*</span></p>
            <input 
              style={{ width: "455px", border: "1px solid #cccccc" }} 
              type="text" 
              placeholder='Nhập tên địa chỉ' 
              value={formData?.address}
              onChange={handleAddress}
            />
          </label>
        </body>
        <div className={styles.btn}>
          <button className={styles.btn_huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.btn_ok} type="submit" onClick={handleOk}>Lưu</button>
        </div>

      </Modal>


    </>
  );
};

export default EditaddressModal;