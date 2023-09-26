"use client";
import React, { useState, useEffect } from "react";
import { Input, List, Modal } from "antd";
import Image from 'next/image'
import { POST } from '@/pages/api/auth';

interface Follower {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}


var filteredListEp:any =[];
const ListFollower = ({item}:{item:any}) => {
  console.log('item', item);
  const [newFollower, setNewFollower] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listEp, setListEp] = useState([]);
  const [reload, setReload] = useState(false);
  let listIdFollower = item.project_follow

  useEffect(() => {
    const loadEp = async () => {
      try {
        const url = `projects/quan-ly-du-an-theo-danh-sach-cong-viec/1?keywords`;
        const response = await POST(url);
        setListEp(response?.data.listEp);
      } catch (error) {
        console.log(error);
      }
    };
    loadEp();
  }, []);
  
  useEffect(() => {
    POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}`)
    .then(res => {
      if(res){
        filteredListEp = listEp.filter((itm:any) => res?.data?.project?.project_follow.includes(itm?._id.toString()));
        setNewFollower(filteredListEp)
      } 
  })
  }, [reload,listEp]);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  }; 
  const handleDelete = (index: any) => {
    let newListFollower = listIdFollower.split(',');
    newListFollower = newListFollower.filter((itm:any) => itm !== (index +'')); 
    listIdFollower = newListFollower.join(',');
    POST(`projects/chi-tiet-du-an-theo-danh-sach-cong-viec/${item.project_id}/edit-follow`,{project_follow: listIdFollower})
        .then(res => {
          if(res){
            setReload(!reload)
          } 
      })
  };
  const { Search } = Input;
  const onSearch = (e:any) => {
    const search = e.target.value.toLowerCase();
    setNewFollower(filteredListEp.filter((val:any) => {
      return val?.userName?.toLowerCase().includes(search)
    }))
    // Do something with the filtered array 'newarray'
  };
  return (
    <>
      <p className="cv_dot" onClick={showModal} style={{ margin: 0 }}>
        <Image width={18} height={18} alt="" src="/img_ntd.png" style={{ marginRight: 10 }} />
        Danh sách người theo dõi
      </p>
      <Modal
        title="Danh sách người theo dõi"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Search  placeholder="Tìm kiếm người theo dõi" 
          onChange={onSearch}
        />
        <List
          style={{ border: "none" }}
          size="small"
          bordered
          dataSource={newFollower}
          renderItem={(item:any, index) => (
            <List.Item>
              <div>
                <Image width={24} height={24} alt="" src={'/avatar1.jpg'} />
                <span>{item.userName}</span>
              </div>
              <button onClick={() => handleDelete(item._id)} style={{ background: "red", color: "#fff", border: "none", borderRadius: "40%" }}>Xóa</button>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default ListFollower;
