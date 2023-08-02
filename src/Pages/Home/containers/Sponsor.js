
const Sponsor = () => {
  return (
    <>
      <section>
        <div className="container mt-16 md:mt-40 md:w-10/12">
          <div className="text-white justify-center text-center">
            <h1 className="md:text-5xl sm:font-bold font-secondary">OUR SPONSOR</h1>
            <p className="md:text-base md:mt-8">Coming Soon</p>
            <div className="mt-6 md:mt-16">
              <img className="md:mb-28 mb-16 sm:block hidden" alt="sponsor" src={require("../../../Assets/Material/peta sponsor.png")}></img>
              <div>
                <img className="mx-auto mb-16 block sm:hidden" alt="sponsor" src={require("../../../Assets/Material/sponsor logo.png")}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sponsor;