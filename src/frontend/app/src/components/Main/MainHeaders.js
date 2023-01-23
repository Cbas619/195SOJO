import '../../App.scss'
import { Link } from 'react-router-dom';

export function MainHeaders(props) {
    return(
        <>
        <div className='mainCategoryHeader'>
        {props.categoryHeader} <a className='mainCategory'><Link to={props.categoryLink}>See All</Link></a>

        </div>
        
        </>
    );

}