import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { keyNavsMap, navLinksMap } from '@layouts/private/Sidebar/data'

const useSelectedSidebarItem = () => {
  const [activeKey, setActiveKey] = useState()

  const location = useLocation()

  useEffect(() => {
    const { pathname } = location

    Object.entries(navLinksMap).forEach(([key, value]) => {
      if (value === pathname) {
        setActiveKey(keyNavsMap[key])
      }
    })
  }, [location])

  return activeKey
}

export default useSelectedSidebarItem
