function List(props){
    const games = [{name:"cricket",players:11,status:true},
                   {name:"football",players:11,status:false},
                   {name:"hockey",players:11,status:false},
                   {name:"basketball",players:11,status:true},
                   {name:"tennis",players:11,status: false},
                   {name:"rugby",players:11,status:true}]

    const game=(games.map(game => <li key={games.id}>{game.name}:&nbsp;
                                                     {game.players}
                                  </li>));

    return(<>
        <h3>{props.category}</h3>
        <ul>
            {game}
        </ul>
        </>);
}
export default List