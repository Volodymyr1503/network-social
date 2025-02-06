import uaLocale from "@utils/locales/ua"

const { requests, ageCategory, geography } = uaLocale.dashboard.friends
const { approved, incoming, outgoing } = uaLocale.dashboard.requests

const style = {
  height: '300px',
  width: '100%'
}

const ageCategoriesMockData = [
  {
    name: '18-24 (31%)',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8'
  },
  {
    name: '25-29 (27%)',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed'
  },
  {
    name: '30-34 (16%)',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1'
  },
  {
    name: '35-39 (8%)',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d'
  },
  {
    name: '40-49 (9%)',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c'
  },
  {
    name: '50+ (3%)',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57'
  }
]

const requestMockData = [
  { name: incoming, value: 34, fill: '#439DEE' },
  { name: outgoing, value: 67, fill: '#63B967' },
  { name: approved, value: 23, fill: '#E93B77' }
]

const geographyMockData = [
  {
    name: 'Україна',
    count: 14,
    amt: 100
  },
  {
    name: 'Польща',
    count: 6,
    amt: 100
  },
  {
    name: 'Данія',
    count: 3,
    amt: 100
  }
]

const layoutData = [
  {
    chartName: 'CustomActiveShapePieChart',
    data: requestMockData,
    label: requests,
    style
  },
  {
    chartName: 'SimpleRadialBarChart',
    data: ageCategoriesMockData,
    label: ageCategory,
    style
  },
  {
    chartName: 'VerticalBarChart',
    data: geographyMockData,
    label: geography,
    style
  }
]

export default {
  layoutData
}