import Navbar from "./Navbar";
const Header = () => {
  return (
    <header
      className="bg-darkblue flex justify-between items-center p-6 md:rounded-lg
    lg:flex-col  lg:w-min lg:sticky lg:max-h-screen lg:justify-start  lg:gap-16   row-start-1 row-end-3
      "
    >
      <svg
        className="w-[25px] h-auto md:w-[32px]"
        width="33"
        height="27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="scale-[75.7%] md:scale-[97%]"
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
      <Navbar></Navbar>
      <img
        className="w-[24px] h-auto md:w-[32px] lg:w-[40px] lg:mt-auto "
        src="/src/assets/image-avatar.png"
        alt="avatar"
      ></img>
    </header>
  );
};

export default Header;
