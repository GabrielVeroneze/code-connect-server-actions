'use client'

import { useState } from 'react'
import { UserComment } from '@/components/UserComment'
import { ModalReply } from '@/components/ModalReply'
import { Comment } from '@/types/Comment'
import styles from './Replies.module.css'

interface RepliesProps {
    comment: Comment
}

export const Replies = ({ comment }: RepliesProps) => {
    const [showReplies, setShowReplies] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <button
                className={styles.botao}
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {showReplies && (
                <ul className={styles.lista}>
                    {comment.children?.map(reply => (
                        <li className={styles.item} key={reply.id}>
                            <UserComment comment={reply} />
                            <ModalReply comment={reply} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
