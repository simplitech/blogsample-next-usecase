import React, { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react'
import useTranslationWithPrefix from '../helpers/useTranslationWithPrefix'

type RemoveDialogProps = {
  isOpen: boolean
  isLoading?: boolean
  type: string
  name: string
  onCancel: () => void
  onConfirm: () => void
}

export default function RemoveDialog({
  isOpen,
  isLoading = false,
  type,
  name,
  onCancel,
  onConfirm,
}: RemoveDialogProps) {
  const { tp, t } = useTranslationWithPrefix('comp.RemoveDialog')
  const cancelRef = useRef()

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onCancel}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {tp('title', { type, name })}
          </AlertDialogHeader>

          <AlertDialogBody>{tp('body')}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCancel}>
              {t('action.cancel')}
            </Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3} isLoading={isLoading}>
              {t('action.remove')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
