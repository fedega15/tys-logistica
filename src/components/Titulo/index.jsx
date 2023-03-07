import Container from 'react-bootstrap/Container';


function Title() {
  return (
    <Container fluid class='bg-secondary bg-gradient text-white ' 
    style= {{display:'flex', justifyContent:'center', height: '60px', fontSize: '1.6rem', color:"white", background:"gray"}} >
  <div  >
  Home
</div>
    </Container>
  );
}

export default Title;