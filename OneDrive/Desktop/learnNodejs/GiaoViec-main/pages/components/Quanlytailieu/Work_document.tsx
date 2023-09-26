import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Pagination, Upload, Input, Table } from "antd";
import { useState, useEffect, useContext } from "react";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import DeleteFile from "./DeleteFile";
import { ColumnsType } from "antd/es/table";
import { GET, POST } from '@/pages/api/auth';
import {formatTimestamp} from '@/utils/dataUtils';
const urlGiaoViec = process.env.NEXT_PUBLIC_URL_GV

// interface DataType {
//   key: number;
//   name: string;
//   kichthuoc: string;
//   nguoitao: string;
//   thoigian: string;
// }


export default function Work_document({

  selectedColor,
  isHasRole,
  setOpenKeys,
  setActiveKey,
  file,
  setFile,
 }

  : {

    selectedColor: string;
    isHasRole: boolean;
    setActiveKey: Function;
    setOpenKeys: Function;
    file:any;
    setFile:Function;
  }) {
  const key = 'chi-tiet-file';
  const onClick = (info: any,record: any) => {
    setFile(record);
    setActiveKey(info?.key);
    info?.key === "trang-chu" ? setOpenKeys([]) : null;
  };


  const { Search } = Input;
  const [data, setData]:any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [page, setPage]= useState(1);
  const [valueSearch, setValueSearch] = useState('')
  const [reload, setReload] = useState(true)
  const PAGE_SIZE = 10;



  const columns: any = [
    {
      title: 'Tên tài liệu',
      key: 'name',
      render: (record:any) => <div style={{ display: "flex" }}>
        <a key={'chi-tiet-file'}
          onClick={() => onClick({ key: 'chi-tiet-file' },record)}
          style={{ cursor: "pointer", color: "#4c5bd4", width: "50%" }}>
          {record?.name_file}

        </a>
        <div>
          <a href={`${urlGiaoViec}/files/quan-ly-tai-lieu-cong-viec/tai-xuong-tai-lieu/${record?.id}/`} download>
            <Image 
              width={15} height={16} style={{ margin: "0 5px" }}
              src="/down_folder (1).png"
              alt=""
            />
          </a>

          <DeleteFile id={record?.id} setReload = {setReload}/>
        </div>
      </div>
      ,
    },
    {
      title: 'Kích thước ',
      dataIndex: 'size_file',
      key: 'kichthuoc',
      render: (value:any) => <div>{Math.floor(value/1024) < 1 ? 1: Math.floor(value/1024)} KB</div>
    },
    {
      title: 'Người tạo',
      dataIndex: 'created_name',
      key: 'nguoitao',
    },
    {
      title: 'Thời gian tạo',
      key: 'thoigian',
      render: (record:any) => formatTimestamp(record.created_at),
    },


  ];

  useEffect(()=>{
    if(reload){ 
      POST(`files/quan-ly-tai-lieu-cong-viec/${page}?keywords=${valueSearch}`)
      .then(res=>{
        if(res?.data?.files?.length === 10){
          setPage(page+1)  
        }else{
          setReload(false)
          setPage(1)
        }
        if(page === 1){
          setData(res?.data?.files)
        }else{
            setData([...data,...res?.data?.files])
        }
      })
    }
  },[page,reload,valueSearch])

  const onSearch = async (value: string) => {
    setValueSearch(value);
    setPage(1);
    setCurrentPage(1);
    setReload(true);
  };
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedData = data?.slice(startIndex, endIndex);

  const handleFileChange = (e: any) => {
    if (e.file.status === 'done' && e.file.originFileObj !== selectedFile) {
      setSelectedFile(e.file.originFileObj);
  
      const formData = new FormData();
      formData.append('files', e.file.originFileObj);
  
      POST('files/quan-ly-tai-lieu-cong-viec/them-tai-lieu', formData)
        .then(response => {
          e.fileList.splice(0, e.fileList.length);
          alert('Thêm tài liệu thành công');
          setReload(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const onSearchKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };
  return (
    <div>
      <div className="box_document">
        <div id="list_document">
          <div className={`text_document1 ${selectedColor}`}>

            <h4 className={`name_document `}>Tài liệu công việc</h4>
          </div>
          <form action="" onKeyDown={e=>{
                        if(e.key==='Enter'){
                          e.preventDefault()
                        }
                      }}>
            {isHasRole ? (
              <div className="form_search_file">
                <Upload showUploadList={false} multiple={true} onChange={(e) => handleFileChange(e)}>
                  <Button
                    style={{
                      color: "#ffffff",
                      background: "#4c5bd4",
                      borderRadius: "20px",
                      height: "34px",
                      fontWeight: "bold",
                      fontSize: "16px"
                    }}
                    className={` ${selectedColor}`}

                  >
                    Tải lên tài liệu {" "}
                  </Button>
                </Upload>

                <div className="searchcv">

                  <Search placeholder="Tìm kiếm tài liệu" onSearch={onSearch} />

                </div>
              </div>
            ) : (

              <div className="form_search_file">
                <p></p>

                <div className="search_doc_file">
                  <div className="searchcv">

                    <Search placeholder="Tìm kiếm dự án" onSearch={onSearch} onKeyDown={onSearchKeyDown}/>

                  </div>
                </div>
              </div>)}
          </form>


          <Table
            className="table"
            scroll={{ x: "max-content" }}
            columns={columns}
            // dataSource={data} 
            dataSource={paginatedData}
          />
          <Pagination
            current={currentPage}
            total={data?.length}
            pageSize={PAGE_SIZE}
            onChange={(page) =>
            setCurrentPage(page)}
          />
        </div>

      </div>
    </div>
  );
}
