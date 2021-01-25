import React from 'react';
import {
  Flex,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { Application, tokenListUrls } from 'utils/options';
import { YourPositions } from './YourPositions';
import { useTokenList } from '../hooks/useTokenList';

type Props = {
  application: Application;
};

const CustomTab: React.FC<{ index: number; tabIndex: number }> = ({
  tabIndex,
  index,
  children,
}) => (
  <Tab
    border="none"
    color={tabIndex === index ? 'blue.400' : 'blackAlpha.400'}
    fontWeight={tabIndex === index ? '500' : 'normal'}
    borderBottom={tabIndex === index ? '3px solid' : 'none'}
    borderBottomColor="#2db9ec !important"
  >
    {children}
  </Tab>
);

export const Actions: React.FC<Props> = ({ application }) => {
  //eslint-disable-next-line no-console
  console.log({ application });

  const [tabIndex, setTabIndex] = React.useState(0);

  const tokenList = useTokenList(tokenListUrls[application]);
  console.log({ tokenList });

  return (
    <Flex direction="column" w="100%" mb="2rem">
      <Tabs
        size="lg"
        variant="enclosed"
        isFitted
        onChange={i => setTabIndex(i)}
      >
        <TabList
          border="none"
          borderBottom="1px solid"
          borderBottomColor="blue.200"
        >
          <CustomTab index={0} tabIndex={tabIndex}>
            Your Positions
          </CustomTab>
          <CustomTab index={1} tabIndex={tabIndex}>
            Balance
          </CustomTab>
          <CustomTab index={2} tabIndex={tabIndex}>
            Strategies
          </CustomTab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
              {tokenList && <YourPositions application={application} tokenList={tokenList} />}
          </TabPanel>
          <TabPanel px={0}>
            <Text>two!</Text>
          </TabPanel>
          <TabPanel px={0}>
            <Text>three!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
