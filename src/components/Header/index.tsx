import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
    return (
        <Flex
          as="header"
          width="100%"
          maxWidth={1480}
          height="20"
          marginX="auto"
          marginTop="4"
          align="center"
          paddingX="6"
        >
            <Logo />

            <Search />

            <Flex align="center" marginLeft="auto">
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>
    );
}