import {useNavigate, useParams} from "react-router-dom";
import NavList from "../../component/NavList";
import ShowProductDetail from "../../component/ShowProductDetail";
import Footer from "../../component/Footer";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/product/ProductDetailDto.ts";
import LoadingContainer from "../../component/LoadingContainer";
import Container from "@mui/joy/Container";
import *as ProductApi from "../../../api/ProductApi.ts"

type Params = {
    productId: string
}
export default function ProductDetail() {
    const [dto, setDto] = useState<ProductDetailDto | undefined>(undefined);

    const {productId} = useParams<Params>()
    const navigate = useNavigate();
    const fetchProductDetailDto =async (pid:string) =>{
        try {
               const responseDto = await ProductApi.getProductById(pid);
               setDto (responseDto);
            } catch (error){
                navigate("/error");

            }
    }
    useEffect(() => {
        if(productId) {
            fetchProductDetailDto(productId)
        }else{
            navigate("/error");
        }
    }, []);

    return(
        <div className="product-listing-container">
            <NavList/>
            <Container>
                {
                    dto?<ShowProductDetail dto={dto}/>
                        :<LoadingContainer/>
                }

            </Container>

            <Footer/>
        </div>
    )


}

