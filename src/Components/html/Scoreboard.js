import '../css/Scoreboard.css'
function Scoreboard(){
    let players=[
        {
            playername:"Virat Kohli",
            team:"India",
            runs:6000
        },
        {
            playername:"Dhoni",
            team:"India",
            runs:10000
        },
        {
            playername:"Hardik pandya",
            team:"India",
            runs:4000
        },
        {
            playername:"Ashwin",
            team:"India",
            runs:3000

        },
        {
            playername:"Sehwag",
            team:"India",
            runs:7000
        },{
            playername:"kan williamson",
            team:"NEWZEALAND",
            runs:6500
        },
        {
            playername:"latham",
            team:"NEWZEALAND",
            runs:9000
        }
    ]
    
    players.sort((a,b)=>{
         return b.runs - a.runs; 
        }
        );
    return (
        <div class="content-ctn">
            <table className='score-table'>
                <tr class="table-heading">
                    <th>PlayerName</th>
                    <th>Team</th>
                    <th>Runs</th>
                </tr>
                <tr>
                    <td>{players[0].playername}</td>
                    <td>{players[0].team}</td>
                    <td>{players[0].runs}</td>
                </tr>
                <tr>
                    <td>{players[1].playername}</td>
                    <td>{players[1].team}</td>
                    <td>{players[1].runs}</td>   
                </tr>
                <tr>
                    <td>{players[2].playername}</td>
                    <td>{players[2].team}</td>
                    <td>{players[2].runs}</td>   
                </tr>
                <tr>
                    <td>{players[3].playername}</td>
                    <td>{players[3].team}</td>
                    <td>{players[3].runs}</td>   
                </tr>
                <tr>
                    <td>{players[4].playername}</td>
                    <td>{players[4].team}</td>
                    <td>{players[4].runs}</td>   
                </tr>
                <tr>
                    <td>{players[5].playername}</td>
                    <td>{players[5].team}</td>
                    <td>{players[5].runs}</td>   
                </tr>
                <tr>
                    <td>{players[6].playername}</td>
                    <td>{players[6].team}</td>
                    <td>{players[6].runs}</td>   
                </tr>
            </table>
        </div>

    )
}

export default Scoreboard;