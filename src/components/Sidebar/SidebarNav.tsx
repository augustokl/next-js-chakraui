import { Stack } from "@chakra-ui/layout";

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="general">
          <NavLink icon={RiDashboardLine} href='/dashboard'>
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine} href='/users'>
            Users
          </NavLink>
        </NavSection>
        <NavSection title="automation">
          <NavLink icon={RiInputMethodLine} href='/forms'>
            Forms
          </NavLink>
          <NavLink icon={RiGitMergeLine} href='/automation'>
            Automation
          </NavLink>
        </NavSection>
      </Stack>
  )
}