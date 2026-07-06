function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Professional Experience
        </h2>

        <p className="text-center text-gray-600 mt-4 text-lg">
          Industrial experience gained through internships in manufacturing,
          electric vehicle engineering, and mechanical system design.
        </p>

        {/* ===================================================== */}
        {/* Korean SPA */}
        {/* ===================================================== */}

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Mechanical Engineering Internship
          </span>

          <h3 className="text-4xl font-bold mt-5">
            Korean SPA Packaging (Pvt) Ltd.
          </h3>

          <h4 className="text-xl text-blue-700 mt-2 font-semibold">
            September 2025 – November 2025
          </h4>

          <p className="text-gray-600 leading-8 mt-6">
            Gained practical experience in industrial manufacturing systems,
            automation, maintenance engineering, and production processes while
            supporting engineering design and troubleshooting activities.
          </p>

          <h4 className="font-bold text-xl mt-8 mb-4">
            Key Experience
          </h4>

          <ul className="space-y-3 text-gray-600">

            <li>✔ Designed secondary containment containers using sheet metal design principles.</li>

            <li>✔ Investigated NC cutter faults and industrial troubleshooting procedures.</li>

            <li>✔ Worked with PLC-controlled automation systems and industrial sensors.</li>

            <li>✔ Studied steam boilers, compressed air systems, and pneumatic controls.</li>

            <li>✔ Participated in preventive maintenance and engineering inspections.</li>

          </ul>

          <h4 className="font-bold text-xl mt-8 mb-4">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">

            {[
              "SolidWorks",
              "AutoCAD",
              "PLC Systems",
              "Industrial Automation",
              "Sheet Metal Design",
              "Pneumatics",
              "Machine Maintenance",
              "Manufacturing"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* ===================================================== */}
        {/* Vega */}
        {/* ===================================================== */}

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">

          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            Mechanical Engineering Internship
          </span>

          <h3 className="text-4xl font-bold mt-5">
            Vega Innovations (Pvt) Ltd.
          </h3>

          <h4 className="text-xl text-blue-700 mt-2 font-semibold">
            July 2024 – October 2024
          </h4>

          <p className="text-gray-600 leading-8 mt-6">
            Worked on EV battery systems and mechanical design projects
            involving battery pack development, pneumatic systems, CAD
            modeling, and engineering optimization.
          </p>

          <h4 className="font-bold text-xl mt-8 mb-4">
            Key Experience
          </h4>

          <ul className="space-y-3 text-gray-600">

            <li>✔ Designed a pneumatic Battery Cell Compression Machine for LiFePO₄ battery testing.</li>

            <li>✔ Designed battery placement solutions for three-wheel EV chassis integration.</li>

            <li>✔ Performed CAD modeling and engineering drawings.</li>

            <li>✔ Selected mechanical and pneumatic components.</li>

            <li>✔ Applied machine design, structural design, and manufacturing principles.</li>

          </ul>

          <h4 className="font-bold text-xl mt-8 mb-4">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">

            {[
              "SolidWorks",
              "AutoCAD",
              "Mechanical Design",
              "Battery Engineering",
              "Pneumatic Systems",
              "Machine Design",
              "Prototype Design",
              "Engineering Drawings"
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
    </section>
  );
}

export default Experience;