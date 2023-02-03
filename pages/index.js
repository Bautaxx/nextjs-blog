import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Search from "../components/search";
import { useState } from "react";
import BlogLink from "../components/blog-link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [searchInput, setSearchInput] = useState("");
  const posts = [];
  allPostsData.forEach((post) => {
    if (post.title.toLowerCase().indexOf(searchInput.toLowerCase()) === -1) {
      return;
    } else {
      posts.push(<BlogLink id={post.id} title={post.title} date={post.date} />);
    }
  });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Search searchInput={searchInput} onSearchInputChange={setSearchInput} />
      <h2 className={utilStyles.headingLg}>Articles</h2>
      <ul className={utilStyles.list}>{posts}</ul>
    </Layout>
  );
}
