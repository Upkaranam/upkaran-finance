import React from 'react';
import { Flex, Text, SimpleGrid } from '@chakra-ui/react';
import { Application } from 'utils/options';
import { Tile } from './Tile';
import { TokenList } from '@uniswap/token-lists';

type Props = {
  application: Application;
  tokenList: TokenList;
};

export const YourPositions: React.FC<Props> = ({ application, tokenList }) => {
  //eslint-disable-next-line no-console
  console.log({ application });
  return (
    <Flex direction="column" w="100%" mb="2rem">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="1rem">
        {tokenList.tokens.map(token => (
          <Tile direction="column">
            <Text>{token.name}</Text>
            <Text>{token.symbol}</Text>
          </Tile>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
