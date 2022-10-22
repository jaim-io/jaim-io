import {
  Text,
  Box,
  Container,
  Button,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Link,
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useContext } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import SectionHeading from "../components/section-header";
import { InfoSection, DateSection } from "../components/sub-section";
import ImageGridItem from "../components/image-grid-item";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Fade from "../components/transitions/fade";
import NextLink from "next/link";
import TabContext from "../contexts/tab-context";

const Home: NextPageWithLayout = () => {
  const { tabIndex, setTabIndex } = useContext(TabContext);

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Computer Science student.
        </Box>
        <Section delay={0.2}>
          <SectionHeading>Education</SectionHeading>
          <InfoSection>
            <DateSection>
              09-2020 to{" "}
              <Text as="i" color="teal">
                present{" "}
              </Text>
            </DateSection>
            <Text as="i" color="teal">
              Computer Science
            </Text>
            <Box pl="10.25rem">
              at{" "}
              <NextLink href="https://www.rotterdamuas.com/" passHref>
                <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                  Rotterdam University of Applied Sciences
                </Link>
              </NextLink>
            </Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2019 to 03-2020</DateSection>
            <Text as="i" color="teal">
              Human Resource Management
            </Text>
            <Box pl="10.25rem">
              {" "}
              at{" "}
              <NextLink href="https://www.rotterdamuas.com/" passHref>
                <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                  Rotterdam University of Applied Sciences
                </Link>
              </NextLink>
            </Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2018 to 12-2018</DateSection>
            <Text as="i" color="teal">
              Business IT management
            </Text>
            <Box pl="10.25rem">
              {" "}
              at{" "}
              <NextLink href="https://www.rotterdamuas.com/" passHref>
                <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                  Rotterdam University of Applied Sciences
                </Link>
              </NextLink>
            </Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2012 to 07-2017</DateSection>
            <Text as="i" color="teal">
              HAVO Economics and Society
            </Text>
            <Box pl="10.25rem">at CSG Calvijn Vreewijk</Box>
          </InfoSection>
          <br />
          <SectionHeading>Experience</SectionHeading>
          <InfoSection>
            <DateSection>
              08-2022 to{" "}
              <Text as="i" color="teal">
                present{" "}
              </Text>{" "}
            </DateSection>
            <Text as="i" color="teal">
              (Intern) Software Engineer DevOps
            </Text>{" "}
            at{" "}
            <NextLink href="https://www.swecogroup.com/" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Sweco
              </Link>
            </NextLink>
          </InfoSection>
          <InfoSection>
            <DateSection>04-2019 to 09-2019</DateSection>
            <Text as="i" color="teal">
              Sales promotor
            </Text>{" "}
            at{" "}
            <NextLink href="https://www.pepperminds.com/" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Pepperminds
              </Link>
            </NextLink>
          </InfoSection>
          <InfoSection>
            <DateSection>01-2019 to 06-2019</DateSection>
            <Text as="i" color="teal">
              Store clerk
            </Text>{" "}
            at{" "}
            <NextLink href="https://www.ah.nl/over-ah" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Albert Heijn
              </Link>
            </NextLink>
          </InfoSection>
          <InfoSection>
            <DateSection>08-2018 to 09-2018</DateSection>
            <Text as="i" color="teal">
              Waiter & Bartender
            </Text>{" "}
            at{" "}
            <NextLink href="https://venw.com/" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Verwiel en Wijngaard
              </Link>
            </NextLink>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2017 to 06-2018</DateSection>
            <Text as="i" color="teal">
              Cashier & Customer service
            </Text>{" "}
            at{" "}
            <NextLink href="https://www.makro.nl/over-makro" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Marko
              </Link>
            </NextLink>
          </InfoSection>
          <InfoSection>
            <DateSection>06-2015 to 06-2017</DateSection>
            <Text as="i" color="teal">
              Store clerk
            </Text>{" "}
            at{" "}
            <NextLink href="https://www.ah.nl/over-ah" passHref>
              <Link color={useColorModeValue("#000", "#fff")} target="_blank">
                Albert Heijn
              </Link>
            </NextLink>
          </InfoSection>
          <br />
          <Tabs
            isLazy
            isFitted
            align="center"
            variant="line"
            colorScheme={useColorModeValue("#000", "#fff")}
            borderColor={useColorModeValue("white", "#525252")}
            onChange={(index) => setTabIndex(index)}
            defaultIndex={tabIndex}
          >
            <TabList borderBottomWidth="2px" borderRadius="2px" color="gray">
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "#fff"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff"),
                }}
              >
                <Text fontSize={20}>Languages</Text>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "#fff"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff"),
                }}
              >
                <Text fontSize={20}>Frameworks</Text>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "#fff"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff"),
                }}
              >
                <Text fontSize={20}>DevOps</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Fade>
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem
                      href="/languages/golang"
                      thumbnail="/svgs/gopher.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Golang
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/languages/c-sharp"
                      thumbnail="/svgs/c-sharp.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        C#{" "}
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/languages/python"
                      thumbnail="/svgs/python.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Python
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/languages/nodejs"
                      thumbnail="/svgs/nodejs.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Node.js
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/languages/sql"
                      thumbnail="/svgs/sql.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        SQL
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/languages/other"
                      thumbnail="/svgs/other.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Other
                      </Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade>
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem
                      href="/frameworks/dotnet"
                      thumbnail="/svgs/dotnet.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        .NET
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/frameworks/aspnet-core"
                      thumbnail="/svgs/dotnet-core.svg"
                      tooltip="ASP.NET Core"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        ASP.NET ...
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/frameworks/ef-core"
                      thumbnail="/svgs/dotnet-core.svg"
                      tooltip="Entity Framework Core"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Entity Fr...
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/frameworks/react"
                      thumbnail="/svgs/react.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        React
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/frameworks/vue"
                      thumbnail="/svgs/vue.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Vue
                      </Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade>
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem
                      href="/devops/docker"
                      thumbnail="/svgs/docker.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Docker
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/devops/kubernetes"
                      thumbnail="/svgs/kubernetes.svg"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Kubernetes
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem
                      href="/devops/githubactions"
                      thumbnail="/svgs/githubactions.svg"
                      tooltip="GitHub Actions"
                    >
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        GitHub Act...
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/githubactions.svg">
                      <Button
                        leftIcon={<AiOutlineDoubleRight />}
                        borderRadius="lg"
                      >
                        Actions
                      </Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </Container>
    </Layout>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Home;
