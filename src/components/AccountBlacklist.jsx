import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Disclosure, Menu } from '@headlessui/react'
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ChevronDownIcon,
  BellIcon
} from '@heroicons/react/outline'



const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Blacklist', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function AccountBlacklist() {

     const data = [
        ["Task", "Hours per Day"],
        ["USDT-BAN", 11],
        ["USDC-BAN", 2],
        ["Sandwich Attack", 2],
        ["Suspicious Behavior", 2],
      ];
      
       const options = {
        title: "Suspicious Transactions",
        is3D: true,
      };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/LogIn">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Features
        </a>
      </li>
      <div>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pricing
        </a>
      </li>
      </div>
      
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Blacklisted & Suspicious Accounts</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

          <div class="grid grid-cols-1 divide-y">
          <div className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <p>Grade 1: Suspicios Behavior</p>
                    <p>Grade 2: Blacklisted Address</p>
                    <p>Grade 3: Suspicios Behavior & Blacklisted Address </p>
                </div>
                

              
                  <div>
                      
                  <div className='pb-6'> 
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class=" w-[75%] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Account Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Suspicion Reason
                </th>
                <th scope="col" class="px-6 py-3">
                    Suspicious Tx Count
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                0x49F18c6370D3235fCC7cf4fd8167B8CA9beD0af8"
                </th>
                <td class="px-6 py-4">
                    USDT-BAN
                </td>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>

                  

              </div>

        
        </div>

          
            {/* Replace with your content */}

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>

  
)
 
}

export default AccountBlacklist