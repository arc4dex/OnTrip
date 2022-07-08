import ArgumentsWhyChooseUs from "../argumentsWhyChooseUs";
import { ContainerWCU, HeaderWCU } from "./style";

function WhyChooseUs() {
  return (
    <ContainerWCU>
      <HeaderWCU>
        <h1>Why Choose Us?</h1>
        <div>
          <p>
            The main reason is because our competitors have disgusting sites,
            but we can' t write that here, so the text here will be different
          </p>
        </div>
      </HeaderWCU>
      <ArgumentsWhyChooseUs />
    </ContainerWCU>
  );
}

export default WhyChooseUs;
