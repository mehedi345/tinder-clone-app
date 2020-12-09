import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Mask",
            url: "https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/3:2/w_768,c_limit/hive-contributor-profile-elon-musk.jpg"
        },
        {
            name: "Jeff Bejos",
            url: "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction)
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }
    return (
        <div className="tinderCards">
          <div className="tinderCard_cardContainer">
          {
                people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir)=> swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}

                    > 
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ))
            }

          </div>
            
        </div>
    );
};

export default TinderCards;