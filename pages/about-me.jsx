import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function AboutMe() {
    return (
        <>
        <Layout>
        <Head>
            <title>A.Souza Dev | About Me</title>
        </Head>
    <h2>
        <Link href="/">Home</Link>
    </h2>
    <h1 className="title">Um pouco da minha história...</h1>
    </Layout>
    </>
    )
}