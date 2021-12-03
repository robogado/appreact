import { Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const Item = ({ id, titulo, imagen, precio, categoria }) => {
  return (
    <Container key={id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
      {/* <Link to={`/${categoria}/${id}`}> */}

      <Card border="secondary" className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3 figureBorde figureSize" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="text-center titArt">{titulo}</Card.Title>
          <Card.Subtitle className="p-2 titArt " style={{ textAlign: "center" }}><strong>$ {precio}</strong></Card.Subtitle>
          <Link to={`/${categoria}/${id}`}>
            <button className="btn btn-lg col-12 btn-dark bg-gradient text-white mt-2 mb-2">VER MAS</button>
          </Link>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </Container>
  )
}

export default Item
