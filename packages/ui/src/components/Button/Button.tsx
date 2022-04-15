import * as React from "react";
interface Props {
  label: string;
}

const Button = ({ label }: Props) => {
  return <button className="bg-teal-500 py-2 px-8 rounded-md text-white">{label}</button>;
};
export default Button;