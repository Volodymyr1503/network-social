import { lazy } from "react";
import uaLocale from "@utils/locales/ua";

import { LibraryMusic, OndemandVideo, People, Groups2, SpaceDashboard, QuestionAnswer } from '@mui/icons-material'

export const keyNavsMap = {
    DASHBOARD: 'dashboard',
    FRIENDS: 'friends',
    GROUPS: 'groups',
    CHATS: 'chats',
    AUDIO: 'audio',
    VIDEO: 'video'
}

export const navLinksMap = {
    DASHBOARD: '/',
    FRIENDS: '/friends',
    GROUPS: '/groups',
    CHATS: '/chats',
    AUDIO: '/audio',
    VIDEO: '/video'
}

export const sidebarNavs = [
    {
        title: uaLocale.sidebarListItems[0].name,
        path: navLinksMap.DASHBOARD,
        icon: <SpaceDashboard />,
        key: keyNavsMap.DASHBOARD,
        component: lazy(() => import('@pages/private/Dashboard/Dashboard'))
    },
    {
        title: uaLocale.sidebarListItems[1].name,
        path: navLinksMap.FRIENDS,
        icon: <People />,
        key: keyNavsMap.FRIENDS,
        component: lazy(() => import('@pages/private/Friends/Friends'))
    },
    {
        title: uaLocale.sidebarListItems[2].name,
        path: navLinksMap.GROUPS,
        icon: <Groups2 />,
        key: keyNavsMap.GROUPS,
        component: lazy(() => import('@pages/private/Groups/Groups'))
    },
    {
        title: uaLocale.sidebarListItems[3].name,
        path: navLinksMap.CHATS,
        icon: <QuestionAnswer />,
        key: keyNavsMap.CHATS,
        component: lazy(() => import('@pages/private/Chats/Chats'))
    },
    {
        title: uaLocale.sidebarListItems[4].name,
        path: navLinksMap.AUDIO,
        icon: <LibraryMusic />,
        key: keyNavsMap.AUDIO,
        component: lazy(() => import('@pages/private/Audio/Audio'))
    },
    {
        title: uaLocale.sidebarListItems[5].name,
        path: navLinksMap.VIDEO,
        icon: <OndemandVideo />,
        key: keyNavsMap.VIDEO,
        component: lazy(() => import('@pages/private/Video/Video'))
    }
]