import { ChangeEvent, useEffect, useState } from 'react'
import { css } from '@emotion/react'

import { Radio } from '@/components/atoms/radio'

import { text } from '@/styles'
import { CustomerInfo } from '@/state/customer/'
import { genderOptions } from '@/values'

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
  const [ gender, setGender ] = useState(customerInfo.gender)

  useEffect(() => {
    onChange({
      name,
      address,
      gender
    })
  }, [name, address, gender])

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }
  const changeGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value)
  }
  const checked = (value: string) => {
    return gender === value
  }

  const styles = {
    wrapper: css({
      minHeight: '280px'
    }),
    inputBlock: css({
      marginBottom: '20px'
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
          placeholder='your name'
          disabled={disabled}
          css={styles.input}
          onChange={changeName}
        />
      </div>
      <div css={styles.inputBlock}>
        <label
          htmlFor='address'
          css={styles.label}
        >
          address
        </label>
        <input
          id='address'
          value={customerInfo.address}
          placeholder='your address'
          disabled={disabled}
          css={styles.input}
          onChange={changeAddress}
        />
      </div>
      <div css={styles.inputBlock}>
        <label
          css={styles.label}
        >
          gender
        </label>
        <Radio
          values={genderOptions}
          checked={checked}
          onChange={changeGender}
        />
      </div>
    </div>
  )
}
