import { useContext, useState } from 'react'
import { State } from 'xstate'
import { useActor, useSelector } from '@xstate/react'

import { CustomerStateContext } from '@/components/customerState'
import { EditCustomerInfo } from '@/components/customer/forms/editCustomerInfo'

import { CustomerContext, CustomerInfo, customerInfoDefault } from '@/state/customer/'

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

  const [ customerInfo, setCustomerInfo ] = useState(customerInfoDefault)

  const isEdit = useSelector(service.customerService, editSelector)
  const isConfirm = useSelector(service.customerService, confirmSelector)

  const inputChange = (customerInfo: CustomerInfo) => {
    console.log(customerInfo)
    setCustomerInfo(customerInfo)
  }

  const confirm= () => {
    send('CONFIRM')
  }
  const cancel= () => {
    send('CANCEL')
  }
  const complete = () => {
    send({
        type: 'COMPLETE',
        value: customerInfo
    })
  }
  const returnInput = () => {
    setCustomerInfo(customerInfoDefault)
    send({
      type: 'RESET',
      value: customerInfoDefault
    })
  }

  return (
    <>
      {isEdit && (
        <EditCustomerInfo
          customerInfo={customerInfo}
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
    </>
  )
}
