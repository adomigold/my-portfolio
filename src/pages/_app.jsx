import { useEffect } from "react"
import Head from "next/head"


import '../../assets/styles/theme.min.css'
import '../../assets/vendor/simplebar/dist/simplebar.min.css'
import '../../assets/vendor/tiny-slider/dist/tiny-slider.css'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js")
    import('../../assets/js/theme.min.js')
  }, [])

  return(
    <>
    <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Favicon icon */}
        <link rel="shortcut icon" type="image/x-icon" href="img/logo/logo.png" />
        <title>Adolph Mapunda - Full Stack Developer</title>
    </Head>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp

