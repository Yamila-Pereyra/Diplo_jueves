export function TituloPrincipal(props) {

    return(
        <header style={ { backgroundColor:"#97df11ff", padding: "10px"}}>
            <h1 style={ { backgroundColor:"#df7f11ff", padding: "10px"}}>{props.titulo}  </h1>
            <h2 style={ { backgroundColor:"#1122dfff", padding: "10px"}}>{props.titulo}  </h2>

        </header>
    )
}