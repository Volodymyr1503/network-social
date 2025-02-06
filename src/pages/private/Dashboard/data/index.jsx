import { lazy, Suspense, Fragment } from 'react'
import { Stack, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import ChartWrapper from '@charts/ChartWrapper'
import accountConstants from './account-constants'
import dashboardConstants from './dashboard-constants'
import walletConstants from './wallet-constants'
import taskConstants from './task-constants'

export const getSingularOrPluralText = (notificationsCount) => {
  if (notificationsCount > 1) {
    return 'plural'
  }

  return 'singular'
}

export const getText = (fn, count) => {
  if (fn(count) === 'plural') {
    return `${count} нових сповіщень`
  }

  return `${count} нове сповіщення`
}

export const getDashboardUtils = () => {
  const { dashboardContentData, mainTopics } = dashboardConstants

  const onRenderDashboardLayout = () => {
    return dashboardContentData.map(({ label, contentName }) => {
      const Content = lazy(() => import(`../sectors/${contentName}.jsx`))

      return (
        <Fragment key={uuidv4()}>
          <Typography variant="h4" sx={{ margin: '36px 0 24px' }}>
            {label}
          </Typography>
          <Suspense fallback={<>Loading ...</>}>
            <Content />
          </Suspense>
        </Fragment>
      )
    })
  }

  return {
    onRenderDashboardLayout,
    mainTopics
  }
}

export const getAccountUtils = () => {
  const { layoutData } = accountConstants

  const onRenderChartsLayout = () => {
    return layoutData.map(({ chartName, data, label, style }) => {
      const Chart = lazy(() => import(`../../../../charts/${chartName}/${chartName}.jsx`))

      return (
        <ChartWrapper
          height={style.height}
          width={style.width}
          title={label}
          key={uuidv4()}
        >
          <Suspense fallback={<>Loading chart...</>}>
            <Chart data={data} />
          </Suspense>
        </ChartWrapper>
    )
    })
  }

  return {
    onRenderChartsLayout
  }
}

export const getWalletUtils = () => {
  const { layoutData } = walletConstants

  const onRenderWalletLayout = () => {
    return layoutData.map((item) => {
      const Chart = lazy(() => import(`../../../../charts/${item.chartName}/${item.chartName}.jsx`))

      if (item.children) {
        return (
          <Stack key={uuidv4()} direction={'row'} spacing={4} sx={item.isLast ? {} : { margin: '24px 0' }}>
            {
              item.children.map((childItem) => {
                return (
                  <ChartWrapper
                    key={uuidv4()}
                    height={childItem.style.height}
                    width={childItem.style.width}
                    title={childItem.label}
                  >
                    <Suspense fallback={<>Loading chart...</>}>
                      <Chart data={childItem.data} />
                    </Suspense>
                  </ChartWrapper>
                )
              })
            }
          </Stack>
        )
      }

      return (
        <Stack direction={'row'} spacing={4} key={uuidv4()}>
          <ChartWrapper
            height={item.style?.height}
            width={item.style?.width}
            title={item?.label}
          >
            <Suspense fallback={<>Loading chart...</>}>
              <Chart data={item?.data} />
            </Suspense>
          </ChartWrapper>
        </Stack>
      )
    })
  }

  return {
    onRenderWalletLayout
  }
}

export const getTasksUtils = () => {
  const { layoutData } = taskConstants

  const onRenderTasksLayout = () => {
    return layoutData.map((item) => {
      const Chart = lazy(() => import(`../../../../charts/${item.chartName}/${item.chartName}.jsx`))

      if (item.children) {
        return (
          <Stack key={uuidv4()} direction={'row'} spacing={4} sx={item.isLast ? {} : { margin: '24px 0' }}>
            {
              item.children.map((childItem) => {
                return (
                  <ChartWrapper
                    key={uuidv4()}
                    height={item.style?.height}
                    width={item.style?.width}
                    title={childItem.label}
                  >
                    <Suspense fallback={<>Loading chart...</>}>
                      <Chart data={childItem.data} />
                    </Suspense>
                  </ChartWrapper>
                )
              })
            }
          </Stack>
        )
      }

      return (
        <Stack key={uuidv4()}>
          <ChartWrapper
            height={item.style?.height}
            width={item.style?.width}
            title={item?.label}
          >
            <Suspense fallback={<>Loading chart...</>}>
              <Chart data={item.data} />
            </Suspense>
          </ChartWrapper>
        </Stack>
      )
    })
  }

  return {
    onRenderTasksLayout
  }
}
