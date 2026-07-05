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

              I'm a final-year Mechanical Engineering undergraduate
              specializing in Mechatronics at the University of
              Peradeniya. I have a strong interest in intelligent
              engineering systems and enjoy combining mechanical
              engineering with programming, simulation,
              automation, and data-driven approaches to solve
              real-world engineering challenges.

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

                GPA : 3.60 / 4.00

              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow">

              <h3 className="text-2xl font-bold text-blue-700">
                Current Research
              </h3>

              <p className="mt-4 leading-8">

                <strong>RideTwin</strong>

                <br />

                AI-Based Digital Twin for Vehicle Ride Comfort Analysis

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;