import '../../App.scss'
import { Link } from 'react-router-dom';


export function MainCategoryIcon(props) {
    return (
        <>
        <Link to={props.categoryLink}>
            <img className="mainCategoryImg" src={props.categoryImg}/>
            {props.category}</Link>
        
        </>

    );
}