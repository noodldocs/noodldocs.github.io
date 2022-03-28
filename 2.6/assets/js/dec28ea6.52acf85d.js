"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2945],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52077:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},l="Form Validation",p={unversionedId:"validation/README",id:"validation/README",title:"Form Validation",description:"Adding the module to your project",source:"@site/modules/validation/README.md",sourceDirName:"validation",slug:"/validation/",permalink:"/2.6/modules/validation/",tags:[],version:"current",frontMatter:{},sidebar:"validationSidebar",next:{title:"validate",permalink:"/2.6/modules/validation/validate"}},d=[{value:"Adding the module to your project",id:"adding-the-module-to-your-project",children:[],level:2},{value:"Guide",id:"guide",children:[],level:2}],u={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-validation"},"Form Validation"),(0,i.kt)("h2",{id:"adding-the-module-to-your-project"},"Adding the module to your project"),(0,i.kt)("p",null,"Since the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node is not part of the default node set in Noodl, we need to add the Form Validation module. Open the Noodl project in which you want to add the module, and import it from the sidebar."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72530).Z,width:"626",height:"874"})),(0,i.kt)("p",null,"Once that's done you'll be able to create the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node."),(0,i.kt)("h2",{id:"guide"},"Guide"),(0,i.kt)("p",null,"Validating user inputted data in forms and other input fields are a recurring and often tedious process. This module provides a ",(0,i.kt)("a",{parentName:"p",href:"/modules/validation/validate"},"Validate")," node with a set of neat tools to make this easier."),(0,i.kt)("p",null,"First let's take a look at a very basic example. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(11642).Z,title:":class=img-size-l",width:"1174",height:"568"})),(0,i.kt)("p",null,"Here we introduce the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node and we will use it to validate a simple input field. Using the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node you create a ",(0,i.kt)("em",{parentName:"p"},"schema")," for the inputs that you want to validate, this schema is a property of the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(90653).Z,title:":class=img-size-m",width:"568",height:"216"})),(0,i.kt)("p",null,"You edit the schema script by clicking the editor button. The simple schema for this example looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n  Name: string().required('Must provide name.'),\n});\n")),(0,i.kt)("p",null,"This schema has one property ",(0,i.kt)("strong",{parentName:"p"},"Name")," that must be a string and it is required. Each property in the schema will create an input on the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node. The error message can be provided, so if the validation fails that error message is sent on the ",(0,i.kt)("strong",{parentName:"p"},"Name Error")," output."),(0,i.kt)("p",null,"This will result in the following. If there is no ",(0,i.kt)("em",{parentName:"p"},"non empty")," string provided on the ",(0,i.kt)("strong",{parentName:"p"},"Name")," input the ",(0,i.kt)("strong",{parentName:"p"},"Name Error"),' will output "Must provide name."'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(57527).Z,title:":class=img-size-l",width:"1084",height:"230"})),(0,i.kt)("p",null,"So that's a very basic example. Now let's take a look at one a little bit more involved."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3330).Z,title:":class=img-size-l",width:"1686",height:"998"})),(0,i.kt)("p",null,"This example has the following ",(0,i.kt)("em",{parentName:"p"},"schema")," script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n  Name: string().required('Must provide name'),\n  Email: string().required('Must provide email').email('Must be valid email'),\n});\n")),(0,i.kt)("p",null,"It's not much more complicated, it has an additional property ",(0,i.kt)("strong",{parentName:"p"},"Email")," that is both require and needs to be a valid email, with provided error messages."),(0,i.kt)("p",null,"A few notes on this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Validate")," nodes ",(0,i.kt)("strong",{parentName:"p"},"Enabled")," input can be used to control if the validation should run or not. If it doesn't run it will not emit any error messages. This is connected to a ",(0,i.kt)("strong",{parentName:"p"},"Switch")," node that is false by default and when the save button is clicked it enables the validation. This a common wanted behavior to not show the error messages while the user is first inputting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Is Valid")," output is used to determin if the form is valid and thus if the submit action should be performed. In this case the ",(0,i.kt)("strong",{parentName:"p"},"Save User")," action is not performed unless the ",(0,i.kt)("em",{parentName:"p"},"Only save if valid")," condition is true.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Email")," outputs from the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node are the ones that are sent to the action. The validation node can also perform modifiers on the property, such as trimming etc and the modified propertys are provided as outputs of the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node is based on the open source library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup")," and in the documentation you can find many more examples. Here are a few others that can be useful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n  Password: string()\n    .required('Must provide password')\n    .matches(\n      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,\n      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'\n    ),\n  ConfirmPassword: string()\n    .required('Must confirm password')\n    .oneOf([ref('Password')], 'Passwords must match'),\n});\n")),(0,i.kt)("p",null,"This can be used to validate that a password is formatted correctly and you can also use this module to make sure that two input fields match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n  'Due Date': date().min(new Date(), 'Must be a date in the future'),\n});\n")),(0,i.kt)("p",null,"If you want to use spaces in your property names, make sure they are provided as strings i.e. in quatation marks. This example above tests a date and make sure that it is a date in the future."))}m.isMDXComponent=!0},72530:function(e,t,a){t.Z=a.p+"assets/images/formvalidation-add-module-af7670107677862c918b9dd5f211417a.png"},90653:function(e,t,a){t.Z=a.p+"assets/images/schema-property-8ba63bf8f55d98026f963222a6db13ff.png"},3330:function(e,t,a){t.Z=a.p+"assets/images/sign-up-example-1d7fc89b58169bbafbc06bb5896da10c.png"},57527:function(e,t,a){t.Z=a.p+"assets/images/simple-validate-1-a9285ad1e238ac45caf05c24717ef708.png"},11642:function(e,t,a){t.Z=a.p+"assets/images/simple-validate-323e19934241f151c84b5741a902a6b4.png"}}]);