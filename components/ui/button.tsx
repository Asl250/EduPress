import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ButtonProps{
	label: string | ReactNode
	secondary?: boolean
	fullWidth?: boolean
	large?: boolean
	disabled?: boolean
	outline?: boolean
	type?: "button" | "submit"
	onClick?: () => void
}

export default function Button({
	label,
	secondary,
	fullWidth,
	large,
	disabled,
	outline,
	type,
	onClick
}: ButtonProps) {
	
	return(
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={cn(
				"rounded-full border transition hover:opacity-80" +
				"disabled:cursor-not-allowed disabled:opacity-70",
				fullWidth ? "w-full": "w-fit",
				secondary ? "bg-orange-500 text-white" :
					"bg-none border-[3px] border-orange-500 text-orange-500",
				large ? "px-5 py-3 text-xl": "px-4 py-3 text-md",
				outline ? "bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" : ""
			)}
		>{label}</button>
	)
}
