import { Heading, VStack, Text, Divider } from '@chakra-ui/react';
import React from 'react';

import { ReactComponent as AaveIcon } from 'icons/aave.svg';

const Aave: React.FC = () => {
  return (
    <VStack w="100%" px="2rem">
      <Heading display="flex" mb="0.5rem">
        <AaveIcon width="2.5rem" />
        <Text ml="1rem"> Aave </Text>
      </Heading>
      <Divider color="blue.200" mb="0.5rem" />
    </VStack>
  );
};

export default Aave;
