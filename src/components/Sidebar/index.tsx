import { Box, Stack } from '@chakra-ui/react'

import { NavSection } from './NavSection'

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="general">
          <NavLink icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine}>
            Users
          </NavLink>
        </NavSection>
        <NavSection title="automation">
          <NavLink icon={RiInputMethodLine}>
            Forms
          </NavLink>
          <NavLink icon={RiGitMergeLine}>
            Automation
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}