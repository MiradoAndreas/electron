import { ActionButton, ActionButtonProps } from '@/components'
// import { createEmptyNoteAtom } from '@renderer/store'
// import { useSetAtom } from 'jotai'
import { LuSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  // const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  // const handleCreation = async () => {
  //   await createEmptyNote()
  // }

  return (
    <ActionButton {...props}>
      <LuSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
