import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-2 text-primary-text w-full border-0 sm:border-b container mx-auto h-1/8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href={'/'}>
            <div className="flex items-center">
              <img
                className="py-4 mr-4"
                alt="Gitcoin Logo"
                src="../gitcoin-logo.svg"
              />
              <span className="border border-gitcoin-separator h-8 mx-4"></span>
              <span className="text-2xl text-black font-semibold">
                Gitcoin Token Center
              </span>
            </div>
          </Link>
        </div>
        <div
          className={`lg:flex flex-grow items-center${
            true ? ' flex' : ' hidden'
          }`}
          id="example-navbar-danger"
        >
          <div className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
