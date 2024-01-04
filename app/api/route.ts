import { NextResponse } from "next/server";

const endpoint =
  "https://manual-case-study.herokuapp.com/questionnaires/972423.json";

export async function GET() {
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return new NextResponse(JSON.stringify(json));
  } catch (error) {
    console.log("[ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
