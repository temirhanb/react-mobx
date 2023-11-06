import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import peoplesStore from "../../../store/peoples";
import { ContentTable, HeadersTable } from "../../../entities";
import { Preloader } from "../../../shared/ui/preloader";

export const TableWidget = observer(() => {

  const [currentPage, setCurrentPage] = useState(2)
  const [fetching, setFetching] = useState(false)

  const scrollHandler = (e:any) => {
    if (e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) < 30
      && peoplesStore.peoples.length < peoplesStore.count) {
      setFetching(true)
    }
  }

  useEffect(() => {
    if (fetching) {
      peoplesStore.getNextPageData(currentPage).then(() => {
        setFetching(false)
      })
      setCurrentPage(prevState => prevState + 1)
    }
  }, [fetching])

  useEffect(() => {
    peoplesStore.getPeoplesData()
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  if (peoplesStore.peoples.length === 0) {
    return <div className={'flex h-[200px] justify-center items-center'}><Preloader/></div>
  }

  return (
    <div className={'m-10 flex flex-col'}>
      <table >
        <tbody>
        <HeadersTable/>
        {peoplesStore.peoples.map((item) => {
          const id = item.url.split('/').filter((item:any) => typeof Number(item) === 'number')

          return (
            <ContentTable
              key={nanoid(5)}
              id={id}
              {...item}
            />
          )
        })}
        </tbody>
      </table>
      {fetching && (
        <div className={'flex justify-center items-center mt-1'}>
          <Preloader/>
        </div>
      )}
    </div>
  )
})
