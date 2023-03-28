import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { Arvo } from 'next/font/google'

import NavBar from '@/components/NavBar'
import NavItem from '@/components/NavItem'
import Body from '@/components/Body'
import Main from '@/components/Main'
import Title from '@/components/Title'
import Footer from "@/components/Footer";

import Head from 'next/head'

const arvo = Arvo({
  weight: '400', 
  subsets: ['latin'] 
})

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={arvo.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body>
        <Title>Stort firma A/S</Title>
        
        <NavBar>
          <NavItem href="/">Hjem</NavItem>
          <NavItem href="/about">Om os</NavItem>
          <NavItem href="/contact">Kontakt</NavItem>
        </NavBar>

        <Main>
          <Component {...pageProps} />
        </Main>

        <Footer>
          &copy; 2023 - Stort firma A/S
        </Footer>
      </Body>
    </div>
  )
}

export default App;