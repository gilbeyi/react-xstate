import { useContext, useEffect, useState } from 'react'
import { State } from 'xstate'
import { useSelector } from '@xstate/react'

import { CustomerStateContext } from '@/components/customer/customerState'
import { EditCustomerInfo } from '@/components/customer/forms/editCustomerInfo'
import { Completed } from '@/components/customer/forms/completed'
import { ConfirmCustomerInfo } from '@/components/customer/forms/confirmCustomerInfo'
import { Buttons } from '@/components/customer/parts/buttons'

import { CustomerContext, CustomerInfo, customerInfoDefault } from '@/state/customer/'

const editSelector = (state: State<CustomerContext>) => {
  return state.matches('edit')
}
const confirmSelector = (state: State<CustomerContext>) => {
  return state.matches('confirm')
}
const completedSelector = (state: State<CustomerContext>) => {
  return state.matches('completed')
}

export const CustomerContainer = () => {
  const service = useContext(CustomerStateContext)
  const { send } = service.customerService

  const [ customerInfo, setCustomerInfo ] = useState(customerInfoDefault)

  useEffect(() => {
    send('INIT')
  }, [])

  const isEdit = useSelector(service.customerService, editSelector)
  const isConfirm = useSelector(service.customerService, confirmSelector)
  const isCompleted = useSelector(service.customerService, completedSelector)

  const inputChange = (customerInfo: CustomerInfo) => {
    setCustomerInfo(customerInfo)
  }

  const confirm= () => {
    send({
      type: 'CONFIRM',
      value: customerInfo
    })
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
    send('RESET')
  }

  return (
    <>
      {isEdit && (
        <EditCustomerInfo
          customerInfo={customerInfo}
          onChange={inputChange}
        />
      )}

      {isConfirm && (
        <ConfirmCustomerInfo
          customerInfo={customerInfo}
        />
      )}

      {isCompleted && (
        <Completed />
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
