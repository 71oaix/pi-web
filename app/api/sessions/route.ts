import { NextResponse } from "next/server";
import { listAllSessions, listArchivedSessions } from "@/lib/session-reader";

export async function GET() {
  try {
    const [sessions, archived] = await Promise.all([
      listAllSessions(),
      listArchivedSessions(),
    ]);
    return NextResponse.json({ sessions, archived });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}
