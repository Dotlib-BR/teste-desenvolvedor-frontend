import { createContext, useState } from "react"

export const LoaderContext = createContext<LoaderContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export type LoaderContextType = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoaderPropvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {children}
    </LoaderContext.Provider>
  )
}