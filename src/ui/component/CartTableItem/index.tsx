import TableBody from "@mui/material/TableBody";
import Typography from "@mui/joy/Typography";
import RenderAddToCart from "../Selector/index.tsx";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import {CartItemDto} from "../../../data/cartItem/CartItemDto.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {Dispatch, SetStateAction, useState} from "react";
import {LinearProgress} from "@mui/material";
import DeleteConfirmDialog from "../DeleteConfirmDialog";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(228, 0, 15, 0.7)',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

type Props={
    dto:CartItemDto,
    dtoList: CartItemDto[],
    setDtoList: Dispatch<SetStateAction<CartItemDto[] | undefined>>,
}
export default function CartTableItem ({dto, dtoList, setDtoList}:Props) {
    const [isQuantityPatching, setIsQuantityPatching] = useState<boolean>(false);
    // const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [isDeleteConfirm, setIsDeleteConfirm] = useState<boolean>(false);
    const handlePlus = async () =>{
        if(dto.cartQuantity +1< dto.stock){
            setIsQuantityPatching(true);
        }
        const responseDto = await CartItemApi.patchCartItemQuantity(dto.pid, dto.cartQuantity +1);
        const updatedDtoList = dtoList.map((item) =>{
            if (item.pid === dto.pid){
                item.cartQuantity = responseDto.cartQuantity;
            }
            return item;
        });
        setDtoList(updatedDtoList);
        setIsQuantityPatching(false);
    }

    const handleMinus = async () => {
        if (dto.cartQuantity - 1 > 0) {
            setIsQuantityPatching(true);
            const responseDto = await CartItemApi.patchCartItemQuantity(dto.pid, dto.cartQuantity - 1);
            const updatedDtoList = dtoList.map((item) => {
                if (item.pid === dto.pid) {
                    item.cartQuantity = responseDto.cartQuantity;
                }
                return item;
            });
            setDtoList(updatedDtoList);
            setIsQuantityPatching(false);
        } else{
            setIsDeleteConfirm(true);
        }
    }

    const handleDelete = async () => {
        await CartItemApi.deleteCartItem(dto.pid);
        const updateDtoList = dtoList.filter((item) => (
            item.pid !== dto.pid
        ));
        setDtoList(updateDtoList);
    }


    return (
        <TableBody>
                <StyledTableRow key={dto.pid}>
                    <StyledTableCell component="th" scope="row">
                        <img
                            src={dto.imageUrl}
                            alt="Product Image"
                            style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </StyledTableCell>
                    <StyledTableCell>
                        <Typography>{dto.name}</Typography>
                        <Typography sx={{ fontSize: '0.7rem', whiteSpace: 'pre-line' }}>{dto.description}</Typography>
                    </StyledTableCell>
                    <StyledTableCell>${dto.price.toLocaleString()}</StyledTableCell>
                    <StyledTableCell>
                        {
                            isQuantityPatching
                            ?<LinearProgress sx={{ width: '100%', alignSelf: 'center' }}/>
                                :<RenderAddToCart
                            quantity={dto.cartQuantity}
                            handlePlus={handlePlus}
                            handleMinus={handleMinus}
                        />
                        }
                    </StyledTableCell>

                    <StyledTableCell>${(dto.cartQuantity * dto.price).toLocaleString()}</StyledTableCell>
                    <StyledTableCell>
                        {/*{*/}
                        {/*    isDeleting*/}
                        {/*    ? <CircularProgress/>*/}
                        {/*    :<IconButton aria-label="delete" size="small" onClick={handleDelete}>*/}
                        {/*        <DeleteIcon fontSize="small"/>*/}
                        {/*    </IconButton>*/}
                        {/*}*/}
                        <IconButton color="error" onClick={()=> setIsDeleteConfirm(true)}>
                            <DeleteIcon/>
                        </IconButton>

                    </StyledTableCell>
                    <DeleteConfirmDialog isOpen={isDeleteConfirm} setIsOpen={setIsDeleteConfirm} handleDelete ={handleDelete}/>
                </StyledTableRow>
        </TableBody>
    )
}