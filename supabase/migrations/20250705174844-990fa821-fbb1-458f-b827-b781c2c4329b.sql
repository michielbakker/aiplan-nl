-- First update the existing data to have unique order values
UPDATE public.signatories 
SET "order" = 2 
WHERE name = 'Jelle Prins';

-- Add unique constraint to the order column
ALTER TABLE public.signatories 
ADD CONSTRAINT unique_signatory_order UNIQUE ("order");