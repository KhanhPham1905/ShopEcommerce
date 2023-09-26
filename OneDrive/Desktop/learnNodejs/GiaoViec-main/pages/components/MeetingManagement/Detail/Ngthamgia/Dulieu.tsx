import React, { useState } from 'react';
import styles from '../Detail.module.css';
import Image from 'next/image';

interface Participants {
    id: number;
    name: string;
    img: string;
}

interface ParticipantsListProps {
    participants: Participants[];
    onRemove: (id: number) => void;
}

const ParticipantsList: React.FC<ParticipantsListProps> = ({ participants, onRemove }) => {
    return (
        <div className={styles.meet_ifmt_tv}>
            <div className={styles.title_detl_meet}>
                <h4>NGƯỜI THAM GIA CUỘC HỌP</h4>
            </div>
            <div className={styles.detl_infm_meet}>
                <div className={styles.bptg_met}>
                    <div className={styles.detl_infm_meet} style={{ padding: '0' }}>
                        {participants.map((participants) => (
                            <div key={participants.id} className={styles.ctch_met}>
                                <div className={styles.meet_ng}>
                                    <p className={styles.detl_fulln}>

                                        <Image width={30} height={30} src={participants.img} alt="" />{participants.name}</p>
                                    <button className={styles.sp_remove} onClick={() => onRemove(participants.id)}>Gỡ bỏ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipantsList;