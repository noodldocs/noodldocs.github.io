# Encoding Parameters In URLs

## What you will learn in this guide
This guide will teach you how to pass parameters in the URL when you are navigating between pages, either as the final part of a path, e.g. "mysite.com#/path/parameter" or as query strings, "mysite.com#/path?parameter1=val1&parameter2=val2".
Noodl is handling this through its [Page Inputs](/nodes/navigation/page-inputs/) node and [Navigate](/nodes/navigation/navigate/) node.

The main reason to encode data needed by a **Page Component** in URLs rather than using regular data nodes is that the data becomes independent of the App state. For example
- If a user refreshes the browser running the App, the data will still be available to the **Page Component** in the URL.
- If a user want to be able to share the exact state of an App with another user, you can encode that state in the URL.

## Overview
The guide will cover the following
- Pass data to a **Page Component** as a **Path Parameter**
- Navigate to a path that is dynamically constructed
- Pass data to a **Page Component** using a **Query Parameter**

The guide assumes that you are familiar with basic Web Navigation concepts and it's suggested that you have already gone through the [Basic Navigation](/guides/navigation/web-navigation/basic-navigation/) and [Multi Level Navigation](/guides/navigation/web-navigation/multi-level-navigatio/) guides before you go through this guide.

We will also use the example app developed as part of the two guides as a starting point in this guide. If you haven't built it already, you can import it by clicking the button below and follow the instructions in Noodl.

<div class="ndl-images">
    <img src="/2.4/guides/navigation/web-navigation/multi-level-navigation/shortcut-1.png" class="ndl-image med"></img> 
<button class="ndl-import-button" onClick='importIntoNoodl("/2.4/guides/navigation/web-navigation/encoding-params-in-url/multi-level-navigation.zip",{name:"Encoding Parameters in URL",thumb:"/2.4/guides/navigation/web-navigation/multi-level-navigation/shortcut-1.png"})'></button>
</div>

## Path Parameters
To demonstrate a typical use of **Path Parameters** we will have to create a list of products to show in our app. 

### Listing Products
The App will focus on Melee weapons.
In the main App component, create a [Static Array](/nodes/data/array/static-array/) node. Make sure its set to `CSV` type. Edit the CSV data and paste in the data from below.

```
name,category,description,price,identifyer
Katana,steel,A classic japanese weapon used by the samurais,2000,katana
Broadsword,steel,A favorite among the medival knights,1800,broadsword
Morning Star,steel,A scary and heavy weapon that require an expert to handle,1200,morning-star
Wooden Club,wood,A cheap and easy to use weapon that's popular among the farmers,50,wooden-club
Bokken,wood,A japanese wooden sword used in Kendo,850,bokken
Fake two handed sword,plastic,Looks real but so much lighter than the real thing,400,fake-sword
Mace for practice,plastic,A plastic mace you can use for training,250,plastic-mace
```
Feel free to add more data to the dataset if you want, as long as the category is one of "steel"/"wood"/"plastic". Also make sure the the "identifyer" value of any new row you add does not contain any whitespaces.

![](static-array.png ':class=img-size-l')

Ok, now lets list the products under the Products page with their category, i.e. any "steel" products should be listed on the products/steel page.

First we put the Products in an Array that we can find anywhere in the app. Create an [Array](/nodes/data/array/array/) node next to the **Static Array**. Give it the **Id** `Products`. Then connect the output **Items** on the **Static Array** to the input **Items** on the **Array**.

![](array-1.png ':class=img-size-l')

Now we will go into the "Steel" Product Page and list the products of the "steel" category. We will use a [Repeater](/nodes/ui-elements/repeater/) and create a list item.

In the steel page, add a **Repater** node as the second child of the group. Also add an **Array** node. Make sure its **Id** is `Products`, i.e. the same array that we filled with the product data. Then connect the **Items** output of the **Array** connects to the **Items** input of the **Repeater**.

![](products-page-1.png ':class=img-size-l')

We will still not see anything because we have no list item that the **Repeater** can use to visualize the items. So lets create a new component, we call it "Product Item". In the new component we add a **Text** node as the only child in the **Group**. Now we need to retrieve the individual **Object** that contains the Product entry. Create an [Object](/nodes/data/object/) node and make sure it gets its **Id** from the repeater node. Also add a property "name" to the **Object**.

![](id-repeater.png ':class=img-size-m')

![](object-1.png ':class=img-size-m')

Finally hook up the **name** output of the **Object** with the **text** property of the **Text** node. We will have something like image below.

![](list-item-1.png ':class=img-size-m')

Now we are ready to go back to the "Steel" page and select our newly created List Item as the List Item of the repeater.

![](repeater-1.png ':class=img-size-m')

If you navigate to the "Steel" page, you should now see a bunch of items popping up. It should look something like this:

![](list-1.png ':class=img-size-m')

We immediately see two things
- The list items need to be styled
- We see all products, not only the ones in the "steel" category

To fix the styling we go back into the "Product Item" component, make sure the **Group** node is **Content Height** (so the list gets a bit more compact). There is plenty of more styling that can be done, but lets settle for now.

Secondly, to filter out the products of the "steel" category, we go back to the "Steel Products" Page Component.

We add in a [Array Filter](/nodes/data/array/array-filter/) node in between the **Array** and **Repater**.

![](products-page-2.png ':class=img-size-l')

And finally we configure the **Array Filter** to only show items where `category = "steel"`.

![](array-filter-1.png ':class=img-size-m')

![](array-filter-2.png ':class=img-size-m')

Now your Steel Page should look something like the one below.

![](list-2.png ':class=img-size-m')

Quickly copy-and-paste the **Array**+**Array Filter**+**Repeater** construction to the "Wood" and "Plastic" page, make sure to update the filter, and we are done with listing the products.

![](sorting.gif ':class=img-size-l')