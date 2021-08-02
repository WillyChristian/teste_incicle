import "./App.css";
import UserCard from "./components/card-user/index";
import Feed from "./components/feed/index";
import Efficient from "./components/efficient/index";

function App() {
  return (
    <div className="container">
      <UserCard />
      <Feed />
      <Efficient />
    </div>
  );
}

export default App;
