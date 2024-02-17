import * as React from 'react'

import { Product } from 'database/types'
import { ImageDetails } from 'utils/types'

import Skeleton from '../../shadcn/skeleton'
import { VariantProps, cn, cva } from '../../utils'
import { Badge, BadgeList } from '../Badge'
import Button from '../Button'
import Price from '../Price'

const productStyle = cva('flex group/product', {
  defaultVariants: {
    interactive: false,
    size: 'default'
  },
  variants: {
    interactive: {
      true: 'interactive'
    },
    size: {
      default: 'flex-col w-72 normal',
      large: 'large flex-row justify-start items-stretch w-fit space-x-8',
      sm: 'sm flex-row space-x-4 w-96'
    }
  }
})

type ImageComponentType = (props: {
  [key: string]: any
  alt?: string
  height?: number
  src: string
  width?: number
}) => React.JSX.Element

const ImageComponent = React.memo<ImageComponentType>(
  ({ alt, className: imgClassName, src }) => (
    <img alt={alt} className={imgClassName} src={src} />
  )
)

type ProductVariants = VariantProps<typeof productStyle>

function getImageSize({ size }: Pick<Required<ProductVariants>, 'size'>): {
  height: number
  width: number
} {
  if (size === 'large')
    return {
      height: 512,
      width: 512
    }

  if (size === 'sm')
    return {
      height: 128,
      width: 154
    }

  return {
    height: 208,
    width: 288
  }
}

interface ProductImageProps extends Required<ProductVariants> {
  image: ImageDetails
  imageComponent?: ImageComponentType
}

const ProductImage = React.memo(
  ({ image, imageComponent, interactive, size }: ProductImageProps) => {
    const { height, width } = React.useMemo(
      () => getImageSize({ size }),
      [size]
    )

    const Image = imageComponent || ImageComponent

    return (
      <div
        className={cn(
          'rounded-md overflow-clip relative',
          size === 'large' && 'w-128 h-128'
        )}
      >
        <Image
          alt={image.alt}
          className={cn(
            'group-[.normal]/product:w-full group-[.normal]/product:h-52',
            'group-[.large]/product:w-full group-[.large]/product:h-full',
            'group-[.sm]/product:h-32'
          )}
          height={height}
          src={image.src}
          width={width}
        />
        {size === 'default' && interactive && (
          <div
            className={cn(
              'absolute w-full h-full top-0 right-0 bottom-0 left-0 transition',
              'group-[.interactive]/product:hover:bg-opacity-100 group-[.interactive]/product:hover:bg-white-10'
            )}
          />
        )}
      </div>
    )
  }
)

interface ProductDetailsProps
  extends Required<Omit<ProductVariants, 'interactive'>> {
  product: Product
}

const ProductDetails = React.memo(({ product, size }: ProductDetailsProps) => {
  const { category, description, name, price, tags } = product

  const DetailsWrapper =
    size === 'large'
      ? ({ children: chld }: { children: React.ReactNode }) => (
          <div className={`flex flex-col space-y-1`}>{chld}</div>
        )
      : React.Fragment

  const ProductName = size === 'large' ? 'h1' : 'p'

  const ProductCategory = category ? (
    <Badge className="w-fit" label={category} size="large" />
  ) : null

  const ProductDescription =
    description || tags ? (
      <div>
        <p className={`text-base font-normal mt-4`}>
          {product.description || 'N/A'}
        </p>
        {tags && tags.length > 0 && <BadgeList labels={tags} size="sm" />}
      </div>
    ) : null

  return (
    <DetailsWrapper>
      <ProductName
        className={cn(
          size === 'large' ? 'font-semibold text-4xl' : 'font-medium'
        )}
      >
        {name}
      </ProductName>
      {size === 'large' && ProductCategory}

      <p className={cn(`font-light`, size === 'large' && 'text-lg')}>
        <Price currency={price.currency} value={price.value} />
      </p>

      {size === 'large' && ProductDescription}
    </DetailsWrapper>
  )
})

interface ProductProps extends ProductVariants {
  children?: React.ReactNode
  className?: string
  imageComponent?: ImageComponentType
  product: Product
}

function ProductCard({
  children,
  className,
  imageComponent,
  interactive = false,
  product,
  size = 'default'
}: ProductProps) {
  const { image } = product

  return (
    <div className={cn(productStyle({ className, interactive, size }))}>
      <ProductImage
        image={image}
        imageComponent={imageComponent}
        interactive={interactive}
        size={size}
      />
      <div
        className={cn(
          'flex flex-col justify-between',
          size === 'default' && 'pt-2 w-full',
          size === 'large' && 'items-stretch space-y-8 w-96',
          size !== 'large' && 'items-start'
        )}
      >
        <ProductDetails product={product} size={size} />
        {size === 'large' && <div className={`h-full`}>{children}</div>}
      </div>
    </div>
  )
}

interface InteractiveProductProps
  extends Omit<ProductProps, 'children' | 'interactive' | 'size'> {
  buttonLabel: string
  onButtonClick?: (id: string) => void
  onCardClick?: (id: string) => void
}

function InteractiveProductCard({
  buttonLabel,
  className,
  imageComponent,
  onButtonClick,
  onCardClick,
  product
}: InteractiveProductProps) {
  const { id } = product
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <button onClick={() => onCardClick && onCardClick(id)}>
        <ProductCard
          imageComponent={imageComponent}
          interactive
          product={product}
          size="default"
        />
      </button>
      <div>
        <Button
          fullWidth
          onClick={() => onButtonClick && onButtonClick(id)}
          variant="action"
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

const LargeProductSkeleton = React.memo(() => (
  <div className="flex flex-row items-stretch justify-between gap-8 h-128 w-fit">
    <Skeleton className="h-full w-128" />
    <div className="flex flex-col items-start justify-between h-full w-96">
      <div className="flex flex-col items-start justify-start w-full gap-2 h-fit">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-2/5 h-6" />
        <Skeleton className="w-3/5 h-6" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-1/5 h-6" />
      </div>
      <Skeleton className="w-full h-10" />
    </div>
  </div>
))

const InteractiveProductSkeleton = React.memo(() => (
  <div className="flex flex-col items-start justify-between w-72 h-[312px]">
    <div className={`w-full h-52 skeleton`} />
    <div className={`w-2/3 h-6 skeleton`} />
    <div className={`w-1/2 h-4 skeleton`} />
    <div className={`w-full h-10 skeleton`} />
  </div>
))

export {
  InteractiveProductCard,
  InteractiveProductSkeleton,
  LargeProductSkeleton,
  ProductCard
}
