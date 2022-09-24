import { css } from '@emotion/react'

export const Completed = () => {
  const styles = {
    wrapper: css({
      minHeight: '280px'
    })
  }
  return (
    <div css={styles.wrapper}>
      Registration completed.
    </div>
  )
}
