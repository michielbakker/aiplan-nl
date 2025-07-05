
-- Create a table for signatories
CREATE TABLE public.signatories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  affiliation TEXT,
  "order" INTEGER NOT NULL DEFAULT 1,
  priority INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for efficient ordering
CREATE INDEX idx_signatories_order ON public.signatories ("order" ASC);
CREATE INDEX idx_signatories_priority ON public.signatories (priority ASC);

-- Insert the initial data
INSERT INTO public.signatories (name, affiliation, "order", priority) VALUES
  ('Michiel Bakker', 'Assistant Professor, MIT', 1, 1),
  ('Jelle Prins', 'Co-Founder, Cradle', 1, 2);
