import React from "react";

const Calendar = () => {
  return (
    <div className="w-auto mx-3 my-3 border-solid border-grey-light rounded border shadow-lg  pb-10 mr-10">
      <div className=" bg-grey-lighter px-2 py-10 pt-10 border-solid border-grey-light  text-center justify-center font-bold flex">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-4 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>{" "}
        December 2021
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-4 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="">
        <table className="w-full">
          <tr className="">
            <th className="py-4 px-1">Mon</th>
            <th className="py-4 px-1">Tue</th>
            <th className="py-4 px-1">Wen</th>
            <th className="py-4 px-1">Thu</th>
            <th className="py-4 px-1">Fri</th>
            <th className="py-4 px-1">Sat</th>
            <th className="py-4 px-1">Sun</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              1
            </td>
          </tr>
          <tr>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              2
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              3
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              4
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              5
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              6
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              7
            </td>
            <td className="py-4 px-1  hover:bg-gray-800 hover:text-white  text-center cursor-pointer">
              8
            </td>
          </tr>
          <tr>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              9
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              10
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              11
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              12
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              13
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              14
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              15
            </td>
          </tr>
          <tr>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              16
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              17
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              18
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              19
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              20
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              21
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              22
            </td>
          </tr>
          <tr>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              23
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              24
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              25
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              26
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              27
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              28
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              29
            </td>
          </tr>
          <tr>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              30
            </td>
            <td className="py-4 px-1 hover:bg-gray-800 hover:text-white text-center cursor-pointer">
              31
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
