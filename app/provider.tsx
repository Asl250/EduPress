"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";

export function Provider({ children, ...props }: ThemeProviderProps) {
	return (
			<SessionProvider>{children}</SessionProvider>
	);
}
