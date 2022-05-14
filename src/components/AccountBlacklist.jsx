import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Disclosure, Menu } from '@headlessui/react'

  const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Blacklist', href: '#', current: false },
    { name: 'Accounts', href: '#', current: true },
    { name: 'Transactions', href: '#', current: false },
    { name: 'Search', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Blacklist() {

     var accountAddress = ""; 
    

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
                        src="https://pbs.twimg.com/profile_images/1508587728862126081/B5QPX6B-_400x400.jpg"
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Account Address: 0x429c35c1384c5D14407e238a58cAE1974540Aa66 </h1> 
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 divide-y">
                  <div>                    
                    <div className='pb-6'> 
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class=" w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Transaction Hash
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Suspicion Reason
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
                          0x5b9a5e4fb55760e5f449bc90cb16e7478789b4861ede7a5d3dc712d43088957c
                          </th>
                          <td class="px-6 py-4 text-green-400 ">
                          Innocent
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xe5b4acfa1143f78c0e3db7c7ce88c2fab245682e4b9e75c74251debb24495fb2
                          </th>
                          <td class="px-6 py-4 text-green-400">
                          Innocent
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0x523ea39333fe58841d9a515eef1e36c4fb627ba454f597fc8e11b22d6b7531b4
                          </th>
                          <td class="px-6 py-4 text-red-400">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xbce478fe7e800709532a59aa9bb409ec23d4798db31483de3a7ae36a7ad8796c
                          </th>
                          <td class="px-6 py-4 text-green-400">
                          Innocent
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xcb20e999a0aaefda61e1fefb3d324bdf94a916f08bd87443065fe1f09fe46af7
                          </th>
                          <td class="px-6 py-4 text-green-400">
                          Innocent
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0x00ff34faba82dd013b42f72f40e7d6575a97f96dc1bd1046bbcc2c84c91dbc26
                          </th>
                          <td class="px-6 py-4 text-green-400">
                          Innocent
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr> 
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xc0dd12a05a0b7d352102f4e9d3369a057b015b78b6493a631029755e98f9d5c9"
                          </th>
                          <td class="px-6 py-4 text-red-400">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr> 
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xc261ee96ca572c5f67156f4db21ac4a7181ed283a79e363e891cc5d44ff87c83
                          </th>
                          <td class="px-6 py-4 text-red-400">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>                                 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>
)}

export default Blacklist