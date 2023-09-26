import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Checkbox, Input, Popconfirm, Table, Modal } from "antd";
import styles from "./index.module.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Image } from "react-bootstrap";

interface Item {
  key: string;
  name: string;
  dateB: string;
  dateE: string;
  date: string;
  img: string;
}

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([
    {
      key: "0",
      name: "Dự án S",
      date: "18-07-2023 ",
      dateB: "18-07-2023  - 14:00",
      dateE: "118-07-2023 - 14:41",
      img: "/anh134.png",
    },
    {
      key: "1",
      name: "Dự án A",
      date: "18-07-2023 ",
      dateB: "18-07-2023 - 14:41",
      dateE: "18-07-2023 - 14:41",
      img: "/anh134.png",
    },
  ]);

  const [count, setCount] = useState(2);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteRecordKey, setDeleteRecordKey] = useState<string | null>(null);

  const handleExpand = (expanded: boolean, record: any) => {
    setExpandedRowKeys(expanded ? [record.key] : []);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const allRowKeys = dataSource.map((item) => item.key);
    setSelectedRowKeys(checked ? allRowKeys : []);
  };

  const selectAllCheckbox = (
    <Checkbox
      checked={selectedRowKeys.length === dataSource.length}
      onChange={() => handleSelectAll}
    />
  );

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const handleSelectRow = (recordKey: React.Key) => {
    const newSelectedRowKeys = selectedRowKeys.includes(recordKey)
      ? selectedRowKeys.filter((key) => key !== recordKey)
      : [...selectedRowKeys, recordKey];
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const expandable = {
    expandedRowKeys,
    onExpand: handleExpand,

    expandIcon: ({ expanded, onExpand, record }: any) => (
      <div style={{ display: "flex", color: "blue" }}>
        <p style={{ margin: "10px" }}>{record.date}</p>

        <CaretDownOutlined
          onClick={() => onExpand(record, !expanded)}
          style={{ marginLeft: 8, marginTop: 12, cursor: "pointer" }}
        />
      </div>
    ),
    expandedRowRender: (record: any) => (
      <div
        style={{ display: "flex", justifyContent: "space-evenly" }}
        onClick={() => handleSelectRow(record.key)}
      >
        <p></p>
        <p style={{ fontWeight: "500", marginRight: "90px" }}>
          {" "}
          <Image
            width={50} height={50} alt='' src={record.img} style={{ padding: "10px" }} />
          {record.name}
        </p>
        <p style={{ padding: "10px" }}>{record.dateB}</p>
        <p style={{ padding: "10px" }}>{record.dateE}</p>
      </div>
    ),
  };

  const defaultColumns: any[number] & {
    editable?: boolean;
    dataIndex: string;
  } = [
      {
        title: "Tên dự án",
        width: "20%",
      },
      {
        title: "Thời gian bắt đầu",
        width: "20%",
      },
      {
        title: "Thời gian kết thúc",
        width: "20%",
      },
      {
        title: (
          <div style={{ display: "flex" }}>
            {selectAllCheckbox}
            <span style={{ marginLeft: 8 }}>Chọn</span>
          </div>
        ),
        dataIndex: "selectAll",
        width: "10%",
        render: (_: any, record: { key: React.Key }) => (
          <Checkbox
            checked={selectedRowKeys.includes(record.key)}
            onChange={() => handleSelectRow(record.key)}
          />
        ),
        editable: true,
      },
    ];

  const handleDelete = () => {
    if (selectedRowKeys.length > 0) {
      setShowDeleteConfirm(true);
    }
  };

  const handleConfirmDelete = () => {
    const newData = dataSource.filter(
      (item) => !selectedRowKeys.includes(item.key)
    );
    setDataSource(newData);
    setSelectedRowKeys([]);
    setShowDeleteConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };
  const [showRestoreConfirm, setShowRestoreConfirm] = useState(false);

  const handleRestore = () => {
    if (selectedRowKeys.length > 0) {
      setShowRestoreConfirm(true);
    }
  };

  const handleConfirmRestore = () => {

    setShowRestoreConfirm(false);

  };

  const handleCancelRestore = () => {
    setShowRestoreConfirm(false);
  };
  return (
    <div>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      {selectedRowKeys.length > 0 && (
        <div>
          <Button
            type="primary"
            onClick={handleRestore}
            className={styles.buttun}
          >
            Khôi phục
          </Button>

          <Button type="primary" danger ghost onClick={handleDelete}>
            Xóa
          </Button>
        </div>
      )}
      <Modal
        title="Xác nhận xóa"
        open={showDeleteConfirm}
        style={{ width: "460px" }}
      >
        <p style={{ textAlign: "center", fontSize: "16px", padding: "18px" }}>
          Bạn có chắc chắn muốn xóa vĩnh viễn dự án đã chọn?
        </p>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={handleCancelDelete}
            style={{ backgroundColor: "#4C5BD4", color: "white" }}
          >
            Huỷ
          </Button>

          <Button onClick={handleConfirmDelete} style={{ backgroundColor: "#ffa800", color: "white" }}>
            Xóa
          </Button>
        </div>
      </Modal>
      <Modal
        title="Xác nhận xóa"
        open={showDeleteConfirm}
        style={{ width: "460px" }}
      >
        <p style={{ textAlign: "center", fontSize: "16px", padding: "18px" }}>
          Bạn có chắc chắn muốn xóa vĩnh viễn dự án đã chọn?
        </p>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={handleCancelDelete}
            style={{ backgroundColor: "#4C5BD4", color: "white" }}
          >
            Huỷ
          </Button>

          <Button onClick={handleConfirmDelete} style={{ backgroundColor: "#ffa800", color: "white" }}>
            Xóa
          </Button>
        </div>
      </Modal>
      <Modal
        title="Xác nhận khôi phục"
        open={showRestoreConfirm}
        style={{ width: "460px" }}
        onCancel={handleCancelRestore}

      >
        <p style={{ textAlign: "center", fontSize: "16px", padding: "18px" }}>
          Bạn có chắc chắn muốn khôi phục dự án đã chọn?
        </p>
        <div style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
        }}>
          <Button
            key="cancel"
            onClick={handleCancelRestore}
            style={{ backgroundColor: "#4C5BD4", color: "white" }}
          >
            Huỷ
          </Button>
          <Button
            key="restore"
            onClick={handleConfirmRestore}
            style={{ backgroundColor: "#ffa800", color: "white" }}
          >
            Khôi phục
          </Button>
        </div>
      </Modal>

      <Table
        bordered
        dataSource={dataSource}
        columns={defaultColumns as any}
        expandable={expandable as any}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};
export default App;
