import { ChangeEvent } from 'react'
import { css } from '@emotion/react'

import { RadioValue } from '@/types'

type Props = {
  values: RadioValue[]
  checked: (value: string) => boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Radio = ({
  values,
  checked,
  onChange
}: Props) => {
  const styles = {
    blockRadio: css({
      padding: '16px 8px'
    }),
    label: css({
      marginRight: '16px',
      cursor: 'pointer',
      ":last-child": {
        marginRight: '0'
      }
    }),
    radio: css({
      position: 'relative',
      top: '2px',
      marginRight: '8px',
      cursor: 'pointer'
    })
  }

  return (
    <div
      css={styles.blockRadio}
    >
      {values.map((item, index) => (
        <label
          key={index}
          css={styles.label}
        >
          <input
            type="radio"
            value={item.value}
            css={styles.radio}
            checked={checked(item.value)}
            onChange={onChange}
          />
          {item.label}
        </label>
      ))}
    </div>
  )
}