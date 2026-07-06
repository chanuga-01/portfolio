function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-gray-900">
          Get In Touch
        </h2>

        <p className="text-gray-600 mt-6 text-lg leading-8">
          I'm always interested in engineering opportunities, research,
          internships, and collaborations. Feel free to reach out.
        </p>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-10">

          <div className="space-y-6 text-lg text-gray-700">

            <p>
              📧 <span className="font-semibold">chanugaliyanagepro@gmail.com</span>
            </p>

            <p>
              📱 <span className="font-semibold">+94 70 487 2742</span>
            </p>

            <p>
              📍 <span className="font-semibold">
                Wadduwa, Sri Lanka
              </span>
            </p>

          </div>

          <div className="flex justify-center gap-5 mt-10 flex-wrap">

            <a
              href="mailto:chanugaliyanagepro@gmail.com"
              className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/chanuga-01"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chanuga-liyanage-835989306/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;