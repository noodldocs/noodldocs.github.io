"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8156],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var o=t(67294);function E(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){E(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function n(A,e){if(null==A)return{};var t,o,E=function(A,e){if(null==A)return{};var t,o,E={},i=Object.keys(A);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(E[t]=A[t]);return E}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(E[t]=A[t])}return E}var B=o.createContext({}),Q=function(A){var e=o.useContext(B),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},l=function(A){var e=Q(A.components);return o.createElement(B.Provider,{value:e},A.children)},I="mdxType",r={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},a=o.forwardRef((function(A,e){var t=A.components,E=A.mdxType,i=A.originalType,B=A.parentName,l=n(A,["components","mdxType","originalType","parentName"]),I=Q(t),a=E,p=I["".concat(B,".").concat(a)]||I[a]||r[a]||i;return t?o.createElement(p,g(g({ref:e},l),{},{components:t})):o.createElement(p,g({ref:e},l))}));function p(A,e){var t=arguments,E=e&&e.mdxType;if("string"==typeof A||E){var i=t.length,g=new Array(i);g[0]=a;var n={};for(var B in e)hasOwnProperty.call(e,B)&&(n[B]=e[B]);n.originalType=A,n[I]="string"==typeof A?A:E,g[1]=n;for(var Q=2;Q<i;Q++)g[Q]=t[Q];return o.createElement.apply(null,g)}return o.createElement.apply(null,t)}a.displayName="MDXCreateElement"},42765:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>B,contentTitle:()=>g,default:()=>r,frontMatter:()=>i,metadata:()=>n,toc:()=>Q});var o=t(87462),E=(t(67294),t(3905));const i={title:"Simple Tooltips Module",hide_title:!0},g="Simple Tooltips Module",n={unversionedId:"modules/simple-tooltips/README",id:"modules/simple-tooltips/README",title:"Simple Tooltips Module",description:"GitHub",source:"@site/library/modules/simple-tooltips/README.md",sourceDirName:"modules/simple-tooltips",slug:"/modules/simple-tooltips/",permalink:"/2.9/library/modules/simple-tooltips/",draft:!1,tags:[],version:"current",frontMatter:{title:"Simple Tooltips Module",hide_title:!0},sidebar:"customHtmlSidebar",next:{title:"Tooltip",permalink:"/2.9/library/modules/simple-tooltips/nodes/tooltip"}},B={},Q=[{value:"Getting started",id:"getting-started",level:3},{value:"Tooltip and Show Tooltip differences",id:"tooltip-and-show-tooltip-differences",level:3}],l={toc:Q},I="wrapper";function r(A){let{components:e,...i}=A;return(0,E.kt)(I,(0,o.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,E.kt)("h1",{id:"simple-tooltips-module"},"Simple Tooltips Module"),(0,E.kt)("p",null,(0,E.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/simple-tooltips"},(0,E.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=plastic&logo=github&label=GitHub&message=Source%20Code",alt:"GitHub"}))),(0,E.kt)("p",null,(0,E.kt)("a",{parentName:"p",href:"https://simple-tooltips-module.sandbox.noodl.app/"},"Demo")),(0,E.kt)("p",null,"This module allows you to add simple tooltips to your Noodl App, they are designed to only show text and simple HTML."),(0,E.kt)("div",{className:"ndl-image-with-background l"},(0,E.kt)("p",null,(0,E.kt)("img",{src:t(76003).Z,width:"915",height:"490"}))),(0,E.kt)("p",null,"Included in this module are 2 new core nodes.\nThe visual node ",(0,E.kt)("strong",{parentName:"p"},"Tooltip")," and a logic node ",(0,E.kt)("strong",{parentName:"p"},"Show Tooltip"),"."),(0,E.kt)("h3",{id:"getting-started"},"Getting started"),(0,E.kt)("p",null,"After importing this module you will see 2 new nodes in the node picker called ",(0,E.kt)("strong",{parentName:"p"},"Tooltip")," and ",(0,E.kt)("strong",{parentName:"p"},"Show Tooltip")," in external libraries category."),(0,E.kt)("p",null,"We can start by placing the ",(0,E.kt)("strong",{parentName:"p"},"Tooltip")," node into our visual tree, and a button inside."),(0,E.kt)("div",{className:"ndl-image-with-background l"},(0,E.kt)("p",null,(0,E.kt)("img",{src:t(43852).Z,width:"520",height:"395"}))),(0,E.kt)("p",null,"After that we will do the most important part, setting the content inside the tooltip. This can be done via the Property Panel when selecting the ",(0,E.kt)("strong",{parentName:"p"},"Tooltip")," node."),(0,E.kt)("div",{className:"ndl-image-with-background l"},(0,E.kt)("p",null,(0,E.kt)("img",{src:t(39196).Z,width:"458",height:"917"}))),(0,E.kt)("p",null,"Now when you hover the mouse on top of the button you will see the tooltip."),(0,E.kt)("div",{className:"ndl-image-with-background l"},(0,E.kt)("p",null,(0,E.kt)("img",{src:t(6693).Z,width:"544",height:"209"}))),(0,E.kt)("p",null,"But the tooltip is not in the center of the button, that is because the tooltip is taking 100% width. In most cases, the content inside is also 100% width. But if you want it to be to the content size, you can place a group above it which is content size."),(0,E.kt)("div",{className:"ndl-image-with-background l"},(0,E.kt)("p",null,(0,E.kt)("img",{src:t(5727).Z,width:"1369",height:"486"}))),(0,E.kt)("p",null,"And now you have a tooltip!"),(0,E.kt)("h3",{id:"tooltip-and-show-tooltip-differences"},"Tooltip and Show Tooltip differences"),(0,E.kt)("p",null,"These nodes share the same inputs the only differences between them are:"),(0,E.kt)("ul",null,(0,E.kt)("li",{parentName:"ul"},"The logic node needs to have a ",(0,E.kt)("inlineCode",{parentName:"li"},"Node Reference")," passed in so it knows where to be attached."),(0,E.kt)("li",{parentName:"ul"},"The visual node has a 100% width and content size height, so it might change the layout a little.")))}r.isMDXComponent=!0},76003:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/preview-83075f77f961992eba5181535a205a18.png"},39196:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/property-panel-1-3ff39417d5ab34ef69d87b6e99382a00.png"},43852:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAAGLCAYAAACiMGqIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAABdVSURBVHhe7d1rsx1VncDh+RDOTJX6wiqosuaFY1FYOpYWghZa3gpGBkctMCIMKAgIiIFwMUAq3CEESCYBDBACxBAuCSQEEsiF3K+QREHAr7Im/7b6zD57dWLCPp0+vfbz4qmT3b26935zsn67b+ef/vlTn0oAAIMEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBEIh/uXf/iP96xkXAh2J38Gm303oK4FQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAI0u2DmA43Lp5pAoDQCoRACASb79/+8Mr2+eV/af/hv1c+2Q0EgUBqBUAiBAP8v4iDCIEQYRCCE6+7+Y+P4qSAQKI1AKIRAgL87++JbJ+Ig/h3LBo8mtBUJAoHSCIRCTHUgfP77v0rfufQP6XuXzU7fuuim9OkzZzSOg+mkjoOIgToOam1HgkCgNAKhEFMVCF/80VXp8RfeTLvf+2jiW1jYvOtwmvXg00KBaStOJdRxEDHQNCaW3/P4ylYiQSBQGoFQiKkIhK9dMDO9tnFP2nvw4/TCum3pyjmL0w+vuCPdvuD59Nb296rljyx7TSQw7cRkX8dB0/pBEQn1+IiFpjGfhECgNAKhEFMRCAufW5P2HPww3bFweRYBEQ9rN+1N2/e/n2bcOG/SOuhSfUTgqZc2NK4/mhOJiuMhECiNQCjEqIHwzV/enDbuOJReenNHdf1B05jLZi9Iu979MC1Zub56ffr5v00vvrE9LX3l7XTTvKVp656/VOtjXKz/3NkXpzsWLE9v7zhYHX3YeeCvaemqjemrP7t+0n5j+9hP7G9w+QNPvpLe2LI/ffuSv59LvmjWQ9W+Zt7/ZBUx8X6x31jm9Md4iij4JHFQm8pIEAiURiAUYtRAuHruY2n3kcn95vnLGtc3+fJPrk3rtuxL7+z5czVZP/fq5vTwM6+m866+s5qsFzy75sgE/lF1umLOkQl98fJ1aef+D9LmXYfSeVfNndjPite3VvuJ/Q3uP45oxL7jQsl4XQdKxETsY/7S1Wnu4hVpzaY4LfJRenjpq5O2p3yjxEGtjoThixpPlECgNAKhEKMGws0PPTPp2//xqAMhJv3Lb5u83W/mLKqCY+Hzayd9s7/4lvnVaYo4klAvP9FA2LL7cBUh9bg44rF8zZYqUv7rt3dNLKdscS1BTOwxwTetP171nQ+jPkhJIFAagVCIUQPhoadXNQZCTMTPrNpUTcC1R5e9lr5w7pUTgfDK+h3p1O9eOmm7OA2x5cjk/oPLb5+0PMT+4nRGnNaI1ycaCPUpjkH1ujiiMLyOMgkEaJdAKERbRxDq8/71aYS4iDEuVozrBepAiAl+cJtwtEk/zH7k2ep6hDiacKyxRwuE2H5wXIgxMTa2GV5Hmf5RIMSEH+tqRwsAgQDNBEIhRg2E6hqE9z465jfw4SD4pIEwHCMnGgix/eC4IBDGz7ECISb7WDes6bZGgQDNBEIhRg2E+i6G1Rt2VQ9LahrzixvnVdcb1If4jxUIw6cRBi16/vXqaEQ8YyFex/Zxt8JXfvq7SeOOFgix/eC4cOGR/9x3HPls9y95OVtHmY4VCPWtjzGmFhczNt2tIBCgmUAoxKiBEOK2wrhtMC4sjFsUB9dFNMREPvjN/1iBcOMDT1VHJOJ2xMHlZ/1iVlq/9UB1J0J93UJM+BEeESD1uHjuQkRDUyDE9rGfemxc7BifeXgflO14AmFwmUCAEyMQCjEVgVDfDbDv0MfVrYNxa2LcjXDfH19Om3YequJh8EmKxwqECIo4GhET+l2Prawm+bjmIMYP3/VQ3/EQj3OO97r3iRfThm3vVhc5NgVCrIt9x/7iKETEQVwbEbdZDl8sSbkEArRLIBRiKgIhxJGDOf/7p7Rt3/vVf5q1CITr7nli0i2LxwqE8KUfX1udaoiwGNzPr4duiYx93rX4hWryjzFx5CHulIjnJjQFwuxHn6tiIEImxsf+4z//o50aoUwCAdolEAoxVYEw6OsXzKwm57ilsWn98YrtYz+xv6b1tQiFM35+Q3Z6o1YHQn2RYgTKVHw++qkOhIiB+PegYwXC8NgIA4EAOYFQiDYCYboZDgSIST8m9yYRCYNj40hD07haxMLg+BMlECiNQCiEQGAc1UcAYvIfdiJjR42DIBAojUAoxDgEQv1Ux0tuebhxPXRJIFAagVCIcQgEmM4EAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgFEIgQLcEAqURCIUQCNAtgUBpBEIhBAJ0SyBQGoFQCIEA3RIIlEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIY+6zn/lMOv2006qfTesBGE8CYcydesop6dxzzql+Nq0HYDwJhDEnEABoIhDGnEAAoIlAGHMCAYAmAmHMCQQAmgiEMScQAGgiEMacQACgiUAYc6MGQvwN/Ka/jQ+cHPE72PS7CaMSCGNOIEC/CQTaIhDGnECAfhMItEUgjDmBAP0mEGiLQBhzAgH6TSDQFoEw5gQC9JtAoC0CYcwJBOg3gUBbBMKYEwjQbwKBtgiEMScQoN8EAm0RCGNOIEC/CQTaIhDGnECAfhMItEUgjDmBAP0mEGiLQBhzAgH6TSDQFoEw5gQC9JtAoC0CYcwJBOg3gUBbBMKYEwjQbwKBtgiEMScQoN8EAm0RCGNOIEC/CQTaIhDGnECAfhMItEUgjDmBAP0mEGiLQBhzAuH4XXLLw+mmB5emz3//V43roQsCgbYIhDHXdSCseH1r2n/4b8e0690P02WzFzRuP6p4/3Vb9qUv/+TaiWVfv2Bm+tZFN6VPnzlj0rI3tx5o9bPAJyEQaItAGHNdB8Llty9Mtz363ISV67alnfs/SPf98eWJZbfMX5a+MWNW4/ajagqEpmXhqrmL0z2Pr3QEgWlFINAWgTDmug6EYQufW5Pe2fPn9L3LZjeun2onEggwHQkE2iIQxlzfAuGcK+ak5Wu2pJ0H/pr2Hvw4vbX9vXTdPU9MOh0QPnf2xemOBcvT2zsOVuNi/NJVG9NXf3b9pHGDMXDRrIeq8bvf+yjtOfhh2rrnL+mNLfvTty+5tRq79JW304tvbE+nn//b6vX19y6pxscph0eWvVYd+Yjt3njnQPqfWx+Z9D7QFoFAWwTCmOtTIJx31dy0edehav38pavT3MUr0ppNe6oAWPDsmolIiJ/xeu/Bj9IL67alOQuXp8XL11UTeGwf+6n3ORgIcRojTmdEFMS4OxetSLMefDp98UdXZWPj9c0PPVNdk7D6rV1pw7Z3071PvFiJaInIiPX1+0BbBAJtEQhjrg6Es84886iatqudrEA49buXVt/et+w+nM67+s6J5XGkYNnqjWn7/vfTjBvnVct+M2dR2n1k4l74/NpJRxYuvmV+NS6OJNTLT+QUQ1MgxEWUERRfu2DmxLj499pNe6uLGgeXQxsEAm0RCGMuAqEpCgY1bVc7WYFw/jV3p61736/WDy4PF858IO3Y/0G6f8nL1eslK9enLUf28YPLb8/GPrNqU9q441D65i9vrl5PRSDEkYzBcdW6+cuqSLl67mPZOphKAoG2CARGcrICIc7zx+H8psP2X/np76pv8X9a+071+mgTfJj9yLPV9QhxNOFoY08kEOIz/fq2/LbHY31emEoCgbYIBEYyHQIhJuyYuGMCj9fHCoR6Uo/9HW3siQZCva9BAoGTRSDQFoHASE5WIAyfRhj0wyvuqO44WPT869Xr4dMIg2JMjI1t4vWogRCnGOKoxOC4EHc4xIWK8XN4HUwlgUBbBAIjOVmBEHcSvLZxT3ZBYIi7DeLbelycGK9vfOCpanK+Y+HySePO+sWstH7rgepix7joMZYdLRBi3Bk/v2FiWdPYOhBeenPHpIcnxb9XrH0nbdp5KH3n0j9MLIc2CATaIhAYyckKhPD7+56snjOwesOu6ohCHAWY99SqKgbi2Qj1JB0xEWMiGu56bGW1r7jmICb3uNXx8oFrBpoCIY5SxPsseXF9dQSg3m9TIMR7x7MQ4v1/dv291S2Uz766qbr1Mp6NUO8T2iIQaItAYCQnMxDCNXc9njbvOlx9cw8xkT/50oaJZxXUvvTja6tTDTFR12PjG/3wBYVNgRBHKOIow75DH1d3TsQdFE1j62sQIiLi6Eb9PhEN8ZyGuAWz3ie0RSDQFoHASKY6EI5HPMMg/phSHL7/R38X4QvnXlnFRvyxpab1xxLbDobDsDoQ6osU4z2O5zPBVBIItEUgMJIuAmG6GA4E6IJAoC0CgZEIBIFAtwQCbREIjGScA+GSWx6urnMYfPQznGwCgbYIBEYyzoEA04FAoC0CgZEIBOiWQKAtAoGRCATolkCgLQKBkQgE6JZAoC0CgZEIBOiWQKAtAoGRCATolkCgLQKBkQgE6JZAoC0CgZEIBOiWQKAtAoGRCATolkCgLQKBkQgE6JZAoC0CgZEIBOiWQKAtAoGRCATolkCgLQKBkQgE6JZAoC0CgZEIBOiWQKAtAoGRCATolkCgLQKBkQgE6JZAoC0CAQDICAQAICMQAICMQAAAMgIBAMgIBAAgIxAAgIxAoBOf/cxn0umnnVb9bFoPQLcEAp049ZRT0rnnnFP9bFoPQLcEAp0QCADTm0CgEwIBYHoTCHRCIABMbwKBTggEgOlNINAJgQAwvQkEOiEQAKY3gUAnRg2E+Bv4TX8bHzg54new6XeTcggEOiEQoN8EQvkEAp0QCNBvAqF8AoFOCAToN4FQPoFAJwQC9JtAKJ9AoBMCAfpNIJRPINAJgQD9JhDKJxDohECAfhMI5RMIdEIgQL8JhPIJBDohEKDfBEL5BAKdEAjQbwKhfAKBTggE6DeBUD6BQCcEAvSbQCifQKATAgH6TSCUTyDQCYEA/SYQyicQ6IRAgH4TCOUTCHRCIEC/CYTyCQQ6IRCg3wRC+QQCnRAI0G8CoXwCgU4IBOg3gVA+gUAnBAL0m0Aon0CgE10Hwvcum53e2fPntP/w3ybZd+jj9PaOg+maux5v3O54fP77v0rfufQP6QvnXpmt+/oFM9O3LropffrMGdk66BOBUD6BQCemSyC8sWV/uu3R5ybc+8SLVSDs3P9B+p9bH2nc9h+5bPaCtOvdD9PNDz2TrVvx+ta0bsu+9OWfXJutgz4RCOUTCHRiugRCTNjD6/772nvS1r3vpyUr12frjodAYBwIhPIJBDoxnQMhJu+YxAfXXX/vkurIwkWzHpo0Nl7H8lgfr5e+8nbatu/96lTFjv0fVO/xwJOvTIzb/d5Hac/BD9PWPX+pjl58+5JbJ/Z1zhVz0vI1W9LOA39New9+nN7a/l667p4nJp2OqPdzw/1PpXlPrareqx47ymkROFECoXwCgU5M50C4/PaF1RGAhc+tmVgWRwNiWRwdGBw7fLQgto3tIgSefGlDddriwpkPpG/MmJVumb+sioLNuw6lOxetSLMefDp98UdXVdudd9Xcanl8pvlLV6e5i1ekNZv2VJP/gmfXTERC/X4RMBu2vVudEonxccRj+/7304wb5018NmiTQCifQKATdSCcdeaZR9W0XW2qAmH4GoSHn3mtuv7gxTe2p69dMHNi/PEGwtGW1ZpOMZz63Uur99uy+3A67+o7J5Z/7uyL07LVGydN/PW+43MPfr6mqIE2CYTyCQQ6EYHQFAWDmrarTVUgDN/FEOLb+INPvVzdjVCPbzMQzr/m7uo9myb3OPoQpyruX/Jy9bred/269pWf/q6KhqYjItAGgVA+gUAvTVUgDE+o8a184fNrq+sElq7aOHFov81AONb4euL/09p3jjm26boJaJNAKJ9AoJfaCoQQUfDEC29W3+rj230s6yoQhid+gcB0IRDKJxDopTYDIQwHQf3617dNfSAMn0YY9MMr7qjueFj0/OvVa4HAdCEQyicQ6KWTfQQhwiAm5ri1cHBcnI6I6xaaAiHuRKiX1eL91m89kM74+Q0Ty+JOhtc27skuPAxxt0Ps6zdzFlWvBQLThUAon0Cgl6YqEIbvYojbBl/fvK96jsHgNQgxcb95ZGKP2xfjAUpzFi5PL6zbVn27j2WDE/Y3f3lz2rjjUPVsgoiEuIWxXhdHCeL6hiUvrq+enVBfCPn7+56slq/esKs6ohBHDiJGYt/xbIR6nEBguhAI5RMI9NJUBcLwHQwRBluOLL/78ZWT7mIIMXHHQ4rqcas27Ew3zVvaOGHHMw7idskYO/hExgiNuKUxth88QhHiQUebdx2e+CwRDPEshfpZCUEgMF0IhPIJBHpp1EAYRUzGTX+IaVgcfYhTCfE8g+F1sX3sZ3h5bBN/zCn+2NNwoMB0IhDKJxDopS4DARAI40Ag0EsCAbolEMonEOglgQDdEgjlEwj0kkCAbgmE8gkEekkgQLcEQvkEAr0kEKBbAqF8AoFeEgjQLYFQPoFALwkE6JZAKJ9AoJcEAnRLIJRPINBLAgG6JRDKJxDoJYEA3RII5RMI9JJAgG4JhPIJBHpJIEC3BEL5BAK9JBCgWwKhfAKBXhII0C2BUD6BQC8JBOiWQCifQKCXBAJ0SyCUTyDQSwIBuiUQyicQ6CWBAN0SCOUTCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAABmBAABkBAIAkBEIAEBGIAAAGYEAAGQEAgCQEQgAQEYgAAAZgQAAZAQCAJARCABARiAAAEM+lf4Pgg5hMYRndioAAAAASUVORK5CYII="},6693:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,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"},5727:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/tooltip-setup-3-47ffab8a19809a708f94300927e27cec.png"}}]);