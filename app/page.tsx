import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <body>
     <div className="flex justify-center items items-center min-h-screen">
        <div className="framer min-h-screen w-auto">
            <div id="Framed Content" className="framer">
              <div id="Profile Box" className="framer">
                <section id="Basic Information" className="profile">
                  <div className="aspect-w-1 aspect-h-1 border border-solid border-gray-300 rounded-full h-[80px] w-[80px]">
                    <div id="Picture" className="inset-0 rounded-full">
                    <img src="/dannielkgilo.png" width="80" height="80" />
                    </div>
                  </div>
                  <div id="Information" className="profile">
                    <div id="Name" className="info">
                      <div className="info-1 text-3xl font-semibold">Daniel</div>
                      <div className="info-1">
                        <div style={{display: 'inline-block'}} className="h-full w-full">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={24} height={24} className="h-full w-full">
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="Description" className="framer outline-none flex flex-col justify-start flex-shrink-0 transform-none">
                      <p>The Notion Guy. Helping you be more productive and organized.</p>
                    </div>
                  </div>
                </section>
                <section id="Social Links" className="social-l opacity-100 transform perspectove-1200">
                  <div id="Facebook" className="socials bg-gray-200 h-full w-full opacity-100 rounded-full">
                    <a href="https://www.facebook.com/audsc.dkgilo" className="socials">
                      <div id="Display Facebook" className="socials w-full h-full opacity-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="element mt-2.5 ml-2.5 hover:text-black transition-colors duration-300" viewBox="0 0 75 75">
                          <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div id="LinkedIn" className="socials bg-gray-200 h-full w-full opacity-100 rounded-full">
                  <a href="www.linkedin.com/in/dannielkgilo" className="socials">
                      <div id="Display LinkedIn" className="socials w-full h-full opacity-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="element mt-2 ml-2" viewBox="0 0 30 30">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div id="Instagram" className="socials bg-gray-200 h-full w-full opacity-100 rounded-full">
                  <a href="https://www.instagram.com/dannielcgi/" className="socials">
                      <div id="Display Instagram" className="socials w-full h-full opacity-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="element mt-2 ml-1.5" viewBox="0 0 30 30">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div id="Notion" className="socials bg-gray-200 h-full w-full opacity-100 rounded-full">
                  <a href="https://dannielk-gilo.notion.site/Danniel-C-Gilo-c0673f2ca80c4e1aa8bafc35856d1adb?pvs=4" className="socials">
                      <div id="Display Instagram" className="socials w-full h-full opacity-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="element mt-2 ml-2" viewBox="0 0 32 32">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="framer" id="Navigation">
              <nav>
              <div className="container mx-auto flex justify-between items-center">
                  <ul className="flex space-x-7 mt-3">
                    <li><a href="https://dannielk-gilo.notion.site/About-841fffd647bf4a88bafc8dd5055bef77?pvs=4" className="text-black hover:underline">About Me</a></li>
                    <li><a href="https://dannielk-gilo.notion.site/TedTalk-fbddfce25ffd4a3c8a54f2af6f527a7b?pvs=4" className="text-black hover:underline">TedTalk</a></li>
                    <li><a href="https://dannielk-gilo.notion.site/Skills-a7db3073568447e3b47ccf734824e3d3?pvs=4" className="text-black hover:underline">Skills</a></li>
                    <li><a href="https://dannielk-gilo.notion.site/About-841fffd647bf4a88bafc8dd5055bef77?pvs=4" className="text-black hover:underline">Contact</a></li>
                  </ul>
              </div>
              </nav>
            </div>

            <div className="framer" id="Shops">
            <div className="flex-none h-auto relative w-full">
                <div id="Shop Tag" className="shop-box">
                  <div className="opacity-100 flex-none h-30 w-30 relative">
                  <div style={{display: 'inline-block'}} className="h-full w-full">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width={30} height={30} className="h-full w-full">
                            <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            ></path>
                          </svg>
                        </div>
                  </div>
                  <div className="shop-tag outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                    <h2 className="shop font-semibold">Shop</h2>
                  </div>
                </div>
              </div>
              <div className="shop-content w-full">
                <div className="shope-frame w-full">
                  <div className="box border-b-2 border-l-2 border-r-2 border-t-2 border-solid border-gray-300 bg-white opacity-100 rounded-xl w-full">
                    <div>
                      <img src="/notion.jpg" width="650" height="200" className="mt-6"/>
                    </div>
                    <div>
                      <a href="/shop" className="text mb-4 bg-black text-white hover:bg-gray-900 hover:transition-colors duration-100 rounded-xl">
                        Shop Templates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>               
          </div>
     </div>

    </body>
  );
}
