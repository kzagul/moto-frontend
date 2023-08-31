import { MotoCard } from "./components"

export default function Home() {

  const motoCards = [
    { name: "Harley 1", description: "If a dog chews shoes whose shoes does he choose?" },
    { name: "Harley 2", description: "If a dog chews shoes whose?" },
    { name: "Harley 3", description: "If a dog chews shoes whose shoes does he choose?" },
    { name: "Harley 4", description: "If a dog chews shoes whose shoes choose?" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center h-screen">
        <h1 className="text-4xl">
          МОРЕМОТО - прокат мотоциклов в Сочи
        </h1>
      </div>
      {/* <div className="carousel carousel-center rounded-box h-screen">
        <div className="carousel-item w-full">
          <img src="https://cemeco.ru/wp-content/uploads/2019/02/harley-davidson-softail-breakout-fxbrs1868-591km.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item w-full">
          <img src="https://via.placeholder.com/600/771796" alt="Pizza" />
        </div> 
        <div className="carousel-item w-full">
          <img src="https://via.placeholder.com/600/24f355" alt="Pizza" />
        </div> 
        <div className="carousel-item w-full">
          <img src="https://via.placeholder.com/600/d32776" alt="Pizza" />
        </div> 
        <div className="carousel-item w-full">
          <img src="https://via.placeholder.com/600/56a8c2" alt="Pizza" />
        </div> 
        <div className="carousel-item w-full">
          <img src="https://via.placeholder.com/600/54176f" alt="Pizza" />
        </div> 
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        { motoCards.map((motoCard, index) => (
           <MotoCard key={index} motoCard={motoCard}/>
        ))}
      </div>
    </main>
  )
}
