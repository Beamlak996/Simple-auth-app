

export const POST = async (request: Request)=>{
    const body = await request.json()
    const {name, email, password} = body
}