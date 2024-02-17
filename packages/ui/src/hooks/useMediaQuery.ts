import { useMediaQuery } from 'react-responsive'

type ScreenSizesTypes = '2xl' | 'lg' | 'md' | 'sm' | 'xl'

function useScreenSize(): Record<ScreenSizesTypes, boolean> {
  const sm = useMediaQuery({ minWidth: 640 })
  const md = useMediaQuery({ minWidth: 768 })
  const lg = useMediaQuery({ minWidth: 1024 })
  const xl = useMediaQuery({ minWidth: 1280 })
  const xxl = useMediaQuery({ minWidth: 1536 })

  return { '2xl': xxl, lg, md, sm, xl }
}

const useCustomMedia = useMediaQuery

export { useCustomMedia, useScreenSize }
