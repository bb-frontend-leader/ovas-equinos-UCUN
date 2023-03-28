import { useContext } from 'react'
import { PanelContext } from 'UI-Components-books'

export const useNavigation = () => {
  // Obtenemos el método onToggle del contexto.
  const { onToggle } = useContext(PanelContext)

  const onNavigate = (section) => {
    onToggle(section - 1)
  }

  return { onNavigate }
}
