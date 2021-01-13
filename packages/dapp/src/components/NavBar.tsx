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
} from '@chakra-ui/react';
import { Link } from 'components/Link';
import { Web3Context } from 'contexts/Web3Context';
import React, { useContext } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const NavBar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { account, disconnect } = useContext(Web3Context);
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <Flex direction="column" position="relative" w="100%" h="100%" p={2}>
            <DrawerHeader fontWeight={600} fontSize="2xl" mb={4}>
              Menu
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={5} align="flex-start">
                <Link to="/home" onClick={onClose} size="lg">
                  Home
                </Link>
              </VStack>
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start">
              {account && (
                <Button
                  onClick={() => {
                    disconnect();
                    onClose();
                  }}
                  size="lg"
                  variant="link"
                >
                  Sign Out
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
