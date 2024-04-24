import { Container } from "@mui/material";
import CheckoutTable from "../../component/CheckoutTable";
import Typography from "@mui/material/Typography";
import CheckoutBox from "../../component/CheckoutBox";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/TransactionDto.ts";
import LoadingContainer from "../../component/LoadingContainer";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";


type Params = {
    transactionId: string
}

export default function Checkout() {
    const params = useParams<Params>();
    const navigate = useNavigate();
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);
    const [dto, setDto] = useState<TransactionDto | undefined>(undefined);

    const fetchTransactionDto = async (tid: string) => {
        try {
            const responseDto = await TransactionApi.getTransactionByTid(tid);
            setDto(responseDto);
        } catch (error) {
            navigate("/error");
        }
    }
        useEffect(() => {
            if (params.transactionId && loginUser) {
                fetchTransactionDto(params.transactionId);
            }
        }, [loginUser])

        return (
            <Container>
                <Typography variant="h3" gutterBottom sx={{
                    ml: 4,
                    mt: 4,
                    color: '#E4000F',
                    backgroundColor: 'white'  // Responsive padding based on breakpoints
                }}>
                    Check Out
                </Typography>
                {
                    dto && params.transactionId
                        ? <>
                            <CheckoutTable dto={dto}/>
                            <CheckoutBox total={dto.total} tid={params.transactionId}/>
                        </>
                        : <LoadingContainer/>
                }
            </Container>
        )

}

// https://mui.com/joy-ui/react-card/#credit-card-form

// https://mui.com/material-ui/getting-started/templates/checkout/