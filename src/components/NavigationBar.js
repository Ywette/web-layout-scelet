import './navigationBar.css'
import { listItems } from '../content/ListItems'

function NavigationBar() {
    return (
        <div className="navigationBar">
            <nav className='navigationBar__list'>              
                {listItems.map((item, i)=>{
                    return(
                        <span key={i}
                        className='navigationBar__list__item'>{item.listItemName}</span>
                    )
                })}               
            </nav>
        </div>
    );
}

export default NavigationBar;
