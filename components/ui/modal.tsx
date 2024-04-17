import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import type { ReactElement } from 'react'

interface ModalProps {
	isOpen?: boolean
	onClose?: () => void
	body?: ReactElement
	footer?: ReactElement
	totalSteps?: number
	step?: number
}

export default function Modal({
	isOpen,
	onClose,
	body,
	footer,
	step,
	totalSteps
} : ModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<div className={"flex items-center gap-6"}>
					{step && totalSteps && (
						<div className={'text-2xl font-bold'}>Step {step} of {totalSteps}</div>
					)}
				</div>
				<div className={'mt-4'}>{body}</div>
				{footer && <div>{footer}</div>}
			</DialogContent>
		</Dialog>
	)
}
