import { createMachine } from 'xstate'

import { CustomerEvent, CustomerState } from './types'
import { CustomerContext, customerContextDefault } from './context'
import * as actions from './actions'
import * as services from './services'
import * as guards from './guards'

export const customerMachine = createMachine<
  CustomerContext,
  CustomerEvent,
  CustomerState
>(
  {
    id: 'customer',
    description: 'customer information',
    initial: 'initialize',
    context: {...customerContextDefault},
    states: {
      initialize: {
        on: {
          INIT: {
            target: 'edit',
            actions: 'resetValue'
          }
        }
      },
      edit: {
        on: {
          CONFIRM: {
            target: 'confirm',
            cond: 'inputValid'
          }
        }
      },
      confirm: {
        on: {
          COMPLETE: {
            target: 'regist',
            actions: 'setValue'
          },
          CANCEL: {
            target: 'edit'
          }
        }
      },
      regist: {
        invoke: {
          src: 'registration',
          id: 'customerRegist',
          onDone: {
            target: 'completed'
          },
          onError: {
            target: 'failure'
          }
        },
      },
      completed: {
        on: {
          RESET: { 
            target: 'edit',
            actions: 'resetValue'
          }
        }
      },
      failure: {
        entry: 'errorHandler'
      }
    }
  },
  {
    actions,
    services,
    guards
  }
)
