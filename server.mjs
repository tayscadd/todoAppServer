import express from "express";
const app = express();
const PORT = 3000;

const todos = [
    {
        todoID: 0,
        todoName: 'Users can view todos',
        todoStatus: false,
        todoDue: null,
        todoCategory: 'School Work'
    },
    {
        todoID: 1,
        todoName: 'Users can add todos',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 2,
        todoName: 'Users can edit todos',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 3,
        todoName: 'Users can complete todos',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 4,
        todoName: 'User can delete todos',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 5,
        todoName: 'UI shows how many todos there are left to complete',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 6,
        todoName: 'User can delete all completed todos with a button: "Clear Completed Todos"',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    },
    {
        todoID: 7,
        todoName: 'You have to use an array of objects as tyhe source of data.',
        todoStatus: false,
        todoDue: null,
        todoCategory: null
    }
]
let categories = [
    "School Work",
    "Work",
    "Hobby",
    "Other",
    "Testing"
]

app.use(express.json()); // json parser
app.use(express.urlencoded({extended: true})); // urlencoded parser


// Default stuff just to see if the server is running
app.get("/", (req, res) => {
    res.send(`Our server is up and running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/* 
    TODOS
*/
// Get all todos
app.get("/api/todos", (req, res) => {
    res.send(todos);
});

// Update Todos and return the updated list
app.post("/api/todos", (req, res) => {
    if (req.body.todoID) {
        let newTodo = {
            todoID: req.body.id,
            todoName: req.body.name,
            todoStatus: false,
            todoDue: req.body.due,
            todoCategory: req.body.category
        }
        todos.push(newTodo);
        res.send(todos);
    } else {
        res.status(400).send('Invalid todo');
    }
})
// Replace Todos
app.put("/api/todos", (req, res) => {
    if (Array.isArray(req.body)) {
        todos = req.body;
        res.send(todos);
    } else {
        res.status(400).send('Invalid Object Type');
    }
})
// Delete Todo
app.delete("/api/todos", (req, res) => {
    if (todos.includes(req.body)) {
        todos.splice(todos.indexOf(req.body), 1);
        res.send(todos);
    } else {
        res.status(400).send('todo not found');
    }
});
/* 
    CATEGORIES
*/
// Get specific todos of a category
app.get("/api/categories/:category", (req, res) => {
    let category = req.params.category;
    let arrayOfCategory = todos.filter(todo => todo.todoCategory === category);
    res.send(arrayOfCategory);
})
// Get all categories
app.get("/api/categories", (req, res) => {
    res.send(categories);
})
// Add a category and return the updated list
app.post("/api/categories", (req, res) => {
    if (req.body) {
        categories.push(req.body)
        res.send(categories)
    } else {
        res.status(400).send('Invalid category')
    }
})
// Replace categories
app.put("/api/categories", (req, res) => {
    categories = req.body;
})
// Delete category
app.delete("/api/categories/:category", (req, res) => {
    let cat = req.params.category;
    if (categories.includes(cat)) {
        categories.splice(categories.indexOf(cat), 1);
        // Remove all todos with the category
        todos.forEach((todo) =>{
            if (todo.todoCategory === cat) {
                todo.todoCategory = null;
            }
        })
        // Need to send back both the new categories and the updated todos lis
        res.send(categories, todos)
    } else {
        res.status(400).send('category not found');
    }
})

