function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <p className="text-gray-700 leading-8 text-lg">
            I'm a Mechanical Engineering graduate specializing in Mechatronics from the University of Peradeniya.
            I have a strong interest in intelligent engineering systems and enjoy integrating mechanical engineering 
            with programming, simulation, automation, artificial intelligence, and data-driven approaches to solve real-world engineering challenges.

              <br /><br />

              Through academic projects, research, and industrial
              experience, I have developed skills in product
              design, embedded systems, digital technologies,
              and engineering analysis. I am always eager to
              learn new technologies and contribute to innovative
              and practical engineering solutions across
              different engineering industries.

            </p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="bg-blue-50 rounded-2xl p-6 shadow">

              <h3 className="text-2xl font-bold text-blue-700">
                Education
              </h3>

              <p className="mt-4 leading-8">

                <strong>B.Sc. Engineering (Mechanical)</strong>

                <br />

                University of Peradeniya

                <br />

                Specialization : Mechatronics

                <br />

                GPA : 3.54 / 4.00

              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow">

            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              School Education
            </h3>

            <h4 className="font-bold text-2xl">
              Sri Sumangala College, Panadura
            </h4>

            <p className="text-gray-700 mt-2">
              G.C.E. Advanced Level (Physical Science)
            </p>

            <p className="text-gray-700 mt-2">
              Results: <strong>2A's, 1B</strong>
            </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;