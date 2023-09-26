"use client"

import React, { useState } from 'react';
import ParticipantsList from './Dulieu';

const App: React.FC = () => {
    const [participants, setParticipants] = useState<any[]>([
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
        if (participants.length > 1) {
            const updatedParticipants = participants.filter(participant => participant.id !== id);
            setParticipants(updatedParticipants);
        } else {
            const updatedParticipants = participants.filter(participant => participant.id !== id);
            setParticipants(updatedParticipants);
            alert("Người tham gia cuộc họp không được bỏ trống!.");
        }
    };

    return (
        <div>
            <ParticipantsList participants={participants} onRemove={handleRemove} />
        </div>
    );
};

export default App;
