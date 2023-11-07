import React, { Component } from "react";
import styled from "styled-components";

class Pokemons extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
      if (response.ok) {
        const data = await response.json();
        this.setState({
          cards: data.results,
        });
      } else {
        console.error("Erro ao buscar dados da API.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  }

  render() {
    return (
      <section>
        <Ul>
          {this.state.cards.map((card, index) => (
            <Li key={index}>
              <h2>{card.name}</h2>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={card.name} />
            </Li>
          ))}
        </Ul>
      </section>
    );
  }
}

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border: 2px solid black;
`

export default Pokemons;
