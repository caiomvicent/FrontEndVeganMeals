import React, { useContext } from 'react'
import { SearchContext } from "../../pages/App";
import styles from './Navigation.module.css'
import logo from '../../images/VeganMeals.png'
import logoSmall from '../../images/logo.png'
import 'semantic-ui-css/semantic.min.css'



function Navigation() {
    const { inputSearch, setInputSearch } = useContext(SearchContext);

    const handleChange = (e) => {
        setInputSearch(e.target.value);
    }


    return (
        <div className={styles.navigation}>
            <div className={styles.container}>

                <img src={logoSmall} className={styles.logoSmall} alt='veganMeals logo' />
                <img className={styles.logo} src={logo} alt='veganMeals logo' />

                <div className={styles.search}>
                    <form>
                        <div className='ui icon input'>
                            <input
                                type='text'
                                placeholder='Search...'
                                className={styles.searchInput}
                                onChange={handleChange}
                                value={inputSearch}
                            />
                            <i className='search icon'></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navigation