import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'

interface props {
  onSelect?: () => void
}

export const useNotesList = ({ onSelect }: props) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNodeIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNodeIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
