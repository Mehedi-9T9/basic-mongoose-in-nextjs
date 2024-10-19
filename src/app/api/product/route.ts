import Product from '@/schemas/productSchema';
import { NextRequest, NextResponse } from 'next/server';
import { database } from '../../../lib/database';



export const POST = async (request: NextRequest) => {
    try {
        await database()
        const productInfo = await request.json()

        const newProduct = new Product(productInfo)
        const result = await newProduct.save()

        return NextResponse.json({ result })

    } catch (error: any) {
        return NextResponse.json({ Error: error.message })

    }

};

export const GET = async (request: NextRequest) => {
    try {
        await database()
        const result = await Product.find()
        return NextResponse.json(result)

    } catch (error: any) {
        return NextResponse.json("Data get Error:", error)

    }

}