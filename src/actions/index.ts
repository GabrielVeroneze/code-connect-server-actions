'use server'

import { revalidatePath } from 'next/cache'
import { Post } from '@/types/Post'
import { Comment } from '@/types/Comment'
import db from 'prisma/db'

export async function incrementThumbsUp(post: Post) {
    await db.post.update({
        where: {
            id: post.id,
        },
        data: {
            likes: {
                increment: 1,
            },
        },
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function postComment(post: Post, formData: FormData) {
    const author = await db.user.findFirst({
        where: {
            username: 'anabeatriz_dev',
        },
    })

    if (!author) {
        throw new Error('Autor não encontrado.')
    }

    const text = formData.get('text') as string

    await db.comment.create({
        data: {
            text: text,
            authorId: author.id,
            postId: post.id,
        },
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function postReply(post: Post, parent: Comment, formData: FormData) {
    const author = await db.user.findFirst({
        where: {
            username: 'anabeatriz_dev',
        },
    })

    if (!author) {
        throw new Error('Autor não encontrado.')
    }

    const text = formData.get('text') as string

    await db.comment.create({
        data: {
            text: text,
            authorId: author.id,
            postId: post.id,
            parentId: parent.parentId ?? parent.id,
        },
    })

    revalidatePath(`/${post.slug}`)
}
