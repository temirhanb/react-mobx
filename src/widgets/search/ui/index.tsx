import React from "react";
import { observer } from "mobx-react-lite";
import { SearchBar, SearchList } from "../../../entities";

export const Search: React.FC = observer(() => {

  return (
    <div>
      <SearchBar/>
      <SearchList/>
    </div>
  )
})
