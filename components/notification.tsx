import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function Notification() {
  return (
    <>
      <div className="flex justify-center bg-emerald-300 py-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default text-xs text-black">
              Free standard shipping and return shipping from $39.90*.
            </TooltipTrigger>
            <TooltipContent className="w-80 bg-secondary text-xs text-foreground">
              <p>
                *Free delivery for orders over $39.90. For orders below this amount the delivery
                costs are $4.90.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  )
}
