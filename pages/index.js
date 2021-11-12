import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import autoprefixer from "autoprefixer"



export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div className="relative italic  overflow-hidden " style = {{backgroundColor:"#252324"}}>
    
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32" style = {{backgroundColor:"#252324"}}>
        

        <Popover>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" //logo here
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">

                
                <a href="#nft" className="font-medium text-white hover:text-gray-300">
                  NFT
                </a>
                <a href="#roadmap" className="font-medium text-white hover:text-gray-300">
                  RoadMap
                </a>
                <a href="#about" className="font-medium text-white hover:text-gray-300">
                  About
                </a>
                
                <button onClick={connect} class= " text-green-500 hover:text-green-900">MetaMask</button>
                {active ? <span class= "text-green-500" style={{marginLeft:"0"}}>Connected with <b>{account}</b></span> : <span class= "text-green-700" style={{marginLeft:"0"}} > - Not connected</span>}

              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md  ring-1 ring-black ring-opacity-5 overflow-hidden" style = {{backgroundColor:"#252324"}}>
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
               
                <a
                  href="#nft"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 "
                >
                  NFT
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 "
                >
                  About
                </a>
                <a
                  href="#roadmap"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 "
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-gray bg-gray-50 "
                >
                
                 connect
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">CryptoCats</span>{' '}

            </h1>

            <p className="mt-8 not-italic text-base text-left text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Join the Non-Fungible NFT project featuring the Crypto.Cats!
            The collection includes ten hand painted cats with unique features and attributes.
            These NFT are hand by Venice Biennale Golden Lion award winner Mick.jr
            use the links to get these on opensea>>



            
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://opensea.io/assets?search[query]=cryptocat"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="mt-20 lg:absolute lg:right-2 lg:w-1/2 lg:inset-y-0"> 
    
      <img
        className="mt-20 h-56 w-full object-contain sm:h-80 sm:pb-10 md:h-96 lg:w-50 lg:h-50"
        src="https://i.ibb.co/p3Rr41F/videotogif-2021-11-12-14-49-25-1.gif"
        alt="pic"
      />
    </div>
   
    <div style={{ borderTop: "2px solid #fff ", margin:"auto", width:"70%"   }}></div>

     {/* about */}
<div  className="h-70" style= {{backgroundColor:"#252324", paddingTop:20, paddingBottom:30}}>

<div style={{padding:"2% 0 0 0"}}>
  <h3 id = "about" className="text-white text-center text-6xl italic ">About</h3>

  <div style={{padding:"2% 25% 2% 25%"}}>
    <p className="text-2xl text-gray-400 not-italic text-center"> The Crypto.Cat is the Hand drawn collection of the Crypto.Cats 1/1 will be the first Non-fungible cat collection available on Opensea in May 2022. The Crypto.Cats Collection was created to highlight the importance of pets in the crypto space and reflects the individuality and uniqueness of every pet. 
    </p>
    <p className="text-2xl text-gray-400 not-italic text-center" style={{paddingTop:20}}> Every cat is unique and have historically been indivisible when it comes to their utility.</p>
    <p className="text-2xl text-gray-400 not-italic text-center" style={{paddingTop:20}}>That's one reason driving their value</p>

  </div>
</div>
</div>

<div style={{ borderTop: "2px solid #fff ", margin:"auto", width:"70%"   }}></div>

    {/* image */}
    <div id = "nft" >
      <p className=" text-white text-center text-6xl italic" style={{padding:"2% 25% 2% 25%"}}>Our Initial NFT Collection</p>
      <img src="https://i.ibb.co/58WvDzg/Pics-Art-11-12-01-31-13-1.jpg" class=" "></img>
    </div>
    <div style={{ borderTop: "2px solid #fff ", margin:"auto", width:"70%"  }}></div>

 <div id="roadmap" class = "pt-20 pb-20">
   < div >
     <h1 class = "text-white text-center text-6xl italic  text-white">RoadMap</h1>
     <div class ="text-white text-left ml-60 mt-10 "><h2 class ="underline text-green-500">Q1 2022</h2>
       <ul class = "list-disc pt-10 pb-10 text-blue-500">project Launch
         <li class ="text-white">
           project will be launched in 2022

         </li>
       </ul>

       <ul class = "list-disc pt-1 pb-10 text-blue-500">Mega giveaway
         <li class ="text-white">
         We will giveaway 1 new handdrawn NFT
         </li>
       </ul>
       <ul class = "list-disc pt-1 pb-10 text-blue-500">Support artists
         <li class ="text-white">
         Art contest with a prize fund of $1k
         </li>
       </ul>
       <ul class = "list-disc pt-1 pb-10 text-blue-500">Exclusive Merch
         <li class ="text-white">
         Launching a Branded  Merch. Part of the profit will be donated to charity.
         </li>
       </ul>
     </div>

   </div>
 </div>
 <div style={{ borderTop: "2px solid #fff ", margin:"auto", width:"70%"   }}></div>
 
 

    <footer class=" ">
      <div class = " " >
        <div class="text-center text-white">
          <p>© CryptoCats - made for internship</p>
          </div>
      </div>
    </footer>

  </div>
  )
}
