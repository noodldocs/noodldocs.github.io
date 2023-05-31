"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6993],{3905:(A,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>Q});var o=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var i=o.createContext({}),C=function(A){var e=o.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},p=function(A){var e=C(A.components);return o.createElement(i.Provider,{value:e},A.children)},g="mdxType",s={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},E=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,i=A.parentName,p=l(A,["components","mdxType","originalType","parentName"]),g=C(t),E=n,Q=g["".concat(i,".").concat(E)]||g[E]||s[E]||r;return t?o.createElement(Q,a(a({ref:e},p),{},{components:t})):o.createElement(Q,a({ref:e},p))}));function Q(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,a=new Array(r);a[0]=E;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l[g]="string"==typeof A?A:n,a[1]=l;for(var C=2;C<r;C++)a[C]=t[C];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}E.displayName="MDXCreateElement"},31853:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>C});var o=t(87462),n=(t(67294),t(3905));const r={title:"Selection Pills",hide_title:!0},a="Selection Pills",l={unversionedId:"prefabs/selection-pills/README",id:"prefabs/selection-pills/README",title:"Selection Pills",description:'A simple prefab component displaying a set of "pills" given an array of Options (the pill values) and Labels (what should be shown in the pills). The user can make a selection, one or many pills. It works very similar to the Multi Choice prefab.',source:"@site/library/prefabs/selection-pills/README.md",sourceDirName:"prefabs/selection-pills",slug:"/prefabs/selection-pills/",permalink:"/2.8/library/prefabs/selection-pills/",draft:!1,tags:[],version:"current",frontMatter:{title:"Selection Pills",hide_title:!0},sidebar:"selectionPillsSidebar"},i={},C=[],p={toc:C},g="wrapper";function s(A){let{components:e,...r}=A;return(0,n.kt)(g,(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"selection-pills"},"Selection Pills"),(0,n.kt)("p",null,'A simple prefab component displaying a set of "pills" given an array of ',(0,n.kt)("strong",{parentName:"p"},"Options")," (the pill values) and ",(0,n.kt)("strong",{parentName:"p"},"Labels")," (what should be shown in the pills). The user can make a selection, one or many pills. It works very similar to the ",(0,n.kt)("a",{parentName:"p",href:"/library/prefabs/multi-choice"},"Multi Choice")," prefab."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(53884).Z,width:"680",height:"384"}))),(0,n.kt)("p",null,"There are a few important properties of the ",(0,n.kt)("strong",{parentName:"p"},"Selection Pills")," prefab component that we need to take a closer look at:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(42261).Z,width:"564",height:"344"}))),(0,n.kt)("p",null,"First, you specify a set of pill values in the ",(0,n.kt)("strong",{parentName:"p"},"Options")," property / input."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"['one','two','three']\n")),(0,n.kt)("p",null,"Optionally you can specify labels corresponding to each option value, if not the option value will be used as label. This is done via the ",(0,n.kt)("strong",{parentName:"p"},"Labels")," property / input."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"['One','Two','Three']\n")),(0,n.kt)("p",null,"Finally the ",(0,n.kt)("strong",{parentName:"p"},"Selection")," property / input also contains an array of string, but this time you should have it contain the option values that you want selected. Most often this is connect to a variable or object property. See the example below."),(0,n.kt)("div",{className:"ndl-image-with-background xl"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(56272).Z,width:"1642",height:"542"}))),(0,n.kt)("p",null,"The component also have a corresponding ",(0,n.kt)("strong",{parentName:"p"},"Selection")," output, here you can see it contains the option values that the user have selected."))}s.isMDXComponent=!0},56272:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/selection-pills-nodes-1-ded49a2501b53e2ff1ec2eb33ea37f50.png"},42261:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/selection-pills-props-1-9e406b6ff778c63417df2c5b9f500fbd.png"},53884:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAGACAYAAABhr5CaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB03SURBVHgB7d0LkJ1lmSfwt9O3XLpzJ4GECMslEIgoLINcDN6iKFZt7ajltVyp3fWybu3qju64g+7OOKszjs6sOuPuoFPuKFtbuqxgzaggkFKWMEBRliC4YYKJBAwBQhJCuknSnU56+j2Zbs456U76cr7Tz9f5/aq66Mv5Osn3nOb8+708b8vgkAQAADEMzkoAABCIgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAoQioAACEIqACABCKgAoAQCgCKgAAobQlOIlt+sWhtGXTQNr268Pp6acOp927j6TensHU1z+YBlN8LUNvnR0tqbu7JS1eMiudtrI1nXl2azpnTVu64BXtaSbYuXPnUF12p71796aenp60f//+1N/fnwYGBlKZtbW1pY6OjjR37tyh+nWnhQsXpiVLlqRly5almWCm1q1RZnr9YapaBockOIncs6Ev3X93f/r5zw6lg/0z9+k/eyi4XvJb7enydR3p1es7U5ls27Ytbd++Pe3YseOkCzQ5uKxYsSKtWrUqnXHGGalMTua6NUqZ6w8NNCigclLYs+tIuvWWg2nDrQfTvt6T7ym/oHtWWn9tZ7r2t2enRUtjruw5cOBA2rx5c9q6dWvq6+tLDI2Od3amc845J61evTrNmTMnRaRuxSlD/aEgAiozW3/fYLrp2wfSLTcdSBxdEvC2d81J7/zAnNTe0ZIiOHz4cHrkkUfSpk2bEmO78MIL09q1a1Nra2uKQN2aK1r9oWACKjNXnsq/8Rv70649RxK1TlkyK73/g3Onfeo/Twk/9NBDlfWJnFher3jxxRdP+9Svuk2PKPWHJhBQmZlu+NKL6Y7bDyaO75o3z04f/uS8NB0eeOCBtGXLlsTE5Wnfyy67LE0HdZt+01l/aBIBlZnlme2H01f/qDdtfswGjfE6/7y29LHru9Lylc2ZOuzt7U333ntv2rVrV2Lyli5dmq688srU1dWVmkHdYml2/aHJBFRmji2PDqQv/n6PKf1JyFP+v/vZ7nT2+cV2nstthzZu3GhquEHylO/VV1+dFi9enIqkbjE1q/4wDQRUZoYcTj/3e/tOyh36jbKguyV95o/nFxZSc8i566677PRusLzT+3Wve11hIUXdYiu6/jBNBp0kRenlaf08ciqcTs0LPYOV+/jsU4dTo+VG7XkETshpvHxP873NU/CNpm7xFVl/mE4CKqWX15ya1m+M53YfqdzPRrvvvvtMDxfoxRdfrKwPbTR1K4ei6g/TSUCl1PJufRuiGuvvNw+kr//Zi6lR8q5vG2uKl+9xvteNom7l0uj6w3QTUCmtjRv6tJIqyO23HUx/t2Hq07q5X6aWRM2T7/UTTzyRpkrdyqlR9YcIBFRKKZ8Q9b++YeqxSDf+1f506NDk1/Xmk4ZyM3eaK9/zI0cmv+RF3cptqvWHKARUSikfX2rdabHyetSbvjX5I2LzMZjWLzZfXo+Y7/1kqVu5TbX+EIWASunsee5IuuWmyQcnxi/f5+d3T/wXgQMHDjijfRrle59rMFHR65bPo3/5y19eeTv99NMTo5ts/SGSYrtyQwFuvaW5607P+idt6ZJXtadVZ7SmztktaceTh9OvNg+k++7tTzNd7pKc7/f7Pjh3Qtdt3rw5FaGlpaVyDnn+72Tkts95jd5Mb/+c/32PPfZYesUrXjGh64qoW6NqllX/e/bt25e2b9+eONZk6w+RCKiUzobbmhNQL/2nHelDvzMvLV0++kRD38HBdPv3D6ZvfXNmT4duuLVvwgF169atqQgdHR2V4x2nYufOnSfFFHbeMDPRgFJE3RpVMyOCEzOZ+kMkpvgplbxzvxkN+d/x7jnp+j/pHjOcZnk09Z+9Z0760/+xILU15xj7afFCz5EJ7ejPO8A1dp9+uQYT2dGtbjPLROsP0QiolMr9dxc/rf6613em9/7rY0cMDw8M/U//wLHh+KzVbem//tmCNJPdt3H89/03v/lNKkrenTzW23gfm3epnywmUoui6qZm06fIn0Uomil+SuXnPzuUijS7oyV95JPzaj53cCiU/ueP7xua/jx6IMC8uS3p05+bn86/6KUfn/PWtqUrr+pI9/7dzFyX+uAE7vuOHTtSUQ4dOpS++93vjvq197znPSPrHHOoGetxJ5OJ1KKoujWqZpNdw3oyK/JnEYomoFIamx46lPr6i53ef+91c1N7x0svhHnE9CPveb5mWcGL+wfT9b/zQvqDL8xPF13aPvL56z46ryagLj9lVprXdXSSYv/QNc88e3QU6Nxz8qarjsoOpEcfGUibNh1KA+MYIFqzpi2dv7Y9LVjQkh57dCA9/OCh1Lu/OZt9DvQN/V0fPpTWXNR+3MfltYLRR7sWLFiQZs06Wpf+/v5KW55q7e3tqaurq/J+niatX6/a2dmZ5s59aYR97969o266WrZsWVqyZEnlsXv27ElPP/10OniwuRv8BgYG0nPPPZdOOeWU4z6uDHUbS2trazrttNMq/8Zcy2effTa98MILxzxutLrl58HLXvaytHjx4vTUU0+lZ5555pjruru7K98//zd/31zH+ufMWKZybSOMt/4QkYBKafzq0eKPNL38NR01H//g/xwcc83rV/64N33ze4vS8MBOXq86v3tW2tdzdOryS19fmLrmH/3iC88fSTf+5f700U91Db2g1n6fA0Mh8wuf7kmPPDL6KGUemf3IJ7tSV/exI0g7dxxJn/7YC2n388X3hP3VpoETBtTdu3en6N7ylreMBNQcQG+++eaar19xxRUjLYxyoLzllltqvp43/OTQMexHP/pRTSA6//zzK22QctCtlwPx3XffXQmEzZKPwDxRQClD3Ubzqle9Kp199tnHfP75559PP/nJT2rW1F522WVp1apVIx8/+OCD6eKLLx75+NRTT63UclgOla997Wsr/62Xg1+u42iBdqrXNtp46g8RWYNKaWz7dbEjPB1tLTWbogaHMt9N3xl7t/feF46kbVtqQ/Pr39Q56mMXLJqV/t31x4bTbM7clvRfvjS/sryg3stf3p4+8Qfdo4bTbNmKWemG7yxKa84v/nfNJ8Zx//OoVHS5PdGwPKrW1lZ775YvXz7y/uzZsyuPqbZo0aKR9/OoY3U4zeH1kksuGTWcZnlH+/r162uCUdHGU5My1K3e/PnzRw2nWa7RG97whuNeX1+D6lHwXPM3v/nNowbMLD9nXv/611f6stabyrVFKGNtIRNQKY1nthcbUJefWvvj0LNv8IRT709srX3AypedeDt/HjGtnxFuHcpI1324dmPW6StaK8G1euldXnLw/K68aaT22o9/ZvQXw0Z6+qkT3/+enp4UXX3vzOqG7zlU1IfLc889d+T9PPKaQ+uw6hf/s846K5155pk11+YAm5cI1G8IWrNmTWVauRnGU5My1O148jrXegsXLkxLly5NE5VrfO2119Y8D3L9cpurPPpZ7aKLLqp53FSuLUrZa8vJyxQ/pbF7d7HT2CtX1YbLfXtP/Oc9Uxfalp4y9u98+/YOpn9/3dH1rHM6W9KnPttds4b1vLW1L1Z/+OX5lfA5LLfY+vIXeivvdw2Nun7lfy5Mi5ce/fNOGQrXV1zZUejhAbt3nfh+lKG/aO71uXbt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"}}]);