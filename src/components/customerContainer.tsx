import { ChangeEvent, useContext, useState } from 'react'
import { useActor, useSelector } from '@xstate/react'

import { InputCustomerInfo } from './customer/inputCustomerInfo'

import { CustomerStateContext } from './customerState'

// TODO: refactor any
const inputSelector = (state: any) => {
  return state.matches('input')
}
// TODO: refactor any
const confirmSelector = (state: any) => {
  return state.matches('confirm')
}

export const CustomerContainer = () => {
  const service = useContext(CustomerStateContext)
  const [ state ] = useActor(service.customerService)
  const { send } = service.customerService

  const [ value, setValue ] = useState('')

  const isInput = useSelector(service.customerService, inputSelector)
  const isConfirm = useSelector(service.customerService, confirmSelector)

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const input= () => {
    send({
      type: 'CONFIRM',
      value: {
        name: value
      }
    })
  }
  const cancel= () => {
    send('CANCEL')
  }
  const confirm = () => {
    send('COMPLETE')
  }
  const returnInput = () => {
    setValue('')
    send({
      type: 'RESET',
      value: {
        name: ''
      }
    })
  }

  return (
    <div>
      <InputCustomerInfo
        value={value}
        onChange={inputChange}
      />

      <div>
        {isInput && (
          <button
            onClick={input}
          >
            input
          </button>
        )}
    
        {isConfirm && (
          <>
            <button
              onClick={cancel}
            >
              cancel
            </button>
            <button
              onClick={confirm}
            >
              confirm
            </button>
          </>
        )}

        {!isInput && !isConfirm && (
          <button
            onClick={returnInput}
          >
            return
          </button>
        )}
      </div>
      
      <div>
        <div>
          state.value: {String(state.value)}
        </div>
        <div>
          event.type: {String(state.event.type)}
        </div>
        <div>
          context.customerInfo.name: {String(state.context.customerInfo.name)}
        </div>
      </div>
    </div>
  )
}
