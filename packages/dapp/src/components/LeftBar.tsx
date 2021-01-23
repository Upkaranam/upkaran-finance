import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  VStack,
  Divider,
  Text,
} from '@chakra-ui/react';
import { Link } from 'components/Link';
import { Web3Context } from 'contexts/Web3Context';
import React, { useContext } from 'react';
import { ReactComponent as AaveIcon } from 'icons/aave.svg';
import { ReactComponent as HomeIcon } from 'icons/home.svg';
import { useLocation } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClose: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, text, icon: Icon, onClose }) => {
  const location = useLocation();
  const here = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClose}
      display="flex"
      alignItems="center"
      color={here ? 'black' : 'grey'}
      fontWeight={here ? 'bold' : 'normal'}
    >
      <Icon width="1.25rem" />
      <Text ml="0.5rem"> {text} </Text>
    </Link>
  );
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const LeftBar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { account, disconnect } = useContext(Web3Context);
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent fontFamily="heading">
          <Flex direction="column" position="relative" w="100%" h="100%" p={2}>
            <DrawerHeader fontWeight={600} fontSize="2xl" mb={4}>
              Menu
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={5} align="flex-start">
                <NavLink
                  to="/"
                  onClose={onClose}
                  text="Dashboard"
                  icon={HomeIcon}
                />
                <Divider color="blue.200" />
                <NavLink
                  to="/aave"
                  onClose={onClose}
                  text="Aave"
                  icon={AaveIcon}
                />
              </VStack>
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start">
              {account && (
                <Button
                  onClick={() => {
                    disconnect();
                    onClose();
                  }}
                  variant="ghost"
                >
                  Disconnect
                </Button>
              )}
            </DrawerFooter>
            <DrawerCloseButton top={6} right={6} fontSize={18} />
          </Flex>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
