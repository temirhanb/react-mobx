import peoplesStore from "../../../../store/peoples";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { IActor } from "../../../../shared/types/peoples";

export const ActionsTable: React.FC<IActor> = observer((props) => {
  const {name} = props
  const isEmpty = peoplesStore.favorites.find((item) => item.name === name)
  const handlerAddFavorite = (item: IActor) => {
    peoplesStore.addFavorites(item)
  }
  const handlerDeleteFavorite = (item: IActor) => {
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
