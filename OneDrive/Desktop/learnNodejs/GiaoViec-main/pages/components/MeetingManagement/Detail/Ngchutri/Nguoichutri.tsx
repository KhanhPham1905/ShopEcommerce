"use client"

import React, { useState } from 'react';
import BossList from './Dulieu';

const App: React.FC = () => {
    const [boss, setBoss] = useState<any[]>([
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
        if (boss.length > 1) {
            const updatedBoss = boss.filter(boss => boss.id !== id);
            setBoss(updatedBoss);
        } else {
            const updatedBoss = boss.filter(boss => boss.id !== id);
            setBoss(updatedBoss);
            alert("Người chủ trì cuộc họp không được bỏ trống!.");
        }
    };

    return (
        <div>
            <BossList boss={boss} onRemove={handleRemove} />
        </div>
    );
};

export default App;
