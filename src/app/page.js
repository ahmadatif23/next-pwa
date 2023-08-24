import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center h-screen w-screen bg-slate-50">
      <Image
        src="/next-pwa/logo.png"
        alt="GrocerBe Logo"
        width={100}
        height={24}
        priority
      />
      <h1 className='text-4xl font-semibold text-slate-700 mt-4'>Welcome to</h1>
      <h1 className='text-4xl font-bold text-sky-800 mt-2'>GrocerBe</h1>
    </main>
  )
}
