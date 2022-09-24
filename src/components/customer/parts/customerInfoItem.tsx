import { css } from '@emotion/react'

type Props = {
  label: string
  value: string
}

export const CustomerInfoItem = ({
  label,
  value
}: Props) => {
  const styles = {
    itemBlock: css({
      marginBottom: '20px'
    }),
    label: css({
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: '600'
    }),
    value: css({
      lineHeight: '20px',
      marginBottom: '10px',
      padding: '8px',
      fontSize: '14px',
      backgroundColor: '#CCC',
      border: 'none',
      borderRadius: '5px',
      verticalAlign: 'middle'
    })
  }

  return (
    <div css={styles.itemBlock}>
      <label
        css={styles.label}
      >
        {label}
      </label>
      <div
        css={styles.value}
      >
        {value}
      </div>
    </div>
  )
}
