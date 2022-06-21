import Main from "../component/Main";
import Row from "../component/Row";
import requests from "../Requests";


const Home=()=>{
   
 return (
    <>
        <Main/>
        <Row title='UpComing' requests={requests.requestUpcoming}/>
        <Row title='Populer' requests={requests.requestPopular}/>
        <Row title='Trending' requests={requests.requestTrending}/>
        <Row title='Top Rated' requests={requests.requestTopRated}/>
        <Row title='Horror' requests={requests.requestHorror}/>
    </>
 )
}

export default Home;