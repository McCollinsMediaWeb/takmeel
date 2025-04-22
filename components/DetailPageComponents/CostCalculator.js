'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

export default function CostCalculator({}) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
  
    return (
        <div className='position-relative pd-common bg2'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                >
                 <div className='text-center ccT1'>Takmeel Cost Calculator</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} 
                >
                    <div className='CostCalculatorForm'>
                        <div className='CCFormItems'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='CCFormLeft'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='InputItem position-relative'>
                                                    <span>Property Price</span>
                                                    <input type='text' placeholder='AED 1000000'/>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='InputItem position-relative'>
                                                    <span>Down Payment</span>
                                                    <input type='text' placeholder='AED 1000000'/>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='InputItem position-relative'>
                                                    <span>Percentage</span>
                                                    <input type='text' placeholder='15%'/>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='InputItem position-relative'>
                                                    <span>Mortgage Length</span>
                                                    <input type='text' placeholder='12 Year'/>
                                                    <div className='CCNotice1'>Maximum Of 25 Years</div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='DefaultMortageBox'>
                                                    <div className='CCNotice2'>Try Our Most Popular Mortgage Products:</div> 
                                                    <div className='MortageFlexWrap'>
                                                        <div className='MortageFlex'>
                                                            <div className='MortageItem'>
                                                                <div className='text-center'>
                                                                    <div className='MrT1'>3 Years Fixed-Rate</div>
                                                                    <div className='MrT2'>3.99%</div>
                                                                </div>
                                                            </div>
                                                            <div className='MortageItem'>
                                                            <div className='text-center'>
                                                                    <div className='MrT1'>5 Years Fixed-Rate</div>
                                                                    <div className='MrT2'>3.98%</div>
                                                                </div>
                                                            </div>
                                                            <div className='MortageItem'>
                                                            <div className='text-center'>
                                                                    <div className='MrT1'>Variable Rate</div>
                                                                    <div className='MrT2'>5.51%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 CCFormRight'>
                                    <div className='AnswerBox'>
                                        <div className='AnswerBoxT1'>Monthly Installment</div>
                                        <div className='AnswerBoxT2'>AED 7,275.33</div>
                                    </div>
                                    <div className='AnswerBox'>
                                        <div className='AnswerBoxT1'>Monthly Installment</div>
                                        <div className='AnswerBoxT2'>AED 253,030</div>
                                    </div>
                                    <div className='CCNotice3'>This Value Is An Estimate. To Get The Precise Amount, Apply For A Free
                                    Consultation Or Contact Us!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
