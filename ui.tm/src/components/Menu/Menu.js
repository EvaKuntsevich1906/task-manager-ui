import style from './Menu.module.css';

const Menu = () => {
    return (
        
        <div className={style['menu-content']}>
            <div className={style['menu-nav-top']}>
            <div className={style['menu-all-btn']}></div>
            <div className={style['menu-page-btn']}></div>
            <div className={style['menu-settigs-btn']}></div>
            </div>
            <div className={style['menu-nav-bottom']}>
            <div className={style['menu-arrow-btn']}>
            <div className={style['menu-arrow-arr']}></div>
            </div>
            </div>
        </div>
        
    );
}

export default Menu;