import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export const Tile: React.FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    {...props}
    background="white"
    boxShadow="0 0 1rem rgba(0,0,0,0.1)"
    borderRadius="0.5rem"
    padding="1rem"
  >
    {children}
  </Flex>
);

