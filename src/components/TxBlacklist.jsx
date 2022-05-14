import React, {useEffect, useState} from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'

  const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Blacklist', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Transactions', href: '#', current: true },
    { name: 'Search', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function TxBlacklist() {

  // Export transactions data from etherscan with etherscanAPI
  // (not completed) because we couldn't finished Dynamic Directory and Mapping 
  const[url, setUrl] = useState()
  const[ethdata, setEthdata] = useState([])

  useEffect(() => {
    fetch('https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0xbc78ab8a9e9a0bca7d0321a27b2c03addeae08ba81ea98b03cd3dd237eabed44&apikey=ZISIAM77H2G86R73HDDF25Q57XNWMGW459')
    .then(response => response.json )
    .then(json => setEthdata(json))
  },[url])

     const data = [
        {txHash: '0x64f35dA4b9726FE03627e8A07EEcA338596efd04',
        blockNumber: '13303187',
        timeStamp: '1632682860',
        hash: '0xc256f56a75ac537bf20c29c031b11777edd53f48d7ddfdcfd562c57abc6ed6da',
        nonce: '615770',
        blockHash: '0xd8227edbbae366ceced371cf2a2f2be73a5e806c3b2a00ac23a3d5bd2d4991c6',
        transactionIndex: '7',
        from: '0xf60c2ea62edbfe808163751dd0d8693dcb30019c',
        to: '0x64f35da4b9726fe03627e8a07eeca338596efd04',
        value: '38720000000000000',
        gas: '207128',
        gasPrice: '89000000000',
        isError: '0',
        txreceipt_status: '1',
        contractAddress: '0x',
        cumulativeGasUsed: '422158',
        gasUsed: '21000',
        confirmations: '1403595'},
      ];
         
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
      </div>
    </main>
  </div>
</>
)}
export default TxBlacklist