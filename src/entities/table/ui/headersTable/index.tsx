export const HeadersTable = () => {

  const names: Array<string> = ['Name', 'Height', 'Mass', 'Hair color', 'Action']
  return (
    <tr className={'h-12 border-b-2'}>
      {names.map((item, index) => <th  key={index} className={'text-left'}>{item}</th>)}
    </tr>
  )
}
