import React, {forwardRef, HTMLAttributes, useEffect, useState} from 'react';

interface MonthlyPaymentCalculatorProps {
    percentageDown?: number;
    setPercentageDown?: (value: number) => void;
    purchasePrice?: number;
    setPurchasePrice?: (value: number) => void;
    downPayment?: number;
    setDownPayment?: (value: number) => void;
    loanTerm?: number;
    setLoanTerm?: (value: number) => void;
    interestRate?: number;
    setInterestRate?: (value: number) => void;
}

let MonthlyPaymentCalculator = forwardRef<HTMLDivElement, MonthlyPaymentCalculatorProps>((props, ref) => {
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

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(200000);

    const calculateMonthlyPayment = () => {
        let purchaseAfterDownPayment = purchasePrice - downPayment;
        let numberOfPayments = loanTerm * 12;
        let decimalInterestRate = interestRate * 0.01;
        let monthlyDecimalInterestRate = decimalInterestRate / 12;
        let monthlyPayment = purchaseAfterDownPayment * (monthlyDecimalInterestRate *
            Math.pow(1 + monthlyDecimalInterestRate, numberOfPayments)) / (
            Math.pow(1 + monthlyDecimalInterestRate, numberOfPayments) - 1);

        const formattedMonthlyPayment = parseFloat(String(monthlyPayment)).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0});
        return formattedMonthlyPayment;
    };

    useEffect(() => {
        const newMonthlyPayment = calculateMonthlyPayment();
        setMonthlyPayment(newMonthlyPayment);
    }, [purchasePrice, downPayment, loanTerm, interestRate]);

    useEffect(() => {
        setPercentageDown( downPayment / purchasePrice * 100);
    })

    const handleDownChange = (e) => {
        const { id, value } = e.target;
        if (id === 'cashDownPayment') {
            setDownPayment(Number(value));
            setPercentageDown(Number(value) / purchasePrice * 100);
        } else if (id === 'percentDownPayment') {
            const newDownPayment = (purchasePrice * Number(value)) / 100;
            setDownPayment(newDownPayment);
            setPercentageDown(Number(value));
        }
    };


        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '100%'}}>
                <table style={{width: '100%'}}>
                    <tbody>
                    <tr>
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Purchase Price($)</label></td>
                        <td className={"flex justify-start"}><input className={"border flex justify-start"}
                                                                    onChange={(e) => setPurchasePrice(e.target.value)}
                                                                    defaultValue={purchasePrice}
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
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Down Payment(%)</label></td>
                        <td className={"flex justify-start"}>
                            <input id="percentDownPayment"
                                   className={"border justify-start"}
                                   onChange={(e) => {
                                       handleDownChange(e)
                                   }}
                                   value={percentageDown}
                                   type={"number"}></input></td>
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
                        <td><label className={"text-xl"} style={{padding: '30px'}}>Monthly Payment</label></td>
                        <td className={"flex text-xl justify-start"}>${monthlyPayment}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )

});
export default MonthlyPaymentCalculator;
