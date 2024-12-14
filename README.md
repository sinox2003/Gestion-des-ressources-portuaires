# Project: Gestion des Ressources Portuaires

## Overview

This project is a web application for managing port resources, developed with a Spring Boot backend and an Angular 18 frontend. The application provides functionalities for managing users, ports, terminals, and resources, including human and material resources.

## Prerequisites

- Java Development Kit (JDK) 11 or higher
- Node.js 16 or higher
- Angular CLI 18
- MySQL Server

## Setup Instructions

### 1. Database Setup

1. **Create a Database:**
   - Open your MySQL client and create a new database named `stage`. You can rename it if you prefer.
   - Example:
     ```sql
     CREATE DATABASE stage;
     ```

2. **Run the Backend:**
   - Ensure the backend application is properly configured to connect to your MySQL database. Modify the `application.properties` or `application.yml` file in the backend project to point to your MySQL instance and the `stage` database.
   - Example (`application.properties`):
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/stage
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     spring.jpa.hibernate.ddl-auto=update
     ```

3. **Start the Backend:**
   - Navigate to the backend project directory and run the application using your IDE or via command line:
     ```bash
     ./mvnw spring-boot:run
     ```

4. **Import the SQL Dump:**
   - After the backend has started and the tables have been created, import the provided `Dump20241214.sql` file into the `stage` database.
   - Example:
     ```bash
     mysql -u root -p stage < path/to/Dump20241214.sql
     ```

### 2. Backend Setup

1. **Navigate to the Backend Directory:**
   ```bash
   cd path/to/backend
   ```

2. **Build the Project:**
   ```bash
   ./mvnw clean install
   ```

3. **Run the Application:**
   ```bash
   ./mvnw spring-boot:run
   ```

### 3. Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd path/to/frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   ng serve
   ```

### 4. Access the Application

- Open your web browser and navigate to `http://localhost:4200`.
- Use the following credentials to log in:
  - **Username:** super_admin
  - **Password:** admin

## Features

- **User Management:** Create, update, and delete users with different roles and permissions.
- **Port Management:** Manage port details, including terminals and resources.
- **Resource Allocation:** Allocate and manage human and material resources for various operations.
- **Reporting:** Generate reports on resource utilization and other key metrics.

## Technologies Used

### Backend

- Spring Boot
- Spring Data JPA
- MySQL

### Frontend

- Angular 18
- Angular Material
- Tailwind CSS

## Additional Information

For any issues or questions, please refer to the project documentation or contact the project maintainers.
