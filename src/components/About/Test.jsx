'use client'; // Required for Client Component since we're using event handlers


export default function Test() {
  return (
    <div className="bg-white px-4">
     <div className="flex justify-end text-left text-[7rem] text-black max-w-2xl ml-auto leading-none font-black">
  <h1>Our Success Stories</h1>
</div>

    <section className="py-4 px-4 bg-black ">
   
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center p-2  rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png.png" alt="Description of image 1" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center items-center p-2  rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png1.png" alt="Description of image 2" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center items-center p-2  rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png3.png" alt="Description of image 3" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center items-center p-2 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png4.png" alt="Description of image 4" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center items-center p-2 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png5.png" alt="Description of image 5" className="max-w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center items-center p-2 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src="/png6.png" alt="Description of image 6" className="max-w-full h-auto object-cover" />
        </div>
      </div>
    </section>
    </div>
  );
}
