import { database } from '@/lib/database';
import { NextRequest, NextResponse } from 'next/server';




export async function PUT(request: NextRequest) {
    try {
        return NextResponse.json({message: "update ok"})
        
    } catch (error) {
        return Response.json({message: "update fail"})
        
    }
}