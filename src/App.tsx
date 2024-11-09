import Header from './components/Header';

interface Offer {
  title: string,
  imagePath: string;
}

interface Services {
  title: string,
  tagline: string,
  offers: Offer[];
}

function App() {

  const servicesContent: Services[] = [
    {
      title: "top specialist",
      tagline: "People have been looking for these specialties",
      offers: [
        {
          title: "obstetrics and gynecology",
          imagePath: "./assets/images/obstetrics-and-gynecology.png"
        },
        {
          title: "pediatrics",
          imagePath: "./assets/images/pediatrics.png"
        },
        {
          title: "brain and nerves",
          imagePath: "./assets/images/brain-and-nerves.png"
        },
        {
          title: "nephrology and kidney",
          imagePath: "./assets/images/nephrology-and-kidney.png"
        }
      ]
    },
    {
      title: "common condition",
      tagline: "Easily access doctors treating these conditions",
      offers: [
        {
          title: "obstetrics and gynecology",
          imagePath: "./assets/images/obstetrics-and-gynecology.png"
        },
        {
          title: "pediatrics",
          imagePath: "./assets/images/pediatrics.png"
        },
        {
          title: "brain and nerves",
          imagePath: "./assets/images/brain-and-nerves.png"
        },
        {
          title: "nephrology and kidney",
          imagePath: "./assets/images/nephrology-and-kidney.png"
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative w-[90rem] h-[53.9375rem] mx-auto px-[6.25rem] overflow-hidden">
          <img className="w-[55.1875rem] absolute -right-10 z-30" src="./assets/images/doctor-welcome.png" alt="doctor-welcome.png" />
          <div className='relative top-[3.125rem]'>
            <form className='w-[43.3125rem]'>
              <h1 className="text-[3.125rem] uppercase font-interBold text-white">book your appointment</h1>
              <h2 className='text-tealGreen text-[2rem]'>whether in-person or online</h2>
              <input className='w-full p-[1.9375rem] font-interLight rounded-[1.25rem] mt-[1.5625rem] mb-[1.375rem]' type="text" placeholder="Search" name="search" required />
              <a className='block font-interBold text-end capitalize text-tealGreen relative z-50' href="">need help?</a>
            </form>
            <div className='relative w-[43.3125rem] h-[29.25rem] bg-white z-10 px-[1.875rem] pt-[4.375rem] rounded-t-[1.25rem] mt-[4.375rem]'>
              <img className='absolute w-[21.9518rem] top-0 -right-3 -z-20' src='./assets/images/doctor-video-call.png' alt='doctor-video-call.png' />
              <p className='uppercase text-tealGreen text-2xl'>video consultation <span className='block text-black font-interBold text-4xl w-[25.125rem] normal-case mt-8 mb-5'>Looking for immediate medical advice?</span></p>
              <ul className='ms-[2rem]'>
                <li className='text-2xl w-[20rem]'>
                  <img className='w-[1.125rem] inline-block me-[1.5625rem]' src='./assets/images/polygon.png' alt='polygon.png' />
                  Talk to a doctor within <span className='font-interBold ms-11'>20 minutes</span>
                </li>
                <li className='text-2xl mt-5'>
                  <img className='w-[1.125rem] inline-block me-[1.5625rem]' src='./assets/images/polygon.png' alt='polygon.png' />
                  No Traffic
                </li>
                <a className='main-button-green w-[11.75rem] absolute top-[22.9375rem] left-[6.5625rem]' href=''>consult now</a>
              </ul>
            </div>
          </div>
        </section>
        <section className='relative h-[31rem]'>
          <div className='relative w-[48.75rem] ps-[6.25rem] h-[31rem] inline-block'>
            <img className="w-[37rem] absolute left-[8rem] z-10" src='./assets/images/man-showing-doctors-appointment-app.png' alt='man-showing-doctors-appointment-app.png' />
            <img className="w-[20.9375rem] absolute left-[29.875rem] top-[1.875rem] z-0" src='./assets/images/doctors-appointment.png' alt='doctors-appointment.png' />
          </div>
          <div className='inline-block absolute w-[40rem]'>
            <img className='w-[5.8125rem] mx-auto mt-[3.75rem] mb-[1.25rem]' src='./assets/images/green-blue-medical-cross-doctor-modern-logo.png' alt='green-blue-medical-cross-doctor-modern-logo.png' />
            <p className='text-[2.5rem] font-interBold uppercase text-center text-white'>
              for a seamless experience
              <span className='block font-interExtraLight text-2xl mb-6'>Available on iOS and Android</span>
            </p>
            <a className='main-button-green w-[13rem] block mx-auto' href=''>download the app</a>
            <div className='text-center mt-4'>
              <img className='w-48 inline-block me-[1.6875rem]' src='./assets/images/google-play.png' alt='google-play.png' />
              <img className='w-48 inline-block' src='./assets/images/app-store.png' alt='app-store.png' />
            </div>
          </div>
          <div className='w-full h-[5.25rem] bg-white absolute top-[22.625rem] -z-10'></div>
        </section>
        <section className='bg-[url("./assets/images/services-background.png")] bg-cover bg-no-repeat h-[64rem] bg-white py-[6.25rem]'>
          {servicesContent.map((content, index) =>
            <div key={content.title} className={`w-[77.5rem] mx-auto ${index > 0 ? "mt-[3.75rem]" : ""}`}>
              <div className='flex flex-row justify-between'>
                <p className='uppercase font-interBold text-[3.125rem]'>
                  {content.title}
                  <span className='normal-case font-interMedium text-2xl block'>{content.tagline}</span>
                </p>
                <a className="font-interBold text-xl uppercase mt-4" href=''>view all</a>
              </div>
              <div className='flex flex-row justify-between mt-[2.5rem]'>
                {content.offers.map((offer) =>
                  < button key = { offer.title } className = 'bg-tealGreen capitalize text-xl font-interBold w-[18.4375rem] h-[14.5rem] text-white text-center py-5 rounded-[0.9375rem]' >
                  <img className='mx-auto w-[6.375rem]' src={offer.imagePath} alt={offer.imagePath.split("/")[3]} />
                    { offer.title }
                  </button>
                )}
            </div>
            </div>
          )}
        {/* <div className='w-[77.5rem] mx-auto mt-[3.75rem]'>
            <div className='flex flex-row justify-between'>
              <p className='uppercase font-interBold text-[3.125rem]'>
                top specialist
                <span className='normal-case font-interMedium text-2xl block'>People have been looking for these specialties</span>
              </p>
              <a className="font-interBold text-xl uppercase mt-4" href=''>view all</a>
            </div>
            <div className='flex flex-row justify-between mt-[2.5rem]'>
              <button className='bg-tealGreen text-xl font-interBold text-white text-center p-5 rounded-[0.9375rem]'>
                <img className='mx-auto w-[6.375rem]' src='./assets/images/obstetrics-and-gynecology.png' alt='obstetrics-and-gynecology.png' />
                Obstetrics and Gynecology
              </button>
              <button className='bg-tealGreen text-xl font-interBold text-white text-center p-5 rounded-[0.9375rem]'>
                <img className='mx-auto w-[6.375rem]' src='./assets/images/obstetrics-and-gynecology.png' alt='obstetrics-and-gynecology.png' />
                Obstetrics and Gynecology
              </button>
              <button className='bg-tealGreen text-xl font-interBold text-white text-center p-5 rounded-[0.9375rem]'>
                <img className='mx-auto w-[6.375rem]' src='./assets/images/obstetrics-and-gynecology.png' alt='obstetrics-and-gynecology.png' />
                Obstetrics and Gynecology
              </button>
              <button className='bg-tealGreen text-xl font-interBold text-white text-center p-5 rounded-[0.9375rem]'>
                <img className='mx-auto w-[6.375rem]' src='./assets/images/obstetrics-and-gynecology.png' alt='obstetrics-and-gynecology.png' />
                Obstetrics and Gynecology
              </button>
            </div>
          </div> */}
      </section>

    </main >
    </>
  );
}

export default App;
