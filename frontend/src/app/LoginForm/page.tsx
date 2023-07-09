import Image from 'next/image'
import Link from 'next/link'

export function LoginForm() {
    return (
        <>
        <header className='mb-2 '>Login/Sign Up</header>
        <div className="border-2 border-zinc-500 bg-slate-50 opacity-100 
            container px-4
            flex justify-center
            box-border p-4 border-4 
            container mx-auto">
        <div className='flex flex-col py-28'>
            <Image
            className="m-4"
            src={"/pic-logo.png"}
            width={180}
            height={180}
            alt="Picture of the author"
            />
            <input className='border-2 border-zinc-500 text-center mb-4' placeholder='Email' type="email"/>
            <input className='border-2 border-zinc-500 text-center mb-8' placeholder='Password' type="password"/>

            
            <button className='rounded-full bg-slate-950 opacity-100 text-slate-50 text-xl mb-4'>Log In</button>
            <Link className='underline ml-36' href="/RegistrationForm">Register</Link>
        </div>
        </div>
        </>
    )
}