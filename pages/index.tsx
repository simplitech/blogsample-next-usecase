import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import IndexHero from 'components/index/IndexHero'
import IndexFeatures from 'components/index/IndexFeatures'
import IndexTestimonials from 'components/index/IndexTestimonials'
import IndexPricing from 'components/index/IndexPricing'
import PublicFooter from 'components/PublicFooter'
import PublicHeader from 'components/PublicHeader'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const IndexPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('app.title')}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex direction={'column'}>
        <PublicHeader />
        <Container maxW={'3xl'} alignSelf="center">
          <IndexHero />
        </Container>
        <IndexFeatures />
        <IndexTestimonials />
        <IndexPricing />
        <PublicFooter />
      </Flex>
    </>
  )
}

export default IndexPage
