import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// import TablePagination from "@mui/material/TablePagination";
// import * as React from "react";
import CheckoutTableItem from "../CheckoutTableItem";
import {TransactionDto} from "../../../data/transaction/TransactionDto.ts";

type Props ={
    dto:TransactionDto
}
interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Image', minWidth: 60 },
    { id: 'code', label: 'Product', minWidth: 250 },
    {
        id: 'population',
        label: 'Unit\u00a0Price',
        minWidth: 80,
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Quantity',
        minWidth: 80,
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Sub\u00a0Total',
        minWidth: 80,
        format: (value: number) => value.toFixed(2),
    },
];

// interface Data {
//     name: string;
//     code: string;
//     population: number;
//     size: number;
//     density: number;
// }
//
// function createData(
//     name: string,
//     code: string,
//     population: number,
//     size: number,
// ): Data {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];


export default function CheckoutTable({dto}:Props){

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    //
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };
    //
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    return(
        <Container>
            <Paper sx={{ width: '100%', overflow: 'hidden', mt:4}}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {
                            dto.items.map((item)=>(
                                <CheckoutTableItem dto={item}/>
                            ))
                        }

                    </Table>
                </TableContainer>
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[10, 25, 100]}*/}
                {/*    component="div"*/}
                {/*    count={rows.length}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    page={page}*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}
            </Paper>

        </Container>
    )
}