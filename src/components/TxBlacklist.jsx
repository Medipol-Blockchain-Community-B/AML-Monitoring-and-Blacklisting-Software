import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Disclosure, Menu } from '@headlessui/react'
import { Chart } from "react-google-charts";
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

function TxBlacklist() {
     const data = [
        {blockNumber: 'Block Number'},
        {timeStamp: 'timeStamp'},
        {hash: 'hash'},
        {nonce: 'nonce'},
        {blockHash: 'blockHash'},
        {transactionIndex: 'transactionIndex'},
        {from: 'from'},
        {to: 'to'},
        {value: 'value'},
        {gas: 'gas'},
        {gasPrice: 'gasPrice'},
        {isError: 'isError'},
        {txreceipt_status: 'txreceipt_status'},
        {contractAddress: 'contractAddress'},
        {cumulativeGasUsed: 'cumulativeGasUsed'},
        {gasUsed: 'gasUsed'},
        {confirmations: 'confirmations'},
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
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="logo.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-gray-900"><span>Tx Hash:</span> 0x5634a56e415bc98f8e53003b389df13a836246b2d3ef605ddc087f2f1c7ecf03</h1>
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
                            <tbody>

                              {data.map((item,i) =>{
                              return(
                                <Fragment>
                                  <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i} >
                                 
                                    <td class="px-6 py-4">
                                      Tx Hash
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                                    </td>
                                </tr>
                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                 
                                    <td class="px-6 py-4">
                                      Block Number
                                    </td>
                                    <td class="px-6 py-4">
                                        
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                                    </td>
                                </tr>
                              
                                </Fragment>
                          )})}   
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

export default TxBlacklist