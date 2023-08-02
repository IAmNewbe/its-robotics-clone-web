import pp from "../../../Assets/Material/Kaedehara_Kazuha_Icon.webp";

const Staff = () => {
  return (
    <>
      <div className="mt-5 md:mt-12 inline-block mr-6 md:mr-10 md:px-2">
        <div className="card text-white items-center">
          <img src={require("../../../Assets/Material/Kaedehara_Kazuha_Icon.webp")} 
            className="rounded-full w-[70px] md:w-40 mx-auto mb-4 md:mb-5" alt="staff"></img>
          <h3 className="justify-center text-center font-bold font-primary text-sm md:text-xl">Ahmad Ahlul Hikam</h3>
          <p className="text-center mt-1 md:mt-2 text-sm md:text-base">Teknik Elektro | 2021</p>
          <p className="text-center text-sm md:text-base md:mb-5">Web Developer</p>
        </div>
      </div>
    </>
  )
}

export default Staff;