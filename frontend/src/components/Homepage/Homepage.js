import './Homepage.css'
import cartoonScreen from '../../images/cartoon-screen.png'
import TripleImageLandingPage from './TripleImageLandingPage'
import SevenOvalLinks from './SevenOvalLinks'
import SearchWhatsHappening from './SearchWhatsHappening'

export default () => (
    <div id="homepage">
        <div className='half-row'>
            <div className='left-half'>
                <h1>
                    Celebrating 20 years of real connections on Romeetup
                </h1>
                <p>
                Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.
                </p>
            </div>
            <div className='right-half'>
                <img src={cartoonScreen}/>
            </div>
        </div>
        <TripleImageLandingPage/>
        <SevenOvalLinks/>
        <SearchWhatsHappening/>

    </div>
)
