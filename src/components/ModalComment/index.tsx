'use client'

import { useRef } from 'react'
import { Modal } from '@/components/Modal'
import { SubmitButton } from '@/components/SubmitButton'
import { IconButton } from '@/components/IconButton'
import { ModalHandle } from '@/types/ModalHandle'
import styles from './ModalComment.module.css'

export const ModalComment = () => {
    const modalRef = useRef<ModalHandle>(null)

    return (
        <>
            <Modal ref={modalRef}>
                <form className={styles.form}>
                    <h2 className={styles.titulo}>
                        Deixe seu comentário sobre o post:
                    </h2>
                    <textarea
                        className={styles.textarea}
                        name="text"
                        placeholder="Digite seu comentário"
                        required
                    ></textarea>
                    <SubmitButton>Comentar</SubmitButton>
                </form>
            </Modal>
            <IconButton
                onClick={() => modalRef.current?.openModal()}
                icon="/icons/chat.svg"
                alt="Ícone de chat"
            />
        </>
    )
}
