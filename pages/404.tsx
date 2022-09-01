import Router from "next/router";
import MainLayout from "../components/MainLayout";

export default function About() {
    return (
        <MainLayout title={'Not Found'}>
            <h1>Ooops, not found 404</h1>
            <button onClick={() => Router.push('/') }>Go back to main</button>
        </MainLayout>
    )
}
