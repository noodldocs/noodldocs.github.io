export const FrontpageBlocks = {
    SearchBar: 'searchbar',
    Hero: 'hero', // ONLY ONE HERO BLOCK TO MAINTAIN GOOD SEO PLEASE!
    FeaturedModules: 'featuredmodules',
    FeaturedGuides: 'featuredguides',
    FeaturedProjects: 'featuredprojects',
    FeaturedVideos: 'featuredvideos',
}

export const frontpageData = [
    { type: FrontpageBlocks.SearchBar },
    {
        type: FrontpageBlocks.Hero,
        title: 'Get started with Noodl',
        text: 'Noodl is a node based app builder. It’s a way of visually building an application in a way that is similar to code but without any coding skills necessary. The main focus is to empower designers and developers and provide a workflow that allows for high flexibility, scalability and quick iterations.',
        gridItems: [
            {
                type: 'youtube',
                videoId: 'SAIaV4RAo7s',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-orange-20',
                label: 'Noodl basics',
                href: 'https://youtube.com/watch?v=SAIaV4RAo7s',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-blue-20',
                label: 'Build your first app',
                href: 'https://youtube.com/watch?v=SAIaV4RAo7s',
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
