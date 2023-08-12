import Image from 'next/image'
import '@/app/styles/globals.css'

export default function Home() {
  return (
    <main data-theme="luxury" className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="container mx-auto mt-20 space-x-2">
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <button className="btn btn-accent">Button</button>
        <button className="btn btn-ghost">Button</button>
        <button className="btn btn-link">Button</button>
      </div>



    </main>
  )
}
