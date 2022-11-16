import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MFU Carpool</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="primary" onClick={() => signIn()}>
                Login
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// SSR, real-time
// export async function getServerSideProps() {
//   try {
//     const res = await fetch(`${process.env.URL_ROOT}/api/post`);
//     if (res.ok) {
//       const posts = await res.json();
//       return { props: { posts } };
//     }
//     throw Error("server response not ok");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("error");
//   }
// }

//SSG
// export async function getStaticProps() {
//   try {
//     const res = await fetch("http://localhost:9000/post");
//     if (res.ok) {
//       const posts = await res.json();
//       return { props: { posts }};
//     }
//     throw Error("server response not ok");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("error");
//   }
// }
//ISR (SSG+Update)
// export async function getStaticProps() {
//   try {
//     const res = await fetch("http://localhost:9000/post");
//     if (res.ok) {
//       const posts = await res.json();
//       return { props: { posts }, revalidate: 10 };
//     }
//     throw Error("server response not ok");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("error");
//   }
// }
