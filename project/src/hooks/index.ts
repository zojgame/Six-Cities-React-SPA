import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, ApiDispatch } from '../store/state';

export const useAppDispatch = () => useDispatch<ApiDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
