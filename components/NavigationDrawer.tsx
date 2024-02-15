import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ApiClient } from "@/lib/api-client";
function NavigationDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}) {
  ApiClient.page_groups.$get({ query: { limit: 1000 } });
  const [showMasterMenu, setShowMasterMenu] = useState(false);
  return (
    <div>
      <nav
        className={`fixed inset-y-0 left-0 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 z-40`}
      >
        <div className="px-8 py-4">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ✕
          </button>
          <div className="mt-8">
            <div
              onClick={() => setShowMasterMenu(!showMasterMenu)}
              className="text-white py-2 rounded-md text-sm font-medium block cursor-pointer flex justify-between items-center"
            >
              マスタ管理{" "}
              <span className="ml-2">
                {showMasterMenu ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {showMasterMenu && (
              <div className="ml-4 mt-2">
                <Link
                  href="/master/villages/list"
                  className="text-white py-2 rounded-md text-sm font-medium block"
                >
                  村マスタ
                </Link>
                <Link
                  href="/master/areas/list"
                  className="text-white py-2 rounded-md text-sm font-medium block"
                >
                  地区マスタ
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationDrawer;
