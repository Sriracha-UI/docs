import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Card, Flex, Text, Box, theme } from "sriracha-ui";

export default function Docs({ slugs }) {
  return (
    <Layout title="Blog">
      <Card w="94%" maxW="88rem" shade bg={theme.colors.gray1}>
        <Flex aiCenter>
          <Text xlf font="'Rancho', cursive">
            Sriracha Doc's
          </Text>
          <Box sqr="3.2rem">
            <img src="/favicon-32x32.png" />
          </Box>
        </Flex>
        <Text as="h3" fontSize="1.8rem" w="80%">
          Start building beautiful UI's with an easy to learn and flexible React
          styled component library!
        </Text>
        <Flex wrap="true" drape acCenter m="5rem 0" stretch visible>
          {slugs.map((slug) => {
            return (
              <Link href={`docs/${slug.link}`} key={slug.link}>
                <Card w="96%" p="0" sink pointer>
                  <Text
                    m="2rem 0"
                    pointer
                    bold
                    lf
                    color={theme.gray9}
                    hvrColor={theme.gray6}
                  >
                    {slug.title}
                  </Text>
                  <Text p="1rem" pointer>
                    {slug.description}
                  </Text>
                </Card>
              </Link>
            );
          })}
          <Link href="/examples">
            <Card w="96%" p="0" pointer sink>
              <Text
                m="2rem 0"
                pointer
                bold
                lf
                color={theme.gray9}
                hvrColor={theme.gray6}
              >
                Sriracha's Components
              </Text>
              <Text p="1rem" pointer>
                Check out Sriracha's selection of flexible components to start
                speeding up the development of beautiful UI's today! 🔥
              </Text>
            </Card>
          </Link>
        </Flex>
      </Card>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("docs");
  const slugValues = files.map((filename) => filename.replace(".md", ""));
  const slugs = slugValues.map((slug) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("docs", slug + ".md"))
      .toString();
    const parsedMarkdown = matter(markdownWithMetaData);
    return {
      title: parsedMarkdown.data.title,
      description: parsedMarkdown.data.description,
      link: slug,
    };
  });

  return {
    props: {
      slugs,
    },
  };
};
