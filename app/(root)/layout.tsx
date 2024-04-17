import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
	return (
		<div>
			{children}
		</div>
)};

export default Layout;
