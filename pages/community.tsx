import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { MarkdownAsset, MarkdownMeta } from '../interfaces/markdownAsset';

export async function getStaticProps() {
  const communityMarkDownFolder = "community";
  const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
  const stackExchange = await getMarkdownData("stackExchange.md", communityMarkDownFolder);
  const forums = await getMarkdownData("forums.md", communityMarkDownFolder);
  const mvpSite = await getMarkdownData("mvp.md", communityMarkDownFolder);

  return {
      props: {
          forums,
          slack,
          stackExchange,
          mvpSite,
      },
  };
}

export default function Community({ forums, slack, stackExchange: stackExchange, mvpSite }: {forums: MarkdownAsset, slack: MarkdownAsset, stackExchange: MarkdownAsset, mvpSite: MarkdownAsset}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sitecore Community</title>
        <meta name="description" content="Connect with other members of the Sitecore Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sitecore Community</h1>

        <div className={styles.grid}>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{slack.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{stackExchange.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{forums.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
						<ReactMarkdown>{mvpSite.markdown}</ReactMarkdown>
					</div>
          <div className={styles.youtubeCard}>
            <h2>@WeAreSitecore Twitter feed 🕊</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Latest StackExchange questions</h2>
          </div>
        </div>
      </main>
    </div>
  )
}