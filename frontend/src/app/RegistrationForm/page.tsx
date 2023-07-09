"use client"
import Image from 'next/image'
import { useState
 } from 'react';
 import { useRouter } from 'next/navigation';

 export default function Page() {
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const router = useRouter();

  function validatePass() {    
    if (password == passwordConfirm ) {
    return true;
  }
    return false;
  }

  function displayErr() {
    return (
      <p className="text-sm mb-2">Passwords do not match</p>
    )
  }

  function gotToDummyPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/dummy');
  }

  return (
    <>
    <header className='mb-2 '>Register</header>
        <div className='border-2 border-zinc-500 bg-slate-50 opacity-100 
            container px-4
            flex justify-center
            box-border p-4 border-4 
            container mx-auto'>
        <div className='flex flex-col'>
        <Image
            className="m-4"
            src={"/pic-logo.png"}
            width={180}
            height={180}
            alt="Picture of the author"
            />

            <form className='flex flex-col' onSubmit={(e) => gotToDummyPage(e)}>
              <input className='border-2 border-zinc-500 text-center mb-4' placeholder='First Name' type="text" required/>
              <input className='border-2 border-zinc-500 text-center mb-4' placeholder='Last Name' type="text" required/>
              <input className='border-2 border-zinc-500 text-center mb-4' placeholder='Username' type="text" required/>
              <input className='border-2 border-zinc-500 text-center mb-4' placeholder='Email' type="email" required/>
              <input className='border-2 border-zinc-500 text-center mb-4' placeholder='Password' type="password"
              onInput={(e) => setPassword((e.target as HTMLTextAreaElement).value)} required/>
              <input className={validatePass() ? 'border-2 border-zinc-500 text-center mb-8' : 'border-2 border-red-800 text-center mb-2'} placeholder='Confirm Password' type="password" 
              onInput={(e) => setPasswordConfirm((e.target as HTMLTextAreaElement).value)} required/>

              { !validatePass() && displayErr() }
              <button className='rounded-full bg-slate-950 opacity-100 text-slate-50 text-xl mb-4'
              >Register</button>
        
            </form>
        </div>
        </div>
    </>
  )
}