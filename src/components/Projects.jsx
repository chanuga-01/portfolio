import rideTwin from "../assets/ridetwin.png";
import voltmotive from "../assets/voltmotive.jpeg";
import compression1 from "../assets/cellcompress1.jpeg";
import compression2 from "../assets/cellcompress2.jpeg";
import v6engine from "../assets/v6engine.JPG";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Featured Engineering Projects
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Engineering projects demonstrating research, product development,
          simulation and practical engineering skills.
        </p>

        {/* ===================================================== */}
        {/* RideTwin */}
        {/* ===================================================== */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          <img
          src={rideTwin}
          alt="RideTwin"
          className="w-full h-auto"
/>

          <div className="p-10">

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Final Year Research
            </span>

            <h3 className="text-4xl font-bold mt-5">
              RideTwin
            </h3>

            <h4 className="text-xl text-blue-700 mt-2 font-semibold">
              AI-Based Digital Twin for Vehicle Ride Comfort Analysis
            </h4>

            <p className="text-gray-600 leading-8 mt-6">
              Developed an AI-powered Digital Twin of a quarter-car vehicle
              suspension system using MATLAB and Simulink to simulate vehicle
              dynamics under varying road profiles and operating conditions.
              Generated a physics-based synthetic dataset and evaluated ride
              comfort according to ISO 2631 using Frequency-Weighted RMS
              Acceleration and Vibration Dose Value (VDV). Implemented signal
              processing techniques including Butterworth filtering and ISO Wk
              frequency weighting before training Machine Learning models for
              ride comfort prediction. Applied Differential Evolution to optimize
              suspension stiffness and damping parameters for improved passenger
              comfort.
            </p>

            <h4 className="font-bold text-xl mt-8 mb-4">
              Technologies & Tools
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "MATLAB",
                "Simulink",
                "Python",
                "Machine Learning",
                "MLP",
                "Random Forest",
                "Linear Regression",
                "Differential Evolution",
                "ISO 2631",
                "Signal Processing",
                "Vehicle Dynamics",
                "Digital Twin",
                "NumPy",
                "Pandas",
                "Matplotlib",
                "Git"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
          

            </div>

          </div>

        </div>

{/* ===================================================== */}
{/* Voltmotive */}
{/* ===================================================== */}

<div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

  <div className="bg-white flex justify-center items-center p-8">

    <div className="relative overflow-hidden rounded-2xl">

      <img
        src={voltmotive}
        alt="Voltmotive"
        className="max-h-[600px] w-auto rounded-2xl edge-fade"
      />

    </div>

  </div>

  <div className="p-10">

    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
      University Group Project
    </span>

    <h3 className="text-4xl font-bold mt-5">
      Voltmotive
    </h3>

    <h4 className="text-xl text-blue-700 mt-2 font-semibold">
      Hybrid Electric Vehicle Controller Design
    </h4>

    <p className="text-gray-600 leading-8 mt-6">
      Designed and developed a downscaled Series Hybrid Electric Vehicle (HEV)
      featuring an intelligent embedded controller for real-time power
      management. The system integrates dual Arduino microcontrollers,
      multiple sensors, relay-based power switching, and MATLAB/Simulink
      simulations to automatically manage energy flow between the battery
      and generator under different operating conditions. Successfully
      designed, assembled, and tested a complete hardware prototype
      demonstrating embedded systems, control engineering, power
      electronics, and vehicle system integration.
    </p>

    <h4 className="font-bold text-xl mt-8 mb-4">
      Technologies & Tools
    </h4>

    <div className="flex flex-wrap gap-3">

      {[
        "MATLAB",
        "Simulink",
        "Arduino Uno",
        "Arduino Mega",
        "Embedded C",
        "Arduino IDE",
        "Series Hybrid",
        "Energy Management",
        "Battery Management",
        "Power Electronics",
        "Relay Control",
        "PCB Design",
        "Control Systems",
        "Hardware Integration",
      ].map((skill) => (
        <span
          key={skill}
          className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}

    </div>

    {/* ===================================================== */}
    {/* Project Resources */}
    {/* ===================================================== */}

    <h4 className="font-bold text-xl mt-10 mb-5">
      Project Resources
    </h4>

    <div className="space-y-6">

      <div>
        <p className="font-semibold text-gray-800">
          📘 Project Report
        </p>

        <a
          href="https://lnkd.in/eNabZXe3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-all"
        >
          https://lnkd.in/eNabZXe3
        </a>
      </div>

      <div>
        <p className="font-semibold text-gray-800">
          🎥 Demonstration Video 1
        </p>

        <a
          href="https://lnkd.in/e5v8NFc9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-all"
        >
          https://lnkd.in/e5v8NFc9
        </a>
      </div>

      <div>
        <p className="font-semibold text-gray-800">
          🎥 Demonstration Video 2
        </p>

        <a
          href="https://lnkd.in/eufMCsiZ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-all"
        >
          https://lnkd.in/eufMCsiZ
        </a>
      </div>

    </div>

  </div>

</div>

{/* ===================================================== */}
{/* Battery Cell Compression Machine */}
{/* ===================================================== */}

<div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

  <div className="grid grid-cols-2 gap-2">

    <img
      src={compression1}
      alt="Battery Cell Compression Machine"
      className="w-full h-[420px] object-cover"
    />

    <img
      src={compression2}
      alt="Battery Cell Compression Machine"
      className="w-full h-[420px] object-cover"
    />

  </div>

  <div className="p-10">

    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
      Internship Project
    </span>

    <h3 className="text-4xl font-bold mt-5">
      Battery Cell Compression Machine
    </h3>

    <h4 className="text-xl text-blue-700 mt-2 font-semibold">
      Design & Development of a Battery Cell Compression Machine
    </h4>

    <p className="text-gray-600 leading-8 mt-6">
      Designed a pneumatic Battery Cell Compression Machine for LiFePO₄ battery
      cells to provide uniform and adjustable compression during battery
      testing. Applied machine design principles, pneumatic system design,
      force and pressure calculations, CAD modeling, engineering component
      selection, and load cell integration to develop a reliable mechanical
      solution for improving battery performance and cycle life.
    </p>

    <h4 className="font-bold text-xl mt-8 mb-4">
      Key Contributions
    </h4>

    <ul className="space-y-3 text-gray-600">

      <li>✔ Designed the complete mechanical structure and compression mechanism using CAD software.</li>

      <li>✔ Performed force and pressure calculations to size the pneumatic actuation system.</li>

      <li>✔ Selected pneumatic, linear motion, and sensing components based on engineering requirements.</li>

      <li>✔ Integrated a load cell into the design for compression force measurement and validation.</li>

      <li>✔ Developed an adjustable compression mechanism for different LiFePO₄ battery cell configurations.</li>

      

    </ul>

    <h4 className="font-bold text-xl mt-8 mb-4">
      Technologies & Tools
    </h4>

    <div className="flex flex-wrap gap-3">

      {[
        "SolidWorks",
        "AutoCAD",
        "Machine Design",
        "Pneumatic Systems",
        "Mechanical Design",
        "Force & Pressure Calculations",
        "Component Selection",
        "Load Cell Integration",
        "Battery Engineering",
        "Engineering Drawings",
        "Prototype Design",
        
      ].map((skill) => (
        <span
          key={skill}
          className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}

    </div>

  </div>

</div>

        {/* ===================================================== */}
        {/* V6 Engine */}
        {/* ===================================================== */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          <img
            src={v6engine}
            alt="V6 Engine"
            className="w-full h-[500px] object-cover"
          />

          <div className="p-10">

            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
              CAD Design Project
            </span>

            <h3 className="text-4xl font-bold mt-5">
              V6 Engine Design & Assembly
            </h3>

            <h4 className="text-xl text-blue-700 mt-2 font-semibold">
              Design & Assembly of a Fully Functional V6 Engine Model
            </h4>

            <p className="text-gray-600 leading-8 mt-6">
              Designed and assembled a fully functional 3D V6 engine model
              using SolidWorks by modeling individual engine components and
              integrating them into a complete assembly. The project focused
              on mechanical design principles, component relationships,
              assembly constraints, and engineering visualization while
              strengthening practical knowledge of internal combustion engine
              architecture and CAD-based product development.
            </p>

            <h4 className="font-bold text-xl mt-8 mb-4">
              Key Contributions
            </h4>

            <ul className="space-y-3 text-gray-600">

              <li>✔ Designed individual engine components in SolidWorks.</li>

              <li>✔ Built a complete V6 engine assembly.</li>

              <li>✔ Applied assembly mates and mechanical constraints.</li>

              <li>✔ Created accurate 3D mechanical models.</li>

              <li>✔ Improved understanding of internal combustion engine systems.</li>

            </ul>

            <h4 className="font-bold text-xl mt-8 mb-4">
              Technologies & Tools
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "SolidWorks",
                "Mechanical Design",
                "3D CAD Modeling",
                "Assembly Design",
                "Engineering Drawings",
                "Product Design",
                "Automotive Engineering"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

            <h4 className="font-bold text-xl mt-10 mb-5">
              Project Resources
            </h4>

            <div>

              <p className="font-semibold text-gray-800">
                🎥 Demonstration Video
              </p>

              <a
                href="https://lnkd.in/eUMARVcJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 break-all"
              >
                https://lnkd.in/eUMARVcJ
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;