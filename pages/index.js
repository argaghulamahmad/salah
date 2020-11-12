import Container from '../components/container'
import AllStories from '../components/all-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import React from "react";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Salah</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <AllStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
