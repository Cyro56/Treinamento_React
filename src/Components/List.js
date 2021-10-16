import Item from "./Item"

function List(){
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="ferrari" ano_lançamento={1996}/>
            <Item marca="Fiat" ano_lançamento={2012}/>
            <Item marca="Fiat" ano_lançamento={2021}/>
            <Item/>
        </ul>
        </>
    )
}

export default List