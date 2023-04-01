import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

import { AppStore } from '@models/AppStore'
import { Entry } from '@models/Entry'

const entries: Entry[] = [
  {
    title: '12.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        meal: 'X-tudo',
        status: 'bad',
      },
      {
        id: '2',
        time: '20:10',
        meal: 'Coca-cola',
        status: 'bad',
      }
    ],
  },
  {
    title: '13.09.22',
    data: [
      {
        id: '3',
        time: '11:00',
        meal: 'Arroz e frango',
        status: 'good'
      }
    ]
  },
]

const initialState: AppStore = {
  entries,
}

const AppContext = createContext({} as AppStore)

export function AppContextProvider({ children }: PropsWithChildren) {
  const value = useMemo<AppStore>(() => {
    return initialState
  }, [])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
