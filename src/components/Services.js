import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state= {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: 'This free cocktail recipe offers a blend of sweet and sour flavors. Pour whiskey, lemon juice and simple syrup into an ice-filled mixer.  '
            }, 
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Hiking the Endless Mountainsby Jeff Mitchell This second edition of Jeff Mitchells book lists 78 hikes, including 4 backpacking trails. This newly updated and US$17.95'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: 'Visit one of Vancouvers top tourist attractions, Capilano Suspension Bridge Park, with our free shuttle service. Visit our site to learn more'
            }, 
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: 'What is the strongest beer in the world? The strongest beer in the world is the Brewmeister Snake Venom. Bottled at 67.5% ABV, the Scottish beer is easily the heaviest on offer.'
            }
        ]
    }
    render() {
        return (
            <section className="services"> 

                <Title title="services" />
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                   return <article key={index} className="service"> 
                   <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                   </article>
                   })}
               </div>
            
            </section>
        )
    }
}
