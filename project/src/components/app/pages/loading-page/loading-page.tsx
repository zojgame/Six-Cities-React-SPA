import { Link } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';

function LoadingPage():JSX.Element{
  return (
    <div>
      <main className="page__main page__main--index page__main--index-empty">

        <h1 style={{textAlign: 'center', marginTop: '20%'}}><SpinnerDotted color={'#4481c3'} enabled/></h1>
        <h2 style={{textAlign: 'center', marginTop: '5%'}}>Загрузка...</h2>
        <Link style={{textAlign: 'center'}} to='/'>Вернуться на главную</Link>
      </main>
    </div>
  );
}


export default LoadingPage;

