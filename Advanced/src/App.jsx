import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

const isDark = true;
function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icons: "✨" },
    { id: "ref", label: "Ref Props", icons: "🔖" },
    { id: "children", label: "Children Props", icons: "🔗" },
    { id: "complex", label: "Complex Props", icons: "⚙️" },
    { id: "theme", label: "Theme Toggler", icons: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className={
                "p-2 m-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out"
              }
            >
              <span className="mr-2">{section.icons}</span>
              <span className="mr-2">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={"min-h-screen bg-gray-800"}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React props explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A simple explanation of React props
          </p>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
        </div>
        <div id="basic" className="scroll-mt-200">
          <RefProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div id="basic" className="scroll-mt-200">
          <ThemeToggler />
        </div>
      </div>

      <footer
        className={`mt-12 text-center pb-0 transition-colors ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        <p className="text-sm">
          Made with 💖 using Node, Vite, React and Tailwindcss
        </p>
      </footer>
    </div>
  );
}
function App() {
  return (
    <>
      <AppContent />;
    </>
  );
}

export default App;
