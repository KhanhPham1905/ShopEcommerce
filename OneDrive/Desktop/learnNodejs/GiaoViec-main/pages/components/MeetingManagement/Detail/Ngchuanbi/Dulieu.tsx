import React, { useState } from 'react';
import styles from '../Detail.module.css';
import Image from 'next/image';

interface Prepare {
    id: number;
    name: string;
    img: string;
}

interface PrepareListProps {
    prepare: Prepare[];
    onRemove: (id: number) => void;
}

const PrepareList: React.FC<PrepareListProps> = ({ prepare, onRemove }) => {
    return (
        <div className={styles.meet_ifmt_tv}>
            <div className={styles.title_detl_meet}>
                <h4>NGƯỜI THAM CHUẨN BỊ CUỘC HỌP</h4>
            </div>
            <div className={styles.detl_infm_meet}>
                <div className={styles.bptg_met}>
                    <div className={styles.detl_infm_meet} style={{ padding: '0' }}>
                        {prepare.map((prepare) => (
                            <div key={prepare.id} className={styles.ctch_met}>
                                <div className={styles.meet_ng}>
                                    <p className={styles.detl_fulln}>

                                        <Image width={30} height={30} src={prepare.img} alt="" />{prepare.name}</p>
                                    <button className={styles.sp_remove} onClick={() => onRemove(prepare.id)}>Gỡ bỏ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrepareList;