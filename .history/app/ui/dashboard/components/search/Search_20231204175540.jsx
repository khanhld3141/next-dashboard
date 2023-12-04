'use client'
import React from 'react'
import styles from './search.module.css'
import {MdSearch} from 'react-icons/md'
import { useParams, usePathname ,useRouter} from 'next/navigation'
const Search = ({placeholder}) => {
  const searchParam = useParams()
  const pathname=usePathname();
  const {replace} = useRouter()
  
  const handleSearch=(e)=>{
    const params = new URLSearchParams(searchParam)
    
   if(e.target.value){
    params.set("q",e.target.value)
   }else{
    params.
   }
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input onChange={handleSearch} type="text" placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search