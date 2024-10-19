

import Product from '@/schemas/productSchema';
import { NextRequest, NextResponse } from 'next/server';
import { database } from '../../../lib/database';





export const GET = async (request: NextRequest) => {
    try {
        await database()

        // const { searchParams } = request.nextUrl

        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');

        // console.log("ID:", typeof id, id);
        // console.log("Request URL:", request.nextUrl.href)

        const result = await Product.findOne({ productId: id });

        // console.log("form line 13", result);
        return NextResponse.json(result)

    } catch (error: any) {
        console.log(error);
        return NextResponse.json("Data get Error:", error)

    }

}
