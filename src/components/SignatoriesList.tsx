
import { useSignatories } from '@/hooks/useSignatories';

const SignatoriesList = () => {
  const { data: signatories, isLoading, error } = useSignatories();

  if (isLoading) {
    return (
      <div className="space-y-2">
        <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
      </div>
    );
  }

  if (error) {
    console.error('Error loading signatories:', error);
    return (
      <div className="text-gray-500">
        Er is een fout opgetreden bij het laden van de ondertekenaars.
      </div>
    );
  }

  if (!signatories || signatories.length === 0) {
    return (
      <div className="text-gray-500">
        Geen ondertekenaars gevonden.
      </div>
    );
  }

  return (
    <ul className="space-y-2 text-gray-700">
      {signatories.map((signatory) => (
        <li key={signatory.id} className="flex flex-col">
          <span className="font-bold text-base">{signatory.name}</span>
          {signatory.affiliation && (
            <span className="text-sm text-gray-600">{signatory.affiliation}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SignatoriesList;
