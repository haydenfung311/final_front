import {ProductDetailDto} from "../product/ProductDetailDto.ts";

export interface TransactionDto {
    tid:       number;
    dateTime:  string;
    status:    string;
    total:     number;
    items:     TransactionProductDto[];
    buyer_uid: number;
}

export interface TransactionProductDto {
    tpid:     number;
    product:  ProductDetailDto;
    quantity: number;
    subtotal: number;
}

