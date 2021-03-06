import {
  Button,
  Flex,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'components/Link';
import { Web3Context } from 'contexts/Web3Context';
import React, { useContext, useEffect, useState } from 'react';
import { BoxProfile, getProfile } from 'utils/3box';

type Props = {
  onOpen: () => void;
};

export const Header: React.FC<Props> = ({ onOpen: openNav }) => {
  const { loading, account, connectWeb3, disconnect } = useContext(Web3Context);
  const [profile, setProfile] = useState<BoxProfile | undefined>();
  useEffect(() => {
    if (account) {
      getProfile(account).then(p => setProfile(p));
    }
  }, [account]);
  const accountString = useBreakpointValue({
    sm: `${account.slice(0, 4).toUpperCase()}...`,
    md: `${account.slice(0, 8).toUpperCase()}...`,
  });

  return (
    <Flex
      w="100%"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ base: 4, sm: 8 }}
      fontWeight="500"
      h="5rem"
      position="absolute"
      top="0"
      left="0"
      color="blue.400"
      fontFamily="heading"
    >
      <HStack spacing={{ base: 2, sm: 4 }}>
        <Button
          variant="link"
          onClick={openNav}
          minW={4}
          p={2}
          ml={-2}
          _hover={{ background: 'black10' }}
          color="blue.400"
        >
          <svg
            fill="currentColor"
            width="1.5rem"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
        <Link
          ml={-2}
          to="/"
          fontSize="1.25rem"
          px={2}
          py={1}
          borderRadius={4}
          _hover={{ textDecoration: 'none', background: 'black10' }}
          transition="0.25s"
          fontWeight="bold"
        >
          Upkaran
        </Link>
      </HStack>

      <HStack spacing={{ base: 0, md: 4 }} flex={1} justify="flex-end">
        {!account && (
          <Button
            onClick={connectWeb3}
            isLoading={loading}
            size="md"
            colorScheme="blue"
          >
            Connect
          </Button>
        )}
        {account && (
          <Flex justify="center" align="center">
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Button
                  borderRadius="full"
                  size="lg"
                  h="auto"
                  fontWeight="normal"
                  background="transparent"
                  _hover={{
                    background: { base: 'transparent', sm: 'black10' },
                  }}
                  border={{base: "none", sm: "1px solid"}}
                  borderColor="blue.400"
                  p={{ base: 0, sm: 2 }}
                >
                  <Flex
                    borderRadius="50%"
                    w={{ base: '2rem', md: '2.25rem' }}
                    h={{ base: '2rem', md: '2.25rem' }}
                    overflow="hidden"
                    justify="center"
                    align="center"
                    border="1px solid"
                    borderColor="blue.400"
                    bgImage={profile && `url(${profile.imageUrl})`}
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPosition="center center"
                  />
                  <Text
                    px={2}
                    display={{ base: 'none', sm: 'flex' }}
                    fontSize={'1rem'}
                    fontWeight="600"
                    fontFamily="mono"
                  >
                    {accountString}
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Flex justify="center" p={4}>
                  <Button
                    onClick={() => {
                      disconnect();
                    }}
                    fontWeight="normal"
                    width="auto"
                    colorScheme="blue"
                  >
                    Disconnect
                  </Button>
                </Flex>
              </PopoverContent>
            </Popover>
          </Flex>
        )}
      </HStack>
    </Flex>
  );
};
