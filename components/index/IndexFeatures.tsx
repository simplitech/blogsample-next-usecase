import React, { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid, Link,
} from '@chakra-ui/react';
import useTranslationWithPrefix from "../../helpers/useTranslationWithPrefix";
import {Trans} from "react-i18next";

const IndexFeatures: React.FC = () => {
  const { tp } = useTranslationWithPrefix('comp.IndexFeatures')

  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/features.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                {tp('technology')}
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                {tp('21stCenturyAgriculture.title')}
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                {tp('21stCenturyAgriculture.content')}
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <FeatureItem name="10p" />
              <FeatureItem name="24by7" />
              <FeatureItem name="13pct" />
              <FeatureItem name="250mp" />
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const FeatureItem = ({ name }: { name: string }) => {
  const prefix = `comp.IndexFeatures.${name}`
  const { tp } = useTranslationWithPrefix(prefix)
  return (<Box key={name}>
      <Text
        fontFamily={'heading'}
        fontSize={'3xl'}
        color={'white'}
        mb={3}>
        {tp('title')}
      </Text>
      <Text fontSize={'xl'} color={'gray.400'}>
        <Trans i18nKey={`${prefix}.content`}>
          default<Text as={'span'} fontWeight={700} color={'white'}>special</Text>
        </Trans>
      </Text>
    </Box>
  );
}

export default IndexFeatures;
