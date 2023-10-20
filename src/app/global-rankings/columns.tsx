"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type Team = {
  id: string
  name: string
  icon: string
  score: number
}
 
export const columns: ColumnDef<Team>[] = [
  {
    accessorKey: "name",
    header: "Team Name",
  },
  {
    accessorKey: "icon",
    header: "Team Icon",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
]