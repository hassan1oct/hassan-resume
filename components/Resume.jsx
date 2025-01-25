const Resume = () => {
  const downloadPDF = async () => {
    const response = await fetch("/api/generate-pdf", {
      method: "POST",
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Hassan_Shehzad_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  

  return (
    <div id="resume-container" className="bg-white p-8 shadow rounded">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2">Hassan Shehzad</h1>
        <h2 className="text-xl text-gray-600 mb-2">Backend Developer</h2>
        <p className="text-gray-800">
          <a
            href="https://www.google.com/search?q=Karachi"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karachi, Pakistan
          </a>{" "}
          |{" "}
          <a
            href="mailto:hassan.khatri005@gmail.com"
            className="text-blue-500 hover:underline"
          >
            hassan.khatri005@gmail.com
          </a>{" "}
          | +92 331 3218400
        </p>
        <p className="text-gray-800">
          GitHub:{" "}
          <a
            href="https://github.com/hassan1oct"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hassan1oct
          </a>{" "}
          | LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/hassan-shehzad-b81276250/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hassan-shehzad
          </a>
        </p>
      </div>

      {/* Profile Section */}
      <section className="mb-8">
        <h3 className="text-lg font-bold border-b-2 border-gray-400 pb-2">
          Profile
        </h3>
        <p>
          Self-taught Backend Developer with expertise in
          JavaScript, Node.js, and SQL. Proficient in designing and deploying
          scalable backend systems, with additional experience in DevOps and
          automation. Skilled in managing teams and collaborating with
          stakeholders to deliver high-quality software solutions. Excellent
          communicator, brilliant at bridging technical concepts and business needs,
          with successful experience in sales and client relations.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-lg font-bold border-b-2 border-gray-400 pb-2">
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Technical Skills:</h4>
            <ul className="list-disc pl-5">
              <li>JavaScript, Node.js, Flask, Python, TypeScript</li>
              <li>SQL, PostgreSQL, Prisma ORM, Sequelize</li>
              <li>GraphQL, REST APIs, OAuth, JWT</li>
              <li>Docker, CI/CD, Git, Nginx, Microsoft Azure, DigitalOcean</li>
              <li>Automation, Selenium, Pandas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Soft Skills:</h4>
            <ul className="list-disc pl-5">
              <li>Leadership, Communication, Problem-Solving, Adaptability</li>
            </ul>
            <h4 className="font-semibold mt-4">Tools & Frameworks:</h4>
            <ul className="list-disc pl-5">
              <li>NestJS, Moleculer.js, Mikro ORM</li>
              <li>Stripe, Nodemailer, Socket.io, RabbitMQ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h3 className="text-lg font-bold border-b-2 border-gray-400 pb-2">
          Work Experience
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">
              Backend Developer & Account Executive
            </h4>
            <p className="text-gray-600">Codesy (Dec 2023 – Present)</p>
            <ul className="list-disc pl-5">
              <li>
                Built a client project using Moleculer.js and PostgreSQL with
                microservices architecture, ensuring efficient RabbitMQ
                communication and containerized deployment via Docker.
              </li>
              <li>
                Designed and developed an in-house sales automation tool using
                Node.js, NestJS, and Prisma ORM, integrating JWT authentication
                and Twilio communication.
              </li>
              <li>
                Created a Python-based scraper for automated email extraction,
                training an AI model for enhanced accuracy and performance.
              </li>
              <li>
                Conducted client sales calls, effectively communicating
                technical solutions to entrepreneurs, CEOs, and business owners.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Team Lead & Backend Developer</h4>
            <p className="text-gray-600">Intech Ventures (June 2023 – Nov 2023)</p>
            <ul className="list-disc pl-5">
              <li>
                Recruited and led a development team for the Dhoondhley project.
              </li>
              <li>
                Developed the backend using Node.js, Express, and Sequelize.
              </li>
              <li>
                Deployed the project on Microsoft Azure, ensuring system
                reliability through Nginx, PM2, and automated backups.
              </li>
              <li>
                Actively participated in operations, hiring, and stakeholder
                communication for smooth project execution.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Node.js Developer</h4>
            <p className="text-gray-600">Internative Labs LLC (Feb 2023 – Apr 2023)</p>
            <ul className="list-disc pl-5">
              <li>
                Designed and developed Zenith Novels, a platform for writers and
                readers, with subscription management and author earnings.
              </li>
              <li>
                Built a stock management app with OAuth and Stripe for secure
                transactions.
              </li>
              <li>
                Improved the user experience for an e-commerce platform using
                EJS and backend optimization.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Backend Developer Intern</h4>
            <p className="text-gray-600">Inaequo Solutions (Oct 2022 – Feb 2023)</p>
            <ul className="list-disc pl-5">
              <li>
                Spearheaded the development of inRetail, an inventory management
                system using Node.js, TypeScript, and PostgreSQL.
              </li>
              <li>
                Implemented secure system components using Passport, Multer,
                Bcrypt, and JWT.
              </li>
              <li>
                Optimized code for scalable performance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h3 className="text-lg font-bold border-b-2 border-gray-400 pb-2">
          Education
        </h3>
        <ul className="list-disc pl-5">
          <li>
            A-Levels (Computer Science) – Highbrow College, Karachi, Pakistan
            (2020 – 2022)
          </li>
          <li>
            O-Levels (Pre-Engineering) – St. Patrick’s High School, Karachi,
            Pakistan (2014 – 2020)
          </li>
        </ul>
      </section>

      <section>
  <h3 className="text-lg font-bold border-b-2 border-gray-400 pb-2">
    Interests
  </h3>
  <ul className="list-disc pl-5">
    <li>Music</li>
    <li>Chess</li>
    <li>Table Tennis</li>
    <li className="flex justify-between items-center">
      <span className="ml-auto text-sm">
        <span>Code on </span>
        <a
          href="https://github.com/hassan1oct/hassan-resume"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </span>
    </li>
  </ul>
</section>


      <button
        id="save-pdf"
        onClick={downloadPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-6"
      >
        Download as PDF
      </button>
    </div>
  );
};


export default Resume;
