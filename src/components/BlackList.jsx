import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Disclosure, Menu } from '@headlessui/react'

  const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Blacklist', href: '#', current: true },
    { name: 'Accounts', href: '#', current: false },
    { name: 'Transactions', href: '#', current: false },
    { name: 'Search', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Blacklist() {
  
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
            <h1 className="text-3xl font-bold text-gray-900">Blacklisted Accounts</h1>
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
                              Account Address
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
                          0x3eadde4a48d0aebda37eed7076e736edac9a8b40
                          </th>
                          <td class="px-6 py-4">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xfb0a60806cdcd2047517b777398bbea734c727e3
                          </th>
                          <td class="px-6 py-4">
                          USDT Banned
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xecb6ffaC05D8b4660b99B475B359FE454c77D153
                          </th>
                          <td class="px-6 py-4">
                          XRP phishing website (ripple.com.pt) that got exchanged to ETH through Coinswitch.
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0x45029af827c652f47b1f678456b2cd009647c8ad
                          </th>
                          <td class="px-6 py-4">
                          Fake BITCAR platform
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0x0f9f18d18c8227a276375940b39ca086fbde1604
                          </th>
                          <td class="px-6 py-4">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xF193a9aFb00715AaCF7ca9Ebffafe02C77517C2E
                          </th>
                          <td class="px-6 py-4">
                          Fake copy of ROCK2PAY
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr> 
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0x83b4f74296738d8c2e15bd7c1f4a19df122354f5"
                          </th>
                          <td class="px-6 py-4">
                          Sandwich-attack
                          </td>         
                          <td class="px-6 py-4">
                              <a href="/TxBlacklist" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inspect</a>
                          </td>
                      </tr> 
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          0xfb6E71e0800BcCC0db8a9Cf326fe3213CA1A0EA0
                          </th>
                          <td class="px-6 py-4">
                          Scam lottery contract that takes advantage of odd struct memory management
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