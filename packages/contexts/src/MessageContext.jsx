import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const MessageContext = React.createContext([{}, () => {}])

const MessageProvider = ({ children }) => {
  // const message = (msg) => {
  //   toast(msg)
  // }

  return (
    <MessageContext.Provider value={{ message: toast }}>
      <>
        <Toaster />
        {children}
      </>
    </MessageContext.Provider>
  )
}

const useMessageContext = () => React.useContext(MessageContext)

export { MessageContext, MessageProvider, useMessageContext }
