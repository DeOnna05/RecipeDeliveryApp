const db = require('../models');

const items = [
{
    price: 8,
    recipe_name: "French Toast",
    category: "Breakfast",
    description: "Turn any day into a special occassion with French toast that's sure to please. A little bit of cinnamon, nutmeg and vanilla extract make it feel extra fancy.",
    ingredients:'["1 teaspoon ground cinnamon","1/4 teaspoon ground nutmeg","2 tablespoons sugar","4 tablespoons butter","4 eggs","1/4 cup milk","1/2 teaspoon vanilla extract","8 slices challah, brioche, or white bread","1/2 cup maple syrup, warmed"]',
    directions: '["In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly.","In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/26/0/IE0309_French-Toast.jpg.rend.hgtvcom.966.725.suffix/1431730431340.jpeg"
},
{
    price: 5,
    recipe_name: "Classic Deviled Eggs",
    category: "Appetizers",
    description: "Don't fix what ain't broke, right? Simple and classic, this is our most-popular deviled egg recipe ever — and our fans are obsessed with it right now.",
    ingredients:'["6 eggs","1/4 cup mayonnaise","1 teaspoon white vinegar","1 teaspoon yellow mustard","1/8 teaspoon salt","Freshly ground black pepper","Smoked Spanish paprika"]',
    directions: '["Place eggs in a single layer in a saucepan and cover with enough water that there is 1.5 inches of water above the eggs. Heat on high until water begins to boil, then cover, turn the heat to low, and cook for 1 minute. Remove from heat and leave covered for 14 minutes, then rinse under cold water continuously for 1 minute.","Crack egg shells and carefully peel under cool running water. Gently dry with paper towels. Slice the eggs in half lengthwise, removing yolks to a medium bowl, and placing the whites on a serving platter. Mash the yolks into a fine crumble using a fork. Add mayonnaise, vinegar, mustard, salt, and pepper, and mix well.","Evenly disperse heaping teaspoons of the yolk mixture into the egg whites. Sprinkle with paprika and serve."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/6/9/0/CI0103_Classic-Deviled-Eggs.jpg.rend.hgtvcom.826.620.suffix/1479929974560.jpeg"
},
{
    price: 12,
    recipe_name: "Buffalo Chicken Enchiladas",
    category: "Entrees",
    description: "Stuff corn tortillas with a cheesy Buffalo chicken filling for a mashup you'll crave again and again. It's an easy weeknight winner, thanks to rotisserie chicken.",
    ingredients:'["3 tablespoons unsalted butter, melted, plus more for greasing the pan","4 cups shredded rotisserie chicken","8 ounces cream cheese, at room temperature","2 cups shredded Cheddar","1 cup hot sauce, plus more for serving, such as Frank\'s","1 bunch scallions, thinly sliced, white and green parts separated","1/4 teaspoon ground cumin","16 corn tortillas","2 tablespoons crumbled blue cheese","2 tablespoons blue cheese dressing"]',
    directions: '["Preheat the oven to 400 degrees F. Butter a 9-by-13-inch baking dish.","Mix the chicken, cream cheese, 1 cup of the Cheddar, 1/3 cup of the hot sauce, white parts of the scallions and cumin in a large bowl until well combined. Stir together the butter, remaining 2/3 cup hot sauce and 3 tablespoons water in a medium bowl.","Microwave the tortillas in batches until warm, softened and foldable, about 30 seconds. Keep warm between damp paper towels.","Spoon a portion of the chicken mixture down the middle of each tortilla and roll up. Place them side by side, seam-side down, in the prepared pan. Pour the hot sauce mixture over the tortillas. Sprinkle with the remaining 1 cup Cheddar and the blue cheese and bake until the cheese is melted and bubbly, 15 to 17 minutes. ","Drizzle the blue cheese dressing over the enchiladas and sprinkle with the scallion greens. Serve with more hot sauce."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/1/0/FNK_Buffalo-Chicken-Enchiladas-H1_s4x3.jpg.rend.hgtvcom.826.620.suffix/1525187347682.jpeg"
},
{
    price: 7,
    recipe_name: "Apple Crumble",
    category: "Desserts",
    description: "If you are someone who is always stealing the crumbs off the top of the apple crumble, this recipe is for you. We spread the apples out on a sheet pan to maximize the surface area and upped the chewy oats and crumb topping so that every bite has plenty.",
    ingredients:'["7 medium baking apples, such as Gala or Fuji (about 3 pounds)","1 tablespoon fresh lemon juice","1 1/2 cups packed light brown sugar","2 sticks unsalted butter, melted","2 teaspoons ground cinnamon","Kosher salt","2 cups old-fashioned rolled oats","1 1/2 cups all-purpose flour","Vanilla ice cream"]',
    directions: '["Position a rack in the center of the oven and preheat to 425 degrees F. Peel and core the apples, then cut into 1/4-inch-thick slices. Place apple slices on an 18-by-13-inch sheet pan and toss with the lemon juice, 1/4 cup of the brown sugar, 2 tablespoons of melted butter, 1 teaspoon cinnamon, and 1/8 teaspoon salt.","Spread the apples evenly on the pan, cover with foil and bake until the apples have softened and released some liquid, about 20 minutes.","Meanwhile, combine the oats, flour, remaining 1 1/4 cups brown sugar, 1 teaspoon cinnamon, and 1 teaspoon salt together in a large bowl, breaking up any lumps with a fork. Add the remaining melted butter to the oat mixture, stirring with a fork until it is moistened and crumbly.","Carefully uncover the sheet pan and scatter the oat crumble evenly over the top. Bake uncovered until the top is crisp and golden brown and juices are bubbly, about 15 minutes. Serve with ice cream."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/4/2/FNK_Crumble-Lovers-Sheet-Apple-Crumble_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480899711741.jpeg"
},
{
    price: 9,
    recipe_name: "Pancakes",
    category: "Breakfast",
    description: "For the ultimate pancakes, skip on the store-bought mix and make this easy batter instead.",
    ingredients:'["1 1/2 cups all-purpose flour","3 tablespoons sugar","1 tablespoon baking powder","1/4 teaspoon salt","1/8 teaspoon freshly ground nutmeg","2 large eggs, at room temperature","1 1/4 cups milk, at room temperature","1/2 teaspoon pure vanilla extract","3 tablespoons unsalted butter"]',
    directions: '["In a large bowl, whisk together the flour, sugar, baking powder, salt, and nutmeg.","In another bowl, beat the eggs and then whisk in the milk and vanilla.","Melt the butter in a large cast iron skillet or griddle over medium heat.","Whisk the butter into the milk mixture. Add the wet ingredients to the flour mixture, and whisk until a thick batter is just formed.","Keeping the skillet at medium heat, ladle about 1/4 cup of the batter onto the skillet, to make a pancake. Make 1 or 2 more pancakes, taking care to keep them evenly spaced apart. Cook, until bubbles break the surface of the pancakes, and the undersides are golden brown, about 2 minutes. Flip with a spatula and cook about 1 minute more on the second side. Serve immediately or transfer to a platter and cover loosely with foil to keep warm. Repeat with the remaining batter, adding more butter to the skillet as needed.","Procedure for adding fruit to pancakes: Once the bubbles break the surface of the pancakes, scatter the surface with sliced or diced fruit, or chocolate chips, nuts, etc. Flip with a spatula and cook for 1 minute more, being careful not to burn toppings."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/27/0/BW2A05_pancakes_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382375822579.jpeg"
},
{
    price: 11,
    recipe_name: "Soft Asian Summer Rolls with Sweet & Savory Dipping Sauce",
    category: "Appetizers",
    description: "Summer rolls have a shape similar to egg rolls but they're made with softened rice paper, chopped vegetables and herbs — and they're not fried. They make fresh, light starter, perfect for summer, like their name implies.",
    ingredients:'["2 ounces Vietnamese or Thai rice noodles","6 rice paper rounds","1/4 cup, or 12 fresh Thai basil leaves (or regular basil leaves), rinsed and dried","6 medium shrimp, cooked and halved","1/2 cup shredded carrot","1/2 cup, or 12 whole large fresh mint leaves, rinsed and dried","3 red-leaf lettuce leaves, leaves, spines removed, leaving 6 halves","VINEGAR DIPPING SAUCE","1 tablespoon sugar","2 teaspoons warm water","1/4 cup rice vinegar","1 teaspoon chili sauce (recommended: Sriracha)","1 tablespoon lime juice","1 teaspoon fish sauce or low-sodium soy sauce","1 tablespoon finely shredded carrot","1 scallion, thinly sliced"]',
    directions: '["Bring water to a boil and cook rice noodles according to package directions. Drain, rinse and cool (makes about 2 cups).","Line up ingredients in small bowls before beginning to make rolls. Fill a large bowl or saucepan with very warm water. Place a rice paper round in the hot water. Soak for between 30 seconds and 1 minute, or until rice round is pliable and pattern on the round is barely visible. Remove and place on a clean, slightly damp kitchen towel.","Place 2 basil leaves on the inner edge of the rice round, about 1-inch from the edge and leaving about 1-inch on each side. Top with approximately 1/4 cup cooked rice noodles. Place 2 shrimp halves on top. Top with about 2 tablespoons carrots, then 2 leaves of mint. Fold 1 piece of lettuce leaf and place on top of pile. Bring the edge over filling and tuck underneath. As you continue to roll, fold in the sides. Finish rolling, repeat with the other rolls, and reserve under a damp cloth or paper towel. When ready to serve, slice in half and serve, cut ends up, with dipping sauce.","Vinegar Dipping Sauce: Dissolve sugar in warm water, combine with other ingredients, and chill until ready to use."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/8/7/0/EK0309_Asian_Summer_Roll.jpg.rend.hgtvcom.826.620.suffix/1382538509098.jpeg"
},
{
    price: 15,
    recipe_name: "Coconut Shrimp with Tropical Rice",
    category: "Entrees",
    description: "This simple oven-baked coconut shrimp recipe pairs perfectly with a light coconut-scented rice.",
    ingredients:'["Cooking spray","3/4 cup coconut water","3/4 cup jasmati or other long-grain rice","Zest of 1 lime (removed with a vegetable peeler), plus wedges for serving","1/2 cup shredded carrots","2 tablespoons finely chopped red onion or scallions","Kosher salt and freshly ground pepper","1 pound large shrimp, peeled and deveined","1 large egg","1 cup sweetened shredded coconut","3/4 cup panko breadcrumbs","2 tablespoons chopped fresh cilantro"]',
    directions: '["Preheat the oven to 425 degrees F. Line a rimmed baking sheet with foil and set a wire rack on top; coat with cooking spray. Combine 1 cup water, the coconut water, rice and lime zest in a medium saucepan and bring to a boil. Reduce the heat to medium low; cover and simmer 8 minutes. Remove from the heat; add the carrots, red onion, 1/4 teaspoon salt and a few grinds of pepper (do not stir). Cover and let sit 10 minutes, then fluff with a fork to combine. Discard the lime zest.","Meanwhile, season the shrimp with salt and pepper. Beat the egg and 2 tablespoons water in a bowl. Combine the coconut and panko in another bowl. Dip the shrimp in the egg mixture, then the coconut-panko mixture, gently pressing to adhere; transfer to the prepared rack. Bake until the shrimp are cooked through, about 10 minutes.","Turn on the broiler. Broil the shrimp until golden brown, 1 to 2 minutes. Add the cilantro to the rice mixture and toss. Serve with the shrimp and lime wedges."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/12/19/2/FNM_010115-Coconut-Shrimp-with-Tropical-Rice-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1419359241131.jpeg"
},
{
    price: 8,
    recipe_name: "Red Velvet Cake",
    category: "Desserts",
    description: "Add an impressive red velvet layer cake with cream cheese frosting to the traditional Thanksgiving pie spread this year.",
    ingredients:'["2 1/2 cups all-purpose flour","1 1/2 cups sugar","1 teaspoon baking soda","1 teaspoon fine salt","1 teaspoon cocoa powder","1 1/2 cups vegetable oil","1 cup buttermilk, at room temperature","2 large eggs, at room temperature","2 tablespoons red food coloring (1 ounce)","1 teaspoon white distilled vinegar","1 teaspoon vanilla extract","Crushed pecans","CREAM CHEESE FROSTING:","1 pound cream cheese, softened","4 cups sifted confectioners sugar","2 sticks unsalted butter (1 cup), softened","1 teaspoon vanilla extract"]',
    directions: '["Preheat the oven to 350 degrees F. Lightly oil and flour three 9 by 1 1/2-inch round cake pans.","In a large bowl, sift together the flour, sugar, baking soda, salt, and cocoa powder. In another large bowl, whisk together the oil, buttermilk, eggs, food coloring, vinegar, and vanilla.","Using a standing mixer, mix the dry ingredients into the wet ingredients until just combined and a smooth batter is formed.","Divide the cake batter evenly among the prepared cake pans. Place the pans in the oven evenly spaced apart. Bake, rotating the pans halfway through the cooking, until the cake pulls away from the side of the pans, and a toothpick inserted in the center of the cakes comes out clean, about 30 minutes.","Remove the cakes from the oven and run a knife around the edges to loosen them from the sides of the pans. One at a time, invert the cakes onto a plate and then re-invert them onto a cooling rack, rounded-sides up. Let cool completely.","Frost the cake. Place 1 layer, rounded-side down, in the middle of a rotating cake stand. Using a palette knife or offset spatula spread some of the Cream Cheese Frosting over the top of the cake. (Spread enough frosting to make a 1/4 to 1/2-inch layer.) Carefully set another layer on top, rounded-side down, and repeat. Top with the remaining layer and cover the entire cake with the remaining frosting. Sprinkle the top with the pecans.","In a standing mixer fitted with the paddle attachment, or with a hand-held electric mixer in a large bowl, mix the cream cheese, sugar, and butter on low speed until incorporated. Increase the speed to high, and mix until light and fluffy, about 5 minutes. (Occasionally turn the mixer off, and scrape the down the sides of the bowl with a rubber spatula.)","Reduce the speed of the mixer to low. Add the vanilla, raise the speed to high and mix briefly until fluffy (scrape down the bowl occasionally). Store in the refrigerator until somewhat stiff, before using. May be stored in the refrigerator for 3 days."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d26_red_velvet_cake.jpg.rend.hgtvcom.826.620.suffix/1371584132020.jpeg"
},
{
    price: 5,
    recipe_name: "Biscuit Egg-in-a-Hole",
    category: "Breakfast",
    description: "What's better than a hot cheesy biscuit straight from the oven? A hot cheesy biscuit with an egg baked right into it! This recipe makes enough to feed six hungry people, so it's perfect for a hearty breakfast or brunch.",
    ingredients:'["2 1/2 cups all-purpose flour","2 tablespoons baking powder","1 tablespoon sugar", "Kosher salt and freshly ground black pepper","1 1/2 sticks (12 tablespoons) unsalted butter, cut into small pieces and frozen","4 ounces pepper jack cheese, grated","1 small bunch fresh chives, thinly sliced","1 cup buttermilk","Nonstick cooking spray, for the baking sheet","6 round slices Black Forest ham","6 large eggs"]',
    directions: '["Position an oven rack in the center of the oven and preheat to 425 degrees F.","Pulse together the flour, baking powder, sugar and 1 1/2 teaspoons each salt and pepper in a food processor. Add the butter and pulse until pea-sized pieces form. Add the cheese and chives and pulse until just combined. Add the buttermilk and pulse a couple of times until the dough just comes together but is not fully incorporated.","Turn the dough out onto a lightly floured surface and pat together gently into a ball. Use your hands to divide the dough into 6 even pieces. Generously coat a large baking sheet with cooking spray.","Using the baking sheet as your work surface, pat each piece of dough into a 3 1/2-inch round about 3/4 inch thick. Arrange 3 dough rounds along the top long edge of the baking sheet, spacing them out evenly and making sure there is a 1/2-inch space between the dough rounds and the edges of the baking sheet. Arrange the remaining 3 dough rounds in the same fashion along the bottom long edge of the baking sheet. Cut the center out of each round with a 2-inch round cookie cutter. Arrange these smaller rounds evenly across the middle of the baking sheet.","Brush the tops of all the dough pieces with buttermilk and bake until the smaller biscuits are golden, 12 to 15 minutes. Remove them and transfer to a plate.","Lay a piece of ham over each of the large rounds. Push each ham piece down into the hole so that it forms a cup. Crack 1 egg into each of the ham cups. If a little of the egg white spills over, it is okay. Sprinkle the eggs with salt and pepper. Bake, rotating the pan front to back after 5 minutes, until the whites are just set and the yolks are still jiggly when you lightly shake the baking sheet, 8 to 12 minutes more. ","Use a spatula to remove them to individual plates and top each with a smaller biscuit piece for dipping into the egg."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/7/24/0/FNK_Sheet-Pan-Biscuit-Eggs-In-A-Hole-H1-2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1500905763220.jpeg"
},
{
    price: 7,
    recipe_name: "Jerk-Spiced Carrot Dip",
    category: "Appetizers",
    description: "Serve this jerk-spiced dip made with carrots and coconut milk with warm flatbread and a fun tropical drink to transport yourself to a sunny island.",
    ingredients:'["1 pound medium carrots, peeled","1 large yellow onion, peeled and cut into 8 wedges","2 unpeeled garlic cloves","2 tablespoons extra-virgin olive oil","1 tablespoon jerk seasoning","Zest and juice of 1 lime (about 1/2 teaspoon zest and 2 tablespoons juice)","1/4 cup coconut milk, well stirred ","1/2 teaspoon kosher salt","Serving suggestions: Warm flatbread, sliced celery, cucumber and/or bell pepper sticks"]',
    directions: '["Preheat the oven to 425 degrees F and position an oven rack in the middle.","Cut the carrots into 1-inch lengths. Cut any thick pieces in half lengthwise so that the carrot chunks are all about the same size. Gently toss the carrots, onion, garlic cloves, oil and jerk seasoning together on a large baking sheet. Place in the oven and bake until the largest vegetables are very tender and browned in parts, about 50 minutes, flipping once halfway through cooking.","Remove from the oven and cool slightly. Discard any parts of the onion wedges that has become leathery and chewy after from roasting.","Once cooled, remove the garlic cloves from their skins; place garlic in a food processor along with the carrots and onions, lime juice, coconut milk, salt and 2 tablespoons of water.", "Blend until smooth, scraping down the sides of the bowl as needed. Add additional water, 1 tablespoon at a time, until desired consistency is reached.","Transfer the dip to a small serving bowl and garnish with lime zest. Serve with flatbread and vegetables."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/30/0/FNK_Jerk-Spiced-Carrot-Dip_s4x3.jpg.rend.hgtvcom.826.620.suffix/1478160023008.jpeg"
},
{
    price: 14,
    recipe_name: "Lemon-Garlic Shrimp and Grits",
    category: "Entrees",
    description: "You won't find sticks of butter in this comfort food. Don't worry about flavor, though; these shrimp are plenty zesty from the lemon and garlic.",
    ingredients:'["3/4 cup instant grits","Kosher salt and freshly ground black pepper","1/4 cup grated parmesan cheese","3 tablespoons unsalted butter","1 1/4 pounds medium shrimp, peeled and deveined, tails intact","2 large cloves garlic, minced","Pinch of cayenne pepper (optional)","Juice of 1/2 lemon, plus wedges for serving","2 tablespoons roughly chopped fresh parsley"]',
    directions: '["Bring 3 cups of water to a boil in a medium saucepan over high heat, covered. Uncover and slowly whisk in the grits, 1 teaspoon salt and 1/2 teaspoon pepper. Reduce the heat to medium low and cook, stirring occasionally, until thickened, about 5 minutes. Stir in the parmesan and 1 tablespoon butter. Remove from the heat and season with salt and pepper. Cover to keep warm.","Meanwhile, season the shrimp with salt and pepper. Melt the remaining 2 tablespoons butter in a large skillet over medium-high heat. Add the shrimp, garlic and cayenne, if using, and cook, tossing, until the shrimp are pink, 3 to 4 minutes. Remove from the heat and add 2 tablespoons water, the lemon juice and parsley; stir to coat the shrimp with the sauce and season with salt and pepper.","Divide the grits among shallow bowls and top with the shrimp and sauce. Serve with lemon wedges."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/1/1/FNM_120110-WN-Dinners-021_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539568110.jpeg"
},
{
    price: 10,
    recipe_name: "Pecan Squares",
    category: "Desserts",
    description: "These nutty bites travel well, so you can tote them to a faraway Thanksgiving with ease. Dip half of each square in chocolate to make them extra indulgent.",
    ingredients:'["1 1/4 pounds unsalted butter, room temperature","3/4 cup granulated sugar","3 extra-large eggs","3/4 teaspoon pure vanilla extract","4 1/2 cups all-purpose flour","1/2 teaspoon baking powder","1/4 teaspoon salt"]',
    directions: '["Preheat the oven to 350 degrees F.","For the crust, beat the butter and granulated sugar in the bowl of an electric mixer fitted with a paddle attachment, until light, approximately 3 minutes. Add the eggs and the vanilla and mix well. Sift together the flour, baking powder, and salt. Mix the dry ingredients into the batter with the mixer on low speed until just combined. Press the dough evenly into an ungreased 18 by 12 by 1-inch baking sheet, making an edge around the outside. It will be very sticky; sprinkle the dough and your hands lightly with flour. Bake for 15 minutes, until the crust is set but not browned. Allow to cool.","For the topping, combine the butter, honey, brown sugar, and zests in a large, heavy-bottomed saucepan. Cook over low heat until the butter is melted, using a wooden spoon to stir. Raise the heat and boil for 3 minutes. Remove from the heat. Stir in the heavy cream and pecans. Pour over the crust, trying not to get the filling between the crust and the pan. Bake for 25 to 30 minutes, until the filling is set. Remove from the oven and allow to cool. Wrap in plastic wrap and refrigerate until cold. Cut into bars and serve."]',
    image:  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/9/0/ig0708_pecan2.jpg.rend.hgtvcom.826.620.suffix/1371584168051.jpeg"
}
]

db.sequelize.sync({force: true}).then(function() {
    db.recipe.bulkCreate(items).then(function(rows) {
      console.log('\n\nINSERTED\n\n');
    }).catch(function(err) {
      console.log('\n\nError:', err);
    });
  });