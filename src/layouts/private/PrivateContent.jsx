import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CustomizedMain, CustomizedHeader } from './styled'
import { sidebarNavs } from './Sidebar/data'

import AvatarPanel from './AvatarPanel/AvatarPanel'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Sidebar from './Sidebar/Sidebar'

const PrivateContent = () => {
    return (
        <>
           <Sidebar />
           <CustomizedHeader boxShadow={4}>
                <Breadcrumbs />
                <AvatarPanel />
            </CustomizedHeader>
           <CustomizedMain>
            <Routes>
                {
                    sidebarNavs.map(({ path, component: Component, key }) => {
                        return (
                            <Route 
                              path={path} 
                              element={
                                <Suspense fallback={<>Loading...</>}>
                                    <Component />
                                </Suspense>
                              } 
                              key={key} 
                            />
                        )
                    })
                }
            </Routes>
           </CustomizedMain>
        </>
      )
}

export default PrivateContent