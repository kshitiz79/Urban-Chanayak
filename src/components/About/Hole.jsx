// components/HtmlEmbed.js
export default function Hole() {
  return (
    <div className="bg-white">
    <div className="w-[92vw] bg-[#e5e8ea] mx-auto bg-white">
    {/* Iframe Section */}
    <div className="h-screen">
      <iframe
        src="/embedded/about.html"
        className="w-full h-full border-0"
        title="Embedded HTML"
      ></iframe>
    </div>
  </div>
  </div>
  );
}


