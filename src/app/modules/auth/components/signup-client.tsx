"use client";
import { useEffect, useState } from "react";

const CheckboxAndButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  let isDisable = "disabled";

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="pl-1" id="terms" htmlFor="checkbox">
          I have read and agree to the <a href="/">terms</a> of service
        </label>
      </div>
      <button
        className={`w-full rounded-lg px-3 py-2 border-[#d4d4d4] border-[1px] ${
          !isChecked
            ? "bg-gray-500 text-white  opacity-50"
            : "bg-blue-500 text-white hover:bg-blue-700"
        }`}
        type="submit"
        disabled={!isChecked}
      >
        Sign up
      </button>
    </>
  );
};

export default CheckboxAndButton;
