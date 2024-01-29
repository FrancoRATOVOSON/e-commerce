import { atom, useAtomValue, useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'

const connexionAtom = atom(false)

export function useHydrateUserConnexionState(state: boolean) {
  useHydrateAtoms([[connexionAtom, state]])
}

export function useIsUserConnected() {
  return useAtomValue(connexionAtom)
}

export function useUserConnectionState() {
  const setConnectionState = useSetAtom(connexionAtom)

  const login = () => setConnectionState(true)
  const logout = () => setConnectionState(false)

  return { login, logout }
}
