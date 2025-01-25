import Resume from "../components/Resume";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-7xl flex bg-white shadow-lg rounded-lg">
        {/* Resume Section */}
        <div className="w-3/4 p-8 border-r">
          <Resume />
        </div>

        {/* Sidebar Section */}
        <div className="w-1/4 flex flex-col items-center p-8">
          <button
            onClick={() => {
              const saveAsPDF = document.getElementById("save-pdf");
              saveAsPDF?.click();
            }}
            className="bg-blue-500 text-white w-full py-4 rounded-lg shadow-md hover:bg-blue-600 mb-6"
          >
            Download as PDF
          </button>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}