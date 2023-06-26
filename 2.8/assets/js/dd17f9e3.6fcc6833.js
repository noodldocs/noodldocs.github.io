"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"Build script that generate Sitemap and static pages",hide_title:!0},p=void 0,l={unversionedId:"extending/build-script/sitemap-and-seo",id:"extending/build-script/sitemap-and-seo",title:"Build script that generate Sitemap and static pages",description:"Having a sitemap.xml is very important for SEO,",source:"@site/javascript/extending/build-script/sitemap-and-seo.md",sourceDirName:"extending/build-script",slug:"/extending/build-script/sitemap-and-seo",permalink:"/2.8/javascript/extending/build-script/sitemap-and-seo",tags:[],version:"current",frontMatter:{title:"Build script that generate Sitemap and static pages",hide_title:!0}},c={},m=[{value:"Examples",id:"examples",level:2},{value:"Static pages for Sitemap.xml",id:"static-pages-for-sitemapxml",level:3},{value:"Dynamic pages for Sitemap.xml",id:"dynamic-pages-for-sitemapxml",level:3},{value:"Generate static pages",id:"generate-static-pages",level:3}],u={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"robots",content:"noindex,nofollow,noarchive"})),(0,i.kt)("h1",{id:"generate-a-sitemap-and-static-pages"},"Generate a Sitemap and static pages"),(0,i.kt)("p",null,"Having a ",(0,i.kt)("inlineCode",{parentName:"p"},"sitemap.xml")," is very important for SEO,\nso that search engines can build up a good map on the website."),(0,i.kt)("p",null,"With Noodl we can create build scripts that will alter the files after building.\nWhat is really cool with this feature is that you can find all the information on\nhow the project is built, so we can find all the Pages nodes and generate a nice\nsitemap and even create static index.html files to improve the SEO even more!"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here are 2 examples of a script that generates a sitemap from all the pages."),(0,i.kt)("h3",{id:"static-pages-for-sitemapxml"},"Static pages for Sitemap.xml"),(0,i.kt)("p",null,"In case you don't have any dynamic pages, this script is really easy to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\n/**\n * Sitemap class that helps us build the sitemap XML.\n */\nclass Sitemap {\n  constructor() {\n    this.urls = [];\n  }\n\n  add(entry) {\n    this.urls.push(entry);\n  }\n\n  toXml() {\n    let xml = `<urlset\n        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" \n        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" \n        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"\n    >`;\n\n    xml += this.urls\n      .map((item) => {\n        let entry = `<url>`;\n        Object.keys(item).forEach((key) => {\n          entry += `<${key}>${item[key]}</${key}>`;\n        });\n        return entry + `</url>`;\n      })\n      .join("");\n\n    return xml + `</urlset>`;\n  }\n}\n\nmodule.exports = {\n  async onPostBuild(context) {\n    /**\n     * this.getPages() returns a flat array of all the pages,\n     * like this:\n     *\n     *  [\n     *      {\n     *          title: "page title",\n     *          path: "/path-1/path-2",\n     *      }\n     *  ]\n     *\n     */\n    const pages = await context.getPages();\n\n    // Create our Sitemap class\n    const sitemap = new Sitemap();\n\n    // Loop over all the pages\n    pages.forEach((page) => {\n      // Add the page to the sitemap with\n      // the sitemap tags we want to use.\n      //\n      // Here is what kind of tags there are:\n      // https://www.sitemaps.org/protocol.html\n      sitemap.add({\n        // NOTE: In this example the path is not an absolute URL, which is required to make sitemaps work correctly.\n        loc: page.path,\n        changefreq: "weekly",\n        priority: 0.5,\n      });\n    });\n\n    // Write our sitemap.xml to the outputPath\n    //\n    // if you are deploying via our cloud service\n    // this will also upload the file.\n    await fs.promises.writeFile(\n      `${context.outputPath}/sitemap.xml`,\n      sitemap.toXml()\n    );\n  },\n};\n')),(0,i.kt)("h3",{id:"dynamic-pages-for-sitemapxml"},"Dynamic pages for Sitemap.xml"),(0,i.kt)("p",null,"To make this one work you have to provide the information required by Noodl\nto understand what your dynamic pages have."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// We can do that by sending more information to the "getPages" method.\nconst pages = await context.getPages({\n  // Async function that is called for each page that has variables.\n  async expandPaths(route) {\n    // Check the current page path.\n    if (route.current.path === "page-3/{id}") {\n      // Return a list of our expanded paths.\n      return [\n        {\n          title: "My custom title",\n          path: "page-3/0",\n          meta: {\n            description: "My description",\n            keywords: "",\n          },\n        },\n        {\n          path: "page-3/1",\n        },\n        {\n          path: "page-3/2",\n        },\n      ];\n    }\n\n    // Return the default value.\n    // this will not be called unless there is a variable in the path.\n    // So we are returning an invalid path here.\n    return [\n      {\n        path: route.current.path,\n      },\n    ];\n  },\n});\n\n// ...\n\n// To access the meta data from the pages we can call\n// pages[0].meta\n')),(0,i.kt)("h3",{id:"generate-static-pages"},"Generate static pages"),(0,i.kt)("p",null,"We can expand on the previous example with dynamic pages for Sitemap.xml.\nIn this case we want to take all the information and write a index.html file\nfor each page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require(\'fs\');\nconst path = require(\'path\');\n\n// ...\n\n// Loop over all the pages\nfor (let index = 0; index < pages.length; index++) {\n  const page = pages[index];\n\n  // Create the filepath where we want to save the new index.html file.\n  const pageDir = path.join(context.outputPath, page.path);\n\n  // Generate a index.html file with our custom title and headcode.\n  const content = await context.createIndexPage({\n    title: page.title,\n    headCode: `\n      <meta name="description" content="${page.meta.description}">\n      <meta name="keywords" content="${page.meta.keywords}">\n    `,\n  });\n\n  // Create all the folders to the path.\n  await fs.promises.mkdir(pageDir, {\n    recursive: true,\n  });\n\n  // Save our new index.html file.\n  await fs.promises.writeFile(path.join(pageDir, "index.html"), content);\n}\n')))}h.isMDXComponent=!0}}]);