import paymentIcon from "../../assets/paymentIcon.svg";
import simpleSearchIcon from "../../assets/simpleSearchIcon.svg";
import supportIcon from "../../assets/supportIcon.svg";
import weAreNiceIcon from "../../assets/weAreNiceIcon.svg";
import { CardAWCU, ContainerAWCU } from "./style";

function ArgumentsWhyChooseUs() {
  return (
    <>
      <ContainerAWCU>
        <CardAWCU>
          <img src={simpleSearchIcon} alt="paymentIcon" />
          <div>
            <h2>Specific for You</h2>
            <p>
              We only choose places that have minimum requirements for digital
              nomads to stay
            </p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={supportIcon} alt="paymentIcon" />
          <div>
            <h2>24/7 Support</h2>
            <p>
              Is there something you don't understand? Feel free to contact us
            </p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={paymentIcon} alt="paymentIcon" />
          <div>
            <h2>Payment Methods</h2>
            <p>We have a lot of them, from cryptocurrencies to PIX transfers</p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={weAreNiceIcon} alt="paymentIcon" />
          <div>
            <h2>We Are Nice</h2>
            <p>
              Simple choose process, so you don't waste time on boring
              bureaucracy
            </p>
          </div>
        </CardAWCU>
      </ContainerAWCU>
    </>
  );
}

export default ArgumentsWhyChooseUs;
