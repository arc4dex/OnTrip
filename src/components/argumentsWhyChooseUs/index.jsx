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
          <img src={paymentIcon} alt="paymentIcon" />
          <div>
            <h2>Payment methods</h2>
            <p>
              We have a lot of them, from cryptocurrencies to barter for
              potatoes
            </p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={simpleSearchIcon} alt="paymentIcon" />
          <div>
            <h2>Payment methods</h2>
            <p>
            We checked it out, even the kid did it, but it was my mom's friend's son
            </p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={supportIcon} alt="paymentIcon" />
          <div>
            <h2>Payment methods</h2>
            <p>
            Is there something you don't understand? Feel free to contact us
            </p>
          </div>
        </CardAWCU>
        <CardAWCU>
          <img src={weAreNiceIcon} alt="paymentIcon" />
          <div>
            <h2>Payment methods</h2>
            <p>
            Fantasy is over, there will be something really convincing here
            </p>
          </div>
        </CardAWCU>
      </ContainerAWCU>
    </>
  );
}

export default ArgumentsWhyChooseUs;
