import React, { useState, useEffect } from 'react'
import {
    useParams
} from "react-router-dom";
import '../App.css'

function Detail() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams()

  useEffect(() => {
    console.log(id, '<<<<<ini idnya')
    const searchPokemon = require('pokemontcgsdk')
    searchPokemon.card.find(id)
      .then(result => {
        console.log(result.card, '<<<<hasil')
        setPokemon(result.card)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id]);
    
  return (
    <div>
      <h2>{ pokemon.name }</h2>
      <img src={ pokemon.imageUrl } alt={ pokemon.name } />
      <p>{ pokemon.rarity } , { pokemon.types }</p>
      <center>
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Damage</th>
        </tr>
        {pokemon.attacks && pokemon.attacks.map(x =>
        <tr>
          <td>{x.name}</td>
          <td>{x.text ? x.text : "No description"}</td>
          <td>{x.damage}</td>
        </tr>
        )}
      </table>
      </center><br></br><br></br><br></br>
    </div>
  );
}


export default Detail

