import '../../App.scss'


export function MainCategoryIcon(props) {
    return (
        <>
        <a href={props.categoryLink}>
            <img className="mainCategoryImg" src={props.categoryImg}/>
            {props.category}</a>
        
        </>

    );
}