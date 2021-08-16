import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}

export default function CDP({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Customer Data Management</title>
                <meta name="description" content="Track events, activity, and customer profile information" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Customer Data Management 👨‍👨‍👧‍👧
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>

                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore CDP</h2>
                        <p>Ingest, connect, and activate customer data across your tech stack and composable DXP.</p>
                        <a href="cdp" className={styles.link}>Learn more...</a>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Experience Platform</h2>
                        <p>Leverage xConnect and xDB to provide a 360 view of the customer in your fully integrated DXP platform.</p>
                        <a href="experience-platform" className={styles.link}>Learn more...</a>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>

            <Footer />

        </div>)
}
