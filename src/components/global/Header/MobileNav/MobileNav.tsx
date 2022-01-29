import { useColorModeValue, Stack, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { INavItem } from '../Header';

interface IProps {
    navigationItems: INavItem[];
}

const MobileNav = ({ navigationItems }: IProps) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {navigationItems.map(item => (
                <Box key={item.label}>
                <Link
                    as={RouterLink}
                    to={item.href}
                    p={2}
                    fontSize={'md'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}>
                    {item.label}
                </Link>
            </Box>
            ))}
        </Stack>
    );
};

export default MobileNav;
