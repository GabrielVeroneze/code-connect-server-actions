import { NextRequest } from 'next/server'
import db from 'prisma/db'

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
    const replies = await db.comment.findMany({
        where: {
            parentId: Number(params.id),
        },
        include: {
            author: true,
        },
    })

    return Response.json(replies)
}
