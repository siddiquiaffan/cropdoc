import '../styles/globals.css'
import Router from 'next/router'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  return <>
    <Layout>
      {loading ? <h1>Loading....</h1> : <Component {...pageProps} />}
    </Layout>
  </>
}

export default MyApp
