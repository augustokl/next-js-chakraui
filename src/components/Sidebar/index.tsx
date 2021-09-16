import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useSideBarDrawer } from '../../context/SidebarDrawerContext'

import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSideBarDrawer()

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSideBar) {
   return(
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6"/>
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
   )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}