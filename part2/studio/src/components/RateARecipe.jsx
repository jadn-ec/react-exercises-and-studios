let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating(){
    const isValidRating = props.rating >=1 && props.rating <=5;

    //return <h3>{stars[props.rating - 1]}</h3>;
    return <h3>{`${isValidRating === true ? stars[props.rating - 1] : null}`}</h3>

  }
 return <GiveRating/>;
 

}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
