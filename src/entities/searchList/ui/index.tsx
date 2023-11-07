import React from "react";
import { nanoid } from "nanoid";
import { IActor } from "../../../shared/types/peoples";

interface IProps {
  elem?: IActor[]
}

export const SearchList: React.FC<IProps> = ({elem}) => {

  return (
    <ul>
      {elem?.map((item: IActor) => (
        <li key={nanoid(5)}>{item.name}</li>
      ))}
    </ul>
  )
}
