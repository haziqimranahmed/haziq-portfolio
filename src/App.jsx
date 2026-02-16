import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE TEXT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-maroon-950">
              Hi, I’m <span className="text-teal-500">Haziq Imran</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              AI Engineer specializing in NLP, healthcare AI systems, and machine
              learning pipelines. I build production-ready intelligent systems using
              Python, BERT models, and modern AI tooling.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-maroon-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-maroon-900 transition">
                View Projects
              </button>

              <button className="border border-teal-300 text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PHOTO */}
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
      <section className="bg-teal-50 py-20 px-6">
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

    </div>
  );
}
