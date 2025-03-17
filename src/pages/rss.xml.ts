import rss from '@astrojs/rss'
import type { APIRoute, Params, Props } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute<Props, Params> = async (context) => {
    const blog = await getCollection('blog')

    return rss({
        title: 'My RSS Feed',
        description: 'This is my RSS feed',
        site: context.site || 'http://localhost:4321',
        items: blog.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/blog/${post.slug}`
        }))
    })
}