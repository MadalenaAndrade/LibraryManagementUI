# LibraryManagementUI

LibraryManagementUI is a web interface built with **React** to consume the [Library Management API](https://github.com/MadalenaAndrade/LibraryManagementAPI) and provide a **user-friendly web interface** for managing library-related resources.
This project was developed to deepen my understanding of frontend fundamentals (**HTML**, **CSS**, and **JavaScript**), and to explore the interaction between frontend and backend systems to display dynamic data effectively.

> **Note:** This project has been published [here](https://libmanagementapi-ashnc2hsh3gma6fc.westeurope-01.azurewebsites.net). Due to API IP restrictions, only **GET** requests are fully functional online. As a learning project, some early implementations may not follow best practices, but I am actively working on improving the codebase and aligning it with React best practices.

## 🚀 Features

- **Responsive Interface**: Adaptable layout for different screen sizes
- **Complete CRUD System**: Interfaces for Creating, Reading, Updating, and Deleting resources
- **Form Validation**: Client-side validation for all input fields before submission
- **Manageable Resources**:
  - Authors
  - Books
  - Book Copies
  - Categories
  - Clients
  - Publishers
  - Rents
  - Rents Receptions

## 🔧 Technologies Used

- **React**: Library for building the user interface
- **React Router**: Navigation between views/pages
- **Vite**: Fast frontend tooling and build system
- **CSS**: Custom styling and layout responsiveness
- **JavaScript/JSX**: Core language for logic and components

## 📦 Additional Libraries

- **Axios**: Handles HTTP requests to the backend API
- **React Icons**: Includes icons like _FaBars_ used for the responsive hamburger menu

## 📋 Current Project Structure

The project follows a modular folder structure for scalability and maintainability: <br>
[**librart-management-webapp**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp) <br>
├─[**public/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/public) # Static assets as SVG/favicon <br>
├─[**src/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src) <br>
│ ├─[**api/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/api) # API setup and Axios base configuration <br>
| ├─[**components/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/components) # Reusable UI elements (forms, buttons, inputs) <br>
| ├─[**config/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/config): Configuration files for form structures and validation rules <br>
| ├─[**hooks/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/hooks): Custom React hooks for shared logic <br>
| ├─[**images/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/pages): Custom-designed icons and visual assets <br>
| ├─[**pages/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/pages): Main application pages <br>
| ├─[**styles/**](https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/library-management-webapp/src/index.css): Global styles for the application <br>
| ├─[**utils/**](https://github.com/MadalenaAndrade/LibraryManagementUI/tree/main/library-management-webapp/src/utils): Utility functions (e.g., formatting, helpers) <br>
| ├─[**App.jsx**](https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/library-management-webapp/src/App.jsx): Main component that manages routes and application navigation <br>
| └─[**main.jsx**](https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/library-management-webapp/src/index.css): React application entry point <br>
└─[**index.html**](https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/library-management-webapp/index.html): Main HTML file that serves as the entry point for the browser <br>

## 🖼️ Screenshots

### HomePage

Responsive layout with adaptive navigation: <br>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/HomePage1.png?raw=true" width="350" alt="HomePage"> <br>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/HomePage2.png?raw=true" width="350" alt="HomePage Reduced window"> <br>

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/HomePage3.png?raw=true" width="175" alt="HomePage on mobile">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/HomePage4.png?raw=true" width="175" alt="NavBar on mobile">
</p>

### Resource Page examples

<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/ResourcePage1.png?raw=true" width="350" alt="Resource Page Example"> <br>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/ResourcePage2.png?raw=true" width="175" alt="Resource Page Example on mobile">

### Forms examples

#### Add Resource

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/AddResource1.png?raw=true" width="175" alt="Add Form Example 1" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/AddResource2.png?raw=true" width="175" alt="Add Form Example 2" style="vertical-align: top">
</p>

#### Get Resource

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/GetResource1.png?raw=true" width="175" alt="Get Form Example 1" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/GetResource2.png?raw=true" width="175" alt="Get Form Example 2" style="vertical-align: top">
</p>

#### Update Resource

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/UpdateResource1.png?raw=true" width="175" alt="Update Form Example 1" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/UpdateResource2.png?raw=true" width="175" alt="Update Form Example 2" style="vertical-align: top">
</p>

#### Delete Resource

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/DeleteResource1.png?raw=true" width="175" alt="Delete Form Example 1" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/DeleteResource2.png?raw=true" width="175" alt="Delete Form Example 2" style="vertical-align: top">
</p>

### Data and API errors displayed

Real-time user feedback from the UI and API (success and error):

<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/AddedSuccess.png?raw=true" width="175" alt="Add success message" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/AddedError.png?raw=true" width="175" alt="Add error message" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/ConfirmDeletetion.png?raw=true" width="175" alt="Confirm deletetion message" style="vertical-align: top">
</p>
<p>
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/DeletedError.png?raw=true" width="175" alt="Delete resource message" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/AllDataPagination.png?raw=true" width="175" alt="Data with pagination" style="vertical-align: top">
<img src="https://github.com/MadalenaAndrade/LibraryManagementUI/blob/main/Screenshots/FieldValidation.png?raw=true" width="175" alt="Input validation message" style="vertical-align: top">
<p>

## 🔄 Current Development Status

✅ Basic application structure <br>
✅ Functional homepage <br>
✅ Navigation between pages <br>
✅ Form validation implementation <br>
✅ Responsive layout <br>
✅ Forms for resources <br>
✅ API integration <br>
✅ Visual feedback for the user <br>
✅ Components refactoration <br>
✅ Website publishing <br>
✅ Testing (may continue in the future) <br>
✅ UI design (may continue in the future) <br>

## 🎨 Design

All icons and images were manually designed for this project, providing a unique and consistent visual identity. <br>
**Copyright Notice**: All visual elements (icons and images) in this project are original creations and are `©Madalena Andrade, 2025`. These assets may be used with proper attribution to the original creator.

## 📝 Notes

While this project is considered feature-complete, further improvements and refinements may be added as I continue learning and exploring frontend development.

> ℹ️ This project was deployed by copying the static files (from `npm run build`) to the `wwwroot/` folder of the [Library Management API](https://github.com/MadalenaAndrade/LibraryManagementAPI). More info on the full deployment setup can be found in that project's README.
> If you'd like to run this project locally without hosting both frontend and backend on the same server, you'll need to update the Axios base URL to point to your API endpoint and ensure that CORS is properly configured on your API project.
