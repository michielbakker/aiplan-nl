import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
  return (
    <>
      {/* Top navigation header with logo */}
      <header className={`flex justify-between items-start p-8 max-md:p-5 max-sm:p-4 ${className}`} style={{ marginBottom: '8px' }}>
        <div className="ai-plan-logo">
          <svg
            width="147"
            height="43"
            viewBox="0 0 147 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[147px] h-[43px]"
            aria-label="AI Plan Logo"
          >
            <path
              d="M20.8548 0L0 21.256H20.8548V42.512L41.7096 21.256V0H20.8548ZM37.1653 18.3085H24.2974V5.19313H37.1653V18.3085Z"
              fill="#0C0011"
            />
            <path
              d="M133.442 25.6532V11.7507H136.291V13.8375H136.742C137.005 13.2735 137.475 12.7471 138.152 12.2583C138.829 11.7695 139.834 11.5251 141.169 11.5251C142.222 11.5251 143.152 11.7601 143.961 12.2301C144.788 12.7001 145.437 13.3675 145.907 14.2323C146.377 15.0783 146.612 16.1029 146.612 17.3061V25.6532H143.707V17.5317C143.707 16.3285 143.406 15.4449 142.805 14.8809C142.203 14.2981 141.376 14.0067 140.323 14.0067C139.12 14.0067 138.152 14.4015 137.419 15.1911C136.704 15.9807 136.347 17.1275 136.347 18.6315V25.6532H133.442Z"
              fill="#0C0011"
            />
            <path
              d="M121.482 26.048C120.485 26.048 119.592 25.8788 118.803 25.5404C118.032 25.202 117.411 24.7038 116.941 24.0458C116.49 23.3878 116.265 22.5888 116.265 21.6488C116.265 20.69 116.49 19.9004 116.941 19.28C117.411 18.6409 118.041 18.1615 118.831 17.8419C119.639 17.5223 120.551 17.3625 121.566 17.3625H125.796V16.4601C125.796 15.6517 125.552 15.0031 125.063 14.5143C124.574 14.0255 123.822 13.7811 122.807 13.7811C121.811 13.7811 121.049 14.0161 120.523 14.4861C119.996 14.9561 119.649 15.5671 119.479 16.3191L116.772 15.4449C116.998 14.6929 117.355 14.0161 117.844 13.4145C118.351 12.7941 119.019 12.2959 119.846 11.92C120.673 11.544 121.67 11.356 122.835 11.356C124.64 11.356 126.059 11.8166 127.093 12.7377C128.127 13.6589 128.644 14.9655 128.644 16.6575V22.382C128.644 22.946 128.907 23.228 129.434 23.228H130.618V25.6532H128.447C127.789 25.6532 127.253 25.484 126.84 25.1456C126.426 24.8072 126.219 24.3466 126.219 23.7638V23.6792H125.796C125.646 23.9612 125.42 24.2902 125.119 24.6662C124.819 25.0422 124.377 25.3712 123.794 25.6532C123.211 25.9164 122.44 26.048 121.482 26.048ZM121.905 23.651C123.07 23.651 124.01 23.322 124.725 22.664C125.439 21.9872 125.796 21.066 125.796 19.9004V19.6184H121.735C120.965 19.6184 120.344 19.7876 119.874 20.126C119.404 20.4456 119.169 20.925 119.169 21.5642C119.169 22.2034 119.414 22.711 119.902 23.087C120.391 23.463 121.059 23.651 121.905 23.651Z"
              fill="#0C0011"
            />
            <path
              d="M109.952 25.6531V5.91333H112.857V25.6531H109.952Z"
              fill="#0C0011"
            />
            <path
              d="M92.876 25.6531V5.91333H100.715C101.919 5.91333 102.99 6.15773 103.93 6.64652C104.889 7.11651 105.632 7.7933 106.158 8.67689C106.703 9.54168 106.976 10.5851 106.976 11.807V12.1736C106.976 13.3956 106.694 14.4484 106.13 15.332C105.585 16.2156 104.842 16.8924 103.902 17.3624C102.962 17.8324 101.9 18.0674 100.715 18.0674H95.9215V25.6531H92.876ZM95.9215 15.3038H100.405C101.477 15.3038 102.332 15.0218 102.971 14.4578C103.611 13.8938 103.93 13.123 103.93 12.1454V11.8634C103.93 10.8671 103.611 10.0869 102.971 9.52288C102.332 8.95889 101.477 8.67689 100.405 8.67689H95.9215V15.3038Z"
              fill="#0C0011"
            />
            <path
              d="M78.5283 25.6531V5.91333H81.5739V25.6531H78.5283Z"
              fill="#0C0011"
            />
            <path
              d="M59.2441 25.6531L64.8841 5.91333H70.242L75.8537 25.6531H72.7236L71.4264 21.0001H63.6997L62.4025 25.6531H59.2441ZM64.4611 18.1802H70.665L67.7886 7.80271H67.3374L64.4611 18.1802Z"
              fill="#0C0011"
            />
        

      {/* Content header with spacing for fixed navigation */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-[500] mb-4 text-gray-900 font-space-grotesk">
          Nederland klaarmaken<br/>
          voor komst Superintelligentie
        </h1>
        <h2 className="font-[400] text-gray-700 font-inter" style={{ fontSize: '1.1rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
          Een Deltaplan voor de AI Transitie
        </h2>
        <div className="flex justify-center items-center space-x-2 text-gray-600 mb-4 font-inter" style={{ fontSize: '0.9rem' }}>
          <a href="https://miba.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            Michiel Bakker
          </a>
          <span className="text-gray-400">en</span>
          <a href="https://x.com/jelleprins" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            Jelle Prins
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            asChild
            className="gap-0 pl-4 pr-4 rounded-none text-white bg-[#554664] hover:bg-[#443552] transition-colors duration-200 font-inter text-sm"
          >
            <a 
              href="https://aiplan-nl.translate.goog/?_x_tr_sl=nl&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                <path d="M2 12h20" stroke="white" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2"/>
              </svg>
              English
            </a>
          </Button>
        </div>
      </div>  </svg>
        </div>
        
        {/* Right side content */}
        {children && (
          <div className="flex items-center">
            {children}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
