import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const HARVARD_API_KEY = process.env.API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const artwork = searchParams.get("artwork");

  if (!artwork) {
    return NextResponse.json(
      { error: "No artwork provided" },
      { status: 400 }
    );
  }

  const apiUrl = `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&objectnumber=${artwork}`;

  const res = await fetch(apiUrl);

  if (res.status !== 200) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
