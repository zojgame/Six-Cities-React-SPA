import { useAppSelector } from '../../hooks';
import { getError } from '../../store/user/selectors';

function ErrorMessageComponent():JSX.Element | null{
  const error = useAppSelector(getError);

  if(error){
    return(
      <div
        style= {{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>);
  }
  return null;
}

export default ErrorMessageComponent;
