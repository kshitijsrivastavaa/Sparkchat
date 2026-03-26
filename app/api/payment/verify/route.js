export async function POST() {
  return new Response(
    JSON.stringify({ message: "Payment verification disabled" }),
    { status: 200 }
  );
}

