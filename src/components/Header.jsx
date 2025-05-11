import React from "react";

const Header = () => {
  const Button = () => {
    return (
      <button className="bg-misty-blue border border-hidden hover:border-solid hover:bg-bold-misty-blue">
        Đăng nhập ngay !
      </button>
    );
  };
  return (
    <header className="bg-misty-blue text-black p-4">
      <Button />
    </header>
  );
};

export default Header;
