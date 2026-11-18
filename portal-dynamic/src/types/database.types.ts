export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      speakers: {
        Row: {
          id: string;
          name: string;
          role: string;
          company: string | null;
          avatar_url: string | null;
          bio: string | null;
          linkedin_url: string | null;
          github_url: string | null;
          website_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          company?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          linkedin_url?: string | null;
          github_url?: string | null;
          website_url?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["speakers"]["Insert"]>;
      };
      sessions: {
        Row: {
          id: string;
          session_number: number | null;
          title: string;
          description: string;
          category: string;
          event_date: string;
          start_time: string;
          end_time: string;
          speaker_id: string | null;
          meet_url: string | null;
          youtube_url: string | null;
          slide_url: string | null;
          repo_url: string | null;
          key_takeaways: string[] | null;
          is_upcoming: boolean;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_number?: number | null;
          title: string;
          description: string;
          category: string;
          event_date: string;
          start_time?: string;
          end_time?: string;
          speaker_id?: string | null;
          meet_url?: string | null;
          youtube_url?: string | null;
          slide_url?: string | null;
          repo_url?: string | null;
          key_takeaways?: string[] | null;
          is_upcoming?: boolean;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["sessions"]["Insert"]>;
      };
      cfs_submissions: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          topic_title: string;
          category: string;
          summary: string;
          linkedin_url: string | null;
          preferred_date: string | null;
          status: "pending" | "approved" | "declined" | "scheduled";
          admin_notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          topic_title: string;
          category: string;
          summary: string;
          linkedin_url?: string | null;
          preferred_date?: string | null;
          status?: "pending" | "approved" | "declined" | "scheduled";
          admin_notes?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["cfs_submissions"]["Insert"]>;
      };
      topic_votes: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          category: string;
          votes_count: number;
          suggested_by: string | null;
          is_covered: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          category?: string;
          votes_count?: number;
          suggested_by?: string | null;
          is_covered?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["topic_votes"]["Insert"]>;
      };
      community_projects: {
        Row: {
          id: string;
          title: string;
          creator_name: string;
          creator_contact: string | null;
          description: string;
          demo_url: string | null;
          github_url: string | null;
          is_approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          creator_name: string;
          creator_contact?: string | null;
          description: string;
          demo_url?: string | null;
          github_url?: string | null;
          is_approved?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["community_projects"]["Insert"]>;
      };
    };
  };
}
