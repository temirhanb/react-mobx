import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import peoplesStore from "../../../store/peoples";
import { ContentTable, HeadersTable } from "../../../entities";

export const TableWidgetFavorites = observer(() => {

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorites') as string);
    if (items) {
      peoplesStore.setFavorites(items);
    }
  }, []);

  if (peoplesStore.favorites.length === 0) {
    return <div className={"text-slate-500 text-xl m-10"}>
      Your favorites list is empty.
    </div>
  }

  return (
    <table className={'m-10 '}>
      <tbody>
      <HeadersTable/>
      {peoplesStore.favorites.map((item) => {
        const id = item.url.split('/')

        return (
          <ContentTable
            key={nanoid(5)}
            id={id}
            actor={item}
          />
        )
      })}
      </tbody>
    </table>
  )
})
