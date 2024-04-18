import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
function App() {
  return (
    <div className="App">
     
        <Header title="DLT Blogs" />
        <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
       
      </DataProvider>
      <Footer />
    </div>
  );
}
export default App;
