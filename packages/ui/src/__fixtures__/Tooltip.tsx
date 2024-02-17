import { Tooltip, TooltipProvider } from '../components'

export default (
  <TooltipProvider delayDuration={100}>
    <Tooltip
      content={
        <p className="flex justify-center items-center p-2 rounded-md font-normal text-base bg-primary text-primary-foreground">
          Tooltip here
        </p>
      }
    >
      <p className="flex justify-center items-center px-4 py-2 border border-muted rounded-md">
        Hover here
      </p>
    </Tooltip>
  </TooltipProvider>
)
