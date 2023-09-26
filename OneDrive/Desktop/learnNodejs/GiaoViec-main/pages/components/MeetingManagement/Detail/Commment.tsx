"use client"
import React, { useState } from 'react';
import styles from './Detail.module.css';
import { Button, Input, Space } from 'antd';

interface Comment {
    name: string;
    content: string;
}

const CMT: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        {
            name: 'Test Anh',
            content: 'This is a test comment.',
        },
    ]);

    const [newCommentContent, setNewCommentContent] = useState<string>('');

    const handleComment = () => {
        if (newCommentContent.trim() !== '') {
            const newComment: Comment = {
                name: 'New Commenter',
                content: newCommentContent,
            };
            setComments([...comments, newComment]);
            setNewCommentContent('');
        }
    };

    return (
        <div className={styles.meet_ifmt_tv}>
            <div className={styles.title_detl_meet}>
                <h4>THẢO LUẬN</h4>
            </div>
            <div className={styles.detl_infm_meet}>
                <div className={styles.scr_cmt}>
                    {comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <p>{comment.name}</p>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.cmt}>
                    <Space.Compact style={{ width: '100%' }} className={styles.ip_cmt}>
                        <Input
                            placeholder='Chưa có thảo luận, hãy thảo luận đầu tiên'
                            value={newCommentContent}
                            onChange={(e) => setNewCommentContent(e.target.value)}
                        />
                        <Button type="primary" onClick={handleComment}>Bình luận</Button>
                    </Space.Compact>
                </div>
            </div>
        </div>
    );
};

export default CMT;
