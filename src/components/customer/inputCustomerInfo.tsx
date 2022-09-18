import { ChangeEvent } from 'react'

type Props = {
  value: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputCustomerInfo = (props: Props) => {
  return (
    <div>
      <input
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </div>
  )
}
