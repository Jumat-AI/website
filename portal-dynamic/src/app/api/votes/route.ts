import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("topic_votes")
      .select("*")
      .eq("is_covered", false)
      .order("votes_count", { ascending: false });

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
    const { topic_id, action, title, description, category, suggested_by } = body;
    const supabase = createServerSupabaseClient();

    // Case 1: Upvote an existing topic
    if (action === "upvote" && topic_id) {
      // In PostgreSQL/Supabase, we can use an RPC or a read-increment-write
      const { data: topic, error: fetchErr } = await supabase
        .from("topic_votes")
        .select("votes_count")
        .eq("id", topic_id)
        .single();

      if (fetchErr || !topic) {
        return NextResponse.json({ error: "Topik tidak ditemukan" }, { status: 404 });
      }

      const { data, error } = await supabase
        .from("topic_votes")
        .update({ votes_count: (topic.votes_count || 0) + 1 })
        .eq("id", topic_id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ data, message: "Vote berhasil ditambahkan" });
    }

    // Case 2: Submit a new topic suggestion
    if (!title) {
      return NextResponse.json({ error: "Judul topik wajib diisi" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("topic_votes")
      .insert({
        title,
        description,
        category: category || "LLM",
        suggested_by,
        votes_count: 1,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data, message: "Topik baru berhasil diajukan" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
