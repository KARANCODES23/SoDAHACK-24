"use client";
import React from "react";

function MainComponent() {
  const [file, setFile] = React.useState(null);
  const [inputData, setInputData] = React.useState(null);
  const [outputData, setOutputData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputData(e.target.result);
      };
      reader.readAsText(uploadedFile);
    }
  };

  const processData = async () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <nav className="bg-[#0f172a] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-poppins text-2xl">The SafeNet Squad</div>
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveSection("home")}
              className={`text-white hover:text-gray-300 ${
                activeSection === "home" ? "border-b-2" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className={`text-white hover:text-gray-300 ${
                activeSection === "about" ? "border-b-2" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("team")}
              className={`text-white hover:text-gray-300 ${
                activeSection === "team" ? "border-b-2" : ""
              }`}
            >
              Team
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              GitHub
            </a>
            <button
              onClick={() => setActiveSection("contact")}
              className={`text-white hover:text-gray-300 ${
                activeSection === "contact" ? "border-b-2" : ""
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === "home" && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins">
                BiasGuard Analytics
              </h1>
              <p className="text-gray-300 text-xl">
                Detect and Mitigate Social Bias in Your Datasets
              </p>
            </div>
            <div className="bg-[#1e293b] rounded-lg p-8 mb-8">
              <div className="flex flex-col items-center justify-center">
                <label className="w-64 flex flex-col items-center px-4 py-6 bg-[#0f172a] text-white rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-[#1e293b]">
                  <i className="fas fa-cloud-upload-alt fa-3x"></i>
                  <span className="mt-2 text-base">Select CSV file</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileUpload}
                    name="csvFile"
                  />
                </label>
                {file && (
                  <button
                    onClick={processData}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Analyze Dataset
                  </button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1e293b] p-6 rounded-lg">
                <h2 className="text-xl text-white mb-4 font-poppins">
                  Input Dataset
                </h2>
                <div className="bg-[#0f172a] p-4 rounded-lg h-[400px] overflow-auto">
                  {inputData && (
                    <pre className="text-gray-300 text-sm">{inputData}</pre>
                  )}
                </div>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-lg">
                <h2 className="text-xl text-white mb-4 font-poppins">
                  Analysis Results
                </h2>
                <div className="bg-[#0f172a] p-4 rounded-lg h-[400px] overflow-auto">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <i className="fas fa-spinner fa-spin text-white text-3xl"></i>
                    </div>
                  ) : outputData ? (
                    <div className="text-gray-300">{outputData}</div>
                  ) : (
                    <div className="text-gray-500 text-center mt-8">
                      No analysis results yet. Upload and process a dataset to
                      see insights.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === "about" && (
          <div className="bg-[#1e293b] p-8 rounded-lg">
            <h2 className="text-3xl text-white mb-6 font-poppins">
              About BiasGuard
            </h2>
            <p className="text-gray-300 mb-4">
              BiasGuard is an innovative tool designed to detect and mitigate
              social biases in datasets. Our mission is to promote fairness and
              equality in data-driven decision making.
            </p>
            <p className="text-gray-300 mb-4">
              Using advanced machine learning algorithms, we analyze your data
              for potential biases related to gender, race, age, and other
              sensitive attributes.
            </p>
          </div>
        )}

        {activeSection === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#0f172a] mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-white"></i>
              </div>
              <h3 className="text-white text-xl mb-2">John Doe</h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#0f172a] mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-white"></i>
              </div>
              <h3 className="text-white text-xl mb-2">Jane Smith</h3>
              <p className="text-gray-300">AI Researcher</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#0f172a] mb-4 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-white"></i>
              </div>
              <h3 className="text-white text-xl mb-2">Mike Johnson</h3>
              <p className="text-gray-300">Data Scientist</p>
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="bg-[#1e293b] p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-3xl text-white mb-6 font-poppins">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainComponent;