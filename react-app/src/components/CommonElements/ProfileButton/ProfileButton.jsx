import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import LogoutButton from "../auth/LogoutButton";
// import "./menu.css";

const ProfileButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
     <button onClick={openMenu}><img className="w-12 h-12 rounded-full" alt="avatar" src={sessionUser.profile_img} />
     </button>
    </>
  );
}

export default ProfileButton;
