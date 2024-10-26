// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Signup from "./pages/Signup";

// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Home/>
//         <Signup/>
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <Router>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         {/* Define the routes for the app */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home page route */}
//           <Route path="/signup" element={<Signup />} /> {/* Signup page route */}
//         </Routes>
//       </div>
//       <ButtonGradient /> {/* ButtonGradient is still rendered globally */}
//     </Router>
//   );
// };

// export default App;


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin  from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";


const AppWrapper = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page route */}
        <Route path="/signin" element={<Signin />} /> {/* Signup page route */}
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />{/* ButtonGradient is still rendered globally */}
    </Router>
  );
};

export default App;

