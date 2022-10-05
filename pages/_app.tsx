import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import PageMeta from '../components/PageMeta';
import Scaffold from '../components/Scaffold';
import '../styles/animation.css';
import '../styles/globals.css';
import '../styles/shadow.css';
import '../styles/style.css';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for MyApp
 * @license MIT
 * @version 1.0.0
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <PageMeta />
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
    </RecoilRoot>
  );
};

export default MyApp;
