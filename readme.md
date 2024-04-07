# Buyed

This is an e-commerce application having two pages: catalog page and settings page

## Hosted Link
https://buyed-ecommapp-ssr.onrender.com

## Catalog Page

The catalog page includes the following features:

- **Navigation Bars**: There are two navigation bars, only one visible at a time, which can be controlled from the settings page.
- **Catalog Display**: The catalog section can be displayed in two ways, which can be controlled from settings page:
  - Carousel with horizontal scrolling for easy navigation.
  - View all, which lists all the products. View-all display is paginated. It fetches the first 10 and implements infinite scroll based on user activity.

- **Product Card**: There are two variants of product cards, controlled from the settings page.

## Settings Page

The settings page allows users to customize various aspects of the application, including:

- **Navigation Bar**: Allows users to switch between different navigation bars (NavBar1, NavBar2).
- **Product Card Variant**: Users can switch between two variants of product cards (type1 and type2).
- **Catalog Display View**: Users can choose between displaying the catalog as a carousel or as a view all list.

## Installation

To install and run the application locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone url
2. Navigate to the project directory:
    ```bash
    cd ./path_to_cloned_repository
3. Install dependencies:
   ```bash
   npm install
4. Start the server:
   ```bash
   npm start
## Usage
 Open your web browser and navigate to the following URL:
-  http://localhost:3000 - home page (catalog page)


- From the settings page, you can customize the navigation bar, product card variant, and catalog display view.




## Technologies Used

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript
