import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who is Amisha?</Accordion.Header>
        <Accordion.Body>
         Amisha=Bhonda
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What fruit do you like?</Accordion.Header>
        <Accordion.Body>
          I love mango.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>2+3=?</Accordion.Header>
        <Accordion.Body>
         2+3=5
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Which dept?</Accordion.Header>
        <Accordion.Body>
         ECE
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Who is Aarti?</Accordion.Header>
        <Accordion.Body>
         She is my sister.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Do you get angry?</Accordion.Header>
        <Accordion.Body>
         Yes very much
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default Faq;