import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainLayout({ children, title  = "Title" }) {
    const { pathname } = useRouter();
    return (
        <>
            <Head>
                <title>JS | {title}</title>
            </Head>
            <nav>
                <Link href="/"><a className="">Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/about/author"><a>About author</a></Link>
                <Link href="/order"><a>Order</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    top:0;
                    left: 0;
                    right: 0;
                    background: #ccc;

                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    z-index: 20;
                }
                nav a {
                    color: darkgreen;
                    text-decoration: none;   
                }
                main {
                    margin-top: 70px;
                }
            `}</style>
        </>
    )
}