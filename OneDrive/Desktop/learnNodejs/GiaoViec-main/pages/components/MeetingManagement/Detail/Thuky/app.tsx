import React, { useState } from 'react';
import styles from '../Detail.module.css';
import Image from 'next/image';

interface Secretary {
    id: number;
    name: string;
    img: string;
}

interface SecretaryListProps {
    secretaries: Secretary[];
    onRemove: (id: number) => void;
}

const SecretaryList: React.FC<SecretaryListProps> = ({ secretaries, onRemove }) => {
    return (
        <div className={styles.meet_ifmt_tv}>
            <div className={styles.title_detl_meet}>
                <h4>THƯ KÝ CUỘC HỌP</h4>
            </div>
            <div className={styles.detl_infm_meet}>
                <div className={styles.bptg_met}>
                    <div className={styles.detl_infm_meet} style={{ padding: '0' }}>
                        {secretaries.map((secretary) => (
                            <div key={secretary.id} className={styles.ctch_met}>
                                <div className={styles.meet_ng}>
                                    <p className={styles.detl_fulln}>

                                        <Image width={30} height={30} src={secretary.img} alt="" />{secretary.name}</p>
                                    <button className={styles.sp_remove} onClick={() => onRemove(secretary.id)}>Gỡ bỏ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecretaryList;