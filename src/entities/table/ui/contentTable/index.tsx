import { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import peoplesStore from "../../../../store/peoples";
import { ActionsTable } from "../actionsTable";

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

    const handlerSetActor = (item: any) => {
      peoplesStore.setActor(item)
    }

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
        <ActionsTable {...props}/>
      </tr>
    )
  }
)
