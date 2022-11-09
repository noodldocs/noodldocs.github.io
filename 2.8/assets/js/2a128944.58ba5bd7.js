"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1886],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1075:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Form Validation",hide_title:!0},l="Form Validation",p={unversionedId:"modules/validation/README",id:"modules/validation/README",title:"Form Validation",description:"After adding the module to your project you will have access to the new Validate node. You can find this node in the node picker.",source:"@site/library/modules/validation/README.md",sourceDirName:"modules/validation",slug:"/modules/validation/",permalink:"/2.8/library/modules/validation/",tags:[],version:"current",frontMatter:{title:"Form Validation",hide_title:!0},sidebar:"validationSidebar",next:{title:"Validate",permalink:"/2.8/library/modules/validation/validate"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"A bit more advanced",id:"a-bit-more-advanced",level:2},{value:"Validating objects",id:"validating-objects",level:2}],c={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-validation"},"Form Validation"),(0,i.kt)("p",null,"After adding the module to your project you will have access to the new ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node. You can find this node in the node picker."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"Validating user inputted data in forms and other input fields are a recurring and often tedious process. This module provides a ",(0,i.kt)("a",{parentName:"p",href:"/library/modules/validation/validate"},"Validate")," node with a set of neat tools to make this easier."),(0,i.kt)("p",null,"First let's take a look at a very basic example."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(30771).Z,width:"1174",height:"568"}))),(0,i.kt)("p",null,"Here we introduce the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node and we will use it to validate a simple input field. Using the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node you create a ",(0,i.kt)("em",{parentName:"p"},"schema")," for the inputs that you want to validate, this schema is a property of the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(27203).Z,width:"568",height:"216"}))),(0,i.kt)("p",null,"You edit the schema script by clicking the edit button. The simple schema for this example looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n    Name: string().required('Must provide name.'),\n})\n")),(0,i.kt)("p",null,"This schema has one property ",(0,i.kt)("strong",{parentName:"p"},"Name")," that must be a string and it is required. Each property in the schema will create an input on the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node. The error message can be provided, so if the validation fails that error message is sent on the ",(0,i.kt)("strong",{parentName:"p"},"Name Error")," output."),(0,i.kt)("p",null,"This will result in the following. If there is no ",(0,i.kt)("em",{parentName:"p"},"non empty")," string provided on the ",(0,i.kt)("strong",{parentName:"p"},"Name")," input the ",(0,i.kt)("strong",{parentName:"p"},"Name Error"),' will output "Must provide name."'),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(55057).Z,width:"1084",height:"230"}))),(0,i.kt)("h2",{id:"a-bit-more-advanced"},"A bit more advanced"),(0,i.kt)("p",null,"So that's a very basic example. Now let's take a look at one a little bit more involved."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(52972).Z,width:"1686",height:"998"}))),(0,i.kt)("p",null,"This example has the following ",(0,i.kt)("em",{parentName:"p"},"schema")," script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n    Name: string().required('Must provide name'),\n    Email: string().required('Must provide email').email('Must be valid email'),\n})\n")),(0,i.kt)("p",null,"It's not much more complicated, it has an additional property ",(0,i.kt)("strong",{parentName:"p"},"Email")," that is both require and needs to be a valid email, with provided error messages."),(0,i.kt)("p",null,"A few notes on this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Validate")," nodes ",(0,i.kt)("strong",{parentName:"p"},"Enabled")," input can be used to control if the validation should run or not. If it doesn't run it will not emit any error messages. This is connected to a ",(0,i.kt)("strong",{parentName:"p"},"Switch")," node that is false by default and when the save button is clicked it enables the validation. This a common wanted behavior to not show the error messages while the user is first inputting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Is Valid")," output is used to determin if the form is valid and thus if the submit action should be performed. In this case the ",(0,i.kt)("strong",{parentName:"p"},"Save User")," action is not performed unless the ",(0,i.kt)("em",{parentName:"p"},"Only save if valid")," condition is true.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Email")," outputs from the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node are the ones that are sent to the action. The validation node can also perform modifiers on the property, such as trimming etc and the modified propertys are provided as outputs of the ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Validate")," node is based on the open source library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup")," and in the documentation you can find many more examples. Here are a few others that can be useful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n    Password: string()\n        .required('Must provide password')\n        .matches(\n            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,\n            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'\n        ),\n    ConfirmPassword: string()\n        .required('Must confirm password')\n        .oneOf([ref('Password')], 'Passwords must match'),\n})\n")),(0,i.kt)("p",null,"This can be used to validate that a password is formatted correctly and you can also use this module to make sure that two input fields match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"schema({\n    'Due Date': date().min(new Date(), 'Must be a date in the future'),\n})\n")),(0,i.kt)("p",null,"If you want to use spaces in your property names, make sure they are provided as strings i.e. in quatation marks. This example above tests a date and make sure that it is a date in the future."),(0,i.kt)("h2",{id:"validating-objects"},"Validating objects"),(0,i.kt)("p",null,"You don't need to connect each individual property if you instead have an object that you want to validate you can simply pass the ",(0,i.kt)("strong",{parentName:"p"},"Id")," of the object ot validate."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(53942).Z,width:"1792",height:"806"}))),(0,i.kt)("p",null,"You can use the individual error outputs as shown above, but there is also a collection of all errors in the ",(0,i.kt)("strong",{parentName:"p"},"Errors")," output. This is an array with the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        Property:"The property that has an error",\n        Error:"The error message"\n    }\n]\n')))}m.isMDXComponent=!0},53942:function(e,t,a){t.Z=a.p+"assets/images/object-validation-f5b8ae5ebfc50772177ec5a5d7030183.png"},27203:function(e,t,a){t.Z=a.p+"assets/images/schema-property-8ba63bf8f55d98026f963222a6db13ff.png"},52972:function(e,t,a){t.Z=a.p+"assets/images/sign-up-example-1d7fc89b58169bbafbc06bb5896da10c.png"},55057:function(e,t,a){t.Z=a.p+"assets/images/simple-validate-1-a9285ad1e238ac45caf05c24717ef708.png"},30771:function(e,t,a){t.Z=a.p+"assets/images/simple-validate-323e19934241f151c84b5741a902a6b4.png"}}]);