"use client"

import React, { useEffect, useState } from 'react'

const TOKEN = process.env.NEXT_PUBLIC_LOGO_TOKEN;

const logos_url = {

  "js" : "javascripttutorial.net",
  "next": "nextjs.org",
  "react": "reactnative.dev",
  "css": "",
  "ts": "typescriptlang.org",
  "tailwind": "tailwindcss.com",
  "github": "github.com",
  "git": "git-scm.com",
  "unity": "unity.com",
  "godot": "godotengine.org",
  "flutter": "flutter.dev",
  "mongodb": "mongodb.com"
}



function getLogo(logo) {

  //ANTIGUA LLAMADA A LA API

  // try {
  //   const res = await fetch(`https://api.logo.dev/search?q=${logo}`, {
  //     headers: {
  //       "Authorization": `Bearer: ${TOKEN}`
  //     }
  //   });

  //   if (!res.ok) {
  //     throw new Error(`Error ${res.status}: ${res.statusText}`)
  //   }
  //   const data = await res.json()
  //   data.map((item)=>{
  //     const api_logo = item.logo_url
      
  //   })
  //   console.log('Datos del logo: ', data)

  // } catch (error) {
  //   console.error("Error al obtener el logo:", error.message);
  // }


  //GESTIÓN LOCAL

  const logo_url = logos_url[`${logo}`]
  return logo_url
  console.log(logo_url)

}



const LogoHook = ({ nameLogo }) => {
  const [logo, setLogo] = useState(nameLogo)
  const [logo_url, setLogo_url] = useState("")



  useEffect(() => {
    console.log("Buscando Logo...")
    const data =  getLogo(logo)
    setLogo_url(data)
    console.log("data",data)
  }, [logo])

  return (
    <div >
      <img src={`https://img.logo.dev/${logo_url}?token=${TOKEN}`}/>
    </div>
  )
}

export default LogoHook