import Product from '@/schemas/productSchema';
import { NextRequest, NextResponse } from 'next/server';
import { database } from '../../../lib/database';


export const POST = async (request: NextRequest) => {
    try {
        await database()
        const productInfo = await request.json()
        console.log(productInfo);
        const newProduct = new Product(productInfo)
        const result = await newProduct.save()

        return NextResponse.json({ result })

    } catch (error: any) {
        console.log("product Post Error:", error);
        return NextResponse.json({ Error: error.message })

    }

};

export const GET = (request: NextRequest) => {
    return NextResponse.json({
        message: "Hello Server"
    })

}