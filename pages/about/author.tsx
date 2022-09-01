import Router from "next/router"
import MainLayout from "../../components/MainLayout"

export default function About() {
    return (
        <MainLayout title={'About Author'}>
            <button onClick={() => Router.push('/') }>Go back to main</button>
            <h1>About Next JS Author</h1>
        </MainLayout>
    )
}
