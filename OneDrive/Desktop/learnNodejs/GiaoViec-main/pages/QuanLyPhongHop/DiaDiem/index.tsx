import React from 'react';
import Diadiem from '@/pages/components/Quanlyphonghop/Diadiem';

export default function PostPage({ selectedColor, isHasRole }: { selectedColor: string, isHasRole: boolean }) {
    return (
        <div>
            <Diadiem isHasRole={isHasRole} selectedColor={selectedColor} />
        </div>
    )
}