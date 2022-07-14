import ArgumentsWhyChooseUs from "../argumentsWhyChooseUs";
import { ContainerWCU, HeaderWCU } from "./style";

function WhyChooseUs() {
  return (
    <ContainerWCU>
      <HeaderWCU>
        <h1>Why Choose Us?</h1>
        <div>
          <p>
            We really care about your lifestyle, and we make sure you have
            everything you need to work while exploring the world!
          </p>
        </div>
      </HeaderWCU>
      <ArgumentsWhyChooseUs />
    </ContainerWCU>
  );
}

export default WhyChooseUs;
