import Link from "next/link";
import { Text, Flex, theme } from "sriracha-ui";

export default function LinkList() {
  return (
    <>
      <Flex aiCenter p="1rem" pointer>
        <Link href="/" passHref>
          <Text
            as="p"
            lf
            pointer
            font="'Open Sans', sans-serif"
            color={theme.colors.gray1}
            hvrColor={theme.colors.red3}
          >
            Home
          </Text>
        </Link>
      </Flex>
      <Flex aiCenter p="1rem" pointer>
        <Link href="/docs" passHref>
          <Text
            as="p"
            lf
            font="'Open Sans', sans-serif"
            pointer
            color={theme.colors.gray1}
            hvrColor={theme.colors.red3}
          >
            Docs
          </Text>
        </Link>
      </Flex>
      <Flex aiCenter p="1rem" pointer>
        <Link href="/examples" passHref>
          <Text
            as="p"
            lf
            font="'Open Sans', sans-serif"
            pointer
            color={theme.colors.gray1}
            hvrColor={theme.colors.red3}
          >
            Examples
          </Text>
        </Link>
      </Flex>
    </>
  );
}
