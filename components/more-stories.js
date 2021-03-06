import PostPreview from '../components/post-preview'
import React from "react";

export default function MoreStories({posts, currentPost}) {
    return (
        <section>
            <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-center">
                More Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
                {posts.filter((post) => {
                    return post.slug !== currentPost.slug
                }).map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
