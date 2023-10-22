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
        <Image src={tableProps.row.original.teamLogoURL} width={40} height={30} alt="team logo"/>
        <div className="flex flex-col justify-center text-3xl pl-6 font-molend-regular">
          {tableProps.row.original.name}
        </div>
      </div>
    )
  },
  {
    accessorKey: "winrate",
    header: "Win %",
  },
  {
    accessorKey: "winfrac",
    header: "Win Ratio",
  },
]