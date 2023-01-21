import '../../App.scss'


export function MainHeaders(props) {
    return(
        <>
        <div className='mainCategoryHeader'>
        {props.categoryHeader} <a className='mainCategory'>See All</a>

        </div>
        
        </>
    );

}