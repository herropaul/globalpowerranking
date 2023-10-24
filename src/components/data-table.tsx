"use client";

import { Input } from "@/components/ui/input";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "@/components/data-table-pagination";
import { TeamType } from "@/types/teams";
import { ChevronDown, ChevronLeft } from "lucide-react";

interface DataTableProps<TData extends TeamType, TValue = any> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: boolean;
}

export function DataTable<TData extends TeamType, TValue = any>({
  columns,
  data,
  filter = true,
}: DataTableProps<TData, TValue>) {
  const expanderColumn = {
    accessorKey: "expander",
    cell: (cellProps) => {
      const row = cellProps.row;
      return (
        <div onClick={() => row.toggleExpanded()} style={{ cursor: "pointer" }}>
          {row.getIsExpanded() ? <ChevronDown /> : <ChevronLeft />}
        </div>
      );
    },
    // No header for the expander column
    header: () => null,
  } as ColumnDef<TData, TValue>;
  const [hoveredRowId, setHoveredRowId] = React.useState<string | null>(null);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  columns = [...columns, expanderColumn];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      {filter && (
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter teams..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm text-table-foreground"
          />
        </div>
      )}
      <div className="rounded-sm border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : (flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        ) as React.ReactNode)}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          ) as React.ReactNode
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>
                        <div style={{ padding: "1rem" }}>
                          {"region" in row.original && (
                            <>
                              <p>
                                <strong>Region:</strong> {row.original.region}
                              </p>
                              <p>
                                <strong>League Name:</strong>{" "}
                                {row.original.league_name}
                              </p>
                              <p>
                                <strong>Acronym:</strong> {row.original.acronym}
                              </p>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
