import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface IContactFormProps {
  message: string;
  name: string;
  email: string;
}

const ContactForm: React.FC<IContactFormProps> = ({ message, name, email }) => {
  return (
    <Html>
      <Preview>New message from {name}</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                This message is coming from your portfolio website
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender Email: {email} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactForm;
