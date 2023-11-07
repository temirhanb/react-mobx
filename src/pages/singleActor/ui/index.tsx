import { observer } from "mobx-react-lite" // Or "mobx-react".
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { ActionsTable } from "../../../entities";
import singleActorState from "../../../store/peoples";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function entriesFromObject<T extends object>(object: T): Entries<T> {
  return Object.entries(object) as Entries<T>;
}

export const SingleActor = observer(
  () => {

    const {id} = useParams()

    useEffect(() => {
      singleActorState.fetchSingleActor(String(id))
    }, [])

    return (
      <div className={'flex text-slate-500 flex-col m-10'}>
        <table>
          <tbody>
          <tr className={'h-12 border-b-2'}>
            <th className={'text-left'}>
              Info
            </th>
            <th className={'text-left'}>
              Action
            </th>
          </tr>
          <tr>
            <td>
              {entriesFromObject(singleActorState.actor).map(([key, value]) => {
                if (Array.isArray(value)) {
                  return (
                    <div key={nanoid(5)} className={'mb-5'}>
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <ul>
                        {value.map((item: string) => <li key={nanoid(4)}>{item}</li>)}
                      </ul>
                    </div>
                  )
                }
                return (
                  <div key={nanoid(5)} className={'mb-5'}>
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span>{value}</span>
                  </div>
                )
              })}
            </td>
            <ActionsTable
              {...singleActorState.actor}
            />
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
)
