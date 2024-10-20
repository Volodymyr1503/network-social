import { Logout, Person2, Settings } from '@mui/icons-material'
import uaLocale from './locales/ua'
import dayjs from 'dayjs'

export const getFormattedDate = (date, locale) =>
  dayjs(date).locale(locale).format('D MMM, YYYY')

export const getAvatarOptions = () => {
  return [
    {
      key: '1-profile-11',
      icon: <Person2 />,
      label: uaLocale.avatarOptions.profile,
      handler: () => console.log('Checked user profile')
    },
    {
      key: '2-settings-12',
      icon: <Settings />,
      label: uaLocale.avatarOptions.settings,
      handler: () => console.log('Checked settings')
    },
    {
      key: '3-logout-13',
      icon: <Logout />,
      label: uaLocale.avatarOptions.logout,
      handler: () => console.log('Checked logout')
    }
  ]
}
