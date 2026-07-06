import profile from "../assets/profile.JPG";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center pt-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">

        {/* Left Side */}

        <div>

          <p className="text-blue-700 font-semibold mb-4">
            Hi, I'm
          </p>

          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Chanuga Liyanage
          </h1>

          <h2 className="text-3xl font-semibold mt-6 text-gray-800">
  B.Sc. Engineering Graduate
</h2>

<h3 className="text-xl text-blue-700 mt-2">
  Mechanical Engineering • Specializing in Mechatronics
</h3>

          <h3 className="text-xl text-blue-700 mt-2">
            Specializing in Mechatronics
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            Passionate about developing intelligent engineering solutions
            through Digital Twin technology, Machine Learning, Embedded
            Systems, and Mechanical Design.
          </p>

          {/* Contact Details */}

          <div className="mt-8 space-y-3 text-gray-700">

            <p>
              📧 <span className="font-medium">chanugaliyanagepro@gmail.com</span>
            </p>

            <p>
              📱 <span className="font-medium">+94 70 487 2742</span>
            </p>

            <p>
              📍 <span className="font-medium">
                96/A, Galle Road, Pohaddaramulla, Wadduwa
              </span>
            </p>

            <p>
              🎓 <span className="font-medium">
                University of Peradeniya
              </span>
            </p>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
  href={`${import.meta.env.BASE_URL}Chanuga_Liyanage_CV.pdf`}
  download
  className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition duration-300"
>
  Download CV
</a>

            <a
              href="https://github.com/chanuga-01"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chanuga-liyanage-835989306/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Chanuga Liyanage"
            className="w-[420px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;