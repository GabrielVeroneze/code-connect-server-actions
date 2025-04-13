'use client'

import { useRef } from 'react'
import { Modal } from '@/components/Modal'
import { IconButton } from '@/components/IconButton'
import { ModalHandle } from '@/types/ModalHandle'
import styles from './ModalComment.module.css'

export const ModalComment = () => {
    const modalRef = useRef<ModalHandle>(null)

    return (
        <>
            <Modal ref={modalRef}>
                <h1>Olá mundo!</h1>
            </Modal>
            <IconButton
                onClick={() => modalRef.current?.openModal()}
                icon="/icons/chat.svg"
                alt="Ícone de chat"
            />
        </>
    )
}
