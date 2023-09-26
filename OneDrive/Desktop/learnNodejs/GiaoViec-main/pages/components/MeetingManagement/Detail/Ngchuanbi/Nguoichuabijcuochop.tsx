"use client"

import React, { useState } from 'react';
import PrepareList from './Dulieu';

const App: React.FC = () => {
    const [prepare, setPrepare] = useState<any[]>([
        {
            id: 1,
            name: 'Test Anh',
            img: "/Group 626671.png",
        },
        {
            id: 2,
            name: 'Test Anh',
            img: "/Group 626671.png",
        },
        {
            id: 3,
            name: 'Test Anh',
            img: "/Group 626671.png",
        },
        {
            id: 4,
            name: 'Test Anh',
            img: "/Group 626671.png",
        },


    ]);
    const handleRemove = (id: number) => {
        if (prepare.length > 1) {
            const updatedPrepare = prepare.filter(prepare => prepare.id !== id);
            setPrepare(updatedPrepare);
        } else {
            const updatedPrepare = prepare.filter(prepare => prepare.id !== id);
            setPrepare(updatedPrepare);
            alert("Người chuẩn bị cuộc họp không được bỏ trống!.");
        }
    };

    return (
        <div>
            <PrepareList prepare={prepare} onRemove={handleRemove} />
        </div>
    );
};

export default App;
