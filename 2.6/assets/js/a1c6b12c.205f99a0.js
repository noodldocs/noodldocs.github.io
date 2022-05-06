"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3550],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48968:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Query Records"},s=void 0,p={unversionedId:"data/cloud-data/query-records",id:"data/cloud-data/query-records",title:"Query Records",description:"This node is used to fetch a selection of records from the Noodl Cloud Services backend. You can provide a query to define the selection of records you want to retrieve.",source:"@site/nodes/data/cloud-data/query-records.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/query-records",permalink:"/2.6/nodes/data/cloud-data/query-records",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Query Records"},sidebar:"nodeSidebar",previous:{title:"Set Record Properties",permalink:"/2.6/nodes/data/cloud-data/set-record-properties"},next:{title:"Delete Record",permalink:"/2.6/nodes/data/cloud-data/delete-record"}},c={},u=[{value:"Filters",id:"filters",level:2},{value:"Simple Filters",id:"simple-filters",level:3},{value:"Sorting with Simple Filters",id:"sorting-with-simple-filters",level:3},{value:"Advanced filters",id:"advanced-filters",level:2},{value:"Sorting in advanced filters",id:"sorting-in-advanced-filters",level:3},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"query-records"},"Query Records"),(0,o.kt)("p",null,"This node is used to fetch a selection of records from the Noodl Cloud Services backend. You can provide a query to define the selection of records you want to retrieve."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74486).Z,width:"1011",height:"360"}))),(0,o.kt)("p",null,"You can specify the query using filter, sorting and limit in the Property Panel."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(84206).Z,width:"1246",height:"354"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"filters"},"Filters"),(0,o.kt)("p",null,"By default the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," will fetch all ",(0,o.kt)("strong",{parentName:"p"},"Records"),", you can however add a filter. You can choose from a simple filter where you can filter on one or more ",(0,o.kt)("strong",{parentName:"p"},"Record")," properties, or a more advanced JSON based filter syntax, that also can include Javascript logic."),(0,o.kt)("h3",{id:"simple-filters"},"Simple Filters"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Simple")," filters are created through a UI where you select properties and how to filter them in the filter panel."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(47776).Z,width:"898",height:"511"}))),(0,o.kt)("p",null,"Note that you can select if you want the filter to use a static value or a value that comes from an input."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(57027).Z,width:"1197",height:"237"}))),(0,o.kt)("h3",{id:"sorting-with-simple-filters"},"Sorting with Simple Filters"),(0,o.kt)("p",null,"By default the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," does not return the result of a fetch sorted. You can specify sorting. Like filters you add which properties you want to sort on."),(0,o.kt)("p",null,"For each property you can choose the sorting order."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52898).Z,width:"906",height:"538"}))),(0,o.kt)("h2",{id:"advanced-filters"},"Advanced filters"),(0,o.kt)("p",null,"If you choose ",(0,o.kt)("em",{parentName:"p"},"Advanced")," as filter type you will get the option to specify a filter script. This is regular javascript code but you need to end the script by calling the ",(0,o.kt)("em",{parentName:"p"},"where")," function with the filter definition provided. This is done using the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    Completed: { equalTo: true },\n})\n")),(0,o.kt)("p",null,"The above filter will return all ",(0,o.kt)("strong",{parentName:"p"},"Records")," in the collection that has the ",(0,o.kt)("em",{parentName:"p"},"Completed")," property ",(0,o.kt)("em",{parentName:"p"},"true"),". You can select from a number of operators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lessThan")," Less Than"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lessThanOrEqualTo")," Less Than Or Equal To"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"greaterThan")," Greater Than"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"greaterThanOrEqualTo")," Greater Than Or Equal To"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"equaltTo")," Not Equal To"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"notEqualtTo")," Not Equal To"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"containedIn")," Contained In"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"notContainedIn")," Not Contained in"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"exists")," A value is set for the key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"matchesRegex")," Check if a value matches a regex pattern"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"text")," Text search in one or several columns using a text index"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"idEqualTo")," Match the id of the item to a specific id"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"idContainedIn")," Check if the id of the item matches an id in an array of ids"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pointsTo")," Check if the id of the item matches an id in an array of ids"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"relatedTo")," Checks if the item is related to another item, through a ",(0,o.kt)("em",{parentName:"li"},"relation"))),(0,o.kt)("p",null,"For instance, to filter on if a certain property (in this example Letter) is one of many possible values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    Letter: { containedIn: ['A', 'B', 'C'] },\n})\n")),(0,o.kt)("p",null,"Or to filter all ",(0,o.kt)("strong",{parentName:"p"},"Records")," that have a value set for a specific property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    Letter: { exists: true },\n})\n")),(0,o.kt)("p",null,"You can also combine these filters into expressions using ",(0,o.kt)("strong",{parentName:"p"},"and")," and ",(0,o.kt)("strong",{parentName:"p"},"or"),", for instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    and: [{ ZipCode: { exists: true } }, { Score: { greaterThan: 10 } }],\n})\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("strong",{parentName:"p"},"matchesRegex")," operator to filter by regular expression, this is generally slow and not recommended for large sets. Learn more ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/query/regex/"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    SomeString: { matchesRegex: 'pattern', options: 'i' },\n})\n")),(0,o.kt)("p",null,"As mentioned above the filter script is a javascript function so you can provide javascript code if you like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    SomeDate: { equalTo: new Date().toISOString() },\n})\n")),(0,o.kt)("p",null,"You can also specify variables instead of explicitly specifying the filter values, this will create an input port on the ",(0,o.kt)("em",{parentName:"p"},"Query Collection")," node that can then be connected to. You specify variables simply by using the ",(0,o.kt)("strong",{parentName:"p"},"Inputs")," object. The filter below will create an input called MyStringInput."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    SomeString: { equalTo: Inputs.MyStringInput },\n})\n")),(0,o.kt)("p",null,"You can also do text search in strings. This will create an index in the database and text search only works on one property so you have to choose wisely. Also text search matches whole words and must be the first filter in an ",(0,o.kt)("em",{parentName:"p"},"and")," or ",(0,o.kt)("em",{parentName:"p"},"or")," sequence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    SomeString: { text: { search: Inputs.MyStringInput } },\n})\n")),(0,o.kt)("p",null,"You can also toggle case sensitivity for text searches."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    SomeString: {\n        text: {\n            search: {\n                term: Inputs.MyStringInput,\n                caseSensitive: true,\n            },\n        },\n    },\n})\n")),(0,o.kt)("p",null,"If you need to match the ",(0,o.kt)("em",{parentName:"p"},"Id")," of ",(0,o.kt)("strong",{parentName:"p"},"Redcords")," in the collection you need to use the special operation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    idEqualTo: Inputs.TheRecordId,\n})\n")),(0,o.kt)("p",null,"In the above filter you can connect a ",(0,o.kt)("em",{parentName:"p"},"Record Id")," output to the ",(0,o.kt)("em",{parentName:"p"},"TheRecordId")," parameter to fetch just one specific object. You can also request a set of object based on their Id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    idContainedIn: [Inputs.FirstObjectId, Inputs.SecondObjectId],\n})\n")),(0,o.kt)("p",null,"Some properties in your ",(0,o.kt)("em",{parentName:"p"},"Records")," can be of ",(0,o.kt)("em",{parentName:"p"},"Pointer")," type, that means that they reference another ",(0,o.kt)("strong",{parentName:"p"},"Records")," with a specific ",(0,o.kt)("em",{parentName:"p"},"Id"),". If you want to filter out ",(0,o.kt)("strong",{parentName:"p"},"Records")," that point to a specific ",(0,o.kt)("strong",{parentName:"p"},"Records"),", use this syntax. Let's say you have a collection of ",(0,o.kt)("em",{parentName:"p"},"Post")," ",(0,o.kt)("strong",{parentName:"p"},"Records"),", each have a set of ",(0,o.kt)("em",{parentName:"p"},"Comment")," ",(0,o.kt)("strong",{parentName:"p"},"Records")," where each ",(0,o.kt)("em",{parentName:"p"},"Comment")," points back to it's owning ",(0,o.kt)("em",{parentName:"p"},"Post")," via the ",(0,o.kt)("em",{parentName:"p"},"Owner")," property. The filter below will find all ",(0,o.kt)("em",{parentName:"p"},"Comments")," for a ",(0,o.kt)("em",{parentName:"p"},"Post")," given that you provide the post id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    Owner: { pointsTo: Inputs.MyPostId },\n})\n")),(0,o.kt)("p",null,"You can also provide an array if you want to find ",(0,o.kt)("em",{parentName:"p"},"Comments")," that are related to a set of ",(0,o.kt)("em",{parentName:"p"},"Post")," ",(0,o.kt)("strong",{parentName:"p"},"Records"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    Owner: { pointsTo: [Inputs.MyFirstPostId, Inputs.MySecondPost] },\n})\n")),(0,o.kt)("p",null,"Don't forget that you need to send a signal to ",(0,o.kt)("em",{parentName:"p"},"Fetch")," to perform a new fetch with a new filter if any of the filter inputs have changed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Records")," also support many-to-many relationships via ",(0,o.kt)("em",{parentName:"p"},"Relations"),". "," You can filter our all ",(0,o.kt)("strong",{parentName:"p"},"Records")," in the collection you are querying that are related to a specific ",(0,o.kt)("strong",{parentName:"p"},"Record")," via a ",(0,o.kt)("em",{parentName:"p"},"Relation")," with a given key using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    relatedTo: { id: Inputs.MyRecordWithARelation, key: 'the-relation-key' },\n})\n")),(0,o.kt)("h3",{id:"sorting-in-advanced-filters"},"Sorting in advanced filters"),(0,o.kt)("p",null,"To specify the sort order when using advanced filter you run a function called ",(0,o.kt)("em",{parentName:"p"},"sort")," in the filter script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({\n    // You where filter here\n})\n\nsort(['createdAt'])\n")),(0,o.kt)("p",null,'The sort function takes an array with strings specifying the names of the properties you want to sort by. You can prefix the property name with "-" to specify that you want to sort in descending order instead of the default ascending order.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"sort(['-Age', 'createdAt'])\n")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Class")),(0,o.kt)("td",{parentName:"tr",align:null},"Select the ",(0,o.kt)("strong",{parentName:"td"},"Class")," for the types of records this node should query. When the ",(0,o.kt)("strong",{parentName:"td"},"Class")," is selected you can create filters and sorting based on the properties of the ",(0,o.kt)("strong",{parentName:"td"},"Class"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Filter")),(0,o.kt)("td",{parentName:"tr",align:null},"This specifies the type of filter, you can choose from:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Visual"),": Specify your filter using the visual filter editor.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"JavaScript"),": Specify your filter using JavaScript (this is more flexible and you can create more dynamic queyries but it's also more complex)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Use Limit")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable or disable the use of limit, i.e. that you can specify how many records are returned as a maximum and if a number of record should be skipped.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Limit")),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of records to be returned by the backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Skip")),(0,o.kt)("td",{parentName:"tr",align:null},"This property allows you to skip a number of records from being returned by the backend. Using ",(0,o.kt)("strong",{parentName:"td"},"Skip")," and ",(0,o.kt)("strong",{parentName:"td"},"Limit")," allows you to do paging, e.g. return records from 10-20.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Query Parameters")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:qp-","*","##>The input for specifying the value of a query parameter. Each paramteter used in your query will get an input where you can provide a value through a connection.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal here to perform the query and fetch matching records from the backend.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"The result of the query as an array of ",(0,o.kt)("strong",{parentName:"td"},"Records"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Count")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of records in the result.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"First Record Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The Id of the first Record in the result array.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"This output contains the error message incase something when wrong when executing the query.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent here if the query was successful and the result is ready.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent here if something went wrong with the query. You can find the error message via the ",(0,o.kt)("strong",{parentName:"td"},"Error")," output.")))))}m.isMDXComponent=!0},84206:function(e,t,a){t.Z=a.p+"assets/images/query-records-filter-1-0ea28c5464631c2a7d9cece8575d9f3c.png"},47776:function(e,t,a){t.Z=a.p+"assets/images/query-records-filter-2-53587270328af588ad37539ed6cddc7d.png"},57027:function(e,t,a){t.Z=a.p+"assets/images/query-records-filter-3-10f172c0289693e7377154ba45e8d65e.png"},74486:function(e,t,a){t.Z=a.p+"assets/images/query-records-node-fe0da324637edb29e71f6118ec09ab63.png"},52898:function(e,t,a){t.Z=a.p+"assets/images/query-records-sorting-1-5cf8f521a7916bbf57ffbb8c8a8a9cff.png"}}]);