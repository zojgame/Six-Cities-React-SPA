import MainPage from './main-screen/main';
const Options = {
  CARDS_COUNT : 4,
};

function App(): JSX.Element {
  return <MainPage cardsCount={Options.CARDS_COUNT}/>;
}

export default App;
