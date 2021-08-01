import './Headspace.css';
import Mockup from '../../../../assets/images/k20Mockup.svg';
import Button from '../../../../components/Button'
import { Link } from 'react-router-dom';

function HeadSpace() {
    return (
        <section className="mainSection">
            <div className="mainOverview">
                <div className="overviewText">
                    <h2 className="overviewText_heading">Legion OS</h2>
                    <p className="overviewText_paragraph">
                    A AOSP based project that is set to show its power in Battery, Performance and Customization without compromising security.
                    </p>
                    <Link to="/downloads">
                        <Button title="Download Now"/>
                    </Link>
                </div>
                <div className="phoneImage">
                    <img
                    src={Mockup}
                    alt="Legion OS"
                    />
                </div>
            </div>
      </section>
    )
}

export default HeadSpace
