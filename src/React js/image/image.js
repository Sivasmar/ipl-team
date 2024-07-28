export const Image=(prop)=>{
    const {source,altText,width,height}=prop
    return(
        <img src={source} alt={altText} width={width} height={height}></img>

    );
}