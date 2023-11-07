import React from "react";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";
import { IActor } from "../../../shared/types/peoples";
import searchStore from "./../../../store/seach";
import { Link } from "react-router-dom";
import peoplesStore from "../../../store/peoples";

interface IProps {
  elem?: IActor[]
}

export const SearchList: React.FC<IProps> = observer(() => {
  const handlerSetActor = (item: IActor) => {
    peoplesStore.setActor(item)
  }

  const isEmpty = searchStore.peoples.length === 0 && searchStore.words !== ''

  return (
    <ul className={'flex rounded-sm mt-5 w-[215px] bg-white w-100 flex-col absolute l-0 t-0'}>
      {isEmpty ? (
        <li className={'mt-2 border-b-2 p-2  text-slate-500'} key={nanoid(5)}>
          Does not match any results...
        </li>
      ) : (searchStore.peoples.map((item: IActor) => (
        <li className={'mt-2 border-b-2 p-2  text-slate-500'} key={nanoid(5)}>
          <Link onClick={() => handlerSetActor(item)} to={`/peoples/${item.url.split('/')[5]}`}>
            {item.name}
          </Link>
        </li>
      )))}
    </ul>
  )
})
