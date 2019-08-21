import React from "react";
import {Button} from "../components/Button/Button"
import { DropDownMenu } from "../components/Menu/dropDownMenu";

export function About(){
    return(
        <React.Fragment>
            <div className="bx-dashboard-wrapper">
            
                   <div className="bx-dashboard-container">
                    <Button home={true} >
                        <DropDownMenu/>
                    </Button>
                    <div className="bx-dashboard-wrapper">
                    <h1>
                        About "personAPI"
                    </h1>
                        <div className="bx-dashboard-wrapper">
                        <p>"PersonAPI" it's a project created to introduce "Belatrix" interns to the technologies flooded within the 
                            company in real day-to-day projects. Is a web page that is responsible for handling queries to a 
                            database that are made trogh an Api, it was created to be able to maintain an updated database of employees, 
                            and to establish family relationships between them.  
                        </p>
                       
                            <p>
                                Technologies used:
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>ReactJs</li>
                                <li>Maven</li>  
                            </p>

                        <p>
                            Product Owner:
                            <li>
                                Agustin Ochoa Venturella
                            </li>
                        </p>
                        <p>
                            Instructors
                            <li> Porco Ezequiel</li>
                        </p>
                        <p>
                            
                            Team:
                                
                                <li> Balsas Fernando</li>
                                <li> Brosio Daniel</li>
                                <li> Mazagatti Martin</li>
                                <li> Luna Agustin Ricardo</li>
                                <li> Salomon Ivan</li>
                        </p> 
                    </div>
                    </div>
                    </div>
            </div>
        </React.Fragment>
    );
}


