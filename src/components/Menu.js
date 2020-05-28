import React from 'react'
import {Header,} from 'semantic-ui-react'

const Menu = () => (
  <>
     <div className="menuContainer">
   <div className="menuTitle">
     <Header.Content as="h1" className="menuHead">Seasonal Offerings</Header.Content>
      <p className="menuMeta">*Custom Menus Upon Request</p>
   </div>
      <div className="apps">
        <Header as="h4" style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Appetizers</Header>
        <p className= "itemHead">Ahi Tostadas</p>
        <p>Seared Ahi tuna, Wonton chips, Asian slaw, honey chipotle aioli</p>
        <p className= "itemHead">Thai Basil Shrimp Pappilettes</p>
        <p>Shrimp, basil, Sweet Sambal dipping sauce</p>
        <p className= "itemHead">Crabcakes</p>
        <p>truffle lime wasabi aioli</p>
        <p className= "itemHead">Catalan Tomato bread</p>
        <p>Toasted baguette, garlic, tomatoes, basil, prosciutto</p>
        <p className= "itemHead">Local Lamb Lollipops</p>
        <p>blackberry jalapeño glaze</p>
        <p className= "itemHead">Seasonal Tartlets & Canapes</p>
        <p>Mushroom tartlets</p>
        <p>Gougeres with Mornay Sauce</p>
        <p className= "itemHead">Charcuterie & Cheese Board </p>
        <p>Cured meats, imported and local cheeses, dried fruit, candied walnuts, fig & date Crostini’s, assorted crackers, Slide Ridge honey, House made mustard. </p>
        <p className= "itemHead">Pulled Pork Sliders</p>
        <p>Slow Roasted Pork, maple bacon bourbon sauce, apple fennel slaw, brioche</p>
      </div>
      <div className="salads">
       <Header as="h4" style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Salads</Header>
        <p className= "itemHead">Classic Kale</p>
        <p> baby kale. Champagne vinaigrette. Pine nuts. Parmesan Reggiano. </p>
        <p className= "itemHead">Beet & Citrus</p>
        <p>Roasted beets. Blood orange. Pomelo. Tangerine. Tuscan greens. Meyer lemon vinaigrette. Candied pistachio.</p>
        <p className= "itemHead">Greens & Radishes</p>
        <p> Tuscan greens. Candied walnuts. Fuji Apple. Shaved beets and radishes. Sherry vinaigrette.</p>
      </div>
      <div className="entrees">
       <Header as="h4" style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Entrees</Header>
       <p className= "itemHead">Braised Pork Shank</p>
       <p>Buffalo glaze, cheddar tots, ranch mousse, apples</p>
       <p className= "itemHead">Grass Fed Beef Bavette</p>
       <p>Barbecue collard greens, hush puppies</p>
       <p className= "itemHead">Tasmanian Ocean trout</p>
       <p>Spaghetti squash, broccolini, chickpeas, celery root Soubise, peperoncini vinaigrette</p>
       <p className= "itemHead">Buttermilk Fried chicken</p>
       <p>Cannelloni and sausage Ragu, escarole, balsamic glaze</p>
       <p className= "itemHead">Mushroom Bolognese</p>
       <p> Truffle mascarpone, basil, fennel, chili oils </p>
      </div>
      <div className="desserts">
       <Header as="h4" style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Desserts</Header>
       <p className= "itemHead">The Babe</p>
       <p>Bacon brownie, peanut butter whipped cream, bruleed bananas, candied bacon </p>
       <p className= "itemHead">Tres Leche Cake</p>
       <p>Caramel coconut jam shortbread cookie & coconut sorbet</p>
       <p className= "itemHead">Vegan Apple Pie </p>
       <p>Aqua fava meringue coconut sorbet coconut jam</p>
       <p className= "itemHead">Peach Champagne Zabione</p>
       <p> Mixed berries & candied Meyer lemon dust</p>
       <p className= "itemHead">The Green Goddess</p>
       <p>Green tea cake, white chocolate ice cream, blueberry compote, blueberry dust</p>
       </div>
      </div>
  </>
)
export default Menu;