function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Technical Skills
      </h2>

      <p className="text-center text-gray-500 mt-4 mb-16">
        Technologies and tools I use in engineering and software development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Programming
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Python</li>
            <li>MATLAB</li>
            <li>C</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Engineering
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>SolidWorks</li>
            <li>MATLAB/Simulink</li>
            <li>ANSYS</li>
            <li>CAD Design</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            AI & Data
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Machine Learning</li>
            <li>Signal Processing</li>
            <li>Data Analysis</li>
            <li>Scikit-learn</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Embedded
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Arduino</li>
            <li>AVR</li>
            <li>Sensors</li>
            <li>Electronics</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;