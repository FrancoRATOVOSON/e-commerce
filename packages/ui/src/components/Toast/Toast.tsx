import { Toaster as Sonner, ToasterProps } from '../../shadcn/sonner'

export default function Toaster({
  closeButton = true,
  richColors = true,
  ...props
}: ToasterProps) {
  return <Sonner closeButton={closeButton} richColors={richColors} {...props} />
}
