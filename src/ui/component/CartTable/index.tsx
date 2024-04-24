import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartTableItem from "../CartTableItem";
import {CartItemDto} from "../../../data/cartItem/CartItemDto.ts";
import {Dispatch, SetStateAction} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(228, 0, 15, 0.7)',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


type Props={
    dtoList: CartItemDto[],
    setDtoList: Dispatch<SetStateAction<CartItemDto[] | undefined>>,
}

export default function CartTable({dtoList, setDtoList}:Props) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, maxWidth:'100%' }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Cart Quantity</StyledTableCell>
                        <StyledTableCell>Sub-Total</StyledTableCell>
                        <StyledTableCell>Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                {
                    dtoList.map((dto) =>(
                        <CartTableItem key={dto.pid} dto={dto} dtoList={dtoList} setDtoList={setDtoList}/>
                    ))
                }

            </Table>
        </TableContainer>
    );
}