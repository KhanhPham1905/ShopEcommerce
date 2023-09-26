import React, { useEffect, useState } from 'react';
import { Button, Modal, Select, Input } from 'antd';

import styles from "./Diadiem.module.css"
import { POST } from '@/pages/api/auth';

const Btn_Address = ({ 
  selectedColor, 
  dvsd,
  setReload
}: { 
  selectedColor: string
  dvsd:string
  setReload:Function
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData,setFormData] = useState({
    dvsd:'',
    name:'',
    address:''
  })
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if(formData?.dvsd !== '' && formData?.name !== '' && formData?.address !== ''){
      POST('meeting-rooms/quan-ly-dia-diem/them-moi-dia-diem',formData)
      .then(res => {
        if(res){
          setReload(true)
          setIsModalOpen(false);
          setFormData({
            dvsd:'',
            name:'',
            address:''
          })
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
    //console.log('search:', value);
  };
  
  const handleAddress = (e:any) => {
    setFormData({...formData,address:e.target.value})
  }

  const handleName = (e:any) => {
    setFormData({...formData,name:e.target.value})
  }
  return (
    <>
      <Button type="primary" className={selectedColor} onClick={showModal} style={{ width: "150px", borderRadius: "20px", fontWeight: "bold", fontSize: "16px", height: "34px" }}>
        + Thêm mới
      </Button>

      <Modal title="Thêm địa điểm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


        <div className={styles.name} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }} >Tên địa điểm <span style={{ color: "red" }}>*</span></p>
          <Input 
            style={{ width: "100%", border: "1px solid #cccccc" }} 
            type="text" 
            placeholder='Nhập tên địa điểm' 
            onChange={handleName}
            value={formData?.name}
          />
        </div>
        <div className={styles.select} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Đơn vị sử dụng <span style={{ color: "red" }}>*</span></p>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Chọn đơn vị sử dụng"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            value={formData?.dvsd}
            options={[
              {
                value: dvsd,
                label: dvsd,
              },
            ]}
          />


        </div>
        <div className={styles.name} style={{ paddingBottom: "15px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Địa chỉ<span style={{ color: "red" }}>*</span></p>
          <input 
            style={{ width: "100%", border: "1px solid #cccccc" }} 
            type="text" 
            placeholder='Nhập tên địa chỉ' 
            onChange={handleAddress}
            value={formData?.address}
          />
        </div>

        <div className={styles.btn}>
          <button className={styles.btn_huy} onClick={handleCancel}>Hủy</button>
          <button className={styles.btn_ok} type="submit" onClick={handleOk}>Lưu</button>
        </div>
      </Modal>
    </>
  );
};

export default Btn_Address;