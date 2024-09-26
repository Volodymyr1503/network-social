import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sidebarNavs } from '@layouts/private/Sidebar/data'

const useBreadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([])

    const location = useLocation()

    useEffect(() => {
        const result = []
        const { pathname } = location

        const items = `${pathname}`.split('/').filter((el) => el)

        sidebarNavs.forEach((el) => {
            const [pathFirst] = items

            if (el.path.includes(pathFirst)) {
                result.push({
                    title: el.title,
                    path: el.path
                })
            }

            return result
        })

        setBreadcrumbs(result)
    }, [location])

    return breadcrumbs
}

export default useBreadcrumbs