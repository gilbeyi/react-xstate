import { css } from '@emotion/react'

export const text = css({
  width: '100%',
  padding: '8px',
  lineHeight: '20px',
  fontSize: '14px',
  border: '1px solid #CCC',
  borderRadius: '5px',
  outline: 'none',
  boxSizing: 'border-box'
})

export const button = css({
  minWidth: '200px',
  padding: '8px 10px',
  fontSize: '16px',
  border: '1px solid #999',
  borderRadius: '8px',
  cursor: 'pointer',
  ":hover": {
    backgroundColor: '#DDD'
  },
  ":not(:last-child)": {
    marginRight: '20px'
  }
})
