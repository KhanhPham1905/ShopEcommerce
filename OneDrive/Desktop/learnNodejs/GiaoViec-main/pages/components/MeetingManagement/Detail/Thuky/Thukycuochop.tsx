"use client"

import React, { useState } from 'react';
import SecretaryList from './app';

const App: React.FC = () => {
    const [secretaries, setSecretaries] = useState<any[]>([
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
        if (secretaries.length > 1) {
            const updatedSecretaries = secretaries.filter(secretary => secretary.id !== id);
            setSecretaries(updatedSecretaries);
        } else {
            const updatedSecretaries = secretaries.filter(secretary => secretary.id !== id);
            setSecretaries(updatedSecretaries);
            alert("Thư ký cuộc họp không được bỏ trống!.");
        }
    };

    return (
        <div>
            <SecretaryList secretaries={secretaries} onRemove={handleRemove} />
        </div>
    );
};

export default App;
