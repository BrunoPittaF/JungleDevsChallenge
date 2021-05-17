import { Container } from './style';
import imageShared from '../../images/imageShared.png';

function Share(){
    return(
        <Container>
            <div className="wrapper">
            <h2>
            Share your home, nanny and costs
            </h2>
            <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#dasd">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
            </p>
            <a href="#basd">Ready to get started?</a>
            </div>
            
            <img src={imageShared} alt="content function about app" />
        </Container>
    )
}

export default Share;