import React, {forwardRef, HTMLAttributes, useEffect, useState} from 'react';

interface PurchaseCalculatorProps {
    percentageDown?: number;
    setPercentageDown?: (value: number) => void;
    downPayment?: number;
    setDownPayment?: (value: number) => void;
    loanTerm?: number;
    setLoanTerm?: (value: number) => void;
    interestRate?: number;
    setInterestRate?: (value: number) => void;
}

let PurchaseCalculator = forwardRef<HTMLDivElement, PurchaseCalculatorProps>((props, ref) => {
    let {
        percentageDown,
        setPercentageDown,
        downPayment,
        setDownPayment,
        loanTerm,
        setLoanTerm,
        interestRate,
        setInterestRate,
    } = props;


    const [monthlyPayment, setMonthlyPayment] = useState(1500);
    const [purchasePrice, setPurchasePrice] = useState(0);

    const calculatePurchasePrice = () => {
        let numberOfPayments = loanTerm * 12;
        let decimalInterestRate = interestRate * 0.01;
        let monthlyDecimalInterestRate = decimalInterestRate / 12;
        if(interestRate === 0){
            monthlyDecimalInterestRate = 0;
        }

        let purchaseAfterDownPayment = (monthlyPayment * (Math.pow(1 + monthlyDecimalInterestRate, numberOfPayments) - 1)) /
            (monthlyDecimalInterestRate * Math.pow(1 + monthlyDecimalInterestRate, numberOfPayments));

        let purchasePrice = purchaseAfterDownPayment + downPayment;
        const formattedPurchasePrice = parseFloat(purchasePrice).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0});

        return formattedPurchasePrice;
    };

    useEffect(() => {
        const newPurchasePrice = calculatePurchasePrice();
        setPurchasePrice(newPurchasePrice);
    }, [monthlyPayment, downPayment, loanTerm, interestRate]);

    const handleDownChange = (e) => {
        const { id, value } = e.target;
        const numericValue = Number(value);
        const validPurchasePrice = Number(parseFloat(purchasePrice)) || 1;
        if (id === 'cashDownPayment') {
            setDownPayment(numericValue);
        } else if (id === 'percentDownPayment') {
            const newDownPayment = (validPurchasePrice * numericValue) / 100;
            setDownPayment(newDownPayment);
        }
    };


        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '100%'}}>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Monthly Payment($)</label></td>
                        <td className={"flex justify-start"}><input className={"border flex justify-start"}
                                                                    onChange={(e) => setMonthlyPayment(e.target.value)}
                                                                    defaultValue={monthlyPayment}
                                                                    type={"number"}></input></td>
                    </tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Down Payment($)</label></td>
                        <td className={"flex justify-start"}>
                            <input id="cashDownPayment"
                                   className={"border justify-start"}
                                   onChange={(e) => {
                                       handleDownChange(e)
                                   }}
                                   value={downPayment}
                                   type={"number"}></input></td>
                    </tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr>
                        {/*<td><label className={"text-xl"} style={{padding: '30px'}}>Down Payment(%)</label></td>*/}
                        {/*<td className={"flex justify-start"}>*/}
                        {/*    <input id="percentDownPayment"*/}
                        {/*           className={"border justify-start"}*/}
                        {/*           onChange={(e) => {*/}
                        {/*               handleDownChange(e)*/}
                        {/*           }}*/}
                        {/*           value={percentageDown}*/}
                        {/*           type={"number"}></input></td>*/}
                    </tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Loan Term</label></td>
                        <td><input className={"border flex justify-start"}
                                   onChange={(e) => setLoanTerm(e.target.value)} defaultValue={loanTerm}
                                   type={"number"}></input>
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Interest Rate</label></td>
                        <td><input className={"border flex justify-start"}
                                   onChange={(e) => setInterestRate(e.target.value)} defaultValue={interestRate}
                                   type={"number"}></input>
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr style={{height: '20px'}}></tr>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Purchase Price</label></td>
                        <td className={"flex text-xl justify-start"}>${purchasePrice}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )

});
export default PurchaseCalculator;
