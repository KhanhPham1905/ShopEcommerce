import React from 'react';
import Work_document from '@/pages/components/Quanlytailieu/Work_document';

export interface PostPageAProps {

}

export default function PostPage({

    selectedColor,
    isHasRole,
    setOpenKeys,
    setActiveKey,
    file,
    setFile,
 }:
    {

        selectedColor: string,
        isHasRole: boolean,
        setOpenKeys: Function,
        setActiveKey: Function,
        file:any,
        setFile:any,
    }) {
    return (
        <div>
            <Work_document setOpenKeys={setActiveKey} setActiveKey={setActiveKey} isHasRole={isHasRole} selectedColor={selectedColor}   file={file}
              setFile={setFile} />
        </div>
    )
}