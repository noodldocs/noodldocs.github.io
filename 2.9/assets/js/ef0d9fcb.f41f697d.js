"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8608],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Setup Client",hide_title:!0},s="Setup Client",p={unversionedId:"prefabs/supabase/components/setup-client/README",id:"prefabs/supabase/components/setup-client/README",title:"Setup Client",description:"This component is used to initialize Supabase Client and set it up to query your Supabase backend.",source:"@site/library/prefabs/supabase/components/setup-client/README.md",sourceDirName:"prefabs/supabase/components/setup-client",slug:"/prefabs/supabase/components/setup-client/",permalink:"/2.9/library/prefabs/supabase/components/setup-client/",tags:[],version:"current",frontMatter:{title:"Setup Client",hide_title:!0},sidebar:"SupabaseSidebar",previous:{title:"Supabase",permalink:"/2.9/library/prefabs/supabase/"},next:{title:"Request Example",permalink:"/2.9/library/prefabs/supabase/components/supabase-request-example/"}},u={},c=[{value:"Values from Supabase",id:"values-from-supabase",level:2},{value:"Setup",id:"setup",level:2},{value:"Global Variables",id:"global-variables",level:2},{value:"Supabase_userProfileTableName",id:"supabase_userprofiletablename",level:3},{value:"currentUser",id:"currentuser",level:3},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-client"},"Setup Client"),(0,i.kt)("p",null,"This component is used to initialize Supabase Client and set it up to query your Supabase backend."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52951).Z,width:"1298",height:"648"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that you need to place one instance of this component in your project home component, set the default values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Supabase URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Supabase Anon Key"),", and connect the the ",(0,i.kt)("inlineCode",{parentName:"p"},"Did Mount")," output of your root Group node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Do")," input like in the image above.")),(0,i.kt)("h2",{id:"values-from-supabase"},"Values from Supabase"),(0,i.kt)("p",null,"You can find the required URL and Anon Key by logging into your Supabase instance, navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> API"),", and look for the Project URL and Project API Keys sections:"),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61109).Z,width:"697",height:"428"}))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First, drop a ",(0,i.kt)("strong",{parentName:"p"},"Supabase \u2013 Setup Client")," in your project home component and input your ",(0,i.kt)("inlineCode",{parentName:"p"},"Supabase URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Supabase Anon Key")," in its Property Panel. Then, open the ",(0,i.kt)("strong",{parentName:"p"},"Projects Settings")," sidebar and find the ",(0,i.kt)("inlineCode",{parentName:"p"},"Head Code")," input. Add the following at the top:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"module\">\n  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.22.0';\n\n  window.createClient = createClient;\n<\/script>\n")),(0,i.kt)("p",null,"Lastly, you need to connect the ",(0,i.kt)("inlineCode",{parentName:"p"},"Did Mount")," output of your root Group node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Do")," input of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Supabase - Setup Client")," like so:"),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29068).Z,width:"876",height:"656"}))),(0,i.kt)("p",null,"This will set everything up and allow you to use all of the other Supabase components."),(0,i.kt)("h2",{id:"global-variables"},"Global Variables"),(0,i.kt)("p",null,"The Supabase prefab sets up a couple of global Noodl variables for you to work with:"),(0,i.kt)("h3",{id:"supabase_userprofiletablename"},"Supabase_userProfileTableName"),(0,i.kt)("p",null,"This variable is a string and must be set to the name of the table containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_profile")," data in your Supabase instance. Its primary key must be named ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and be of the same type as ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.users.id"),"."),(0,i.kt)("h3",{id:"currentuser"},"currentUser"),(0,i.kt)("p",null,"This variable contains all the data for the currently logged in user. It contains 4 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentUser.loggedIn"),": a boolean containing the current logged in state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentUser.auth"),": an object with all the authentication data for current User"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentUser.session"),": an object with all the session data for current User"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentUser.profile"),": an object with all the data coming from the user profile")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Supabase URL")),(0,i.kt)("td",{parentName:"tr",align:null},"Found in your ",(0,i.kt)("inlineCode",{parentName:"td"},"Supabase Instance -> Settings -> API -> Project URL section"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Supabase Anon Key")),(0,i.kt)("td",{parentName:"tr",align:null},"Found in your ",(0,i.kt)("inlineCode",{parentName:"td"},"Supabase Instance -> Settings -> API -> Project API Keys section"),".")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signals"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Do")),(0,i.kt)("td",{parentName:"tr",align:null},"Starts the initialization of Supabase Client.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signals"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Success")),(0,i.kt)("td",{parentName:"tr",align:null},"Sends a signal when the Supabase client initialization succeeded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Failure")),(0,i.kt)("td",{parentName:"tr",align:null},"Sends a signal when the Supabase client initialization failed with an error message in the console.")))))}m.isMDXComponent=!0},61109:function(e,t,n){t.Z=n.p+"assets/images/keys-4fe083d991bd93c751cab54b354a44fd.png"},52951:function(e,t,n){t.Z=n.p+"assets/images/setup-node-806d02d2e8b224fd776600bb351c0d5d.png"},29068:function(e,t,n){t.Z=n.p+"assets/images/setup-2522a4fd5505d7607835dab42e339262.png"}}]);