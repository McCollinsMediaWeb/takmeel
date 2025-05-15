'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

export default function CostCalculator({ }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    const [propertyPrice, setPropertyPrice] = useState(1000000);
    const [downPayment, setDownPayment] = useState(100000);
    const [percentage, setPercentage] = useState(15);
    const [mortageLength, setMortageLength] = useState(12);

    const [totalAmoutToPay, setTotalAmoutToPay] = useState(100000);
    const [monthlyInstallment, setMonthlyInstallment] = useState(50000);

    // useEffect(() => {
    //     const loanAmount = propertyPrice - downPayment;
    //     console.log("loanAmount", loanAmount);
    //     const interestRate = percentage / 100;
    //     console.log("interestRate", interestRate)
    //     const totalYears = mortageLength;
    //     console.log("totalYears", totalYears)

    //     if (loanAmount <= 0 || totalYears <= 0) {
    //         setTotalAmoutToPay(0);
    //         setMonthlyInstallment(0);
    //         return;
    //     }

    //     const totalInterest = loanAmount * interestRate * totalYears;
    //     console.log("totalInterest", totalInterest)
    //     const totalPayable = loanAmount + totalInterest;
    //     console.log("totalPayable", totalPayable)
    //     const monthlyPayment = totalPayable / (totalYears * 12);
    //     console.log("monthlyPayment", monthlyPayment)

    //     setTotalAmoutToPay(Math.round(totalPayable));
    //     setMonthlyInstallment(Math.round(monthlyPayment));
    // }, [propertyPrice, downPayment, percentage, mortageLength]);


    useEffect(() => {
        const principal = parseFloat(propertyPrice) - parseFloat(downPayment);
        const annualRate = parseFloat(percentage);
        const loanTermMonths = parseInt(mortageLength) * 12;

        if (isNaN(principal) || principal <= 0 || isNaN(annualRate) || isNaN(loanTermMonths) || loanTermMonths <= 0) {
            setTotalAmoutToPay(0);
            setMonthlyInstallment(0);
            return;
        }

        const monthlyRate = annualRate / 12 / 100;
        const r = monthlyRate;
        const n = loanTermMonths;
        const P = principal;

        // EMI formula: [P × r × (1 + r)^n] / [(1 + r)^n – 1]
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalToPay = emi * n;

        // setMonthlyInstallment(Math.round(emi));
        // setTotalAmoutToPay(Math.round(totalToPay));
        setMonthlyInstallment(emi);
        setTotalAmoutToPay(totalToPay);

    }, [propertyPrice, downPayment, percentage, mortageLength]);



    return (
        // <div className='position-relative pd-common bg2 costCalculator'>

        //     <div className='container'>
        //         <motion.div
        //             initial={{ opacity: 0, y: 50 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 1, ease: "easeOut" }}
        //             viewport={{ once: true, amount: 0.5 }}
        //         >
        //             <div className='text-center ccT1'>Takmeel Cost Calculator</div>
        //         </motion.div>
        //         <motion.div
        //             initial={{ opacity: 0, y: 50 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 1, ease: "easeOut" }}
        //             viewport={{ once: true, amount: 0.5 }}
        //         >
        //             <div className='CostCalculatorForm'>
        //                 <div className='CCFormItems'>
        //                     <div className='row'>
        //                         <div className='col-md-6'>
        //                             <div className='CCFormLeft'>
        //                                 <div className='row'>
        //                                     <div className='col-md-12'>
        //                                         <div className='InputItem position-relative'>
        //                                             <span>Property Price</span>
        //                                             {/* <input type='text' placeholder='AED 1000000' onChange={setPropertyPrice} /> */}
        //                                             <input type='number' value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} />
        //                                         </div>
        //                                     </div>
        //                                     <div className='col-md-6'>
        //                                         <div className='InputItem position-relative'>
        //                                             <span>Down Payment</span>
        //                                             {/* <input type='text' placeholder='AED 1000000' onChange={setDownPayment} /> */}
        //                                             <input type='number' value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
        //                                         </div>
        //                                     </div>
        //                                     <div className='col-md-6'>
        //                                         <div className='InputItem position-relative'>
        //                                             <span>Percentage</span>
        //                                             {/* <input type='text' placeholder='15%' onChange={setPercentage} /> */}
        //                                             <input type='number' value={percentage} onChange={(e) => setPercentage(Number(e.target.value))} />
        //                                         </div>
        //                                     </div>
        //                                     <div className='col-md-12'>
        //                                         <div className='InputItem position-relative'>
        //                                             <span>Mortage Length</span>
        //                                             {/* <input type='text' placeholder='12 Year' onChange={setMortageLength} /> */}
        //                                             <input type='number' value={mortageLength} onChange={(e) => setMortageLength(Number(e.target.value) <= 0 ? 1 : (Number(e.target.value) > 25 ? 25 : e.target.value))}
        //                                                 max={25} min={1} />
        //                                             <div className='CCNotice1'>Maximum Of 25 Years</div>
        //                                         </div>
        //                                     </div>
        //                                     <div className='col-md-12'>
        //                                         <div className='DefaultMortageBox'>
        //                                             <div className='CCNotice2'>Try Our Most Popular Mortgage Products:</div>
        //                                             <div className='MortageFlexWrap'>
        //                                                 <div className='MortageFlex'>
        //                                                     <div className='MortageItem' onClick={() => {
        //                                                         setPercentage(3.99);
        //                                                         setMortageLength(3);
        //                                                     }} >
        //                                                         <div className='text-center'>
        //                                                             <div className='MrT1'>3 Years Fixed-Rate</div>
        //                                                             <div className='MrT2'>3.99%</div>
        //                                                         </div>
        //                                                     </div>
        //                                                     <div className='MortageItem' onClick={() => {
        //                                                         setPercentage(3.98);
        //                                                         setMortageLength(5);
        //                                                     }} >
        //                                                         <div className='text-center'>
        //                                                             <div className='MrT1'>5 Years Fixed-Rate</div>
        //                                                             <div className='MrT2'>3.98%</div>
        //                                                         </div>
        //                                                     </div>
        //                                                     <div className='MortageItem' onClick={() => {
        //                                                         setPercentage(5.51);
        //                                                     }}>
        //                                                         <div className='text-center'>
        //                                                             <div className='MrT1'>Variable Rate</div>
        //                                                             <div className='MrT2'>5.51%</div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='col-md-6 CCFormRight'>
        //                             <div className='row'>
        //                                 <div className='col-md-12'>
        //                                     <div className='AnswerBox'>
        //                                         <div className='AnswerBoxT1'>Total Amount to Pay</div>
        //                                         <div className='AnswerBoxT2'>AED {totalAmoutToPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='col-md-12'>
        //                                     <div className='AnswerBox'>
        //                                         <div className='AnswerBoxT1'>Monthly Installment</div>
        //                                         <div className='AnswerBoxT2'>AED {monthlyInstallment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='CCNotice3'>This Value Is An Estimate. To Get The Precise Amount, Apply For A Free
        //                                 Consultation Or Contact Us!</div>
        //                             <div className='FreeCreditWrap'>
        //                                 <div className='FreeCredit'>
        //                                     <div className='FreeCreditFlex'>
        //                                         <div className='FreeCreditFlexLeft'>For More Enquiries</div>
        //                                         <div className='FreeCreditFlexRight'>info@takmeeluae.com</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='formButtonsWrap'>
        //                                 <div className='FormButtons'>
        //                                     <div className='FormButton FormButton1'>
        //                                         <span className='position-relative'>Apply Now<span className='btn1'>&nbsp;</span></span>
        //                                     </div>
        //                                     <div className='FormButton FormButton2'>
        //                                         <span className='position-relative'><span className='btn2'>&nbsp;</span>WhatsApp</span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </motion.div>
        //     </div>
        // </div>


        // <div className="tkc-wrapper">
        <div className='position-relative pd-common bg2 costCalculator'>
            <div className='container'>


                <div className='text-center ccT1'>Takmeel Cost Calculator</div>

                <div className="tkc-grid">
                    {/* Form Section */}
                    <div className="tkc-card">
                        <div className="tkc-form-group">
                            <label htmlFor="property-price" className="tkc-label">Property Price</label>
                            <div className="tkc-input-wrapper">
                                <input
                                    id="property-price"
                                    type="number"
                                    value={propertyPrice}
                                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                                    className="tkc-input pr-12"
                                />
                                <span className="tkc-suffix">AED</span>
                            </div>
                        </div>

                        <div className="tkc-grid-row">
                            <div className="tkc-form-group">
                                <label htmlFor="down-payment" className="tkc-label">Down Payment</label>
                                <div className="tkc-input-wrapper">
                                    <input
                                        id="down-payment"
                                        type="number"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="tkc-input pr-12"
                                    />
                                    <span className="tkc-suffix">AED</span>
                                </div>
                            </div>

                            <div className="tkc-form-group">
                                <label htmlFor="percentage" className="tkc-label">Percentage</label>
                                <div className="tkc-input-wrapper">
                                    <input
                                        id="percentage"
                                        type="number"
                                        value={percentage}
                                        onChange={(e) => setPercentage(Number(e.target.value))}
                                        className="tkc-input pr-12"
                                    />
                                    <span className="tkc-suffix">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="tkc-form-group">
                            <label htmlFor="mortgage-length" className="tkc-label">Mortgage Length</label>
                            <div className="tkc-input-wrapper">
                                <input
                                    id="mortgage-length"
                                    type="number"
                                    value={mortageLength}
                                    onChange={(e) => setMortageLength(Number(e.target.value))}
                                    className="tkc-input pr-12"
                                />
                                <span className="tkc-suffix">Years</span>
                            </div>
                            <p className="tkc-note">Maximum Of 25 Years</p>
                        </div>

                        <div className="tkc-products">
                            <h3 className="tkc-subtitle">Try Our Most Popular Mortgage Products:</h3>
                            <div className="tkc-products-grid">
                                <div className="tkc-product-option" onClick={() => {
                                    setPercentage(3.99);
                                    setMortageLength(3);
                                }}>
                                    <div className="tkc-product-name">3 Years Fixed-Rate</div>
                                    <div className="tkc-product-rate">3.99%</div>
                                </div>
                                <div className="tkc-product-option" onClick={() => {
                                    setPercentage(3.98);
                                    setMortageLength(5);
                                }}>
                                    <div className="tkc-product-name">5 Years Fixed-Rate</div>
                                    <div className="tkc-product-rate">3.98%</div>
                                </div>
                                <div className="tkc-product-option" onClick={() => {
                                    setPercentage(5.51);
                                }} >
                                    <div className="tkc-product-name">Variable Rate</div>
                                    <div className="tkc-product-rate">5.51%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="tkc-result-section">
                        <div className="tkc-summary-card">
                            <div className="tkc-summary-block">
                                <h3 className="tkc-summary-title">Total Amount to Pay</h3>
                                <p className="tkc-summary-value">
                                    AED {totalAmoutToPay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>

                            <div className="tkc-summary-block">
                                <h3 className="tkc-summary-title">Monthly Installment</h3>
                                <p className="tkc-summary-value tkc-installment">
                                    AED {monthlyInstallment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>

                            <p className="tkc-estimate-note">
                                This Value Is An Estimate. To Get The Precise Amount, Apply For A Free Consultation Or Contact Us!
                            </p>
                        </div>

                        <div className="tkc-contact-section">
                            <div className="tkc-contact-info">
                                <span className="tkc-contact-label">For More Enquiries</span>
                                <span className="tkc-contact-email">info@takmeeluae.com</span>
                            </div>

                            <div className='formButtonsWrap'>
                                <div className='FormButtons'>
                                    <div className='FormButton FormButton1 toggleForm'>
                                        <span className='position-relative'>Apply Now<span className='btn1'>&nbsp;</span></span>
                                    </div>
                                    {/* <div onClick={() => window.open("https://wa.me/971523749615?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties")} className='FormButton FormButton2'>
                                        <span className='position-relative'><span className='btn2'>&nbsp;</span>WhatsApp</span>
                                    </div> */}

                                    <a
                                        href="https://wa.me/971523749615?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="FormButton FormButton2"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                            display: 'inline-block',
                                        }}
                                    >
                                        <span className="position-relative">
                                            <span className="btn2">&nbsp;</span>
                                            WhatsApp
                                        </span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
