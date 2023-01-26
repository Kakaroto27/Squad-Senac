import React from "react";

import { Link } from "react-router-dom";
import './feed.css'

import More from '../../images/more.svg'

import HeaderMain from "../../components/HeaderMain/HeaderMain";

function Feed() {
    return(
        <div>

            <HeaderMain />

            <main>

                <div className="cards" >

                    <div className="card" >

                        <header>
                            <h2>Consumindo api</h2>
                            <img src={More} />
                        </header>

                        <div className="line"></div>

                        <p>Bem vindos a Churrasqueada CPX! o melhor point da região.</p>

                        <div className="btns" >

                            <div className="btn-edit" >
                                <Link to="/edit" >
                                    <button>Edit</button>
                                </Link> 
                            </div>

                            <div className="btn-readmore" >
                                <Link to="/lermais" >
                                     <button>Ler mais</button>
                                </Link> 
                            </div>

                            <div className="btn-delete" >
                                <button>Delete</button>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
            
        </div>
    )
}

export default Feed