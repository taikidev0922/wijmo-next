import { useState, useEffect } from "react";
import { ApiClient } from "@/lib/api-client";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";
const AppBar = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  const { replace } = useRouter();
  const logout = () => {
    ApiClient.auth.logout.$post();
    replace("/login");
  };
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const closeMenu = () => setShowUserMenu(false);
    if (showUserMenu) {
      window.addEventListener("click", closeMenu);
    }
    return () => window.removeEventListener("click", closeMenu);
  }, [showUserMenu]);

  return (
    <div className="bg-gray-400 flex justify-between items-center">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        <FaBars />
      </button>
      <div className="pr-4" style={{ zIndex: 50 }}>
        <FaUserCircle
          className="text-white text-3xl cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShowUserMenu(!showUserMenu);
          }}
        />
        {showUserMenu && (
          <div
            className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-800"
            >
              ログアウト
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default AppBar;
