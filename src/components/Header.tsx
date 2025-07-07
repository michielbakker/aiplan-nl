import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
	return (
		<>
			{/* Top navigation header */}
			<header className={`flex justify-end items-start mb-6 ${className}`}>
				<div className="flex items-center gap-4">
					{children}
				</div>
			</header >
		</>
	);
};

export default Header;
