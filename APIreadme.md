#Todo App Backend Connection

### The app must perform the basic CRUD Operations to the backend, for BOTH Todos and Categories.
- **Create:** (POST) : Done when creating a new todo. (would return the todos list to be displayed)
- **Read:** (GET) : Done whenever I'm just asking for information from the server and not sending anything
- **Update:** (PUT) : Editing a todo will send a PUT request.
- **Delete:** (DELETE) : Deleteing a todo or clearing todos will send one.

(They don't do anything, but the server will still respond so the client functions will work, since this isn't the database assignment.)


_____

# API Documentation

### Get All Todos
- **URL:** `api/todos`
- **Method:** `GET`
- **Description:** Retrieves the todos.
- **Response:**
    - `Everything Went Well`: Returns the todos array.

### Create Todo
- **URL:** `api/todos`
- **Method:** `POST`
- **Description:** Creates a new todo and returns the new array
- **Request Body:**
    - `id`: The id of the todo.
    - `name`: The name of the todo.
    - `due`: The duedate.
    - `category`: The category the new todo belongs to
- **Response:**
    - `Everything Went Well`: Returns the created new todos array.

### Update Todo
- **URL:** `api/todos`
- **Method:** `PUT`
- **Description:** Replaces existing todos with the sent array.
- **Request Body:**
    - `array`: The new array
- **Response:**
    - `Everything Went Well`: Returns the updated todo array.
    - `400 Error`: If the body is not an array type.

### Delete Todo
- **URL:** `api/todos/:id`
- **Method:** `DELETE`
- **Description:** Deletes a todo by its ID.
- **URL Params:**
    - `id` (required): The ID of the todo.
- **Response:**
    - `Everything Went Well`: If the todo was successfully deleted.
    - `400 Error`: If the todo with the specified ID does not exist.

### Get All Categories
- **URL:** `api/categories`
- **Method:** `GET`
- **Description:** Retrieves a list of all categories.
- **Response:**
    - `Everything Went Well`: Returns an array of category objects.

### Get Category by ID
- **URL:** `api/categories/:category`
- **Method:** `GET`
- **Description:** Retrieves a single category by its name.
- **URL Params:**
    - `category` (required): The name of the category.
- **Response:**
    - `Everything Went Well`: Returns the category object.
    - `400 Error`: If the category with the specified ID does not exist.

### Create Category
- **URL:** `api/categories`
- **Method:** `POST`
- **Description:** Add a category and return the updated list.
- **Request Body:**
    - `name` (required): The name of the category.
- **Response:**
    - `Everything Went Well`: Returns the created category object.
    - `400 Error`: If the category's name is empty.

### Replace Category List
- **URL:** `api/categories`
- **Method:** `PUT`
- **Description:** Replaces the categories list with req.body
- **Request Body:**
    - `array` (required): The new array.
- **Response:**
    - `Everything Went Well`: If the category was successfully replaced.

### Delete Category
- **URL:** `api/categories/:id`
- **Method:** `DELETE`
- **Description:** Deletes a category by its name and returns the categories and todos
- **URL Params:**
    - `id` (required): The name of the category.
- **Response:**
    - `Everything Went Well`: If the category was successfully deleted.
    - `400 Error`: If the category with the specified name does not exist.
