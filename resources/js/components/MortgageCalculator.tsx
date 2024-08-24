import React, {forwardRef, HTMLAttributes, useEffect, useState} from 'react';
import MonthlyPaymentCalculator from "./MonthlyPaymentCalculator";
import PurchaseCalculator from "./PurchaseCalculator";

interface MortgageCalculatorProps {
    mortgageFacts: string;
}
let MortgageCalculator = forwardRef<HTMLDivElement, MortgageCalculatorProps>((props, ref) => {
    let {
        mortgageFacts
    } = props;

    const [percentageDown, setPercentageDown] = useState(10);
    const [purchasePrice, setPurchasePrice] = useState(200000);
    const [downPayment, setDownPayment] = useState(20000);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(7);
    const [monthlyOrPurchase, setMonthlyOrPurchase] = useState('month');
    const [showMonthlyPaymentCalculator, setShowMonthlyPaymentCalculator] = useState(true);

    const handleRadioChange = (e) => {
        if (e.target.value === 'month') {
            setShowMonthlyPaymentCalculator(true);
        } else {
            setShowMonthlyPaymentCalculator(false);
        }
    };

    return (
        <div style={{padding: '15px'}}>
            <div className="mx-auto h-full grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3 align-middle">
                <div className={"font-grotesk col-span-3 p-20 bg-white justify-center"} style={{textAlign: 'right'}}>
                    <p style={{textAlign: 'center', fontSize: '40px'}}>Mortgage Calculator</p>
                    <div style={{textAlign: 'center', fontSize: '12px'}}>
                        <p>*This tool is to be used as an informational estimate.
                        </p>
                        <p>Your individual Loan Officer will give more insight since mortgages are case-by-case.</p>
                    </div>
                    <br></br>
                    <div style={{textAlign: 'center', marginBottom: '20px'}}>
                        <input
                            id={'monthlyPayment'}
                            style={{paddingRight: '15px'}}
                            name={'monthlyOrPurchase'}
                            type={"radio"}
                            value="month"
                            defaultChecked={true}
                            onChange={(e) => handleRadioChange(e)}
                        />
                        <label style={{paddingRight: '15px', paddingLeft: '5px'}} htmlFor={'monthlyPayment'}>Monthly
                            Payment Calculator</label>
                        <input
                            id={'purchasePrice'}
                            style={{paddingRight: '15px'}}
                            name={'monthlyOrPurchase'}
                            type={"radio"}
                            value="purchase"
                            onChange={(e) => handleRadioChange(e)}
                        />
                        <label style={{paddingLeft: '5px'}} htmlFor={'purchasePrice'}>Purchase Price Calculator</label>
                    </div>
                    {showMonthlyPaymentCalculator ?
                        (<MonthlyPaymentCalculator
                            downPayment={downPayment}
                            setDownPayment={setDownPayment}
                            percentageDown={percentageDown}
                            setPercentageDown={setPercentageDown}
                            loanTerm={loanTerm}
                            setLoanTerm={setLoanTerm}
                            interestRate={interestRate}
                            setInterestRate={setInterestRate}
                        ></MonthlyPaymentCalculator>)
                        :
                        (<PurchaseCalculator
                            downPayment={downPayment}
                            setDownPayment={setDownPayment}
                            percentageDown={percentageDown}
                            setPercentageDown={setPercentageDown}
                            loanTerm={loanTerm}
                            setLoanTerm={setLoanTerm}
                            interestRate={interestRate}
                            setInterestRate={setInterestRate}
                        ></PurchaseCalculator>)
                    }
                </div>
                <div></div>
                <div className={"col-span-3 font-grotesk p-4 bg-white justify-center"}>
                    <h2 className="text-3xl font-bold font-grotesk tracking-tight text-gray-900 sm:text-4xl">Mortgage Calculator Results Explained</h2>
                    <p dangerouslySetInnerHTML={{__html: mortgageFacts.replace(/\n/g, '<br />')}}></p>
                </div>
            </div>
        </div>
    )
});
export default MortgageCalculator;

