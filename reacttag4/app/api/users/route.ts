const URL = process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL:""

export async function GET(req, res){

    try {

        const response = await fetch(URL);
        const data = await response.json()

        return Response.json(data)
    } catch (err) {
        console.log("error ", err)
    }



}

export async function POST(req){

    const body = await req.json()

    console.log("body", body)

    try{
        const response = await fetch(`URL/${body.userId}`);
        console.log("res", response)
    }catch(err){
        console.log("err", err)
    }
}