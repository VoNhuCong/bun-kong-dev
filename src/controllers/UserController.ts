import url from 'node:url';
import { CommonResponse } from '../classes/ResponseFrom';

const CreateUser = async (req: Request) => {
    const data = await req.json()
    console.log("Received JSON:", data)

    return new CommonResponse(true, {
        username: "vonhucong",
        email: "vncong1108@gmail.com"
    })
}

const GetUsers = async (req: Request) => {

    var queryData = url.parse(req.url, true).query;
    console.log(queryData)

    let data = {
        username: "vonhucong",
        email: "vncong1108@gmail.com"
    }

    return new CommonResponse(true, data)
}

const UpdateUser = async (req: Request) => {
    return new CommonResponse(true, {
        username: "vonhucong",
        email: "vncong1108@gmail.com"
    })
}

const DeleteUser = async (req: Request) => {

    return new CommonResponse(true, {
        username: "vonhucong",
        email: "vncong1108@gmail.com"
    })
}

export const UserController = async (req: Request) => {
    const path = new URL(req.url).pathname
    let res = new CommonResponse(null, null)

    switch (path) {
        case "/user/create-user":
            res = await CreateUser(req)
            break
        case "/user/delete-user":
            res = await DeleteUser(req)
            break
        case "/user/update-user":
            res = await UpdateUser(req)
            break
        case "/user/get-users":
            res = await GetUsers(req)
            break
    }

    return res

}