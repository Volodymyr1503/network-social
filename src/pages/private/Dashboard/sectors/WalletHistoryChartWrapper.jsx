import { Fragment } from 'react'
import { getWalletUtils } from '../data'

const { onRenderWalletLayout } = getWalletUtils()

const WalletHistoryChartWrapper = () => {
  return (
    <Fragment>
      {onRenderWalletLayout()}
    </Fragment>
  )
}

export default WalletHistoryChartWrapper
