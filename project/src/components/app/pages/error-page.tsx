function ErrorPage():JSX.Element{
  return (
    <div>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 style={{textAlign: 'center', marginTop: '20%'}}>404 NOT FOUND</h1>
        <a style={{textAlign: 'center'}} href='/'>Вернуться на главную</a>
      </main>
    </div>
  );
}

export default ErrorPage;

