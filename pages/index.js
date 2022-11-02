export default function Home({ posts }) {
  return (
    <div>
      <h1>MFU Carpool</h1>
      {posts.map((post) => {
        return (
          <div key={post.postID}>
            <p>{post.title}</p>
            {/* <p>{post.price} baht</p> */}
          </div>
        );
      })}
    </div>
  );
}

// SSR, real-time
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.URL_ROOT}/api/post`);
    if(res.ok) {
      const posts = await res.json();
      return { props: {posts}};
    }
    throw Error('server response not ok');
  } catch (error) {
    console.error(error);
    return res.status(500).send('error');
  }
}

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
