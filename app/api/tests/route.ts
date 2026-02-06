import { NextRequest, NextResponse } from "next/server";

// GET /api/tests - List tests for a tenant
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const tenantId = searchParams.get("tenantId");

  if (!tenantId) {
    return NextResponse.json(
      { error: "tenantId is required" },
      { status: 400 }
    );
  }

  // TODO: Fetch from database using Prisma
  return NextResponse.json({ tests: [], total: 0 });
}

// POST /api/tests - Create a new test (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tenantId, title, subject, durationMinutes, questions } = body;

    if (!tenantId || !title || !subject || !durationMinutes || !questions) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Save to database using Prisma
    return NextResponse.json(
      { message: "Test created successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
