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
					<svg width="951" height="951" viewBox="0 0 951 951" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M708.293 0H242.159C108.418 0 0 108.418 0 242.159V708.293C0 842.034 108.418 950.452 242.159 950.452H708.293C842.034 950.452 950.452 842.034 950.452 708.293V242.159C950.452 108.418 842.034 0 708.293 0Z" fill="#FF3030" />
						<path d="M476.629 169.068L158.277 487.42H476.629V805.772L794.981 487.42V169.068H476.629ZM725.65 443.308H529.2V246.857H725.65V443.308Z" fill="white" />
						<rect x="528.789" y="241.012" width="201.443" height="205.04" fill="#315FD8" />
					</svg>
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
