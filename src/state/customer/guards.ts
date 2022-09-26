import { CustomerContext } from './context'
import { CustomerEvent } from './types'

export const inputValid = (_context: CustomerContext, event: CustomerEvent) => {
  if (event.type !== 'CONFIRM') return true
  return Object.values(event.value).every(e => !!e)
}
