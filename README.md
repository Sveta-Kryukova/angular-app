# Angular App README

This is a simple Angular application that demonstrates various features such as routing, form validation, data listing, and more. The app consists of two main screens: "Login" and "Users," and optionally integrates a service to handle API requests to a third-party API. Als Below are the steps to set up, run, and understand the app.

# [DEMO](https://sveta-kryukova.github.io/angular-app/login)

<kbd><img src="https://github.com/Sveta-Kryukova/angular-app/assets/116656921/7e4d0653-7f13-4799-b8a6-8c4149a69bdc" alt="Users Screen" width="250" height="300"></kbd>
<kbd><img src="https://github.com/Sveta-Kryukova/angular-app/assets/116656921/680c46b3-7f1e-4e56-bc4e-fd27639bf028" alt="Users Screen" width="800" height="300"></kbd>
<kbd><img src="https://github.com/Sveta-Kryukova/angular-app/assets/116656921/2845149a-69db-40bb-aaa1-29947717fbc5" alt="Users Screen" width="300" height="250"></kbd>
<kbd><img src="https://github.com/Sveta-Kryukova/angular-app/assets/116656921/ad3d53e1-e4c1-4433-9965-ff5f53f68160" alt="Users Screen" width="300" height="200"></kbd>


## Table of Contents

- [Getting Started](#getting-started)
- [Login Screen](#login-screen)
- [Users Screen](#users-screen)
- [Single User Page](#single-user-page)
- [API Service](#api-service)

## Getting Started

Follow these steps to set up and run the app locally:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:
   ```sh
   cd your-repo
   ```

3. Install dependencies using npm or yarn:
   ```sh
   npm install
   ```

4. Run the app:
   ```sh
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Login Screen

The "Login" screen allows users to enter their email and password. Upon clicking the login button, the app validates the input and navigates to the "Users" page if the inputs are valid.

- Email: Required and should be in a valid email format.
- Password: Required and should have a minimum length of 6 characters.

## Users Screen

The "Users" screen displays a table of dummy user data. Each row represents a user and includes their ID, name, permissions, and registration date. Users can sort the data by clicking on the column headers.

- Clicking on the "Name" column navigates to the single user page for that user.
- Sorting by columns is possible, except for the "Permissions" column.

## Single User Page

The "Single User" page displays detailed information about a specific user. It retrieves user data from local storage based on the user's ID from the route parameter. This page is accessible by clicking on a user's name on the "Users" screen.

## API Service

An optional API service has been included that handles requests to the [Rest Countries API](https://restcountries.com/#endpoints-all). 
Check it by endpoint /countries

Feel free to explore and modify the code to learn more about Angular's capabilities and to customize the app to your needs.

## Additional Information

This project is built using Angular and showcases features such as routing, form validation, local storage, and optional API integration. If you encounter any issues or have questions, please refer to the official Angular documentation or feel free to reach out for assistance. Happy coding!

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
