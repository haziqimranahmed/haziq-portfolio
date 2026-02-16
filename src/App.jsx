import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-maroon-950">
            Haziq<span className="text-teal-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-teal-600" href="#projects">Projects</a>
            <a className="hover:text-teal-600" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-teal-300 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-maroon-950">
              Hi, I’m <span className="text-teal-500">Haziq Imran</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              AI Engineer specializing in NLP, healthcare AI systems, and machine
              learning pipelines. I build production-ready intelligent systems using
              Python, BERT models, and modern AI tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* View Projects scrolls to Projects section */}
              <a
                href="#projects"
                className="bg-maroon-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-maroon-900 transition"
              >
                View Projects
              </a>

              {/* Contact Me scrolls to Contact section */}
              <a
                href="#contact"
                className="border border-teal-300 text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
              >
                Contact Me
              </a>

              {/* Resume download/open */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Open Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
              <img
                src={profilePic}
                alt="Haziq Imran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-teal-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-maroon-950">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-maroon-950">
                AI Medical Triage System
              </h3>
              <p className="mt-2 text-gray-600">
                Hybrid NLP + ML system using ClinicalBERT, rule-based logic, and
                severity classification for patient routing.
              </p>
              <div className="mt-4 inline-flex text-xs font-semibold bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                Healthcare AI
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-maroon-950">
                ClinicalBERT Fine-Tuning Pipeline
              </h3>
              <p className="mt-2 text-gray-600">
                Built calibration pipelines using Platt scaling and transformer
                fine-tuning to improve prediction accuracy.
              </p>
              <div className="mt-4 inline-flex text-xs font-semibold bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                Transformers
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-maroon-950">
                Symptom Extraction NLP Engine
              </h3>
              <p className="mt-2 text-gray-600">
                Combined fuzzy matching, keyword extraction, and embeddings to
                improve interpretation of clinical input.
              </p>
              <div className="mt-4 inline-flex text-xs font-semibold bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                NLP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon-950">Contact</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Want to collaborate or hire me? Reach out anytime.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">Email</p>
              <a className="font-semibold text-teal-700 hover:underline" href="mailto:i.haziq2002@gmail.com">
                i.haziq2002@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">GitHub</p>
              <a
                className="font-semibold text-teal-700 hover:underline"
                href="https://github.com/haziqimranahmed"
                target="_blank"
                rel="noreferrer"
              >
                github.com/haziqimranahmed
              </a>
            </div>

            <div className="p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="text-gray-600">
                (Add your LinkedIn link here)
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#home"
              className="text-sm font-semibold text-maroon-950 hover:text-teal-700"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Haziq Imran. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}
