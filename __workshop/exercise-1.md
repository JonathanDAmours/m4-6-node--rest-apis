# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint        | method   | Description                             |
| --------------- | -------- | --------------------------------------- |
| `/`             | `GET`    | Homepage.                               |
| `/members`      | `GET`    | List of every members                   |
| `/members`      | `POST`   | Add a new member                        |
| `/members/id`   | `GET`    | A specific member                       |
| `/members/id`   | `DELETE` | Delete a specific member                |
| `/members/id`   | `PUT`    | Update a specific member                |
| `/inventory`    | `GET`    | List of every items in the inventory    |
| `/inventory`    | `POST`   | Add a new item to the inventory         |
| `/inventory/id` | `GET`    | A specific item of the inventory        |
| `/inventory/id` | `DELETE` | Delete a specific item of the inventory |
| `/inventory/id` | `PUT`    | Update a specific item of the inventory |
| `/seats`        | `GET`    | List of every seat in the cafe          |
| `/seats`        | `POST`   | Add a new seat to the cafe              |
| `/seats/id`     | `GET`    | A specific seat in the cafe             |
| `/seats/id`     | `DELETE` | Delete a specific seat in the cafe      |
| `/seats/id`     | `PUT`    | Update a specific seat in the cafe      |

//
The GET method is used to retrieve data from the server. This is a read-only method, so it has no risk of mutating or corrupting the data. For example, if we call the get method on our API, we’ll get back a list of all to-dos.

//
The POST method sends data to the server and creates a new resource. The resource it creates is subordinate to some other parent resource. When a new resource is POSTed to the parent, the API service will automatically associate the new resource by assigning it an ID (new resource URI). In short, this method is used to create a new data entry.
/allmember "GET" List of all the members

//
The PUT method is most often used to update an existing resource. If you want to update a specific resource (which comes with a specific URI), you can call the PUT method to that resource URI with the request body containing the complete new version of the resource you are trying to update.

//
The DELETE method is used to delete a resource specified by its URI.
