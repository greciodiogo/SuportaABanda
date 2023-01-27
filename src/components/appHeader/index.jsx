import React, { useState,useEffect } from "react";
import "./styles.css";
import { BsSearch } from "react-icons/bs";
// import PostTask from "../postTask";

const AppHeader = () => {
  const [showingPainel, setShowingPainel] = useState(false);
  const postTask = () => {
    setShowingPainel(false);
  };
  
  const handleCreateBtn = () => {

  }

  useEffect(() => {
    const categories = document.querySelectorAll('.category')

    function handleActive() {
      categories.forEach((e) => e.classList.remove("active-category"));
      this.classList.add("active-category");
    }

    categories.forEach((e) => e.addEventListener("click", handleActive));
  }, []);
  return (
    <>
      <div className="container__header">
        <a href="" className="logo">
          <img type="text" src="images/logo.jpeg " width={50} height={50} />
        </a>
        <form action="" className="search-bar-container">
          <input
            type="search"
            className="search-bar"
            placeholder="procurar por categoria"
          />
          <button>
            <div className="icon">
              <BsSearch />
            </div>
          </button>
        </form>
        <div className="post" onClick={postTask}>
          <button onClick={handleCreateBtn}>Contactar 📃</button>
        </div>
      </div>
      {/* {showingPainel==true ? (<PostTask />) : false} */}
    </>
  );
};

export default AppHeader;
