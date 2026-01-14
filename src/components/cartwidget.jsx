import Producto from "./productcard"

const carrito=({items}) =>{
    return <>
        <div                            style={{display:'flex',alignItems:'start',justifyContent:'center',gridColumn:'primera/cuarta'}}>
            <button type="button"               style={{width:'80%',height:'90%', display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src="/carrito.svg" alt=""              style={{width:'10%'}}/>
            </button>
        </div>
        <div                style={{gridColumn:'primera/cuarta', display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-around',width:'100vw',overflow:'scroll',height:'auto' }}>
            <Producto img={'/remeraDeportiva.jpg'} texto={'Remeras deportivas'} ></Producto>
            <Producto img={'/remeraNegra.jpg'} texto={'Remera negra'} ></Producto>
            <Producto img={'/remeraAzul.png'} texto={'Remera azul'} ></Producto>
            <Producto img={'/remeraBlanca.jpg'} texto={'Remera blanca'} ></Producto>
            <Producto img={'/remeraVerde.png'} texto={'Remera verde'} ></Producto>
        </div>
    </>
    
}

export default carrito