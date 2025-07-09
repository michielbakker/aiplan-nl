import { useState } from 'react';
import { useSignatories } from '@/hooks/useSignatories';
import { Button } from '@/components/ui/button';

const SignatoriesList = () => {
  const { data: signatories, isLoading, error } = useSignatories();
  const [showPriority2, setShowPriority2] = useState(false);

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

  // Separate priority 1 signatories from priority 2
  const priority1Signatories = signatories.filter(s => s.priority === 1);
  const priority2Signatories = signatories.filter(s => s.priority === 2)
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort priority 2 alphabetically
  
  const hasPriority2 = priority2Signatories.length > 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-black font-space-grotesk mt-0">
        Ondertekenaars van deze oproep ({signatories.length})
      </h2>
      {/* Priority 1 Signatories */}
      <div className="space-y-4">
        <ol className="space-y-2 text-gray-700">
          {priority1Signatories.map((signatory, index) => (
            <li key={signatory.id} className="flex items-start gap-3">
              <span className="text-sm text-gray-500 font-medium mt-1 min-w-[2rem]">
                {index + 1}.
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-base">{signatory.name}</span>
                {signatory.affiliation && (
                  <span className="text-sm text-gray-600">{signatory.affiliation}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Priority 2 Signatories - Collapsible Section */}
      {hasPriority2 && (
        <div className="space-y-4">
          {/* Show/Hide Priority 2 Button */}
          {!showPriority2 && (
            <div className="flex justify-center pb-6">
              <Button
                onClick={() => setShowPriority2(true)}
                variant="outline"
                className="gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-inter text-sm"
              >
                Toon ook alle ondertekenaars sinds de publicatie
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          )}
          
          {/* Priority 2 Section - Header and List */}
          {showPriority2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black font-space-grotesk">
                Ondertekenaars sinds de publicatie
              </h3>
              <ol className="space-y-2 text-gray-700">
                {priority2Signatories.map((signatory, index) => (
                  <li key={signatory.id} className="flex items-start gap-3">
                    <span className="text-sm text-gray-500 font-medium mt-1 min-w-[2rem]">
                      {priority1Signatories.length + index + 1}.
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-base">{signatory.name}</span>
                      {signatory.affiliation && (
                        <span className="text-sm text-gray-600">{signatory.affiliation}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              
              {/* Hide Button */}
              <div className="flex justify-center px-4 pb-6">
                <Button
                  onClick={() => setShowPriority2(false)}
                  variant="outline"
                  className="gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-inter text-sm"
                >
                  Toon minder
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignatoriesList;
