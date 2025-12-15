import Button from "./Button"


function Card({title = "default" ,description = "lorem ipsum dolor sit amet", imgUrl}) {

  return (
      <div className="flex gap-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow ">
        <img src={imgUrl} alt="img" className="w-full h-56 object-cover"/>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
          <Button/>
        </div>

      </div>
      

    
    </div>
  )
}

export default Card