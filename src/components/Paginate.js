import React from 'react';

const Paginate = ({ pokemonPerPage, totalPokemos, paginate, currentPage }) => {
    const pagesNumber = [];//1-2-3-4-5-6-7-8-9-10-11-12.....-26
    
    // La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
    // Math.ceil( totalPokemos / pokemontPerPage) 10/260 o el largo del arrat residents =26
    for(let i=1; i <= Math.ceil( totalPokemos / pokemonPerPage);i++){
        pagesNumber.push(i)
    }
    const getColor = num => {
        if(num === currentPage){
            return '#ffffff'
        }
        }
    return(
    <nav className='navPagination'>
        <ul>
            {
                pagesNumber.map(num => (
                    <li key={num}
                    style={{background:getColor(num)}}
                    onClick={() =>paginate(num)}>
                        {num}
                    </li>
                ))
            }
        </ul>
    </nav>
    )
}
export default Paginate;