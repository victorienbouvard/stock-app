
'use client'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Page(){

 const [name,setName] = useState("")
 const [msg,setMsg] = useState("")

 async function addProduct(){
  const { error } = await supabase.from("products").insert({
   lettre:"A",
   nom_piece:name,
   quantite:1,
   prix_achat:0
  })

  if(error) setMsg(error.message)
  else setMsg("Produit ajouté ✅")
 }

 return (
  <div style={{padding:40,fontFamily:"Arial"}}>
   <h1>Gestion de Stock</h1>

   <input
    placeholder="Nom pièce"
    value={name}
    onChange={e=>setName(e.target.value)}
    style={{padding:10,marginRight:10}}
   />

   <button onClick={addProduct}>
    Ajouter produit
   </button>

   <p>{msg}</p>
  </div>
 )
}
