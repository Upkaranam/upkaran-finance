import { Container, Heading, VStack, Text, Divider } from '@chakra-ui/react';
import React from 'react';

import { ReactComponent as AaveIcon } from 'icons/aave.svg';
import { Application } from 'utils/options';
import { Overview } from 'components/Overview';
import { Actions } from 'components/Actions';

const Aave: React.FC = () => {
  return (
    <Container maxW="75rem">
      <VStack w="100%" px={{base: '0', sm: "1rem", md: "2rem"}}>
        <Heading display="flex" mb="0.5rem">
          <AaveIcon width="2.5rem" />
          <Text ml="1rem"> Aave </Text>
        </Heading>
        <Divider color="blue.200" mb="1.5rem" />
        <Overview application={Application.AAVE} />
        <Actions application={Application.AAVE} />
      </VStack>
    </Container>
  );
};

export default Aave;
