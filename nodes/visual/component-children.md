# Component Children
Used to mark where children of instances of this component will be placed.
To fully understand this concept it's important to understand node hierarchies.
Visual nodes can be placed in a hierarchy which will cause them to be layouted and drawn appropriately.
To learn how layouts work, take a look at the *Layout* lesson in Noodl.

![](component-children.png)

Any instance of a component that have a *Component Children* placed in its heirarchy will be
able to have children. These children will appear as though they were inserted at the location of
the *Component Children* node.


So if an instance of a component with the visual heirarchy above would have child nodes they would be
inserted as the first children of the *Main Screen* group.