import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './componenets'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const BackgroundImage="https://img.freepik.com/premium-vector/money-transfer-online-currency-exchange-world-with-foreign-currency-sign-network-connecting_251139-832.jpg"
  const [amount,setamount]=useState(0)
  const [from,setfrom]=useState("pkr")
  const [to,setto]=useState("usd")
  const [convertedAmount,setconvertedAmount]=useState(0)

  const currenyInfo= useCurrencyInfo(from)
  
  const options = Object.keys(currenyInfo)
  const swap=()=>{
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  }

  const convert=setconvertedAmount(amount*currenyInfo[to]);



  return (
    <>
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setamount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                               // onClick={swap()}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                 label="to"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
