import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import { IPost } from "../models/post";

// antd
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

interface IMain {
    posts: IPost[];
}

export default function Index({ posts }: IMain) {
    const onChange = () => {}
    return (
        <>
            <MainLayout title={'Home'}>
                <Head>
                    <meta name='keywords' content="next,js,javascript" />
                    <meta name='description' content="The best e-com website" />
                </Head>
                <h1>Hi Next JS</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/post/[postId]`} as={`/post/${post.id}`}>
                                <a>
                                    {post.title}
                                </a>
                            </Link>
                        </li>
                    ))
                }
                </ul>
                <div style={{ padding: 100 }}>
                    <Space direction="vertical">
                        <Button type="primary">Primary Button</Button>
                        <Button type="ghost">Ghost Button</Button>
                        <DatePicker onChange={onChange} />
                        <CiCircleFilled />
                    </Space>
                </div>
            </MainLayout>
        </>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3001/posts');
    const posts: IPost[] = await response.json();

    return {
        props: { posts },
    }
}
