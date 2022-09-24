import { ChangeEvent, useEffect, useState } from 'react'

import { css } from '@emotion/react'

import { text } from '@/styles'
import { CustomerInfo } from '@/state/customer/'

type Props = {
  customerInfo: CustomerInfo
  disabled?: boolean
  onChange: (value: CustomerInfo) => void
}

export const EditCustomerInfo = ({
  customerInfo,
  disabled,
  onChange
}: Props) => {
  const [ name, setName ] = useState(customerInfo.name)
  const [ address, setAddress ] = useState(customerInfo.address)

  useEffect(() => {
    onChange({
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
    wrapper: css({
      minHeight: '280px'
    }),
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
    <div css={styles.wrapper}>
      <div css={styles.inputBlock}>
        <label
          htmlFor='name'
          css={styles.label}
        >
          name
        </label>
        <input
          id='name'
          value={customerInfo.name}
          disabled={disabled}
          css={styles.input}
          onChange={changeName}
        />
      </div>
      <div css={styles.inputBlock}>
        <label
          css={styles.label}
        >
          address
        </label>
        <input
          value={customerInfo.address}
          disabled={disabled}
          css={styles.input}
          onChange={changeAddress}
        />
      </div>
    </div>
  )
}
