import { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }
  }, [isOpen]);

  return (
    <div className="border-2 border-gray-300 px-3 rounded-lg mb-3 bg-white relative">
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-sm p-1">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        ref={contentRef}
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "800px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
