// Write your code here

const AppItem = props => {
  const {eachItemDetails} = props
  const {appName, imageUrl, category} = eachItemDetails

  return (
    <li className="app-Container">
      <div className="app">
          <img src = {imageUrl} />
          <p>{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
