import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const upcomingOnly = searchParams.get("upcoming") === "true";

    const supabase = createServerSupabaseClient();
    let query = supabase
      .from("sessions")
      .select("*, speaker:speakers(*)")
      .eq("is_published", true)
      .order("event_date", { ascending: false });

    if (category && category !== "Semua") {
      query = query.eq("category", category);
    }

    if (upcomingOnly) {
      query = query.eq("is_upcoming", true).limit(1);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase.from("sessions").insert(body).select().single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data, message: "Sesi berhasil dibuat" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
