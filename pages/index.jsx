import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const imageComponent = () => (
  <Image
    src="/images/test.jpg"
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Test"/>
)

export default function Home() {
  return (
    <h1>A.Souza Dev</h1>
  )
}
