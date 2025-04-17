'use client'

import { useState } from 'react'
import styles from './Replies.module.css'

export const Replies = () => {
    const [showReplies, setShowReplies] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <button
                className={styles.botao}
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            <ul className={styles.lista}>
            </ul>
        </div>
    )
}
