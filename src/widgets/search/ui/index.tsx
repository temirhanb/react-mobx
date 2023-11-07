import { observer } from "mobx-react-lite";
import { SearchBar, SearchList } from "../../../entities";
import searchStore from "./../../../store/seach";
import { useEffect, useState } from "react";

export const Search = observer(() => {

  return (
    <div>
      <SearchBar/>
      <SearchList/>
    </div>
  )
})
