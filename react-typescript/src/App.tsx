
import './App.css';
import Private from './auth/Private';
import Profile from './auth/Profile';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Toast from './components/Toast';
import Box from './components/state/Box';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import LoggedInTwo from './components/state/LoggedInTwo';
import { ThemeContext } from './components/state/ThemeContext';
import User from './components/state/User';
import { UserContextProvider } from './components/state/UserContext';
import { theme } from './components/state/theme';
import List from './generic/List';
import RandomNumber from './restricting/RandomNumber';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
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
     {/* <Heading>Place holder Text</Heading>

     <Oscar>
      <Heading>Oscar goes to Ronaldo</Heading>
     </Oscar> */}
     {/* <Button handleClick={(e,id)=>{
      console.log('button clicked',e,id)
     }}/> */}
      
     {/* <Input value='' handleChange={(event)=> console.log(event.nativeEvent.isTrusted.valueOf)}/> */}
     {/* <Container styles={{padding : '0rem' , fontSize : '3rem' ,color : 'red' , border : 'solid gray 2px'}}/> */}
     {/* <LoggedInTwo /> */}
     {/* <LoggedIn /> */}
     {/* <Counter /> */}

     {/* <ThemeContext.Provider value={theme}>
      <Box/>
     </ThemeContext.Provider> */}
     {/* <UserContextProvider>
      <User/>
     </UserContextProvider> */}

     {/* <Private isLoggedIn={false} Component={Profile}/> */}

     {/* <List items={[1,2,3,4]} onClick={(item) => console.log(item)}/> */}

     {/* <RandomNumber value={10} isPossitive /> */}

     <Toast position='center-bottom'/>

    </div>
  );
}

export default App;
