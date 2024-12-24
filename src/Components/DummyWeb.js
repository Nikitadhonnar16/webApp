import React from 'react'
import { useEffect } from 'react';
import  { useRef, useState } from 'react';

 



const DummyWeb = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
 const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
      <div>

       {/* header     */}
<header class="bg-white shadow">
  <div class="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
    <div class="flex items-center w-full sm:w-auto">
      <img alt="Paradise Group Logo" class="h-10" height="50" src="https://storage.googleapis.com/a1aa/image/Q5m4wuUCjRpiAdM3WfmgVnG3VHCSjGVK0H2zFeikAZD71t9TA.jpg" width="50"/>
      <div class="ml-4">
        <h1 class="text-xl font-bold">
          SAI WORLD DREAMS
        </h1>
        <p class="text-sm text-gray-600">
          KALYAN-SHIL ROAD, DOMBIVLI
        </p>
      </div>
    </div>
    <nav class="hidden sm:flex space-x-4">
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-tags"></i> Price
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-building"></i> Site &amp; Floor Plan
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-wifi"></i> Amenities
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-map-marker-alt"></i> Location
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-camera"></i> Gallery
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-video"></i> Virtual Tour Request
      </a>
      <a class="text-gray-700 hover:text-blue-600" href="#">
        <i class="fas fa-file-alt"></i> Brochure
      </a>
    </nav>
    <div class="flex items-center space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
      <button class="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
        Organize Site Visit
      </button>
      <a class="text-gray-700 hover:text-blue-600" href="tel:+919619095795">
        <i class="fas fa-phone"></i> +919619095795
      </a>
    </div>
  </div>
</header>


<main className="container mx-auto mt-6 flex items-start">
   {/* Left section over the background image (20% width) */}
   <div className="lg:w-[400px] l  bg-white shadow-lg rounded-lg p-6 absolute z-10 top-[120px] left-2" 
        style={{ backgroundColor: 'white', height: '70%', paddingTop: '20px' }}>
      <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg">
        <p>Booking Open: Limited Time Only</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center">Sai World Dreams</h2>
        <p className="text-center text-gray-600">At Kalyan-Shil Road By Paradise Group</p>
        <div className="mt-4">
          <div className="flex justify-between py-2 border-b">
            <span>Land Parcel</span>
            <span className="font-bold">18 Acres</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Floors</span>
            <span className="font-bold">G+35 storeys</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Possession</span>
            <span className="font-bold">December 2026</span>
          </div>
        </div>
        <div className="bg-blue-600 text-white text-center py-4 mt-4 rounded-lg">
          <p>- Spin The Wheel Offers</p>
          <p>- Early Buy Discounts</p>
          <p>- Assured Gift On Every Booking</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg">Luxurious 1, 2, 2.5 &amp; 3 BHK Starts From</p>
          <p className="text-2xl font-bold">₹ 49 Lacs*</p>
          <p>Onwards</p>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Download Brochure</button>
        </div>
      </div>
    </div>

   {/* Image as background (80% width) */}
   <div className="lg:w-4/5 bg-cover bg-center relative" 
        style={{ backgroundImage: "url('https://storage.googleapis.com/a1aa/image/UvncaFclFJ6FP9fGqztdTgVPeScNeJKEgqcjhq8kXTW9rb7nA.jpg')", height: '650px' }}>
   </div>

   {/* Aside section (20% width) on the right, fixed position */}
  <aside className="hidden lg:block lg:w-1/5 bg-white shadow-lg rounded-lg p-6 fixed top-[120px] right-0 z-20 h-full">
      <h3 className="text-xl font-bold text-center">Get The Best Quote</h3>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 border rounded" id="name" placeholder="Name" type="text"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="mobile">Mobile No.</label>
          <div className="flex">
            <select className="px-4 py-2 border rounded-l">
              <option value="+91">+91</option>
            </select>
            <input className="w-full px-4 py-2 border rounded-r" id="mobile" placeholder="Mobile No." type="text"/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email ID</label>
          <input className="w-full px-4 py-2 border rounded" id="email" placeholder="Email ID" type="email"/>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Submit</button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <img alt="Free Pickup and Drop Service Illustration" className="mx-auto" height="150" 
             src="https://storage.googleapis.com/a1aa/image/i4ylwWKwTLaiMFrtYn3YJ0E5RJbdvopM07a25zUm2wEf62eTA.jpg" width="200"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Book A Free Site Visit</button>
      </div>
   </aside>
          </main>
          
    <div class="container mx-auto p-2">
   <div class="bg-white p-6 rounded shadow-md">
    <h1 class="text-3xl font-bold text-blue-900 mb-4">
     Welcome To Sai World Dreams
    </h1>
    <p class="text-gray-700 mb-4">
     Nestled in the vibrant lanes of Dombivli, Sai World Dream is a stunning township featuring luxurious residences, commercial parks, and high-street retail spaces. The newly launched Breeze tower presents spacious themed luxury apartments in 1, 2, 2.5, and 3 BHK configurations, complete with an array of lifestyle amenities. Residents can enjoy unique features like a karaoke room and private theater, alongside essential facilities such as a library, souvenir shop, toddler play areas, bar and café, and a business center.
    </p>
    <a class="text-blue-600 underline mb-4 inline-block" href="#">
     Read more
    </a>
    <div class="mb-6">
     <a class="bg-blue-900 text-white px-4 py-2 rounded inline-flex items-center" href="#">
      <i class="fas fa-download mr-2">
      </i>
      Download Brochure
     </a>
    </div>
   </div>
   <div class="bg-white p-6 rounded shadow-md mt-6 flex flex-col lg:flex-row">
    <div class="lg:w-[800px]">
     <h2 class="text-2xl font-bold text-blue-900 mb-4">
      Price
     </h2>
     <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
       <thead>
        <tr>
         <th class="py-2 px-4 border-b">
          Type
         </th>
         <th class="py-2 px-4 border-b">
          Carpet Area
         </th>
         <th class="py-2 px-4 border-b">
          Price
         </th>
         <th class="py-2 px-4 border-b">
         </th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td class="py-2 px-4 border-b">
          1 BHK
         </td>
         <td class="py-2 px-4 border-b">
          450 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 49 Lacs* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
        <tr>
         <td class="py-2 px-4 border-b">
          2 BHK
         </td>
         <td class="py-2 px-4 border-b">
          711 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 76.50 Lacs* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
        <tr>
         <td class="py-2 px-4 border-b">
          2 BHK
         </td>
         <td class="py-2 px-4 border-b">
          720 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 77.50 Lacs* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
        <tr>
         <td class="py-2 px-4 border-b">
          2 BHK
         </td>
         <td class="py-2 px-4 border-b">
          730 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 78.50 Lacs* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
        <tr>
         <td class="py-2 px-4 border-b">
          2.5 BHK
         </td>
         <td class="py-2 px-4 border-b">
          825 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 88 Lacs* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
        <tr>
         <td class="py-2 px-4 border-b">
          3 BHK
         </td>
         <td class="py-2 px-4 border-b">
          1194 Sq.Ft.
         </td>
         <td class="py-2 px-4 border-b">
          ₹ 1.26 Cr* Onwards
         </td>
         <td class="py-2 px-2 border-b">
          <a class="bg-blue-900 text-white px-2 py-0 lg:py-2  rounded " href="#">
           Price Breakup
          </a>
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
      <div class="lg:w-1/3 lg:pl-2 mt-6 lg:mt-0 flex justify-center lg:justify-start">
                      <a class="bg-blue-900 text-white px-6 py-3 rounded inline-flex items-center" href="#">
    <div className='d-flex'>
    <img alt="Costing details document preview" className=" w-[300px]  pt-2"  src="https://storage.googleapis.com/a1aa/image/qOF2O4mAFZKCApcPsqlGabl6LeJoWMz5vvf6yMI4bbfjPl7nA.jpg" />
    <button className='ml-12'>Complete Costing Details</button>
  </div>
  </a>
</div>

   </div>
   </div>  


    <div class="container mx-auto p-4 sm:pr-0 lg:pr-[330px] ">
        <section class="mb-8">
            <h2 class="text-2xl font-bold text-blue-900 mb-4">Gallery Of Sai World Dreams</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img alt="Gallery image 1" class="w-full h-auto rounded-lg shadow-md" height="200" src="https://storage.googleapis.com/a1aa/image/AlGCIUQI2p6zAFCWlpf6WABXABJuHsr9JThjN8DkJo9nhf9TA.jpg" width="300"/>
                <img alt="Gallery image 2" class="w-full h-auto rounded-lg shadow-md" height="200" src="https://storage.googleapis.com/a1aa/image/ph9AeHuVtESJfEB7zSMipFL4uqCtvxiYDSHlIX2ybLUWDf7nA.jpg" width="300"/>
                <img alt="Gallery image 3" class="w-full h-auto rounded-lg shadow-md" height="200" src="https://storage.googleapis.com/a1aa/image/CV73l0c9OKoedaEviz3w0XHtnuaKN2aGzUIOVrihAI4mhf9TA.jpg" width="300"/>
                <img alt="Gallery image 4" class="w-full h-auto rounded-lg shadow-md" height="200" src="https://storage.googleapis.com/a1aa/image/uRDp5dYelX2YMKZuYuW949I6p1LUj8P6T1g4elpnv1lUDf7nA.jpg" width="300"/>
            </div>
        </section>
        <section class="mb-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="lg:col-span-2">
                    <h2 class="text-2xl font-bold text-blue-900 mb-4">Address Of Sai World Dreams</h2>
                    <img alt="Map showing the address of Sai World Dreams" class="w-full h-[380px] rounded-lg shadow-md" height="400" src="https://storage.googleapis.com/a1aa/image/oe12fmLgT2p2UkfR4CrzVn9sCKejFHIp8W8sGLucm6vEN83PB.jpg" width="600"/>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-blue-900 mb-4">Location Map</h2>
                    <img alt="Location map of Sai World Dreams" class="w-full h-auto rounded-lg shadow-md" height="400" src="https://storage.googleapis.com/a1aa/image/5xhXdFdAf0zWAa7H1ZWMg5x4dzfykJOpLVTZ1fyQfPHPN83PB.jpg" width="600"/>
                </div>
            </div>
        </section>
        <section class="mb-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-blue-900">
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Kalyan Taloja Metro- 2 mins</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Dombivli Railway Station – 15 mins</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Multimodal Corridor- 5 mins</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Navi Mumbai Airport- 30 mins</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>Ira Global School – 4 mins</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>LODH Xperia Mall – 10 mins</span>
                </div>
            </div>
        </section>
    </div>   
     
          <div className="container mx-auto p-4 sm:pr-0 lg:pr-[330px]">
      <h1 className="text-xl font-bold text-blue-800 mb-4">Virtual Tour Request</h1>
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto"
          controls
          onClick={togglePlayPause} // Clicking video toggles play/pause
        >
          <source src="https://live-par-2-abr.livepush.io/vod/bigbuckbunnyclip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause icon */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={togglePlayPause} style={{ zIndex: 100 }} // Clicking on the overlay toggles play/pause
        >
          <i
            className={`fas fa-${isPlaying ? 'pause' : 'play'}-circle text-white text-6xl mb-4 cursor-pointer`}
          ></i>
        </div>
      </div>
    </div>
   
      
       <div class=" mx-auto p-4 sm:pr-0 lg:pr-[330px]">
        <div class="flex justify-center items-center mb-8">
            <img alt="Sai World Dreams Logo" class="h-12" height="50" src="https://storage.googleapis.com/a1aa/image/b1gLwzTSttKEHpNrgzoOveelK5BOlcjhanmYg6b6M5RIyf7nA.jpg" width="100"/>
        </div>
        <div class="mb-8">
            <h1 class="text-2xl font-bold mb-4">About Developer</h1>
            <p class="text-lg">
                Founded in 1990, Paradise Group develops luxury residential properties &amp; retail malls across the emerging locales of Mumbai &amp; Navi Mumbai. With a firm presence in suburbs such as Kalyan, Chembur, Dombivli, Kharghar, Taloja, &amp; Panvel, the company has built a good niche for itself in the city through the years.
            </p>
        </div>
        <div class="mb-8">
            <h2 class="text-xl font-bold mb-4">RERA Information</h2>
            <div class="flex justify-center items-center mb-4">
                <img alt="QR Code for Sai World Dreams" class="h-24 w-24 mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/YmEkaqSzbzI5BNleeDJLHaW97JA1X1euTH0jkkptYxzXkf3PB.jpg" width="100"/>
                <div>
                    <p class="text-lg">Sai World Dreams</p>
                    <p class="text-lg">MahaRERA - <span class="font-bold">P51700035191</span></p>
                </div>
            </div>
            <p class="text-lg">
                Sai World Dreams has been registered via MahaRERA registration number: P51800077358 and is available on the website
                <a class="text-blue-600" href="https://maharera.mahaonline.gov.in/">https://maharera.mahaonline.gov.in/</a> under registered projects.
            </p>
        </div>
        <div class="border-t border-gray-300 pt-4">
            <p class="text-sm text-gray-600 mb-2">
                <span class="font-bold">Disclaimer:</span> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
            </p>
            <p class="text-sm text-gray-600 mb-2">
                © Copyright | <a class="text-blue-600" href="#">Terms &amp; Conditions</a> | <a class="text-blue-600" href="#">Privacy Policy</a> | <a class="text-blue-600" href="#">Cookies Policy</a>
            </p>
        </div>
    </div>
  

    </div>
  )
}

export default DummyWeb 
