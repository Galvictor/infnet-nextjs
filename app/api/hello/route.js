export async function GET(request) {

    const {searchParams} = new URL(request.url);

    return new Response(
        JSON.stringify({message: 'Hello, world!', searchParams: Object.fromEntries(searchParams)}),
        {status: 200}
    );
}