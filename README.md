# Radium Bugs

This repository holds code examples and explanation about bugs for [Radium](https://github.com/FormidableLabs/radium).

## How to run

To be able to run this project it is important to download repository, open a terminal, go to the root of a project folder and then run next 2 commands:

    npm install
    npm start

This would install needed packages and start a server on [http://localhost:3000](http://localhost:3000/).

## Hover bug

Code for this bug is in *src/components/HoverBug.js*.

1) It's a common practice to have a list of items that can be added or removed from given list. In that case list items often have trash bin icon next to them which on hover changes presentation, in our case it changes colors. At that point, if a user decides to remove an item from a list we immediately show another icon (spinner in our case) while asynchronous action gets done and removes the item from a list. In this code example, we just use the timeout to mock asynchronous action that would happen in a case of an HTTP request. We set the timeout to 3 seconds.

![Hover Bug Gif List](https://github.com/EastCoastProduct/Radium-bugs/blob/master/gifs/hoverBug1.gif)

**EXPLANATION:** In our GIF presentation above we are showing how does a trash bin icon change color on hover. Because we are controlling our styles using Radium library we define our hover styles with ':hover' property inside radium style object that we dedicate to trash bin HTML (JSX) element using style attribute. Upon clicking on trash icon we show immediately spinner icon and therefore trash icon stays in hover mode. If we move mouse pointer away from spinner icon (and the place where trash icon used to be) and then we wait for 3 seconds of timeout to run out, we would see an item getting removed from the list, but the trash icon on that same position will still have hover styles applied although it shouldn't. This wouldn't happen in a case of CSS. The problem seems to be the fact that we applied hover attributes on mouseover event but then we removed that item from the DOM tree and thus that style object applied to the item. In my opinion, at that point, it should immediately reset it's styling back to ones without hover attribute as this way we do not have mouseout event that would reset it's styles back to normal. The only way to do that would be to hover over again and move mouse pointer out.

2) One more example of what it seems to be a similar bug is while adding a new item. Usually, when adding a new item to the list we have an input with a button to submit the item and add it to the list. In that case, a button can have 3 different styles. One is normal style, the second one is upon hover and the third one can be the disabled style which applies when a button is disabled during an asynchronous process of adding the new item to the list. After asynchronous action gets done we enable button again and remove disabled style from it and we go back to normal or hovered.

![Hover Bug Gif Input](https://github.com/EastCoastProduct/Radium-bugs/blob/master/gifs/hoverBug2.gif)

**EXPLANATION:** This GIF presentation shows how button changes color when getting hovered. At the point when a user wants to add a new item to the list and presses a button, it will start asynchronous action of adding an item to the list and disabling button. At that point, we add disabled styles to the button and remove normal style. Again, same as in the example above seems like normal styles get stuck to hovered styles. If we move cursor away while button is disabled and wait for asynchronous action to finish we would see button getting back to old, normal styles and it will have it's styling as if it's still hovered which in this case is an obvious bug.

## Index Link Bug

Code for this bug is in *src/components/IndexLinkBug.js*.

Using React Router is a very common use case. In that case, we have to use Link and IndexLink components from React Router module if we want to have links pointing to a certain route. To be able to style these components it is important to wrap each of those components with Radium:

    import Radium from 'radium';
    import { Link as RRLink, IndexLink as RRIndexLink } from 'react-router';

    const Link = Radium(RRLink);
    const IndexLink = Radium(RRIndexLink);

![Hover Bug Gif](https://github.com/EastCoastProduct/Radium-bugs/blob/master/gifs/indexLinkBug.gif)

Now it's possible to style each of these components with Radium. So, we have a navigation menu on top of our application which has 4 items. The first link in the menu is IndexLink as it's pointing to our default opening page, other 3 are regular Link components. All 4 items are sharing same Radium style object and they can have 3 different styles, normal, hovered and active. All they do is color change in case of different states. For Link components all 3 states do work, but for IndexLink component hover state never works. If we click on any other menu item other than Hover Bug that item will be active. Now, if we try to hover over other menu items, Link items do get hover styles but IndexLink doesn't for some reason. I do not have any explanation why is this happening.
