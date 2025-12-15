export function ListaArticulos(props){
    return(
        <div>
            <h2>Lista de Articulos para comprar</h2>
            <ul>
                {props.items.map(item=>(
                    <li key={item.id}>
                         {item.nombre} - ${item.precio}
                    </li>
                ))}
            </ul>
        </div>
    )
}