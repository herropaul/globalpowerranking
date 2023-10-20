import React from 'react'
import { Metadata } from 'next'
import { Team, columns } from './columns'
import { DataTable } from './data-table'

export const metadata : Metadata = {
    title: 'Global Rankings',
}

async function getData(): Promise<Team[]> {
  return [
    {
      id: "1",
      name: "TSM",
      icon: "/",
      score: 5
    },
    {
      id: "2",
      name: "CLG",
      icon: "/",
      score: 6
    },
    {
      id: "3",
      name: "C9",
      icon: "/",
      score: 7
    },
  ]
}

export default async function GlobalRankings() {
  const data = await getData();

  return (
    <div className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
      style={{ backgroundColor: "#011562" }}
    >

    <div className="flex items-center justify-center mt-20 w-full ">
      <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
        Global Rankings
      </h1>
    </div>

    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>

    </div>
  )
}
