import '../styles/globals.scss'
import Router from 'next/router'
import Layout from '../components/Layout'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  const Loader = () =>  <div className='height-24'>
    <h1 className="text-gray-200 text-2xl text-center py-32 lg:py-64">Loading....</h1>
  </div>
  const {seo} = Component
  
  return <>
    <NextSeo 
      title={seo?.title ? seo?.title : 'Loading...'}
      description={seo?.description ? seo?.description : 'Loading...'}
    />
    <Head>
      <link rel='icon' href='/assets/logo.png' />
    </Head>
    <Layout>
      {loading ? <Loader /> : <Component {...pageProps} seo={Component.seo} />}
    </Layout>
  </>
}

export default MyApp
