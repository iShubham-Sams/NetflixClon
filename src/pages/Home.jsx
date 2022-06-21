import Main from "../component/Main";
import Row from "../component/Row";
import requests from "../Requests";


const Home=()=>{
   
 return (
    <>
        <Main/>
        <Row rowId='1' title='UpComing' requests={requests.requestUpcoming}/>
        <Row rowId='2' title='Populer' requests={requests.requestPopular}/>
        <Row rowId='3' title='Trending' requests={requests.requestTrending}/>
        <Row rowId='4' title='Top Rated' requests={requests.requestTopRated}/>
        <Row rowId='5' title='Horror' requests={requests.requestHorror}/>
    </>
 )
 }
export default Home;