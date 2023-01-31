import '../../App.scss'
import { Link } from 'react-router-dom';

export function MainHeaders(props) {
    return(
        <>
        <div className='mainCategoryHeader'>
        {props.categoryHeader} <Link to={props.categoryLink}><a className='mainCategoryLink'>See All</a></Link>

        </div>
        
        </>
    );

}