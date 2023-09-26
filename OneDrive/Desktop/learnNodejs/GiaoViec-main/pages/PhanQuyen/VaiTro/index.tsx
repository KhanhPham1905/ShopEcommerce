import React from 'react';
import Vaitro from '@/pages/PhanQuyen/VaiTro/Vaitro'
import Xemquyenmoi from './Xemquyen/Chitietvaitro';
import QuanlyNhanvien from './Xemquyen/QuanlyNhanvien';

export interface PostPageAProps {

}

export default function PostPage({
  // children,
  setActiveKey,
  setOpenKeys,
  selectedColor,
  isHasRole,
}: {
  // children: any;
  isHasRole: boolean
  setActiveKey: Function;
  setOpenKeys: Function;
  selectedColor: string
}) {

  return (
    <div>
      <Vaitro
        isHasRole={isHasRole}
        setActiveKey={setActiveKey}
        setOpenKeys={setActiveKey}
        // children={Children}
        selectedColor={selectedColor} />


    </div>
  )
}