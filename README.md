# Description

The ProductApp is a comprehensive Angular-based web application designed to manage products, customers, and their interactions. This application provides a full suite of functionalities including user authentication, product management, and customer engagement, all built on a robust backend powered by ASP.NET Core and Entity Framework.

This project serves as an example of best practices in full-stack development, employing modern Angular for the frontend, with ASP.NET Core managing the backend services, and Entity Framework Core facilitating database operations.

## Tech Stack Summary
```
1. Angular (Frontend framework for building the UI)
2. ASP.NET Core (Backend framework for building RESTful services
3. Entity Framework Core (ORM for database management)
4. SQL Server (Database for persistent storage)
5. NgBootstrap (Bootstrap components for Angular)
6. RxJS (Reactive programming with observables)
7. HTML/CSS/SCSS (For building and styling the UI)
8. TypeScript (Primary language for Angular development)
```
### Principles and Patterns Used:
```
1. MVC (Model-View-Controller): For organizing the backend architecture.
2. Component-Based Architecture: For modular and reusable frontend components.
3. Reactive Forms: For handling complex form validations in Angular.
4. Dependency Injection: To manage services and improve testability.
5. Repository Pattern: For separating data access logic in the backend.
6. Unit of Work Pattern: To group related operations under a single transaction.
7. DTOs (Data Transfer Objects): For transferring data between layers.
8. Responsive Design: Ensuring the application works on various devices.

```
#### Project Architecture Diagram

```
ProductApp/
│
├───ProductAppAngular/
│   ├───src/
│   │   ├───app/
│   │   │   ├───components/
│   │   │   │   ├───login/
│   │   │   │   │   ├───forgot-password/
│   │   │   │   │   │   ├───forgot-password.component.html
│   │   │   │   │   │   ├───forgot-password.component.scss
│   │   │   │   │   │   ├───forgot-password.component.ts
│   │   │   │   │   ├───login.component.html
│   │   │   │   │   ├───login.component.scss
│   │   │   │   │   ├───login.component.ts
│   │   │   │   ├───nav-bar/
│   │   │   │   │   ├───nav-bar.component.html
│   │   │   │   │   ├───nav-bar.component.scss
│   │   │   │   │   ├───nav-bar.component.ts
│   │   │   │   ├───production/
│   │   │   │   │   ├───production.component.html
│   │   │   │   │   ├───production.component.scss
│   │   │   │   │   ├───production.component.ts
│   │   │   │   ├───production-add-modal/
│   │   │   │   │   ├───production-add-modal.component.html
│   │   │   │   │   ├───production-add-modal.component.scss
│   │   │   │   │   ├───production-add-modal.component.ts
│   │   │   │   ├───production-delete-modal/
│   │   │   │   │   ├───production-delete-modal.component.html
│   │   │   │   │   ├───production-delete-modal.component.scss
│   │   │   │   │   ├───production-delete-modal.component.ts
│   │   │   │   ├───production-edit-modal/
│   │   │   │   │   ├───production-edit-modal.component.html
│   │   │   │   │   ├───production-edit-modal.component.scss
│   │   │   │   │   ├───production-edit-modal.component.ts
│   │   │   │   ├───register/
│   │   │   │   │   ├───register.component.html
│   │   │   │   │   ├───register.component.scss
│   │   │   │   │   ├───register.component.ts
│   │   │   │   ├───spinner/
│   │   │   │   │   ├───spinner.component.html
│   │   │   │   │   ├───spinner.component.scss
│   │   │   │   │   ├───spinner.component.ts
│   │   │   │   ├───shared/
│   │   │   │   │   ├───modal/
│   │   │   │   │   │   ├───modal.component.html
│   │   │   │   │   │   ├───modal.component.scss
│   │   │   │   │   │   ├───modal.component.ts
│   │   │   │   │   │   ├───modal.model.ts
│   │   ├───app-routing.module.ts
│   │   ├───app.component.html
│   │   ├───app.component.scss
│   │   ├───app.component.ts
│   │   ├───app.module.server.ts
│   │   ├───app.module.ts
│   ├───index.html
│   ├───main.server.ts
│   ├───main.ts
│   ├───styles.scss
│
├───ProductAppDAL/
│   ├───DatabaseBackup/
│   │   ├───db-backup
│   ├───Entities/
│   │   ├───Product.cs
│   │   ├───User.cs
│   ├───Implementations/
│   │   ├───ProductRespository.cs
│   ├───Interfaces/
│   │   ├───IProductRepository.cs
│   ├───AppContext.cs
│
├───ProductAppCore/
│   ├───DTOs/
│   │   ├───ProductDTO.cs
│   ├───ProductFilterModel.cs
│
├───ProductAppBL/
│   ├───Implementations/
│   │   ├───ProductService.cs
│   ├───Interfaces/
│   │   ├───IProductService.cs
│
├───Product Application/
│   ├───Controllers/
│   │   ├───AuthenticationController.cs
│   │   ├───ProductsController.cs
│   ├───Models/
│   │   ├───CredentialsModel.cs
│   │   ├───ProductModel.cs
│   │   ├───ProductRequestModel.cs
│   ├───Program.cs

```

##### Key Features:


```
1. User Authentication: Secure login and registration with password management.
2. Product Management: Add, edit, delete, and view products with detailed information.
3. Customer Management: Associate customers with products, track orders, and manage customer information.
4. Responsive UI: Built with Angular and Bootstrap, the UI is fully responsive and works seamlessly across different devices.
5. Backend API: RESTful services built using ASP.NET Core, following best practices for scalability and maintainability.
6. Database Management: Leveraging Entity Framework Core to interact with SQL Server, ensuring data integrity and seamless migrations.

```

###### Getting Started

```

To run the project locally:

1. Clone the repository.
2. Navigate to the ProductAppAngular directory and run npm install to install the frontend dependencies.
3. Navigate to the Product Application directory, and set up the database connection string in appsettings.json.
4. Run the Angular frontend using ng serve.
5. Run the ASP.NET Core backend using dotnet run.
6. Open your browser and navigate to http://localhost:4200 to view the application.

```

####### Future Enhancements

```
1. Unit Testing: Implement unit tests for both the backend and frontend.
2. Dockerization: Containerize the application for easier deployment.
3. CI/CD Integration: Automate testing and deployment using GitHub Actions.
