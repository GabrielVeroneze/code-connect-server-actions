import { Avatar } from '@/components/Avatar'
import { incrementThumbsUp } from '@/actions'
import { Post } from '@/types/Post'
import { ThumbsUpButton } from './ThumbsUpButton'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CardPost.module.css'

interface CardPostProps {
    post: Post
    tamanho?: 'compacto' | 'expandido'
}

export const CardPost = ({ post, tamanho = 'compacto' }: CardPostProps) => {
    const submitThumbsUp = incrementThumbsUp.bind(null, post)

    return (
        <article className={`${styles.card} ${styles[tamanho]}`}>
            <header className={styles.cabecalho}>
                <Image
                    className={styles.imagem}
                    src={post.cover}
                    alt={`Capa do post: ${post.title}`}
                    width={438}
                    height={133}
                />
            </header>
            <section className={styles.conteudo}>
                <h2 className={styles.titulo}>{post.title}</h2>
                <p className={styles.texto}>{post.body}</p>
                {tamanho === 'compacto' && (
                    <Link className={styles.link} href={`/posts/${post.slug}`}>
                        Ver detalhes
                    </Link>
                )}
            </section>
            <footer className={styles.rodape}>
                <div>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                    </form>
                    <p className={styles.curtidas}>{post.likes}</p>
                </div>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}
