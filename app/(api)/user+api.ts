import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    console.log(process.env.DATABASE_URL);
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("-------user+api---------");
    console.log(name, email, clerkId);

    const response =
      await sql`INSERT INTO users ( name, email, clerk_id ) VALUES (${name}, ${email}, ${clerkId});`;
    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err }, { status: 500 });
  }
}
