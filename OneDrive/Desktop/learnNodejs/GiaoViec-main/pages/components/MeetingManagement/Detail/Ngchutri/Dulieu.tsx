import React, { useState } from 'react';
import styles from '../Detail.module.css';

import Image from 'next/image';
interface Boss {
    id: number;
    name: string;
    img: string;
}

interface BossListProps {
    boss: Boss[];
    onRemove: (id: number) => void;
}

const BossList: React.FC<BossListProps> = ({ boss, onRemove }) => {
    return (
        <div className={styles.meet_ifmt_tv}>
            <div className={styles.title_detl_meet}>
                <h4>NGƯỜI CHỦ TRÌ CUỘC HỌP</h4>
            </div>
            <div className={styles.detl_infm_meet}>
                <div className={styles.bptg_met}>
                    <div className={styles.detl_infm_meet} style={{ padding: '0' }}>
                        {boss.map((boss) => (
                            <div key={boss.id} className={styles.ctch_met}>
                                <div className={styles.meet_ng}>
                                    <p className={styles.detl_fulln}>

                                        <Image width={30} height={30} src={boss.img} alt="" />{boss.name}</p>
                                    <button className={styles.sp_remove} onClick={() => onRemove(boss.id)}>Gỡ bỏ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BossList;