import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActionCreators from '../../actions/products';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(productsActionCreators, dispatch);
}