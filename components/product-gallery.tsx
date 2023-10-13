import Image from 'next/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type Image as ImageType } from '@/types'

type Props = {
  images: ImageType[]
}

export default function ProductGallery({ images }: Props) {
  return (
    <Tabs defaultValue={images[0].id} className="flex flex-col-reverse gap-4">
      <TabsList className="">
        {images.map((image) => (
          <TabsTrigger key={image.id} value={image.id} className="border">
            <Image src={image.url} alt="" fill />
          </TabsTrigger>
        ))}
      </TabsList>

      {images.map((image) => (
        <TabsContent key={image.id} value={image.id} className="border">
          <Image src={image.url} alt="" fill className="object-cover object-center" />
        </TabsContent>
      ))}
    </Tabs>
  )
}
