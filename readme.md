# Book API
- Create a backend system of an ecommerce company which sells books online. The user should be able to get the list of all books available on the website and make a purchase with a maximum of 10 books in an order.

## Basic Features
- Register a Book (make an entry for book)

- Get all books with pagination

- Create a sales order which will have basic information of the user, total amount and a
list of books along with quantity.

- Get a sales order by ID.


## How to install and run?

1. Clone this project
2. Start by installing npm and mongoDB if you don't have them already.
3. Run the Mongo Server or you can use mongodb atlas.




4. run following commands :

```
npm install
npm start or node index.js
```

## How to use API (Understanding the end points)? (!!Important in understanding API)

#### Base URL : `http://localhost:8000/book-website`
#### Base URL heroku deployed : `https://book-order-api.herokuapp.com/book-website`

#### End Points :

1. `/register` (POST) : Creates an entry for Book.<br>
 Example input : <br>

   ```json
   {
    "id": "twenty",
    "name": "book19",
    "amount": 201
    }
   ```

Example output : <br>

```json
    {
        "success": true,
        "message": "book registered",
        "data": {
            "_id": "61e477ba8a244549efab6303",
            "id": "sixteen",
            "name": "rahul",
            "amount": 171,
            "createdAt": "2022-01-16T19:53:30.502Z",
            "updatedAt": "2022-01-16T19:53:30.502Z",
            "__v": 0
        }
    }
```

2. `get-books/all-books` (POST) : Get all books <br>
    We can set Limit by passing limit in body <br>
    Example : ``` {"id":["one","two"] , "limit":"1"} ```
    Example input : <br>

   ```json
   {"id":["one","two"]}
   ```
   Example output : <br>

```json
{
    "success": true,
    "message": "books data fetched",
    "data": [
        {
            "_id": "61e453b453609e9fe7905dfe",
            "id": "one",
            "name": "book1",
            "amount": 100,
            "createdAt": "2022-01-16T17:19:48.296Z",
            "updatedAt": "2022-01-16T17:19:48.296Z",
            "__v": 0
        },
        {
            "_id": "61e453c853609e9fe7905e02",
            "id": "two",
            "name": "book2",
            "amount": 101,
            "createdAt": "2022-01-16T17:20:08.180Z",
            "updatedAt": "2022-01-16T17:20:08.180Z",
            "__v": 0
        }
    ]
}
```

3. `/order/order-books` (POST) : Create order for books. <br>
   Example input : <br>

   ```json
   {"id":["one","two"] , "userName" : "nick" , "orderId" : "seven"}
   ```

   Example output : <br>

   ```json
   {
    "success": true,
    "message": "Order Created",
    "data": {
        "_id": "61e479418a244549efab630a",
        "orderId": "seven",
        "name": "nick",
        "amount": 201,
        "books": [
            "book1",
            "book2"
        ],
        "totalQuantity": 2,
        "createdAt": "2022-01-16T20:00:01.557Z",
        "updatedAt": "2022-01-16T20:00:01.557Z",
        "__v": 0
    }

   ```

4. `order/sales-order` (POST) : Displays Sales order.

   Example input <br>
   ```json
   {"orderId" : "first"}
   ```

   Example output : <br>

   ```json
    {
        "success": true,
        "message": "Sales order fetched",
        "data": [
            {
                "_id": "61e46283edf0d245f11de624",
                "orderId": "first",
                "name": "nishant",
                "amount": 303,
                "books": [
                    "book1",
                    "book2",
                    "book3"
                ],
                "createdAt": "2022-01-16T18:22:59.247Z",
                "updatedAt": "2022-01-16T18:22:59.247Z",
                "__v": 0
            }
        ]
    }
   ```



## Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

`/routes` - containes all the routes. <br>
`/controllers/` - containes api files <br>
`/model` - to store data in db we need models. <br>
`/config` - contains config files for mongoose <br>

Feel free to use and contribute! :)