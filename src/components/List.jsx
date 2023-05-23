
export default function List(props) {
   console.log('change');
   return (
      <ul>
         {props.citiesList.map((city) => <li key={city}>{city}</li>)}
      </ul>
   )
}
