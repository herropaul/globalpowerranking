"use client"
 
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export type Team = {
  // id: string
  placement: number
  name: string
  // icon: string
  wins: number
  winrate: string
}
 
export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "placement",
    header: ({ column }) => {
      return (
        <Button
          variant="tblghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Placement
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>
      )
    }
  },
  {
    accessorKey: "name",
    header: "Team Name",
  },
  {
    accessorKey: "wins",
    header: "Number of Wins",
  },
  {
    accessorKey: "winrate",
    header: "Winrate",
  },
]