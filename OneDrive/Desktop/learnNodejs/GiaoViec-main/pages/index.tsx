import Head from "next/head";
import { Anybody, Inter } from "@next/font/google";
import Link from "next/link";
import Body from "@/pages/BaoCao/quytrinh";
import { useState, useEffect } from "react";
import TheoDanhSachCongViec from "@/pages/QuanLyDuAn/TheoDanhSachCongViec";
import TheoQuyTrinh from "@/pages/QuanLyDuAn/TheoQuyTrinh";
import DuAn from "@/pages/BaoCao/DuAn";
import QuyTrinh from "@/pages/BaoCao/quytrinh";
import TaiLieuCongViec from "@/pages/QuanLyTaiLieu/TaiLieuCongViec";
import TaiLieuCuaToi from "@/pages/QuanLyTaiLieu/TaiLieuCuaToi";
import DiaDiem from "@/pages/QuanLyPhongHop/DiaDiem";
import PhongHop from "@/pages/QuanLyPhongHop/PhongHop";
import QuanLyCuocHop from "@/pages/QuanLyCuocHop";
import DuLieuDaXoaGanDay from "@/pages/DuLieuDaXoaGanDay";
import VaiTro from "@/pages/PhanQuyen/VaiTro";
import NguoiDung from "@/pages/PhanQuyen/NguoiDung";
import CongViecCuaToi from "@/pages/CongViecCuaToi";
import CaiDat from "@/pages/CaiDat";
import QuanLyDuLieuDaXoaGanDay from "@/pages/DuLieuDaXoaGanDay/QuanLyDuLieuDaXoaGanDay";

const inter = Inter({ subsets: ["latin"] });
import Trangchu from "@/components/trangchuphanmemgiaoviec/Trangchu";
import QuyTrinhDaXoaGanDay from "./DuLieuDaXoaGanDay/QuyTrinhDaXoaGanDay";
import TaiLieuDaXoaGanDay from "./DuLieuDaXoaGanDay/TaiLieuDaXoaGanDay";
import CuocHopDaXoaGanDay from "./DuLieuDaXoaGanDay/CuocHopDaXoaGanDay";
import ChiTietDuAn from "@/pages/BaoCao/DuAn/chitiet";
import ChiTietQuyTrinh from "@/pages/BaoCao/quytrinh/chitiet";
import ChiTietTheoDanhSach from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Project_details";
import ChiTietTheoQuyTrinh from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Danh_gia_du_an";
import DetailMeeting from "@/pages/components/MeetingManagement/Detail/DetailMeeting";
import ChiTietVaiTro from "@/pages/PhanQuyen/VaiTro/Xemquyen/Chitietvaitro"
import ThemMoiVaiTro from "@/pages/PhanQuyen/VaiTro/Themvaitro"
import SuaVaiTro from "@/pages/PhanQuyen/VaiTro/Suavaitro"
import Xemchitiet from "@/pages/components/Quanlyduan/Chitiettheoquytinh/Bacham/Nhiemvu/Xemchitiet";
import Chitietcv from "@/pages/components/Quanlyduan/Chitiettheodanhsach/Chitietcv";
import QuanlyNhanvien from "./PhanQuyen/VaiTro/Xemquyen/QuanlyNhanvien";
import Chitietfile from "./components/Quanlytailieu/Chittietfile";
import Dscvlaplai from "./components/Quanlyduan/Chitiettheodanhsach/Dscvlaplai";
import {ListEpProvider} from "@/components/context/listEpContext";


export default function Home({
  activeKey,
  setActiveKey,
  isHasRole,
  setSelectedColor,
  selectedColor,
  idProject,
  setIdProject,
  file,
  setFile,
  detailJob,
  setDetailJob,
}: {
  activeKey: any;
  setActiveKey: Function;
  isHasRole: boolean;
  setSelectedColor: Function;
  selectedColor: string;
  idProject: any;
  setIdProject: any;
  file:any;
  setFile:any;
  detailJob:any;
  setDetailJob:Function;
}) {


  const Children = () => {
    switch (activeKey) {
      case "trang-chu":
        return <Trangchu isHasRole={isHasRole} />;

      case "theo-danh-sach-cong-viec":
        return (
          <ListEpProvider>
            <TheoDanhSachCongViec
              isHasRole={isHasRole}
              setActiveKey={setActiveKey}
              setOpenKeys={setActiveKey}
              selectedColor={selectedColor}
              setIdProject={setIdProject}
            />
          </ListEpProvider>
        );
      case "theo-quy-trinh":
        return (
          <TheoQuyTrinh
            isHasRole={isHasRole}
            setActiveKey={setActiveKey}
            setOpenKeys={setActiveKey}
            selectedColor={selectedColor}
          />
        );
      case "du-an":
        return (
          <DuAn
            setActiveKey={setActiveKey}
            setOpenKeys={setActiveKey}
            selectedColor={selectedColor}
          />
        );
      case "chi-tiet-du-an":
        return <ChiTietDuAn setActiveKey={setActiveKey} selectedColor={selectedColor} />;
      case "quy-trinh":
        return (
          <QuyTrinh
            setActiveKey={setActiveKey}
            setOpenKeys={setActiveKey}
            selectedColor={selectedColor}
          />
        );
      case "danh-sach-cong-viec-lap-lai":
        return (
          <ListEpProvider>
          <Dscvlaplai isHasRole={isHasRole} setOpenKeys={setActiveKey} setActiveKey={setActiveKey} selectedColor={selectedColor} />;
          </ListEpProvider>
        );
      case "chi-tiet-quy-trinh":
        return <ChiTietQuyTrinh setActiveKey={setActiveKey} selectedColor={selectedColor} />;
      case "tai-lieu-cong-viec":
        return (
            <TaiLieuCongViec 
              setOpenKeys={setActiveKey}
              setActiveKey={setActiveKey}
              selectedColor={selectedColor}
              isHasRole={isHasRole}
              file={file}
              setFile={setFile}

             />
        )
      case "chi-tiet-file":
        return (
            <Chitietfile 
              setOpenKeys={setActiveKey}
              setActiveKey={setActiveKey} 
              selectedColor={selectedColor}
              file={file}
              setFile={setFile}
            />
        )
      case "tai-lieu-cua-toi":
        return <TaiLieuCuaToi isHasRole={isHasRole} setOpenKeys={setActiveKey} setActiveKey={setActiveKey} selectedColor={selectedColor} />;
      case "dia-diem":
        return <DiaDiem isHasRole={isHasRole} selectedColor={selectedColor} />;
      case "phong-hop":
        return <PhongHop isHasRole={isHasRole} selectedColor={selectedColor} />;
      case "cong-viec-cua-toi":
        return <CongViecCuaToi selectedColor={selectedColor} />;
      case "du-lieu-da-xoa-gan-day":
        return <DuLieuDaXoaGanDay setActiveKey={setActiveKey} />;
      case "vai-tro":
        return <VaiTro isHasRole={isHasRole} setActiveKey={setActiveKey}
          setOpenKeys={setActiveKey}
          // children={Children}
          selectedColor={selectedColor} />;
      case "chi-tiet-vai-tro":
        return <ChiTietVaiTro isHasRole={isHasRole} setOpenKeys={setActiveKey} setActiveKey={setActiveKey} selectedColor={selectedColor} />
      case "them-moi-vai-tro":
        return <ThemMoiVaiTro setActiveKey={setActiveKey} selectedColor={selectedColor}></ThemMoiVaiTro>
      case "quan-ly-nhan-vien":
        return <QuanlyNhanvien setActiveKey={setActiveKey} selectedColor={selectedColor} setOpenKeys={setActiveKey}></QuanlyNhanvien>

      case "sua-vai-tro":
        return <SuaVaiTro setActiveKey={setActiveKey} selectedColor={selectedColor} />
      case "nguoi-dung":
        return <NguoiDung selectedColor={selectedColor} />;
      case "quan-ly-cuoc-hop":
        return <QuanLyCuocHop isHasRole={isHasRole} setActiveKey={setActiveKey}
          setOpenKeys={setActiveKey}
          // children={Children}
          selectedColor={selectedColor} />;
      case "cai-dat":
        return (
          <CaiDat
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            isHasRole={isHasRole}
          />
        );
      case "quan-ly-du-lieu-da-xoa-gan-day":
        return (
          <QuanLyDuLieuDaXoaGanDay
            setActiveKey={setActiveKey} selectedColor={selectedColor}
          ></QuanLyDuLieuDaXoaGanDay>
        );
      case "quy-trinh-xoa-gan-day":
        return (
          <QuyTrinhDaXoaGanDay
            setActiveKey={setActiveKey} selectedColor={selectedColor}
          ></QuyTrinhDaXoaGanDay>
        );
      case "tai-lieu-da-xoa-gan-day":
        return (
          <TaiLieuDaXoaGanDay selectedColor={selectedColor} setActiveKey={setActiveKey}></TaiLieuDaXoaGanDay>
        );
      case "cuoc-hop-da-xoa-gan-day":
        return (
          <CuocHopDaXoaGanDay selectedColor={selectedColor} setActiveKey={setActiveKey}></CuocHopDaXoaGanDay>
        );
      case "chi-tiet-theo-danh-sach":
        return (
          <ListEpProvider>
            <ChiTietTheoDanhSach 
              selectedColor={selectedColor} 
              isHasRole={isHasRole} 
              setActiveKey={setActiveKey} 
              setOpenKeys={setActiveKey}
              item={idProject} 
              setIdProject={setIdProject}
              detailJob={detailJob}
              setDetailJob={setDetailJob}
              />
          </ListEpProvider>
          )

      case "xem-chi-tiet-nhiem-vu":
        return <Xemchitiet setActiveKey={setActiveKey} />;
      case "xem-chi-tiet-theo-danh-sach":
        return (
          <Chitietcv 
            setActiveKey={setActiveKey} 
            detailJob={detailJob}
            setDetailJob={setDetailJob}
          />
        )
      case "chi-tiet-theo-quy-trinh":
        return (
          <ChiTietTheoQuyTrinh
            isHasRole={isHasRole}
            setActiveKey={setActiveKey} setOpenKeys={setActiveKey} selectedColor={selectedColor}   ></ChiTietTheoQuyTrinh>
        );
      case "chi-tiet-cuoc-hop":
        return (
          <DetailMeeting setActiveKey={setActiveKey} selectedColor={selectedColor}></DetailMeeting>
        )

      default:
        return <></>;
        break;
    }
  };

  return (
    <div>
      <Children />
    </div>
  );
}
