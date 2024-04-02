// @ts-nocheck
"use client";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { budgetdata } from "./budgetdata";

const BudgetOptions = ({ updateFormData }) => {
  const [selectedBudgets, setSelectedBudgets] = useState([]);

  const toggleBudget = (budget) => {
    if (selectedBudgets.includes(budget)) {
      setSelectedBudgets(selectedBudgets.filter((item) => item !== budget));
    } else {
      setSelectedBudgets([...selectedBudgets, budget]);
    }

    updateFormData(selectedBudgets);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.2)}
          className="w-full text-[4vw] md:text-[2vw] font-thin px-5 text-slate-600 sm:px-20"
        >
          Project budget (USD)
        </motion.div>

        <div className="w-full md:w-9/12 flex gap-3 flex-wrap px-5 md:px-20">
          {budgetdata.map((budget, index) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(index / 2)}
              key={index}
              className={`p-3 md:p-5 flex justify-center items-center w-auto rounded-full cursor-pointer ${
                selectedBudgets.includes(budget)
                  ? "bg-black text-white"
                  : "border border-black"
              }`}
              onClick={() => toggleBudget(budget)}
            >
              <p className="font-bold sm:text-[2vw] md:text-[1.5vw]">
                {budget}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetOptions;
