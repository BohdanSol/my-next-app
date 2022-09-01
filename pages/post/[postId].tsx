import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"
import { NextPageContext } from "next"
import { IPost } from "../../models/post"

interface IPostPage {
    post: IPost;
}

export default function Post({ post }: IPostPage) {
    return (
        <MainLayout title={`Post ${post.title}`}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        postId: string;
    }
}

export const getServerSideProps = async ({query: { postId }}: PostNextPageContext) => {
    const response = await fetch(`http://localhost:3001/posts/${postId}`);
    const post = await response.json();

    return {
        props: { post },
    }
}
