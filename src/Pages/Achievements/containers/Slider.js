import bannerAchievements from '../../../Assets/Material/Banner_Achiev.webp';

const Slider = () => {
  return (
    <>
      <div className="my-20 md:mb-40 md:mt-24 relative">
        <div className="h-[80vh] max-w-full bg-center bg-cover" style={{backgroundImage: `url(${bannerAchievements})`}}>
          <div className='w-full h-full bg-black bg-opacity-30'>
            <div className='m-auto py-36 relative h-full'>
              <img className='absolute top-1/2 left-0 hover:scale-125 z-10' src={require(`../../../Assets/Material/Arrow - Left 2.png`)} alt=''></img>
              <div className='absolute table top-0 h-full w-full text-white justify-center mx-auto'>
                <div className='table-cell align-middle'>
                  <div className='mx-auto'>
                    <h1 className='text-2xl align-middle text-center font-bold font-secondary md:text-6xl'>OUR Achievements</h1>
                    <p className='text-base mt-5 mx-auto text-center max-w-[230px] sm:max-w-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</p>
                  </div>
                  
                </div>
                
              </div>
              <img className='absolute top-1/2 right-0 hover:scale-125' src={require('../../../Assets/Material/Arrow - Right 2.png')} alt=''></img>
              <div className='absolute left-1/2 bottom-5'>
                <div className='flex flex-row relative -left-1/2'>
                  <div className=' bg-white mx-1 border-1 border-white rounded-full w-4 h-4'></div>
                  <div className='  border-2 mx-1 border-white rounded-full w-4 h-4'></div>
                  <div className='  border-2 mx-1 border-white rounded-full w-4 h-4'></div>
                </div>
                

              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={require("../../../Assets/Material/Banner_Achiev.png")} alt=""></img> */}
    </>
  ) 
}

export default Slider;