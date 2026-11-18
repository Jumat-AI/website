import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, topic_title, category, summary, linkedin_url, preferred_date } = body;

    if (!full_name || !email || !topic_title || !summary) {
      return NextResponse.json(
        { error: "Mohon lengkapi seluruh field wajib (nama, email, judul topik, ringkasan)." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("cfs_submissions")
      .insert({
        full_name,
        email,
        topic_title,
        category: category || "LLM",
        summary,
        linkedin_url,
        preferred_date,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { data, message: "Terima kasih! Pengajuan topik Anda telah diterima tim Jumat.AI." },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
