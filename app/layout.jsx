import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {}
 
const banner = <Banner storageKey="some-key">Mince is currently in Beta.</Banner>
const navbar = (
  <Navbar
    logo={<b>Chop and Mince</b>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()}</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"

      suppressHydrationWarning
    >
      <Head color={{ hue: 282, lightness: { dark: 69, light: 30 }}}>
        
      </Head>
      <body>
        <Layout
          //banner={banner}
          copyPageButton={false}
          
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/intykat/mince"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}