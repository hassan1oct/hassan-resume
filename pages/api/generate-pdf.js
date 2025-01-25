import chromium from "chrome-aws-lambda";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
      });
      const page = await browser.newPage();

      // Tailwind CSS from CDN
      const tailwindCDN = `
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      `;

      // HTML structure matching the resume.js
      const resumeHTML = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hassan Shehzad Resume</title>
            ${tailwindCDN}
            <style>
              body {
                font-family: 'Inter', sans-serif;
                margin: 0;
                padding: 0;
                line-height: 1.6;
              }
              @media print {
                a {
                  color: inherit;
                  text-decoration: none;
                },
                 .page-break {
    page-break-before: always; /* Forces a new page */
    padding-top: 20px;        /* Adds gap after page break */
    margin-top: 20px;         /* Ensures consistent spacing */
  }
  }
              }
            </style>
          </head>
          <body class="bg-gray-100">
            <div id="resume-container" class="bg-white p-8 shadow rounded mx-auto max-w-3xl">
              <!-- Header -->
              <div class="mb-8">
                <h1 class="text-4xl font-extrabold mb-2">Hassan Shehzad</h1>
                <h2 class="text-xl text-gray-600 mb-2">Backend Developer</h2>
                <p class="text-gray-800">
                  <a
                    href="https://www.google.com/search?q=Karachi"
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Karachi, Pakistan
                  </a>
                  |
                  <a
                    href="mailto:hassan.khatri005@gmail.com"
                    class="text-blue-500 hover:underline"
                  >
                    hassan.khatri005@gmail.com
                  </a>
                  | +92 331 3218400
                </p>
                <p class="text-gray-800">
                  GitHub:
                  <a
                    href="https://github.com/hassan1oct"
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/hassan1oct
                  </a>
                  | LinkedIn:
                  <a
                    href="https://www.linkedin.com/in/hassan-shehzad-b81276250/"
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/hassan-shehzad
                  </a>
                </p>
              </div>

              <!-- Profile Section -->
              <section class="mb-8">
                <h3 class="text-lg font-bold border-b-2 border-gray-400 pb-2">
                  Profile
                </h3>
                <p>
                  Self-taught Backend Developer with expertise in
                  JavaScript, Node.js, and SQL. Proficient in designing and deploying
                  scalable backend systems, with additional experience in DevOps and
                  automation. Skilled in managing teams and collaborating with
                  stakeholders to deliver high-quality software solutions.
                </p>
              </section>

              <!-- Skills Section -->
              <section class="mb-8">
                <h3 class="text-lg font-bold border-b-2 border-gray-400 pb-2">
                  Skills
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold">Technical Skills:</h4>
                    <ul class="list-disc pl-5">
                      <li>JavaScript, Node.js, Flask, Python, TypeScript</li>
                      <li>SQL, PostgreSQL, Prisma ORM, Sequelize</li>
                      <li>GraphQL, REST APIs, OAuth, JWT</li>
                      <li>Docker, CI/CD, Git, Nginx, Microsoft Azure, DigitalOcean, AWS</li>
                      <li>Automation, Selenium, Pandas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold">Soft Skills:</h4>
                    <ul class="list-disc pl-5">
                      <li>Leadership, Communication, Problem-Solving, Adaptability</li>
                    </ul>
                    <h4 class="font-semibold mt-4">Tools & Frameworks:</h4>
                    <ul class="list-disc pl-5">
                      <li>NestJS, Moleculer.js, Prisma, Sequelize</li>
                      <li>Stripe, Nodemailer, Socket.io, RabbitMQ</li>
                    </ul>
                  </div>
                </div>
              </section>

              <!-- Work Experience Section -->
    <div class="section break-inside">
  <h3 class="text-lg font-bold border-b-2 border-gray-400 pb-2">Work Experience</h3>
<div class="page-break">
  <h4 class="font-semibold">Backend Developer & Account Executive</h4>
  <p class="text-gray-600 mb-2">Codesy (Dec 2023 – Present)</p>
  <ul class="list-disc pl-5">
    <li>
      Built a client project using Moleculer.js and PostgreSQL with
      microservices architecture, ensuring efficient RabbitMQ
      communication and containerized deployment via Docker.
    </li>
    <li>
      Designed and developed an in-house sales automation tool using
      Node.js, NestJS, and Prisma ORM, integrating JWT authentication,
      Twilio communication, and secure CI/CD pipelines.
    </li>
    <li>
      Created a Python-based scraper for automated email extraction,
      training an AI model for enhanced accuracy and performance.
    </li>
    <li>
      Enhanced backend scalability and performance through robust system
      architecture and automated workflows.
    </li>
    <li>
      Conducted client sales calls, effectively communicating technical
      solutions to entrepreneurs, CEOs, and business owners.
    </li>
  </ul>
</div>

<div class="page-break mt-16" style="page-break-before: always; padding-top: 20px;">
  <h4 class="font-semibold">Team Lead & Backend Developer</h4>
  <p class="text-gray-600 mb-2">Intech Ventures (June 2023 – Nov 2023)</p>
  <ul class="list-disc pl-5">
    <li>
      Recruited and led a development team for the Dhoondhley project,
      delivering end-to-end solutions from architecture design to
      deployment.
    </li>
    <li>
      Developed the backend using Node.js, Express, and Sequelize,
      implementing best practices for security and scalability.
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


  <div class="mt-6">
    <div class="flex justify-between">
      <div>
        <h4 class="font-semibold">Node.js Developer</h4>
        <p class="text-gray-600 mb-2">Internative Labs LLC (Feb 2023 – Apr 2023)</p>
      </div>
    </div>
    <ul class="list-disc pl-5">
      <li>
        Designed and developed Zenith Novels, a platform for writers and
        readers, with subscription management and author earnings.
      </li>
      <li>
        Built a stock management app from scratch, integrating OAuth and
        Stripe for secure transactions.
      </li>
      <li>
        Improved the user experience for an e-commerce platform using EJS
        and backend optimization.
      </li>
    </ul>
  </div>

  <div class="mt-6">
    <div class="flex justify-between">
      <div>
        <h4 class="font-semibold">Backend Developer Intern</h4>
        <p class="text-gray-600 mb-2">Inaequo Solutions (Oct 2022 – Feb 2023)</p>
      </div>
    </div>
    <ul class="list-disc pl-5">
      <li>
        Spearheaded the development of inRetail, an inventory management
        system, using Node.js, TypeScript, and PostgreSQL.
      </li>
      <li>
        Implemented secure system components using Passport, Multer,
        Bcrypt, and JWT, ensuring data protection and scalability.
      </li>
      <li>
        Optimized code for scalable performance.
      </li>
    </ul>
  </div>
</div>


              <!-- Education Section -->
              <section class="mt-8">
                <h3 class="text-lg font-bold border-b-2 border-gray-400 pb-2">
                  Education
                </h3>
                <ul class="list-disc pl-5">
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

              <!-- Interests Section -->
<!-- Interests Section -->
<section>
  <h3 class="text-lg font-bold border-b-2 border-gray-400 mt-8">Interests</h3>
  <div class="flex justify-between items-center">
    <ul class="list-disc pl-5 w-full">
      <li>Music</li>
      <li>Chess</li>
      <li>Table Tennis</li>
      <li class="flex justify-between items-center">
        <span class="ml-auto text-sm">
          <span>Code on </span>
          <a
            href="https://github.com/hassan1oct/hassan-resume"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </span>
      </li>
    </ul>
  </div>
</section>

            </div>
          </body>
        </html>
      `;

      await page.setContent(resumeHTML, { waitUntil: "networkidle0" });
      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { top: "0mm", bottom: "0mm", left: "5mm", right: "5mm" },
      });

      await browser.close();

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="Hassan_Shehzad_Resume.pdf"'
      );
      res.end(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).send("Error generating PDF");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
