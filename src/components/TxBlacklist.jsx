import React, {useEffect, useState} from 'react'
import { Fragment } from 'react'
import ReactTable from "react-table";
import { Popover, Transition, Disclosure, Menu } from '@headlessui/react'
import { Chart } from "react-google-charts";
import axios from "axios"
import {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://api.etherscan.io/api?module=account&action=txlist&address=0x829BD824B016326A401d083B33D092293333A830&startblock=0&endblock=999999999&sort=asc&apikey=ZISIAM77H2G86R73HDDF25Q57XNWMGW459");
      setData(result.data);
    })();
  }, []);

 
      
    
  const options = {
  title: "Suspicious Transactions",
  is3D: true,
  }
     
  return <div>{
    !TxBlacklist ? ("No Data Found"): (

    <>

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
                <div> 
                  <div className='pb-6'> 
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class=" w-[75%] text-sm text-left text-gray-500 dark:text-gray-400">
                          <tbody>

                            {data.map((item,i) =>{
                            return(
                              <Fragment>
                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i} >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    Tx Hash
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.txHash}
                                  </td>
                              </tr>
                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    blockNumber
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.blockNumber}
                                  </td>       
                              </tr>

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    timeStamp
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.timeStamp}
                                  </td>       
                              </tr>

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    hash
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.hash}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    nonce
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.nonce}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    blockHash
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.blockHash}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    transactionIndex
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.transactionIndex}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    from
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.from}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    to
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.to}
                                  </td>       
                              </tr>  

                                <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    value
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.value}
                                  </td>       
                              </tr>

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    gas
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.gas}
                                  </td>       
                              </tr>

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    gasPrice
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.gasPrice}
                                  </td>       
                              </tr>  

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    isError
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.isError}
                                  </td>       
                              </tr>  

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    txreceipt_status
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.txreceipt_status}
                                  </td>       
                              </tr>  

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    input
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.input}
                                  </td>       
                              </tr>    

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    contractAddress
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.contractAddress}
                                  </td>       
                              </tr>    

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    cumulativeGasUsed
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.cumulativeGasUsed}
                                  </td>       
                              </tr>    

                              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                               
                                  <td class="px-6 py-4 font-bold text-lg">
                                    gasUsed
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.confirmations}
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

} </div>;
}; 
   

  

 


export default TxBlacklist