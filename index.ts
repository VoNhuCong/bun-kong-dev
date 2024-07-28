import url from 'node:url';
import { UserController } from './src/controllers/UserController';
import { CommonResponse } from './src/classes/ResponseFrom';

const server = Bun.serve({

    async fetch(req) {
        const path = new URL(req.url).pathname

        const userResponse = await UserController(req)
        console.log(userResponse)
        if (userResponse.isOK != null) {
            return Response.json(userResponse, { status: 404 })
        }

        switch (path) {
            case "/":
                return Response.json(new CommonResponse(null, null), { status: 200 })
            default:
                return new Response("Page not found", { status: 404 });
        }
    },
    error(e) {
        console.log("Có lỗi")
        console.log(e.message)
        return new Response('Handled')
    }
})

console.log(`Listening on ${server.url}`);
