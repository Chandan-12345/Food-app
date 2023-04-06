import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = (props) =>{
    console.log(props, "home");
    return(
        <>
<Header {...props} />
<Hero  />
        </>
    )
}

export default Home