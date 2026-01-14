const carta = ({img,texto}) =>{
    return <div style={{display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center',backgroundColor:'white', padding:'1%',borderRadius:'100px',width:'30%',height:'40%'}}>
                <img src={img} style={{width:'80%',height:'90%'}} alt=""/>
                <span style={{color:'black'}}>{texto}</span>
                
            </div>
}
export default carta