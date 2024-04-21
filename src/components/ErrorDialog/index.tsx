import { useContext, useEffect, useState } from "react"
import { DialogWrapper, DialogContainer } from "./Styles"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"

export const ErrorDialog = () => {

  const [animate, setAnimate] = useState(false)

  const { MedicationState: { error: { errorMsg, error } }, MedicationDispatch } = useContext(MedicationContext) as MedicationContextType 

  useEffect(() => {
    setAnimate(true)
  }, [error])

  return (
    <DialogWrapper $error={error} onClick={() => MedicationDispatch({ type: "SET_ERROR", payload: { error: false, errorMsg: "Algo deu errado. Tente novamente mais tarde" } })}>
      <DialogContainer className={`${animate && error ? 'slide-in' : 'slide-out'}`}>
        <p>{errorMsg}</p>
      </DialogContainer>
    </DialogWrapper>
  )
}
