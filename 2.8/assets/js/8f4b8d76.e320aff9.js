"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8153],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||l[m]||a;return n?o.createElement(f,s(s({ref:t},d),{},{components:n})):o.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),s=["components"],c={title:"Geocoder",hide_title:!0},i="Geocoder",u={unversionedId:"modules/mapbox/guides/geocoder",id:"modules/mapbox/guides/geocoder",title:"Geocoder",description:"Mapbox Geocoder API is a geocoding service that allows developers to convert human-readable addresses into geographic coordinates (latitude and longitude) and vice versa. It is a RESTful API that provides geocoding and reverse geocoding services for worldwide locations. The API uses machine learning and other advanced algorithms to provide accurate and relevant results for address searches. Mapbox Geocoder API can be used in a variety of applications, such as location-based services, logistics and delivery management, real estate, and more. It also offers various features such as autocomplete suggestions, batch geocoding, and custom matching parameters, making it a powerful tool for developers to build location-based applications.",source:"@site/library/modules/mapbox/guides/geocoder.md",sourceDirName:"modules/mapbox/guides",slug:"/modules/mapbox/guides/geocoder",permalink:"/2.8/library/modules/mapbox/guides/geocoder",tags:[],version:"current",frontMatter:{title:"Geocoder",hide_title:!0}},d={},l=[{value:"Create a request to Geocoder API",id:"create-a-request-to-geocoder-api",level:2}],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geocoder"},"Geocoder"),(0,a.kt)("p",null,"Mapbox Geocoder API is a geocoding service that allows developers to convert human-readable addresses into geographic coordinates (latitude and longitude) and vice versa. It is a RESTful API that provides geocoding and reverse geocoding services for worldwide locations. The API uses machine learning and other advanced algorithms to provide accurate and relevant results for address searches. Mapbox Geocoder API can be used in a variety of applications, such as location-based services, logistics and delivery management, real estate, and more. It also offers various features such as autocomplete suggestions, batch geocoding, and custom matching parameters, making it a powerful tool for developers to build location-based applications."),(0,a.kt)("h2",{id:"create-a-request-to-geocoder-api"},"Create a request to Geocoder API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Define the expected inputs for the script\nScript.Inputs = {\n  Query: "string",\n};\n\n// Define the expected outputs for the script\nScript.Outputs = {\n  Items: "array",\n  Searched: "signal",\n};\n\n// Set the endpoint URL for the Mapbox geocoding API\nconst ENDPOINT = \'https://api.mapbox.com/geocoding/v5/mapbox.places\';\n\n// Define an asynchronous function to make the API request\nasync function makeRequest() {\n  // Get the Mapbox access token from Noodl project settings\n  const access_token = Noodl.getProjectSettings().mapboxAccessToken;\n  \n  // Encode the search query to be URL-safe\n  const search_text = encodeURIComponent(Script.Inputs.Query);\n\n  // Define query parameters for the API request\n  // \n  // Playground by Mapbox to test out all the features:\n  // https://docs.mapbox.com/playground/geocoding\n  //\n  // Here is a list of all the different possible types:\n  //  - address\n  //  - country\n  //  - region\n  //  - postcode\n  //  - district\n  //  - place\n  //  - neighborhood\n  //  - locality\n  //  - poi\n  const queryParams = {\n    access_token, // Provide the access token\n    proximity: "ip", // Bias results towards user\'s location\n    limit: 5, // Maximum number of results to return\n    types: ["address"].join(","), // Filter results to include only addresses\n    fuzzyMatch: true // Enable approximate matching\n  };\n\n  // Construct the query string from the query parameters\n  const query = Object.keys(queryParams)\n    .filter((key) => !!queryParams[key]) // Filter out empty values\n    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)\n    .join(\'&\');\n\n  // Make the API request and get the response as JSON\n  const response = await fetch(`${ENDPOINT}/${search_text}.json?${query}`);\n  const json = await response.json();\n\n  // Map the API response to an array of search results\n  const items = json.features.map((x) => Noodl.Object.create({\n    text: x.text,\n    place_name: x.place_name,\n    // Convert the array of [latitude, longitude] to a Geopoint\n    center: { latitude: x.center[0], longitude: x.center[1] }\n  }));\n\n  Script.Outputs.Items = items;\n  Script.Outputs.Searched();\n}\n\nScript.Signals = {\n  Search() {\n    makeRequest();\n  },\n};\n')))}m.isMDXComponent=!0}}]);