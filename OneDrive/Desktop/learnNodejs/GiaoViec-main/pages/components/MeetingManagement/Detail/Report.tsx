"use client"
import React from 'react';


import styles from "./Detail.module.css"
// import { SearchOutlined } from "@ant-design/icons";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, UploadProps } from "antd";


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


const Report: React.FC = () => (
    <div className={styles.meet_ifmt_tv}>
        <div className={styles.title_detl_meet} style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>BIÊN BẢN HỌP</h4>
            <Upload {...props}>
                <Button
                    style={{
                        border: "none", color: "black",
                        padding: "10px",
                        background: "none"
                    }}
                    icon={<UploadOutlined />}>
                    Tải lên tệp đính kèm
                </Button>
            </Upload>
        </div>
    </div>


);

export default Report;