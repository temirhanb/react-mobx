import { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import peoplesStore from "../../../../store/peoples";

export const ContentTable = observer(
  (
    props: any
  ) => {

    const {
      id,
      name,
      height,
      mass,
      hair_color
    } = props

    const handlerAddFavorite = (item: any) => {
      peoplesStore.addFavorites(item)
    }
    const handlerDeleteFavorite = (item: any) => {
      peoplesStore.deleteFavorites(item)
    }

    const handlerSetActor = (item: any) => {
      peoplesStore.setActor(item)
    }

    useEffect(() => {
      localStorage.setItem("favorite", JSON.stringify(peoplesStore.favorites));
    }, [peoplesStore.favorites])

    const isEmpty = peoplesStore.favorites.find((item) => item.name === name)

    return (
      <tr className={'h-14 border-b-2'}>
        <td onClick={() => handlerSetActor(props)} className={'text-slate-800 hover:opacity-70'}>
          <Link to={`/peoples/${id[5]}`}>
            {name}
          </Link>
        </td>
        <td className={'text-slate-500'}>{height}</td>
        <td className={'text-slate-500'}>{mass}</td>
        <td className={'text-slate-500'}>{hair_color}</td>
        <td className={'text-slate-500'}>
          {isEmpty !== undefined ?
            (
              <button type={'submit'} onClick={() => handlerDeleteFavorite(props)}>
                <img src={'./src/shared/assets/remove.png'}
                     alt="remove favorite"/>
              </button>
            )
            : (
              <button type={'submit'} onClick={() => handlerAddFavorite(props)}>
                <img src={'./src/shared/assets/plus.png'}
                     alt="add favorite"/>
              </button>
            )}
        </td>
      </tr>
    )
  }
)
