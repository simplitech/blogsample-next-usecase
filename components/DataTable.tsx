import {useTable, useSortBy} from 'react-table'
import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

const DataTable = ({columns, data, count}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <Box background={"white"} borderRadius={8} border={1} borderStyle={"solid"} borderColor={"gray.300"}>
      <Table {...getTableProps()} variant="striped">
        <Thead>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </Th>
            ))}
          </Tr>
        ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  )
                })}
              </Tr>
            )
          }
        )}
        </Tbody>
      </Table>
      <br/>
      <div>Showing the first {rows.length} results of {count} rows</div>
    </Box>
  )
}
export default DataTable
