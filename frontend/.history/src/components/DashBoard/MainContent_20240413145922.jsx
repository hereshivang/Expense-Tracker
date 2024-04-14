/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Card from "../../UI/Card";
import { useState } from "react";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const MainContent = () => {
  const [category, setCategory] = useState("");
  const [form, setForm] = useState({ title: "", amount: 0 });

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { ...form, category };

    console.log(data);

    setForm({ title: "", amount: 0 });
    setCategory("");
  };
  return (
    <div className="w-full h-full mt-8 flex flex-col gap-[4rem]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2rem] w-[50%]">
          <Card className="flex flex-col gap-[1.3rem]">
            <h2 className="heading">Overview</h2>

            <div className="flex items-center justify-between w-full">
              <Item
                amount={200}
                title="Remaining Amount"
                className="text-blue-400"
              />
              <Item amount={400} title={"Earned"} className="text-green-400" />
              <Item amount={200} title={"Spent"} className="text-red-500" />
              <Item
                amount={100}
                title={"Loaned to Friend"}
                className="text-yellow-400"
              />
              <Item
                amount={100}
                title={"Loaned from Friend"}
                className="text-green-400"
              />
            </div>
          </Card>
          <Card>
            <h2 className="heading">Expense Statistics</h2>
          </Card>
        </div>

        <Card className="w-[45%]">
          <h2 className="heading">Activities</h2>
        </Card>
      </div>

      <div className="flex w-full justify-between">
        <Card className="w-[55%] flex flex-col gap-4">
          <h2 className="heading">Add Expense</h2>

          <div className="flex gap-4">
            <div className="w-[40%]">
              <form
                action=""
                onSubmit={submitHandler}
                className="flex flex-col gap-4 items-center justify-center"
              >
                <Input
                  placeholder="Placeholder"
                  className="text-white"
                  inputProps={ariaLabel}
                  style={{ color: "white", borderBottom: "1px solid white" }}
                />
                <Input
                  placeholder="Placeholder"
                  style={{ color: "white", borderBottom: "1px solid white" }}
                />

                <Button variant="outlined" className="align-top">
                  Submit
                </Button>
              </form>
            </div>

            <div className="flex flex-col w-[50%]">
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ color: "white" }}
                >
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(event) => setCategory(event.target.value)}
                  style={{ color: "white" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Card>

        <Card className="w-[40%]">
          <h2 className="heading">Friends</h2>
        </Card>
      </div>
    </div>
  );
};

const Item = ({ amount, title, className = "" }) => {
  return (
    <div className="text-center">
      <h3 className={`text-[1.5rem] font-light text-gray-300 ${className}`}>
        ${amount}
      </h3>
      <p className="text-gray-400 text-[0.9rem]">{title}</p>
    </div>
  );
};

export default MainContent;
