const OrderList = ({array})=>{
    return (
        <>
        <ol>
            {array.map((each,index)=>(
                <li key={index}>{each}</li>
            )
        )}
        </ol>
        </>
    );
};
export default OrderList;