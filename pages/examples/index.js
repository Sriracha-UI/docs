import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Box, Card, Flex, Text, theme } from "sriracha-ui";

export default function Examples({ slugs }) {
  return (
    <Layout title="Blog">
      <Card w="94%" maxW="88rem" shade bg={theme.colors.gray1}>
        <Text fontSize="2.7rem" m="2rem 0 0 0">
          Here's a list of my components. Click on one to dig deeper!
        </Text>
        <Flex wrap="true" jcEvenly m="5rem 0" stretch>
          {slugs.map((slug) => {
            return (
              <Link href={`examples/${slug.link}`} key={slug.link}>
                <Card w="30rem" p="0" sink pointer>
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
                  {slug.image ? (
                    <Box pointer>
                      <img src={slug.image} alt="component art" />
                    </Box>
                  ) : null}

                  <Text p="1rem" pointer>
                    {slug.description}
                  </Text>
                </Card>
              </Link>
            );
          })}
        </Flex>
      </Card>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("examples");
  const slugValues = files.map((filename) => filename.replace(".md", ""));
  const slugs = slugValues.map((slug) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("examples", slug + ".md"))
      .toString();
    const parsedMarkdown = matter(markdownWithMetaData);
    return {
      title: parsedMarkdown.data.title,
      image: parsedMarkdown.data.image,
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
