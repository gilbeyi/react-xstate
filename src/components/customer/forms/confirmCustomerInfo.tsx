import { css } from '@emotion/react'

import { CustomerInfoItem } from '@/components/customer/parts/customerInfoItem'

import { CustomerInfo } from '@/state/customer/'
import { genderOptions } from '@/values'

type Props = {
  customerInfo: CustomerInfo
}

export const ConfirmCustomerInfo = ({
  customerInfo
}: Props) => {
  const gender = genderOptions.find(e => e.value === customerInfo.gender)

  const styles = {
    wrapper: css({
      minHeight: '280px'
    })
  }
  return (
    <div css={styles.wrapper}>
      <CustomerInfoItem
        label='name'
        value={customerInfo.name}
      />
      <CustomerInfoItem
        label='address'
        value={customerInfo.address}
      />
      <CustomerInfoItem
        label='gender'
        value={gender?.label ?? ''}
      />
    </div>
  )
}
