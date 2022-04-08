import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { UserList } from "../src/components/userList/index";
import { AddUser } from "../src/components/addUser/index";
import { EditUser } from "../src/components/editUser/";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
