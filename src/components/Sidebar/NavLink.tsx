import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavlinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavlinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}