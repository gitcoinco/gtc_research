import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import GtcTokenCenter from '../components/GtcTokenCenter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <GtcTokenCenter />
      {/* <Profile /> */}
    </main>
  );
}
