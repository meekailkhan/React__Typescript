
import './App.css';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
// import Status from './components/Status';
// import PersonList from './components/PersonList';
// import { Person } from './components/Person';
// import { Greet } from './components/Greet';

// const person = {
//   first : 'Bruce',
//   last : 'Wayne'
// }

// const personList = [
//   {
//     first : 'bruce',
//     last : 'wayn'
//   },
//   {
//     first : 'clerk',
//     last : 'kent'
//   },
//   {
//     first : 'Wonder woman',
//     last : 'diana'
//   }
// ]

function App() {
  return (
    <div className="App">
     {/* <Greet name='meekail' messageCount={50} isLoggedIn={true}/> */}
     {/* <Person name={person}/> */}
     {/* <PersonList names={personList} /> */}
     {/* <Status status='error'/> */}
     <Heading>Place holder Text</Heading>

     <Oscar>
      <Heading>Oscar goes to Ronaldo</Heading>
     </Oscar>

    </div>
  );
}

export default App;
