export async function POST() {
  return new Response(
    JSON.stringify({ message: "Payments disabled" }),
    { status: 200 }
  );
}
