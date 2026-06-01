// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { FaCartShopping } from "react-icons/fa6";
// import { GiSoccerBall } from "react-icons/gi";

// const Navber = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [cartCount, setCartCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   // Cart Count
//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cart.length);
//   };

//   useEffect(() => {
//     updateCartCount();

//     window.addEventListener("storage", updateCartCount);
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener("storage", updateCartCount);
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   // Menu Items
//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shop" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-screen h-20 bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-gray-800 ">

//       <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-10">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           onClick={() => navigate("/")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <GiSoccerBall className="text-4xl text-yellow-400 rotate-12" />

//           <h1 className="text-2xl md:text-3xl font-black tracking-wide">
//             FAMOUS
//             <span className="text-yellow-400"> SPORTS</span>
//           </h1>
//         </motion.div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-10 font-semibold">
//           {menuItems.map((item) => (
//             <li
//               key={item.name}
//               onClick={() => navigate(item.path)}
//               className={`relative cursor-pointer transition-all duration-300 hover:text-yellow-400 ${
//                 location.pathname === item.path
//                   ? "text-yellow-400"
//                   : "text-white"
//               }`}
//             >
//               {item.name}

//               {location.pathname === item.path && (
//                 <motion.div
//                   layoutId="activeNav"
//                   className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-400 rounded-full"
//                 />
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-6">

//           {/* Cart */}
//           <div
//             onClick={() => navigate("/cart")}
//             className="relative cursor-pointer group"
//           >
//             <div className="w-11 h-11 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
//               <FaCartShopping className="text-xl text-yellow-400 group-hover:text-black" />
//             </div>

//             {cartCount > 0 && (
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
//               >
//                 {cartCount}
//               </motion.span>
//             )}
//           </div>
//         </div>

//         {/* Mobile Section */}
//         <div className="flex md:hidden items-center gap-4">

//           {/* Cart */}
//           <div
//             onClick={() => navigate("/cart")}
//             className="relative cursor-pointer"
//           >
//             <FaCartShopping className="text-2xl text-yellow-400" />

//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </div>



//           {/* Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-3xl text-yellow-400"
//           >
//             {isOpen ? <HiX /> : <HiMenuAlt3 />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-20 right-0 w-72 h-screen bg-[#111111] border-l border-gray-800 p-8 flex flex-col gap-8 md:hidden"
//           >
//             {menuItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => {
//                   navigate(item.path);
//                   setIsOpen(false);
//                 }}
//                 className={`text-left text-xl font-semibold transition-all duration-300 hover:text-yellow-400 ${
//                   location.pathname === item.path
//                     ? "text-yellow-400"
//                     : "text-white"
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navber;



import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { GiSoccerBall } from "react-icons/gi";

const Navber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Cart Count
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // Menu Items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full sm:w-screen h-16 sm:h-20 bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-1 sm:gap-2 cursor-pointer"
        >
          <GiSoccerBall className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 rotate-12" />
          
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-wide">
            FAMOUS
            <span className="text-yellow-400"> SPORTS</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`relative cursor-pointer transition-all duration-300 hover:text-yellow-400 text-sm lg:text-base ${
                location.pathname === item.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-400 rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
              <FaCartShopping className="text-base sm:text-lg lg:text-xl text-yellow-400 group-hover:text-black" />
            </div>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-[11px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
        </div>

        {/* Mobile Section */}
        <div className="flex md:hidden items-center gap-3 sm:gap-4">
          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <FaCartShopping className="text-xl sm:text-2xl text-yellow-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl sm:text-3xl text-yellow-400 focus:outline-none active:scale-95 transition-transform"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-16 sm:top-20 right-0 w-64 sm:w-72 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-[#111111] border-l border-gray-800 p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 md:hidden z-50 shadow-2xl"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className={`text-left text-lg sm:text-xl font-semibold transition-all duration-300 hover:text-yellow-400 hover:pl-2 ${
                    location.pathname === item.path
                      ? "text-yellow-400 border-l-4 border-yellow-400 pl-3"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Menu Footer */}
              <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-800">
                <p className="text-[10px] sm:text-xs text-gray-500 text-center">
                  © {new Date().getFullYear()} Famous Sports
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile-specific styles for better touch targets */}
      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-touch-target {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Smooth scrolling for iOS */
        @supports (padding: max(0px)) {
          @media (max-width: 768px) {
            nav {
              padding-left: env(safe-area-inset-left);
              padding-right: env(safe-area-inset-right);
            }
          }
        }
      `}</style>
    </nav>
  );
};

export default Navber;