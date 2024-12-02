import { BrowserRouter } from 'react-router-dom'

import Breadcrumbs from '../src/layouts/private/Breadcrumbs/Breadcrumbs'
import App from '../src/App'
import Sidebar from '../src/layouts/private/Sidebar/Sidebar'
import PrivateContent from '../src/layouts/private/PrivateContent'

const RouteWrapper = ({ children }) => {
    return (
        <BrowserRouter>
           {children}
        </BrowserRouter>
    )
}

export const AppRenderer = () => {
    return (
        <BrowserRouter>
           <App />
        </BrowserRouter>
    )
}

export const BreadcrumbsRenderer = () => {
    return (
        <BrowserRouter>
           <Breadcrumbs />
        </BrowserRouter>
    )
}

export const SidebarRenderer = () => {
    return (
        <BrowserRouter>
           <Sidebar />
        </BrowserRouter>
    )
}

export const PrivateContentRenderer = () => {
    return (
        <BrowserRouter>
           <PrivateContent />
        </BrowserRouter>
    )
}