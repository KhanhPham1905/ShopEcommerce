"use client"
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload, List, Avatar } from 'antd';
import styles from "./Detail.module.css"

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const data = [
  {

    title: 'Mô tả cuộc họp số 1',
    description: "dfsfsd",

  },
  {
    title: 'Thời gian bắt đầu',
    description: "dfsfsd",
  },
  {
    title: 'Thời lượng',
    description: "dfsfsd",
  },
  {
    title: 'Địa điểm',
    description: "dfsfsd",
  },
  {
    title: 'Tệp đính kèm',
    description: <Upload {...props}>
      <Button style={{ border: "none", color: "black", background: "none" }} icon={<UploadOutlined />}>Tải lên tệp đính kèm</Button>
    </Upload>

    ,
  },
];

const Thongtinchung: React.FC = (Thongtinchung) => (

  <div className={styles.meet_ifmt_tv}>

    <div className={styles.title_detl_meet}>
      <h4>THÔNG TIN CHUNG</h4>
    </div>

    <div className={styles.detl_infm_meet}>


      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (

          <List.Item style={{ display: "flex", padding: "0 0px 10px 20px" }} >

            <List.Item.Meta

              title={<b style={{ color: "#474747" }} >{item.title}:</b>}
              description={<p style={{ color: "#474747", margin: "0" }}>{item.description}</p>}
            />
          </List.Item>
        )}
      />

    </div>
  </div>



);

export default Thongtinchung;