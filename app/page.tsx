"use client";
import {
  Container,
  Link,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "@/app/ui/navbar";
import TitleSection from "@/app/ui/titleSection";
import { RiMailFill, RiCircleFill } from "react-icons/ri";
import neveralone from "@/public/neveralone.png";
import tictacgobblers from "@/public/tictacgobblers.png";
import oldportfolio from "@/public/old-portfolio.png";
import test from "@/public/test.png";
import { GridProject } from "./ui/project";
import { GridExperience } from "./ui/experience";
import Section from "./ui/section";
import { useEffect } from "react";

export default function Home() {
  const techs = ["Javascript", "Reactjs", "Vuejs", "Angular", "Java", "Python"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      className="flex  flex-col items-center justify-center"
      maxWidth="100%"
      width="650px"
    >
      <NavBar />
      <Section delay={0.1}>
        <Container id="home" className="mt-24 mb-19" maxWidth="100%">
          <Box
            display="flex"
            flexDirection="row" // Aligne les éléments horizontalement
            justifyContent="space-around" // Espace autour des éléments
            alignItems="center" // Centre les éléments verticalement
            height="30vh" // Prend 50% de la hauteur de l'écran
            width="100%" // Prend toute la largeur disponible
            gap={10} // Espace entre le texte et la box contenant l'image
          >
            <Box
              className="flex flex-col"
              justifyContent="center"
              alignContent="space-around"
              gap={4} // Espace entre le Heading et le Text
            >
              <Heading mb={1}>Fahim Gharsa</Heading>
              <Text>
                Salut, je suis développeur web !<br /> J&apos;aime concevoir et
                coder de belles choses simples.
              </Text>
              <Box className="flex mt-4">
                <Link href="mailto:fahimgharsa@protonmail.com">
                  <Button
                    leftIcon={<RiMailFill />}
                    fontSize="16px"
                    height="35px"
                    colorScheme="teal"
                    rounded="full"
                    variant="subtle"
                    color="orange.200"
                    bgColor="rgba(255, 165, 0, 0.1)"
                  >
                    Dites bonjour !
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              rounded="full"
              border="2px"
              borderStyle="solid"
              overflow="hidden"
              width="auto" // Ou un autre type de valeur
              height="auto"
              borderColor="whiteAlpha.800"
            >
              <Image src="/me.png" width={120} height={120} alt="me" />
            </Box>
          </Box>
        </Container>
      </Section>
      <Section delay={0.2}>
        <Container mt="10" id="about">
          <TitleSection num={1}>À propos de moi</TitleSection>

          <Text className="indent-8 mb-3 leading-7">
            Je suis actuellement en Mastère Developer Manager Full Stack à
            l&apos;EFREI, après avoir obtenu une Licence professionnelle en
            Informatique à l'Université de Paris. Passionné par le développement
            web et le Web Design, j&apos;aime créer des interfaces simples et
            efficaces, tout en assurant une bonne expérience utilisateur. Je
            m&apos;intéresse au développement web et au Web Design. <br />
            <br />
            J&apos;ai effectué un stage en tant que développeur Web en mai 2021,
            et depuis, c'est une merveilleuse aventure pour moi. Je suis
            constamment en train d'apprendre. Au fil des ans, j&apos;ai
            travaillé dur pour améliorer mes compétences, en utilisant les
            outils suivants :
          </Text>
          <SimpleGrid
            columns={[3, null, 2]}
            spacing={1}
            maxWidth="300px"
            mb={2}
          >
            {techs.map((tech, index) => (
              <Box key={index}>
                <Flex align="center">
                  <RiCircleFill size={10} color="#CA003D" />
                  <Text ml={2}>{tech}</Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          <Text className="mb-3 leading-7">
            En dehors du travail, j&apos;aime faire de la marche, dessiner et
            jouer aux jeux vidéos.
          </Text>
        </Container>
      </Section>
      <Section delay={0.3}>
        <Container id="experience" maxWidth="100%">
          <TitleSection num={2}>Mes Experiences</TitleSection>
          <SimpleGrid columns={[1]}>
            <GridExperience
              title="Stage – Développeur Web"
              stacks={["VueJS", "Firebase", "bootstrap"]}
              date="Mai - Jul 2021"
              company="Mentoré par un professionnel de la Société Générale"
              missions={[
                `Développement d'un site web éducatif destiné aux enfants de 7 à 13
            ans pour l'apprentissage de la programmation.`,
                `Réalisation des maquettes de l'ensemble du site, assurant une
            expérience utilisateur intuitive et adaptée aux enfants.`,
                `Implémentation de la partie
            backend avec Firebase pour la gestion de l'authentification, de la
            base de données et de l'hébergement.`,
              ]}
            ></GridExperience>
          </SimpleGrid>
        </Container>
      </Section>
      <Section delay={0.4}>
        <Container
          className="flex flex-col justify-center"
          id="project"
          maxWidth="100%"
        >
          <TitleSection num={3}>Mes Projets</TitleSection>
          {/* <SimpleGrid columns={[1, 1, 2]}></SimpleGrid> */}
          <SimpleGrid columns={[1]}>
            <GridProject
              title="Rating Software"
              stacks={["Angular", "strapi", "bulma"]}
              image={test}
              href="https://github.com/christopherad/RatingSoftware"
            >
              Site de notation de films et séries. les utilisateurs peuvent
              évaluer des films avec une double notation : une note pour
              l'expérience émotionnelle et une note détaillée basée sur
              plusieurs critères spécifiques.
            </GridProject>
            <GridProject
              title="Never Alone"
              stacks={["Java", "AndroidStudio", "Firebase"]}
              image={neveralone}
              href="https://github.com/fahimgha/AppMob-NeverAlone"
            >
              Application permettant de localiser ses amis en temps réel
            </GridProject>
            <GridProject
              title="Tic-Tac-Gobblers"
              stacks={["React.js"]}
              image={tictacgobblers}
              href="https://github.com/fahimgha/tic-tac-gobblers"
            >
              Un jeu comme Tic-Tac-Toe dans lequel vous pouvez engloutir les
              pièces de votre adversaire.
            </GridProject>
            <GridProject
              title="Portfolio (v1)"
              stacks={["Vuejs"]}
              image={oldportfolio}
              href="https://fahimgha.github.io/fahim/"
            >
              Un ancien site portfolio réalisé avec Vue.js
            </GridProject>
          </SimpleGrid>
          <Box display="flex" justifyContent="center" my={4}>
            <Link href="https://github.com/fahimgha">
              <Button
                display="inline-flex"
                textAlign="center"
                fontSize="16px"
                height="35px"
                colorScheme="teal"
                rounded="full"
                variant="subtle"
                color="orange.200"
                bgColor="rgba(255, 165, 0, 0.1)"
                text-decoration="none"
              >
                Voir plus de projets
              </Button>
            </Link>
          </Box>
        </Container>
      </Section>
      <footer>
        Built and designed by Fahim Gharsa. All rights reserved. ©
      </footer>
    </Container>
  );
}
