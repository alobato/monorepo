import React from 'react'

const AppContext = React.createContext([{}, () => {}])

const AppProvider = ({ children, defaultValue = {} }) => {
  const [state, setState] = React.useState(defaultValue)
  const setItemState = (item) => setState((currentState) => ({ ...currentState, ...item }))
  return <AppContext.Provider value={{ state, setState, setItemState }}>{children}</AppContext.Provider>
}

const useAppContext = () => React.useContext(AppContext)

export { AppContext, AppProvider, useAppContext }
