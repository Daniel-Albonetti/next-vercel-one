
import { FC, ReactNode } from 'react';
import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

interface Props {
    children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Next</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                { children }

            </main>
        </div>
    )
}
