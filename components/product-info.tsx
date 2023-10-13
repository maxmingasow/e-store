import AddButton from '@/app/(routes)/product/[productId]/components/add-button'
import { Currency } from '@/components/ui/currency'
import { Product } from '@/types'

type Props = {
  data: Product
}

export default function ProductInfo({ data }: Props) {
  return (
    <div>
      <h1 className="max-w-sm text-3xl font-semibold text-foreground">{data.name}</h1>
      <Currency value={data.price} />
      <p className="py-2 text-sm text-foreground">{data.description}</p>
      <hr className="my-4" />
      <div className="space-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="font-medium text-foreground">Size:</h3>
          <p className="text-sm text-foreground">{data?.size?.value}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-medium text-foreground">Color:</h3>
          <div className="h-6 w-6 rounded-full" style={{ backgroundColor: data?.color.value }} />
        </div>
        <hr className="my-4" />
        <AddButton item={data} />
      </div>
    </div>
  )
}
