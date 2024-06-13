import Link from "next/link"
import Head from "next/head";
import Layout from "../../components/layout";


export default function Firstpost(){
    return (
        <Layout>
        <Layout></Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">👈 Back to home</Link>
            </h2>
        </Layout>
    );
}