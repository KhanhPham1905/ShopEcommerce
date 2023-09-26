import React from 'react';
import Phonghop from '@/pages/components/Quanlyphonghop/Phonghop';

export default function PostPage({ selectedColor, isHasRole }: { selectedColor: string, isHasRole: boolean }) {
    return (
        <div>
            <Phonghop isHasRole={isHasRole} selectedColor={selectedColor} />
        </div>
    )
}