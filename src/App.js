import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ContactList />}></Route>
            <Route exact path="/addContact" element={<AddContact />}></Route>
            <Route
              exact
              path="/updateContact"
              element={<UpdateContact />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
