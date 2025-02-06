import clientThemeConfig from '@utils/theme'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const needleColor = clientThemeConfig.palette.secondary.main
const RADIAN = Math.PI / 180
const NEEDLE_BASE_RADIUS_PX = 5
const NEEDLE_LENGTH_PX = 72

export const cx = 500
export const cy = 200

export const Needle = ({ value, data, cx, cy }) => {
  let total = 0
  data.forEach((v) => {
    total += v.value
  })
  const ang = 180.0 * (1 - value / total)
  const sin = Math.sin(-RADIAN * ang)
  const cos = Math.cos(-RADIAN * ang)
  const needleBaseCenterX = cx
  const needleBaseCenterY = cy
  const xba = needleBaseCenterX + NEEDLE_BASE_RADIUS_PX * sin
  const xbb = needleBaseCenterX - NEEDLE_BASE_RADIUS_PX * sin
  const yba = needleBaseCenterY - NEEDLE_BASE_RADIUS_PX * cos
  const ybb = needleBaseCenterY + NEEDLE_BASE_RADIUS_PX * cos
  const xp = needleBaseCenterX + NEEDLE_LENGTH_PX * cos
  const yp = needleBaseCenterY + NEEDLE_LENGTH_PX * sin

  return (
    <g>
      <circle
        cx={needleBaseCenterX}
        cy={needleBaseCenterY}
        r={NEEDLE_BASE_RADIUS_PX + 5}
        fill={needleColor}
        stroke="none"
      />
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        strokeWidth={2}
        stroke={needleColor}
        fill={needleColor}
      />
    </g>
  )
}

export const Descriptions = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  left: 'calc(100% - 380px)',
  position: 'absolute',
  top: '215px',
  width: '240px'
}))

export const RangeTypography = styled(Typography)(() => ({
  color: '#7B809A',
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: 1.5
}))

export const CurrentTypography = styled(Typography)(() => ({
  color: '#7B809A',
  fontSize: '16px',
  fontWeight: 700
}))

export const getAppropriateRangeColor = (rangeValue, type) => {
  if (rangeValue < 33 && type === 'cost') {
    return '#037c31'
  }
  if (rangeValue < 33 && type !== 'cost') {
    return '#eb3731'
  }
  if (rangeValue > 66 && type === 'cost') {
    return '#eb3731'
  }
  if (rangeValue > 66 && type !== 'cost') {
    return '#037c31'
  }
  return '#a9a631'
}
