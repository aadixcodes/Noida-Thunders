


export default function Location() {
  return (
    <section className="w-full px-4 md:px-6 py-12 flex justify-center mb-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8">

        {/* LEFT: Contact Form Card */}

        <div
          className="w-full md:w-1/2 rounded-xl relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/vollyball.webp')", // Replace with your background image
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/85 opacity-60 z-0 rounded-xl" />

          {/* Form Content */}
          <form className="relative z-10 p-8 space-y-5 text-white font-[para-1]">
            <h2 className="text-4xl mb-4 text-center font-[heading-1]">Send Us Message</h2>

            <div>
              <label className="block mb-1">Name :</label>
              <input
                type="text"
                placeholder="name"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white placeholder-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Email :</label>
              <input
                type="email"
                placeholder="email"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white placeholder-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Subject :</label>
              <input
                type="text"
                placeholder="subject"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white placeholder-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Message :</label>
              <textarea
                placeholder="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white placeholder-gray-300 focus:outline-none resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: Map Card Container */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border-2 border-blue-900 h-[597px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51076159457!2d77.31942423472935!3d28.522327774263665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753900962452!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}


