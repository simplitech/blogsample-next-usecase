import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

type ModalToEditProps = {
  children: React.FC<number | undefined>
}

export default function ModalToEdit({ children }: ModalToEditProps) {
  const router = useRouter()
  const { edit } = router.query

  const getId = () => {
    return edit === 'new' ? 0 : parseInt(edit as string)
  }

  return (
    <Modal isOpen={edit !== undefined} onClose={() => router.back()} size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>{children(getId())}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
