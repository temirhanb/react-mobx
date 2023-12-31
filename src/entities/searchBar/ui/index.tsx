import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import searchStore from "./../../../store/seach";
import { toJS } from "mobx";

export const SearchBar: React.FC = observer(() => {
  const [inputValue, setInputValue] = React.useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase: string = e.target.value.toLowerCase();
    setInputValue(lowerCase)
  };

  useEffect(() => {

    if (inputValue === '') return

    const delayInputTimeoutId = setTimeout(() => {
      searchStore.fetchSearch(inputValue.toLowerCase());
    }, 300);

    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 300]);

  const handlerFocus = () => {
    searchStore.setFocus(true)
  }
  const handlerBlur = () => {
    searchStore.setFocus(false)
  }

  return (
    <div className={'flex z-50 items-center flex-row rounded-sm bg-white h-[30px]'}>
      <img
        className={'h-[25px] opacity-60 p-1'}
        src={'../src/shared/assets/search.png'}
        alt="search"
      />
      <input
        className={'outline-none rounded-sm pl-2'}
        value={inputValue}
        onChange={inputHandler}
        type="text"
        onFocus={handlerFocus}
        onBlur={handlerBlur}
      />
    </div>
  )
})
