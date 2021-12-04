import {Accordion} from 'react-bootstrap';

const UiAccordationItem = ({eventKey, title, body})=>{

  return <Accordion.Item eventKey={eventKey}>
  <Accordion.Header>{title}</Accordion.Header>
  <Accordion.Body>
   {body}
  </Accordion.Body>
</Accordion.Item>
}


function UiAccordation(props)
{

  

  let elements ;
  let count= 0;
  for(let key in props.list)
  {
    if(props.list.hasOwnProperty(key)) 
    {
       elements = <Accordion.Item eventKey={count}>
       <Accordion.Header>{key}</Accordion.Header>
       <Accordion.Body>
        {props.list[key]}
       </Accordion.Body>
     </Accordion.Item>
       count++;
    }
    count= 0;
  }

    return    <Accordion> 
      {elements}
    </Accordion>; 
}

export default UiAccordation;