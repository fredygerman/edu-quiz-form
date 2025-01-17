"use client"

import React, { createContext, useContext, useState } from "react"

interface EduQuizTableContextProps {
  someState: string
  setSomeState: React.Dispatch<React.SetStateAction<string>>
}

const EduQuizTableContext = createContext<EduQuizTableContextProps | undefined>(
  undefined
)

export const EduQuizTableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [someState, setSomeState] = useState("")

  return (
    <EduQuizTableContext.Provider value={{ someState, setSomeState }}>
      {children}
    </EduQuizTableContext.Provider>
  )
}

export const useEduQuizTable = () => {
  const context = useContext(EduQuizTableContext)
  if (!context) {
    throw new Error(
      "useEduQuizTable must be used within an EduQuizTableProvider"
    )
  }
  return context
}
