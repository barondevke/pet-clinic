# PET CLINIC BACKEND IMPLEMENTATION

## Overview
This backend is built using Java with Spring Boot and follows a layered architecture. It manages users and pet appointments, providing RESTful APIs for frontend clients. The backend connects to a relational database using JPA (Java Persistence API) and Spring Data.

## Main Comonents

### 1.  Application Entry Point
- **PetClinicApplication.java**
    -Where the whole project runs from.
    -Contains 'main' method which initializes all components

### 2. Models (Entities)
- **User.java**
 - Represents a user in the system
 - Contains attributes: 'id', 'username', 'password', 'name'.
 - Is mapped to a table users, "@Table"
 - Encapsulates data with private fileds.
- **Appoitment.java**
 - Is mapped to a table in the database called appointments
 - The said table contains columns pet_name, type, owner name, reason, date and time

### 3. Repositories - middle men between java and database
- **AppointmentRepository.java**
 - Extends `JpaRepository<User, Long>`.
 - Create, Read, Update, Delete operations for the Appointment Table
 - Custom method: `findByStatus(String status)`.
- **UserRepository.java**
 - Extends `JpaRepository<User, Long>`.
 - Provides Create, Read, Update, Delete operations for User Table
 - Custom method: `findByUsername(String username)`.

### 4. Services
- **UserService.java**
 - Checks if user exists, logic for user registration and authentication
 - Imports `UserRepository` to use it for database operations
 - Methods: `register(AuthRequest request)`, `authenticate(AuthRequest request)`.
- **AppointmentService.java**
 - Handles business logic for creating, completing, and retrieving appointments.
 - Uses `AppointmentRepository` for database operations.
 - Methods: `createAppointment`, `completeAppointment`, `getAppointmentsByStatus`, `getAllAppointments`.

### 5. Controllers
- **AuthController.java**
 - Handles user authentication, i.e. Signup and Signin
 - Uses logic from userService.
 - Calls `userService.register(request)` to handle registration.
 - Checks credentials using `userService.authenticate(request)`.
- **AppointmentController.java**
 - Endpoints: create, get by status, complete, get all.
 - Delegates logic to `AppointmentService`.
- **AuthRequest.java**
 - DTO carrying email and password from frontend to backend.
 ```java
 @PostMapping("/signup")
    public String signup(@RequestBody AuthRequest request) {//It is a parameter here in AuthController.java
        userService.register(request);
        return "User registered successfully";
    }
```

### 6. Configuration
- **WebConfig.java**
 - Configures CORS (Cross-Origin Resource Sharing) to allow frontend (e.g., React on `localhost:3000`) to access backend APIs.
- **SecurityConfig.java**
 - Configures basic security settings.
 - Disables CSRF for simplicity.
 - Allows public access to authentication and appointment endpoints.
 - Secures other endpoints.

---



### OOP PRINCIPLES (With code examples)

### ENCAPSULATION
Encapsulation is the process of keeping fields private and exposing them by the use of getters/setters
e.g. `User.java` and `AuthRequest.java`

```java
// User.java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String name;

    public Long getId() { return id; }
    public void setUsername(String username) { this.username = username; }
    // ...other getters and setters...
}

//AuthRequest.java
public class AuthRequest {
    public String username;
    public String password;
    // public String name; // only needed for signup

    //constructor
    public AuthRequest() {}

    public AuthRequest(String username, String password){
        this.username = username;
        this.password = password;
    }

    // Getters and Setters
    public void setUsername(String username){
        this.username = username;
    }

    public String getUsername(){
        return username;
    }}//other getters ans setters
```

## INHERITANCE
It is when a class/interface extends a parent class, e.g. the `UserRepository.java` and `AppointmentRepository.java` both extend `JpaRepository`

```java
// UserRepository.java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
```

## POLYMORPHISM 
When an object, class, or function is implemented differenly either by overridding or overloading e.g `userRepository` is called in UserService and is overidden to either help in register or authentication

```java
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(AuthRequest request) {
        //userrepository overidden
        if (userRepository.findByUsername(request.username).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        //other code
    }

    public boolean authenticate(AuthRequest request) {
        //userrepository overidden 
        return userRepository.findByUsername(request.username)
                .map(u -> u.getPassword().equals(request.password))
                .orElse(false);
    }
}

```

## ABSTRACTION
Involves hiding certain details and showing only essential information to the user, e.g in `userService.java` in which it is an abstraction layer over the database logic, in that raw databse querries are not exposed, and data  fetching/saving is delegated to `userRepository`

```java
@Autowired
    private UserRepository userRepository;

    public User register(AuthRequest request) {
        if (userRepository.findByUsername(request.username).isPresent()) {
            throw new RuntimeException("Username already exists");
        }}
//The process of finding a user by username is abstracted and assigned to userRepsoitory
```


### SOLID PRINCIPLES (With code snippets)

## 1. Single Responsibility Principle (SRP)
Each class should only have one responsibility/function e.g `userService.java` only handles user logic and doesnt deal with things to do with appointments
`AuthController.java` handling authentication-related HTTP requests, and delegating other woth to userService

```java
// UserService.java
public class UserService {
    // Only user-related business logic
}

//AuthController.java
@Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody AuthRequest request) {
        userService.register(request);
        return "User registered successfully";
    }
```

## 2. Open/Closed Principle (OCP)
Enables adding of new service implementations without changing the exsiting code e.g `AppointmentRepository.java`, `AppointmentController.java` and `UserRepository.java` which enables adding of new functionality without modifying the existing code

```java
//AppointmentRepository.java
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByStatus(String status);

    //new functionality
    List<Appointment> findByVetName(String vetName);

}

//AppointmentController.java
 @GetMapping
public ResponseEntity<List<Appointment>> getAllAppointments() {
    List<Appointment> appointments = appointmentService.getAllAppointments();
    return ResponseEntity.ok(appointments);

   

}

 //added new functionlaity without modifying former code instead of modifying the method for added functionality i just create a NEW ONE
 @GetMapping("/upcoming")
public ResponseEntity<List<Appointment>> getUpcomingAppointments() {
    List<Appointment> upcoming = appointmentService.getUpcomingAppointments();
    return ResponseEntity.ok(upcoming);
}

```

## 3. Liskov Substitution Principle (LSP)
Objects of a super-class should  be replacable with objects of its subclasses without altering the correctness of the program e.g `UserRepsoitory.java`
In that i can pass `userRepository` anywhere `JpaRepository<User, Long>` is expected

```java
public void processUsers(JpaRepository<User, Long> repo) {
    repo.findAll(); // works
}

// passing userRepsitory as an argument
processUsers(userRepository);
```

## 4. Interface Segregation Principle (ISP)
Classes should not be forced to depend on interfaces they do not use, in that they should be small, focused and tailored to specific functionalitites. e.g `UserRepository.java` making a register and authenticate interface so that in any case it needs to be used, the whole of the userService interface should not be called

```java
//UserRegistrationService.java
package com.example.pet_clinic.service;

import com.example.pet_clinic.controller.AuthRequest;
import com.example.pet_clinic.model.User;

public interface UserRegistrationService {
    User register(AuthRequest request);
}
 //UserAuthenticationService.java
 package com.example.pet_clinic.service;

import com.example.pet_clinic.controller.AuthRequest;

public interface UserAuthenticationService {
    boolean authenticate(AuthRequest request);
}
```

## 5. Dependancy Inversion Principle (DIP)
High level modules do not depend on low level modules and both should depend on abstractions
e.g `AppointmentService` which depends on `AppointmentRepository`(interface)

```java
//AppointmentService.java
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;
    /// other code
}

//AppointmentRepository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> { //interface
    List<Appointment> findByStatus(String status);

}
```

## DevOps Principles and Practices (with snippets)

- **Separation of Concerns**: Each layer(controller, service, repository) is in its own package and file each handling their own functionalities

- **Configuration as Code**: Security and CORS are configured in Java, not manually on servers
```java
  // WebConfig.java
  @Configuration
  public class WebConfig { /* ... */ }
  ```

## Division OF Work in the Back-end

## 1 
User.java, UserRepository.java, UserService.java

## 2
Appointment.java, AppointmentRepository.java

## 3
AppointmentController.java, AuthController.java, AuthRequest.java

## 4 (configurations)
WebConfig.java, SecurityConfig.java

## 5 entry point
PetClinicApplication.java, AppointmentService.java


