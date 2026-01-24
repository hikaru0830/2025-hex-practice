import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import LottieVan from '../../assets/travelVan.lottie'
import Bicycle from '../../assets/bicycle.json'

// npm install @lottiefiles/dotlottie-react

function App() {
    return (
        <>
        <DotLottieReact
            src={LottieVan}
            background="transparent"
            speed="1"
            style={{ width: '1920px'}}
            loop="true"
            renderConfig={{
                autoResize: true, 
            }}
            autoplay />
        <DotLottieReact
            data={JSON.stringify(Bicycle)}
            background="transparent"
            speed="1"
            style={{ width: '1920px'}}
            loop="true"
            renderConfig={{
                autoResize: true, 
            }}
            autoplay />
        </>
    );
}

export default App