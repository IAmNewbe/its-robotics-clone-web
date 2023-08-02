import AwardCard from "../components/AwardCard"


const AwardList = () => {
  return (
    <div className="relative">
      <div className="md:mx-auto flex flex-wrap justify-center mb-40 h-full 2xl:max-w-6xl lg:w-[1080px]">
        <AwardCard/>
        <div className=" text-white justify-center items-center mx-16 lg:mx-auto md:w-1/2 ">
          <h1 className="text-base font-bold font-secondary md:text-3xl">Achievement 2</h1>
          <p className="text-base text-justify max-w-full sm:max-w-lg md:max-w-full mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className="mt-4 p-2 bg-white rounded-xl text-main-0 
          font-semibold hover:bg-main-0 hover:ring-white ring-2 hover:text-white">Load more</button>
        </div>
        
      </div>
    </div>
  )
}

export default AwardList;