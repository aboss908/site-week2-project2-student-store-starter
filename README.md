# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

VIDEO:

https://www.loom.com/share/a864d34e943a4addad68e47dfd6a0565?sid=b7dc131a-e6aa-443b-8fc2-da13787059bc

### Core Features

- [X] The website displays header, banner, search, product grid, about, contact, and footer section.
- [X] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [X] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [X] Users can search for products.
- [X] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [X] Users can click to expand the shopping cart in the left navigation.
- [X] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [X] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [X] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can leave ratings for products they have purchased.)

## *Week 3* Application Features

VIDEO:

https://www.loom.com/share/397a1b3f3d064e48a556f8ab9b5004b9?sid=fb1cff0e-c876-4763-acdd-0185b712dc53

### Core Features

- [X] User can click to expand the shopping cart in the left navigation.
- [X] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [X] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [X] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [X] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [X] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)
