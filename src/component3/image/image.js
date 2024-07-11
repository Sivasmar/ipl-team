const Customimage =(prop)=>{
    const{source,alt,width,height}=prop
    return (
        <img src={source} alt={alt} width={width} height={height}/>
    )
}
export default Customimage;