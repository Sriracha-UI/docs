import Link from "next/link";
import Head from "next/head";
import {
  Wrapper,
  NavBar,
  Cabinet,
  useCabinet,
  Box,
  Flex,
  Text,
  theme,
} from "sriracha-ui";
import MenuRounded from "@material-ui/icons/MenuRounded";
import LinkList from "./LinkList";

const navHeight = "5rem";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  const { isCabinet, toggleCabinet } = useCabinet();
  return (
    <Wrapper aiStart minH="100%">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <NavBar bg={theme.colors.gray9} drape shadow={theme.shadows[3]}>
          <Flex stretch jcBetween aiCenter h={navHeight}>
            <Box
              className="nav-cabinet-menu"
              m="0 0 0 2rem"
              pointer
              onClick={toggleCabinet}
            >
              <MenuRounded
                style={{ fontSize: "3.8rem", color: theme.colors.gray1 }}
              />
            </Box>
            <Box className="nav-link-list">
              <Flex m="0 0 0 2rem">
                <LinkList />
              </Flex>
            </Box>
            <Link href="/">
              <Flex aiCenter pointer h={navHeight}>
                <Link href="/" passHref>
                  <Text
                    as="a"
                    xlf
                    color={theme.colors.gray1}
                    hvrColor={theme.colors.red3}
                    pointer
                    font="'Rancho', cursive"
                    m="0"
                  >
                    Sriracha
                  </Text>
                </Link>
                <Box sqr="32px" pointer>
                  <img src="/favicon-32x32.png" alt="sriracha pepper" />
                </Box>
                <Box w="2.4rem" />
              </Flex>
            </Link>
          </Flex>
        </NavBar>
      </header>
      <Cabinet invert shade active={isCabinet} toggle={toggleCabinet}>
        <LinkList />
      </Cabinet>
      <Flex drape stretch>
        <Box h={navHeight} />
        {children}
      </Flex>
    </Wrapper>
  );
}
