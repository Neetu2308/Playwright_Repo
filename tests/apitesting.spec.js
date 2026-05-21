//Api---application Programming Interface
//it act as bridge in front end and back end
//json is used to send the value
//Keyvalue pair is used 
//request is what we send from UI and server response is the response
//get ,post,patch,put,delete are the request
//get---retrieve data from server
//post---to creat new data
//Put---used to update completly
//Patch--Partially update
//delete-to delete
//If a request is sucess we get 200 status code and 201 is recieved when we do Post
//server error-500
//bad request-400
//Page Not found-404

import { test, expect } from "@playwright/test"
import { request } from "node:http";
test('get api testing', async ({ request }) => {  //request fixture used to do api testing

    const response = await request.get('https://jsonplaceholder.typicode.com/users')//request.get is used to send a get api request
    expect(response.ok()).toBeTruthy();//response.ok >>get true or false //tobeTruthy check if response is tru
    const body = await response.json()//response.json convert response to json fomat
    console.log(body)
    expect(body.length).toBeGreaterThan(0)//verify response is not empty
})


test('post api testing', async ({ request }) => {  //request fixture used to do api testing

    const postresponse = await request.post('https://jsonplaceholder.typicode.com/users', {//request.get is used to send a get api request

        data: {
            Name: 'Neetu',
            email: 'test@123mail.com'
        }
    })
    expect(postresponse.status()).toBe(201)
    const responsebody = await postresponse.json()
    console.log(responsebody)
    //body validation
    expect(responsebody.Name).toBe('Neetu')
})

test('patch api testing', async ({ request }) => {

    const patchresponse = await request.patch('https://jsonplaceholder.typicode.com/users/11', {
        data: {
            Name: 'Neetu'

        }

    })
    expect(patchresponse.status()).toBe(200)
})

test ('put api testing', async ({ request }) => {

    const putresponse = await request.put('https://jsonplaceholder.typicode.com/users/10', {
        data: {
            "id": 11,
            "name": "Clementina DuBuque11",
            "username": "Moriah.Stanton11",
            "email": "Rey.Padberg@karina.biz11",
            "address": {
                "street": "Kattie Turnpike11",
                "suite": "Suite 198_11",
                "city": "Lebsackbury_11",
                "zipcode": "31428-226111",
                "geo": {
                    "lat": "-38.238611",
                    "lng": "57.223211"
                }
            },
            "phone": "024-648-380411",
            "website": "ambrose.net11",
            "company": {
                "name": "Hoeger LLC11",
                "catchPhrase": "Centralized empowering task-force11",
                "bs": "target end-to-end models11"

            }

        }
    })
    expect(putresponse.status()).toBe(200)
})

test.only('delete api testing', async ({ request }) => {
    const deleteresponse = await request.delete('https://jsonplaceholder.typicode.com/users/10', {


    })

expect(deleteresponse.status()).toBe(200)

})