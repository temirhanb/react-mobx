export const MainPage = () => {
  const items = JSON.parse(localStorage.getItem('favorites') as string);

  return (
    <div className={'text-slate-500 text-xl m-10'}>Favorite count: {items.length}</div>
  )
}
