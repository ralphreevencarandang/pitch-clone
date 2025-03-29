export default function TentFeaturesCard({imgURL, title, description}) {
  return (
    <div className="max-w-md text-center  flex flex-col justify-center items-center ">
        <img src={imgURL} alt="Features Images" width={300} height={300} />
        <h3 className="text-2xl font-bold mb-3 font-display">{title}</h3>
        <p className="text-slate-600">{description}</p>

    </div>
  )
}