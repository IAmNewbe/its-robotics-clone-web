import Staff from "../components/Staff";

const OurStaff = () => {
  return (
    <>
      <div className="container mt-16 md:mt-40 md:w-10/12">
        <img alt="" src={require("../../../Assets/Material/ICON 1.png")} className="absolute left-0 -z-20 hidden md:block animate-pulse"></img>
        <img alt="" src={require("../../../Assets/Material/BG circle.png")} className="absolute right-0 -z-20 hidden md:block animate-pulse"></img>
        <div className="text-white justify-center text-center">
          <h1 className="font-secondary font-bold md:text-5xl">OUR STAFF</h1>
          <p className="font-primary md:text-base max-w-2xl mx-12 md:mx-auto my-2 md:my-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="whitespace-nowrap overflow-y-hidden overflow-x-auto">
          <Staff />
          <Staff />
          <Staff />
          <Staff />
          <Staff />
          <Staff />
          <Staff />
        </div>
        
      </div>
    </>
  )
}

export default OurStaff;