import React from "react";

function Table() {
  return (
    <div className="relative overflow-x-auto shadow-xl rounded sm:rounded-t md:rounded-b-lg lg:rounded-b-lg">
      <table className="w-[1000px] max-w-[2000px] text-sm text-left font-poppins text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">John</td>
            <td className="px-6 py-4">john@gmail.com</td>
            <td className="px-6 py-4">Member</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">Abhay</td>
            <td className="px-6 py-4">abhay@abc.com</td>
            <td className="px-6 py-4">Member</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">Rick</td>
            <td className="px-6 py-4">rick@xyz.com</td>
            <td className="px-6 py-4">Admin</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">Lina</td>
            <td className="px-6 py-4">lina@gmail.com</td>
            <td className="px-6 py-4">Member</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">Mark</td>
            <td className="px-6 py-4">mark@yahoo.com</td>
            <td className="px-6 py-4">Admin</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">Sanjay</td>
            <td className="px-6 py-4">sanjay@edc.com</td>
            <td className="px-6 py-4">Member</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
