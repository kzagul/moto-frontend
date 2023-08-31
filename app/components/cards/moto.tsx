export default function MotoCard(props: any) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src="https://cemeco.ru/wp-content/uploads/2019/02/harley-davidson-softail-breakout-fxbrs1868-591km.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props?.motoCard?.name}</h2>
            <p>{props?.motoCard?.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Apply</button>
            </div>
        </div>
    </div>
  )
}






