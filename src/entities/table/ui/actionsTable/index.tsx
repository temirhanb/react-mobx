import peoplesStore from "../../../../store/peoples";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const ActionsTable = observer((props: any) => {
  const {name} = props
  const isEmpty = peoplesStore.favorites.find((item) => item.name === name)
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(peoplesStore.favorites));
  }, [peoplesStore.favorites])
  const handlerAddFavorite = (item: any) => {
    peoplesStore.addFavorites(item)
  }
  const handlerDeleteFavorite = (item: any) => {
    peoplesStore.deleteFavorites(item)
  }

  return (
    <td className={'text-slate-500'}>
      {isEmpty !== undefined ?
        (
          <button type={'submit'} onClick={() => handlerDeleteFavorite(props)}>
            <img src={'../src/shared/assets/remove.png'}
                 alt="remove favorite"/>
          </button>
        )
        : (
          <button type={'submit'} onClick={() => handlerAddFavorite(props)}>
            <img src={'../src/shared/assets/plus.png'}
                 alt="add favorite"/>
          </button>
        )}
    </td>
  )
})
