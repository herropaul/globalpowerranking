import Head from 'next/head'
import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata = {
    title: 'Global Rankings',
}

const GlobalRankings = () => {
  return (
    <div
        className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
        style={{ backgroundColor: "#011562" }}
    >

    <div className="flex items-center justify-center mt-20 w-full ">
        <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
          Global Rankings
        </h1>
    </div>

    </div>
  )
}

export default GlobalRankings