import React from "react";


export const MainPage: React.FC = () => {
  const items = JSON.parse(localStorage.getItem('favorites') as string);

  const length = items !== null ? items.length : 0

  return (
    <>
      <div className={'text-slate-500 text-xl m-10'}>Favorite count: {length}</div>
    </>
  )
}
