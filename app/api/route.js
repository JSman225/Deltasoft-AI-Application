import { createClient } from 'redis';
export async function GET(request) {
  const db = createClient({
    password: process.env.REDIS_PW,
    socket: {
      host: 'redis-15284.c321.us-east-1-2.ec2.cloud.redislabs.com',
      port: 15284
    }
  });
  const { searchParams } = new URL(request.url)
  await db.connect();
  try {
    const searchTerm = searchParams.get('id') // Get the search term from the query parameters
    console.log(searchTerm);
    const results = await db.get(searchTerm);


    return Response.json({ results });
  } catch (error) {
    return Response.json({ statusCode: 500, body: error.toString() });
  }
}