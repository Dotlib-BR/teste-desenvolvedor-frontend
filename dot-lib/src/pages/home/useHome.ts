export type TypeSearchProps = 'product' | 'company'

export interface GetProductsProps {
  type: TypeSearchProps
  text: string
}

export function useHome() {
  async function getProducts({ type, text }: GetProductsProps) {
    console.log('buscou ', type, text)
  }

  return { getProducts }
}
