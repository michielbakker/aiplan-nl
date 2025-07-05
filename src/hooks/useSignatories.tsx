
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useSignatories = () => {
  return useQuery({
    queryKey: ['signatories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('signatories')
        .select('*')
        .order('order', { ascending: true })
        .order('priority', { ascending: true });
      
      if (error) {
        console.error('Error fetching signatories:', error);
        throw error;
      }
      
      return data;
    },
  });
};
