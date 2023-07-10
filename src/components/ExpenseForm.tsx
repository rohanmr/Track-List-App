import React from "react";
import { categories } from "../App";
// import { z } from "zod";
// import { useForm } from "react-hook-form";

// const schema = z.object({
//   description: z.string().min(3).max(50),
//   amount: z.number().min(0.01).max(100_00),
//   category: z.enum(categories),
// });

// type ExpenseFromData = z.infer<typeof schema>;

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-lable">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-lable">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
