import ListGroup from 'react-bootstrap/ListGroup';

function Customlist(prop) {
    const {iterable}=prop
  return (
    <ListGroup>
      {
        iterable.map(eachIteam=>{
            return(
                <>
                <ListGroup.Item>{eachIteam}</ListGroup.Item>
                </>
            )
        })
      }
      
    </ListGroup>
  );
}

export default Customlist;