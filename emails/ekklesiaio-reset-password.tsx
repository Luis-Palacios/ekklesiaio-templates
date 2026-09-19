import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "react-email";

interface VerifyEmailProps {
  verificationUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VerifyEmail = ({ verificationUrl }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://i.imgur.com/uMbPgy9.png"
          width="264"
          height="88"
          alt="EkklesiaIO"
          style={logo}
        />
        <Text style={tertiary}>
          We received a request to reset the password for your EkklesiaIO
          account associated with this email address ([User Email]).If you made
          this request, click the button below to choose a new password:
        </Text>
        <Section style={codeContainer}>
          <Link href={verificationUrl} style={code}>
            Reset Your Password
          </Link>
        </Section>
        <Text style={paragraph}>
          EkklesiaIO will never email you and ask you to disclose or verify your
          password, credit card, or banking account number.
        </Text>
      </Container>
      <Text style={footer}>Securely powered by EkklesiaIO.</Text>
    </Body>
  </Html>
);

VerifyEmail.PreviewProps = {
  verificationUrl: "https://example.com/verify",
} as VerifyEmailProps;

export default VerifyEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "440px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  fontSize: "16px",
  fontWeight: 500,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "1.5px",
  lineHeight: "21px",
  margin: "8px 25px 8px 25px",
  textAlign: "justify" as const,
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgb(2 45 83)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#f6ae37",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "26px",
  fontWeight: 700,
  letterSpacing: "1px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};
