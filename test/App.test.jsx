import { render, screen, fireEvent } from '@testing-library/react'
import { beforeEach, describe, expect } from 'vitest'
import { BreadcrumbsRenderer, PrivateContentRenderer } from './utils'
import { sidebarNavs } from '../src/layouts/private/Sidebar/data'
import uaLocale from '../src/utils/locales/ua'

describe('App', () => {
  beforeEach(() => {
    render(
      <PrivateContentRenderer />
    )
  })

  describe('App: Rendering', () => {
    it('Sidebar is rendered with title', () => {
      expect(screen.getByText(uaLocale.networkTitle)).toBeInTheDocument()
    })

    it('Sidebar is rendered with navigation items', () => {
      sidebarNavs.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })
    })

    it('Breadcrumbs is rendered on the Header', () => {
      const { container } = render(<BreadcrumbsRenderer />)
      const breadcrumbs = container.querySelector(".breadcrumbs-wrapper")

      expect(breadcrumbs).toBeInTheDocument()
    })
  })

  describe('App: Interacting', () => {
    it('Shows appropriate content with active link on the Sidebar', async () => {
      const linkItem = screen.getByText(sidebarNavs[1].title)

      fireEvent.click(linkItem)

      const approppriateEl = await screen.findByText('Friends')
      expect(approppriateEl).toBeInTheDocument()
    })

    it('Should highlight active link in the Sidebar according to the path', () => {
      const firstNavItem = screen.getByText(sidebarNavs[0].title)
      fireEvent.click(firstNavItem)

      const activeLink = screen.getByRole('button', { name: sidebarNavs[0].title })
      expect(activeLink).toHaveClass('Mui-selected')
    })
  })
})