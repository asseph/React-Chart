import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './Columns';
import { Button, Table } from 'react-bootstrap';

export const BasicTable = ({data:dataProducts}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataProducts, [dataProducts]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
  );

  const { pageIndex } = state;

  return (
    <>
      <Table striped bordered hover {...getTableProps()} id="data table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className="table-primary" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽 ' : ' 🔼 ') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr className="table-light" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <div>
          <Button variant="secondary" size="sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
          </Button>{' '}
          <Button variant="secondary" size="sm" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
          </Button>
        </div>
      </div>
    </>
  );
};
