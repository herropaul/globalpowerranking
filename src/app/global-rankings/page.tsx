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
      placement: 1,
      name: "TSM",
      wins: 5,
      winrate: "100%"
    },
    {
      placement: 2,
      name: "CLG",
      wins: 4,
      winrate: "50%"
    },
    {
      placement: 3,
      name: "C9",
      wins: 3,
      winrate: "25%"
    },
    {
      placement: 4,
      name: "TSM",
      wins: 5,
      winrate: "100%"
    },
    {
      placement: 5,
      name: "CLG",
      wins: 4,
      winrate: "50%"
    },
    {
      placement: 6,
      name: "C9",
      wins: 3,
      winrate: "25%"
    },
    {
      placement: 7,
      name: "TSM",
      wins: 5,
      winrate: "100%"
    },
    {
      placement: 8,
      name: "CLG",
      wins: 4,
      winrate: "50%"
    },
    {
      placement: 9,
      name: "C9",
      wins: 3,
      winrate: "25%"
    },
    {
      placement: 10,
      name: "TSM",
      wins: 5,
      winrate: "100%"
    },
    {
      placement: 11,
      name: "CLG",
      wins: 4,
      winrate: "50%"
    },
    {
      placement: 12,
      name: "C9",
      wins: 3,
      winrate: "25%"
    }
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
