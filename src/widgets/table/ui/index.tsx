import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import peoplesStore from "../../../store/peoples";
import { ContentTable, HeadersTable } from "../../../entities";
import { Preloader } from "../../../shared";

export const TableWidget = observer(() => {

  const [currentPage, setCurrentPage] = useState(2)
  const [fetching, setFetching] = useState(false)

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight -
      (document.documentElement.scrollTop + window.innerHeight) < 30
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

    const items = JSON.parse(localStorage.getItem('favorites') as string);

    if (items) {

      peoplesStore.setFavorites(items);
    }

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
      <table>
        <tbody>
        <HeadersTable/>
        {peoplesStore.peoples.map((item) => {
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
      {fetching && (
        <div className={'flex justify-center items-center mt-1'}>
          <Preloader/>
        </div>
      )}
    </div>
  )
})
