import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
    return rss({
        title: "Kaio Learning Astro | Blog",
        description: "Minha jornada aprendendo Astro.js!",
        site: "https://my-first-astro-site.netlify.app/",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>pt-br</language>`
    })
}