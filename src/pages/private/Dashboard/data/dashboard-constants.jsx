import uaLocale from '@utils/locales/ua'
import { MainTopicCardData } from '@utils/classes'
import {
  FitnessCenter,
  EventAvailable,
  People,
  Wallet,
  TaskAlt
} from '@mui/icons-material'

const { profileActivity, wallet, tasks, events, fitness } =
  uaLocale.dashboard.mainCards

const iconSize = {
  height: 36,
  width: 36
}

const dashboardContentData = [
  {
    label: profileActivity,
    contentName: 'AccountActivityChartsWrapper'
  },
  {
    label: wallet,
    contentName: 'WalletHistoryChartWrapper'
  },
  {
    label: tasks,
    contentName: 'TaskManagementWrapper'
  },
  {
    label: events,
    contentName: 'EventsChartWrapper'
  },
  {
    label: fitness,
    contentName: 'FitnessActivityChartsWrapper'
  }
]

const mainTopics = [
  new MainTopicCardData(
    profileActivity,
    23,
    'linear-gradient(#3E3D45, #202020)',
    <People sx={iconSize} />,
    0
  ),
  new MainTopicCardData(
    wallet,
    2345,
    'linear-gradient(#E93B77, #DA1F63)',
    <Wallet sx={iconSize} />,
    3
  ),
  new MainTopicCardData(
    tasks,
    124,
    'linear-gradient(#63B967, #4BA64F)',
    <TaskAlt sx={iconSize} />,
    1
  ),
  new MainTopicCardData(
    events,
    13,
    'linear-gradient(#439DEE, #1E78E9)',
    <EventAvailable sx={iconSize} />,
    8
  ),
  new MainTopicCardData(
    fitness,
    71,
    'linear-gradient(#F2D94E, #D6B52D)',
    <FitnessCenter sx={iconSize} />,
    12
  )
]

export default {
  dashboardContentData,
  mainTopics
}
