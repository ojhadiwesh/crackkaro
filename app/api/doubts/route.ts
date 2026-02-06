import { NextRequest, NextResponse } from "next/server";

// GET /api/doubts - List doubts for a student
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const studentId = searchParams.get("studentId");
  const tenantId = searchParams.get("tenantId");

  if (!studentId || !tenantId) {
    return NextResponse.json(
      { error: "studentId and tenantId are required" },
      { status: 400 }
    );
  }

  // TODO: Fetch from database using Prisma
  return NextResponse.json({ doubts: [], total: 0 });
}

// POST /api/doubts - Create a new doubt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentId, tenantId, questionText, questionImageUrl } = body;

    if (!studentId || !tenantId || !questionText) {
      return NextResponse.json(
        { error: "studentId, tenantId, and questionText are required" },
        { status: 400 }
      );
    }

    // TODO: Save to database and trigger AI solution generation
    return NextResponse.json(
      { message: "Doubt submitted successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
