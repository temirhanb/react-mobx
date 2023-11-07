import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import peoplesStore from "../../../../store/peoples";
import { ActionsTable } from "../actionsTable";
import { IActor } from "../../../../shared/types/peoples";

interface IProps {
  id: Array<string>;
  actor: IActor;
}

export const ContentTable: React.FC<IProps> = observer((props) => {

    const {
      id, actor
    } = props

    const {
      name,
      height,
      mass,
      hair_color
    } = actor

    const handlerSetActor = (item: IActor) => {
      peoplesStore.setActor(item)
    }

    return (
      <tr className={'h-14 border-b-2'}>
        <td onClick={() => handlerSetActor(actor)} className={'text-slate-800 hover:opacity-70'}>
          <Link to={`/peoples/${id[5]}`}>
            {name}
          </Link>
        </td>
        <td className={'text-slate-500'}>{height}</td>
        <td className={'text-slate-500'}>{mass}</td>
        <td className={'text-slate-500'}>{hair_color}</td>
        <ActionsTable {...actor}/>
      </tr>
    )
  }
)
