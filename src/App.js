import ChatBubble from "./components/Commons/ChatBubble";
import Footer from "./components/Footer/Footer";
import HelpCardComponent from "./components/HelpCardComponent";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <SearchComponent />
      <HelpCardComponent />
      <Footer />
      <ChatBubble />
    </div>
  );
}

export default App;
