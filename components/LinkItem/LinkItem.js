import Link from "next/link";

const LinkItem = ({ props, child }) => {
  const { href } = props;
  return (
    <Link href={href}>
      <a>{child}</a>
    </Link>
  )
}