import { ChangeEvent, useEffect, useState } from 'react'

import { text } from '@/styles'
import { css } from '@emotion/react'

import { CustomerInfo } from '@/state/customer/'

type Props = {
  customerInfo: CustomerInfo
  disabled?: boolean
  onChange: (value: CustomerInfo) => void
}

export const EditCustomerInfo = (props: Props) => {
  const [ name, setName ] = useState(props.customerInfo.name)
  const [ address, setAddress ] = useState(props.customerInfo.address)

  useEffect(() => {
    props.onChange({
      name,
      address
    })
  }, [name, address])

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const styles = {
    inputBlock: css({
      marginBottom: '10px'
    }),
    label: css({
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: '600'
    }),
    input: text
  }

  return (
    <div>
      <div css={styles.inputBlock}>
        <label
          htmlFor='name'
          css={styles.label}
        >
          name
        </label>
        <input
          id='name'
          value={props.customerInfo.name}
          disabled={props.disabled}
          onChange={changeName}
          css={styles.input}
        />
      </div>
      <div css={styles.inputBlock}>
        <label
          css={styles.label}
        >
          address
        </label>
        <input
          value={props.customerInfo.address}
          disabled={props.disabled}
          onChange={changeAddress}
          css={styles.input}
        />
      </div>
    </div>
  )
}
