import React, {} from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

function Fav() {
  const favPokemon = useSelector((state) => state.favPokemon)

  return (
    <div>
      <h3>Your Deck</h3>
      <div className="container">
        <div className="row">
          {favPokemon.map((pokemon) => (
          <div className="col-md-3 col-sm-6">
            <Card>
              <Card.Img variant="top" src={pokemon} />
            </Card><br></br>
            <br></br><br></br>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default Fav

