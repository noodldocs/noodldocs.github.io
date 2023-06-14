"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8153],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(g,s(s({ref:t},l),{},{components:o})):n.createElement(g,s({ref:t},l))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var d=2;d<a;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},30591:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={title:"Geocoder",hide_title:!0},s="Geocoder",c={unversionedId:"modules/mapbox/guides/geocoder",id:"modules/mapbox/guides/geocoder",title:"Geocoder",description:"Mapbox Geocoder API is a geocoding service that allows developers to convert human-readable addresses into geographic coordinates (latitude and longitude) and vice versa. It is a RESTful API that provides geocoding and reverse geocoding services for worldwide locations. The API uses machine learning and other advanced algorithms to provide accurate and relevant results for address searches. Mapbox Geocoder API can be used in a variety of applications, such as location-based services, logistics and delivery management, real estate, and more. It also offers various features such as autocomplete suggestions, batch geocoding, and custom matching parameters, making it a powerful tool for developers to build location-based applications.",source:"@site/library/modules/mapbox/guides/geocoder.md",sourceDirName:"modules/mapbox/guides",slug:"/modules/mapbox/guides/geocoder",permalink:"/2.8/library/modules/mapbox/guides/geocoder",draft:!1,tags:[],version:"current",frontMatter:{title:"Geocoder",hide_title:!0}},i={},d=[{value:"Create a request to Geocoder API",id:"create-a-request-to-geocoder-api",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geocoder"},"Geocoder"),(0,r.kt)("p",null,"Mapbox Geocoder API is a geocoding service that allows developers to convert human-readable addresses into geographic coordinates (latitude and longitude) and vice versa. It is a RESTful API that provides geocoding and reverse geocoding services for worldwide locations. The API uses machine learning and other advanced algorithms to provide accurate and relevant results for address searches. Mapbox Geocoder API can be used in a variety of applications, such as location-based services, logistics and delivery management, real estate, and more. It also offers various features such as autocomplete suggestions, batch geocoding, and custom matching parameters, making it a powerful tool for developers to build location-based applications."),(0,r.kt)("h2",{id:"create-a-request-to-geocoder-api"},"Create a request to Geocoder API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Define the expected inputs for the script\nScript.Inputs = {\n  Query: "string",\n};\n\n// Define the expected outputs for the script\nScript.Outputs = {\n  Items: "array",\n  Searched: "signal",\n};\n\n// Set the endpoint URL for the Mapbox geocoding API\nconst ENDPOINT = \'https://api.mapbox.com/geocoding/v5/mapbox.places\';\n\n// Define an asynchronous function to make the API request\nasync function makeRequest() {\n  // Get the Mapbox access token from Noodl project settings\n  const access_token = Noodl.getProjectSettings().mapboxAccessToken;\n  \n  // Encode the search query to be URL-safe\n  const search_text = encodeURIComponent(Script.Inputs.Query);\n\n  // Define query parameters for the API request\n  // \n  // Playground by Mapbox to test out all the features:\n  // https://docs.mapbox.com/playground/geocoding\n  //\n  // Here is a list of all the different possible types:\n  //  - address\n  //  - country\n  //  - region\n  //  - postcode\n  //  - district\n  //  - place\n  //  - neighborhood\n  //  - locality\n  //  - poi\n  const queryParams = {\n    access_token, // Provide the access token\n    proximity: "ip", // Bias results towards user\'s location\n    limit: 5, // Maximum number of results to return\n    types: ["address"].join(","), // Filter results to include only addresses\n    fuzzyMatch: true // Enable approximate matching\n  };\n\n  // Construct the query string from the query parameters\n  const query = Object.keys(queryParams)\n    .filter((key) => !!queryParams[key]) // Filter out empty values\n    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)\n    .join(\'&\');\n\n  // Make the API request and get the response as JSON\n  const response = await fetch(`${ENDPOINT}/${search_text}.json?${query}`);\n  const json = await response.json();\n\n  // Map the API response to an array of search results\n  const items = json.features.map((x) => Noodl.Object.create({\n    text: x.text,\n    place_name: x.place_name,\n    // Convert the array of [latitude, longitude] to a Geopoint\n    center: { latitude: x.center[0], longitude: x.center[1] }\n  }));\n\n  Script.Outputs.Items = items;\n  Script.Outputs.Searched();\n}\n\nScript.Signals = {\n  Search() {\n    makeRequest();\n  },\n};\n')))}p.isMDXComponent=!0}}]);