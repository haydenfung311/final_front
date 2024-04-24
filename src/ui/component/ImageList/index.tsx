
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/joy/Container";
import {Link, useNavigate} from 'react-router-dom';
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../data/product/GetAllProductDto.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "../LoadingContainer";

// type Props ={
//     dto: GetAllProductDto
// }


export default function MasonryImageList() {
    const[getAllProductDtoList, setGetAllProductDtoList] = useState <GetAllProductDto []|undefined> (undefined);
    const navigate = useNavigate();
    const fetchAllProducts = async ()=>{
            const responseDtoList = await ProductApi.getAllProducts();
            setGetAllProductDtoList(responseDtoList);
    }


    const handleClick = (pid:number) => {
        // Perform any actions you need
        console.log(`Product ${pid} clicked`);
        // Navigate to the desired route
        navigate(`/product/${pid}`);
    };

    useEffect (() => {
        fetchAllProducts();
    }, []);


    return (
        <Container
            id="productlist">
        <Box sx={{ width: '100%', overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={20}>
                {
                    getAllProductDtoList
                    ? getAllProductDtoList.map((dto) => (
                            <Link to={`/product/${dto.pid}`} onClick={() => handleClick(dto.pid)}>
                    <ImageListItem key={dto.image_url}>
                            <img
                                srcSet={`${dto.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${dto.image_url}?w=248&fit=crop&auto=format`}
                                alt={dto.name}
                                loading="lazy"
                            />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                padding: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                            }}
                        >
                            {dto.name}
                        </Typography>
                        <Typography
                            color="text.secondary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                padding: '8px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                            }}
                        >
                            HKD ${dto.price}
                        </Typography>
                    </ImageListItem>
                    </Link>
                    ))
                :<LoadingContainer/>
                }
            </ImageList>
        </Box>
        </Container>
    );
}
