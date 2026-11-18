-- ==============================================================================
-- Jumat.AI.ID Database Schema (PostgreSQL / Supabase)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Speakers Table
CREATE TABLE IF NOT EXISTS public.speakers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    company TEXT,
    avatar_url TEXT,
    bio TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Sessions Table
CREATE TABLE IF NOT EXISTS public.sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_number INT UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('LLM', 'Agentic AI', 'RAG', 'Computer Vision', 'MLOps', 'Research', 'Generative AI', 'Other')),
    event_date DATE NOT NULL,
    start_time TIME WITHOUT TIME ZONE DEFAULT '20:00:00' NOT NULL,
    end_time TIME WITHOUT TIME ZONE DEFAULT '21:30:00' NOT NULL,
    speaker_id UUID REFERENCES public.speakers(id) ON DELETE SET NULL,
    meet_url TEXT,
    youtube_url TEXT,
    slide_url TEXT,
    repo_url TEXT,
    key_takeaways TEXT[],
    is_upcoming BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for searching and date ordering
CREATE INDEX IF NOT EXISTS idx_sessions_event_date ON public.sessions (event_date DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_category ON public.sessions (category);
CREATE INDEX IF NOT EXISTS idx_sessions_is_published ON public.sessions (is_published);

-- 4. Call for Speakers (CFS) Submissions Table
CREATE TABLE IF NOT EXISTS public.cfs_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    topic_title TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    linkedin_url TEXT,
    preferred_date DATE,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'declined', 'scheduled')),
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for reviewing pending submissions
CREATE INDEX IF NOT EXISTS idx_cfs_status ON public.cfs_submissions (status);

-- 5. Topic Wishlist & Voting Table
CREATE TABLE IF NOT EXISTS public.topic_votes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'LLM',
    votes_count INT DEFAULT 1,
    suggested_by TEXT,
    is_covered BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_topic_votes_count ON public.topic_votes (votes_count DESC);

-- 6. Member Projects Showcase Table
CREATE TABLE IF NOT EXISTS public.community_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    creator_name TEXT NOT NULL,
    creator_contact TEXT,
    description TEXT NOT NULL,
    demo_url TEXT,
    github_url TEXT,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cfs_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topic_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_projects ENABLE ROW LEVEL SECURITY;

-- Public can read speakers
CREATE POLICY "Public speakers are viewable by everyone" 
ON public.speakers FOR SELECT USING (true);

-- Public can read published sessions
CREATE POLICY "Published sessions are viewable by everyone" 
ON public.sessions FOR SELECT USING (is_published = true);

-- Anyone can submit a Call for Speaker form
CREATE POLICY "Anyone can submit a CFS" 
ON public.cfs_submissions FOR INSERT WITH CHECK (true);

-- Anyone can read topic wishlist
CREATE POLICY "Topic wishlist viewable by everyone" 
ON public.topic_votes FOR SELECT USING (true);

-- Anyone can submit or upvote a topic
CREATE POLICY "Anyone can submit a topic" 
ON public.topic_votes FOR INSERT WITH CHECK (true);

-- Public can read approved community projects
CREATE POLICY "Approved projects viewable by everyone" 
ON public.community_projects FOR SELECT USING (is_approved = true);

-- Anyone can submit a project for showcase
CREATE POLICY "Anyone can submit a showcase project" 
ON public.community_projects FOR INSERT WITH CHECK (true);
