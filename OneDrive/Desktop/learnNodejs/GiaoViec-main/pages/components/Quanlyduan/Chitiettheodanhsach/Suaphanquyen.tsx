import React, { useState } from 'react';
import { Checkbox, Modal, Space, Table, Tag } from 'antd';
import styles from "./Themmoiduan/Add_duan.module.css";
import Image from 'next/image';
import { POST } from '@/pages/api/auth';


const columns = [
  {
    title: 'Các quyền',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Quản lý',
    dataIndex: 'check1',
    key: 'check1',
  },
  {
    title: 'Nhân viên',
    dataIndex: 'check2',
    key: 'check2',
  },
];

const Suaphanquyen: React.FC = () => {
  const [listCheckManager,setListCheckManager] = useState<number[]>([])
  const [listCheckStaff,setListCheckStaff] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    POST('projects/chi-tiet-du-an-theo-danh-sach-cong-viec/role',{
        checked_management: listCheckManager?.join(','),
        checked_ep: listCheckStaff?.join(',')
    })
    .then(res => {
        if(res){
            setIsModalOpen(false);
        }
    })
};

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
const dataSource = [
  {
    key: '1',
    name: 'Thêm nhóm công việc',
    check1: <Checkbox 
        value={listCheckManager?.includes(1)}
        checked={listCheckManager?.includes(1)}
        onChange={e=>{
            if(e.target.checked){
                setListCheckManager([...listCheckManager,1])
            }else{
                setListCheckManager(listCheckManager?.filter((number:number) => number !== 1))
            }
        }}/>,
    check2: <Checkbox 
        value={listCheckStaff?.includes(1)}
        checked={listCheckStaff?.includes(1)}
        onChange={e=>{
            if(e.target.checked){
                setListCheckStaff([...listCheckStaff,1])
            }else{
                setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 1))
            }
        }}/>,
  },
  {
    key: '2',
    name: 'Thêm công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(2)}
    checked={listCheckManager?.includes(2)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,2])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 2))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(2)}
    checked={listCheckStaff?.includes(2)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,2])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 2))
        }
    }}/>,
  },
  {
    key: '3',
    name: 'Chỉnh sửa công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(3)}
    checked={listCheckManager?.includes(3)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,3])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 3))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(3)}
    checked={listCheckStaff?.includes(3)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,3])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 3))
        }
    }}/>,
  },
  {
    key: '4',
    name: 'Quyền đánh dấu hoàn thành công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(4)}
    checked={listCheckManager?.includes(4)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,4])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 4))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(4)}
    checked={listCheckStaff?.includes(4)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,4])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 4))
        }
    }}/>,
  },
  {
    key: '5',
    name: 'Quyền chỉnh sửa nhóm công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(5)}
    checked={listCheckManager?.includes(5)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,5])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 5))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(5)}
    checked={listCheckStaff?.includes(5)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,5])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 5))
        }
    }}/>,
  },
  {
    key: '6',
    name: 'Chỉnh sửa thời gian bắt đầu-kết thúc',
    check1: <Checkbox 
    value={listCheckManager?.includes(6)}
    checked={listCheckManager?.includes(6)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,6])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 6))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(6)}
    checked={listCheckStaff?.includes(6)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,6])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 6))
        }
    }}/>,
  },
  {
    key: '7',
    name: 'Quyền cập nhật kết quả công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(7)}
    checked={listCheckManager?.includes(7)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,7])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 7))
        }
    }}/>,
check2: <Checkbox 
    value={listCheckStaff?.includes(7)}
    checked={listCheckStaff?.includes(7)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckStaff([...listCheckStaff,7])
        }else{
            setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 7))
        }
    }}/>,
  },
  {
    key: '8',
    name: 'Quyền xóa nhóm công việc',
    check1: <Checkbox 
    value={listCheckManager?.includes(8)}
    checked={listCheckManager?.includes(8)}
    onChange={e=>{
        if(e.target.checked){
            setListCheckManager([...listCheckManager,8])
        }else{
            setListCheckManager(listCheckManager?.filter((number:number) => number !== 8))
        }
    }}/>,
  check2: <Checkbox 
      value={listCheckStaff?.includes(8)}
      checked={listCheckStaff?.includes(8)}
      onChange={e=>{
          if(e.target.checked){
              setListCheckStaff([...listCheckStaff,8])
          }else{
              setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 8))
          }
      }}/>,
    },
    {
      key: '9',
      name: 'Quyền chuyển công việc cho người khác',
      check1: <Checkbox 
      value={listCheckManager?.includes(9)}
      checked={listCheckManager?.includes(9)}
      onChange={e=>{
          if(e.target.checked){
              setListCheckManager([...listCheckManager,9])
          }else{
              setListCheckManager(listCheckManager?.filter((number:number) => number !== 9))
          }
      }}/>,
    check2: <Checkbox 
      value={listCheckStaff?.includes(9)}
      checked={listCheckStaff?.includes(9)}
      onChange={e=>{
          if(e.target.checked){
              setListCheckStaff([...listCheckStaff,9])
          }else{
              setListCheckStaff(listCheckStaff?.filter((number:number) => number !== 9))
          }
      }}/>,
    },

];
  return (
    <div >

      <p className="cv_dot" onClick={showModal} style={{ margin: 0 }}>
        <Image width={18} height={18} alt="" src="/user_dsda.png" style={{ marginRight: 10 }} />
        Chỉnh sửa phân quyền
      </p>
      <Modal title='Chỉnh sửa phân quyền' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Table columns={columns} dataSource={dataSource} />
        <div className={styles.button}>

          <button className={styles.ok} onClick={handleOk}>Cập nhật</button>
        </div>
      </Modal>
    </div>
  );
}

export default Suaphanquyen;