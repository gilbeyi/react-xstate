import { useContext, useEffect, useState } from 'react'
import { State } from 'xstate'
import { useActor, useSelector } from '@xstate/react'

import { CustomerStateContext } from '@/components/customer/customerState'
import { EditCustomerInfo } from '@/components/customer/forms/editCustomerInfo'
import { Buttons } from '@/components/customer/parts/buttons'

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

  useEffect(() => {
    send('INIT')
  }, [])

  const isEdit = useSelector(service.customerService, editSelector)
  const isConfirm = useSelector(service.customerService, confirmSelector)

  const inputChange = (customerInfo: CustomerInfo) => {
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
  const reset = () => {
    setCustomerInfo(customerInfoDefault)
    send({
      type: 'RESET'
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

      <Buttons
        isEdit={isEdit}
        isConfirm={isConfirm}
        confirm={confirm}
        cancel={cancel}
        complete={complete}
        reset={reset}
      />
    </>
  )
}
