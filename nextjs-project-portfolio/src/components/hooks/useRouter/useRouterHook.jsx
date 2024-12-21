"use client"

import React from 'react'
import { useRouter } from 'next/navigation'



const useRouterHook = ({id, category}) => {
    const router = useRouter()
  return (
    <button type='button' onClick={()=> Router.push(`/portfolio/${category}/${id}`)}>

    </button>
  )
}

export default useRouterHook