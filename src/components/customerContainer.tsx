import { ChangeEvent, useContext, useState } from 'react'
import { State } from 'xstate'
import { useActor, useSelector } from '@xstate/react'

import { EditCustomerInfoForm } from './customer/forms/editCustomerInfoForm'

import { CustomerContext } from '../state/customer/context'
import { CustomerStateContext } from './customerState'

const editSelector = (state: State<CustomerContext>) => {
  return state.matches('edit')
}
const confirmSelector = (state: State<CustomerContext>) => {
  return state.matches('confirm')
}

export const CustomerContainer = () => {
  const service = useContext(CustomerStateContext)
  const [ state ] = useActor(service.customerService)
  const { send } = service.customerService

  const [ value, setValue ] = useState('')

  const isEdit = useSelector(service.customerService, editSelector)
  const isConfirm = useSelector(service.customerService, confirmSelector)

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const confirm= () => {
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
  const complete = () => {
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
      {isEdit && (
        <EditCustomerInfoForm
          value={value}
          onChange={inputChange}
        />
      )}

      <div>
        {isEdit && (
          <button
            onClick={confirm}
          >
            confirm
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
              onClick={complete}
            >
              complete
            </button>
          </>
        )}

        {!isEdit && !isConfirm && (
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
