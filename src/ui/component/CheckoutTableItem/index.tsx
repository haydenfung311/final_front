import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from "@mui/material/TableRow";
import {TransactionProductDto} from "../../../data/transaction/TransactionDto.ts";


type Props={
    dto: TransactionProductDto
}
export default function CheckoutTableItem({dto}: Props){


    return(
        <TableBody>
        <TableRow>
        <TableCell>
            <img
                src={dto.product.image_url}
                alt="Product Image"
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }}
            />
        </TableCell>
            <TableCell>
                {dto.product.name}<br/>
                {dto.product.description}
            </TableCell>
            <TableCell>
                ${dto.product.price.toLocaleString()}
            </TableCell>
            <TableCell>
                {dto.quantity}
            </TableCell>
            <TableCell>
                ${dto.subtotal.toLocaleString()}
            </TableCell>
        </TableRow>
        </TableBody>
    )
}