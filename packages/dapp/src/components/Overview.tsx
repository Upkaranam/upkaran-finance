import React from 'react';
import { Flex, Text, SimpleGrid } from '@chakra-ui/react';
import { Application } from 'utils/options';
import { Tile } from './Tile';

type Props = {
  application: Application;
};

export const Overview: React.FC<Props> = ({ application }) => {
  //eslint-disable-next-line no-console
  console.log({ application });
  return (
    <Flex direction="column" w="100%" mb="2rem">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="1rem">
        <Tile>
          <Text>Lend</Text>
        </Tile>
        <Tile>
          <Text>Borrowed</Text>
        </Tile>
        <Tile>
          <Text>D/C (%)</Text>
        </Tile>
        <Tile>
          <Text>Liquidation (ETH)</Text>
        </Tile>
      </SimpleGrid>
    </Flex>
  );
};
