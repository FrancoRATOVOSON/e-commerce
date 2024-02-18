import React from 'react'

import { DoubleSquareStack, IconNode, Minimize, Square, X } from '../../Icons'
import { cn } from '../../utils'

interface ControlButtonProps {
  className?: string
  icon: ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element) | IconNode
  onClick?: () => void
}

function ControlButton({ className, icon: Icon, onClick }: ControlButtonProps) {
  return (
    <button
      className={cn(
        'hover:bg-primary/10',
        className,
        'w-6 h-6',
        'flex justify-center items-center',
        'group bg-secondary rounded-full'
      )}
      onClick={onClick}
    >
      <div className={cn('flex justify-center items-center', 'w-full h-full')}>
        <Icon className="w-[0.625rem] h-[0.625rem] group-hover:w-[0.65rem] group-hover:h-[0.65rem]" />
      </div>
    </button>
  )
}

interface WindowControlsProps {
  className?: string
  defaultState?: boolean
  onClose?: () => void
  onMinimize?: () => void
  toggleMaximize?: (state: boolean) => void
}

export default function WindowControls({
  className,
  defaultState = false,
  onClose,
  onMinimize,
  toggleMaximize
}: WindowControlsProps) {
  const [isMaximized, setIsMaximized] = React.useState(defaultState)

  return (
    <div
      className={cn(
        className,
        'flex flex-row justify-evenly items-center gap-2'
      )}
    >
      <ControlButton icon={Minimize} onClick={onMinimize} />
      <ControlButton
        icon={isMaximized ? DoubleSquareStack : Square}
        onClick={() => {
          setIsMaximized(!isMaximized)
          toggleMaximize && toggleMaximize(isMaximized)
        }}
      />
      <ControlButton
        className="hover:bg-destructive hover:text-destructive-foreground"
        icon={X}
        onClick={onClose}
      />
    </div>
  )
}
