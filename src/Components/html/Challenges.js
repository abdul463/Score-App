import '../css/Challenges.css'
import Card from "./Card";
import Heading from "./Heading";
import Title from "./Title";

function Challenges(){
    return(
        <div className="chal-main">
            <Title></Title>
            <Heading></Heading>
            <div className="chl-card-cnt">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    );
}
export default Challenges