"use client"
 
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export type Team = {
  id: string
  ranking: number
  name: string
  teamLogoURL: string
  winrate: number
  winfrac: string
  score: number
  league_name: string
  region: string
  acronym: string
}
 
export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "ranking",
    header: ({ column }) => {
      return (
        <Button
          variant="tblghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ranking
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>
      )
    },
    cell: tableProps => (
      <div className="flex pl-10 text-3xl font-molend-regular">
        {tableProps.row.original.ranking}
      </div>
    )
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="tblghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Team Name
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>
      )
    },
    cell: tableProps => (
      <div className="flex">
        <Image src={tableProps.row.original.teamLogoURL} 
          width={45} height={40} alt="team logo"
          style={{ width: 45, height: 40 }}
        />
        <div className="flex flex-col justify-center text-3xl pl-6">
          {tableProps.row.original.name}
        </div>
      </div>
    )
  },
  {
    accessorKey: "winrate",
    header: "Win %",
    cell: tableProps => (
      <div className="flex text-lg">
        {tableProps.row.original.winrate}
      </div>
    )
  },
  {
    accessorKey: "winfrac",
    header: "Win Ratio",
    cell: tableProps => (
      <div className="text-lg">
        {(tableProps.row.original.winfrac)}
      </div>
    )
  },
]