import { useColorModeValue, Stack, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

import { INavItem } from '..';

interface IProps {
    navigationItems: INavItem[];
}

const DesktopNav = ({ navigationItems }: IProps) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {navigationItems.map(item => (
                <Box key={item.label}>
                    <Link
                        as={RouterLink}
                        to={item.href}
                        p={2}
                        fontSize={'sm'}
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

export default DesktopNav;