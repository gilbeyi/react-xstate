import { ChangeEvent } from 'react'

import { text } from '@/styles'

type Props = {
  value: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditCustomerInfoForm = (props: Props) => {
  const styles = {
    input: text
  }

  return (
    <div>
      <input
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        css={styles.input}
      />
    </div>
  )
}
