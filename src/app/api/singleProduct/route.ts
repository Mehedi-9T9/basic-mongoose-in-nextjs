

import Product from '@/schemas/productSchema';
import { NextRequest, NextResponse } from 'next/server';
import { database } from '../../../lib/database';


export const PUT = async (request: NextRequest) => {
    try {
        await database()
        const {info} = await request.json()
        console.log(info);
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');

      const result= await Product.updateOne({productId:id},{
            $set:{
                madeIn:info.madeIn,
                price:info.price
            }
        })


        console.log("Halar put",id);
        return NextResponse.json(result)

    } catch (error: any) {
        console.log(error);
        return NextResponse.json("Data get Error:", error)

    }

}

export const DELETE = async (request: NextRequest) => {
    try {
        await database()
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');
        console.log("delete call");

      const result= await Product.deleteOne({productId:id})
        return NextResponse.json(result)

    } catch (error: any) {
        console.log(error);
        return NextResponse.json("Data get Error:", error)

    }

}




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
