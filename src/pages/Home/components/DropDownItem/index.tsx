import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components'

import { DropDown } from './styles'

type DropDownItem = {
  buttonTitle: string
  content: React.ReactNode
}

export const DropDownItem: React.FC<DropDownItem> = ({
  buttonTitle,
  content,
}) => {
  const [open, setOpen] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const handleToggleState = useCallback(() => {
    setOpen((oldState) => !oldState)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div>
      <Button size="sm" onClick={handleToggleState} control={buttonRef}>
        {buttonTitle}
      </Button>
      <DropDown open={open} ref={dropDownRef}>
        {content}
      </DropDown>
    </div>
  )
}
