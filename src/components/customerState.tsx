import React, { createContext, ReactNode } from 'react'
import { InterpreterFrom } from 'xstate'
import { useInterpret } from '@xstate/react'

import { customerMachine } from '../state/customer'

export const CustomerStateContext = createContext({
  customerService: {} as InterpreterFrom<typeof customerMachine> }
)

type Props = {
  children: ReactNode
}

export const CustomerStateProvider = (props: Props) => {
  const customerService = useInterpret(customerMachine);

  return (
    <CustomerStateContext.Provider value={{ customerService }}>
      {props.children}
    </CustomerStateContext.Provider>
  )
}
