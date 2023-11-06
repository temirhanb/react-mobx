import { observer } from "mobx-react-lite" // Or "mobx-react".
import singleActorState from "../../../store/peoples";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

export const SingleActor = observer(
  () => {

    const {id} = useParams()
    useEffect(() => {
      singleActorState.fetchSingleActor(id)
    }, [])

    return (
      <div className={'flex text-slate-500 flex-col m-10'}>
        {Object.entries(singleActorState.actor).map(([key, value]:any) => {

          if (Array.isArray(value)) {
            return (
              <div className={'mb-5'}>
                <span>{key.charAt(0).toUpperCase()
                + key.slice(1)}: </span>
                <ul>
                  {value.map((item:any) => <li key={nanoid(4)}>{item}</li>)}
                </ul>
              </div>
            )
          }
          return (
            <div className={'mb-5'}>
              <span>{key.charAt(0).toUpperCase()
              + key.slice(1)}: </span>
              <span>{value}</span>
            </div>
          )
        })}
      </div>
    )
  }
)
