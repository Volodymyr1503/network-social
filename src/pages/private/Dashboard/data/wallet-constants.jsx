import uaLocale from "@utils/locales/ua"

const { history, categories, targets } = uaLocale.dashboard.wallet

const incomeCategories = [
  { name: 'Зарплата', value: 400, fill: '#E93B77' },
  { name: 'Відсоток із депозитів', value: 300, fill: '#63B967' },
  { name: 'Дохід з оренди', value: 300, fill: '#439DEE' },
  { name: 'Дохід з дивідендів', value: 200, fill: '#FB8E03' }
]

const expenseCategories = [
  { name: 'Домашнє господарство', value: 400, fill: '#E93B77' },
  { name: 'Страхування', value: 300, fill: '#63B967' },
  { name: 'Транспорт', value: 300, fill: '#439DEE' },
  { name: 'Їжа', value: 200, fill: '#FB8E03' },
  { name: 'Медицина', value: 300, fill: '#ecfb03' },
  { name: 'Спорт', value: 200, fill: '#ffc4cf' },
  { name: 'Подорожі', value: 200, fill: '#1b2700' }
]

const historyData = [
  {
    name: 'Лютий 2024',
    income: 4000,
    expense: 2400,
    amt: 2400
  },
  {
    name: 'Квітень 2024',
    income: 3000,
    expense: 1398,
    amt: 2210
  },
  {
    name: 'Червень 2024',
    income: 2000,
    expense: 9800,
    amt: 2290
  },
  {
    name: 'Серпень 2024',
    income: 2780,
    expense: 3908,
    amt: 2000
  },
  {
    name: 'Жовтень 2024',
    income: 1890,
    expense: 4800,
    amt: 2181
  },
  {
    name: 'Грудень 2024',
    income: 2390,
    expense: 3800,
    amt: 2500
  }
]

const layoutData = [
  {
    chartName: 'SynchronizedAreaChart',
    data: historyData,
    label: history,
    style: {
      height: '700px',
      width: '100%'
    }
  },
  {
    chartName: 'PieChart',
    children: [
      {
        data: incomeCategories,
        label: categories.income,
        style: {
          height: '400px',
          width: '100%'
        }
      },
      {
        data: expenseCategories,
        label: categories.expense,
        style: {
          height: '400px',
          width: '100%'
        }
      }
    ]
  },
  {
    chartName: 'PieChartWithNeedle',
    isLast: true,
    children: [
      {
        data: { currentValue: 5340, min: 0, max: 10000, type: 'cost' },
        label: targets.expenses,
        style: {
          height: '300px',
          width: '100%'
        }
      },
      {
        data: { currentValue: 9400, min: 0, max: 12000 },
        label: targets.savings,
        style: {
          height: '300px',
          width: '100%'
        }
      },
      {
        data: { currentValue: 99, min: 0, max: 1000 },
        label: targets.investment,
        style: {
          height: '300px',
          width: '100%'
        }
      }
    ]
  }
]

export default {
  layoutData
}