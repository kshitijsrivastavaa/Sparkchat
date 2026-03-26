export async function POST() {
  return new Response(
    JSON.stringify({ message: "Payments disabled for now" }),
    { status: 200 }
  );
}
