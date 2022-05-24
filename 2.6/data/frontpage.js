export const FrontpageBlocks = {
    SearchBar: 'searchbar',
    Hero: 'hero', // ONLY ONE HERO BLOCK TO MAINTAIN GOOD SEO PLEASE!
    FeaturedModules: 'featuredmodules',
    FeaturedGuides: 'featuredguides',
    FeaturedProjects: 'featuredprojects',
    FeaturedVideos: 'featuredvideos',
}

export const frontpageData = [
    // { type: FrontpageBlocks.SearchBar },
    {
        type: FrontpageBlocks.Hero,
        title: 'Get started with Noodl',
        text: 'Noodl is a low code, node based app builder. It’s a much faster and iterative way to build software than classic code. In Noodl you can use a visual paradigm to build you app, but you can also use code when more convenient. Noodl is also great for designers, as it gives full control over the look and feel of your App. In Noodl everything is live and you edit you app while its live. This site contains all you need to get started!',
        gridItems: [
            {
                type: 'youtube',
                videoId: 'zWsr1SAtrB4',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-orange-20',
                backgroundImage:
                    '/img/featured-content-images/noodl-basics.png',
                label: 'Noodl basics',
                href: '/docs/getting-started/fundamentals',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-blue-20',
                backgroundImage:
                    '/img/featured-content-images/build-first-app.png',
                label: 'Build your first app',
                href: '/docs/build-alongs/task-list-app',
            },
        ],
    },
    { type: FrontpageBlocks.FeaturedGuides },
    {
        type: FrontpageBlocks.FeaturedModules,
    },
    { type: FrontpageBlocks.FeaturedProjects },
    { type: FrontpageBlocks.FeaturedVideos },
]
