import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";
import { IActor } from "../../../shared/types/peoples";
import searchStore from "./../../../store/seach";
import { Link } from "react-router-dom";
import peoplesStore from "../../../store/peoples";
import { Preloader } from "../../../shared";

interface IProps {
  elem?: IActor[]
}

export const SearchList: React.FC<IProps> = observer(() => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (searchStore.focus) {
      setShow(true)
    } else {
      setTimeout(() => {
        setShow(false)
      }, 200)
    }
  }, [searchStore.focus])

  const handlerSetActor = (item: IActor) => {
    peoplesStore.setActor(item)
  }

  const isEmpty = searchStore.peoples.length === 0 && searchStore.words !== ''

  if (!show) {
    return <></>
  }
  return (
    <ul className={'flex rounded-sm mt-5 w-[215px] shadow-md bg-white w-100 flex-col absolute l-0 t-0'}>
      {searchStore.pending && (
        <div className={'flex justify-center items-center p-2'}>
          <Preloader/>

        </div>
      )}
      {isEmpty ? (
        <li className={'mt-2 border-b-2 p-2  text-slate-500'} key={nanoid(5)}>
          Does not match any results...
        </li>
      ) : (searchStore.peoples.map((item: IActor) => (
        <Link key={nanoid(5)} onClick={() => handlerSetActor(item)} to={`/peoples/${item.url.split('/')[5]}`}>
          <li className={'mt-2 border-b-2 p-2  text-slate-500'} key={nanoid(5)}>
            {item.name}
          </li>
        </Link>
      )))}
    </ul>
  )
})
