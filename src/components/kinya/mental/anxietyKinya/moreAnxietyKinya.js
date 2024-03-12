import { useState } from "react";
import PopAnxietyKinya from "./popAnxietyKinya";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b mt-8">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xl font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const MoreAnxietyKinya = () => {
  return (
    <div class="px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-0 ">
      <div class="sm:mx-auto ">
        <div class="space-y-4">
          <Item title="Kanda hano usome byinshi kubijyane n'indwara y'umuhangayiko'">
            <PopAnxietyKinya />
          </Item>
        </div>
      </div>
    </div>
  );
};
