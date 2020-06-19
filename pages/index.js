import Layout from "../components/Layout";
import { Text, Card, Button, theme } from "sriracha-ui";

export default function Home() {
  return (
    <Layout title="Sriracha UI">
      <Card shade w="95vw">
        <Text headFont="'Rancho', cursive">
          <Text as="h1" xxlf color={theme.colors.red6}>
            Sriracha UI
          </Text>
        </Text>
        <Text as="h2" lf>
          Lorem ipsum
        </Text>
        <Text as="p" color={theme.colors.lightBlue5}>
          A new change!
        </Text>
        <Button green>Click me!</Button>
        <Button red square>
          Click me!
        </Button>
        <Button lightBlue rounded>
          Click me!
        </Button>
        <Button purple oval shade hvrShadow={theme.shadows[2]}>
          Click me!
        </Button>
      </Card>
    </Layout>
  );
}
