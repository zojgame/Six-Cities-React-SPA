import { Link } from 'react-router-dom';
function ErrorPage():JSX.Element{
  return (
    <div>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 style={{textAlign: 'center', marginTop: '20%'}}>404 NOT FOUND</h1>
        <Link style={{textAlign: 'center'}} to='/'>Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default ErrorPage;

