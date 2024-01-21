import Button from "@/components/Button";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded-lg">
      <Container bgColor="brightOrange">
        <Icon icon="sedans" />
        <Title>Sedans</Title>
        <Text>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </Text>
        <Button color="brightOrange" />
      </Container>
      <Container bgColor="darkCyan">
        <Icon icon="suvs" />
        <Title>SUVs</Title>
        <Text>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </Text>
        <Button color="darkCyan" />
      </Container>
      <Container bgColor="veryDarkCyan">
        <Icon icon="luxury" />
        <Title>Luxurs</Title>
        <Text>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </Text>
        <Button color="veryDarkCyan" />
      </Container>
    </main>
  );
};

export default Home;
