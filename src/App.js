import { useState, useMemo } from 'react'
import { styled } from "styled-components";
import Navigation from "./Components/Navigation/Navigation";
import Orb from "./Components/Orb/Orb";
import bg from './img/bg.png'
import { InnerLayout, MainLayout } from "./Styles/Layouts";
import Dashboard from './Components/Dashboard/Dashboard'
import Incomes from './Components/Income/Income';
import Expenses from './Components/Expense/Expense';
import { useGlobalContext } from './Context/GlobalContext';

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1: 
        return <Dashboard />
      case 2: 
        return <Dashboard />
      case 3: 
        return <Incomes />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }

  }

  const orbMemo = useMemo(() => { return <Orb /> }, [])

  const globalContext = useGlobalContext()

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background-color: rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    border-radius: 32px;
    backdrop-filter: blur(4.5px);
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
