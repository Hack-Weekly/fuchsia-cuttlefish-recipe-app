import Image from 'next/image'
import { LoginForm } from '@/components/LoginForm'

export default function Page() {
  return (<><header className='mb-2'>Login/Sign Up</header>
  <div className="border-2 border-zinc-500 
  bg-slate-50 opacity-100 
  container px-4
  flex justify-center
  box-border p-4 border-4 
  container mx-auto
  ">
    <LoginForm/>
    </div></>)
    
}