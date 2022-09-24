import { css } from '@emotion/react'

import { button } from '@/styles'

type Props = {
  isEdit: boolean
  isConfirm: boolean
  confirm: () => void
  cancel: () => void
  complete: () => void
  reset: () => void
}

export const Buttons = ({
  isEdit,
  isConfirm,
  confirm,
  cancel,
  complete,
  reset
}: Props) => {
  const styles = {
    blockButton: css({
      padding: '20px',
      textAlign: 'center'
    }),
    button
  }

  return (
    <div css={styles.blockButton}>
      {isEdit && (
        <button
          css={styles.button}
          onClick={confirm}
        >
          confirmation
        </button>
      )}

      {isConfirm && (
        <>
          <button
            css={styles.button}
            onClick={cancel}
          >
            cancel
          </button>
          <button
            css={styles.button}
            onClick={complete}
          >
            complete
          </button>
        </>
      )}

      {!isEdit && !isConfirm && (
        <button
          css={styles.button}
          onClick={reset}
        >
          return
        </button>
      )}
    </div>
  )
}
